import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function DogDescription() {
  const [dog, setDog] = useState({});
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();

  const fetchSingleDog = async () => {
    const response = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    );
    const data = await response.json();
    console.log(data);
    setDog(data[0]);
  };
  useEffect(() => {
    fetchSingleDog();
  }, [name]);
  const goBack = () => {
    console.log("back button clicked");
    navigate("/dog");
  };
  return (
    <div>
      <div className="single-dog">
        <h3>{dog?.name} </h3>
        <img
          alt="single-dog"
          src={`https://cdn2.thedogapi.com/images/${dog?.reference_image_id}.jpg`}
          width={300}
        />
        <h4> {dog?.breed_for} </h4>
        <h4> {dog?.breed_group} </h4>
        <h4> {dog?.life_span} </h4>
        <h4> {dog?.temperament} </h4>
        <button onClick={goBack}> BACK </button>
      </div>
    </div>
  );
}
