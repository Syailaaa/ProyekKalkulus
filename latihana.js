let wrongAttempts = [0, 0, 0];  // Track wrong attempts for each question

function checkAnswer(questionNumber, correctAnswer) {
  const answerInput = document.getElementById(`answer${questionNumber}`);
  const hint = document.getElementById(`hint${questionNumber}`);
  const solution = document.getElementById(`solution${questionNumber}`);
  const userAnswer = answerInput.value.trim();

  if (userAnswer === correctAnswer) {
    solution.innerHTML = `Pembahasan: <br>Masukkan nilai x = ${questionNumber === 1 ? 2 : (questionNumber === 2 ? 4 : 2)} ke dalam fungsi. <br>Jawaban = ${correctAnswer}`;
    wrongAttempts[questionNumber - 1] = 0; // Reset wrong attempts after correct answer
    MathJax.typeset(); // Render the LaTeX notation after displaying solution
  } else {
    wrongAttempts[questionNumber - 1]++;

    if (wrongAttempts[questionNumber - 1] === 1) {
      hint.innerHTML = `Hint ${questionNumber}: ${getHint(questionNumber)}`;
    }

    if (wrongAttempts[questionNumber - 1] === 3) {
      solution.innerHTML = `Pembahasan: ${getSolution(questionNumber)}`;
      MathJax.typeset(); // Render the LaTeX notation after displaying solution
    }
  }
}

function getHint(questionNumber) {
  switch (questionNumber) {
    case 1:
      return "Substitusi nilai x";
    case 2:
      return "Samakan nilai dengan penyebut";
    case 3:
      return "Kali akar sekawan";
    default:
      return "";
  }
}
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js">
  </script>
function getSolution(questionNumber) {
  switch (questionNumber) {
    case 1:
      return `Masukkan nilai x = 2 kedalam fungsi maka: $$\\lim_{{x \\to 2}} \\frac{{3(2) - 6}}{{(2) + 2}} = \\frac{0}{4} = 0$$`;
    case 2:
      return `Keluarkan 3x: $$\\lim_{{x \\to 4}} \\frac{{3x(x^2 - 16)}}{{(x^2 - 16)}} = \\lim_{{x \\to 4}} 3x = 12$$`;
    case 3:
      return `Kali dengan akar sekawan: $$\\lim_{{x \\to 2}} \\frac{{(4 - x^2)(3 + \\sqrt{{x^2 + 5}})}}{{9 - (x^2 + 5)}} = \\lim_{{x \\to 2}} (3 + \\sqrt{{(2)^2 + 5}}) = 6$$`;
    default:
      return "";
  }
}
