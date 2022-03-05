import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./Register.css";
import { registerInitiate } from "../redux/actions";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();
  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            SIGN UP
          </h1>
          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="userEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="passwordConfirm"
            className="form-control"
            placeholder="Repeat Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus"></i> Sign Up
          </button>
          <Link to="/login">
            <i className="fas fa-angle-left"></i> Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
