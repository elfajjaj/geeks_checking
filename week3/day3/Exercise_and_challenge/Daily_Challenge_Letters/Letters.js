const input = document.getElementById("letters");

input.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z]/g, "");
});
