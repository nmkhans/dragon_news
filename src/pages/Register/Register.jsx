import React from "react";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import { Link } from "react-router";
import { useAuthContext } from "../../context/Auth/AuthContext";

const Register = () => {
  const { loading, createUser } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
      name,
      photoUrl,
      email,
      password,
    };

    createUser(data);
  };

  return (
    <section className="bg-[#F3F3F3]">
      <HeaderNavbar className="py-5" />
      <div className="flex items-center justify-center py-10">
        <div className="bg-white w-1/2 mx-auto py-10 px-15 rounded-xl flex flex-col items-center">
          <div className="w-full">
            <h3 className="text-center text-xl font-semibold text-secondary">
              Register your account.
            </h3>
            <div className="divider"></div>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit} className="block">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="label mb-1 text-secondary font-semibold"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John doe"
                  className="input w-full"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="photo"
                  className="label mb-1 text-secondary font-semibold"
                >
                  Photo url
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photoUrl"
                  placeholder="example.com"
                  className="input w-full"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="email"
                  className="label mb-1 text-secondary font-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
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
                  name="password"
                  className="input w-full"
                />
              </div>
              <div className="flex flex-col mt-5">
                <button className="btn btn-secondary w-full text-white">
                  {loading ? <Spinner /> : "Register"}
                </button>
              </div>
              <div className="flex flex-col mt-5">
                <p className="text-center text-secondary">
                  Already have an account?{" "}
                  <Link className="text-primary" to="/login">
                    Login
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

export default Register;
