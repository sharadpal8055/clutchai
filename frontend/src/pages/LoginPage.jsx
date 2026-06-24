import { useNavigate }
from "react-router-dom";

import {
 loginWithGoogle
}
from "../services/authService";

function LoginPage() {

 const navigate =
  useNavigate();

 const handleLogin =
  async () => {

   try {

    await loginWithGoogle();

    navigate(
      "/dashboard"
    );

   }
   catch(error) {

    console.log(error);

   }
 };

 return (

  <div
   className="
   min-h-screen
   flex
   justify-center
   items-center
   "
  >

   <button

    onClick={handleLogin}

    className="
    bg-blue-600
    text-white
    px-6
    py-3
    rounded-lg
    "

   >

    Sign In With Google

   </button>

  </div>
 );
}

export default LoginPage;