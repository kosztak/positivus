import CaseStudies from "modules/case-studies/CaseStudies";
import HeroBanner from "modules/hero-banner/HeroBanner";
import Proposal from "modules/proposal/Proposal";
import Section from "modules/section/Section";
import Services from "modules/services/Services";
import ProcessSteps from "modules/process-steps/ProcessSteps";
import TeamMembers from "modules/team-members/TeamMembers";
import ContactUs from "modules/contact-us/ContactUs";
import Testamonials from "modules/testamonials/Testamonials";

export default function Main() {
  return (
    <main className="mt-[130px] flex flex-col ~gap-[80px]/[140px] ~pb-[90px]/[140px]">
      <HeroBanner />

      <Section
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      >
        <Services />

        <Proposal />
      </Section>

      <Section
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      >
        <CaseStudies />
      </Section>

      <Section
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      >
        <ProcessSteps />
      </Section>

      <Section
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      >
        <TeamMembers />
      </Section>

      <Section
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      >
        <Testamonials />
      </Section>

      <Section
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      >
        <ContactUs />
      </Section>
    </main>
  );
}
