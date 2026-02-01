import axios from "axios";
 
export const serverUrl = "http://localhost:8000";

// Signup API
export const signupUser = async (name, email, password, role) => {
  return await axios.post(
    `${serverUrl}/api/auth/signup`,
    { name, email, password, role },
    { withCredentials: true }
  );
}; 
// New Google Signup
export const googleSignupUser = (name, email, role) =>
  axios.post(`${serverUrl}/api/auth/googleauth`, { name, email, role }, { withCredentials: true });

export const googleLoginUser = (name, email, role) =>
  axios.post(`${serverUrl}/api/auth/googleauth`, { name, email, role }, { withCredentials: true });

//login api
export const loginUser = async (email, password) => {
  return await axios.post(
    `${serverUrl}/api/auth/login`,
    { email, password },
    { withCredentials: true }
  );
};
export const logoutUser = async () => {
  return await axios.get(
    `${serverUrl}/api/auth/logout`,
     { withCredentials: true }
  );
};
