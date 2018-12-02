"use strict";

window.onload = function() {
  (function() {
    const imgs = document.querySelector(".image-gallery");

    imgs.addEventListener("click", imgClick);

    function imgClick(e) {
      const imgModal = document.querySelector("modal-view");
      if (e.target.classList.contains("image-container")) {
        const thumbnailSrc = e.target.children[0].src.slice(74);
        const thumbnailSrcEnd = thumbnailSrc.slice(74);

        imgModal.classList.toggle("show");
      } else if (e.target.classList.contains("modal-view")) {
        imgModal.classList.toggle("show");
      }
    }
  })();
};
