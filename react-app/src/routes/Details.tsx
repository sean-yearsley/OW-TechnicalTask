import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const titleNumber = useParams();
  
  const backToTitlesPage = () => {
    navigate("/");
  }

  useEffect(() => {      
      console.log("Loaded - Details", titleNumber);
  }, []);

  return (
    <>
      <h1>Details Page</h1>

      <button type="button" onClick={backToTitlesPage}>
        Back
      </button>
    </>
  );
}

export default Details;
