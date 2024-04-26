import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.config";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (data) => {
    const { name, photo, email, password } = data;
    console.log(email, password);
    registerUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("UserName set succesfull"))
          .catch((error) => console.error(error));

        // toast.success("Successfully registered");
        // Navigate(location?.state ? location.state : "/");
        console.log("registerd Successfull");
      })
      .catch((error) => {
        // if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        //   //   toast.error("Email Already In use");
        //   console.log("Email already use");
        // }
        console.error(error);
      });
  };
  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md shadow-blue-600">
        <h1 className="text-2xl font-bold text-center">Register Now</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.name && <p className="text-red-600">Name is required.</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              {...register("photo", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.photo && <p className="text-red-600">Photo is required.</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.email && <p className="text-red-600">Email is required.</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.password && (
              <p className="text-red-600">Name is required.</p>
            )}
            <div className="flex justify-end text-xs dark:text-gray-600"></div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link className="link-primary" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
