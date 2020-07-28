//Mouse and event interactions

const keyOpen = ['control-system-open', 'web-dev-open', 'emb-dev-open', 'mechanical-eng-open'];
const keyClose = ['control-system-close', 'web-dev-close', 'emb-dev-close', 'mechanical-eng-close'];

const skillsToOpen = [];
keyOpen.forEach(function(key){
  skillsToOpen.push(document.getElementById(key));
})

const skillsToClose = [];
keyClose.forEach(function(key){
  skillsToClose.push(document.getElementById(key));
})

const skillsTreeOpen = (event) => {
  event.target.style.display = inline-block;
}

const skillsTreeClose = (event) => {
  event.target.style.display = none;
}

const skillTreeManager = (skillTree) => {
  skillTree.addEventListener('click',skillsTreeOpen);
  skillTree.addEventListener('click',skillsTreeClose);
}