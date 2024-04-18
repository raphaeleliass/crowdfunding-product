const btnBookmarkAria = document.getElementById("bookmark-btn-aria");
const btnBookmark = document.getElementById("bookmark-btn");
const btnBookmarked = document.getElementById("bookmarked-btn");
const bgBookmarkBtn = document.getElementById("bg-bookmark-btn");
const bookmarkText = document.getElementById("bookmark");

function toggleBookmarkBtn() {
  btnBookmark.classList.toggle("hide");
  btnBookmarked.classList.toggle("hide");
  bgBookmarkBtn.classList.toggle('active');

  if (btnBookmark.classList.contains("hidden")) {
    bookmarkText.textContent = "Bookmarked";
  } else {
    bookmarkText.textContent = "Bookmark";
  }
}

btnBookmarkAria.addEventListener("click", toggleBookmarkBtn);
