import "../../App.css";
import "../Styles/SignUp.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function SignUp() {
  return (
    <div className="App">
      <div className="ContainerSignUp containerColor">
        <h1 className="textCenter textColor headerPadding">Sign Up</h1>
        <div className="container">
        <div>
          <Form>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <div className="textLabelAlign textColor">
                <Form.Label>Name</Form.Label>
              </div>
              <Form.Control
                type="name"
                
                placeholder="Name"
              />
            </Form.Group>
          </Form>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="textLabelAlign textColor">
                <Form.Label>Email address</Form.Label>
              </div>
              <Form.Control
                type="email"
                
                placeholder="name@example.com"
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
             
            />
          </Form.Group>
          <Button variant="outline-light">Sign Up</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
