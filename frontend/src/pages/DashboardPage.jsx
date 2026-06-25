import { useAuth }
from "../context/AuthContext";
import { Link }
from "react-router-dom";
import {
 logoutUser
}
from "../services/authService";

function DashboardPage() {

 const { user } =
  useAuth();

 return (

  <div
   className="
   p-10
   "
  >

   <h1
    className="
    text-3xl
    font-bold
    "
   >

    Clutch AI Dashboard

   </h1>

   <div
    className="
    mt-8
    "
   >

    <img
     src={user.photoURL}
     alt=""
     className="
     w-20
     h-20
     rounded-full
     "
    />

    <h2
     className="
     text-xl
     mt-2
     "
    >

     {user.displayName}

    </h2>

    <p>
     {user.email}
    </p>

   </div>
   <Link
 to="/tasks"
 className="
 bg-blue-600
 text-white
 px-4
 py-2
 rounded
 "
>
 Manage Tasks
</Link>

   <button

    onClick={
      logoutUser
    }

    className="
    mt-6
    bg-red-500
    text-white
    px-4
    py-2
    rounded
    "

   >

    Logout

   </button>

  </div>
 );
}

export default DashboardPage;