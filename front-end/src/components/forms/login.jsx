import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Logo from "../../assets/logo/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [user, setUser] = useState({});
  function handlChange(e) {
    const val = e.target.value;
    setUser({
      ...user,
      [e.target.name]: val,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/login", user)
      .then((res) => {
        if(!res.data.token) toast.error(res.data, {position: toast.POSITION.TOP_RIGHT});
        if(res.data.token){
          window.location.replace("store");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <form onSubmit={handleSubmit} >
          <div className="card">
            <div className="d-flex flex-lg-row flex-column-reverse">
              <div className="card card1">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-10">
                    <div className="row justify-content-center px-3">
                      <img id="logo" src={Logo} alt="..." />
                    </div>
                    <h3 className="mb-5 text-center heading">MARHABA</h3>
                    <div className="form-group">
                      <label className="form-control-label text-muted">
                        Email
                      </label>
                      <input
                        onChange={handlChange}
                        type="email"
                        name="email"
                        placeholder=" email "
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label text-muted">
                        Password
                      </label>
                      <input
                        onChange={handlChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                    <div className="row justify-content-center px-3 mt-4">
                      <button
                        className="btn-block btn-color"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                      <ToastContainer />
                    </div>
                    <div className="row justify-content-center mt-2">
                      <Link to="forgotPassword">
                        <small className="text-muted">Forgot Password?</small>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bottom text-center">
                  <Link to="/register" className="sm-text mx-auto">
                    Don't have an account?
                    <button className="btn btn-white ml-2 mx-2">
                      Create new
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card card2">
                <div className="mx-md-5 px-md-5 right">
                  <h3 className="text-white">
                    We are more than just a company
                  </h3>{" "}
                  <small className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
