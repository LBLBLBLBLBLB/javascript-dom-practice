const faqTitles = document.querySelectorAll(".faq-title");
const faqAnswer = document.querySelectorAll(".faq-answer");

faqTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    faqAnswer.forEach((answer, answerIndex) => {
      if (index === answerIndex) {
        answer.classList.toggle("faq-answer-show");
      } else {
        answer.classList.remove("faq-answer-show");
      }
    });
  });
});
