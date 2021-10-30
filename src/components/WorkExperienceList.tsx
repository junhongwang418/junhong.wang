import * as React from "react";
import List from "./List";
import WorkExperienceListItem from "./WorkExperienceListItem";

const WorkExperienceList = () => {
  return (
    <List spacing={36}>
      <WorkExperienceListItem
        jobTitle="Software Engineer"
        postId={5}
        employer="AppFolio, Inc"
        employerUrl="https://www.appfolio.com/"
        employerLogoUrl="/appfolio-logo.jpeg"
        duration="May 2021 - Present"
        location="Los Angeles, CA."
      />
      <WorkExperienceListItem
        jobTitle="Software Engineer Intern"
        postId={4}
        employer="AppFolio, Inc"
        employerUrl="https://www.appfolio.com/"
        employerLogoUrl="/appfolio-logo.jpeg"
        duration="Jun 2020 - Sep 2020"
        location="Los Angeles, CA."
      />
      <WorkExperienceListItem
        jobTitle="Software Developer Intern"
        postId={3}
        employer="The B. John Garrick Institute for the Risk Sciences"
        employerUrl="https://www.risksciences.ucla.edu/"
        employerLogoUrl="/risksciences-logo.png"
        duration="Jun 2019 - Sep 2019"
        location="Los Angeles, CA."
      />
      <WorkExperienceListItem
        jobTitle="iOS App Developer Intern"
        postId={2}
        employer="TeamLab"
        employerUrl="https://www.teamlab.art/"
        employerLogoUrl="/teamlab-logo.png"
        duration="Jul 2018 - Sep 2018"
        location="Tokyo, Japan."
      />
      <WorkExperienceListItem
        jobTitle="iOS App Developer Intern"
        postId={1}
        employer="MaruMe"
        employerUrl="https://www.linkedin.com/company/maru-me/about/"
        employerLogoUrl="/marume-logo.png"
        duration="Jun 2016 - Aug 2016"
        location="Berkeley, CA."
      />
    </List>
  );
};

export default WorkExperienceList;
