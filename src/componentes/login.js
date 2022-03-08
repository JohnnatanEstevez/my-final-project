import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="text-center">
        <Link to="/register">Already have an account?</Link>
      </div>
    </div>
  );
}
