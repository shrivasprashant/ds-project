import React, { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loginOption, setLoginOption] = useState("phoneNumber");

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSendOtp = () => {
    // Here you would typically send the OTP to the provided phone number
    // This is just a placeholder function for demonstration purposes
    console.log("Sending OTP to", phoneNumber);
    setIsOtpSent(true);
  };

  const handleLogin = () => {
    // Here you would typically verify the OTP and authenticate the user
    // This is just a placeholder function for demonstration purposes
    console.log("Verifying OTP:", otp);
    // After successful verification, you can redirect the user or perform further actions
  };

  const handleLoginWithGmail = () => {
    // Handle login with Gmail
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {loginOption === "phoneNumber" && (
        <div>
          <label className="block mb-2">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border rounded-md mb-4"
          />
          {!isOtpSent ? (
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Send OTP
            </button>
          ) : (
            <div>
              <label className="block mb-2">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={handleChangeOtp}
                placeholder="Enter OTP"
                className="w-full px-3 py-2 border rounded-md mb-4"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
      {loginOption === "username" && (
        <div>
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={handleChangeUsername}
            placeholder="Enter your username"
            className="w-full px-3 py-2 border rounded-md mb-4"
          />
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Login
          </button>
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setLoginOption("phoneNumber")}
          className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login with Phone Number
        </button>
        <button
          onClick={() => setLoginOption("username")}
          className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login with Username/Password
        </button>
        {/* <button
          onClick={handleLoginWithGmail}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Login with Gmail
        </button> */}
      </div>
    </div>
  );
};

export default Login;
