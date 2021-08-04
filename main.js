var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("text_box").innerHTML = " ";
    recognition.start()
    console.log("HEy")
}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Clicking your selfie in 5 seconds"
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    //cam commands start here
    Webcam.attach(camera)
    setTimeout(function () {
        takeSnapshot();
        Save();

    }, 5000)
}

camera = document.getElementById("camera1");

Webcam.set({
    width: 300,
    height: 250,
    image_format: 'png',
    png_quality: 90
})

function takeSnapshot() {
    Webcam.snap(
        function (data_uri) {
            document.getElementById("result").innerHTML = "<img id= 'selfie_img' src= '" + data_uri + "'>"
        }
    )
}
function Save() {
    link= document.getElementById("link");
    picture= document.getElementById("selfie_img").src;
    link.href= picture;
    link.click();
}