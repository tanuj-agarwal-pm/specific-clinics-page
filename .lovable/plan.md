

# Plan: Create Variant D - Hero with Video Testimonial

## Overview
Create a new `/variantD` page that is a copy of `/variantA` but with a redesigned hero section that:
- Replaces rotating text testimonials with a **video testimonial** on the right side
- Adds **credibility markers** (80+ Years, 10L+ Patients, 300+ Vaidyas) on the left side below the CTA buttons

## New Files to Create

### 1. `src/components/variantD/HeroWithVideoD.tsx`
A new hero component with the following layout:

**Left Side:**
- Main headline: "Experience Authentic Kerala Ayurveda - in Indiranagar"
- Subtext paragraph
- Two CTA buttons ("Talk to Us" and "Request Consultation")
- Three credibility markers in a row:
  - 80+ Years of Excellence in Care
  - 10 Lacs+ Patients Treated
  - 300+ Vaidyas Dedicated to Your Care

**Right Side:**
- Video testimonial player (vertical video format to match mobile-first design)
- Supporting text below or beside the video with patient name and condition

**Design Notes:**
- Keep the same background image carousel with gradient overlay (from current HeroWithTestimonials)
- Credibility markers styled as compact badges/pills with icons
- Video container with rounded corners and shadow
- Responsive: On mobile, stack vertically (content first, then video below)

### 2. `src/pages/VariantD.tsx`
New page that mirrors VariantA structure:
- StickyHeader
- HeroWithVideoD (new hero component)
- ConditionsSectionVariantA
- CareTeamSectionVariantA
- ApproachSectionVariantA
- TreatmentsSection
- ContactSection

## Files to Modify

### 3. `src/App.tsx`
Add the new route:
```tsx
import VariantD from "./pages/VariantD";
// ...
<Route path="/variantD" element={<VariantD />} />
```

---

## Technical Details

### Hero Layout Structure (Desktop)
```text
+--------------------------------------------------+
|  [Background Image Carousel with Gradient]       |
|                                                  |
|  +---------------------+  +--------------------+ |
|  | HEADLINE            |  |                    | |
|  | Subtext             |  |   VIDEO PLAYER     | |
|  |                     |  |   (9:16 ratio)     | |
|  | [Talk to Us] [CTA]  |  |                    | |
|  |                     |  |  Patient Name      | |
|  | [80+ yrs] [10L+]    |  |  Condition         | |
|  | [300+ Vaidyas]      |  +--------------------+ |
|  +---------------------+                         |
+--------------------------------------------------+
```

### Credibility Markers Styling
- Horizontal layout on desktop (3 columns)
- Semi-transparent white/cream background
- Icon + Value + Label stacked
- Icons: Award (years), Users (patients), Heart (vaidyas)

### Video Component
- Aspect ratio: 9:16 (vertical video) or 16:9 (horizontal) depending on available video
- Placeholder YouTube embed initially
- Rounded corners (`rounded-xl`)
- Shadow for depth

