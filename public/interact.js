//Mouse and event interactions

const key = ['control-system', 'web-dev', 'emb-dev', 'mechanical-eng'];
const skillsToOpen = [];
keys.forEach(function(key){
  skillsToOpen.push(document.getElementById(key));
})

const skillsTreeOpen = (event) => {

}

const skillsTreeClose = (event) => {
  
}

const skillTreeManager = (skillTree) => {
  skillTree.addEventListener('click',skillsTreeOpen);
}