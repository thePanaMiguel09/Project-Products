import "./App.css";
import "./Loginn.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div className="App">
      <div className="LoginContainer">
        <div className="resizeContainer containerColor  containerBorder">
          <div className="InputContainer">
            <div>
              <h1 className="text-center textColorAnimation">Login</h1>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className="textColor ">
                  User
                </InputGroup.Text>
               
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>

            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="textColor">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                  />
                </Form.Group>
              </Form>
              <InputGroup className="mb-3 showPassword">
                <InputGroup.Checkbox />
                <Form.Label className="textColor showPassword">
                  Show Password?
                </Form.Label>
              </InputGroup>
            </div>

            <div id="buttonContainer" className="d-flex justify-content-center">
              <Button type="submit">Login</Button>{" "}
            </div>

            <div className="signUpStyle">
              <a href="signUp.html" className="textColor">
                Have not already an account?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
