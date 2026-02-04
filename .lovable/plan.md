

# Plan: Animated Rotating Conditions Headline

## Overview
Replace the static hero headline with a dynamic question that cycles through different health conditions every 2 seconds with a smooth fade animation.

**New headline format:**
```
Are you struggling with
[skin and hair issues?] <- This part animates/rotates
```

## Conditions List (in order)
1. skin and hair issues?
2. gut issues?
3. joint and muscle pain?
4. diabetes or high cholesterol?
5. PCOD/ PCOS?
6. respiratory issues?

## Technical Implementation

### 1. Add New CSS Animation (`src/index.css`)
Create a fade-in-out animation for smooth text transitions:

```css
@keyframes text-fade-in {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-text-fade-in {
  animation: text-fade-in 0.4s ease-out forwards;
}
```

### 2. Update HeroWithVideoD Component (`src/components/variantD/HeroWithVideoD.tsx`)

**Add conditions array:**
```javascript
const conditions = [
  "skin and hair issues?",
  "gut issues?",
  "joint and muscle pain?",
  "diabetes or high cholesterol?",
  "PCOD/ PCOS?",
  "respiratory issues?",
];
```

**Add state and useEffect for rotation:**
```javascript
const [currentConditionIndex, setCurrentConditionIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentConditionIndex((prev) => (prev + 1) % conditions.length);
  }, 2000); // 2 second interval

  return () => clearInterval(interval);
}, []);
```

**Update headline structure:**
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground mb-6 leading-tight">
  Are you struggling with
  <br />
  <span 
    key={currentConditionIndex} 
    className="text-primary-foreground/90 animate-text-fade-in inline-block"
  >
    {conditions[currentConditionIndex]}
  </span>
</h1>
```

The `key` prop is crucial - it forces React to re-mount the span element when the index changes, which re-triggers the CSS animation.

## Visual Flow
```text
+----------------------------------------+
| Are you struggling with                |
| [skin and hair issues?]  <- fades in   |
+----------------------------------------+
        | (2 seconds)
        v
+----------------------------------------+
| Are you struggling with                |
| [gut issues?]  <- new text fades in    |
+----------------------------------------+
        | (2 seconds)
        v
        ... cycles through all 6 conditions
```

## Files to Modify
1. `src/index.css` - Add text fade animation keyframes
2. `src/components/variantD/HeroWithVideoD.tsx` - Add rotating condition logic and update headline

