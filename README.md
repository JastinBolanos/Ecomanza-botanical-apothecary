# 🌿 ECOMANZA · Botanical Apothecary & Sustainable Cosmetics (v1.0.0-PROD)

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-production-blue)
![Version](https://img.shields.io/badge/version-1.0.0--PROD-orange)
![Sustainability](https://img.shields.io/badge/packaging-zero_waste-success)

E-commerce platform and contemporary botanical apothecary by ECOMANZA.  
This digital system was conceived with an artisanal and sober approach to provide a serene sensory experience, facilitating the discovery of pure botanical formulas, the honest breakdown of wild-harvested ingredients, and a fluid, respectful, and minimalist shopping process.

🌍 **View Live Platform (Production) 🟢**  https://ecomanza.vercel.app/

---

<img width="1892" height="1078" alt="Captura de pantalla 2026-09-10 170023" src="https://github.com/user-attachments/assets/88102c6b-0a89-403f-abac-2e869b1b34c4" />

---

## 🎥 Sensory Navigation and Experience Demonstration

### 🎬 Interactive Tour of the Store and Botanical Catalog
User interface walkthrough: immersive welcome screen with smooth transition, catalog with aromatic category filtering, product specification sheet with olfactory notes and application ritual, and interactive side drawer for shopping basket management.

https://github.com/user-attachments/assets/cd4ca09f-68c8-444e-b0c3-6ea8e6711b8b

---

## 🏗️ System Architecture and Technology Stack

This repository hosts the frontend architecture of the web platform, developed following principles of typographic restraint, visual accessibility, and optimal loading performance. Development was conducted in a disciplined and modular manner, prioritizing visual comfort, instant response times, and an organic design in linen and stone tones.

### Core & Runtime (Edge-Optimized):
* **`react (^19.0.1)` & `react-dom`**: Declarative rendering with the latest concurrency enhancements and efficient component lifecycle management.
* **`typescript (~5.8.2)`**: Strict typing to ensure catalog consistency, cart item types, volume variants, and ingredient definitions.
* **`vite (^6.2.3)`**: Ultra-fast development server and optimized bundling with code splitting for production.
* **`react-router-dom (^7.18.3)`**: Declarative client-side routing for instant, flicker-free navigation.

### User Interface (UI) & Styling:
* **`tailwindcss (^4.1.14)`**: Modern utility CSS system configured for a warm editorial palette, honoring mathematical proportions in spacing and typography.
* **`motion (^12.23.24)`**: Transitions and microinteractions choreographed with subtlety (shopping drawer slide-in, screen transitions, and modals).
* **`lucide-react (^0.546.0)`**: Minimalist and standardized vector iconography (shopping bag, botanical search, sustainability seals).

### State Management & User Experience:
* **`CartContext`**: React Context with local storage synchronization (`localStorage`), keeping the shopping bag preserved across browsing sessions.
* **`ComingSoonModalContext`**: Centralized state management and friendly notices for upcoming complementary features.
* **`@google/genai (^2.4.0)`**: Prepared for AI-assisted botanical advice and custom formulation services.

---

## 🚀 Operational Modules (Deployed)

### 🌿 Welcome Screen & Immersive Transition (`WelcomeScreen`)
* Visual welcome with refined serif typography (*Playfair / Editorial*) and an inspiring message of deceleration and well-being.
* Fluid fade into the main catalog with session memory to avoid hindering returning visits.

### 🧴 Botanical Formulas Catalog (`ProductsPage` & `ProductCard`)
* Honest product showcase classified by families: Hair, Face, Body, and Home.
* Filtering by hair/skin needs (nutrition, purification, soothing, balance).
* Volume indicator (`ml`), botanical notes on minimalist chips, and clearly visible pricing.

### 📖 Product Detail & Application Ritual (`ProductDetailPage`)
* Complete breakdown of natural active ingredients (Amazonian murumuru, flaxseed oil, Haitian vetiver, wild rosemary).
* Step-by-step application ritual guide to turn daily hygiene into a mindful ritual.
* Quantity selector and direct add-to-cart button with haptic and visual feedback.

### 🛍️ Shopping Side Drawer (`Sidebar` & `CartContext`)
* Cart accessible from any view without disrupting the reading flow.
* Dynamic quantity modifications, automatic total recalculations, and visual threshold indicator for carbon-neutral free shipping.
* Simulated checkout flow prepared for integration with sustainable payment gateways (Stripe / Redsys).

### 🔍 Predictive Botanical Search (`SearchBar`)
* Real-time search by product name, key ingredients, or therapeutic benefits.
* Direct access to product details with visual match highlighting.

### 🌱 Sustainability Manifesto & Traceability (`SustainabilityPage`)
* Transparent explanation of the reusable amber glass packaging policy and biodegradable solid refills.
* Philosophy of formulations free of harsh sulfates, non-biodegradable silicones, and synthetic fragrances.

---

## 💻 Deployment and Execution Guide (Local Environment)

For developers or contributors wishing to run, audit, or contribute to the project in a local environment:

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

## 🤝 Reflection and Craft Philosophy

> *"Building this platform was an exercise in restraint and reverence for detail. Rather than overwhelming visitors with loud commercial calls-to-action, we set out to create a digital sanctuary: breathing whitespace, measured typography, radical ingredient transparency, and clean, maintainable code paying tribute to the traditional apothecary."*

---

Intellectual Property of **ECOMANZA Botanical Apothecary** © 2026. All rights reserved.  
`[HERE GOES THE OFFICIAL WEBSITE OR CONTACT LINK]`
