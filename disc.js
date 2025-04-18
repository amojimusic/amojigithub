const unstruct = document.getElementById('unstructImage');
const unstructDown = document.getElementById('unstructDownload');
const subSurface = document.getElementById('sub-surfaceImage');
const subSurfaceDown = document.getElementById('sub-surfaceDownload');




unstruct.addEventListener("mouseover", () => {
    unstructDown.style.color = 'rgb(101, 101, 101)';
});

unstruct.addEventListener("mouseout", () => {
    unstructDown.style.color = 'white';
});

unstructDown.addEventListener("mouseover", () => {
    unstructDown.style.color = 'rgb(101, 101, 101)';
});

unstructDown.addEventListener("mouseout", () => {
    unstructDown.style.color = 'white';
});

subSurface.addEventListener("mouseover", () => {
    subSurfaceDown.style.color = 'rgb(0, 38, 255)';
});

subSurface.addEventListener("mouseout", () => {
    subSurfaceDown.style.color = 'white';
});

subSurfaceDown.addEventListener("mouseover", () => {
    subSurfaceDown.style.color = 'rgb(0, 38, 255)';
});

subSurfaceDown.addEventListener("mouseout", () => {
    subSurfaceDown.style.color = 'white';
});