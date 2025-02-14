function resizeAllCanvases() {
    // Get all images and canvases
    var images = document.getElementsByClassName('img');
    var canvases = document.getElementsByClassName('canvas');

    // Ensure the number of canvases matches the number of images
    if (images.length !== canvases.length) {
        console.error('Number of canvases and images do not match!');
        return;
    }

    // Function to resize a single canvas for a given image
    const resizeCanvas = (img, canvas, index) => {
        var width = img.clientWidth;
        var height = img.clientHeight;

        // Ensure valid width and height
        if (width === 0 || height === 0) {
            console.error(`Image at index ${index} has zero dimensions.`);
            return;
        }

        // Set canvas size (drawing area)
        canvas.width = width;
        canvas.height = height;
    };

    // Loop through each image and its corresponding canvas
    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        let canvas = canvases[i];

        // Resize when the image loads
        img.onload = () => resizeCanvas(img, canvas, i);

        // Handle cached images (if already loaded)
        if (img.complete) {
            resizeCanvas(img, canvas, i);
        }

        // Add event listener for window resize to dynamically adjust canvas size
        window.addEventListener('resize', () => resizeCanvas(img, canvas, i));
    }
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', resizeAllCanvases);
