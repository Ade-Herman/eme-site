# Project Blueprint: English Course Website

## 1. Project Overview

We are building a Single Page Application (SPA) for an English course. The primary goal is to provide information clearly, catch the visitors' eyes with a clean design, and drive conversions via a direct WhatsApp inquiry button.

## 2. Tech Stack

- **Frontend Framework:** React.js (initialized via Vite for performance).
- **Styling:** Standard CSS (or CSS Modules) utilizing CSS variables for consistent theming.
- **Icons:** `react-icons` (specifically for the WhatsApp logo and UI elements).
- **Testing:** Jest and React Testing Library.

## 3. Design System & UI/UX

- **Aesthetic:** Clean, simple, modern, and uncluttered. Use high-quality images as backgrounds for specific sections (e.g., Hero section) with appropriate overlays to ensure text readability.
- **Color Palette:**
  - Primary: Deep/Professional Blue
  - Background: Clean White
  - Accent/Lining: Bright Yellow (used sparingly for active links, highlights, and primary Call-to-Action buttons).
- **Core Components/Sections:**
  1.  **Navbar:** Sticky top navigation.
  2.  **Hero Section:** Image background, welcoming headline, and a CTA.
  3.  **About/Information:** Brief course overview.
  4.  **Programs/Classes:** Details on what is taught.
  5.  **Floating Action Button (FAB):** A persistent WhatsApp button fixed to the bottom-right of the screen.

## 4. Security Guidelines

- **Dependency Management:** Ensure all npm packages are up-to-date. Do not introduce unnecessary third-party libraries that expand the attack surface.
- **XSS Prevention:** React automatically escapes string variables in views, but ensure no use of `dangerouslySetInnerHTML` unless strictly necessary and properly sanitized.
- **External Links:** Any external links (including the WhatsApp `wa.me` link) must use `target="_blank"` and `rel="noopener noreferrer"` to prevent reverse tabnabbing attacks.
- **Data Handling:** As a static informational site, do not collect or store personal user data in the browser (Local/Session storage) unnecessarily.

## 5. Testing Requirements

- Implement Unit Testing for all core UI components.
- Ensure the WhatsApp button link generates the correct URL format and renders securely.
- Write basic render tests to confirm sections (Hero, About, Navbar) mount without crashing.

## 6. AI Agent Directives

- **Read First:** Always review this `instructions.md` file before generating new components or refactoring code to ensure alignment with the tech stack, colors, and security rules.
- **Step-by-Step:** Do not attempt to build the entire application at once. Wait for user prompts to tackle specific components sequentially.
- **Modularity:** Keep React components small, single-purpose, and reusable. Create a separate `assets` folder for images and a `components` folder for the UI parts.
- **Self-Correction:** If a requested feature violates the security guidelines outlined above, warn the user and propose a secure alternative.
