import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";

export const AssignRoutine = () => {
  const { firebase } = useContext(FirebaseContext);
  const [userData, setUserData] = useState([]);
  const [trainingData, setTrainingData] = useState([]);
  const [trainingSelected, setTrainingSelected] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  useEffect(() => {
    firebase.db.collection("user").onSnapshot((snapshot) => {
      setUserData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    firebase.db.collection("Trainings").onSnapshot((snapshot) => {
      setTrainingData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    firebase.db
      .collection("user")
      .doc(dataIdToBeUpdated)
      .update({ trainingAssigned: trainingSelected });
    setDataIdToBeUpdated("");
    setTrainingSelected("");
  };

  return (
    <>
      {!dataIdToBeUpdated ? (
        console.log("algo")
      ) : (
        <div>
          <select
            className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTrainingSelected(e.target.value)}
          >
            <option value="">Select one option</option>

            {trainingData?.map(({ id, data }) => (
              <option key={id} value={data.trainingName}>
                {data.trainingName}
              </option>
            ))}
          </select>
          <button
            onClick={updateData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
          >
            Set trainning
          </button>
        </div>
      )}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              CC
            </th>
            <th scope="col" className="px-6 py-3">
              Routine
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>

          {userData?.map(({ id, data }) =>
            data.userState ? (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th className="px-6 py-4">{data.name}</th>
                <th className="px-6 py-4">{data.cc}</th>
                <th className="px-6 py-4">
                  {data.trainingAssigned
                    ? data.trainingAssigned
                    : "Not assigned yet"}
                </th>

                <th className="px-6 py-4">
                  <button
                    onClick={() => {
                      setDataIdToBeUpdated(id);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                  >
                    Select Routine
                  </button>
                </th>
              </tr>
            ) : (
              console.log("")
            )
          )}
        </table>
      </div>
    </>
  );
};
