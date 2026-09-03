// ==========================================
// 1. STATE MANAGEMENT
// ==========================================
let currentQuestionIndex = 0;
let userAnswers = {};
let playedAudio = {};
let timerInterval = null;
let totalTimeSeconds = 3000; // 50 minutes
let timeSpentSeconds = 0;

let progressCircle = null;
let circumference = 0;

// ==========================================
// 2. DOM ELEMENT REFERENCES
// ==========================================
let answeredCountEl, unansweredCountEl, timerEl;
let qNumEl, qTextEl, qDetailEl, qImgEl;
let audioContainerEl, audioPlayerEl, audioPlayBtnEl;
let optionsListEl;
let prevBtn, nextBtn, allQuestionsBtn;
let questionsModal, closeModalBtn, questionsGrid1, questionsGrid2;
let imageModal, fullImagePreview, closeImageModalBtn;
let quizScreen, resultScreen, totalScoreEl, totalTimeEl, viewAnswersBtn, restartBtn, answersContainer;
let headerEl, footerEl;

// ==========================================
// 3. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Initialize DOM elements and button click listeners right away
  initDOMElements();
  initEventListeners();

  // 2. Preload all quiz assets (images/audio) and show loading progress
  if (typeof quizMetadata !== "undefined") {
    await preloadAssets(quizMetadata);
  }

  // 3. Hide the loading screen overlay once 100% complete
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }

  // 4. Start the quiz, timer, and load the first question
  startTimer();
  loadQuestion();
  updateHeaderCounts();
});

function initDOMElements() {
  answeredCountEl = document.getElementById("answered-count");
  unansweredCountEl = document.getElementById("unanswered-count");
  timerEl = document.getElementById("timer");

  qNumEl = document.getElementById("q-num");
  qTextEl = document.getElementById("q-text");
  qDetailEl = document.getElementById("q-detail");
  qImgEl = document.getElementById("q-image");

  audioContainerEl = document.getElementById("q-audio-container");
  audioPlayerEl = document.getElementById("q-audio-player");
  audioPlayBtnEl = document.getElementById("audio-play-btn");

  optionsListEl = document.getElementById("options-list");

  prevBtn = document.getElementById("prev-btn");
  nextBtn = document.getElementById("next-btn");
  allQuestionsBtn = document.getElementById("all-questions-btn");

  questionsModal = document.getElementById("questions-modal");
  closeModalBtn = document.getElementById("close-modal-btn");
  questionsGrid1 = document.getElementById("questions-grid-1");
  questionsGrid2 = document.getElementById("questions-grid-2");

  imageModal = document.getElementById("image-modal");
  fullImagePreview = document.getElementById("full-image-preview");
  closeImageModalBtn = document.getElementById("close-image-modal");

  quizScreen = document.getElementById("quiz-screen");
  resultScreen = document.getElementById("result-screen");
  totalScoreEl = document.getElementById("total-score-text");
  totalTimeEl = document.getElementById("total-time-text");
  viewAnswersBtn = document.getElementById("view-answers-btn");
  restartBtn = document.getElementById("restart-btn");
  answersContainer = document.getElementById("answers-container");

  headerEl = document.querySelector(".ubt-header");
  footerEl = document.querySelector(".ubt-footer");

  initAudioProgressRing();
}

function initEventListeners() {
  if (prevBtn) prevBtn.addEventListener("click", goToPreviousQuestion);
  if (nextBtn) nextBtn.addEventListener("click", handleNextClick);
  if (allQuestionsBtn) allQuestionsBtn.addEventListener("click", openQuestionsModal);

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeQuestionsModal);
  if (closeImageModalBtn) closeImageModalBtn.addEventListener("click", closeImageModal);
  if (qImgEl) qImgEl.addEventListener("click", openImageModal);

  if (audioPlayBtnEl) {
    audioPlayBtnEl.addEventListener("click", () => {
      playAudioOnce("q-audio-player", "audio-play-btn");
    });
  }

  if (restartBtn) restartBtn.addEventListener("click", restartQuiz);
  if (viewAnswersBtn) viewAnswersBtn.addEventListener("click", toggleAnswersReview);
}

// ==========================================
// 4. CORE RENDER & SELECTION LOGIC
// ==========================================
function loadQuestion() {
  stopCurrentAudio();

  if (!quizMetadata || quizMetadata.length === 0) return;
  const currentData = quizMetadata[currentQuestionIndex] || {};

  if (qNumEl) qNumEl.innerText = currentData.num || `Question ${currentQuestionIndex + 1}`;

  if (qTextEl) {
    if (currentData.text) {
      qTextEl.innerHTML = currentData.text.replace(/\n/g, "<br>");
      qTextEl.classList.remove("hidden");
    } else {
      qTextEl.classList.add("hidden");
    }
  }

  if (qDetailEl) {
    if (currentData.detail) {
      qDetailEl.innerHTML = currentData.detail.replace(/\n/g, "<br>");
      qDetailEl.classList.remove("hidden");
    } else {
      qDetailEl.classList.add("hidden");
    }
  }

  if (qImgEl) {
    if (currentData.image) {
      qImgEl.src = currentData.image;
      qImgEl.classList.remove("hidden");
    } else {
      qImgEl.classList.add("hidden");
      qImgEl.src = "";
    }
  }

  if (audioContainerEl && audioPlayerEl) {
    if (currentData.audio) {
      audioPlayerEl.src = currentData.audio;
      audioContainerEl.classList.remove("hidden");

      if (playedAudio[currentQuestionIndex]) {
        if (audioPlayBtnEl) {
          audioPlayBtnEl.disabled = true;
          audioPlayBtnEl.innerText = "✓";
          audioPlayBtnEl.classList.add("disabled");
        }
      } else {
        if (audioPlayBtnEl) {
          audioPlayBtnEl.disabled = false;
          audioPlayBtnEl.innerText = "▶";
          audioPlayBtnEl.classList.remove("disabled");
        }
      }
    } else {
      audioContainerEl.classList.add("hidden");
      audioPlayerEl.src = "";
    }
  }

  if (optionsListEl) {
    optionsListEl.innerHTML = "";
    const options = currentData.options || [];

    options.forEach((opt, oIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";

      if (userAnswers[currentQuestionIndex] === oIdx) {
        btn.classList.add("selected");
      }

      let contentHtml = `<span class="circle-num">${oIdx + 1}</span>`;
      if (opt.text) contentHtml += `<span class="option-text">${opt.text}</span>`;
      if (opt.image) contentHtml += `<img src="${opt.image}" class="option-img" alt="Option Image" />`;

      btn.innerHTML = contentHtml;

      if (opt.image) {
        const imgEl = btn.querySelector(".option-img");
        if (imgEl) {
          imgEl.addEventListener("click", (e) => {
            e.stopPropagation();
            openZoomModal(opt.image);
          });
        }
      }

      btn.addEventListener("click", () => selectOption(currentQuestionIndex, oIdx));
      optionsListEl.appendChild(btn);
    });
  }

  if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
  if (nextBtn) {
    const isLast = currentQuestionIndex === quizMetadata.length - 1;
    nextBtn.innerText = isLast ? "Submit" : "Next";
  }
}

function selectOption(qIndex, oIndex) {
  userAnswers[qIndex] = oIndex;

  const buttons = document.querySelectorAll("#options-list .option-btn");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("selected", idx === oIndex);
  });

  updateHeaderCounts();
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function handleNextClick() {
  if (currentQuestionIndex < quizMetadata.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    submitQuiz();
  }
}

function updateHeaderCounts() {
  const total = quizMetadata ? quizMetadata.length : 0;
  const answered = Object.keys(userAnswers).length;
  const unanswered = Math.max(0, total - answered);

  if (answeredCountEl) answeredCountEl.innerText = `Answered: ${answered}`;
  if (unansweredCountEl) unansweredCountEl.innerText = `Unanswered: ${unanswered}`;
}

// ==========================================
// 5. TIMER CONTROLLER
// ==========================================
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (totalTimeSeconds <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
      return;
    }
    totalTimeSeconds--;
    timeSpentSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(totalTimeSeconds / 60);
  const seconds = totalTimeSeconds % 60;
  if (timerEl) {
    timerEl.innerText = `${minutes}m ${seconds < 10 ? "0" : ""}${seconds}s`;

    // Activates CSS low-time pulse animation under 5 mins
    if (totalTimeSeconds < 300) {
      timerEl.classList.add("low-time");
    } else {
      timerEl.classList.remove("low-time");
    }
  }
}

// ==========================================
// 6. AUDIO MEDIA CONTROLLER
// ==========================================
function initAudioProgressRing() {
  progressCircle = document.querySelector(".progress-ring__circle");
  if (progressCircle) {
    const radius = progressCircle.r.baseVal.value;
    circumference = 2 * Math.PI * radius;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;
  }
}

function setAudioProgress(percent) {
  if (!progressCircle) return;
  const offset = circumference - (percent * circumference);
  progressCircle.style.strokeDashoffset = offset;
}

function playAudioOnce(playerId, btnId) {
  if (playedAudio[currentQuestionIndex]) return;

  const player = document.getElementById(playerId);
  const btn = document.getElementById(btnId);
  if (!player) return;

  playedAudio[currentQuestionIndex] = true;

  if (btn) {
    btn.disabled = true;
    btn.classList.add("disabled");
    btn.innerText = "❚❚";
  }

  player.play();

  player.ontimeupdate = () => {
    if (player.duration) {
      const percent = player.currentTime / player.duration;
      setAudioProgress(percent);
    }
  };

  player.onended = () => {
    if (btn) btn.innerText = "✓";
  };
}

function stopCurrentAudio() {
  if (audioPlayerEl) {
    audioPlayerEl.pause();
    audioPlayerEl.currentTime = 0;
  }
  setAudioProgress(0);
}

// ==========================================
// 7. MODALS LOGIC
// ==========================================
function openQuestionsModal() {
  if (!questionsModal || !quizMetadata) return;

  const midPoint = Math.ceil(quizMetadata.length / 2);
  buildQuestionsGrid(questionsGrid1, 0, midPoint);
  buildQuestionsGrid(questionsGrid2, midPoint, quizMetadata.length);

  questionsModal.classList.remove("hidden");
}

function closeQuestionsModal() {
  if (questionsModal) questionsModal.classList.add("hidden");
}

function buildQuestionsGrid(gridContainer, startIndex, endIndex) {
  if (!gridContainer) return;
  gridContainer.innerHTML = "";

  for (let i = startIndex; i < endIndex; i++) {
    const btn = document.createElement("button");
    btn.className = "q-num-btn"; // Aligned with CSS
    btn.innerText = i + 1;

    if (userAnswers[i] !== undefined) {
      btn.classList.add("answered");
    }
    if (i === currentQuestionIndex) {
      btn.classList.add("active"); // Aligned with CSS
    }

    btn.addEventListener("click", () => {
      currentQuestionIndex = i;
      loadQuestion();
      closeQuestionsModal();
    });

    gridContainer.appendChild(btn);
  }
}

function openZoomModal(imageSrc) {
  if (imageModal && fullImagePreview && imageSrc) {
    fullImagePreview.src = imageSrc;
    imageModal.classList.remove("hidden");
  }
}

function openImageModal() {
  if (qImgEl && qImgEl.src) {
    openZoomModal(qImgEl.src);
  }
}

function closeImageModal() {
  if (imageModal) imageModal.classList.add("hidden");
}

// ==========================================
// 8. RESULTS AND SUBMISSION
// ==========================================
function submitQuiz() {
  clearInterval(timerInterval);
  stopCurrentAudio();

  let score = 0;
  quizMetadata.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct) {
      score += q.points || 2.5;
    }
  });

  // Hide Quiz Screen, Header, and Footer
  if (quizScreen) quizScreen.classList.add("hidden");
  if (headerEl) headerEl.classList.add("hidden");
  if (footerEl) footerEl.classList.add("hidden");

  // Show Result Screen
  if (resultScreen) resultScreen.classList.remove("hidden");

  if (totalScoreEl) totalScoreEl.innerText = `${score} / 100 pts`;

  const minutesTaken = Math.floor(timeSpentSeconds / 60);
  const secondsTaken = timeSpentSeconds % 60;
  if (totalTimeEl) {
    totalTimeEl.innerText = `Time Taken: ${minutesTaken}m ${secondsTaken < 10 ? "0" : ""}${secondsTaken}s`;
  }

  const midPoint = Math.ceil(quizMetadata.length / 2);
  buildResultGrid(document.getElementById("result-grid-1"), 0, midPoint);
  buildResultGrid(document.getElementById("result-grid-2"), midPoint, quizMetadata.length);
}

function buildResultGrid(gridContainer, startIndex, endIndex) {
  if (!gridContainer) return;
  gridContainer.innerHTML = "";

  for (let i = startIndex; i < endIndex; i++) {
    const item = document.createElement("div");
    item.className = "res-q-circle"; // Aligned with CSS

    const userAns = userAnswers[i];
    const correctAns = quizMetadata[i]?.correct;

    if (userAns === undefined) {
      item.classList.add("res-skipped");
    } else if (userAns === correctAns) {
      item.classList.add("res-correct");
    } else {
      item.classList.add("res-incorrect");
    }

    item.innerText = i + 1;
    gridContainer.appendChild(item);
  }
}

function toggleAnswersReview() {
  if (!answersContainer) return;

  const isHidden = answersContainer.classList.contains("hidden");
  if (isHidden) {
    answersContainer.innerHTML = "";
    /*
    quizMetadata.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      const isCorrect = userAns === q.correct;
      const isSkipped = userAns === undefined;

      const card = document.createElement("div");
      card.className = "answer-review-item"; // Aligned with CSS

      const statusClass = isSkipped ? "skipped" : isCorrect ? "correct" : "incorrect";
      const statusText = isSkipped ? "Skipped" : isCorrect ? "Correct" : "Incorrect";

      card.innerHTML = `
        <div class="answer-review-title">Q${idx + 1}: ${q.text || ""}</div>
        <span class="answer-status-tag ${statusClass}">${statusText}</span>
        <p>Your Answer: ${!isSkipped ? q.options[userAns]?.text || "Image Option" : "None"}</p>
        <span class="correct-answer-badge">Correct: ${q.options[q.correct]?.text || "Image Option"}</span>
      `;
      answersContainer.appendChild(card);
    });
    */

    quizMetadata.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      const isCorrect = userAns === q.correct;
      const isSkipped = userAns === undefined;

      const card = document.createElement("div");
      card.className = "answer-review-item";

      const statusClass =
        isSkipped ? "skipped" :
          isCorrect ? "correct" :
            "incorrect";

      const statusText =
        isSkipped ? "Skipped" :
          isCorrect ? "Correct" :
            "Incorrect";

      let optionsHtml = "";

      q.options.forEach((opt, optIdx) => {

        let optionClass = "";

        if (optIdx === q.correct) {
          optionClass = "review-correct";
        }

        if (
          userAns === optIdx &&
          optIdx !== q.correct
        ) {
          optionClass = "review-wrong";
        }

        optionsHtml += `
      <div class="review-option ${optionClass}">

        ${opt.image
            ? `<img src="${opt.image}" class="review-option-image">`
            : ""
          }

        ${opt.text
            ? `<div class="review-option-text">${opt.text}</div>`
            : ""
          }

      </div>
    `;
      });

      card.innerHTML = `
    <div class="answer-review-title">
      ${q.num || `Q${idx + 1}`}
    </div>

    <span class="answer-status-tag ${statusClass}">
      ${statusText}
    </span>

    <div class="review-question-text">
      ${q.text || ""}
    </div>

    ${q.detail ? `
      <div class="review-detail">
        ${q.detail}
      </div>
    ` : ""}

    ${q.image ? `
      <img src="${q.image}" class="review-question-image">
    ` : ""}

    <div class="review-options-wrapper">
      ${optionsHtml}
    </div>
  `;

      answersContainer.appendChild(card);
    });
    answersContainer.classList.remove("hidden");
    if (viewAnswersBtn) viewAnswersBtn.innerText = "Hide Correct Answers";
  } else {
    answersContainer.classList.add("hidden");
    if (viewAnswersBtn) viewAnswersBtn.innerText = "View Correct Answers";
  }
}

// ==========================================
// BULLETPROOF PRELOADER (USING FETCH)
// ==========================================
async function preloadAssets(metadata) {
  if (!metadata || metadata.length === 0) return;

  // 1. Collect all unique image and audio URLs
  const urls = new Set();
  metadata.forEach((q) => {
    if (q.image) urls.add(q.image);
    if (q.audio) urls.add(q.audio);
    if (q.options) {
      q.options.forEach((opt) => {
        if (opt.image) urls.add(opt.image);
      });
    }
  });

  const urlList = Array.from(urls);
  const total = urlList.length;
  if (total === 0) return;

  let loadedCount = 0;
  const loadingBar = document.getElementById("loading-bar");
  const loadingText = document.getElementById("loading-text");

  function updateProgress() {
    loadedCount++;
    const percent = Math.floor((loadedCount / total) * 100);

    if (loadingBar) loadingBar.style.width = `${percent}%`;
    if (loadingText) loadingText.innerText = `${percent}% (${loadedCount}/${total} assets)`;
  }

  // 2. Download all files directly into the browser cache
  const downloadPromises = urlList.map(async (url) => {
    try {
      // mode: 'no-cors' allows cross-domain downloads without CORS blocking
      await fetch(url, { mode: "no-cors" });
    } catch (err) {
      console.warn("Could not preload asset:", url, err);
    } finally {
      // Runs whether the download succeeded or failed so progress never freezes
      updateProgress();
    }
  });

  // 3. Wait until ALL assets have finished downloading
  await Promise.all(downloadPromises);

  // Short delay so the user sees 100% complete
  await new Promise((resolve) => setTimeout(resolve, 300));
}

function restartQuiz() {
  userAnswers = {};
  playedAudio = {};
  currentQuestionIndex = 0;
  totalTimeSeconds = 3000;
  timeSpentSeconds = 0;

  // Hide Result Screen
  if (resultScreen) resultScreen.classList.add("hidden");
  if (answersContainer) answersContainer.classList.add("hidden");

  // Show Quiz Screen, Header, and Footer
  if (quizScreen) quizScreen.classList.remove("hidden");
  if (headerEl) headerEl.classList.remove("hidden");
  if (footerEl) footerEl.classList.remove("hidden");

  startTimer();
  loadQuestion();
  updateHeaderCounts();
}
