import React from "react";
import { Routes, Route } from "react-router";
import firebase, {FirebaseContext} from "./firebase"
import { Menu } from "./components/Menu";
import { SignUp } from "./components/SignUp";
import { Sidebar } from "./ui/Sidebar";
import { TrainingPurpose } from "./components/TrainingPurpose";
import { UserList } from "./components/UserList";
import { BannedList } from "./components/BannedList";
import { AssignRoutine } from "./components/AssignRoutine";

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <div className="md:flex min-h-screen">
        <Sidebar/>
        <div className="md:w-3/5 xl:w-4/5 p-6">
            <Routes>
              <Route path="/menu" element={<Menu />} />
              <Route path="/purpose" element={<TrainingPurpose />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/userlist" element={<UserList/>} />
              <Route path="/bannedlist" element={<BannedList/>} />
              <Route path="/assignroutine" element={<AssignRoutine/>} />
              
            </Routes>
          
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
