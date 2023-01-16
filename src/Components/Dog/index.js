import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Dog() {
  const [dogs, setDogs] = useState([]);
  const fetchDogs = async () => {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await response.json();
    console.log(data.slice(0, 40));
    setDogs(data.slice(0, 40));
  };
  useEffect(() => {
    fetchDogs();
  }, []);
  return (
    <div className="dog-container">
      {dogs.map((item) => {
        const {
          id,
          image: { url },
          name
        } = item;
        return (
          <div key={id} className="doggie">
            <Link to={`/dog/${name}`}>
              <img alt="doggies" src={url} width={250} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
