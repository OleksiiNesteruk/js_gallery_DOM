"use strict";
const mainImg = document.getElementById("largeImg");
const thumbs = document.getElementById("thumbs");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest("a");
    if (!link) return;
    mainImg.setAttribute("src", link.href);
});

//# sourceMappingURL=index.f75de5e1.js.map
