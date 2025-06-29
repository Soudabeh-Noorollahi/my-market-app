import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOtp } from "@/services/auth";
import { setCookie } from "@/utils/cookie.js";
import { getProfile } from "@/services/user";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>Sign in to your account</p>{" "}
      <span>Please enter the code sent to "{mobile}".</span>{" "}
      <label htmlFor="input">Verification code</label>
      <input
        type="text"
        id="input"
        maxLength={5}
        placeholder="Enter the code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit"> Continue</button>
      <button onClick={() => setStep(1)}> Change mobile number</button>
    </form>
  );
}

export default CheckOtpForm;
