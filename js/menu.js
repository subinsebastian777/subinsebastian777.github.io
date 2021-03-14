const navToggle = document.querySelector('.menu-toggle');
const menuPointer = document.querySelectorAll('.navLink');



navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('menu-open');
})

menuPointer.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('menu-open');
    })
});