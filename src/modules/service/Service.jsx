import Link from "components/link/Link";

import "./style.scss";

const STYLE = {
  green: {
    label: {
      style: "label-white",
    },
    link: {
      arrow: "green",
      bg: "black",
      text: "black",
    },
    bgColor: "bg-green",
  },
  light: {
    label: {
      style: "label-green",
    },
    link: {
      arrow: "green",
      bg: "black",
      text: "black",
    },
    bgColor: "bg-gray-light",
  },
  dark: {
    label: {
      style: "label-white",
    },
    link: {
      arrow: "black",
      bg: "white",
      text: "white",
    },
    bgColor: "bg-gray-dark",
  },
};

export default function Service({
  type = "green",
  image,
  labelText = "Service",
}) {
  if (!STYLE[type]) {
    type = "green";
  }

  return (
    <div
      className={
        "shadow-base service rounded-[45px] border border-gray-dark p-[50px] " +
        STYLE[type].bgColor
      }
    >
      <h3 className="label flex flex-col">
        {separateLabelText(labelText, STYLE[type].label.style)}
      </h3>

      <figure className="h-fit ~w-[160px]/[210px]">
        <img src={image} alt="An illustration of the service." />
      </figure>

      <Link
        text="Learn more"
        arrowColor={STYLE[type].link.arrow}
        bgColor={STYLE[type].link.bg}
        isArowFront={true}
        textColor={STYLE[type].link.text}
        className="~mt-[60px]/[95px] lg:max-xl:mt-0"
      />
    </div>
  );
}

function separateLabelText(labelText, labelClass = "") {
  const words = labelText.split(" ");
  const textClasses = "label label-green " + labelClass;

  if (words.length <= 1) {
    return labelText;
  }

  const mid = Math.ceil(words.length / 2);

  return (
    <>
      <span className={textClasses}>{words.slice(0, mid).join(" ")}</span>
      <span className={textClasses}>{words.slice(mid).join(" ")}</span>
    </>
  );
}
