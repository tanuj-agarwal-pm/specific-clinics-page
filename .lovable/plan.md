

# Plan: Fix Video Testimonial Peek Effect

## Problem
Currently both video testimonials are fully visible in the hero section. The user wants:
- **First video**: Fully visible
- **Second video**: Only partially visible (peeking from the right) to indicate scrollability

## Root Cause
The scroll container width isn't constrained properly. Both videos (280px each + 16px gap = ~576px total) fit within the available column width, so both are fully displayed.

## Solution
Constrain the scroll container to show only the first video fully, with the second video peeking ~30-40% from the right edge.

## Technical Changes

### File: `src/components/variantD/HeroWithVideoD.tsx`

**Change the video scroll container (lines 149-177):**

1. Add a fixed max-width to the outer container that equals approximately:
   - First video width (280px on desktop) + gap (16px) + peek amount (~100px)
   - Total: ~396px on desktop

2. Remove the `pr-[30%]` padding which isn't achieving the desired effect

3. Update the structure:
```text
Before:
<div className="overflow-hidden">
  <div className="flex gap-4 overflow-x-auto ... pr-[30%] md:pr-[20%]">

After:
<div className="w-[300px] md:w-[380px] overflow-hidden">
  <div className="flex gap-4 overflow-x-auto ... w-max">
```

**Key CSS changes:**
- Outer container: Fixed width (`w-[300px] md:w-[380px]`) to clip content
- Inner scroll container: `w-max` to ensure all cards render at full size, enabling scroll
- The fixed width ensures only ~first video + peek of second is visible
- User can scroll horizontally to reveal the full second video

## Visual Result
```text
+----------------------------------+
|  [VIDEO 1 - FULL]  [VIDEO 2 -    |  <- clipped here
|                     PARTIAL]     |
+----------------------------------+
                     ^
                     User can scroll to see more
```

