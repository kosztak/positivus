import "./style.scss";

export default function ProcessStep({
  title = "",
  details = "",
  number = "01",
  isOpen = false,
}) {
  return (
    <details
      open={isOpen}
      name="asd"
      className="process-step shadow-base cursor-pointer rounded-[45px] border border-gray-dark bg-gray-light ~px-[30px]/[60px] ~py-[20px]/[40px] open:bg-green"
    >
      <summary className="flex list-none items-center ~gap-[20px]/[25px]">
        <aside className="font-medium ~text-[43px]/[60px]">{number}</aside>
        <h3>{title}</h3>
      </summary>
      <p className="border-t ~pt-[20px]/[30px]">{details}</p>
    </details>
  );
}
