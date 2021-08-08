const container=document.querySelector('.container')
console.log(container)
console.log(container.getAttribute('class'))
const btnTest=document.querySelectorAll('.btn')
btnTest[0].addEventListener('click',(e)=>{
    container.setAttribute('class','container-1')
    console.log(e.target)
})

