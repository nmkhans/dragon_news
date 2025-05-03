import React from "react";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import { Link } from "react-router";

const Login = () => {
  return (
    <section className="bg-[#F3F3F3]">
      <HeaderNavbar className="py-5" />
      <div className="h-[calc(100vh-87px)] flex items-center jistify-center">
        <div className="bg-white w-1/2 mx-auto py-10 px-15 rounded-xl flex flex-col items-center">
          <div className="w-full">
            <h3 className="text-center text-xl font-semibold text-secondary">
              Login you account.
            </h3>
            <div className="divider"></div>
          </div>
          <div className="w-full">
            <form className="block">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="label mb-1 text-secondary font-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="input w-full"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="label mb-1 text-secondary font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="input w-full"
                />
              </div>
              <div className="flex flex-col mt-5">
                <button className="btn btn-secondary w-full text-white">
                  Login
                </button>
              </div>
              <div className="flex flex-col mt-5">
                <p className="text-center text-secondary">
                  Don't have an account?{" "}
                  <Link className="text-primary" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
