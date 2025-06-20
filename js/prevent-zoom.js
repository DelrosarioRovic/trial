 // Prevent gesture-based zooming
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
    document.body.style.zoom = 0.99; // Workaround for some versions
});
// Reset zoom if it occurs
function resetZoom() {
    document.body.style.zoom = 1.0;
    setTimeout(() => {
        document.body.style.zoom = 1.0;
    }, 100);
}
// Check for zoom changes
window.addEventListener('resize', resetZoom);
document.addEventListener('gesturechange', resetZoom);