import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSpecificTitleDetails } from "../api/fetchApi";
import Map from "../components/DetailsPage/map";
import { Title } from "../types/Title";

function DetailsPage() {
  const navigate = useNavigate();
  const { titleNumber } = useParams();

  // State
  const [specificTitle, setSpecificTitle] = useState<Title>();

  // Events
  useEffect(() => {
    getSpecificTitle();
  }, []);

  /** Gets the specific title from the API via the fetchApi function */
  const getSpecificTitle = async () => {
    if (titleNumber != undefined) {
      await fetchSpecificTitleDetails(titleNumber)
        .then(data => {
          setSpecificTitle(data);
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

      {specificTitle && (
        <Map x={specificTitle.x} y={specificTitle.y} propertyAddress={specificTitle.propertyAddress}/>
      )}
    </>
  );
}

export default DetailsPage;
