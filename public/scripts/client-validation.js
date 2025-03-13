// ===============================
// Client-Side Validation for Workout Form
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    // Attach validation to the form's submit event
    document.getElementById('workout-form').addEventListener('submit', function (event) {
        if (!validate()) {
            event.preventDefault(); 
        }
    });
});

function validate() {
    clearErrors(); 
    console.log("Running validation...");
    let isValid = true;

    // Validate Duration: Ensure it's not empty and is a number
    let duration = document.getElementById('duration').value.trim();
    let isNumber = /^\d+$/;
    if (duration === "" || !isNumber.test(duration)) {
        document.getElementById('err-duration').style.visibility = "visible";
        isValid = false;
    }

    // Validate Intensity: Ensure at least one radio button is selected
    let intensityButtons = document.getElementsByName('intensity');
    let isIntensitySelected = false;
    for (let i = 0; i < intensityButtons.length; i++) {
        if (intensityButtons[i].checked) {
            isIntensitySelected = true;
            break;
        }
    }
    if (!isIntensitySelected) {
        document.getElementById('err-intensity').style.visibility = "visible";
        isValid = false;
    }

    // Validate Date: Ensure a date is selected
    let date = document.getElementById('date').value.trim();
    if (date === "") {
        document.getElementById('err-date').style.visibility = "visible";
        isValid = false;
    }

    console.log("Validation Result:", isValid);
    return isValid; 
}

// Function to clear error messages before validation runs
function clearErrors() {
    console.log("Clearing errors...");
    let errors = document.getElementsByClassName('err');
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.visibility = "hidden";
    }
}
