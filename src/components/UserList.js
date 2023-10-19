import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";

export const UserList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [userData, setUserData] = useState([]);
  //const [documentData, setDocumentData] = useState(null)
  //const [updateUserState, setUpdateUserState] = useState(false);
  //const [updateUserState, setUpdateUserState] = useState()
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  const [userBanReason, setUserBanReason] = useState("");

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

  

  const updateData = (e) => {
    e.preventDefault();
    firebase.db.collection('user').doc(dataIdToBeUpdated).update({userState: false, banReason: userBanReason});
    setDataIdToBeUpdated("");
    setUserBanReason("");
  }

  /*
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
  */

  return (
    <>
    {!dataIdToBeUpdated ? (console.log("nose")) :(
      <div>
        <input
          className='shadow appearance-none border rounded w-full py-2 text-gray-700 leadifocus:outline-none'
          id='banMotive'
          type='text'
          placeholder='Text ban motive'
          value={userBanReason}
          onChange={(e) => setUserBanReason(e.target.value)}
          />
          <button onClick={updateData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">Ban User</button>
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
              User State
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>



          {userData?.map(({ id, data }) => (
            data.userState?(

              
              <tr
              key={id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
              
              <th className="px-6 py-4">{data.name}</th>
              <th className="px-6 py-4">{data.cc}</th>
              <th className="px-6 py-4">{data.userState? 'Active' : 'Banned'}</th>
              <th className="px-6 py-4">
              
                <button onClick={()=>{setDataIdToBeUpdated(id)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">Ban user</button>
              
              {/*<button onClick={()=>{banUser(id, data.userState)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">Ban user</button>*/}
              </th>
              
              </tr>
              ): console.log("algo")



          ))}
          


        </table>
      </div>



      

    </>
  );
};
