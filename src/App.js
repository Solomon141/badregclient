import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import ChangePassword from "./Components/Auth/ChangePassword";
import Forgotpass from "./Components/Auth/Forgotpass";
import Resetpass from "./Components/Auth/Resetpass";
import EmailSentPage from "./Components/Auth/EmailSentPage";
import Verify from "./Components/Auth/Verify";
import Register from "./Components/Auth/Register";
import { useSelector } from "react-redux";
import DDNav from "./DDNav";
import Dashboard from "./Dashboard";

function App() {
  const auth = useSelector((store) => store.auth);

  // console.log(auth);
  return (
    <>
      {auth.isAuthenticated ? (
        <>
          <DDNav />
          <Routes>
            <Route path="/badregclient/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/badregclient/Login" element={<Login />} />
            <Route path="/badregclient/ChangePassword" element={<ChangePassword />} />
            <Route path="/badregclient/Forgotpass" element={<Forgotpass />} />
            <Route path="/badregclient/Register" element={<Register />} />
            <Route path="/badregclient/Resetpass" element={<Resetpass />} />
            <Route path="/badregclient/EmailSentPage" element={<EmailSentPage />} />
            <Route path="/badregclient/Verify/:vkey" element={<Verify />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
