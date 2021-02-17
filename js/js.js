const bebidasThumb =document.querySelectorAll('section .thumb img');
const bebidaImage = document.querySelector('.starbucks')

for (let index = 0; index < bebidasThumb.length; index++) {
    bebidasThumb[index].addEventListener('click', ()=>{
        var miniatura = bebidasThumb[index].getAttribute('imgSlider')
        bebidaImage.setAttribute('src', "img/"+miniatura+".png")
    })
    
}