import React from "react";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuthContext } from "../../context/Auth/AuthContext";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const { loading, loginUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
      email,
      password,
    };

    loginUser(data);

    navigate(location.state || "/");
  };

  return (
    <section className="bg-[#F3F3F3]">
      <HeaderNavbar className="py-5" />
      <div className="flex items-center justify-center py-20">
        <div className="bg-white w-1/2 mx-auto py-10 px-15 rounded-xl flex flex-col items-center">
          <div className="w-full">
            <h3 className="text-center text-xl font-semibold text-secondary">
              Login you account.
            </h3>
            <div className="divider"></div>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="block">
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
                  {loading ? <Spinner /> : "Login"}
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
