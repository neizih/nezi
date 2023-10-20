   // Array of GIF image URLs
        const gifUrls = [
            "https://web.archive.org/web/20091022064922im_/http://www.geocities.com/pollardgen/artflashstar.gif",
            "https://web.archive.org/web/20091022064922im_/http://www.geocities.com/pollardgen/artflashstar.gif",
            "https://web.archive.org/web/20091022064922im_/http://www.geocities.com/pollardgen/artflashstar.gif",
            "https://web.archive.org/web/20091022064922im_/http://www.geocities.com/pollardgen/artflashstar.gif",
            "https://web.archive.org/web/20091022064922im_/http://www.geocities.com/pollardgen/artflashstar.gif",
        ];

        // Function to create and randomly position GIFs
        function createRandomGif() {
            const gif = document.createElement("img");
            gif.src = gifUrls[Math.floor(Math.random() * gifUrls.length)];
            gif.classList.add("gif");

            const maxX = window.innerWidth - 100; // Adjust based on GIF size
            const maxY = window.innerHeight - 100; // Adjust based on GIF size

            gif.style.left = Math.floor(Math.random() * maxX) + "px";
            gif.style.top = Math.floor(Math.random() * maxY) + "px";

            document.body.appendChild(gif);

            setTimeout(() => {
                document.body.removeChild(gif);
                createRandomGif();
            }, 10000); // 10 seconds
        }

        // Create initial GIFs
        for (let i = 0; i < 5; i++) {
            createRandomGif();
        }


