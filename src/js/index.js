const moveProject = function(id) {
  switch (id) {
    case 'wordHunter':
      window.open('https://github.com/jinseoplee/word-hunter', '_blank');
      break;
    case 'portfolio':
      window.open('https://github.com/jinseoplee/portfolio', '_blank');
      break;
    case 'webGame':
      window.open('https://jinseoplee.github.io/web-game/', '_blank');
      break;
    default:
  }
};

window.onload = () => {

  const projects = document.querySelectorAll('.project');

  for (const project of projects) {
    project.addEventListener('click', (e) => {
      moveProject(project.id);
    });
  }
};