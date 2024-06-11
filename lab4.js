document.addEventListener("DOMContentLoaded", () => {
    const variant = 71;
    const firstElementId = `element${((variant + 1) % 10) + 1}`;
    const secondElementId = `element${((variant + 1) % 10) + 2}`;

    // Toggle background and text color of first element on click
    document.getElementById(firstElementId).addEventListener("click", function() {
        this.style.backgroundColor = this.style.backgroundColor === "black" ? "white" : "black";
        this.style.color = this.style.color === "white" ? "black" : "white";
    });

    // Toggle background and text color of second element on click
    document.querySelector(`#${secondElementId}`).addEventListener("click", function() {
        this.style.backgroundColor = this.style.backgroundColor === "black" ? "white" : "black";
        this.style.color = this.style.color === "white" ? "black" : "white";
    });

    const btnAdd = document.getElementById("btn-add");
    const btnEnlarge = document.getElementById("btn-enlarge");
    const btnReduce = document.getElementById("btn-reduce");
    const btnRemove = document.getElementById("btn-remove");
    const imageContainer = document.getElementById("image-container");

    function updateButtonStates() {
        const imgExists = imageContainer.querySelector(".bar");
        btnAdd.disabled = imgExists;
        btnEnlarge.disabled = !imgExists;
        btnReduce.disabled = !imgExists;
        btnRemove.disabled = !imgExists;
    }

    // Add new image to the container
    btnAdd.addEventListener("click", () => {
        const newImg = document.createElement("img");
        newImg.src = "Barcelona.jpg";
        newImg.alt = "Barcelona";
        newImg.className = "bar";
        imageContainer.appendChild(newImg);
        updateButtonStates();
    });

    // Enlarge the image
    btnEnlarge.addEventListener("click", () => {
        const imgElement = imageContainer.querySelector(".bar");
        imgElement.style.width = `${imgElement.clientWidth + 20}px`;
    });

    // Reduce the image size
    btnReduce.addEventListener("click", () => {
        const imgElement = imageContainer.querySelector(".bar");
        imgElement.style.width = `${Math.max(imgElement.clientWidth - 20, 20)}px`;
    });

    // Remove the image from the container
    btnRemove.addEventListener("click", () => {
        const imgElement = imageContainer.querySelector(".bar");
        imgElement.remove();
        updateButtonStates();
    });

    // Initial call to update button states
    updateButtonStates();
});
