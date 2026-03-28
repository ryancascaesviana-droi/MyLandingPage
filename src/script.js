


var projetos = [
  { titulo: "meu incrivel projeto 1", descricao: "meu projeto eh muito massa", link: "#" },
  { titulo: "meu incrivel projeto 2", descrição: "meu projeto é muito massa", link: "#" },
  { titulo: "meu incrivel projeto 3", descrição: "meu projeto é muito massa", link: "#" },
  { titulo: "meu incrivel projeto 4", descrição: "meu projeto é muito massa", lnk: "#" }

];

const projectGrid = document.querySelector('.project-grid');

if (projectGrid) {
  alert('oi')
  projectGrid.innerHTML = '';
  projetos.forEach(function (projeto) {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = projectGrid.link;
    card.innerHTML = '<h3>' + projeto.titulo + '</h3><p>' + projeto.descrição + '</p>';
    projectGrid.appendChild(card);
    
  });

}






