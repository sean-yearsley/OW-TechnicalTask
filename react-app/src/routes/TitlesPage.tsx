import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllTitles } from "../api/fetchApi";
import { Title } from "../types/Title";

function TitlesPage() {
  const navigate = useNavigate();

  // State
  const [titles, setTitles] = useState<Title | Title[]>([]);

  // Events
  useEffect(() => {
    retrieveTitleData();
  }, []);

  /** Gets all of the title data from the API */
  const retrieveTitleData = async () => {
    await fetchAllTitles()
      .then(data => {
        setTitles(data);
      })
      .catch(err => {
        console.log("Error");
      });
  }

  /** Navigate to the details page for the specific title */
  const goToDetailsPage = (titleNumber: string) => {
    navigate("/details/" + titleNumber);
  }

  return (
    <>
      <h1>Titles Page</h1>

      <button type="button" onClick={() => goToDetailsPage('243751')}>
        243751
      </button>
      <br /><br />
      <button type="button" onClick={() => goToDetailsPage('LN78969')}>
        LN78969
      </button>
    </>
  );
}

export default TitlesPage;
