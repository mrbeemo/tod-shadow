# Time of Day Shadow

A lightweight JavaScript utility that applies a realistic, time-of-day-aware long shadow to any element on a page. The shadow direction and length update automatically based on the user's local time—long and angled in the morning, short at noon, long and opposite in the evening.

This repository includes an interactive demo that showcases the effect with a default image, time controls, and drag-and-drop functionality for custom images.

**[View demo →](https://mrbeemo.github.io/tod-shadow)**

---

## How it works

The shadow is built using Josh Comeau's exponential layering technique: 7 `box-shadow` layers whose offsets double at each step, with `blur = offset` at every layer. This creates natural, dissolving shadow edges that work on any background color using pure `rgba(0,0,0,x)`.

Shadow direction is derived from a simplified solar position model:
- **6am** → long shadow pointing right
- **Noon** → short shadow pointing down
- **6pm** → long shadow pointing left
- **Night** → minimal ambient shadow

---

## Interactive Demo Features

The included `index.html` provides a full interactive experience:

- **Default Image**: Displays a sample image with the shadow effect applied
- **Time Slider**: Manually adjust the time to see how shadows change throughout the day
- **Drag & Drop**: Drop any image file to preview the shadow effect on your own photos
- **Responsive Design**: The image scales automatically as you resize the browser window
- **Dynamic Background**: Optional background that changes color based on time of day

---

## Usage

**1. Add the class to any element**

```html
<img class="tod-shadow" src="your-image.jpg">
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
| `index.html` | Interactive demo with time slider, drag-and-drop, and responsive scaling |
| `tod-shadow.js` | The core shadow calculation script |
| `tod-shadow.css` | Minimal CSS for smooth transitions |
| `img-2660.jpg` | Default demo image |
| `hotdog.png` | Alternative demo image |

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
