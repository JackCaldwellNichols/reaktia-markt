import { useRef } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./register.scss";
import { auth } from "../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(
        updateProfile(auth.currentUser, {
          displayName: userRef.current.value,
        })
      )
      .then(navigate("/login"))
      .catch((error) => alert("error", error));
  };

  return (
    <div className="register">
      <div className="registerForm">
        <div className="formTitle">
          <h1>Not registered yet?</h1>
          <p>
            Sign up now to take full advantage of all the benefits of being a
            member of Reaktia Markt.
          </p>
        </div>
        <form onSubmit={handleSignUp}>
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="text" placeholder="Username" ref={userRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
