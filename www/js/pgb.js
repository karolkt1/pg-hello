var textToRead;

TTS.speak({
  text: 'Good morning, how are you?',
  locale: 'en-US',
  rate: 1
}, function () {
  console.log('Text succesfully spoken');
}, function (reason) {
  console.log(reason);
});


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
