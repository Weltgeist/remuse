//Mouse and event interactions

// const keyOpen = ['control-eng-open', 'web-dev-open', 'emb-dev-open', 'mech-eng-open'];
// const keyClose = ['control-eng-close', 'web-dev-close', 'emb-dev-close', 'mech-eng-close'];
const keyOpenClose = ['control-eng-open', 'web-dev-open', 'emb-dev-open', 'mech-eng-open', 'control-eng-close', 'web-dev-close', 'emb-dev-close', 'mech-eng-close'];

const skillsToOpenClose = [];
keyOpenClose.forEach(function(key){
  skillsToOpenClose.push(document.getElementById(key));
})

// const skillsToClose = [];
// keyClose.forEach(function(key){
//   skillsToClose.push(document.getElementById(key));
// })

const skillsTreeOpenClose = (event) => {
  if(event.target.id == 'control-eng-open'){
    document.getElementById('control-eng').style.display = 'flex';
  }
  else if(event.target.id == 'web-dev-open'){
    document.getElementById('web-dev').style.display = 'flex';
  }
  else if(event.target.id == 'emb-dev-open'){
    document.getElementById('emb-dev').style.display = 'flex';
  }
  else if(event.target.id == 'mech-eng-open'){
    document.getElementById('mech-eng').style.display = 'flex';
  }
  else if(event.target.id == 'control-eng-close'){
    document.getElementById('control-eng').style.display = 'none';
  }
  else if(event.target.id == 'web-dev-close'){
    document.getElementById('web-dev').style.display = 'none';
  }
  else if(event.target.id == 'emb-dev-close'){
    document.getElementById('emb-dev').style.display = 'none';
  }
  else if(event.target.id == 'mech-eng-close'){
    document.getElementById('mech-eng').style.display = 'none';
  }
}

// const skillsTreeClose = (event) => {
//   document.getElementById('skill-HB').style.display = 'none';
// }

const skillTreeManager = (buttonToOpenClose) => {
  buttonToOpenClose.addEventListener('click',skillsTreeOpenClose);
  // buttonToClose.addEventListener('click',skillsTreeClose);
}

for (let i = 0; i < skillsToOpenClose.length; i++ ) {
  skillTreeManager(skillsToOpenClose[i]);
}

