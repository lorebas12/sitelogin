// botao change username

const usernameBotao = document.querySelector('.usuario-botao');

usernameBotao.addEventListener('click', () => {
    const username = document.querySelector('#usuario-input').value;
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
    
    if (username === ''){
        carregandoMsg.innerText = 'unfilled fields';
        carregandoMsg.style.color = 'red';
        setTimeout(() => {
            carregandoMsg.style.color = 'transparent';
        } ,2000);

    } else {
        carregandoMsg.innerText = 'loading...';
        carregandoMsg.style.color = 'red';
        setTimeout(() => {
            carregandoMsg.style.color = 'transparent';
        } ,2000);
    }
});