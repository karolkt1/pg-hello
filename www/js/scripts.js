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
  responsiveVoice.speak(textToRead,"Polish Female");
};