import Link from "components/link/Link";

export default function CaseStudy({ slideData }) {
  return (
    <div className="flex h-full flex-col justify-between gap-[20px]">
      <p className="text-white">{slideData}</p>
      <Link
        arrowColor="green"
        isArowFront={false}
        text="Learn more"
        textColor="green"
      />
    </div>
  );
}
