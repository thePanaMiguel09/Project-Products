import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "../Styles/Details.css";
import { api } from "../../commons/api";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
function Details() {
  const { id } = useParams();
  console.log(id);

  const [comicData, setComicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "characters/" + id; // Especifica el endpoint
        const params = { limit: 10 }; // Otros parámetros que desees pasar
        const result = await api.get(endpoint, params);

        if (result.data.results.length > 0) {
          setComicData(result.data.results[0]); // Guardamos el primer resultado en comicData
        }
        console.log(result.data.results);
      } catch (error) {
        console.log("Error while getting character data", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="containerPrincipal">
      <NavBar />
      {comicData.length !== 0 ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={comicData.thumbnail.path + ".jpg"} />
          <Card.Body>
            <Card.Title> {comicData.name}</Card.Title>
            <Card.Text>{comicData.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <div> Cargando</div>
      )}
      <Footer />
    </div>
  );
}

export default Details;
