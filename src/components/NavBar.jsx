import { Nav, NavItem, NavDropdown} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navBarStyles.css";

function NavBar() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/Login");
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
          <NavDropdown title={<span className="navText">NEWS</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title={<span className="navText">COMICS</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title= {<span className="navText">CHARACTERS</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title= {<span className="navText">MOVIES</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title= {<span className="navText">TV SHOWS</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title= {<span className="navText">GAMES</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title= {<span className="navText">VIDEOS</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <NavDropdown title= {<span className="navText">MORE</span>}>
            <NavDropdown.Item></NavDropdown.Item>
          </NavDropdown>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
