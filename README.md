# 🌌 Subhajit Chowdhury's 3D Interactive Portfolio

Welcome to the digital representation of my professional journey. As a Cloud Data Engineer, I spend my days orchestrating TB-scale data pipelines and building robust Data Lakehouse architectures. This repository is where my engineering mindset meets interactive web design. 

Built with **React, TypeScript, Three.js, and GSAP**, this 3D portfolio is designed to be an immersive, high-performance experience that goes beyond a standard flat resume.

---

## 📖 The Story Behind the Build

In the world of data engineering, the core challenge is turning raw, chaotic data into structured, meaningful insights. I realized the modern web shares a similar challenge—it is filled with static, flat resumes that fail to capture the dynamic nature of a true engineering career. I needed a platform that stood out and reflected a deep commitment to modern architecture and design.

The objective was to engineer a personal portfolio that didn’t just "list" skills, but demonstrated them through an engaging, high-performing medium. The goal was to build a responsive, interactive 3D web application that was just as optimized and meticulously structured as the AWS and Snowflake pipelines I build for enterprise analytics.

To achieve this, I adopted a modern frontend tech stack—**React 18, TypeScript, and Vite**—and integrated **React Three Fiber** for 3D rendering. To ensure the storytelling was fluid, I utilized **GSAP (GreenSock)** for smooth scrolling animations and transitions. 
- Modeled the codebase architecture to be highly modular, much like a Medallion data architecture.
- Implemented state management and optimized 3D assets to ensure low latency and reduced compute overhead on the client side.

The final outcome is a production-grade, interactive 3D portfolio that successfully translates my professional data engineering career into a visual narrative. It features animated page sections, a custom 3D physics-based tech stack showcase, and smooth transitions that provide a seamless user experience across devices without sacrificing performance.

---

## 🔑 Important Keys to Consider

When reviewing this codebase or running it locally, keep the following engineering principles in mind:

1. **Performance Optimization:** Just like optimizing S3 storage or Athena queries, the 3D scene uses targeted post-processing, physics dampening (`@react-three/rapier`), and optimized geometries to ensure it doesn't drain the user's GPU.
2. **Modular Architecture:** The `src/components` and `src/data` directories are strictly separated. Content (like my resume data) is decoupled from the UI logic, making it highly maintainable and scalable.
3. **Fluid Orchestration:** The use of GSAP's `ScrollSmoother` and `ScrollTrigger` acts much like AWS Step Functions for the UI—coordinating complex, multi-step animations flawlessly based on user scroll interactions.

---

## 🛠️ Technical Stack

### **Core Framework**
- **React 18** & **TypeScript**
- **Vite** (for blazing-fast builds)

### **Animation & 3D Rendering**
- **Three.js** & **@react-three/fiber** (for the 3D canvas)
- **@react-three/drei** & **@react-three/postprocessing** (for environments and visual effects)
- **@react-three/rapier** (for 3D physics)
- **GSAP + @gsap/react** (for advanced scroll animations)

---

## 🚀 Getting Started

Want to run this local environment? Follow these steps:

### Prerequisites
- **Node.js** 18+ (recommended)
- **npm** 9+ (or compatible)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Subhajit-Chowdhury/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Ignite the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to the URL shown in your terminal (typically `http://localhost:5173`).

---

## ⚙️ Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Type-checks the TypeScript code and builds a production-ready bundle.
- `npm run preview` - Serves the production build locally to verify before deployment.
- `npm run lint` - Runs ESLint checks to maintain code quality.

---

## 🛡️ License & Acknowledgements

- This project is open source and available under the [MIT License](LICENSE).
- Built with standard `gsap` (no trial plugins required). If migrating or updating, refer to the [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/).

> *"Transforming raw data into insights, and raw code into experiences."*
