


const templateElement = document.getElementById('exptemplateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('exp-HB').innerHTML = compiledHtml;


const templateElement2 = document.getElementById('skilltemplateHB');
const templateSource2 = templateElement2.innerHTML;
const template2 = Handlebars.compile(templateSource2);
const compiledHtml2 = template2(context);
document.getElementById('skill-HB').innerHTML = compiledHtml2;