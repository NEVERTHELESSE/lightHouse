import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  FaApple,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaUser,
} from "react-icons/fa";

import { toast } from "react-toastify";
import { Link, useNavigate, useNavigation } from "react-router";
import axios from "axios";
import SigninMethod from "../checkout/SIgninMethod";

export default function signup() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    hidePassword: true,
  });

  function togglePasswordShow() {
    setUserInfo((prev) => ({ ...prev, hidePassword: !userInfo.hidePassword }));
  }
  const navigate = useNavigate();
  async function createAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (userInfo.password !== userInfo.confirmPassword) {
      toast("Password not match");
    }
    const url = import.meta.env.VITE_APIURL;
    await axios
      .post(url + "newaccount", { userInfo })
      .then((res) => {
        if (res.data.message == "User already exist") {
          toast("User already exist", { type: "warning" });
        } else if (res.data.message == "User successfully added") {
          toast("User successfully created", { type: "success", delay: 2 });
          navigate("/");
        } else {
          toast("There was an error while creating user", { type: "error" });
        }

        // navigate(-1);
      })
      .catch((error) => {
        toast(
          "There was an error while creating a user, kindly try again later"
        );
      });
  }

  return (
    <main className="w-screen flex-col flex items-center justify-center h-screen sm:-ml-20  ">
      <div className="w-100 p-2 flex flex-col justify-center items-center rounded-2xl bg-white shadow-2xl sm:p-6 my-4">
        <form action="" className="w-full" onSubmit={createAccount}>
          <h2 className="text-center">Kindly Create an Account</h2>
          <div className="relative w-full flex items-center">
            <input
              required

              type="text"
              minLength={3}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserInfo((prev) => ({ ...prev, username: e.target.value }))
              }

              placeholder="Username"
              className="w-full border-soft shadow border my-3 p-4 rounded-lg"
            />
            <FaUser
              title="Create a username"
              className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
            />
          </div>
          <div className="relative w-full flex items-center">
            <input
              type="email"
              required

              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserInfo((prev) => ({ ...prev, email: e.target.value }))
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
              type={userInfo.hidePassword ? "password" : "text"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserInfo((prev) => ({ ...prev, password: e.target.value }))
              }
              minLength={6}
              required

              placeholder="Password"
              className="w-full border-soft shadow border my-3 p-4 rounded-lg  "
            />
            {userInfo.hidePassword ? (
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
          <input
            required
            type={userInfo.hidePassword ? "password" : "text"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserInfo((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            minLength={6}

            placeholder="Confirm Password"
            className="w-full border-soft shadow border my-3 p-4 rounded-lg  "
          />
          <button
            title="Fill all the field and continue"
            className={`${userInfo.email.length > 5 && userInfo.password.length > 5 ? "bg-primary " : "bg-soft cursor-not-allowed"} rounded-2xl p-4 text-white w-full my-3  duration-300 `}
          >
            Create Account
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
      </div>
      <div className="flex">
        <p>Already have an account </p>
        <Link to="/login" className="ml-3 text-primary">
          Login
        </Link>
      </div>
    </main>
  );
}
