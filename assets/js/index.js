const skills = document.querySelectorAll('.skill');
const descricao = document.querySelector('.skill-desc');
const verMais = document.querySelector('.project-more');
const verMenos = document.querySelector('.project-less');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>Styled Components</p> <br> <p>É uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.</p> <br>',
                    '<p>Sass</p> <br> <p>É uma linguagem de folhas de estilo. Basicamente o Sass potencializa o CSS.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
];

skills.forEach(  (elemento, index) => {
    elemento.addEventListener('mouseover', () => {
        descricao.innerHTML = `<p>${sobreSkill[index]} </p>` ;
    } )
    elemento.addEventListener('mouseout', () => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );

verMais.addEventListener('click', function(){
    document.querySelector('.more').style.display = 'flex';
    verMais.classList.add('hidden');
    verMais.classList.remove('showFlex');
    verMenos.classList.add('showFlex');
});
verMenos.addEventListener('click', function(){
    document.querySelector('.more').style.display = 'none';
    verMais.classList.remove('hidden');
    verMais.classList.add('showFlex');
    verMenos.classList.add('hidden');
    verMenos.classList.remove('showFlex');
});