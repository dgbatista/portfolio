const skills = document.querySelectorAll('.skill');
const descricao = document.querySelector('.skill-desc');
const verMais = document.querySelector('.project-more');
const verMenos = document.querySelector('.project-less');
const target = document.querySelectorAll('[data-section]');
const theme_button = document.querySelectorAll('.theme-button');
const animationClass = 'animate';
const menuBar  = document.querySelector('.bar');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Php</p> <br> <p>É uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.</p> <br>',
                    '<p>Laravel</p> <br> <p>O Laravel é um framework PHP gratuito e de código aberto, utilizado no desenvolvimento de sistemas para web.</p> <br>',
                    '<p>MySQL</p> <br> <p>O MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, apoiado pela Oracle e baseado em linguagem de consulta estruturada (SQL).</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
];
/*Eventos*/
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


menuBar.addEventListener('click', function(){
    openClosedMenu();
});

/*Função trocar tema da pagina*/
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
    document.querySelector('.skills-area').addEventListener('mouseout', () => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição*/';
    } )
    // elemento.addEventListener('mouseout', () => {
    //     descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    // } )
} );

// verMais.addEventListener('click', function(){
//     document.querySelector('.more').style.display = 'flex';
//     verMais.classList.add('hidden');
//     verMais.classList.remove('showFlex');
//     verMenos.classList.add('showFlex');
// });
// verMenos.addEventListener('click', function(){
//     document.querySelector('.more').style.display = 'none';
//     verMais.classList.remove('hidden');
//     verMais.classList.add('showFlex');
//     verMenos.classList.add('hidden');
//     verMenos.classList.remove('showFlex');
// });

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

function openClosedMenu(){
    var header = document.querySelector("#header").getAttribute('data-header');
    if(header == 'closed'){
        document.querySelector('#header').style.height = '200px';
        document.querySelector("#header").setAttribute('data-header', 'open');
        document.querySelector('#nav').style.display = 'flex';
        document.querySelector('.bar').style.display = 'none';
        document.addEventListener("mouseup", function(event) {
            var obj = document.getElementById("header");
            if (!obj.contains(event.target)) {
                closedMenu();
            }
        });       
    }else{
        document.querySelector('#header').style.height = '80px';
        document.querySelector("#header").setAttribute('data-header', 'closed');
        document.querySelector('#nav').style.display = 'none';
    }
}

function closedMenu(){
    document.querySelector('#header').style.height = '80px';
    document.querySelector("#header").setAttribute('data-header', 'closed');
    document.querySelector('#nav').style.display = 'none';
    document.querySelector('.bar').style.display = 'flex';
}


changeTheme();

