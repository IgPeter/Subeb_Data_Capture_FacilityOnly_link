import { Controller } from "react-hook-form";

export default function FileInput({
  control,
  name,
  label,
  rules,
  onFileSelect,
}) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-sm font-semibold">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];

                // ✅ send to react-hook-form
                field.onChange(file);

                // ✅ custom preview callback
                if (onFileSelect) {
                  onFileSelect(file);
                }
              }}
              className="border rounded-lg p-2"
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
