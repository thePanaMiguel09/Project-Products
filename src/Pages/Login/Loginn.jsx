import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css";
import "../Styles/Loginn.css";

function Login() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/home");
  };

  return (
    <div className="body backColor">
      <div className="LoginContainer">
        <div className="resizeContainer containerColor  containerBorder">
          <div className="InputContainer">
            <div>
              <h1 className="text-center textColorAnimation">Login</h1>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <div className="textLabelAlign textColor ">
                    <Form.Label>Email</Form.Label>
                  </div>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="inputColor"
                  />
                </Form.Group>
              </Form>

              <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <div className="textLabelAlign textColor ">
                  <Form.Label>Password</Form.Label>
                </div>

                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>
            <Button variant="outline-light" onClick={toHome}>
              Login
            </Button>{" "}
            <div className="signUpStyle">
              Have not already an account?
              <Link to="/SignUp" className="textColor">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
