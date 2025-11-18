export default function Radio({ label, id, name, defaultChecked = false }) {
  return (
    <label className="flex cursor-pointer items-center gap-[10px]">
      <input
        type="radio"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        className="input-radio"
      />
      <div className="input-radio-marker" />

      {label}
    </label>
  );
}
