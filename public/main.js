
const context = {
  experiences: [
    {
      date:"July 2018~Now",
      location:"International",
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGBZhibjnUZuQ/company-logo_200_200/0?e=2159024400&v=beta&t=Hun9oGD0r1_Hp2OMEwZvOf0jacz_rEHXNSm1e9EQ-jg",
      jobTitle: "Eng. Consultant - Part time/Online",
      workplace: "Upwork & Utest",
      jobDescription: [ "Offer engineering services in projects such as: Robotic Control System Design & Software development (C/C++/Matlab); Mechanical design of movie props (Solidworks), Software Translation (C++/Python/Matlab)", "Offer consulting expertise in Multiple S/W & H/W functional testing projects for products, applications & websites from Amazon, Google, Slack, Applause & others. Report results of debug logs & visual feedback.", "Sales & Marketing: Making bids, setting terms & prices, developing and implementing online marketing strategies"]
    },
    {
      date:"Jan. 2019~ Aug.2019",
      location:"Montreal,QC,Canada",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/CAE_Inc_Logo.svg/1200px-CAE_Inc_Logo.svg.png",
      jobTitle: "Software Developer - Aircraft Autopilot Control System Software Specialist",
      workplace: "CAE & Experis Veritaq",
      jobDescription: [ "Develop, Design, Debug & Test embedded RTOS Aircraft Autopilot software on industrial aircraft simulator.", "Solve Software & Hardware Defects/Issues. Code optimisation & refactoring. Test Piloting for debugging purposes"]
    },
    {
      date:"May 2016~ Oct.2017",
      location:"Laval,QC,Canada",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Gebo_Cermex_logo.png",
      jobTitle: "3D Mechanical Design Engineer",
      workplace: "Gebo Cermex",
      jobDescription: [ "Design conveyors, palletizing and packaging machines and carry out mechanical analysis.", "Inspect the installation and assembly of the product on site or in the workshop.", "Perform structural calculation, pneumatic design and electrical integration. Assistant of the robotics department" ]
    },
    {
      date:"Nov.2015~ March 2016",
      location:"Beijing,China",
      image: "https://show-canada-china.com/wp-content/uploads/2014/06/couleur_fond_noir.png",
      jobTitle: "Eng. Consultant – Site Engineer/Technical Doc. writer ",
      workplace: "Show Canada China Ltd",
      jobDescription: [ "Disneyland Shanghai Project", "Assist project managers and write, edit and update technical documents." , "Design circuit and PLC software (Beckhoff/Twincat) and execute mechanical studies for attraction parks floats & structures."]
    },
    {
      date:"Oct.2014~ Now",
      location:"Montreal,QC,Canada",
      image: "https://fusionjeunesse.org/wp-content/uploads/2020/03/Youth-Fusion-noir-300x208.png",
      jobTitle: "Robotics Volunteer/Robotics Coordinator",
      workplace: "Fusion Jeunesse",
      jobDescription: [ "Design a mobile robot from ‘’Top to bottom’’ and manage a team of students, technicians and engineers.", "Create mechanical/ electrical design, perform manufacturing/assembly and develop robot software (LabVIEW/Java).", "Plan budget and milestone." ]
    }
  ],

  skills: [
    {
      name: "Matlab",
      value: 10,
      percent: 100
    },
    {
      name: "Simulink",
      value: 9,
      percent: 90
    },
    {
      name: "C",
      value: 7,
      percent: 70
    },
    {
      name: "C++",
      value: 8,
      percent: 80
    },
    {
      name: "Python",
      value: 7,
      percent: 70
    },
    {
      name: "Fortran",
      value: 6,
      percent: 60
    },
    {
      name: "HTML",
      value: 9,
      percent: 90
    },
    {
      name: "CSS",
      value: 8,
      percent: 80
    },
    {
      name: "Javascript",
      value: 8,
      percent: 80
    },
    {
      name: "Labview",
      value: 6,
      percent: 60
    },
    {
      name: "React",
      value: 1,
      percent: 10
    },
    {
      name: "Node",
      value: 1,
      percent: 10
    },
    {
      name: "UML",
      value: 7,
      percent: 70
    },
    {
      name: "Java",
      value: 7,
      percent: 70
    },
    {
      name: "VBA",
      value: 6,
      percent: 60
    },
    {
      name: "Yocto",
      value: 8,
      percent: 80
    },
    {
      name: "Vagrant",
      value: 7,
      percent: 70
    },
    {
      name: "VMBox",
      value: 7,
      percent: 70
    },
    {
      name: "QNX",
      value: 8,
      percent: 80
    },
    {
      name: "Odroidc2",
      value: 9,
      percent: 90
    },
    {
      name: "STM32",
      value: 5,
      percent: 50
    },
    {
      name: "TM4C123",
      value: 7,
      percent: 70
    },
    {
      name: "PIC16F684",
      value: 8,
      percent: 80
    },
    {
      name: "Arduino",
      value: 8,
      percent: 80
    },
    {
      name: "Roborio",
      value: 7,
      percent: 70
    },
    {
      name: "Beckhoff",
      value: 6,
      percent: 60
    },
    {
      name: "Node",
      value: 1,
      percent: 10
    },
    {
      name: "UML",
      value: 7,
      percent: 70
    },
    {
      name: "Java",
      value: 7,
      percent: 70
    }
  ]
  
};



const templateElement2 = document.getElementById('skilltemplateHB');
const templateSource2 = templateElement2.innerHTML;
const template2 = Handlebars.compile(templateSource2);
const compiledHtml2 = template2(context);
document.getElementById('skill-HB').innerHTML = compiledHtml2;



const templateElement = document.getElementById('exptemplateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('exp-HB').innerHTML = compiledHtml;
