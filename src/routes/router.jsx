import { Routes, Route } from "react-router-dom";
import Main from "../components/pages/Main";
import FacilityForm from "../facility_online";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/capture-facilities" element={<FacilityForm />} />
    </Routes>
  );
}

export default AppRoutes;
