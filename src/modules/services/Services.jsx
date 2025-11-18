import analyticsPic from "assets/images/services/analytics.png";
import clickPic from "assets/images/services/click.png";
import contentPic from "assets/images/services/content.png";
import emailPic from "assets/images/services/email.png";
import magnifyPic from "assets/images/services/magnify.png";
import socialPic from "assets/images/services/social.png";

import Service from "modules/service/Service";

export default function Services() {
  return (
    <div className="~gap[30px]/[40px] grid grid-cols-1 gap-[40px] lg:grid-cols-2">
      <Service
        type="light"
        image={magnifyPic}
        labelText="Search engine optimization"
      />
      <Service
        type="green"
        image={clickPic}
        labelText="Pay-Per-Click advertising"
      />
      <Service
        type="dark"
        image={socialPic}
        labelText="Social Media Marketing"
      />
      <Service type="light" image={emailPic} labelText="Email Marketing" />
      <Service type="green" image={contentPic} labelText="Content Creation" />
      <Service
        type="dark"
        image={analyticsPic}
        labelText="Analytics and Tracking"
      />
    </div>
  );
}
