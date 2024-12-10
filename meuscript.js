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

    fetch('https://projeto-academia.onrender.com/contato',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dados)
    })
    .then(res=> res.json())
    .then(data=>{
        if (data.success) {
            console.log('Mensagem enviada com sucesso')
            document.querySelector('.form_contato').reset()
        } else {
            console.log('Falha no envio da mensagem:', data.message)
        }
    })
    .catch(error => {
        // Caso ocorra algum erro
        alert('Erro ao enviar mensagem.');
        console.error('Erro:', error);
    });
})


/*Sistema de efeito aparecendo e saindo*/

const img_efeito = document.querySelectorAll('.section_main')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visivel')
            entry.target.classList.remove('saindo')
        }else{
            entry.target.classList.add('saindo')
            entry.target.classList.remove('visivel')
        }
    })
},{threshold: 0.1})

img_efeito.forEach((img)=> observer.observe(img))


/*efeito depoimentos*/
const img_depoimetnos = document.querySelectorAll('.testimonials')
const observer_depoimentos = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visivel_depoimentos')
            entry.target.classList.remove('saindo_depoimentos')
        }else{
            entry.target.classList.add('saindo_depoimentos')
            entry.target.classList.remove('visivel_depoimentos')
        }
    })
},{threshold: 0.0})

img_depoimetnos.forEach((img)=> observer.observe(img))