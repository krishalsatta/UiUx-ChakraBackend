// const axios = require("axios");

// const sendOtp = async (phone, otp) => {
//   // setting state
//   let isSent = false;

//   //  url to send otp
//   const url = "https://api.managepoint.co/api/sms/send";

//   // payload to send
//   const payload = {
//     apiKey: "ab810f2d-b04b-4edd-bd9d-334ea06ef655",
//     to: phone,
//     message: `Your OTP is ${otp}`,
//   };
//   try {
//     const response = await axios.post(url, payload);
//     if (response.status === 200) {
//       isSent = true;
//     }
//   } catch (error) {
//     console.log("Error in sending OTP", error.message);
//   }
//   return isSent;
// };
// module.exports = sendOtp;
const axios = require("axios");
const sendOtp = async (phone, otp) => {
  // ssetting state
  let isSent = false;

  //url to send otp
  const url = "https://api.managepoint.co/api/sms/send";

  //payload to send
  const payload = {
    apiKey: "5aabc457-6cfe-4d6f-a086-adf07fb925e2",
    to: phone,
    message: `Your OTP is ${otp}`,
  };
  try {
    const res = await axios.post(url, payload);
    if (res.status === 200) {
      isSent = true;
    }
  } catch (error) {
    console.log("error sending otp", error.message);
  }

  return isSent;
};
module.exports = sendOtp;
