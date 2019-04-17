var textToRead;
function init() {
document.addEventListener('deviceready', function () {
  TTS.speak('Welcome to my awesome app', function () {
      console.log('Ready !');
  }, function (reason) {
      console.log(reason);
  });
});
}

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
