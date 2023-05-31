const container_login = document.querySelector('.login');
const boasvindas_titulo = document.querySelector('.boasVindas-titulo');
const boasvindas_imagem = document.querySelector('.perfil');
const boasvindas_botao = document.querySelector('.boasVindas-botao');

boasvindas_botao.addEventListener('click', () => {window.location.replace('home.html')});

setTimeout(() => {
    boasvindas_titulo.style.opacity = '100%';
    boasvindas_imagem.style.opacity = '100%';
    container_login.style.gap = '2.5em';
    
    document.querySelector('.login-boasVindas').style.opacity = '100%';

    
} ,1000);