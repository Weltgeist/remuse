//Mouse and event interactions

//const keyOpen = ['control-system-open', 'web-dev-open', 'emb-dev-open', 'mechanical-eng-open'];
//const keyClose = ['control-system-close', 'web-dev-close', 'emb-dev-close', 'mechanical-eng-close'];
const keyOpen = ['web-dev-open'];
const keyClose = ['web-dev-close'];

const skillsToOpen = [];
keyOpen.forEach(function(key){
  skillsToOpen.push(document.getElementById(key));
})

const skillsToClose = [];
keyClose.forEach(function(key){
  skillsToClose.push(document.getElementById(key));
})

const skillsTreeOpen = (event) => {
  document.getElementById('skill-HB').style.display = 'flex';
}

const skillsTreeClose = (event) => {
  document.getElementById('skill-HB').style.display = 'none';
}

const skillTreeManager = (buttonToOpen,buttonToClose) => {
  buttonToOpen.addEventListener('click',skillsTreeOpen);
  buttonToClose.addEventListener('click',skillsTreeClose);
}

for (let i = 0; i < skillsToOpen.length; i++ ) {
  skillTreeManager(skillsToOpen[i],skillsToClose[i]);
}

