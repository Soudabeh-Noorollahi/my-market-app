
import { sendOtp } from "../../services/auth";
import toast from "react-hot-toast";

function SendOtpForm({ mobile, setStep, setMobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length < 10 || mobile.length > 15) {
      toast.error("Please enter a valid mobile number!");
      return;
    }

    const { response, error } = await sendOtp(mobile);

    if (response) {
      setStep(2);
      toast.success("Verification code sent successfully!");
    }

    if (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
      console.log(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white shadow-md rounded-2xl p-6 sm:p-8 w-full max-w-md mx-auto space-y-6 border border-gray-100"
    >
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-semibold text-gray-800">
          Sign in to your account
        </p>
        <span className="text-sm text-gray-500 mt-1 block">
          To use the features of this website, please enter your mobile number.
          A verification code will be sent via SMS.
        </span>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="input"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your mobile number
        </label>
        <input
          type="text"
          id="input"
          inputMode="numeric"
          autoFocus
          maxLength={15}
          placeholder="Phone Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))} // remove non-digits
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a62626] transition"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-lg font-medium bg-[#a62626] hover:bg-[#c0392b] text-white transition"
      >
        Verify
      </button>
    </form>
  );
}

export default SendOtpForm;
