# Buffalo's BnB Website (WEDE5020 POE Project)

A responsive, SEO-optimized, interactive web application built for **Buffalo's BnB**, a self-catering guest accommodation situated within the Greenpark Eco-Estate in Boksburg, Johannesburg.

---

## 🚀 Live Deployment & Links
- **Live Website URL:** [https://monareng1.github.io/buffalo-s-airbnb/](https://monareng1.github.io/buffalo-s-airbnb/)
- **GitHub Repository:** [https://github.com/monareng1/buffalo-s-airbnb](https://github.com/monareng1/buffalo-s-airbnb)

---

## 📂 Project Structure & Core Pages

The website consists of 6 multi-page HTML views sharing a cohesive styling framework (`style.css`) and dynamic JavaScript module (`script.js`):

1. `index.html` – Homepage featuring direct call-to-actions, highlight features, and quick booking access.
2. `about.html` – Background details on founders Ray & Elizabeth Monareng and the Greenpark Eco-Estate environment.
3. `amenities.html` – Detailed breakdown of apartment amenities, security features, local proximity, and surrounding attractions.
4. `rates.html` – Clear pricing rules, check-in/out policies, and an interactive cost estimation tool.
5. `gallery.html` – Photo showcase of apartment interiors, leisure grounds, and estate amenities with custom viewer enhancements.
6. `contact.html` – Contact details, Google Maps embed, and a client-side validated booking inquiry form.

---

## ✨ Technical Stack & Interactive Features

### **Tech Stack**
- **HTML5:** Semantic architecture, accessible metadata, inline SVG elements, clean document hierarchy, and structured forms.
- **CSS3:** Responsive flexbox/grid layout, custom color palettes, hover micro-interactions, and continuous marquee text banners.
- **JavaScript (ES6):** Centralized DOM manipulation script (`script.js`) executing cleanly inside a single `DOMContentLoaded` wrapper.

### **Key Implemented Functionalities**
* **Gallery Lightbox Modal with Next/Prev Navigation:** Clicking any gallery image opens a full-screen modal overlay complete with interactive Next (`❯`) and Previous (`❮`) navigation buttons and click-away closing behaviors.
* **Native Lazy Loading (`loading="lazy"`):** Off-screen gallery and content images utilize deferred loading to maximize page load speeds and optimize performance metrics.
* **Dynamic Stay Cost Calculator:** Real-time calculator on `rates.html` that computes total night count and estimated cost based on selected check-in and check-out dates using a base rate of **R850/night**.
* **Live Search Filter:** Interactive filtering on `amenities.html` allowing prospective guests to search keywords (e.g., *Wi-Fi, Pool, Airport, Security*) and highlight matching features instantaneously.
* **Client-Side Form Validation:** Comprehensive validation logic on `contact.html` ensuring required input fields pass structural checks before submission.

---

## 🔍 SEO Optimization & Webmaster Verification

- **Meta Tags:** Every HTML document includes tailored page titles, structured meta descriptions, targeted keywords, open graph tags, and mobile viewport parameters.
- **`robots.txt`:** Standard crawling guide located in the root directory giving web crawlers indexing permissions.
- **`sitemap.xml`:** XML sitemap cataloging all core page URLs (`index.html`, `about.html`, `amenities.html`, `rates.html`, `gallery.html`, `contact.html`).
- **Google Search Console Integration:** Property verified via meta tag authentication; `sitemap.xml` successfully submitted and queued for priority index crawling.

---

## 👨‍💻 Project Details & Authorship
- **Course:** WEDE5020 Web Development
- **Founders / Business:** Ray & Elizabeth Monareng
- **Location:** Greenpark Eco-Estate, Boksburg, Gauteng, South Africa
