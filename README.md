# Kasparro: AI Brand Visibility Audit Platform

![Project Status](https://img.shields.io/badge/Status-Prototype-blue)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js_15_|_Tailwind-black)

## 📌 Project Overview

**Kasparro** is a frontend prototype for a SaaS (Software as a Service) platform designed to help brands understand how they are perceived by Artificial Intelligence. 

In the modern web, people don't just search on Google; they ask ChatGPT, Gemini, and Claude. Kasparro simulates a tool that "audits" these AI models to see if a brand is being recommended, what sentiment is associated with it, and how visible it is compared to competitors.

### 🚀 Key Features

*   **Marketing Landing Page**: A modern, high-conversion homepage explaining the value proposition of "AI-First SEO".
*   **The "Audit Pipeline" Visualization**: A breakdown of how the tool supposedly ingests data, analyzes it with AI, and outputs intelligence.
*   **Interactive Dashboard**: A user-facing app dashboard that displays:
    *   **Visibility Score**: A simulated metric of brand health (0-100%).
    *   **Custom Graph**: A CSS-only bar chart visualization of visibility trends.
    *   **Mock Real-time Data**: Displays tracking for keywords, EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness) scores, and competitor analysis.
*   **Detailed Audit Modules**: Specific pages for "LLM Visibility", "Sentiment Analysis", and more, featuring dynamic scorecards and actionable insights.

---

## 🛠 Tech Stack (How it's made)

This project is built using modern web development best practices:

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router) - The latest React framework for production.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For rapid, utility-first styling and responsive design.
*   **Icons**: [Lucide React](https://lucide.dev/) - For clean, consistent SVG icons.
*   **Language**: [TypeScript](https://www.typescriptlang.org/) - For type-safe code and better developer experience.
*   **Data Handling**: Custom JSON-based mock data architecture (simulating a backend).

### 💡 Interesting Technical Details

*   **No Graph Library**: The bar charts on the dashboard are **custom-built using pure HTML & CSS**. We avoided heavy libraries like Chart.js to keep the app lightweight and fast.
    *   *See: `src/app/app/dashboard/page.tsx`*
*   **Component Architecture**: The UI is built with reusable components (Cards, Badges, Buttons) located in `src/components/ui`, following a modular design pattern.
*   **Dynamic Routing**: The audit modules use Next.js dynamic routes (`[moduleId]`) to render different content (Sentiment, Visibility, etc.) from a single page template.

---

## 📂 Project Structure

```bash
kasparro/
├── src/
│   ├── app/                 # Next.js App Router (Pages)
│   │   ├── (marketing)/     # Public pages (Home, Platform)
│   │   └── app/             # Protected app pages (Dashboard, Audit)
│   ├── components/          # Reusable UI components
│   │   └── ui/              # Buttons, Cards, Badges, etc.
│   ├── data/                # Mock JSON data (Brands, Audit Results)
│   └── styles/              # Global CSS config
├── public/                  # Static assets (images)
└── package.json             # Dependencies
```

## 🏁 Getting Started

To run this project locally on your machine:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open Browser**:
    Visit [http://localhost:3000](http://localhost:3000)

---
*Built for the Future of Search.*
