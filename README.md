# 🚗 ChallanEase

> **A conceptual, citizen-first redesign of the e-Challan web experience.**
> Redesigning complex government portals into a clear, simple, and stress-free interface.

---

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Framer%20Motion-11.0-FF4081?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## 💡 The Problem

The traditional e-Challan experience presents users with dense layouts, legal act sections, and multi-page forms (requiring engine/chassis numbers or OTPs) before answering basic questions:
* *Do I have a pending fine?*
* *Where did this happen?*
* *What is my next step?*

For a citizen who might already be stressed, this friction adds anxiety.

---

## ⚡ The Solution

**ChallanEase** restructures the home experience around immediate clarity:
1. **Start with the key question** — A single input to check status.
2. **Plain-Language Explanations** — Legal sections are demystified; violations are clear.
3. **Frictionless Lookup** — No sign-up, no login, and no unnecessary fields for previews.

---

## 🏆 Key Features

### 🇮🇳 License Plate Lookup Simulator
Type a demo registration plate inside a field styled like a **real physical Indian license plate** (complete with IND blue flags, border bevels, and embossed monospace character casing). Experience an immediate lookup flow with a custom-built particle **confetti burst** on success!

### 🔍 Interactive Flow Comparison Simulator
Toggle between the **Traditional Portal** (showing 5 busy input fields, CAPTCHA blocks, engine code lookup requirements) and the **ChallanEase Redesign** side-by-side to compare flow complexity directly.

### ⏱️ Count-Up Dashboard Stats
Interactive statistics cards animate from zero dynamically as they scroll into view, utilizing a custom `IntersectionObserver` React hook.

### 📜 Navbar Scroll Progress Line
A responsive progress indicator follows the viewport height at the bottom of the sticky header to trace page completion.

### 🎮 Hidden Easter Eggs
* Type the classic **Konami Code** (`↑↑↓↓←→←→BA`) anywhere on the screen.
* Or **click the logo 5 times rapidly** (mobile friendly!).
* Both triggers reveal a hidden greeting toast.

---

## 🚀 Running Locally

Get the application up and running on your machine in under a minute:

```bash
# Clone the repository
git clone https://github.com/TusarGoswami/challanease-redesign.git
cd challanease

# Install dependencies
npm install

# Run the local development server
npm run dev

# Compile for production
npm run build
```

---

## 🎫 Try the Demo Plates

Test the search engine instantly with these pre-loaded mockup records:

| Plate Number | Fines Count | Status | Total Due |
|---|---|---|---|
| **`DL 01 AB 1234`** | 2 Challans | 1 Pending, 1 Paid | ₹1,000 |
| **`MH 02 CD 5678`** | 1 Challan | Pending | ₹2,000 |

---

## ⚠️ Disclaimer

> [!WARNING]
> **ChallanEase is a conceptual frontend redesign and is not an official government service.**
> It does not connect to any government database, does not process real challan data, and does not collect or store user information. This project was built strictly as a frontend engineering design assessment.
