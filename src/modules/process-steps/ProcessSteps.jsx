import ProcessStep from "modules/process-step/ProcessStep";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    details:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    details:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "03",
    title: "Implementation",
    details:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    details:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    details:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    details:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="flex flex-col ~gap-[20px]/[30px]">
      {STEPS.map((step, index) => (
        <ProcessStep
          key={index}
          number={step.number}
          title={step.title}
          details={step.details}
          isOpen={index === 0}
        />
      ))}
    </div>
  );
}
