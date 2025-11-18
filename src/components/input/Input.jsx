export default function Input({
  label,
  id,
  name,
  placeholder = "",
  required = false,
}) {
  return (
    <label className="flex flex-col gap-[5px]">
      {label}

      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="input-text"
      />
    </label>
  );
}
