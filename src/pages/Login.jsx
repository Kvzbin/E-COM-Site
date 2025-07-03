// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
//         <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Login</h2>
//         <form className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-orange-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-orange-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-sm mt-4 text-center">
//           Don't have an account?{" "}
//           <span
//             className="text-orange-600 cursor-pointer underline"
//             onClick={() => navigate("/signup")}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import loginImage from "../assets/log.jpg";


// function Login() {
//   const navigate = useNavigate();
  

//   return (
//     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-orange-100 to-white">
      
//       {/* 🔥 Left Side - Image/Branding */}
//       <div className="hidden lg:flex items-center justify-center p-10">
//         <img
//           src={loginImage}
//           alt="Login"
//           className="w-4/5 max-w-md animate-fadeIn rounded-3xl shadow-2xl"
//         />
//       </div>

//       {/* ✨ Right Side - Login Form */}
//       <div className="flex items-center justify-center p-6">
//         <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 animate-fadeIn">
//           <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center tracking-wide">
//             Welcome Back
//           </h2>

//           <form className="space-y-5">
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-3 text-orange-500" />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500 transition"
//               />
//             </div>

//             <div className="relative">
//               <FaLock className="absolute left-3 top-3 text-orange-500" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500 transition"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
//             >
//               Login
//             </button>
//           </form>

//           <p className="text-sm mt-5 text-center">
//             Don’t have an account?{" "}
//             <span
//               onClick={() => navigate("/signup")}
//               className="text-orange-600 underline cursor-pointer font-medium"
//             >
//               Sign up
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import loginImage from "../assets/log.jpg";
import { useAuth } from "../context/AuthContext";   // ⬅️ NEW

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();                      // ⬅️ NEW

  // ⬅️ NEW – local state for the two inputs
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(form);          // checks saved users in localStorage
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);   // “Invalid credentials” if email/pwd wrong
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-orange-100 to-white">
      {/* 🔥 Left Side - Image/Branding */}
      <div className="hidden lg:flex items-center justify-center p-10">
        <img
          src={loginImage}
          alt="Login"
          className="w-4/5 max-w-md animate-fadeIn rounded-3xl shadow-2xl"
        />
      </div>

      {/* ✨ Right Side - Login Form */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center tracking-wide">
            Welcome Back
          </h2>

          {/* ⬇️ only 3 tiny edits inside: onSubmit + name/value/onChange */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-orange-500" />
              <input
                type="email"
                name="email"                         /* NEW */
                value={form.email}                  /* NEW */
                onChange={handleChange}             /* NEW */
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500 transition"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-orange-500" />
              <input
                type="password"
                name="password"                     /* NEW */
                value={form.password}               /* NEW */
                onChange={handleChange}             /* NEW */
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-orange-500 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm mt-5 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-orange-600 underline cursor-pointer font-medium"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
