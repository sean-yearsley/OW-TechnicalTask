import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSpecificTitleDetails } from "../api/fetchApi";
import { Title } from "../types/Title";

function DetailsPage() {
  const navigate = useNavigate();
  const { titleNumber } = useParams();

  // State
  const [title, setTitle] = useState<Title>();

  // Events
  useEffect(() => {
    getSpecificTitleDetails();
  }, []);

  /** Gets the specific title from the API via the fetchApi function */
  const getSpecificTitleDetails = async () => {
    if (titleNumber != undefined) {
      await fetchSpecificTitleDetails(titleNumber)
        .then(data => {
          setTitle(data);
        })
        .catch(err => {
          console.log("Error");
        });
    }
  }

  /** Navigate back to the titles page */
  const backToTitlesPage = () => {
    navigate("/");
  }

  return (
    <>
      <h1>Details Page</h1>

      <button type="button" onClick={backToTitlesPage}>
        Back
      </button>
    </>
  );
}

export default DetailsPage;
