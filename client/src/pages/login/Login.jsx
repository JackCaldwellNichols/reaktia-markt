import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useRef } from "react";
import { auth } from "../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <div className="loginForm">
        <div className="formTitle">
          <h1>Already registered?</h1>
          <p>
            Sign in now to take full advantage of all the benefits of being a
            member of Reaktia Markt.
          </p>
          <span>
            Not a member? Register{" "}
            <Link
              to="/register"
              className="link"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              here.
            </Link>
          </span>
        </div>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <span>Forgot your password?</span>
          {!loading ? (
            <button type="submit" disabled={loading}>
              Login
            </button>
          ) : (
            <button type="submit" disabled={loading}>
              <CircularProgress className="progress" size={30} />
            </button>
          )}
          {error && (
            <span className="error">
              Something went wrong. Please try again.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
