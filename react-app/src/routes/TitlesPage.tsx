import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllTitles } from "../api/fetchApi";
import Table from "../components/TitlesPage/Table";
import { Title } from "../types/Title";

function TitlesPage() {
  const navigate = useNavigate();

  // State
  const [titles, setTitles] = useState<Title[]>([]);

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
    <div className="grid grid-cols-10 gap-4 justify-items-center mt-10 md:grid-cols-6 lg:grid-cols-12">
      <div className="col-start-2 col-span-8 md:col-start-2 md:grid-cols-6 md:col-span-4 lg:col-start-5 lg:col-span-4">
        <Table data={titles} onDataRowClick={goToDetailsPage} />
      </div>
    </div>
  );
}

export default TitlesPage;
