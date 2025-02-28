document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    
    images.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "1000";
            
            const enlargedImg = document.createElement("img");
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = "90%";
            enlargedImg.style.maxHeight = "90%";
            enlargedImg.style.borderRadius = "10px";
            enlargedImg.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.5)";
            
            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
            
            overlay.addEventListener("click", function () {
                overlay.remove();
            });
        });
    });
});


const logo = document.querySelector(".logo");
if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}