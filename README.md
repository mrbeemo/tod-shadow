# Time of Day Shadow

A lightweight JavaScript utility that applies a realistic, time-of-day-aware long shadow to any element on your page. The shadow direction and length update automatically based on the user's local time — long and angled in the morning, short at noon, long and opposite in the evening.

**[View demo →](https://mrbeemo.github.io/tod-shadow)**

---

## How it works

The shadow is built using Josh Comeau's exponential layering technique — 7 `box-shadow` layers whose offsets double at each step, with `blur = offset` at every layer. This dissolves the rectangular shadow edges naturally into the background. All layers use pure `rgba(0,0,0,x)` so the effect works on any background color.

Shadow direction is derived from a simplified solar position model:
- **6am** → long shadow pointing right
- **Noon** → short shadow pointing down
- **6pm** → long shadow pointing left
- **Night** → minimal ambient shadow

---

## Usage

**1. Add the class to any element**

```html
<img class="tod-shadow" src="photo.jpg">
<div class="tod-shadow">...</div>
```

**2. Include the CSS and JS**

```html
<link rel="stylesheet" href="tod-shadow.css">
<script src="tod-shadow.js"></script>
```

That's it. The script runs once on load and refreshes every 60 seconds.

---

## Files

| File | Description |
|------|-------------|
| `tod-shadow.js` | The drop-in script |
| `tod-shadow.css` | Minimal CSS (just the transition) |
| `index.html` | Interactive demo with time slider and drag-and-drop image preview |

---

## Notes

- Works on any block or inline-block element
- No dependencies, no build step
- Shadow uses pure black + opacity — safe on light or dark backgrounds
- The 60-second refresh interval means the shadow silently tracks real time

---

## Credits

Shadow layering technique by [Josh Comeau](https://www.joshwcomeau.com/css/designing-shadows/).  
Built by [Brian Morris](https://mrbrianmorris.com).
