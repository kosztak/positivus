export default function Section({ title = "", description = "", children }) {
  return (
    <div className="container">
      <div className="flex items-start ~mb-[40px]/[80px] ~gap-[30px]/[40px] max-lg:flex-col max-lg:items-center">
        <h2 className="label label-green max-lg:w-fit max-lg:text-center lg:min-w-fit">
          {title}
        </h2>
        <div>
          <p className="max-w-[65%] max-lg:mx-auto max-lg:text-center">
            {description}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col ~gap-[70px]/[100px]">{children}</div>
    </div>
  );
}
