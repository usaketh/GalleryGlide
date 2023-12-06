//Features
//infinite scrolling, touch, horizontal scrolling,grayscale to color

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
// let additionalImagesContainer = document.getElementById("additional-images");

const imageUrls = [
    "images/image-1.png",
    "images/image-2.png",
    "images/image-3.png",
    "images/image-4.png",
    "images/image-5.png",
    "images/image-6.png"
];

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaX;
    scrollContainer.style.scrollBehavior = "auto";
}); 
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});


// Function to check if the user has scrolled to the bottom
function isAtBottom() {
    return scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth;
}

// Function to load more images (circular)
function loadMoreImages() {
    // Append the same set of images to the gallery container
    imageUrls.forEach((imageUrl) => {
        const img = document.createElement("span");
        img.innerHTML = `<img src="${imageUrl}">`;
        scrollContainer.appendChild(img);

        // Apply the same styles as the gallery images
        img.style.width = "33.33%"; // Adjust as needed
        img.style.padding = "10px";  // Adjust as needed
        img.querySelector('img').style.width = "100%";
        img.querySelector('img').style.filter = "grayscale(100%)";
        img.querySelector('img').style.transition = "transform 0.5s";
        
        // Add hover effect
        img.addEventListener("mouseover", () => {
            img.querySelector('img').style.filter = "grayscale(0)";
            img.querySelector('img').style.cursor = "pointer";
            img.querySelector('img').style.transform = "scale(1.1)";
        });
        
        img.addEventListener("mouseout", () => {
            img.querySelector('img').style.filter = "grayscale(100%)";
            img.querySelector('img').style.cursor = "default";
            img.querySelector('img').style.transform = "scale(1)";
        });
    });
}

// Event listener for the scroll event
scrollContainer.addEventListener("scroll", () => {
    // Load more images if the user is at the bottom
    if (isAtBottom()) {
        loadMoreImages();
        // Scroll back to the beginning to create a looping effect
        scrollContainer.scrollLeft = 0;
    }
});
