// import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

// import { checkOtp } from "@/services/auth";
// import { setCookie } from "@/utils/cookie.js";
// import { getProfile } from "@/services/user";

// function CheckOtpForm({ code, setCode, setStep, mobile }) {
//   const navigate = useNavigate();
//   const { refetch } = useQuery(["profile"], getProfile);

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     if (code.length !== 5) return;

//     const { response, error } = await checkOtp(mobile, code);
//     console.log({ response, error });
//     if (response) {
//       setCookie(response.data);
//       navigate("/");
//       refetch();
//     }
//     if (error) console.log(error.response.data.message);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <p>Sign in to your account</p>{" "}
//       <span>Please enter the code sent to "{mobile}".</span>{" "}
//       <label htmlFor="input">Verification code</label>
//       <input
//         type="text"
//         id="input"
//         maxLength={5}
//         placeholder="Enter the code"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//       />
//       <button type="submit"> Continue</button>
//       <button onClick={() => setStep(1)}> Change mobile number</button>
//     </form>
//   );
// }

// export default CheckOtpForm;

// import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

// import { checkOtp } from "@/services/auth";
// import { setCookie } from "@/utils/cookie.js";
// import { getProfile } from "@/services/user";

// function CheckOtpForm({ code, setCode, setStep, mobile }) {
//   const navigate = useNavigate();
//   const { refetch } = useQuery(["profile"], getProfile);

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     if (code.length !== 5) return;

//     const { response, error } = await checkOtp(mobile, code);
//     if (response) {
//       setCookie(response.data);
//       navigate("/");
//       refetch();
//     }
//     if (error) console.log(error.response.data.message);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <form
//         onSubmit={submitHandler}
//         className="bg-white shadow-md rounded-2xl p-6 sm:p-8 w-full max-w-md space-y-6"
//       >
//         <div className="text-center">
//           <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
//             Sign in to your account
//           </h2>
//           <p className="text-sm text-gray-500 mt-1">
//             Please enter the code sent to <span className="font-medium text-gray-700">"{mobile}"</span>.
//           </p>
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="otp-input" className="block text-sm font-medium text-gray-700">
//             Verification code
//           </label>
//           <input
//             id="otp-input"
//             type="text"
//             maxLength={5}
//             placeholder="Enter the 5-digit code"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-lg transition"
//         >
//           Continue
//         </button>

//         <button
//           type="button"
//           onClick={() => setStep(1)}
//           className="w-full text-sm text-gray-500 hover:text-pink-500 underline mt-2"
//         >
//           Change mobile number
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CheckOtpForm;

// A form that lets the user enter and verify the OTP code.

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOtp } from "@/services/auth";
import { setCookie } from "@/utils/cookie.js";
import { getProfile } from "@/services/user";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile); // React Query to fetch the authenticated user's profile
  const [isSubmitting, setIsSubmitting] = useState(false); // Controls loading state of the form
  const [errorMsg, setErrorMsg] = useState(""); // Stores error message from server

  // Handle form submission: verify the OTP and log in the user
  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return; // Simple frontend validation

    setIsSubmitting(true);
    setErrorMsg("");

    const { response, error } = await checkOtp(mobile, code); // API call to verify OTP

    setIsSubmitting(false);

    if (response) {
      setCookie(response.data); // Save access/refresh tokens in cookies
      navigate("/"); // Redirect to home page
      refetch(); // Refetch user profile
    }

    if (error) {
      const msg = error.response?.data?.message || "Something went wrong.";
      console.log(msg);
      setErrorMsg(msg); // Show error message in UI
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded-2xl p-6 sm:p-8 w-full max-w-md space-y-6 border border-gray-100"
      >
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Sign in to your account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Please enter the code sent to{" "}
            <span className="font-medium text-gray-700">{mobile}</span>.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="otp-input"
            className="block text-sm font-medium text-gray-700"
          >
            Verification code
          </label>
          <input
            id="otp-input"
            type="text"
            inputMode="numeric"
            autoFocus
            maxLength={5}
            placeholder="Enter the 5-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} // remove non-digits
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a62626] transition"
          />
          {code.length > 0 && code.length !== 5 && (
            <p className="text-xs text-red-500">
              Code must be exactly 5 digits.
            </p>
          )}
          {errorMsg && (
            <p className="text-sm text-[#a62626] font-medium">{errorMsg}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-lg font-medium transition ${
            isSubmitting
              ? "bg-[#d43f3f] text-white cursor-not-allowed"
              : "bg-[#a62626] hover:bg-[#c0392b] text-white"
          }`}
        >
          {isSubmitting ? (
            <span className="flex justify-center items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-b-transparent rounded-full animate-spin" />
              Verifying...
            </span>
          ) : (
            "Continue"
          )}
        </button>

        <button
          type="button"
          onClick={() => setStep(1)}
          className="w-full text-sm text-gray-500 hover:text-primary hover:underline mt-2 transition-colors"
        >
          Change mobile number
        </button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
