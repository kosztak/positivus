import TriangleIcon from "assets/svg/TriangleIcon";

export default function Testamonial({
  slideData = { quote: "", name: "", position: "" },
}) {
  return (
    <div className="flex flex-col gap-[20px] text-white">
      <div className="relative mb-[40px] rounded-[45px] border-2 border-green ~p-[30px]/[50px]">
        <p>{slideData.quote}</p>

        <TriangleIcon className="absolute -bottom-[40px] left-[50px] h-[41px] w-[65px]" />
      </div>
      <div className="~ml-[20px]/[80px]">
        <p className="font-medium text-green">{slideData.name}</p>
        <p>{slideData.position}</p>
      </div>
    </div>
  );
}
