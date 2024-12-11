const menu_hamburguer = document.getElementById('menu_hamburguer')
let mobileIcon = menu_hamburguer.querySelector('i')
const mobileMenu = document.getElementById('mobile-menu')
menu_hamburguer.addEventListener('click',()=>{
    menu_hamburguer.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    mobileIcon.classList.toggle("fa-x")
})

/*Sistema de animação de deslize*/
let index = 0 
//aqui nessa função eu vou pegar a direção do botão
function moverSlide(dir){
    const img = document.querySelectorAll('.fotos_academia')
    const div_fotos = document.querySelectorAll('.div_fotos')
    const total_img = img.length

    // eu passo para o index o numero da direção
    index += dir

    // aqui eu faço uma verificação se por exemplo, eu estou na primeira imagem e clicar no botão prev ele passa o -1 para o index, ai pega o total de imagens que tem e faz menos 1 como tem 3 imagens -1 ele vai para a ultima imagem 
    if(index<0){
        index = total_img -1
        // aqui se o index for maior que o total de imagens ele volta para a imagem padrão
    }else if(index>=total_img){
        index = 0
    }
    
    //aqui eu faço o efeito
    const img_container = document.querySelector('.img_container')
    img_container.style.transform = `translateX(-${index * 100}%)`

    //aqui eu fou um forEach para mostrar as imagens 
    img.forEach((i,Iindex)=>{
        const divFotos = div_fotos[Iindex]

        i.classList.remove('saindo')
        i.classList.add('visivel')

        if(divFotos){
        if(Iindex  === index){
            i.style.opacity = 1
            divFotos.style.display = 'block'
        }else{
            i.classList.add('saindo')
            i.style.opacity = 0
            divFotos.style.display = 'none'
        }
    }
    })
}


/*Sistema de animação visivel e saindo*/
const img_efeito = document.querySelectorAll('.img_container, .img_container img')
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
},{threshold: 0.2})

img_efeito.forEach((img)=> observer.observe(img))
