

## Dynamic Section Ordering Based on Active Tab

### Overview
Reorder the VariantE page sections so that:
- **"Ayurveda as a lifestyle choice"** appears first (after hero)
- When **"Conditions We Support"** tab is active: Expert Care Team follows, then What Makes Our Treatments Unique
- When **"Therapies & Massages"** tab is active: What Makes Our Treatments Unique follows, then Expert Care Team

### Technical Approach

**1. Lift State to Parent Component**
The `activeTab` state currently lives inside `ConditionsSectionVariantA`. I'll modify it to accept an optional callback prop (`onTabChange`) so the parent page can track which tab is active.

**2. Update ConditionsSectionVariantA**
- Add an optional `onTabChange?: (tab: "conditions" | "therapies") => void` prop
- Call this callback whenever the tab changes
- Keep backward compatibility (works without the prop for other variants)

**3. Update VariantE Page**
- Add local state to track the active tab: `useState<"conditions" | "therapies">("conditions")`
- Pass the callback to `ConditionsSectionVariantA`
- Conditionally render sections based on active tab:

```text
Hero
  |
Ayurveda as a lifestyle choice (with tabs)
  |
  +-- If "conditions" tab:
  |     Expert Care Team
  |     What Makes Our Treatments Unique
  |
  +-- If "therapies" tab:
        What Makes Our Treatments Unique
        Expert Care Team
  |
Contact Section
```

### Files to Modify
1. `src/components/ConditionsSectionVariantA.tsx` - Add optional `onTabChange` prop
2. `src/pages/VariantE.tsx` - Manage state and conditionally render sections

### Result
The page will dynamically reorder sections based on which tab the user selects, creating a contextually relevant flow.

