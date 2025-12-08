import { Controller } from "react-hook-form";

export default function TextInput({
  control,
  name,
  label,
  rules,
  type = "text",
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
            <input
              {...field}
              type={type}
              maxLength={name === "nin" ? 11 : undefined}
              onInput={(e) => {
                if (name === "nin" || name === "age") {
                  // Allow only digits
                  e.target.value = e.target.value.replace(/\D/g, "");
                }
                field.onChange(e);
              }}
              className="border rounded-lg p-2 focus:outline-blue-500"
              readOnly={readOnly}
            />
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
