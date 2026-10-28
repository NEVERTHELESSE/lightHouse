import axios from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  FaApple,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { Form, Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import SigninMethod from "../checkout/SIgninMethod";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  function togglePasswordShow() {
    setHidePassword((prev) => !prev);
  }
  // const url = process.env.VITE_APIURL;
  const navigate = useNavigate();
  async function loginUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = import.meta.env.VITE_APIURL;

    await axios
      .post(`${url}login`, { email, password })
      .then((res) => {
        if (res.data.message === "Succesfully login") {
          toast("User successfully login", { type: "success" });
          navigate("/");
        } else {
          toast("invalid username or password", { type: "warning" });
        }
      })
      .catch((error) =>
        toast(
          "There was an error while getting user info, kindly try again later",
          { type: "error" }
        )
      );
  }

  return (
    <main className="w-screen flex-col flex items-center justify-center h-screen sm:ml-20 ">
      <div className="w-100 flex p-2 flex-col justify-center items-center rounded-2xl bg-white shadow-2xl sm:p-6 my-4">
        <form method="post" className="w-full" onSubmit={loginUser}>
          <img src="/logo.png" alt="logo" className="size-20" />
          <h2 className="text-center">Welcome Back</h2>
          <div className="relative w-full flex items-center">
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Email address"
              className="w-full border-soft shadow border my-3 p-4 rounded-lg"
            />
            <FaEnvelope
              title="Enter your email address"
              className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
            />
          </div>
          <div className="relative w-full flex items-center">
            <input
              type={hidePassword ? "password" : "text"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              minLength={6}
              required
              name="password"
              id="password"

              placeholder="Password"
              className="w-full border-soft shadow border my-3 p-4 rounded-lg  "
            />
            {hidePassword ? (
              <FaEye
                title="Show Password"

                className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
                onClick={togglePasswordShow}
              />
            ) : (
              <FaEyeSlash
                title="Hide Password"

                className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
                onClick={togglePasswordShow}
              />
            )}
          </div>
          {/* <Remember /> */}
          <button
            title="Fill all the field and continue"

            className={`${email.length > 5 && password.length > 6 ? "bg-primary " : "bg-soft cursor-not-allowed"} rounded-2xl p-4 text-white w-full my-3  duration-300 `}
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="flex items-center flex-col justify-center w-full">
          <div className="flex w-full items-center justify-between">
            <div className="w-35 border-b-2 border-primary h-2 "></div>
            <p>Or</p>
            <div className="w-35 border-b-2 border-primary h-2 "></div>
          </div>
          <SigninMethod />
        </div>
        <div className=" w-full flex justify-end">
          <Link to="/forgetPassword" className="text-tertiary-400 ">
            Forget Password
          </Link>
        </div>
      </div>
      <div className="flex">
        <p>Don't have an account </p>
        <Link to="/signup" className="ml-3 text-primary">
          Create one
        </Link>
      </div>
    </main>
  );
}
