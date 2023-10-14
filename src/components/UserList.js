import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";

export const UserList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [userData, setUserData] = useState([]);
  //const [documentData, setDocumentData] = useState(null)
  //const [updateUserState, setUpdateUserState] = useState(false);
  //const [updateUserState, setUpdateUserState] = useState()
  //const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

  useEffect(() => {
    firebase.db.collection("user").onSnapshot((snapshot) => {
      setUserData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  /*
  const handleModifyField = () =>{
    //const updateData = {userState: !false};
    firebase.db.collection('user').doc(dataIdToBeUpdated).update({userState: updateUserState}).then(()=>{
      console.log('Documento actulizado')
    }).catch((error)=>{
      console.error('Error al actualizar', error)
    })
  }*/

  //update data
  const banUser = (id, userState)=>{
    //const newState = {userState: !userState}
    if (userState) {
        firebase.db.collection('user').doc(id).update({userState: !userState}).then(()=>{
          console.log('Document updated')
        }).catch((error)=>{
          console.error('Update Error', error)
        })
    } else {
      console.log('User is alredy Banned')
    }
  }

  return (
    <>
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
              User State
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>

          {userData?.map(({ id, data }) => (
            <tr
              key={id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th className="px-6 py-4">{data.name}</th>
              <th className="px-6 py-4">{data.cc}</th>
              <th className="px-6 py-4">{data.userState? 'Active' : 'Banned'}</th>
              <th className="px-6 py-4">
                
                <button onClick={()=>{banUser(id, data.userState)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">Ban user</button>
              </th>
            </tr>
          ))}


        </table>
      </div>



      

    </>
  );
};
