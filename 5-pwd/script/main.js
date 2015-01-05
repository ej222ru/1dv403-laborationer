"use strict";

//require(["projekt", "window", "memory/memory", "memory/random", "RSS/rss.js", "imageGallery/imageGallery.js"]);
require.config({
    paths:{
        "rss": "script/RSS/rss",
        "memory": "script/memory/memory",
        "random": "script/memory/random",
        "imageGallery": "script/imageGallery/imageGallery"
    }
})


require(["projekt"]);