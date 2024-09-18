import Form from "react-bootstrap/Form";

import { Button } from "react-bootstrap";
import "./App.css";
import "./Loginn.css";
import { useNavigate  } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/signup");
  };
  return (
    <div className="App">
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
                    <Form.Label>Email address</Form.Label>
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

                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="inputColor"
                />
              </Form.Group>
            </div>
            <Button variant="dark" onClick={toHome}>
              Login
            </Button>{" "}
            <div className="signUpStyle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
