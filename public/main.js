
const context = {
  experiences: [
    {
      date:"July 2018~Now",
      location:"International",
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGBZhibjnUZuQ/company-logo_200_200/0?e=2159024400&v=beta&t=Hun9oGD0r1_Hp2OMEwZvOf0jacz_rEHXNSm1e9EQ-jg",
      jobTitle: "Eng. Consultant - Part time/Online",
      workplace: "Upwork & Utest",
      jobDescription: [ "Offer engineering services in projects such as: Robotic Control System Design & Software development (C/C++/Matlab); Mechanical design of movie props (Solidworks), Software Translation (C++/Python/Matlab)", "Offer consulting expertise in Multiple S/W & H/W functional testing projects for products, applications & websites from Amazon, Google, Slack, Applause & others. Report results of debug logs & visual feedback.", "Sales & Marketing: Making bids, setting terms & prices, developing and implementing online marketing strategies"]
    }
  ],

  skills: [
    {
      name: "Matlab",
      value: 10,
      percent: 100
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
