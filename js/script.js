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
        })
    }
});

// Mixcloud

document.addEventListener("DOMContentLoaded", function() {

    let url = "//api.mixcloud.com/riolie/cloudcasts/?limit=15";

    async function getInfo(url) {
        const response = await fetch(url);
        const data = await response.json();

        // console.log(data);

        let podcasts = document.getElementById('podcasts');


        data.data.forEach(function(el) {

            let cover = document.createElement('img');
            cover.src = el.pictures['640wx640h'];
            cover.dataset.mixcloudPlayButton = el.url;
            podcasts.append(cover);

        });

        // let paging = document.createElement('a');
        let paging;
        if (data.paging.next) {
            paging = document.getElementById('paging') ? document.getElementById('paging') : document.createElement('a');
            paging.href = data.paging.next;
            paging.id = "paging";
            paging.className = "paging";
            paging.innerText = "Load more";
            podcasts.after(paging);
        } else {
            document.getElementById('paging').remove();
        }

    };

    getInfo(url).then(function() {
        // Load more
        let pagingBtn = document.getElementById('paging');

        pagingBtn.addEventListener("click", function(e) {
            e.preventDefault();
            url = this.href;

            getInfo(url);
        });
    });




});