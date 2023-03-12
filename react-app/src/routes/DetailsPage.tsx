import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSpecificTitleDetails } from "../api/fetchApi";
import Map from "../components/DetailsPage/Map";
import TenureBadge from "../components/DetailsPage/TenureBadge";
import Button from "../components/Shared/Button";
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
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col">
        <div>
          <Button text="Back" onClickHandler={backToTitlesPage} />
        </div>
        {specificTitle && (
          <div className="flex flex-col space-x-0 mt-4 md:flex-row md:space-x-8">
            <div className="w-72">
              <div>
                <h2 className="text-2xl">{specificTitle.titleNumber} <TenureBadge text={specificTitle.tenure}/></h2>
              </div>
              <div className="mt-2">
                {specificTitle.propertyAddress}
              </div>
            </div>
            <div className="w-72 mt-2 md:mt-0">
              <Map x={specificTitle.x} y={specificTitle.y} propertyAddress={specificTitle.propertyAddress} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
