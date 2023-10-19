import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='md:w-2/5 xl:w-1/5 bg-gray-800'>
      <div className="p-6">
        <p className='uppercase text-white text-2xl trackind-wide text-center font-bold'>
        Y M i M C
        </p>

        <p className="mt-3 text-gray-600 text-center">No pain no gain</p>

        <nav className="mt-10">

          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            //activeClassName="text-yellow-500"
            end
            to="/menu"
          >
            Menu
          </NavLink>
          
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            end
            to="/purpose"
          >
            Training purpose
          </NavLink>
          
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            //activeClassName="text-yellow-500"
            end
            to="/signup"
          >
            Sign Up
          </NavLink>
          
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            //activeClassName="text-yellow-500"
            end
            to="/assignroutine"
          >
            Assign Routine
          </NavLink>
          
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            //activeClassName="text-yellow-500"
            end
            to="/userlist"
          >
            List Active Users
          </NavLink>
          
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            //activeClassName="text-yellow-500"
            end
            to="/bannedlist"
          >
            List Banned Users
          </NavLink>

        </nav>
      </div>
    </div>
  );
};
/*
    
import React from 'react';
import { NavLink }from 'react-router-dom';


const Sidebar = () =>{
    return ( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Restaurant App</p>


                <p className="mt-3 text-gray-600">Administra tu restaurant en las siguientes opciones:</p>


                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" end to="/">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" end to="/menu">Menú</NavLink>
                </nav>
            </div>
        </div>
     );
    }
     
export default Sidebar;


*/