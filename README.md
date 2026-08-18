# ChallanEase

A clearer way to understand and manage your traffic challan.

## Concept

ChallanEase is a **conceptual redesign** of the e-Challan web experience. Rather than forcing citizens to navigate complex government portals and decipher legal jargon, ChallanEase demonstrates what a citizen-first approach could look like — starting with the question the user actually came with and answering it immediately.

## Problem

The existing e-Challan experience typically presents users with dense navigation, legal section numbers, and multiple portals before they can answer a simple question: *"Do I have a pending challan, and what should I do about it?"*

For someone who just received a challan notice, this creates unnecessary anxiety and friction.

## Solution

ChallanEase redesigns the entry experience around three principles:

1. **Start with the user's question** — a single input to check challan status
2. **Show information in plain language** — violations described clearly, amounts visible at a glance, next steps explicit
3. **Remove friction** — no sign-ups, no multi-step navigation, no jargon-first interfaces

## Features

- **Interactive Indian license plate lookup demo** — type a demo vehicle number inside a custom-designed Indian license plate input field (complete with the IND flag strip) and see the full lookup state machine with a custom particle confetti burst on success.
- **Trust/Clarity Interactive Simulator** — a side-by-side comparative simulator comparing the 5-step traditional government portal flow with ChallanEase's frictionless single-input flow.
- **Scroll-triggered count-up statistics** — dashboard summary figures animate from zero to target values using custom scroll-triggered timing once in view.
- **Navbar scroll progress indicator** — a custom gradient progress bar that reflects current page scroll depth.
- **Product dashboard showcase** — a polished dark-theme mock dashboard demonstrating the full data view.
- **How-it-works section** — four-step explanation with staggered scroll-reveal animations.
- **Responsive design** — tested at 390px mobile through 1440px desktop with zero horizontal overflow.
- **Keyboard accessible** — proper focus states, semantic HTML, ARIA labels, and reduced-motion media query respect.
- **Hidden Konami code easter egg** — typing `↑↑↓↓←→←→BA` anywhere on the page, or clicking the navbar logo 5 times rapidly, triggers a secret developer toast (accompanied by a hidden hint in the HTML source comment).

## Tech Stack

- **React 19** — component architecture
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — utility-first styling with `@theme` design tokens
- **Framer Motion** — entrance animations and state transitions
- **Lucide React** — lightweight icon library

## Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Demo Data

The interactive lookup uses hardcoded demo records. Try these vehicle numbers:

- `DL 01 AB 1234` — 2 challans (1 pending, 1 paid)
- `MH 02 CD 5678` — 1 challan (pending)

All data is fictional and clearly labelled as such throughout the interface.

## Disclaimer

**ChallanEase is a conceptual frontend redesign and is not an official government service.** It does not connect to any government database, does not process real challan data, and does not collect or store user information. This project was built as a frontend engineering assessment submission.
