"use strict";

//require(["projekt", "window", "memory/memory", "memory/random", "RSS/rss.js", "imageGallery/imageGallery.js"]);
require.config({
    paths:{
        "rss": "RSS/rss",
        "memory": "memory/memory",
        "random": "memory/random",
        "imageGallery": "imageGallery/imageGallery"
    }
});


require(["projekt"]);