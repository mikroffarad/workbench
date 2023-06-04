let gitPermissions = {
  read: "1 - read",
  write: "2 - write",
  admin: "3 - admin",
  whoAmI() {
    console.log(`I'm an ${this.name} - ${this.level}. My code status is: ${this.permissionStatus}`);
  }
}
// Constructor function:
function FrontendDeveloper(name, skills, experience, responsibilities, tools, designSkills, versionControl, codeEditors, continuousIntegration, level, permissionStatus) {
  this.name = name;
  this.skills = skills;
  this.experience = experience;
  this.responsibilities = responsibilities;
  this.introduceYourself = function () {
    console.log(`My name is ${this.name}. I know ${this.skills.join(', ')}.`);
  }
  this.tools = tools;
  this.designSkills = designSkills;
  this.versionControl = versionControl;
  this.codeEditors = codeEditors;
  this.continuousIntegration = continuousIntegration;
  this.__proto__ = gitPermissions;
  this.level = level;
  this.permissionStatus = permissionStatus;
}

// Junior Frontend Developer
const juniorFrontendDeveloper = new FrontendDeveloper(
  "Jane Smith",
  ["HTML", "CSS", "JavaScript"],
  "1 year",
  [
    "Assisting in the development of web interfaces",
    "Implementing designs provided by senior developers",
    "Performing code reviews and debugging",
  ],
  ["React", "CSS Frameworks"],
  ["Basic understanding of UI/UX principles"],
  "Git",
  ["Visual Studio Code"],
  "None",
  "Junior Frontend Developer",
  gitPermissions.read
);

console.log(juniorFrontendDeveloper.introduceYourself());


// Middle Frontend Developer
const middleFrontendDeveloper = new FrontendDeveloper(
  "Alex Johnson",
  ["HTML", "CSS", "JavaScript"],
  "3 years",
  [
    "Developing and maintaining web interfaces",
    "Collaborating with designers and backend developers",
    "Optimizing performance and user experience",
    "Leading small frontend projects",
  ],
  ["React", "Angular", "Sass"],
  ["Strong UI/UX skills", "Responsive design"],
  "Git",
  ["Visual Studio Code", "Sublime Text"],
  "Jenkins",
  "Middle Frontend Developer",
  gitPermissions.write
);

console.log(middleFrontendDeveloper);

// Senior Frontend Developer
const seniorFrontendDeveloper = new FrontendDeveloper(
  "Michael Brown",
  ["HTML", "CSS", "JavaScript"],
  "7+ years",
  [
    "Designing and developing complex web interfaces",
    "Mentoring junior and mid-level developers",
    "Leading frontend architecture decisions",
    "Performing code optimization and refactoring",
  ],
  ["React", "Vue.js", "TypeScript"],
  ["Expert in UI/UX principles", "Mobile-first design"],
  "Git",
  ["Visual Studio Code", "WebStorm"],
  "CircleCI",
  "Senior Frontend Developer",
  gitPermissions.admin
);

console.log(seniorFrontendDeveloper);

console.log(juniorFrontendDeveloper.whoAmI());