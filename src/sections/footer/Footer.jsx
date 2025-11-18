import LinkedInIcon from "assets/svg/LinkedInIcon";
import "./style.scss";
import FacebookIcon from "assets/svg/FacebookIcon";
import TwitterIcon from "assets/svg/TwitterIcon";
import Logo from "components/logo/Logo";

export default function Footer() {
  return (
    <footer className="footer flex flex-col rounded-t-[45px] bg-gray-dark text-white ~gap-[35px]/[50px] ~p-[40px]/[60px] md:container">
      <div className="flex w-full flex-col ~gap-[45px]/[65px]">
        <div className="flex items-center justify-between ~/xl:~gap-[30px]/[40px] max-xl:flex-col xl:items-start xl:gap-0">
          <Logo isHeader={false} />

          <div className="flex ~md:~gap-[20px]/[40px] max-sm:flex-col max-sm:items-center">
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">Use Cases</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
          </div>

          <div className="flex gap-[20px]">
            <LinkedInIcon
              bgColor="white"
              textColor="black"
              className="h-[30px] w-[30px]"
            />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>

        <div className="flex justify-between gap-[30px] max-lg:flex-col">
          <div className="flex flex-col ~gap-[20px]/[25px] max-lg:items-center">
            <h4 className="label label-green">Contact us:</h4>

            <div className="flex flex-col ~gap-[15px]/[20px] [&_p]:max-lg:text-center">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          <form
            action="POST"
            className="flex flex-col items-stretch gap-[20px] rounded-[15px] bg-gray-medium px-[40px] py-[60px] xl:flex-row xl:items-center"
          >
            <input
              type="text"
              placeholder="Email"
              className="grow rounded-[14px] border border-white bg-gray-medium px-[35px] py-[20px]"
            />

            <button className="btn btn-green">Subscribe to news</button>
          </form>
        </div>
      </div>

      <hr className="border-white" />

      <div className="flex ~gap-[30px]/[40px] max-md:flex-col max-md:items-center">
        <p>© 2023 Positivus. All Rights Reserved.</p>

        <a href="">Privacy Policy</a>
      </div>
    </footer>
  );
}
