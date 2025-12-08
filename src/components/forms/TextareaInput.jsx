import { Controller } from "react-hook-form";

export default function TextareaInput({
  control,
  name,
  label,
  rules,
  rows = 4,
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
            <textarea
              {...field}
              rows={rows}
              className="border rounded-lg p-2 focus:outline-blue-500 resize-y"
              placeholder={`Enter ${label.toLowerCase()}...`}
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
