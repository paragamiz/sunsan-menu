// SunSan sun mark — uses pre-tinted PNG variants so the mark renders in
// every browser, every screenshot pipeline, and every export.

window.SunMarks = (function () {
  const VARIANTS = {
    "#3D405B": "assets/sun-mark-ink.png",
    "#C8851C": "assets/sun-mark-amber.png",
    "#E8A93C": "assets/sun-mark-yellow.png",
    "#5B9CB8": "assets/sun-mark-blue.png",
    "#D8714E": "assets/sun-mark-peach.png",
    "#FCE38A": "assets/sun-mark-cream.png",
  };
  // Aliases by name
  const NAMES = {
    ink:    "assets/sun-mark-ink.png",
    amber:  "assets/sun-mark-amber.png",
    yellow: "assets/sun-mark-yellow.png",
    blue:   "assets/sun-mark-blue.png",
    peach:  "assets/sun-mark-peach.png",
    cream:  "assets/sun-mark-cream.png",
  };

  function srcFor(color) {
    if (!color) return NAMES.ink;
    if (NAMES[color]) return NAMES[color];
    // hex lookup, case-insensitive
    const key = color.toUpperCase();
    return VARIANTS[key] || NAMES.ink;
  }

  function sunPrimary({ color = "#3D405B" } = {}) {
    const src = srcFor(color);
    return `<img src="${src}" alt="" style="display:block;width:100%;height:100%;object-fit:contain;" draggable="false"/>`;
  }

  // All variants are the same artwork — aliases for legacy call sites
  const sunOutline = sunPrimary;
  const sunFace = sunPrimary;
  const sunSolid = sunPrimary;

  // SVG fragment for embedding inside an existing inline <svg>
  function inlineImage({
    color = "#3D405B",
    x = 0,
    y = 0,
    width = 200,
    height = 200,
    transform = "",
    opacity = 1,
  } = {}) {
    const src = srcFor(color);
    const transformAttr = transform ? ` transform="${transform}"` : "";
    const opacityAttr = opacity !== 1 ? ` opacity="${opacity}"` : "";
    return `<g${transformAttr}${opacityAttr}><image href="${src}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/></g>`;
  }

  const inlineGroup = inlineImage;

  return { sunPrimary, sunOutline, sunSolid, sunFace, inlineImage, inlineGroup, srcFor };
})();
