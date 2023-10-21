import React, { useContext, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../firebase";
import { useNavigate } from "react-router-dom";

export const TrainingPurpose = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  //Validar campos
  const formik = useFormik({
    initialValues: {
      trainingName: "",
      category: "",
      description: "",
      trainingDate: "",
      trainingTime: "",
    },
    validationSchema: Yup.object({
      trainingName: Yup.string()
        .min(4, "Should be 4 characters min")
        .required("Required"),
      category: Yup.string().required("Required"),
      description: Yup.string()
        .min(2, "Should be 4 characters min")
        .required("Required"),
      //trainingDate: Yup.date().default(()=> new Date()).required("Required"),
      trainingDate: Yup.date().required("Required"),
      trainingTime: Yup.string().required("Required"),
    }),
    onSubmit: (trainingPurpose) => {
      try {
        //console.log(signup)
        firebase.db.collection("Trainings").add(trainingPurpose);
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
            <h1 className="text-sky-600 m-4 font-light text-3xl">
              Training Purpose
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="trainingName"
              >
                Training Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="trainingName"
                type="text"
                placeholder="Text the trainig name"
                value={formik.values.trainingName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.trainingName && formik.errors.trainingName ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.trainingName}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Training category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">---Select---</option>
                <option value="strength">Strength Training</option>
                <option value="Aerobic">Aerobic Training</option>
                <option value="BalanceStability">
                  Balance and stability Training
                </option>
                <option value="CoordinationAgility">
                  Coordination and Agility Training
                </option>
                <option value="FlexibilityMobility">
                  Flexibility and Mobility Training
                </option>
              </select>
            </div>
            {formik.touched.category && formik.errors.category ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.category}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Training Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="description"
                placeholder="Text Descriptión"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.touched.description && formik.errors.description ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.description}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="trainingTime"
              >
                Training Day
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="trainingDate"
                type="date"
                value={formik.values.trainingDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.trainingDate && formik.errors.trainingDate ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.trainingDate}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Trainig time
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="trainingTime"
                value={formik.values.trainingTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">---Select---</option>
                <option value="5-8">5-8</option>
                <option value="8-10">8-10</option>
                <option value="10-12">10-12</option>
                <option value="12-14">12-14</option>
                <option value="14-16">14-16</option>
              </select>
            </div>
            {formik.touched.trainingTime && formik.errors.trainingTime ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.trainingTime}</p>
              </div>
            ) : null}

            {/*

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="trainingEndTime"
                >
                Training End Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
                id="trainingEndTime"
                type="time"
                value={formik.values.trainingEndTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.trainingEndTime && formik.errors.trainingEndTime ? (
              <div>
                <p className="text-red-700 font-bold">¯\_(ツ)_/¯</p>
                <p>{formik.errors.trainingEndTime}</p>
              </div>
            ) : null}


        */}

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Add Training"
            />
          </form>
        </div>
      </div>
    </>
  );
};
