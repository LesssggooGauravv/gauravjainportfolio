# root@jain — Personal Portfolio

> Software & AI/ML engineer building intelligent systems that scale.

A terminal-inspired personal portfolio showcasing my work across **machine learning, speech & audio AI, software engineering, and edge deployment**.

The interface is designed as a lightweight desktop environment with a Unix-inspired terminal experience, interactive windows, and command-driven navigation.

## Live Website

**[View Portfolio](https://YOUR-DOMAIN-HERE)**

---

## About

I'm **Gaurav Jain**, a final-year B.Tech student in Computer & Communication Engineering at **The LNM Institute of Information Technology (LNMIIT), Jaipur**.

My primary interests lie at the intersection of:

- Speech & Audio Machine Learning
- TTS / ASR / Speaker Diarization
- Voice Cloning & Deepfake Detection
- Generative AI & RAG Systems
- Edge AI & Model Optimization
- Backend & Full-Stack Engineering
- Scalable ML Systems

I enjoy building systems that move beyond experimentation — from model development and evaluation to deployment and real-world usability.

---

## Featured Work

### VoiceShield — Offline Edge-Based Deepfake Voice Detection

An offline, edge-deployable audio deepfake detection system designed for lightweight inference.

- Depthwise-separable CNN with SE-attention
- Trained on ASVspoof 2019 + WaveFake
- **1.87% EER**
- **0.9982 ROC-AUC**
- **76KB TFLite model**
- Gradio demonstration interface
- Debugged distributed mixed-precision training issues

**Stack:** PyTorch · TFLite · CNN · Gradio

---

### Stadium Setu — FIFA World Cup 2026 Operations Platform

A full-stack stadium operations platform focused on real-time monitoring and operational intelligence.

- Node.js / Express backend
- Prisma + SQLite
- JWT-based role access control
- Real-time WebSocket KPI dashboard
- RAG-powered chatbot
- Crowd-density heatmap

**Stack:** Node.js · Express · Prisma · SQLite · WebSocket · RAG

---

### Latex Lifestyle — RAG Lifestyle-Coaching System

An evidence-oriented RAG application combining retrieval, generation, and critique.

- Qwen2.5-32B generation
- Llama-based critique pass
- Hybrid BM25 + Chroma retrieval
- BGE embeddings and reranking
- FastAPI backend
- Streamlit interface
- Open-source-only model stack

**Stack:** Python · FastAPI · RAG · Chroma · BM25 · Streamlit

---

### GAN-Based Deepfake Audio Detection

Bachelor's thesis focused on detecting synthetic and deepfake audio using generative modeling techniques.

**Stack:** PyTorch · GANs · Audio ML

---

## Experience

### Machine Learning Intern — TTS for Indic Languages
**Jio Platforms Limited · Navi Mumbai, India**  
*June 2026 – July 2026*

Worked on production speech and audio ML systems involving multilingual TTS, voice cloning, video dubbing, and speaker diarization.

Key work included:

- Engineered a **4-version Indic-to-English video dubbing pipeline**
- Architected a modular **6-stage ML pipeline** with automated QC gating and checkpoint routing
- Scaled cross-lingual voice cloning to **22 Indian languages**
- Worked with **100 reference speakers** and a **6,250-sentence multilingual corpus**
- Implemented multi-GPU round-robin inference
- Built Hindi TTS QA workflows across **1,000+ rows**
- Developed multilingual speaker diarization using WhisperX, VoxLingua107, and Pyannote
- Resolved production dependency conflicts and security issues
- Evaluated multiple voice-cloning and emotion-transfer approaches

---

## Tech Stack

### Languages

`Python` `C++` `Java` `JavaScript` `SQL` `Bash`

### Machine Learning

`PyTorch` `TensorFlow` `Keras` `Scikit-learn`  
`Hugging Face Transformers` `CNNs` `GANs` `TFLite`  
`Model Quantization` `RAG`

### Speech & Audio

`ASR` `TTS` `Voice Cloning` `Speaker Diarization`  
`Mel Spectrograms` `Librosa` `Torchaudio` `WhisperX`  
`Pyannote` `VoxLingua107` `Gradio`

### Software Engineering

`Git` `GitHub` `Linux` `FastAPI` `Node.js` `Express.js`  
`React.js` `Prisma` `SQLite` `WebSocket` `Tailwind CSS`

### Core CS

`Data Structures & Algorithms` `OOP` `Operating Systems`  
`DBMS` `Computer Networks`

---

## Portfolio Interface

The portfolio itself is intentionally built without a heavy frontend framework.

### Features

- Terminal-inspired desktop environment
- Interactive draggable windows
- Resizable application windows
- Built-in terminal
- Command-based portfolio navigation
- Interactive project explorer
- Resume download
- Custom cursor
- CRT-inspired visual effects
- Responsive layout
- Lightweight static deployment

### Available Terminal Commands

```text
help
whoami
about
ls
ls projects
cat <file>
projects
experience
education
skills
contact
resume
github
linkedin
leetcode
email
neofetch
clear
exit