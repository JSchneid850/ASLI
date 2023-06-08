const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

video.addEventListener("loadeddata", () => {
  setInterval(() => {
    const track = video.srcObject.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);

    imageCapture.grabFrame()
      .then((imageBitmap) => {
        const x = /* calculate the x-coordinate of the center of the hand */;
        const y = /* calculate the y-coordinate of the center of the hand */;
        const size = 200;
        const croppedImage = new ImageData(
          imageBitmap,
          x - size / 2,
          y - size / 2,
          size,
          size
        );
        ctx.putImageData(croppedImage, 0, 0);
      })
      .catch((error) => {
        console.error("Error capturing frame: ", error);
      });
  }, 1000 / 30);
});


const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing webcam: ", error);
  });

  