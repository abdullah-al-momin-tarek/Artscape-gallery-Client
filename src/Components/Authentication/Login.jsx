import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser, google, github } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  // Navigate
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (data) => {
    const { email, password } = data;

    loginUser(email, password).then((data) => {
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        text: `welcome back ${data?.user?.displayName}`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleGoogle = () => {
    google()
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          text: `welcome ${data?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithub = () => {
    github()
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          text: `welcome ${data?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md shadow-blue-600">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.email && <p className="text-red-600">Email is required.</p>}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-100 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.password && (
              <p className="text-red-600">Password is required.</p>
            )}
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-8 text-xl hover:cursor-pointer"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-orange-500">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-">
          <button
            onClick={handleGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm text-3xl"
          >
            <FcGoogle />
          </button>
          <button
            onClick={handleGithub}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm text-3xl"
          >
            <FaGithub />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Do not have an account?
          <Link className="link-primary" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
