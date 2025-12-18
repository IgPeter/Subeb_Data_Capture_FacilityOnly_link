import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "./components/forms/TextInput";
import SelectInput from "./components/forms/SelectInput";
import TextareaInput from "./components/forms/TextareaInput";
import mainStyles from "./stylesheets/main.module.css";
import { sections, singleSection } from "./constants/facilitiesFormField";
import { useData } from "./context/appContext";
import { baseUrl } from "./constants/BaseUrl";

// ✅ Build defaultValues dynamically from sections and singleSection
const buildDefaultValues = () => {
  const defaults = {};

  sections.forEach((section) => {
    section.fields.forEach((field) => {
      defaults[field.name] = "";
      if (field.comment) {
        defaults[field.comment.name] = "";
      }
    });
  });

  singleSection.forEach((field) => {
    defaults[field.name] = "";
    if (field.comment) {
      defaults[field.comment.name] = "";
    }
  });

  return defaults;
};

export default function FacilityOnline() {
  const defaultValues = buildDefaultValues();

  const {
    handleSubmit,
    control,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const [openSection, setOpenSection] = useState(null);
  const [loading, setLoading] = useState(false);
  const { school } = useData();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/facilities?school=${school}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 403) {
        alert("You cannot upload staff without an assigned school");
        return;
      }

      if (!response.ok) throw new Error("Network response failed");

      console.log("Data uploaded successfully:", await response.json());

      reset(buildDefaultValues()); // ✅ reset all fields to blank
      alert("Facilty data submitted successfully");
      setOpenSection(null); // ✅ collapse sections
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("Submission failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Render field types
  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <div key={field.name} className="flex items-start gap-4 mb-4">
            <TextInput
              control={control}
              name={field.name}
              label={field.label}
              type="text"
              rules={{ required: `${field.label} is required` }}
            />
            {field.comment && (
              <TextareaInput
                control={control}
                name={field.comment.name}
                label={field.comment.label}
                rules={{ required: `${field.label} is required` }}
              />
            )}
          </div>
        );
      case "select":
        return (
          <div key={field.name} className="flex items-start gap-4 mb-4">
            <SelectInput
              control={control}
              name={field.name}
              label={field.label}
              options={field.options}
              rules={{ required: `${field.label} is required` }}
            />
            {field.comment && (
              <TextareaInput
                control={control}
                name={field.comment.name}
                label={field.comment.label}
                rules={{ required: `${field.label} is required` }}
              />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${mainStyles.container}`}>
      <div className="w-[90%] mx-auto p-6 bg-white shadow rounded-lg">
        <div>
          <h1 className="text-2xl text-[#1FA2BF] font-bold mb-4">
            Facility Online Form
          </h1>
          <p className="mb-6">
            You can now upload facilities from anywhere, kindly ensure all
            fields are filled accurately
          </p>
        </div>
        <div className="w-[60%]"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {sections.map((section, index) => (
            <div
              key={index}
              className="w-[80%] md:w-[70%] mx-auto mb-6 p-2 bg-white shadow border rounded-lg"
            >
              {/* ✅ Section Header */}
              <button
                type="button"
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 font-semibold text-left"
                onClick={() =>
                  setOpenSection(openSection === index ? null : index)
                }
              >
                {section.title}
                <span>{openSection === index ? "▲" : "▼"}</span>
              </button>

              {/* ✅ Section Content */}
              {openSection === index && (
                <div className="w-[100%] md:w-[100%] p-3 mx-auto bg-white">
                  {section.fields.map(renderField)}
                </div>
              )}
            </div>
          ))}

          {/* ✅ Standalone fields */}
          <div className="w-full md:w-[80%] mx-auto mb-6 p-3 bg-gray-50 border rounded-lg">
            <h2 className="font-semibold text-lg mb-3">
              General Facility Information
            </h2>
            {singleSection.map((field) => renderField(field))}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: loading ? "gray" : "#1FA2BF",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                className={`px-6 py-2 rounded text-white flex items-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1FA2BF] hover:bg-green-700"
                }`}
              >
                {loading && (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
