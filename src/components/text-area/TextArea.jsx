export default function TextArea({
  label,
  id,
  name,
  placeholder = "",
  required = false,
  className = "",
}) {
  return (
    <label className="flex flex-col gap-[5px]">
      {label}

      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        className={"input-text resize-none " + className}
      />
    </label>
  );
}
