import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../firebase";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  /*
  async function checkAvailabilityUsername(username) {
    try {
      const querySnapshot = await firebase.db
        .collection("user")
        .where("username", "==", username)
        .get();
      if (!querySnapshot.empty) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error al verificar usuario", error);
      throw error;
    }
  }
  */
  //Validar campos
  const formik = useFormik({
    initialValues: {
      name: "",
      cc: "",
      username: "",
      email: "",
      password: "",
      userState: true,
      banReason: "",
      trainingAssigned: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Should be 4 characters min")
        .required("Required"),
      cc: Yup.number()
        .min(1000000, "Should be 7 characters min")
        .required("Required").test("unique-cc", "Document already exists", async (cc) => {
            const querySnapshot = await firebase.db
              .collection("user")
              .where("cc", "==", cc)
              .get();
            return querySnapshot.empty;
          }),
      username: Yup.string()
        .min(2, "Should be 2 characters min")
        .required("Required").test("unique-username", "username already exists", async (username) => {
            const querySnapshot = await firebase.db
              .collection("user")
              .where("username", "==", username)
              .get();
            return querySnapshot.empty;
          }),
      email: Yup.string()
        .email()
        .required("Required")
        .test("unique-email", "Email already exists", async (email) => {
          const querySnapshot = await firebase.db
            .collection("user")
            .where("email", "==", email)
            .get();
          return querySnapshot.empty;
        }),
      password: Yup.string().required("Required"),
      userState: Yup.bool(),
      banReason: Yup.string(),
      trainingAssigned: Yup.string(),
    }),
    onSubmit: (user) => {
      try {
        //console.log(signup)
        firebase.db.collection("user").add(user);
        navigate("/menu");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-sky-600 m-4 font-light text-3xl">Sign up</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                placeholder="Text your full name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.name}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cc"
              >
                Id number (CC)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="cc"
                type="number"
                placeholder="C.C."
                value={formik.values.cc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.cc && formik.errors.cc ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.cc}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="username"
                type="text"
                placeholder="Text your username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.username && formik.errors.username ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.username}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Text your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.email}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="password"
                type="password"
                placeholder="Text your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.password}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </>
  );
};
