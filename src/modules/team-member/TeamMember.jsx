import LinkedInIcon from "assets/svg/LinkedInIcon";

export default function TeamMember({
  image = "",
  name = "",
  role = "",
  experience = "",
}) {
  return (
    <div className="shadow-base flex flex-col rounded-[45px] border border-gray-dark ~gap-[20px]/[30px] ~px-[20px]/[35px] ~py-[25px]/[40px]">
      <div className="flex ~gap-[15px]/[20px]">
        <figure className="aspect-square ~h-[80px]/[105px]">
          <img
            src={image}
            alt="Image of team member."
            className="!h-full !w-full"
          />
        </figure>
        <div className="flex w-full flex-col items-end justify-between gap-[10px]">
          <a href="">
            <LinkedInIcon bgColor="black" textColor="green" />
          </a>
          <div className="w-full">
            <h4>{name}</h4>
            <p>{role}</p>
          </div>
        </div>
      </div>
      <hr />
      <p>{experience}</p>
    </div>
  );
}
