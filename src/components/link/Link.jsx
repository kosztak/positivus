import ArrowIcon from "assets/svg/ArrowIcon";

export default function Link({
  text = "",
  textColor = "black",
  isArowFront = true,
  arrowColor = "green",
  bgColor = "black",
  className = "",
}) {
  let textClasses = "";

  switch (textColor) {
    case "white":
      textClasses += "text-white";
      break;
    case "green":
      textClasses += "text-green";
      break;
    default:
      textClasses += "text-black";
  }

  let frontIconClasses =
    "h-[41px] w-[41px] flex items-center justify-center rounded-full ";

  switch (bgColor) {
    case "white":
      frontIconClasses += "bg-white";
      break;
    case "green":
      frontIconClasses += "bg-green";
      break;
    default:
      frontIconClasses += "bg-black";
  }

  return (
    <a href="/" className={"flex items-center gap-[15px] " + className}>
      {!isArowFront || (
        <aside className={frontIconClasses}>
          <ArrowIcon color={arrowColor} />
        </aside>
      )}

      <p
        className={
          "underline decoration-gray-dark transition-colors ~text-[18px]/[20px] hover:decoration-green last:max-sm:hidden " +
          textClasses
        }
      >
        {text}
      </p>

      {isArowFront || (
        <aside>
          <ArrowIcon color={arrowColor} />
        </aside>
      )}
    </a>
  );
}
