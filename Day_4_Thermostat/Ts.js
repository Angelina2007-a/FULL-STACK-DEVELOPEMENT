// ===============================
// Select Elements
// ===============================

const temperature = document.getElementById("temperature");
const topTemp = document.getElementById("topTemp");
const avgTemp = document.getElementById("avgTemp");

const status = document.getElementById("status");
const heating = document.getElementById("heating");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// ===============================
// Initial Temperature
// ===============================

let currentTemp = 21;

// ===============================
// Update UI
// ===============================

function updateTemperature() {

    temperature.textContent = currentTemp + "°C";
    topTemp.textContent = currentTemp + ".0°C";
    avgTemp.textContent = currentTemp + "°C";

    // ❄️ Freezing
    if (currentTemp <= 5) {

        temperature.style.color = "#00BFFF";
        status.textContent = "🥶 Freezing";
        heating.textContent = "Heating to 18°C";

        document.body.style.background =
        "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('images/Freezing.png')";

    }

    // ❄️ Cold
    else if (currentTemp <= 15) {

        temperature.style.color = "#4FC3F7";
        status.textContent = "❄️ Cold";
        heating.textContent = "Heating to 20°C";

        document.body.style.background =
        "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('images/Cold.png')";

    }

    // 😊 Comfortable
    else if (currentTemp <= 28) {

        temperature.style.color = "#D6FF00";
        status.textContent = "😊 Comfortable";
        heating.textContent = "Perfect Temperature";

        document.body.style.background =
        "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)),url('images/Comfortable.png')";

    }

    // ☀️ Warm
    else if (currentTemp <= 38) {

        temperature.style.color = "#FFB300";
        status.textContent = "☀️ Warm";
        heating.textContent = "Cooling to 26°C";

        document.body.style.background =
        "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)),url('images/Warm.png')";

    }

    // 🔥 Hot
    else {

        temperature.style.color = "#FF3B30";
        status.textContent = "🔥 Hot";
        heating.textContent = "Cooling to 22°C";

        document.body.style.background =
        "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)),url('images/Hot.png')";

    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all .6s ease";
}

// ===============================
// Increase Temperature
// ===============================

incrementBtn.addEventListener("click", () => {

    if (currentTemp < 50) {

        currentTemp++;
        updateTemperature();

    }

});

// ===============================
// Decrease Temperature
// ===============================

decrementBtn.addEventListener("click", () => {

    if (currentTemp > 0) {

        currentTemp--;
        updateTemperature();

    }

});

// ===============================
// Reset Temperature
// ===============================

resetBtn.addEventListener("click", () => {

    currentTemp = 21;
    updateTemperature();

});

// ===============================
// Initial Load
// ===============================

updateTemperature();