document.addEventListener("click", (e) => {
    if (e.target.matches(".gallery__thumbnails > img")) {
        let $gallery_thumbnails = document.querySelectorAll(
            ".gallery__thumbnails > img"
        );
        let $gallery_main = document.querySelector(".gallery__main > img");
        $gallery_thumbnails.forEach((element) => {
            element.classList.remove("gallery__img--selected");
        });
        console.info($gallery_main);
        e.target.classList.add("gallery__img--selected");
        $gallery_main.src = e.target.getAttribute("src");
    }
});
