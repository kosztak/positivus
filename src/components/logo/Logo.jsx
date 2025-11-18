import LogoIcon from "assets/svg/LogoIcon";

const STYLES = {
  header: {
    icon: "",
    text: "font-medium ~text-[36px]/[40px]",
  },
  footer: {
    icon: "w-[30px] h-[30px] [&>path]:fill-white",
    text: "font-medium ~text-[26px]/[30px]",
  },
};

export default function Logo({ isHeader = true }) {
  const currentStyle = isHeader ? STYLES.header : STYLES.footer;

  return (
    <div className="flex items-center gap-[5px]">
      <LogoIcon className={currentStyle.icon} />
      <p className={currentStyle.text}>Positivus</p>
    </div>
  );
}
