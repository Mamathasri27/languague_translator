document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("translateForm");
    const button = document.getElementById("translateBtn");

    // Button Click Animation
    button.addEventListener("mousedown", function () {
        button.classList.add("clicked");
    });

    button.addEventListener("mouseup", function () {
        button.classList.remove("clicked");
    });

    // Form Validation
    form.addEventListener("submit", function (event) {
        const textInput = document.getElementById("textInput").value.trim();
        const srcLang = document.getElementById("srcLang").value.trim();
        const tgtLang = document.getElementById("tgtLang").value.trim();

        if (textInput === "" || srcLang === "" || tgtLang === "") {
            alert("Please fill all fields!");
            event.preventDefault();
        }
    });
});
