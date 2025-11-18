import proposalPic from "assets/images/proposal.png";

export default function Proposal() {
  return (
    <div className="relative lg:py-[25px]">
      <div className="w-full rounded-[45px] bg-gray-light ~p-[45px]/[60px]">
        <div className="flex flex-col items-stretch ~gap-[20px]/[25px] lg:max-w-[500px] lg:items-start">
          <h3>Let's make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="btn btn-dark">Get your free proposal</button>
        </div>
      </div>

      <figure className="absolute inset-y-0 right-[30px] h-full max-lg:hidden xl:right-[10%]">
        <img src={proposalPic} alt="Ball with eyes inside of circles." />
      </figure>
    </div>
  );
}
