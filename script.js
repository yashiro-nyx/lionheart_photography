document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              const navbarHeight = document.querySelector('.navbar').offsetHeight;
              const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
});

document.querySelector('.banner').addEventListener('click', function() {
    const elements = document.querySelectorAll('.bg-layer, .camera-frame, svg path');
    elements.forEach(el => {
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = '';
        }, 10);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const stickySection = document.querySelector(".stickySection");
    const totalStickyHeight = window.innerHeight * 4;
  
    const lenis = new Lenis({
      prevent: (node) => node.classList.contains('text-content') || node.closest('.text-content')
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  
    const introParagraph = document.querySelectorAll(".intro-col p");
    introParagraph.forEach((paragraph) => {
      const text = paragraph.textContent;
      paragraph.innerHTML = text
        .split(/(\s+)/)
        .map((part) => {
          if (part.trim() === "") return part;
          return part
            .split("")
            .map(
              (char) =>
                `<span style="opacity: 0; display: inline-block;">${char}</span>`
            )
            .join("");
        })
        .join("");
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: () => `+=${totalStickyHeight}`,
        scrub: true,
        pin: true,
      },
    });
    
    tl.to(".intro-col p span", {
        opacity: 1,
        duration: 0.3,
        stagger: {
          amount: 0.15,
          from: "random",
        },
        ease: "none"
    }, 0);
    
    tl.to(".intro-col p span", {
        opacity: 0,
        duration: 0.1,
        stagger: {
          amount: 0.05,
          from: "random",
        },
        ease: "none"
    }, 0.9);
  
    tl.to(".img-1 img", { scale: 1.125, ease: "none" }, 0);
  
    tl.to(
      ".img-2",
      {
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        ease: "none",
        onUpdate: function () {
          const progress = this.progress();
          gsap.set(".img-2", {
            clipPath: `polygon(
              ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(25,0,progress)}%,
              ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(25,0,progress)}%,
              ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(75,100,progress)}%,
              ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(75,100,progress)}%
          )`,
          });
        },
      },1);
  
    tl.to(".img-2 img", { scale: 1.125, ease: "none" }, 1);
  
    tl.to(
      ".img-3",
      {
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        ease: "none",
        onUpdate: function () {
          const progress = this.progress();
          gsap.set(".img-3", {
            clipPath: `polygon(
              ${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(50,0,progress)}%,
              ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(50,0,progress)}%,
              ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(50,100,progress)}%,
              ${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(50,100,progress)}%
            )`,
          });
        },
      },2);
  
    tl.to(".img-3 img", { scale: 1.125, ease: "none" }, 2);
    
    tl.to(".img-2 img", {
          scale: 1.25,
          ease: "none"
      }, 3);
      
    tl.to(".copy", {
        rotationY: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out"
    }, 3);

    const parallaxSection = document.querySelector(".parallax");
    const parallaxHeight = window.innerHeight * 4; 

    const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: parallaxSection,
            start: "top top",
            end: () => `+=${parallaxHeight}`,
            scrub: 1,
            pin: true,
        },
    });

    parallaxTimeline.to("#handcam", {
        y: window.innerHeight * 1.2,
        ease: "none",
    }, 0);

    parallaxTimeline.to("#building1", {
        y: window.innerHeight * 1.2,
        ease: "none",
    }, 0.8);

    parallaxTimeline.to("#building2", {
        y: window.innerHeight * 1.2,
        ease: "none",
    }, 0.8);

    parallaxTimeline.to("#moon", {
        y: window.innerHeight * 1.2,
        ease: "none",
    }, 1.6);

    parallaxTimeline.to(".parallax h1", {
        y: window.innerHeight * 1.2,
        opacity: 0,
        ease: "none",
    }, 2.4);
});

const products = [
      {
        id: '1',
        label: 'COMPACT EXCELLENCE',
        name: 'Canon IXUS',
        description: 'Ultra-slim design meets powerful performance. The Canon IXUS delivers stunning images in a pocket-sized package perfect for everyday photography.',
        image: './img/Canon IXUS.png',
        accentColor: '#777575',
        gradientClass: 'gradient-1',
        details: {
          overview: 'The Canon IXUS series represents the perfect blend of style and substance. With its incredibly slim profile and premium metal body, this camera fits effortlessly into your pocket while delivering exceptional image quality for all your daily moments.',
          features: [
            '20.2MP High-Sensitivity CMOS sensor',
            '8x Optical Zoom with Image Stabilizer',
            'Full HD 1080p video recording',
            'Wi-Fi and NFC connectivity',
            'Intelligent auto mode with 32 scenes'
          ],
          specs: [
            'Sensor: 20.2MP 1/2.3" CMOS',
            'Lens: 28-224mm equivalent',
            'ISO: 100-3200',
            'Weight: 137g'
          ]
        }
      },
      {
        id: '2',
        label: 'TRAVEL COMPANION',
        name: 'Panasonic Lumix',
        description: 'Adventure-ready photography at its finest. Capture breathtaking landscapes and precious memories with the versatile Panasonic Lumix travel zoom camera.',
        image: './img/lumix.png',
        accentColor: '#b00000',
        gradientClass: 'gradient-2',
        details: {
          overview: 'Designed for travelers and photography enthusiasts, the Panasonic Lumix combines a powerful zoom range with advanced features. Whether exploring cities or nature, this camera ensures you never miss a shot.',
          features: [
            '30x optical zoom lens',
            '4K video recording capability',
            'Post Focus and Focus Stacking',
            'USB charging for convenience',
            'Eye-level electronic viewfinder'
          ],
          specs: [
            'Sensor: 18.1MP High Sensitivity MOS',
            'Lens: 24-720mm equivalent',
            'ISO: 80-6400',
            'Weight: 322g'
          ]
        }
      },
      {
        id: '3',
        label: 'LEGENDARY QUALITY',
        name: 'Sony Cyber-shot',
        description: 'Innovation meets precision engineering. The Sony Cyber-shot delivers professional-grade performance in a compact body with cutting-edge technology.',
        image: './img/cybershot.png',
        accentColor: '#f37ad1',
        gradientClass: 'gradient-3',
        details: {
          overview: 'Sony Cyber-shot cameras are renowned for their exceptional image quality and innovative features. Built with Sony\'s legendary sensor technology, these cameras deliver stunning results in any lighting condition.',
          features: [
            'ZEISS Vario-Sonnar T* lens',
            'BIONZ X image processor',
            'Fast Intelligent AF system',
            'Super Slow Motion video',
            'Eye AF for perfect portraits'
          ],
          specs: [
            'Sensor: 20.1MP 1" Exmor RS CMOS',
            'Lens: 24-200mm equivalent',
            'ISO: 125-12800',
            'Weight: 299g'
          ]
        }
      },
      {
        id: '4',
        label: 'RELIABLE PERFORMANCE',
        name: 'Nikon Coolpix',
        description: 'Trusted by photographers worldwide. Nikon Coolpix combines ease of use with impressive zoom capabilities for capturing distant subjects with clarity.',
        image: './img/Nikon Coolpix.png',
        accentColor: '#000ac1',
        gradientClass: 'gradient-4',
        details: {
          overview: 'The Nikon Coolpix series is built on decades of optical expertise. With its powerful zoom lens and user-friendly interface, it\'s the perfect camera for wildlife, sports, and travel photography.',
          features: [
            '60x optical zoom capability',
            'Dual Detect Optical VR',
            '4K UHD video recording',
            'Tilting LCD monitor',
            'SnapBridge Bluetooth connectivity'
          ],
          specs: [
            'Sensor: 16MP CMOS',
            'Lens: 24-1440mm equivalent',
            'ISO: 100-6400',
            'Weight: 570g'
          ]
        }
      },
      {
        id: '5',
        label: 'CLASSIC HERITAGE',
        name: 'Kodak PixPro',
        description: 'Timeless photography reimagined. Kodak brings its legendary heritage to digital cameras with intuitive controls and vibrant color reproduction.',
        image: './img/kodak.png',
        accentColor: '#F59E0B',
        gradientClass: 'gradient-5',
        details: {
          overview: 'Kodak PixPro cameras embody the brand\'s rich photographic legacy while embracing modern technology. Known for producing warm, vivid colors that bring your memories to life with that classic Kodak look.',
          features: [
            'Optical Image Stabilization',
            'HD 720p video recording',
            'Face detection technology',
            'Panorama stitching mode',
            'AA battery compatibility'
          ],
          specs: [
            'Sensor: 16.15MP CCD',
            'Lens: 28-140mm equivalent',
            'ISO: 80-3200',
            'Weight: 158g'
          ]
        }
      }
    ];

    let currentIndex = 0;
    let isAnimating = false;
    let detailView = false;

    function render() {
      const product = products[currentIndex];
      const root = document.getElementById('carousel-root');
      
      root.innerHTML = `
        <div class="carousel-container ${product.gradientClass}">

          <div class="main-content">
            <div class="content-wrapper">
              <div class="flex-container" id="flex-container">
                ${detailView ? `
                  <div class="image-section detail-view">
                    <div class="bg-blur" style="background-color: ${product.accentColor}"></div>
                    <div id="image-container" class="image-container active">
                      <img src="${product.image}" alt="${product.name}">
                    </div>
                  </div>

                  <div class="text-section detail-view scrollable">
                    <div class="text-content" id="scrollable-content">
                      <div class="label">${product.label}</div>
                      <h1 class="product-name">${product.name}</h1>
                      
                      <div class="product-details show">
                        <div class="detail-section">
                          <h3 class="detail-title">Overview</h3>
                          <p class="detail-text">${product.details.overview}</p>
                        </div>

                        <div class="detail-section">
                          <h3 class="detail-title">Key Features</h3>
                          <ul class="spec-list">
                            ${product.details.features.map(feature => `<li>${feature}</li>`).join('')}
                          </ul>
                        </div>

                        <div class="detail-section">
                          <h3 class="detail-title">Specifications</h3>
                          <ul class="spec-list">
                            ${product.details.specs.map(spec => `<li>${spec}</li>`).join('')}
                          </ul>
                        </div>

                        <a href="#" class="back-link" id="back-btn">
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                          </svg>
                          Back to overview
                        </a>
                      </div>
                    </div>
                  </div>
                ` : `
                  <div class="text-section">
                    <div class="text-content">
                      <div class="label">${product.label}</div>
                      <h1 class="product-name">${product.name}</h1>
                      <p class="description">${product.description}</p>
                      <a href="#" class="cta-link" id="see-more-btn">
                        See more
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div class="image-section">
                    <div class="bg-blur" style="background-color: ${product.accentColor}"></div>
                    <div id="image-container" class="image-container active">
                      <img src="${product.image}" alt="${product.name}">
                    </div>
                  </div>
                `}
              </div>
            </div>
          </div>

          <div class="navigation">
            <div class="nav-buttons">
              <button id="prev-btn" class="nav-btn" aria-label="Previous slide">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button id="next-btn" class="nav-btn" aria-label="Next slide">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('prev-btn').addEventListener('click', prevSlide);
      document.getElementById('next-btn').addEventListener('click', nextSlide);
      
      const seeMoreBtn = document.getElementById('see-more-btn');
      if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', (e) => {
          e.preventDefault();
          showDetails();
        });
      }

      const backBtn = document.getElementById('back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', (e) => {
          e.preventDefault();
          hideDetails();
        });
      }

      const scrollableContent = document.getElementById('scrollable-content');
      if (scrollableContent) {
        scrollableContent.addEventListener('wheel', (e) => {
          e.stopPropagation();
          scrollableContent.scrollTop += e.deltaY;
        }, { passive: true });
      }
    }

    function showDetails() {
      detailView = true;
      render();
    }

    function hideDetails() {
      detailView = false;
      render();
    }

    function nextSlide() {
      if (isAnimating) return;
      isAnimating = true;
      currentIndex = (currentIndex + 1) % products.length;
      animateTransition();
    }

    function prevSlide() {
      if (isAnimating) return;
      isAnimating = true;
      currentIndex = (currentIndex - 1 + products.length) % products.length;
      animateTransition();
    }

    function animateTransition() {
      const container = document.getElementById('image-container');
      container.classList.remove('active');
      container.classList.add('exiting');
      
      setTimeout(() => {
        render();
        isAnimating = false;
      }, 300);
    }

    render();

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})