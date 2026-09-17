<div align="center">
  <img alt="ECOMANZA Banner" src="https://github.com/user-attachments/assets/ab567dfd-a36f-4f5e-9699-87ec1007a01d" width="40%" />

  <br>

  <h3>Botanical Apothecary & Sustainable Cosmetics (v1.0.0-PROD)</h3>

  <p>
    <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status" />
    <img src="https://img.shields.io/badge/deployment-production-blue" alt="Deployment" />
    <img src="https://img.shields.io/badge/version-1.0.0--PROD-orange" alt="Version" />
    <img src="https://img.shields.io/badge/packaging-zero_waste-success" alt="Sustainability" />
  </p>
</div>

<br>

> **Modern Frontend E-Commerce & Cosmetics UI Showcase.**  
> A client-side frontend web application presenting an artisanal botanical apothecary catalog. This project focuses entirely on frontend engineering: accessible UI components, formula ingredient breakdowns, mindful ritual guides, aromatic category filtering, and an interactive slide-over cart drawer.

<br>

<div align="center">
  <h3>🌍 <b><a href="https://ecomanza.vercel.app/">View Live Platform (Production) 🟢</a></b></h3>
  <br>
  <img alt="ECOMANZA Preview" src="https://github.com/user-attachments/assets/88102c6b-0a89-403f-abac-2e869b1b34c4" width="80%" />
</div>

## 🎥 Sensory Navigation and Experience Demonstration

### 🎬 Interactive Tour of the Store and Botanical Catalog
Frontend user interface walkthrough: gentle welcome screen transition, product exploration with category filtering, detailed ingredient cards with step-by-step application instructions, and the interactive slide-over cart drawer.

https://github.com/user-attachments/assets/cd4ca09f-68c8-444e-b0c3-6ea8e6711b8b

---

## 🏗️ System Architecture and Technology Stack

This repository is dedicated exclusively to the **frontend client-side architecture** of the web platform. It explores component modularity, warm neutral design systems, and responsive layout practices built entirely for the browser.

### Core & Runtime (Frontend Client):
* **`react (^19.0.1)` & `react-dom`**: Modern frontend rendering engine managing component lifecycles and reactive UI state updates.
* **`typescript (~5.8.2)`**: Static type safety for product models, category definitions, cart items, and ingredient schemas.
* **`vite (^6.2.3)`**: Fast local build tooling and optimized client-side bundle generation.
* **`react-router-dom (^7.18.3)`**: Declarative client-side routing for smooth, single-page application navigation.

### User Interface (UI) & Styling:
* **`tailwindcss (^4.1.14)`**: Utility-first CSS framework configured with warm stone, linen, and botanical color tokens.
* **`motion (^12.23.24)`**: Fluid choreography for page transitions, slide-over panels, and interactive modal dialogs.
* **`lucide-react (^0.546.0)`**: Minimal vector iconography for navigation, search, and informational badges.

### State Management & User Experience:
* **`CartContext`**: Client-side React Context synchronized with browser local storage (`localStorage`) to preserve cart state across user sessions.
* **`ComingSoonModalContext`**: Frontend state management for preview notifications and planned feature modals.
* **`@google/genai (^2.4.0)`**: Client integration for contextual botanical suggestions and personalized skincare tips.

---

## 🚀 Operational Modules (Deployed)

### 🌿 Welcome Screen & Intro Transition (`WelcomeScreen`)
* Minimalist opening splash screen featuring serif typography and an introductory message on everyday wellness.
* Gentle fade transition into the product catalog with session storage checks to respect returning users.

### 🧴 Botanical Formulas Catalog (`ProductsPage` & `ProductCard`)
* Responsive product grid organized across distinct families: Hair, Face, Body, and Home.
* Client-side filter controls by skin and hair needs (hydration, purification, soothing, balance).
* Clear visual hierarchy highlighting product volume (`ml`), aromatic notes, and pricing.

### 📖 Product Detail & Application Ritual (`ProductDetailPage`)
* Itemized presentation of key botanical ingredients (murumuru butter, flaxseed oil, vetiver, wild rosemary).
* Step-by-step instructions outlining recommended skincare and haircare rituals.
* Responsive quantity selectors and instant cart additions with immediate visual confirmation.

### 🛍️ Shopping Side Drawer (`Sidebar` & `CartContext`)
* Accessible slide-over cart drawer reachable from any page without navigating away.
* Dynamic quantity modifiers, real-time subtotal calculations, and a visual progress indicator for free shipping thresholds.
* Simulated client-side checkout transition prepared for integration with payment gateways.

### 🔍 Botanical Search (`SearchBar`)
* Real-time search by product name, active ingredient, or desired benefit.
* Instant visual matching and direct navigation to individual product specification views.

### 🌱 Sustainability & Packaging (`SustainabilityPage`)
* Informational section highlighting reusable amber glass packaging and solid refill formats.
* Clear brand values showcasing formulations free from harsh sulfates, non-biodegradable silicones, and synthetic perfumes.

---

## 💻 Deployment and Execution Guide (Local Environment)

For developers or contributors wishing to run, audit, or contribute to the frontend project in a local environment:

### 1. Clone the repository and navigate to the directory
```bash
git clone [HERE GOES THE GITHUB REPOSITORY LINK]
cd ecomanza
```

### 2. Install dependencies (Node.js v18+)
Install all project dependencies reproducibly:
```bash
npm install
```

### 3. Environment Configuration
If you wish to enable external integrations or botanical recommendation assistants, duplicate the environment variables file:
```bash
cp .env.example .env
```
*(Note: Configure the necessary API keys inside `.env` accordingly).*

### 4. Start the local development server
Start the Vite server with fast reload and local network support:
```bash
npm run dev
```
The terminal will indicate the active local address (default `http://localhost:3000`).

### 5. Validation and Production Build (CI/CD Pipeline)
To verify types and generate optimized files ready for CDN / Edge distribution:
```bash
# TypeScript type checking
npm run lint

# Production bundle build
npm run build
```

---

## 🤝 Project Philosophy

> *"This project represents an exploration in modern frontend engineering, focusing on calm visual hierarchies, comfortable typography, and transparent ingredient presentation to create an approachable e-commerce experience."*

---
<img width="1255" height="252" alt="Captura de pantalla 2026-09-16 123050" src="https://github.com/user-attachments/assets/decb0940-fe49-49d9-827e-80508e0c81d6" />
