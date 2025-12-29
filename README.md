# Kasparro – AI Brand Visibility Audit Platform

## Overview

Kasparro is a frontend prototype of a SaaS platform that helps brands understand how they appear inside **AI-generated answers**.

As users increasingly rely on tools like ChatGPT, Gemini, and Claude instead of traditional search engines, brand visibility is no longer limited to Google rankings. Kasparro represents an **AI-first approach to brand visibility and SEO intelligence**.

This project focuses on product design, frontend architecture, and UX — not real AI model integration.

Live on:
https://kasparro-frontend-piyush-kumar-sodh-omega.vercel.app/
---

## Problem Statement

Traditional SEO tools answer questions like:
- What keywords do I rank for?
- How much traffic do I get from search engines?

Kasparro answers:
- Does AI recommend my brand?
- What sentiment is associated with my brand in AI responses?
- How visible is my brand compared to competitors in AI-generated answers?
- How strong is my brand’s EEAT profile from an AI perspective?

---

## Key Features

### AI Visibility Dashboard
- Simulated brand visibility score (0–100)
- Visibility trend visualization
- Keyword-level AI exposure tracking
- Competitor comparison insights

### Audit Modules
- LLM visibility analysis
- Sentiment analysis
- EEAT (Experience, Expertise, Authority, Trustworthiness) scoring
- Actionable recommendations to improve AI perception

### Product & Marketing Pages
- AI-first SEO positioning
- Clear explanation of the AI audit pipeline
- SaaS-style landing pages with strong product narrative

### Frontend Prototype
- Uses structured mock data to simulate audit results
- Designed to feel like a real SaaS analytics platform
- No backend or external APIs required

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- JSON-based mock data

---

## Purpose

This project demonstrates:
- SaaS product thinking
- AI-native product concepts
- Modern frontend architecture
- Dashboard and analytics UI patterns
- Clean, scalable component design

Kasparro can be used as a portfolio project, MVP concept, or foundation for a real AI visibility platform.

---

## Getting Started

```bash
npm install
npm run dev
## Component Usage Guide

### 🎨 Design System
The project uses a custom aesthetic with a core palette of Indigo, Violet, and Cyan.

- **Primary Gradient**: `bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500`
- **Text Gradient**: Use the `.text-gradient-brand` utility class.

### 🧩 Core Components

#### `Button`
Supports variable variants. Use `primary` for main CTAs (applies the brand gradient).
```tsx
<Button variant="primary" size="lg">Action</Button>
<Button variant="outline">Secondary</Button>
```

#### `Card`
Glassmorphism-styled container with `backdrop-blur`.
```tsx
<Card>
  <CardHeader><CardTitle>...</CardTitle></CardHeader>
  <CardContent>...</CardContent>
</Card>
```

#### `Skeleton`
Loading placeholder for async data.
```tsx
<Skeleton className="h-10 w-full" />
```

#### `StatusIcon`
Visual indicator for audit results.
```tsx
<StatusIcon status="pass" /> // Green check
<StatusIcon status="warning" /> // Yellow triangle
```
