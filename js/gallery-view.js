"use strict";

window.onload = function() {
  (function() {
    const gallery = document.querySelector(".image-gallery");

    const imgs = document.querySelectorAll(".image");

    // used of keeping track of a current image in a slider
    let thumbnailSrc;
    let thumbnailIndex;
    // get src attributes from thumbnails
    const srcCache = [];
    for (let i = 0; i < imgs.length; i++) {
      srcCache.push(imgs[i].getAttribute("src"));
    }

    gallery.addEventListener("click", imgClick);

    function imgClick(e) {
      const imgModal = document.querySelector(".modal-view");
      // open image viewer
      if (e.target.classList.contains("image-container")) {
        thumbnailSrc = e.target.children[0].getAttribute("src");
        thumbnailIndex = srcCache.indexOf(thumbnailSrc);
        viewImage(thumbnailSrc, imgModal);
        // close image viewer
      } else if (e.target.classList.contains("modal-view")) {
        closeImage(imgModal);
        // view images left and right
      } else if (e.target.classList.contains("arrow")) {
        const current = imgModal.querySelector(".modal-image");
        if (e.target.classList.contains("left")) {
          if (thumbnailIndex === 0) {
            thumbnailIndex = srcCache.length - 1;
          } else {
            thumbnailIndex--;
          }
        } else {
          if (thumbnailIndex === srcCache.length - 1) {
            thumbnailIndex = 0;
          } else {
            thumbnailIndex++;
          }
        }
        const thumbnailSrcEnd = srcCache[thumbnailIndex].slice(27);
        current.setAttribute(
          "src",
          `imgs/large/birth-photo-large-${thumbnailSrcEnd}`
        );
      }
    }

    function viewImage(thumbnailSrc, imgModal) {
      // get the ending of of the thumbnail image src
      // to use it to set viewed image src
      const thumbnailSrcEnd = thumbnailSrc.slice(27);
      const largeImg = document.createElement("img");
      imgModal.appendChild(largeImg);
      largeImg.setAttribute(
        "src",
        `imgs/large/birth-photo-large-${thumbnailSrcEnd}`
      );
      largeImg.setAttribute("alt", "birth-photo-large");
      largeImg.classList.add("modal-image");
      imgModal.classList.toggle("show");
    }

    function closeImage(imgModal) {
      imgModal.classList.toggle("show");
      const largeImg = imgModal.querySelector(".modal-image");
      imgModal.removeChild(largeImg);
    }
  })();
};
