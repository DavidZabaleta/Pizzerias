//Documen Object Model (DOM)

let close = document.querySelectorAll('.close');
let links = document.querySelectorAll('.link');

links.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        
        e.preventDefault();
        let content = document.querySelector('.content');
        
        content.classList.remove('fadeInDown');
        content.classList.remove('animated');
                        
        content.classList.add('fadeOutUp');
        content.classList.add('animated');
       
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 500);
    });
});

close.forEach((link) =>{

    link.addEventListener('click', ()=>{

        
        let content = document.querySelector('.content');

        content.classList.remove('fadeInDown');
        content.classList.remove('animated');
        
        content.classList.add('fadeOutUp');
        content.classList.add('animated');

        setInterval(()=> {location.href = '/';}, 500);

    });
});
