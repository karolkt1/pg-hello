var textToRead;

function popup() {
    textToRead = prompt("Co mam przeczytać", "");

    if (textToRead != null) {
      document.getElementById("readme").innerHTML =
      "Zostanie przeczytana następująca wiadomość:" + textToRead;
    }
  }
  
function speak() {
  speechSynthesis.speak(new SpeechSynthesisUtterance(textToRead));
}
