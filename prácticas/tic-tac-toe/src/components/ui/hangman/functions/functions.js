export function checkResults (correct, wrong, myWord)  {
  let status = "winner";
  // Comprueba si hemos ganado
  myWord.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });
  // Comprueba si hemos perdido
  if (wrong.length === 6) status = "loser";

  return status;
};

