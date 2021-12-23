Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

Webcam.attach("#webcam")

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("output").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })
}

console.log(ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vsKPxHo81/model.json", modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
}