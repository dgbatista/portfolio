const skills = document.querySelectorAll('.skill');
const descricao = document.querySelector('.skill-desc');
const verMais = document.querySelector('.project-more');
const verMenos = document.querySelector('.project-less');
const target = document.querySelectorAll('[data-section]');
const theme_button = document.querySelectorAll('.theme-button');
const animationClass = 'animate';
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Styled Components</p> <br> <p>É uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.</p> <br>',
                    '<p>Sass</p> <br> <p>É uma linguagem de folhas de estilo. Basicamente o Sass potencializa o CSS.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
];

window.onload = function(){
    if(window.pageYOffset == 0){
        document.querySelector('.initial').classList.add(animationClass);
    }
    setTimeout(function(){
    }, 600);   
}

window.addEventListener('scroll', function(){
    sectionScroll();
});

function changeTheme(){
    if(theme_button){
        theme_button.forEach(function(button){
            button.addEventListener('click', function(event){
                event.preventDefault();
                
                if(event.target.classList.contains('light')){
                    event.target.classList.remove('light');
                    event.target.classList.add('dark');
                    document.body.classList.remove('light');
                    document.body.classList.add('dark');
                    document.querySelector('#theme-img').src='assets/images/sol.png';
                }else{
                    event.target.classList.remove('dark');
                    event.target.classList.add('light');
                    document.body.classList.remove('dark');
                    document.body.classList.add('light');
                    document.querySelector('#theme-img').src='assets/images/lua.png';
                }           
            });
        });
    }
}

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



function sectionScroll(){
    
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    });
}

changeTheme();
