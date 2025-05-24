function toggleText(button) {
    const span = button.previousElementSibling;
    if (span.style.display === "inline") {
      span.style.display = "none";
      button.textContent = "Show more";
    } else {
      span.style.display = "inline";
      button.textContent = "Show less";
    }
  }