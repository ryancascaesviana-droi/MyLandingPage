


var projetos = [
  { titulo: "Proejeto 1: Totem maluco ", descrição: "Projeto de programação criativa usando o p5js para desenhar um totem", link: "https://editor.p5js.org/ryancascaesviana/sketches/7yMGKtBd5" },
  { titulo: "Proejeto 2: Emoções", descrição: "Projeto de programaçãõ de mundança de emoções com p5js", link: "https://editor.p5js.org/ryancascaesviana/sketches/2dq8e7xct" },
  { titulo: "Proejeto 3: Contador", descrição: "projeto de programação com contador de numeros no p5js", link: "https://editor.p5js.org/ryancascaesviana/sketches/Kl53HhxS6" },
  { titulo: "Proejeto 4: Flor", descrição: "projeto de programação criativo desenhando uma flor no p5js", link: "https://editor.p5js.org/ryancascaesviana/sketches/O-t4zRQHU" },
  

];

const projectGrid = document.querySelector('.project-grid');

if (projectGrid) {
  projectGrid.innerHTML = '';
  projetos.forEach(function (projeto) {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = projeto.link;
    card.target = "_blank"
    card.innerHTML = '<h3>' + projeto.titulo + '</h3><p>' + projeto.descrição + '</p>';
    projectGrid.appendChild(card);
    
  });

}






