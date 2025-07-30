// script.js

// 問題データ（とりあえず1問だけ）
const beginnerQuestions = [
  {
    question: "HTMLで見出しを作成するタグはどれ？",
    choices: ["<p>", "<div>", "<h1>", "<span>"],
    answer: "<h1>",
    explanation: "<h1>〜<h6>は見出しタグです。<h1>は最も重要な見出し。"
  }
];

// HTML要素の取得
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");

// 初級問題を表示する関数
function showBeginnerQuestion() {
  const q = beginnerQuestions[0];  // 1問目

  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";  // 選択肢リセット

  // 選択肢ボタンを作る
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => {
      if (choice === q.answer) {
        feedbackEl.textContent = "正解！ " + q.explanation;
        feedbackEl.style.color = "green";
      } else {
        feedbackEl.textContent = "不正解。もう一度挑戦してね！";
        feedbackEl.style.color = "red";
      }
    });
    choicesEl.appendChild(btn);
  });
}

// 初級ボタンを押した時に問題を表示するイベント登録
document.getElementById("beginner").addEventListener("click", () => {
  showBeginnerQuestion();
  feedbackEl.textContent = "";
});
