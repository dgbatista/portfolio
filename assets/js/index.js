const screen = window.matchMedia("(max-width: 767px)");
const skills = document.querySelectorAll('.skill');
const descricao = document.querySelector('.skill-desc');
const verMais = document.querySelector('.project-more');
const verMenos = document.querySelector('.project-less');
const target = document.querySelectorAll('[data-section]');
const theme_button = document.querySelectorAll('.theme-button');
const menu_a = document.querySelectorAll('.navigator');
const animationClass = 'animate';
const menuBar  = document.querySelector('.bar');
const closed_bar = document.querySelector('.closed-bar');
const bolhas = document.querySelectorAll('.bolhas span');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>PHP</p> <br> <p>É uma linguagem de programação de código aberto, amplamente utilizada para desenvolvimento web.</p> <br>',
                    '<p>Laravel</p> <br> <p>O Laravel é um framework PHP gratuito e de código aberto, utilizado no desenvolvimento de sistemas para web.</p> <br>',
                    '<p>MySQL</p> <br> <p>O MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, apoiado pela Oracle e baseado em linguagem de consulta estruturada (SQL).</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
];

/********************Função trocar tema da pagina********************/
function changeTheme(){
    if(theme_button){
        theme_button.forEach(function(button){
            button.addEventListener('click', function(event){
                event.preventDefault();
                
                if(event.target.classList.contains('light')){
                    ativarBolhas();
                    event.target.classList.remove('light');
                    event.target.classList.add('dark');
                    document.body.classList.remove('light');
                    document.body.classList.add('dark');
                    document.querySelector('#theme-img').src='assets/images/sol.png';
                }else{
                    desativarBolhas();
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
/********************FIM********************/

/*****Função para as sessões aparecerem ao rolar o scroll da tela********/
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
/********************FIM********************/

/*Função para abrir e fechar o menu em telas menores que 768px*/

/*Abrir menu*/
function openClosedMenu(){
    var header = document.querySelector("#header").getAttribute('data-header');
    if(header == 'closed' && screen.matches){
        document.querySelector('#header').style.height = '158px';
        document.querySelector("#header").setAttribute('data-header', 'open');
        setTimeout(function(){
            document.querySelector('#nav').style.display = 'flex';
        }, 200);       
        document.querySelector('.bar').style.display = 'none';
        closed_bar.style.display = 'block';
        document.querySelector('.theme').style.display = 'none';
        document.addEventListener("mouseup", function(event) {
            var obj = document.getElementById("header");
            if (!obj.contains(event.target)) {
                closedMenu();
            }
        });       
    }else{
        if(screen.matches){
            theme_button.style.display = 'none';
            document.querySelector('#header').style.height = '80px';
            document.querySelector("#header").setAttribute('data-header', 'closed');
            document.querySelector('#nav').style.display = 'none';
        }
    }
}

/*Função fecha menu*/
function closedMenu(){
    if(screen.matches){
        document.querySelector('#header').style.height = '80px';
        document.querySelector("#header").setAttribute('data-header', 'closed');
        document.querySelector('#nav').style.display = 'none';
        document.querySelector('.bar').style.display = 'flex';
        document.querySelector('.theme').style.display = 'block';
        closed_bar.style.display = 'none';
    }    
}
/********************FIM********************/

/*Função ativar/desativar bolhas modo noturno*/
function ativarBolhas(){
    bolhas.forEach(function(item){
        item.style.display = 'inline-block';
    });
}
function desativarBolhas(){
    bolhas.forEach(function(item){
        item.style.display = 'none';
    });
}

/*Fim função ativar bolhas*/
/********************************Eventos********************************/
window.onload = function(){
    if(window.pageYOffset == 0){
        document.querySelector('.initial').classList.add(animationClass);
    }
    setTimeout(function(){
    }, 600); 
    changeTheme();  
}

window.addEventListener('scroll', function(){
    sectionScroll();
});

menuBar.addEventListener('click', function(){
    openClosedMenu();
});

menu_a.forEach(function(target){
    target.addEventListener('click', closedMenu);
});

closed_bar.addEventListener('click', function(){
    closedMenu();
})

skills.forEach(  (elemento, index) => {
    elemento.addEventListener('mouseover', () => {
        descricao.innerHTML = `<p>${sobreSkill[index]} </p>` ;
    } )
    if(!screen.matches){
        document.querySelector('.skills-area').addEventListener('mouseout', () => {
            descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição*/';
        } )
    }else{
        descricao.innerHTML = '/* Clique sobre a habilidade para ler a descrição.*/';
    }
} );
/********************************FIM EVENTOS********************************/

