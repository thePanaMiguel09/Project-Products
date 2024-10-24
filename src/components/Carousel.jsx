import "./CarouselStyles.css";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../commons/api";
import Image from "react-bootstrap/Image";

function ContentCarousel() {
  const navigate = useNavigate();
  const toDetails = (id) => {
    navigate("/details/" + id);
  };

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "characters"; // Especifica el endpoint
        const params = { limit: 10 }; // Otros parámetros que desees pasar
        const result = await api.get(endpoint, params);

        setCharacterData(result.data.results);
        console.log(result.data.results);
      } catch (error) {
        console.log("Error while getting character data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Carousel fade className="carouselSize itemsPosition">
      {characterData.length ? (
        characterData.map((element) => (
          <Carousel.Item key={element.id} className="contenedor">
            <div className="carouselSizeItem">
              <Image
                className="carouselImage "
                src={element.thumbnail.path + ".jpg"}
                alt={element.name}
              />
            </div>

            <div
              className="description textColor"
              onClick={() => toDetails(element.id)}
            >
              {element.name}
            </div>
          </Carousel.Item>
        ))
      ) : (
        <p>Cargando.....</p>
      )}
    </Carousel>
  );
}

export default ContentCarousel;
