import { Defaults } from "../types"

abstract class camera{

    static canvas : HTMLCanvasElement;

    static video : HTMLVideoElement; 

    static init() {
        navigator.mediaDevices.enumerateDevices()
            .then(camera.gotDevices)
            .catch(camera.handleError);
    }

    static gotDevices(devices: MediaDeviceInfo[]) : Promise<void> {
        if (devices.length < 1) {
            return Promise.reject("No devices found");
        }
        return camera.initCamera();
    }

    static initCamera(): Promise<void> {
        return camera.getVideoStream()
            .then(camera.gotStream)
            .catch(camera.handleError);
    }

    static getVideoStream(): Promise<MediaStream> {
        let constraints = { audio: false, video: true };
        return navigator.mediaDevices.getUserMedia(constraints)
    }

    static gotStream(stream: MediaStream) {
        camera.canvas = document.createElement('canvas');
        camera.video = document.querySelector('video')!;

        camera.video.onloadedmetadata = () => { camera.video.play(); }
        camera.video.oncanplay = () => { camera.on_video_ready() }  
        
        camera.video.srcObject = stream;
    }

    static on_video_ready() {
        camera.canvas.width = Defaults.width;
        camera.canvas.height = camera.video.videoHeight / (camera.video.videoWidth / Defaults.width)
        camera.video.setAttribute('height', camera.canvas.height.toString())
		camera.video.setAttribute('width', camera.canvas.width.toString())
    }
    static handleError = (reason: any) => { console.log(reason) }
    
}

camera.init();