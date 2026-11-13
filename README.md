# Facial Expression Detection 😊

A real-time Facial Expression Detection web application built using **React.js** and **face-api.js**. This application uses a webcam to detect a user's face and recognize facial expressions using AI-based machine learning models.

## 🚀 Features

- Real-time webcam access.
- Face detection using Tiny Face Detector.
- Facial landmark detection.
- Facial expression recognition.
- Detect Expression button to trigger detection.
- Displays the detected facial expression.
- Shows confidence percentage for the predicted expression.
- Simple and user-friendly interface.

## 🛠️ Technologies Used

- React.js
- JavaScript
- face-api.js
- HTML5
- CSS3
- Vite

## 😀 Expressions Detected

The application can recognize seven expressions:

1. Happy 😊
2. Sad 😢
3. Angry 😠
4. Fearful 😨
5. Disgusted 🤢
6. Surprised 😲
7. Neutral 😐

## 📂 Project Structure

```text
Frontend/
│
├── public/
│   └── models/
│       ├── tiny_face_detector_model-shard1
│       ├── tiny_face_detector_model-weights_manifest.json
│       ├── face_landmark_68_model-shard1
│       ├── face_landmark_68_model-weights_manifest.json
│       ├── face_expression_model-shard1
│       └── face_expression_model-weights_manifest.json
│
├── src/
│   ├── FaceExpression.jsx
│   ├── App.jsx
│   └── ...
│
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to the Project Folder

```bash
cd Frontend
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open the Application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

Allow webcam access when your browser asks for permission.

## 🧠 How It Works

1. The application loads the required face-api.js models.
2. The webcam starts and captures the user's video.
3. The Tiny Face Detector locates the face.
4. Facial landmarks are identified.
5. The facial expression model analyzes facial features.
6. The application finds the expression with the highest prediction score.
7. The detected expression and confidence percentage are displayed on the screen.

## 📌 Important Notes

- Make sure all required model files are present inside `public/models`.
- The browser must have permission to access your webcam.
- Camera access generally requires HTTPS or localhost.
- Wait for all AI models to load before clicking the Detect Expression button.
- Detection accuracy can vary depending on lighting, camera quality and face position.

## 🔮 Future Enhancements

- Automatic continuous expression detection.
- Store expression detection history.
- Improve detection speed and performance.
- Add a graphical dashboard for expression statistics.
- Make the application fully responsive for mobile devices.

## 👨‍💻 Author

**Rajat Shukla**


⭐ If you find this project interesting, don't forget to give it a star!
