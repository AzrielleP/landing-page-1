const toggleMenu = (() => {

    const burgerIcon = document.querySelector('.burger-icon');
    const burgerIconContainer = document.querySelector('.burger-icon-container');
    const nav = document.querySelector('.nav-links-container');

    burgerIcon.addEventListener('click', ()=> {
        nav.classList.toggle('expanded');
        burgerIconContainer.classList.toggle('expanded');
        console.log('x')
    })
    
})();

