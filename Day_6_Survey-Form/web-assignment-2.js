const form = document.getElementById("surveyForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const age = document.getElementById("age").value;


    // Get gender
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );


    // Get interests
    const interests = document.querySelectorAll(
        'input[name="interest"]:checked'
    );


    // Get emoji satisfaction
    const satisfaction = document.querySelector(
        'input[name="satisfaction"]:checked'
    );


    // Validation
    if (name === "" || email === "") {

        alert("Please enter your name and email.");

        return;
    }


    if (!gender) {

        alert("Please select your gender.");

        return;
    }


    if (!satisfaction) {

        alert("Please select your satisfaction level.");

        return;
    }


    // Store interests
    let selectedInterests = [];

    interests.forEach(function(interest) {

        selectedInterests.push(interest.value);

    });


    // Display in console
    console.log("===== SURVEY RESPONSE =====");

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Age:", age);

    console.log("Gender:", gender.value);

    console.log("Interests:", selectedInterests);

    console.log("Satisfaction:", satisfaction.value);


    // Success message
    alert(
        "Thank you, " +
        name +
        "! Your survey has been submitted successfully."
    );


    // Reset form
    form.reset();

});