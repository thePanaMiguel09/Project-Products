import "../../App.css";
import "../Styles/home.css";
import {Navbar} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

function Home() {
  return (
    <div className="App">
      <div className="">
        <Navbar expand="lg" className="bg-body-tertiary">
          <div>
            <NavDropdown title="NEWS" id="basic-nav-dropdown">
              <NavDropdown.Item>
                Hola mundo
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COMICS" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="CHARACTERS" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="MOVIES" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="TV SHOWS" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="GAMES" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="VIDEOS" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="MORE" id="basic-nav-dropdown"></NavDropdown>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default Home;
