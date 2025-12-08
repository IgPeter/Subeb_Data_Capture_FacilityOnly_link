import TextInput from "@/components/forms/TextInput";
import SelectInput from "@/components/forms/SelectInput";
import FileInput from "@/components/forms/FileInput";
import PhoneInput from "@/components/forms/PhoneInput";
import TextareaInput from "@/components/forms/TextareaInput";

export const renderField = (field) => {
  switch (field.type) {
    case "text":
    case "email":
    case "date":
      return (
        <TextInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          type={field.type}
        />
      );
    case "tel":
      return (
        <PhoneInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          type={field.type}
        />
      );
    case "textarea":
      return (
        <TextareaInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
        />
      );
    case "select":
      return (
        <SelectInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
          options={field.options}
        />
      );
    case "file":
      return (
        <FileInput
          key={field.name}
          control={control}
          name={field.name}
          label={field.label}
        />
      );
    default:
      return null;
  }
};
