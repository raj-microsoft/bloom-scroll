---
name: Bloom
description: Good things take growing.
colors:
  earth: "#25231b"
  chalk: "#f4f2dc"
  foliage: "#273d2e"
  spring: "#dce7b7"
  sky: "#a4cedd"
  petal: "#eda58d"
  paper: "#eef1e6"
  action: "#2c4632"
  action-hover: "#3d5d42"
typography:
  display:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(54px, 6.6vw, 96px)"
    fontWeight: 450
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "14px"
    fontWeight: 400
spacing:
  small: "12px"
  medium: "20px"
  large: "30px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.chalk}"
    padding: "17px 22px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
---
# Design System: Bloom
## Overview
**Creative North Star: "A season unfolding"**
An original botanical film owns the visual field. Interface elements are quiet, legible and flat. Naming is descriptive, inferred from the assigned concept rather than a separate brand interview.
**Key Characteristics:**
- Continuous botanical imagery
- Rounded humanist lettering
- Color tied to growth stages
## Colors
Earth and chalk serve the underground sequence; foliage ink works against sky, spring and paper. Petal marks growth progress.
## Typography
Figtree is locally served. Display is light and large, headings are balanced, labels remain sentence case. Mobile display uses 54px, reducing to 44px over the flower stage to preserve the specimen.
## Layout
A sticky viewport holds the sequence through 480vh. Below it, two-column sections collapse at 700px. Mobile section gutters are 28px. The specimen moves below the mobile reading zone. Content is readable without animation.
## Elevation & Depth
No interface shadows. Depth comes only from the authored botanical imagery; section surfaces are flat.
## Shapes
Square actions, thin rules, no card containers. SVG strokes are used only for small directional icons.
## Components
Primary action opens an inline product preview and returns focus on close. Chapter controls expose pressed state and seek reversibly. Motion toggle switches to still chapters. Focus outlines are 3px coral with a 6px offset. Underlines remain visible on links.
## Do's and Don'ts
- Do keep botanical media original and label synthetic imagery.
- Do offer still chapters and honor reduced motion.
- Don't imply this fictional subscription is accepting orders.
- Don't let copy obscure the mobile flower.
