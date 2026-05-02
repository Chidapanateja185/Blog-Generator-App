import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // 🔍 Read tokens
  const accessToken = sessionStorage.getItem("access_token");
  const refreshToken = sessionStorage.getItem("refresh_token");

  // 🧪 Debug logs
  console.log("---- ProtectedRoute Debug ----");
  console.log("Current Path:", location.pathname);
  console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);
  console.log("Is Authenticated:", !!accessToken);
  console.log("--------------------------------");

  // ❌ If no access token → redirect
  if (!accessToken) {
    console.warn("❌ No access token found. Redirecting to /welcome");

    return (
      <Navigate
        to="/welcome"
        replace
        state={{ from: location }} // helps debug where redirect came from
      />
    );
  }

  // ✅ If token exists → allow access
  console.log("✅ Access granted to protected route");

  return children;
};

export default ProtectedRoute;