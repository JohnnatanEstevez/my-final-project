import { registerUserActionCreator } from "../redux/register/actionCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
const INITIAL_STATE = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};
export default function UserRegister() {
  const [user, setUser] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, lastname, email, password } = user;
    dispatch(
      registerUserActionCreator({
        name,
        lastname,
        email,
        password,
      })
    );
    setUser(INITIAL_STATE);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser((user) => ({ ...user, [name]: value }));
  };
  const { name, lastname, email, password } = user;
  console.log(user);
  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <h1>Register User </h1>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastname"
              placeholder="lastname"
              value={lastname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id="password"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
