
# Hero Testimonials Carousel - Edge-to-Edge Peeking Effect

## Overview
Update the VideoTestimonials carousel so that the **active/focused card** has proper padding from the screen edge, while the **peeking cards** extend all the way to the edge of the screen.

## Current Behavior
- All cards have the same left padding (`pl-4`)
- No right padding (`pr-0`), so all cards extend to the right edge

## Desired Behavior
- **First testimonial (Priya Sharma)**: Has left padding, peeking card (Rajesh) extends to right edge
- **Middle testimonial (Rajesh Kumar)**: Previous and next cards extend to their respective edges
- **Last testimonial (Meera Patel)**: Has right padding, previous card extends to left edge

## Solution
Add invisible spacer elements at the beginning and end of the carousel. This allows:
- The first card to snap with left margin while the second card peeks from the edge
- The last card to snap with right margin while the previous card peeks from the edge

## Technical Details

### File: `src/components/variantE/HeroWithVideoE.tsx`

**Changes to VideoTestimonials component:**

1. **Remove left padding from the scroll container** - Change `pl-4` to `pl-0` on the inner flex container

2. **Add a left spacer before the first card** - A 16px (1rem) spacer that only appears on mobile, creating the left margin for the first card

3. **Add a right spacer after the last card** - A 16px (1rem) spacer that only appears on mobile, creating the right margin for the last card

4. **Update snap behavior** - Use `snap-center` instead of `snap-start` for proper centering behavior with spacers

### Visual Representation

```text
Before:
[padding][Card1][gap][Card2-peeking-cut-off]

After:
[spacer][Card1][gap][Card2-extends-to-edge]
                              ...scroll...
[Card2-extends-to-edge][gap][Card3][spacer]
```

### Code Changes Summary

```tsx
const VideoTestimonials = () => (
  <div className="w-screen md:w-[440px] overflow-hidden md:ml-auto -ml-4 md:mx-0">
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth md:pl-0" ...>
      {/* Left spacer - mobile only */}
      <div className="flex-shrink-0 w-4 md:hidden" />
      
      {videoTestimonials.map((item, index) => (
        <div key={index} className="flex-shrink-0 snap-center ...">
          {/* Card content */}
        </div>
      ))}
      
      {/* Right spacer - mobile only */}
      <div className="flex-shrink-0 w-4 md:hidden" />
    </div>
  </div>
);
```

This approach ensures:
- First card has left padding via spacer
- Last card has right padding via spacer
- All peeking cards extend to their respective screen edges
- Desktop layout remains unchanged
