# Textual Style Guide: Serene Tech Elegance

## 1. Overall Tone & Feel

The website aims to evoke a sense of calm sophistication, trustworthiness, and modern professionalism. The design should be clean, minimalist, and highly clear, providing an intuitive and reassuring experience for prospective students. Subtle hints of Japanese aesthetics, such as the careful use of negative space and potentially understated patterns, will add a unique touch. The overall brand perception should be that of an expert, reliable, and supportive partner for studying in Japan.

## 2. Color Palette

The color palette is designed to be professional and calming, with a touch of refined elegance.

*   **Primary Color (Deep Indigo):** `#2c3e50`
    *   Usage: Main headings, primary navigation elements, key structural elements, primary button backgrounds (if using a different accent for CTAs).
*   **Secondary Color (Cool Slate Gray):** `#7f8c8d`
    *   Usage: Subheadings, secondary text, borders, subtle background elements, secondary button backgrounds.
*   **Accent Color (Vibrant Teal):** `#1abc9c`
    *   Usage: Call-to-action buttons (CTAs), important links, icons, highlights that need to stand out.
*   **Background Color (Off-White):** `#fdfdfd`
    *   Usage: Main page background for a soft, clean look.
*   **Light Neutral (Light Gray):** `#ecf0f1`
    *   Usage: Background for distinct sections, cards, or areas needing subtle separation from the main background.
*   **Text Color (Soft Black):** `#34495e`
    *   Usage: Main body text, paragraphs, detailed information.
*   **Supporting Neutral (Medium Gray):** `#95a5a6`
    *   Usage: Captions, helper text, less prominent metadata.

## 3. Typography

Typography will focus on clarity, readability, and a modern aesthetic.

*   **Headings Font:** 'Inter' (A clean, modern Sans-Serif known for its excellent legibility across various sizes and weights)
*   **Body Font:** 'Source Sans Pro' (A highly legible and neutral Sans-Serif, works well for extended reading)
*   **Possible Accent Font (Subtle Serif):** 'Noto Serif JP' (Optional, for pull quotes or very specific highlights to add a touch of traditional elegance. Use sparingly.)

### Typographic Scale & Weights:

*   **H1 (Page Titles, Hero Section):**
    *   Font: Inter
    *   Size: `2.8rem` (approx. 45px)
    *   Weight: `700` (Bold)
    *   Line Height: `1.2`
    *   Color: Primary Color (`#2c3e50`)
*   **H2 (Main Section Titles):**
    *   Font: Inter
    *   Size: `2.2rem` (approx. 35px)
    *   Weight: `700` (Bold)
    *   Line Height: `1.25`
    *   Color: Primary Color (`#2c3e50`)
*   **H3 (Sub-section Titles):**
    *   Font: Inter
    *   Size: `1.75rem` (approx. 28px)
    *   Weight: `600` (Semi-Bold)
    *   Line Height: `1.3`
    *   Color: Primary Color (`#2c3e50`) or Secondary Color (`#7f8c8d`) for less emphasis.
*   **H4 (Card Titles, Minor Headings):**
    *   Font: Inter
    *   Size: `1.4rem` (approx. 22px)
    *   Weight: `600` (Semi-Bold)
    *   Line Height: `1.35`
    *   Color: Primary Color (`#2c3e50`) or Text Color (`#34495e`).
*   **Body Text (Paragraphs):**
    *   Font: Source Sans Pro
    *   Size: `1rem` (approx. 16px, base size)
    *   Weight: `400` (Regular)
    *   Line Height: `1.6`
    *   Color: Text Color (`#34495e`)
*   **Lead Paragraph / Intro Text:**
    *   Font: Source Sans Pro
    *   Size: `1.15rem` (approx. 18px)
    *   Weight: `400` (Regular)
    *   Line Height: `1.7`
    *   Color: Text Color (`#34495e`)
*   **Captions / Small Text:**
    *   Font: Source Sans Pro
    *   Size: `0.875rem` (approx. 14px)
    *   Weight: `400` (Regular)
    *   Line Height: `1.5`
    *   Color: Supporting Neutral (`#95a5a6`)
*   **Button Text:**
    *   Font: Inter or Source Sans Pro (depending on button style, Inter preferred for primary CTAs)
    *   Size: `1rem` (approx. 16px)
    *   Weight: `600` (Semi-Bold) or `700` (Bold)
    *   Line Height: `1.5`

**Note on Line Length:** Aim for a comfortable line length for body text, typically between 50-75 characters per line, to enhance readability.

## 4. Imagery Guidelines

Imagery should align with the "Serene Tech Elegance" theme, emphasizing professionalism, quality, and a calm, focused atmosphere.

*   **Photography:**
    *   **Style:** High-quality, professional, well-composed shots.
    *   **Subject Matter:**
        *   Modern Japanese cityscapes (can be slightly desaturated or have a cool tone).
        *   Clean, bright, and serene campus environments or learning spaces.
        *   Students who appear focused, engaged, and collaborative (avoid overly staged or generic stock photos).
        *   Subtle inclusion of Japanese cultural elements where appropriate, but avoid clichés.
    *   **Color Treatment:** Prefer natural colors, possibly with a slightly cool or desaturated filter to maintain serenity. Avoid overly vibrant or artificially brightened images.
    *   **Composition:** Strong use of negative space, clean lines, and thoughtful composition.
*   **Icons:**
    *   **Style:** Minimalist, with fine, consistent line weights. Avoid overly illustrative or chunky icons.
    *   **Color:** Can use Accent Color (`#1abc9c`) for emphasis, Secondary Color (`#7f8c8d`), or Text Color (`#34495e`) depending on context and background.
    *   **Usage:** For clarifying information, list item markers, or subtle visual cues.
*   **Background Elements & Patterns:**
    *   **Style:** If used, should be very subtle and abstract.
    *   **Examples:**
        *   Faint geometric patterns (e.g., thin lines, subtle grids, or Japanese-inspired motifs like *asanoha* or *seigaiha* if used very discreetly and abstractly).
        *   Soft, large-scale gradients using shades of the primary or secondary colors, or light neutrals.
        *   Emphasis on ample negative space is generally preferred over busy backgrounds.

### Advanced Image Optimization:

This section details best practices for optimizing image delivery, ensuring fast load times and efficient use of bandwidth.

*   **Next-Gen Formats (WebP, AVIF):**
    *   Serve images in modern formats like WebP or AVIF where supported, as they offer better compression and quality compared to older formats.
    *   Use the `<picture>` element to provide fallbacks to more widely supported formats like JPEG, PNG, or SVG for browsers that don't support the newer formats.
    *   **Example:**
        ```html
        <picture>
          <source srcset="image.avif" type="image/avif">
          <source srcset="image.webp" type="image/webp">
          <source srcset="image.jpg" type="image/jpeg">
          <img src="image.jpg" alt="Descriptive Alt Text" loading="lazy" class="img-fluid">
        </picture>
        ```

*   **Responsive Images (`srcset` and `sizes`):**
    *   Use the `srcset` attribute to provide multiple image resolutions, allowing the browser to select the most appropriate size based on the device's pixel density and viewport. This is crucial for delivering crisp images on high-resolution displays without penalizing users on smaller screens.
    *   Use the `sizes` attribute to inform the browser about the image's display dimensions at different viewport widths. This helps the browser make more intelligent choices about which image from `srcset` to download, especially before the full CSS and page layout are known.
    *   **Example (for raster images):**
        ```html
        <img src="image-medium.jpg"
             srcset="image-small.jpg 500w, 
                     image-medium.jpg 1000w, 
                     image-large.jpg 1500w"
             sizes="(max-width: 600px) 90vw, 
                    (max-width: 1200px) 50vw, 
                    33vw"
             alt="Descriptive Alt Text" loading="lazy" class="img-fluid">
        ```
        *(Note: `vw` units in `sizes` are relative to viewport width. Adjust based on actual layout.)*

*   **Lazy Loading:**
    *   Implement lazy loading for images that are not in the initial viewport (below-the-fold content). This defers the loading of these images until the user scrolls near them, improving initial page load time and saving bandwidth.
    *   **Native Lazy Loading:** Use the `loading="lazy"` attribute for simple implementation.
        ```html
        <img src="image.jpg" alt="Descriptive Alt Text" loading="lazy" class="img-fluid">
        ```
    *   **JavaScript-based Libraries:** For wider browser compatibility (older browsers) or more advanced control (e.g., custom placeholders, effects), consider using JavaScript libraries like `lazysizes` or `lozad.js`. These often use a `data-src` attribute.

*   **SVG Optimization:**
    *   SVGs are excellent for logos, icons, and simple vector graphics as they are resolution-independent and often have small file sizes.
    *   Optimize SVGs by:
        *   Removing editor metadata and unnecessary comments.
        *   Minifying the SVG code (e.g., using tools like SVGO).
        *   Simplifying paths and shapes where possible without sacrificing visual quality.

*   **Compression:**
    *   Reiterate the critical importance of compressing all image types (JPEG, PNG, WebP, AVIF, SVG).
    *   Use appropriate tools (e.g., TinyPNG/TinyJPG, ImageOptim, Squoosh for raster images; SVGO for SVGs) to reduce file sizes significantly without major quality loss.
    *   Automate compression in the build process where possible.

*   **Choosing the Right Format (Summary):**
    *   **JPEG:** Best for photographs and complex images with gradients where lossy compression is acceptable.
    *   **PNG:** Use for images requiring transparency (logos, icons with alpha channels) or sharp lines where lossless compression is preferred.
    *   **SVG:** Ideal for logos, icons, and vector graphics that need to scale perfectly.
    *   **WebP:** Excellent modern alternative to JPEG and PNG, offering superior compression (both lossy and lossless) and transparency. Good browser support.
    *   **AVIF:** Newer format with even better compression than WebP, especially for high-fidelity images. Browser support is growing. Use with fallbacks.

## 5. UI Elements (General Principles)

*   **Buttons:**
    *   Primary CTAs: Use Accent Color (`#1abc9c`) background with a contrasting text color (e.g., white or very dark gray, ensure WCAG AA).
    *   Secondary Buttons: Use Secondary Color (`#7f8c8d`) or a light neutral background with Text Color or Primary Color text.
    *   Padding: Generous padding for a modern, clickable feel.
    *   Border Radius: Subtle rounded corners (e.g., 4-8px).
*   **Forms:** Clean, simple, with clear labels and sufficient spacing. Input fields should have clear focus states.
*   **Cards/Containers:** Use Light Neutral (`#ecf0f1`) or Off-White (`#fdfdfd`) with subtle borders (Secondary Color) or soft box shadows for depth if needed. Prioritize clean separation through spacing.
*   **Navigation:** Clear visual hierarchy. Active states should be distinct, possibly using the Accent Color or a bolder weight.
*   **Forms (Conceptual - if added later):**
    *   **Input Fields (text, email, textarea, select):**
        *   Background: `var(--background-color)` or a very light shade of `var(--light-neutral-color)`.
        *   Borders: Subtle, 1px solid border using `var(--secondary-color)` or a lighter version of it (e.g., `#bdc3c7`).
        *   Border Radius: Consistent with buttons (e.g., 4-6px).
        *   Padding: Sufficient internal padding for comfortable text entry (e.g., `0.5rem 0.75rem`).
        *   Typography: Use 'Source Sans Pro' at base size (`1rem`), `var(--text-color)`.
        *   Placeholder Text: Use `var(--supporting-neutral-color)`.
    *   **Labels:**
        *   Font: 'Inter' or 'Source Sans Pro'.
        *   Size: `0.875rem` or `1rem`.
        *   Weight: `500` (Medium) or `600` (Semi-Bold).
        *   Color: `var(--text-color)`.
        *   Spacing: Clear spacing above input fields.
    *   **Focus State:**
        *   Inputs should have a clear visual focus indicator. This can be achieved by:
            *   Changing border color to `var(--accent-color)`.
            *   Adding a subtle `box-shadow` using the accent color (e.g., `0 0 0 0.2rem rgba(26, 188, 156, 0.25)`).
            *   Ensuring default browser focus rings are not suppressed without providing a better alternative.
    *   **Validation States (Success/Error):**
        *   Success: Use a subtle green (e.g., a shade of `var(--accent-color)` or a dedicated success green like `#2ecc71`) for borders or icons.
        *   Error: Use a subtle red (e.g., `#e74c3c`) for borders, icons, and error messages. Error messages should be clear and placed near the relevant field.
    *   **Overall Spacing:** Maintain generous spacing between form elements, labels, and any help text to ensure clarity and reduce cognitive load.

This style guide provides a foundation for the "Serene Tech Elegance" direction. Specific component styling will be built upon these principles.
---

The `STYLE_GUIDE.md` file has been created with the detailed textual style guide for the "Serene Tech Elegance" direction.
This completes the task.Okay, I've reviewed the "Serene Tech Elegance" mood board direction and the detailed textual style guide you've created in `STYLE_GUIDE.md`.

The direction and the style guide are well-defined and provide a clear path for the visual design of the website. The choices for color, typography, imagery, and overall tone align well with the concept of "Serene Tech Elegance," aiming for a professional, trustworthy, and modern aesthetic with subtle Japanese influences.

I have no strong feedback to suggest changing the chosen direction. The style guide is comprehensive enough for this conceptual phase.

I will now submit the subtask report.
