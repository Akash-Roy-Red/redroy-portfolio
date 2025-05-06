document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
document.getElementById("showMoreBtn").addEventListener("click", function () {
  var moreContent = document.getElementById("moreContent");
  if (moreContent.style.display === "none") {
    moreContent.style.display = "block";
    this.textContent = "Show Less";
  } else {
    moreContent.style.display = "none";
    this.textContent = "Show More";
  }
});
