var textToRead;

function init(){
  console.log("Hello World!")
}

function popup() {
    textToRead = prompt("Co mam przeczytać", "");

    if (textToRead != null) {
      document.getElementById("readme").innerHTML =
      "Zostanie przeczytana następująca wiadomość:" + textToRead;
    }
  };
  
function speak() {
  speechSynthesis.speak(new SpeechSynthesisUtterance(textToRead));
};
function speakOnAndroid(){
TTS.speak({
  text: textToRead,
  locale: 'en-US',
  rate: 1
}, function () {
  console.log('Text succesfully spoken');
}, function (reason) {
  console.log(reason);
});}