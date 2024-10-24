import { Nav, NavItem, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navBarStyles.css";

function NavBar() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <Nav className="navColor colorText flex-row navBarContainer">
        <NavItem>
          <Nav.Link className="navText" eventKey="1" onClick={toHome}>
            Home
          </Nav.Link>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navBarItemColor navText ">NEWS</span>}>
            <NavDropdown.Item>LASTEST NEWS</NavDropdown.Item>
            <NavDropdown.Item>ALL NEWS</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">COMICS</span>}>
            <NavDropdown.Item>REALEASE CALENDAR</NavDropdown.Item>
            <NavDropdown.Item>MARVEL UNLIMITED</NavDropdown.Item>
            <NavDropdown.Item>STORM BREAKERS</NavDropdown.Item>
            <NavDropdown.Item>READING GUIDES</NavDropdown.Item>
            <NavDropdown.Item>PRINT SUBSCRIPTIONS</NavDropdown.Item>
            <NavDropdown.Item>MARVEL UNLIMITED</NavDropdown.Item>
            <NavDropdown.Item>ALL COMICS</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">CHARACTERS</span>}>
            <NavDropdown.Item>ALL CHARACTERS</NavDropdown.Item>
            <NavDropdown.Item>TEAMS & GROUPS</NavDropdown.Item>
            <NavDropdown.Item>EXPLORE ALL</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">MOVIES</span>}>
            <NavDropdown.Item>THUNDERVOLTS</NavDropdown.Item>
            <NavDropdown.Item>
              CAPTAIN AMERICA: BRAVE NEW WORLD
            </NavDropdown.Item>
            <NavDropdown.Item>DEADPOOL & WOLVERINE</NavDropdown.Item>
            <NavDropdown.Item>SEE ALL MOVIES</NavDropdown.Item>
            <NavDropdown.Item>DISNEY+</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">TV SHOWS</span>}>
            <NavDropdown.Item>X'MEN 97</NavDropdown.Item>
            <NavDropdown.Item>ECHO</NavDropdown.Item>
            <NavDropdown.Item>WHAT IF?</NavDropdown.Item>
            <NavDropdown.Item>SEE ALL TV</NavDropdown.Item>
            <NavDropdown.Item>DISNEY+</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">GAMES</span>}>
            <NavDropdown.Item>MARVEL 1943: RISE OF HYDRA</NavDropdown.Item>
            <NavDropdown.Item>MARVEL VS. CAPCOM</NavDropdown.Item>
            <NavDropdown.Item>MARVEL'S VS SPIDER-MAN 2</NavDropdown.Item>
            <NavDropdown.Item>SEE ALL GAMES</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">VIDEOS</span>}>
            <NavDropdown.Item>TRAILERS & EXTRAS</NavDropdown.Item>
            <NavDropdown.Item>DIGITAL SERIES</NavDropdown.Item>
            <NavDropdown.Item>ALL VIDEO</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">MORE</span>}>
            <NavDropdown.Item>LIFESTYLE</NavDropdown.Item>
            <NavDropdown.Item>ROLE PLAYING GAME</NavDropdown.Item>
            <NavDropdown.Item>BOOKS</NavDropdown.Item>
            <NavDropdown.Item>PODCASTS</NavDropdown.Item>
            <NavDropdown.Item>SHOPS</NavDropdown.Item>
          </NavDropdown>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
