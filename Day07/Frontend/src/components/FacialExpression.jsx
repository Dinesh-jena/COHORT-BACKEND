import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";
import axios from "axios";

const FacialExpression = ({ setSongs }) => {
  const videoRef = useRef(null);

  // 🎥 Start camera
  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  // 🧠 Load models
  const loadModels = async () => {
    const MODEL_URL = "/setup/models";

    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

    console.log("Models Loaded ✅");
  };

  // 😎 Detect on button click
  const handleDetect = async () => {
    if (!videoRef.current) return;

    const result = await faceapi
      .detectSingleFace(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (result && result.expressions) {
      const exp = result.expressions;

      const maxExp = Object.keys(exp).reduce((a, b) =>
        exp[a] > exp[b] ? a : b
      ); 

        axios.get(`http://localhost:3000/songs?mood=${maxExp}`)
  .then(response => {
    console.log(response.data);
    setSongs(response.data.songs);
  })
  .catch(err => console.log(err));

    } 
  
    };
  

  useEffect(() => {
    const init = async () => {
      await loadModels();
      await startVideo();
    };

    init();
  }, []);

  return (
    <div className="mood-element">
      <h2>Facial Expression Detector 🤖</h2>

      <video
        ref={videoRef}
        autoPlay
        muted
        className="user-video-feed"
      />

      <br /><br />

      <button
                  onClick={handleDetect}
                  style={{
                    padding: "12px 28px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#fff",
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    border: "none",
                    borderRadius: "25px",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
                  }}
                >
                  🚀 Detect Mood
        </button>
    </div>
  );
};

export default FacialExpression;