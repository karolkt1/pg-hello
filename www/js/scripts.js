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
  
function bilboBaggins(){
  // make sure your the code gets executed only after `deviceready`.
document.addEventListener('deviceready', function () {
  // basic usage
  TTS
      .speak('hello, world!').then(function () {
          alert('success');
      }, function (reason) {
          alert(reason);
      });

  // or with more options
  TTS
      .speak({
          text: 'hello, world!',
          locale: 'en-GB',
          rate: 0.75
      }).then(function () {
          alert('success');
      }, function (reason) {
          alert(reason);
      });
}, false);
}
function speak() {
  speechSynthesis.speak(new SpeechSynthesisUtterance(textToRead));
};
function speakAPI(){
  responsiveVoice.speak(textToRead,"Polish Female");
};