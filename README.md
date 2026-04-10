# LionHeart Photography

A visually immersive photography portfolio website celebrating the art of analog and vintage photography. Built with vanilla HTML, CSS, and JavaScript, featuring cinematic scroll animations, a multi-layer parallax scene, and a camera showcase carousel.

---

## ✨ Features

- **Animated Banner** — Full-screen intro with a custom SVG wordmark and cinematic camera frame overlay
- **Scroll-Driven Animations** — Smooth parallax and pin effects powered by GSAP & ScrollTrigger
- **Sticky Photo Section** — Images reveal as you scroll through a quote about analog photography
- **Parallax Scene** — Multi-layer depth scene featuring sky, moon, hills, buildings, and a hand-held camera
- **Camera Carousel** — Interactive carousel showcasing vintage cameras (Canon Ixus, Panasonic Lumix, Sony CyberShot, Nikon Coolpix, Kodak Pixpro)
- **Photo Slider** — Swipeable slideshow of sample shots credited to real photographers
- **Smooth Scrolling** — Lenis-powered buttery scroll experience throughout
- **Fully Responsive** — Mobile-first breakpoints at 1024px, 768px, 480px, and 375px, plus landscape orientation support
- **Custom Font** — Uses `fkScreamer.woff2` for display typography

---

## 🗂️ Project Structure

```
lionheart_photography/
├── index.html        # Main HTML structure
├── style.css         # All styles, animations, and responsive breakpoints
├── script.js         # GSAP animations, carousel, and slider logic
├── fonts/
│   └── fkScreamer.woff2
└── img/              # Photography assets, camera renders, and parallax layers
```

---

## 🚀 Getting Started

No build tools or dependencies required. Just open the project in a browser:

```bash
git clone https://github.com/yashiro-nyx/lionheart_photography.git
cd lionheart_photography
open index.html
```

Or serve it locally with any static server:

```bash
npx serve .
# or
python3 -m http.server
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| HTML5 / CSS3 | Structure, styling & responsive layout |
| Vanilla JavaScript | Interactivity & logic |
| [GSAP 3.13](https://greensock.com/gsap/) | Scroll animations & timelines |
| [ScrollTrigger](https://greensock.com/scrolltrigger/) | Scroll-driven pin & reveal effects |
| [Lenis 1.1.13](https://github.com/darkroomengineering/lenis) | Smooth scroll |

All libraries are loaded via CDN — no `npm install` needed.

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `max-width: 1024px` | Tablets and small laptops |
| `max-width: 768px` | Portrait tablets and large phones |
| `max-width: 480px` | Small phones |
| `max-width: 375px` | Compact phones (iPhone SE, etc.) |
| `landscape + max-height: 500px` | Landscape mobile orientation |

---

## 📸 Camera Showcase

The site features sample shots taken with the following cameras:

- **Canon Ixus** — Shot by KoolShooters
- **Panasonic Lumix** — Shot by Vinicius Nascimento
- **Sony CyberShot** — Shot by Cottonbro Studio
- **Nikon Coolpix** — Shot by Clem Onojeghuo
- **Kodak Pixpro** — Shot by Athena Sandrini

---

## 📄 License

This project is licensed under the terms found in [LICENSE](./LICENSE).
