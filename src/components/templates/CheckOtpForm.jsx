function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ code, mobile });
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
