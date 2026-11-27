
const prompts = [
  "شب تاریکی بود و صدای قدم‌هایی از زیرزمین می‌آمد...",
  "در ساعت سه نیمه‌شب، تلفن زنگ خورد؛ اما سیم تلفن قطع بود...",
  "وقتی در آینه نگاه کرد، تصویرش لبخند می‌زد؛ درحالی‌که خودش نمی‌خندید...",
  "در کلبه متروکه صدای کسی شنیده می‌شد که نام او را صدا می‌زد..."
];

function createStory() {
  const input = document.getElementById("storyPrompt");
  const output = document.getElementById("result");

  const topic = input.value.trim();

  if (!topic) {
    output.textContent = "لطفاً موضوع داستان را بنویس.";
    return;
  }

  const opening = prompts[
    Math.floor(Math.random() * prompts.length)
  ];

  const story = `
عنوان: راز ${topic}

صحنه اول:
${opening}

صحنه دوم:
او تصمیم گرفت حقیقت را کشف کند.
در تاریکی، صدایی عجیب به گوش رسید.

صحنه سوم:
ناگهان در باز شد و سایه‌ای بلند
در انتهای راهرو ظاهر شد.

پایان:
هنوز هیچ‌کس نمی‌داند آن شب چه اتفاقی افتاد...

موضوع داستان: ${topic}
`;

  output.textContent = story;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("createStory");

  if (button) {
    button.addEventListener("click", createStory);
  }
});

