import { sendOtp } from "../../services/auth";

function SendOtpForm({ mobile, setStep, setMobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>Sign in to your account</p>
      <span>
        To use the features of this website, please enter your mobile number. A
        verification code will be sent via SMS.
      </span>
      <label htmlFor="input">Enter your mobile number</label>
      <input
        type="text"
        id="input"
        placeholder="Phone Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">Verify</button>{" "}
    </form>
  );
}

export default SendOtpForm;
