const menu_hamburguer = document.getElementById('menu_hamburguer')
let mobileIcon = menu_hamburguer.querySelector('i')
const mobileMenu = document.getElementById('mobile-menu')
menu_hamburguer.addEventListener('click',()=>{
    menu_hamburguer.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    mobileIcon.classList.toggle("fa-x")
})

document.querySelector('.form_contato').addEventListener('submit',(e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    const dados = {
        nome:nome,
        email:email,
        message:message
    }

    fetch('https://projeto-academia-8t7rdd393-vinicius-dvs-projects.vercel.app/contato',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dados)
    })
    .then(res=> res.json())
    .then(data=>{
        if (data.success) {
            console.log('Mensagem enviada com sucesso');
            document.querySelector('.form_contato').reset()
        } else {
            console.log('Falha no envio da mensagem:', data.message);
        }
    })
    .catch(error => {
        // Caso ocorra algum erro
        alert('Erro ao enviar mensagem.');
        console.error('Erro:', error);
    });
})