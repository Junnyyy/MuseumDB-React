import { React, useState } from "react";
import "./LoginForm.css";

export default function Login() {
  return (
    <div className="card">
      <div className="login-wrapper">
        <h1>Database Login</h1>
        <br></br>
        <div classname="login-group">
          <form>
            <label>
              <p>Username</p>
              <input class="loginInput" type="text" />
            </label>
            <br></br>
            <br></br>
            <label>
              <p>Password</p>
              <input class="loginInput" type="password" />
            </label>
            <br></br>
            <br></br>
            <div>
              <button class="loginButton" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

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
