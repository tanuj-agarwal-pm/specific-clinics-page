
# Plan: Add Expandable Clinic Selection with Indiranagar Default

## Overview
Add an interactive clinic selection feature where one clinic is always expanded showing full details (address, doctor info, action buttons), while others appear as compact tiles in a grid. Clicking any tile expands it and collapses the previously selected one.

## Visual Layout

```text
+--------------------------------------------------+
|           Find us in Bengaluru                   |
|     Find authentic Ayurvedic care near you       |
+--------------------------------------------------+
|                                                  |
|  +--------------------------------------------+  |
|  |  EXPANDED CLINIC CARD (Indiranagar)        |  |
|  |  ----------------------------------------  |  |
|  |  Indiranagar                               |  |
|  |  12th Main Road, Near Sony World Signal    |  |
|  |                                            |  |
|  |  [Doctor Photo]  Dr. Anjali Sharma         |  |
|  |                  BAMS, MD (Ayurveda)       |  |
|  |                  Panchakarma Specialist    |  |
|  |                                            |  |
|  |  [Maps]  [Call]  [Book Visit - Primary]    |  |
|  +--------------------------------------------+  |
|                                                  |
|  +----------+  +----------+  +----------+        |
|  | Sarjapur |  | Shivaji  |  | HSR      |        |
|  | (brief)  |  | Nagar    |  | Layout   |        |
|  +----------+  +----------+  +----------+        |
|  +----------+  +----------+  +----------+        |
|  | Jayanagar|  | White-   |  | Korama-  |        |
|  | (brief)  |  | field    |  | ngala    |        |
|  +----------+  +----------+  +----------+        |
+--------------------------------------------------+
```

## Data Changes

Add Indiranagar as a 7th clinic with enhanced doctor details:

| Field | Value |
|-------|-------|
| id | indiranagar |
| areaName | Indiranagar |
| address | 12th Main Road, Near Sony World Signal |
| doctorName | Dr. Anjali Sharma |
| doctorQualifications | BAMS, MD (Ayurveda) |
| doctorSpecialization | Panchakarma & Detox Specialist |
| doctorImage | Placeholder image URL |

## Implementation Steps

### 1. Update Clinic Data Structure
Extend the `Clinic` interface to include additional doctor details needed for the expanded view:
- `doctorQualifications`: string
- `doctorSpecialization`: string  
- `doctorImage`: string (optional)

### 2. Add Indiranagar Clinic
Insert Indiranagar as a new clinic entry with full doctor details.

### 3. Add Selection State
Introduce `useState` to track which clinic is currently selected/expanded. Default to "indiranagar".

### 4. Create Expanded Clinic Card Component
Build a larger card component that displays:
- Clinic name (prominent heading)
- Full address
- Doctor photo, name, qualifications, and specialization
- Three action buttons: Maps icon, Call icon, and "Book Visit" primary button

### 5. Modify Grid Layout
- Render the expanded card above the grid
- Filter out the selected clinic from the grid (so it only appears in expanded form)
- Keep the 2x3 grid for remaining 6 clinics

### 6. Add Click Handlers
When a user clicks any collapsed clinic tile:
- Update the selected clinic state to that clinic's ID
- The expanded card will automatically show the new selection
- The previous selection moves back to the grid

---

## Technical Details

### File to Modify
- `src/components/ClinicsGrid.tsx`

### Key Implementation Patterns
- Use `useState<string>('indiranagar')` for tracking selected clinic
- Filter clinics array: expanded card shows `selectedClinic`, grid shows all others
- Smooth transition using existing Tailwind classes
- Consistent styling with existing card design

### Action Buttons Behavior
- **Maps button**: Opens Google Maps with clinic address
- **Call button**: Initiates phone call (tel: link)
- **Book Visit button**: Primary CTA (console.log for now, same as existing "Request Consultation")
