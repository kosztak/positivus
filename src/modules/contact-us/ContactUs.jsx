import ContactUsIllustration from "assets/svg/ContactUsIllustration";
import Input from "components/input/Input";
import Radio from "components/radio/Radio";
import TextArea from "components/text-area/TextArea";

export default function ContactUs() {
  return (
    <form
      action="POST"
      className="relative items-stretch rounded-[45px] bg-gray-light ~px-[50px]/[100px] ~py-[40px]/[70px]"
    >
      <div className="flex flex-col ~gap-[30px]/[40px] ~lg/2xl:~w-[400px]/[550px] max-lg:w-auto">
        <div className="flex ~gap-[25px]/[35px]">
          <Radio id="greet" label="Say Hi" name="greet" defaultChecked={true} />
          <Radio id="get-quote" label="Get a Quote" name="greet" />
        </div>

        <div className="flex flex-col ~gap-[15px]/[25px]">
          <Input label="Name" id="name" name="name" placeholder="Name" />

          <Input
            label="Email*"
            id="email"
            name="email"
            placeholder="Email"
            required={true}
          />

          <TextArea
            label="Message*"
            name="message"
            id="message"
            placeholder="Message"
            required={true}
            className="~h-[150px]/[190px]"
          />
        </div>

        <button className="btn btn-dark">Send Message</button>
      </div>

      <ContactUsIllustration className="absolute inset-y-0 right-[21px] my-auto translate-x-1/2 ~lg:~h-[485px]/[690px] ~lg:~w-[455px]/[650px] max-lg:hidden" />
    </form>
  );
}
