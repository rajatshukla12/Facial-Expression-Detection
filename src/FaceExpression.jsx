
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

function FaceExpression() {
  const videoRef = useRef(null);

  const detectExpressionRef = useRef(null);
  const [isDetecting, setIsDetecting] = useState(false);

const [cameraReady, setCameraReady] = useState(false);

  const [expression, setExpression] = useState("Loading...");
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    let stream;
    let active = true;
    let timer;

    const startCamera = async () => {
      try {
        // Load AI models
       console.log("Loading Tiny Face Detector...");

await faceapi.nets.tinyFaceDetector.loadFromUri("/Models");

console.log("Tiny Face Detector loaded!");

console.log("Loading Face Landmark...");

await faceapi.nets.faceLandmark68Net.loadFromUri("/Models");

console.log("Face Landmark loaded!");

console.log("Loading Face Expression...");

await faceapi.nets.faceExpressionNet.loadFromUri("/Models");

console.log("Face Expression loaded!");

console.log("All models loaded successfully!");

        if (!active) return;

        // Access webcam
        stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });

        if (!active) {
          stream.getTracks().forEach(track => track.stop());
          return;
        }

        videoRef.current.srcObject = stream;

       await videoRef.current.play();

        setCameraReady(true);

      } catch (error) {
  console.error("Actual Error:", error);

  setExpression("Error: " + error.message);
}
    };

    const detectExpression = async () => {

  console.log("Detection function started!");

  console.log("Active:", active);

  console.log("Video:", videoRef.current);

  console.log(
    "Video ready state:",
    videoRef.current?.readyState
  );

  if (!active || !videoRef.current) {
    console.log("Detection stopped because condition failed!");
    return;
  }

  // Keep the remaining detection code below

      const video = videoRef.current;

      if (video.readyState >= 2) {
        const result = await faceapi
  .detectSingleFace(
    video,
    new faceapi.TinyFaceDetectorOptions({
      inputSize: 320,
      scoreThreshold: 0.2
    })
  )
  .withFaceExpressions();
        if (result) {
          const expressions = result.expressions;

          const [name, score] = Object.entries(expressions)
            .sort((a, b) => b[1] - a[1])[0];

          const labels = {
            happy: "Happy 😊",
            sad: "Sad 😢",
            angry: "Angry 😠",
            fearful: "Fearful 😨",
            disgusted: "Disgusted 🤢",
            surprised: "Surprised 😮",
            neutral: "Neutral 😐"
          };

          setExpression(labels[name] || name);
          setConfidence((score * 100).toFixed(2));

        } else {
          setExpression("No face detected");
          setConfidence(0);
        }
      }
   
    };
     detectExpressionRef.current = detectExpression;

    startCamera();

    return () => {
      active = false;
      clearTimeout(timer);

      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Facial Expression Detection</h1>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        width="500"
        style={{ maxWidth: "100%", borderRadius: "12px" }}
      />

    <br></br>
    
   <button
  disabled={!cameraReady || isDetecting}
  onClick={async () => {
    setIsDetecting(true);

    try {
      await detectExpressionRef.current?.();
    } finally {
      setIsDetecting(false);
    }
  }}
>
  {isDetecting ? "Detecting..." : "Detect Expression"}
</button>

      <h2>Expression: {expression}</h2>

      <h3>Confidence: {confidence}%</h3>
    </div>
  );
}

export default FaceExpression;
