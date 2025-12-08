import { Controller } from "react-hook-form";

export default function SelectInput({
  control,
  name,
  label,
  options,
  rules,
  readOnly,
}) {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="mb-1 text-sm font-semibold">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <select
              {...field}
              disabled={readOnly}
              className={`block w-full border border-gray-300 rounded p-2 text-sm ${
                readOnly ? "bg-gray-100 cursor-not-allowed" : "bg-white"
              }`}
            >
              <option value="">Select {label}</option>

              {options.map((opt, i) =>
                // If the option has nested options (group)
                opt.options ? (
                  <optgroup key={i} label={opt.label}>
                    {opt.options.map((subOpt, j) => (
                      <option key={j} value={subOpt.value}>
                        {subOpt.label}
                      </option>
                    ))}
                  </optgroup>
                ) : (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                )
              )}
            </select>
            {fieldState.error && (
              <span className="text-red-500 text-xs">
                {fieldState.error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
}
