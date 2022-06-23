const colorPicker = document.getElementById("color-picker"),
    colorPickerLabel = document.querySelector(".color-picker__label"),
    dropZone = document.querySelector(".drop-zone"),
    dropZoneInput = document.getElementById("file-input");

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.background = "#F5F5F5";
})

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.background = "#FFFFFF";
})

colorPicker.addEventListener("input", () => {
    colorPickerLabel.style.background = colorPicker.value;
});