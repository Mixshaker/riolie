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
    let podcasts = document.getElementById('podcasts');

    async function getInfo(url) {
        const response = await fetch(url);
        const data = await response.json();

        // console.log(data);

        data.data.forEach(function(el) {

            let cover = document.createElement('img');
            cover.src = el.pictures['640wx640h'];
            cover.dataset.mixcloudPlayButton = el.url;
            podcasts.append(cover);
        });

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

    getInfo(url).then(function(data) {


        // Load more
        let pagingBtn = document.getElementById('paging');

        pagingBtn.addEventListener("click", function(e) {
            e.preventDefault();
            url = this.href;

            getInfo(url);
        });
    });


    // Navigation
    const podcastsBtn = document.getElementById('podcastsBtn');
    const releasesBtn = document.getElementById('releasesBtn');
    const podcastsSection = document.querySelector('.podcasts');
    const releasesSection = document.querySelector('.releases');



    podcastsBtn.addEventListener("click", function(e) {
        e.preventDefault();
        podcastsSection.style.display = "block";
        releasesSection.style.display = "none";
        clickHandler();

    })

    releasesBtn.addEventListener("click", function(e) {
        e.preventDefault();
        releasesSection.style.display = "block";
        podcastsSection.style.display = "none";
        clickHandler();

    })


    function clickHandler() {
        scroll({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }


});