
const app = {
  name: "Mystery AI",
  language: "fa",
  version: "1.0.0",

  createStory() {
    const prompt = document.getElementById("storyPrompt");
    const output = document.getElementById("result");

    if (!prompt || !output) return;

    const subject = prompt.value.trim();

    if (!subject) {
      output.textContent = "لطفاً موضوع داستان را وارد کن.";
      return;
    }

    output.textContent =
      "داستان ترسناک درباره: " + subject +
      "\n\nشب تاریکی بود. صدای عجیبی از پشت در شنیده شد. " +
      "او آرام به سمت در رفت، اما چیزی که دید زندگی‌اش را تغییر داد...";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("createStory");

  if (button) {
    button.addEventListener("click", app.createStory);
  }
});
