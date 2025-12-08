import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/BaseUrl";
import { fetchSchoolsByLga, handleSelectBlur } from "../../utilities/handlers";
import mainStyles from "../../stylesheets/main.module.css";
import { useData } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [lgas, setLgas] = useState([]);
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();
  const { setData, setSchool } = useData();

  const handleSelectLga = async (e) => {
    const lgaValue = e.target.value;
    if (!lgaValue) return;

    const fetchedSchools = await fetchSchoolsByLga(lgaValue);
    setSchools(fetchedSchools);
  };

  const handleSelectSchools = (e) => {
    const school = e.target.value;
    if (school) {
      setSchool(school);
      navigate("/capture-facilities", { school });
    }
  };

  const handleDBUpdate = async () => {
    await fetch(`${baseUrl}/lga/update-db`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  useEffect(() => {
    const getListOfLga = async () => {
      try {
        const response = await fetch(`${baseUrl}/lga`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const data = await response.json();

        console.log("LGA Data:", data);
        setData(data.data);
        setLgas(data.data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };

    getListOfLga();

    return () => {
      setLgas([]);
    };
  }, []);

  return (
    <div className={`${mainStyles.container}`}>
      <div className="h-[95%] w-4/5 flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        {/* Hero Section */}
        <div className="text-center mb-10 p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0788D9] leading-tight">
            Benue Subeb Data Capture System
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Easily Capture And Manage Educational Data Across LGAs
          </p>
        </div>

        {/* Selection Section */}
        <div className="w-full max-w-xl bg-[#079DD9] shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#f4f4f4]">
            Select Your LGA & School
          </h2>

          {/* LGA Select */}
          {lgas.length > 0 && (
            <div>
              <label
                htmlFor="lga"
                className="block text-sm font-medium text-[#f4f4f4] mb-2"
              >
                Choose LGA
              </label>
              <select
                id="lga"
                onChange={handleSelectLga}
                onBlur={handleSelectBlur}
                className="w-full px-4 py-3 bg-[#079DD9] border border-[#f4f4f4] rounded-xl shadow-sm text-[#f4f4f4] focus:ring-2 focus:ring-[#f4f4f4] focus:border-[#f4f4f4] outline-none transition"
              >
                <option value="">Select LGA</option>
                {lgas.map((lga) => (
                  <option key={lga.id} value={lga.name}>
                    {lga.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Schools Select */}
          {schools.length > 0 && (
            <div>
              <label
                htmlFor="school"
                className="block text-sm font-medium text-[#f4f4f4] mb-2"
              >
                Choose School
              </label>
              <select
                id="school"
                onChange={handleSelectSchools}
                onBlur={handleSelectBlur}
                className="w-full px-4 py-3 bg-[#079DD9] border border-[#f4f4f4] rounded-xl shadow-sm text-[#f4f4f4] focus:ring-2 focus:ring-[#f4f4f4] focus:border-[#f4f4f4] outline-none transition"
              >
                <option>Select School</option>
                {schools.map((school) => (
                  <option key={school.school_id} value={school.school_name}>
                    {school.school_name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
