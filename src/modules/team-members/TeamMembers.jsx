import TeamMember from "modules/team-member/TeamMember";

import brianWilliamsPic from "assets/images/team-members/brian-williams.png";
import emilyJohnsonPic from "assets/images/team-members/emily-johnson.png";
import janeDoePic from "assets/images/team-members/jane-doe.png";
import johnSmithPic from "assets/images/team-members/john-smith.png";
import michaelBrownPic from "assets/images/team-members/michael-brown.png";
import sarahKimPic from "assets/images/team-members/sarah-kim.png";

const MEMBERS = [
  {
    image: johnSmithPic,
    name: "John Smith",
    role: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: janeDoePic,
    name: "Jane Doe",
    role: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    image: michaelBrownPic,
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    image: emilyJohnsonPic,
    name: "Emily Johnson",
    role: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    image: brianWilliamsPic,
    name: "Brian Williams",
    role: "Social Media Specialist",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    image: sarahKimPic,
    name: "Sarah Kim",
    role: "Content Creator",
    experience:
      "2+ years of experience in writing and editing\nSkilled in creating compelling, SEO-optimized content for various industries",
  },
];

export default function TeamMembers() {
  return (
    <div className="flex flex-col gap-[40px] md:items-end">
      <div className="grid ~gap-[20px]/[40px] sm:grid-cols-2 xl:grid-cols-3">
        {MEMBERS.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            experience={member.experience}
          />
        ))}
      </div>

      <div className="md:w-[270px]">
        <button className="btn btn-dark w-full">See all them</button>
      </div>
    </div>
  );
}
