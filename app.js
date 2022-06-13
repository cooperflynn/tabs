const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  // if id exists (not undefined), then
  if (id) {
    //remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    //add active to clicked button
    e.target.classList.add("active");

    // hide all articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // select element that matches the target id
    const element = document.getElementById(id);
    // activate this element
    element.classList.add("active");
  }
});
