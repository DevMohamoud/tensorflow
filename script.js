console.log('Hello!');

const Video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const demosSection = document.getElementById('demos');
const enableWebCamButton = document.getElementById('webcamButton');

// Check if webcam acccess is supported.
function getUserMediaSupport() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// If webcam supported, add event listener to button for when user
// wants to activate it to call enableCam function which we will
// define in the next step.
if (getUserMediaSupport()) {
  enableWebCamButton.addEventListener('click', enableCam);
} else {
  console.warn('getUserMedia() is not supported by your browser!');
}

// Enable the live webcam view and start classification.
function enableCam(event) {
  // Only continue if the COCO-SSD has finished loading.
  if (!model) {
    return;
  }
  // Hide the button once clicked.
  event.target.classList.add('removed');

  // getUserMedia parameters to force video but not audio.
  const constraints = {
    video: true,
  };

  // Activate the webcam stream
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream;
    video.addEventListener('loadeddata', predictWebcam);
  });
}

function predictWebcam() {}
let model = true;
demosSection.classList.remove('invisible');
