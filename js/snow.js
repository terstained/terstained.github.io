/* snow.js */

// Clears snowContainer and adds <div class="snow"></div> numSnowFlakes number of times.
function createsnow() {
    let snowContainer = document.getElementById('snow_container');
    snowContainer.innerHTML = '';

    // Specify how much snow you want.
    // Based on CSS, only goes up to a max of 50.
    let numSnowFlakes = 50;
    for (; numSnowFlakes > 0; numSnowFlakes--) {
        let snowFlake = document.createElement("div");
        snowFlake.className = 'snow';
        snowContainer.append(snowFlake);
    }
}

// This function runs every time page is loaded.
window.addEventListener("load", createsnow);

// Recreate snow whenever detect orientation change.
// If not, snowflakes CSS will continue to use vw/vh of previous
// orientation.
window.addEventListener("orientationchange", createsnow);
