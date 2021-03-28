// Home hero section

document.addEventListener("DOMContentLoaded", function() {
    let heroBlock = document.querySelector('.hero');
    let heroText = document.querySelector('.hero h1');
    if (heroText) {

        heroBlock.addEventListener("mousemove", function(e) {
            let x = e.clientX,
                y = e.clientY,
                height = window.innerHeight,
                width = window.innerWidth;

            let deltaX = 0.1 + (x / -width / 4),
                deltaY = 0.1 + (y / -height / 4);

            heroText.style.textShadow = `${deltaX}em ${deltaY}em 0.1em #01ecff`
            heroText.style.textShadow = `${deltaX}em ${deltaY}em 0.1em #01ecff`
            heroText.style.transform = `rotateZ(${deltaX * 25}deg) skew(${deltaX * 16}deg, ${deltaX * 16}deg)`

            console.log('Coords:', x, y);
            console.log('Coords:', deltaX, deltaY);
        })
    }
})