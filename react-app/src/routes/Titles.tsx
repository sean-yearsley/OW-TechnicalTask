import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Titles() {
  const navigate = useNavigate();

  const goToDetailsPage = (titleNumber: string) => {
    navigate("/details/" + titleNumber);
  }

  useEffect(() => {
    console.log("Loaded - Titles");
  }, []);

  return (
    <>
      <h1>Titles Page</h1>

      <button type="button" onClick={() => goToDetailsPage('ABC123')}>
        ABC123
      </button>
      <br/><br/>
      <button type="button" onClick={() => goToDetailsPage('PQ876')}>
        PQ876
      </button>
    </>
  );
}

export default Titles;
