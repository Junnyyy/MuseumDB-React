import { React, useState } from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";

async function authUser(credentials) {
  return fetch("https://cst2-api.azurewebsites.net/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await authUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="card">
      <div className="login-wrapper">
        <h1>Database Login</h1>
        <br></br>
        <div className="login-group">
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input
                className="loginInput"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                className="loginInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="button-wrapper">
              <button className="loginButton" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

// export default function LoginForm({ Login, error }) {
//   const [details, setDetails] = useState({ username: "", password: "" });
//   const submitHandler = (e) => {
//     e.preventDefault();

//     Login(details);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="form-inner">
//         <h1>Database Login</h1>
//         <br></br>
//         {error != "" ? <div className="error">{error}</div> : ""}
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <br></br>
//           <input
//             class="loginInput"
//             type="text"
//             name="username"
//             id="username"
//             onChange={(e) =>
//               setDetails({ ...details, username: e.target.value })
//             }
//             value={details.name}
//           />
//         </div>
//         <br></br>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <br></br>
//           <input
//             class="loginInput"
//             type="password"
//             name="password"
//             id="password"
//             onChange={(e) =>
//               setDetails({ ...details, password: e.target.value })
//             }
//             value={details.password}
//           />
//         </div>

//         <br></br>

//         <input class="loginButton" type="submit" value="Login" />
//       </div>
//     </form>
//   );
// }
