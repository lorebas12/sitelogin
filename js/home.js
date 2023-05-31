// botao change username

const usernameBotao = document.querySelector('.usuario-botao');
let usernameUser;

usernameBotao.addEventListener('click', () => {
    username = document.querySelector('#usuario-input').value;
    usernameUser = username;
    
    let errorMsg = document.querySelector('.errorMsg');
    if (username === ''){
        errorMsg.innerText = 'empty fields';
        errorMsg.style.color = 'orange';
    } else {
        errorMsg.innerText = 'valid username';
        errorMsg.style.color = 'green';
    }
});

// botao done all

const doneBotao = document.querySelector('.botao-done');
const carregandoMsg = document.querySelector('.carregando');

doneBotao.addEventListener('click', () => {
    const username = document.querySelector('#usuario-input').value;
    usernameUser = username;
    
    if (username === ''){
        carregandoMsg.innerText = 'unfilled fields';
        carregandoMsg.style.color = 'orange';
        setTimeout(() => {
            carregandoMsg.style.color = 'transparent';
        } ,2000);

    } else {
        carregandoMsg.innerText = 'loading...';
        carregandoMsg.style.color = '#fff';
        setTimeout(() => {
            carregandoMsg.style.color = 'transparent';
        } ,2000);

        setTimeout(() => {
            mostrarConteudoPerfil();
        }, 3500);
    }
});

//  CONTEUDO PERFIL - PARTE DE BAIXO

function mostrarConteudoPerfil(){
    const welcome = document.querySelector('.welcome');
    welcome.style.opacity = '100%';
    const perfilCont_titulo = document.querySelector('.perfilCont-titulo');
    perfilCont_titulo.innerText = usernameUser;

}