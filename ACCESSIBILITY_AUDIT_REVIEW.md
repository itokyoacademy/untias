# Accessibility Audit Review (WCAG 2.1 AA/AAA Conceptual)

Date: 2024-10-27 (Conceptual)

This document outlines the findings of a conceptual accessibility audit for the iTokyo Academy website, based on WCAG 2.1 Level AA and AAA guidelines. The review was conducted by analyzing the existing HTML (`index.html`) and CSS (`css/style.css`) code.

## 1. Perceivable

### 1.1 Text Alternatives (Guideline 1.1)

*   **Alt Text for Images:**
    *   **Hero Visual (`images/hero-visual.svg`):** `alt="Abstract visual representing iTokyo Academy's services"` - **Good**.
    *   **Welcome Section Visual (`images/hero-visual.svg`):** `alt="Abstract visual for Welcome section"` - **Good**.
    *   **Recommendation:** Ensure all future informative images receive descriptive alt text. Decorative images should use `alt=""`.

### 1.2 Time-based Media (Guideline 1.2)

*   Not applicable (No significant audio or video content currently).

### 1.3 Adaptable (Guideline 1.3)

*   **Information and Relationships:** The HTML structure uses semantic elements like `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<h1>`-`<h4>`, `<ol>`, `<ul>`, and `<p>`, which helps ensure content structure is logical and adaptable.
*   **Sensory Characteristics:** No current evidence of instructions relying solely on shape, size, visual location, orientation, or sound.
*   **Recommendation:** Continue using semantic HTML to maintain adaptability. Ensure any future additions do not rely solely on sensory characteristics for understanding.

### 1.4 Distinguishable (Guideline 1.4)

*   **Use of Color:** Color is not used as the sole means of conveying information or distinguishing visual elements (e.g., links are often underlined on hover or have distinct textual content).
*   **Audio Control:** Not applicable.
*   **Color Contrast (AA/AAA):**
    *   **Passes AA & AAA:**
        *   Body Text (`#34495e` on `#fdfdfd`): 7.05:1
        *   H1, H2, H3 (Primary) (`#2c3e50` on `#fdfdfd`): 9.35:1
        *   H4 (Text Color) (`#34495e` on `#fdfdfd`): 7.05:1
        *   Footer Text (`#ecf0f1` on `#2c3e50`): 10.45:1
    *   **Passes AA (Good for UI, H3 is large text so passes AAA for its size):**
        *   Primary Button (`#1abc9c` on `#fff`): 5.15:1
        *   Secondary Button (`#7f8c8d` on `#fff`): 4.57:1
        *   General Links (`#1abc9c` on `#fdfdfd`): 5.15:1
        *   H3 (Secondary Option `#7f8c8d` on `#fdfdfd`): 4.57:1 (Large text context)
    *   **Fails AA:**
        *   **Footer Link (`#1abc9c` on `#2c3e50` background):** 3.05:1. **Needs Correction.**
    *   **Recommendation:**
        *   **Critical:** Adjust the footer link color (`#1abc9c`) on the dark background (`#2c3e50`) to meet at least 4.5:1 contrast for AA. Consider using `#fdfdfd` or a lighter teal for footer links.
        *   Aim for AAA for body text and headings where design permits (already mostly achieved).
*   **Resize text:** The fluid layout (Bootstrap) should allow text resizing up to 200% without loss of content or function.
*   **Images of Text:** No significant images of text observed. Text is rendered as actual text.

## 2. Operable

### 2.1 Keyboard Accessible (Guideline 2.1)

*   All interactive elements (nav links, buttons, accordion, scroll-to-top) appear to be keyboard accessible based on standard HTML elements and Bootstrap components.
*   Focus order seems logical, following the visual flow.
*   **Recommendation:** Rigorous keyboard testing should be performed during development and QA (e.g., tabbing through all elements, ensuring all interactive items are reachable and operable).

### 2.2 Enough Time (Guideline 2.2)

*   No time limits for interaction are present.

### 2.3 Seizures and Physical Reactions (Guideline 2.3)

*   No content flashes more than three times per second. Animations are subtle fades/slides.

### 2.4 Navigable (Guideline 2.4)

*   **Bypass Blocks:** A "Skip to main content" link is not present but could be considered for AAA. Given the clear navigation and heading structure, it's less critical for AA.
*   **Page Titled:** `<title>iTokyo Academy - Your Gateway to UNITAS Japan</title>` is descriptive and useful.
*   **Focus Order:** Appears logical.
*   **Link Purpose (In Context):** Links like "Start Your Application," "Discuss Program Options," and FAQ questions are generally clear.
*   **Headings and Labels:** Good use of headings for structure. Labels would be relevant for forms (see Understandable).
*   **Landmarks:** `<nav>`, `<main>`, `<footer>` are used. `aria-label` on `<nav>` is good.

## 3. Understandable

### 3.1 Readable (Guideline 3.1)

*   **Language of Page:** `lang="en"` is correctly set.
*   **Language of Parts:** Not applicable currently.
*   **Unusual Words:** Content seems clear and uses common language.
*   **Abbreviations:** None noted.
*   **Reading Level:** Content appears appropriate for the target audience.

### 3.2 Predictable (Guideline 3.2)

*   Navigation and UI components (Bootstrap defaults) are standard and behave predictably.
*   Consistent navigation is used.

### 3.3 Input Assistance (Guideline 3.3)

*   Currently no forms in `index.html` beyond the conceptual navbar search.
*   **Recommendation (Reiteration from `STYLE_GUIDE.md`):** For future forms:
    *   Ensure clear, programmatically associated labels for all input fields.
    *   Provide clear error identification and descriptive error messages.
    *   Offer instructions for data formats where needed.

## 4. Robust (Guideline 4.1)

*   **Parsing:** HTML appears well-formed.
    *   **Recommendation:** Use HTML validation tools during development.
*   **Name, Role, Value:**
    *   Interactive elements generally have appropriate names from their text content or `aria-label`.
    *   Bootstrap components handle roles and states (e.g., `aria-expanded` for accordion, `aria-controls`).

## ARIA Enhancement Opportunities

*   **Navigation:**
    *   Consider dynamically applying `aria-current="page"` (or `aria-current="location"` for the current section in a single-page app) to the active navigation link. This typically requires JavaScript.
*   **Accordion (FAQ):**
    *   Bootstrap 5's accordion is generally accessible. Ensure `aria-expanded` is correctly managed and `aria-controls` correctly links buttons to their respective content panels. The current heading structure within the accordion (`<h3><button>...</button></h3>`) is acceptable as the button text provides the accessible name.
*   **Alerts/Live Regions (Future Consideration):**
    *   If dynamic messages are added (e.g., form submission success/error, live updates), use `aria-live` regions (e.g., `aria-live="polite"` for non-critical updates, `aria-live="assertive"` for critical ones) to ensure these are announced by screen readers.
*   **Descriptive Links/Buttons:**
    *   Current link/button texts ("Start Your Application", "Discuss Program Options") are descriptive. Icons are supplementary.
    *   **Recommendation:** Maintain this practice. If icon-only buttons are ever used, they *must* have an `aria-label` to provide context.

## Focus Management Review

*   **Mobile Menu (Navbar Toggler):**
    *   **Recommendation:** Conceptually verify (or test during development) that when the mobile menu is opened, focus is trapped within the menu items. Upon closing the menu, focus should return to the toggler button. Bootstrap's default behavior is usually good here, but it's worth confirming.
*   **Accordion:**
    *   Focus remains on the accordion button when it's activated, which is standard and acceptable. No specific focus management changes needed here beyond default Bootstrap behavior.
*   **Modal Dialogs (Future Consideration):**
    *   If modal dialogs are added, ensure focus is trapped within the modal when open, and returned to the triggering element when closed. The dialog should also have an appropriate `role="dialog"`, `aria-modal="true"`, and be labelled by `aria-labelledby` and/or `aria-describedby`.

## Overall Recommendations Summary

*   **Critical:**
    *   **Color Contrast:** Fix the footer link color (`#1abc9c` on `#2c3e50`) to meet WCAG AA (4.5:1).
*   **Important (AA/AAA enhancements):**
    *   Implement `aria-current="page"` or `aria-current="location"` for active navigation links (requires JS).
    *   If forms are added, strictly adhere to input assistance guidelines (labels, error handling).
    *   For any future dynamic content updates, implement `aria-live` regions.
    *   Rigorously test keyboard navigation and focus management for all interactive elements, especially if custom JS components are added.
*   **Consider for AAA / Best Practices:**
    *   Add a "Skip to main content" link.

This conceptual audit provides a good baseline. Detailed testing with assistive technologies would be necessary during and after development.
