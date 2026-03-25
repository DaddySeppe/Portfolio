const bgScenes = Array.from(document.querySelectorAll('.bg-scene'));
const scrollTriggers = Array.from(document.querySelectorAll('.scroll-trigger'));
const sceneTag = document.getElementById('sceneTag');
const sceneTitle = document.getElementById('sceneTitle');
const sceneSubtitle = document.getElementById('sceneSubtitle');
const homeAtmosphere = document.querySelector('.home-atmosphere');

const sceneCopy = {
  '1': {
    tag: 'SEPPE PORTFOLIO',
    title: 'Creative Developer',
    subtitle: 'I build clear, polished web experiences in my own visual style.'
  },
  '2': {
    tag: 'SELECTED PROJECTS',
    title: 'Projects With Purpose',
    subtitle: 'School and personal concepts where design and frontend execution work together.'
  },
  '3': {
    tag: 'ABOUT ME',
    title: 'Personal Story',
    subtitle: 'Detail-focused, curious, and always improving with every project.'
  }
};

const updateOverlay = (sceneKey) => {
  const content = sceneCopy[sceneKey];
  if (!content || !sceneTag || !sceneTitle || !sceneSubtitle) return;

  [sceneTag, sceneTitle, sceneSubtitle].forEach((el) => {
    el.style.opacity = '0.15';
  });

  window.setTimeout(() => {
    sceneTag.textContent = content.tag;
    sceneTitle.textContent = content.title;
    sceneSubtitle.textContent = content.subtitle;

    [sceneTag, sceneTitle, sceneSubtitle].forEach((el) => {
      el.style.opacity = '1';
    });
  }, 130);
};

let activeScene = '1';
let targetProgress = 0;
let smoothProgress = 0;
let maxProgress = Math.max(0, bgScenes.length - 1);
let pointerTargetX = 0;
let pointerTargetY = 0;
let pointerSmoothX = 0;
let pointerSmoothY = 0;

const updateTargetProgress = () => {
  const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const normalized = window.scrollY / scrollRange;
  targetProgress = Math.min(maxProgress, Math.max(0, normalized * maxProgress));
};

const renderScenes = (progress) => {
  const time = performance.now() * 0.00042;
  const idleX = Math.sin(time) * 3;
  const idleY = Math.cos(time * 1.18) * 2;

  bgScenes.forEach((scene, index) => {
    const distance = Math.abs(progress - index);
    const weight = Math.max(0, 1 - distance);
    const opacity = Math.pow(weight, 1.35);
    const scale = 1.065 - weight * 0.045;
    const brightness = 0.78 + weight * 0.24;
    const saturate = 0.96 + weight * 0.14;
    const depth = 0.6 + index * 0.2;
    const translateX = idleX + pointerSmoothX * depth;
    const translateY = idleY + pointerSmoothY * depth;

    scene.style.opacity = opacity.toFixed(4);
    scene.style.transform = `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    scene.style.filter = `brightness(${brightness.toFixed(3)}) saturate(${saturate.toFixed(3)}) contrast(1.04)`;
  });

  const nearest = String(Math.min(maxProgress + 1, Math.max(1, Math.round(progress) + 1)));

  if (nearest !== activeScene) {
    activeScene = nearest;
    updateOverlay(nearest);
  }
};

const animate = () => {
  const delta = targetProgress - smoothProgress;
  smoothProgress += delta * 0.09;
  pointerSmoothX += (pointerTargetX - pointerSmoothX) * 0.08;
  pointerSmoothY += (pointerTargetY - pointerSmoothY) * 0.08;

  if (homeAtmosphere) {
    const scrollInfluence = (smoothProgress - maxProgress * 0.5) * -2.2;
    const atmosphereX = pointerSmoothX * 0.8;
    const atmosphereY = pointerSmoothY * 0.7 + scrollInfluence;
    homeAtmosphere.style.transform = `translate3d(${atmosphereX.toFixed(2)}px, ${atmosphereY.toFixed(2)}px, 0)`;
  }

  if (Math.abs(delta) < 0.0005) {
    smoothProgress = targetProgress;
  }

  renderScenes(smoothProgress);
  window.requestAnimationFrame(animate);
};

const initializeLayoutHeight = () => {
  if (scrollTriggers.length > 0) {
    document.body.style.minHeight = `${scrollTriggers.length * 100}vh`;
  }
};

const initHomePage = () => {
  if (bgScenes.length === 0) return;

  initializeLayoutHeight();
  updateTargetProgress();
  renderScenes(smoothProgress);

  window.addEventListener('scroll', updateTargetProgress, { passive: true });
  window.addEventListener('pointermove', (event) => {
    const nx = event.clientX / window.innerWidth - 0.5;
    const ny = event.clientY / window.innerHeight - 0.5;
    pointerTargetX = nx * 8;
    pointerTargetY = ny * 6;
  });
  window.addEventListener('pointerleave', () => {
    pointerTargetX = 0;
    pointerTargetY = 0;
  });
  window.addEventListener('blur', () => {
    pointerTargetX = 0;
    pointerTargetY = 0;
  });
  window.addEventListener('resize', () => {
    maxProgress = Math.max(0, bgScenes.length - 1);
    updateTargetProgress();
  });

  window.requestAnimationFrame(animate);
};

const initHomeEffects = () => {
  if (!document.body.classList.contains('home-page')) return;

  const progressBar = document.getElementById('homeProgressBar');
  const interactiveCards = Array.from(document.querySelectorAll('.panel-card, .mini-grid div'));

  const updateProgress = () => {
    if (!progressBar) return;

    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
    progressBar.style.width = `${(progress * 100).toFixed(2)}%`;
  };

  const updateCardPointer = (event, card) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--px', `${x.toFixed(2)}%`);
    card.style.setProperty('--py', `${y.toFixed(2)}%`);
  };

  interactiveCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      card.classList.add('is-active');
      updateCardPointer(event, card);
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-active');
    });
  });

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
};

const initReveal = () => {
  const revealElements = Array.from(document.querySelectorAll('.reveal'));
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((el) => observer.observe(el));
};

const initAboutEffects = () => {
  if (!document.body.classList.contains('about-page')) return;

  const progressBar = document.getElementById('aboutProgressBar');
  const interactiveCards = Array.from(document.querySelectorAll('.about-showcase, .about-card, .timeline, .portfolio-section, .project-card, .skill-card'));

  const updateProgress = () => {
    if (!progressBar) return;

    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
    progressBar.style.width = `${(progress * 100).toFixed(2)}%`;
  };

  const updateCardPointer = (event, card) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--px', `${x.toFixed(2)}%`);
    card.style.setProperty('--py', `${y.toFixed(2)}%`);
  };

  interactiveCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      card.classList.add('is-active');
      updateCardPointer(event, card);
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-active');
    });
  });

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
};

const initAboutCenterZoom = () => {
  if (!document.body.classList.contains('about-page')) return;

  const zoomTargets = Array.from(document.querySelectorAll('.about-hero, .about-showcase, .about-grid, .timeline, .portfolio-section'));
  if (zoomTargets.length === 0) return;

  zoomTargets.forEach((target) => target.classList.add('focus-zoom-target'));

  let ticking = false;

  const updateZoom = () => {
    const centerY = window.innerHeight * 0.5;
    const influenceRange = window.innerHeight * 0.46;

    zoomTargets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const targetCenter = rect.top + rect.height * 0.5;
      const distance = Math.abs(targetCenter - centerY);
      const ratio = Math.max(0, 1 - Math.min(1, distance / influenceRange));
      const eased = Math.pow(ratio, 1.6);

      const scale = 1 + eased * 0.06;
      const bright = 1 + eased * 0.09;

      target.style.setProperty('--focus-scale', scale.toFixed(3));
      target.style.setProperty('--focus-bright', bright.toFixed(3));
    });
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateZoom();
      ticking = false;
    });
  };

  updateZoom();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
};

const initAboutWheelMotion = () => {
  if (!document.body.classList.contains('about-page')) return;

  let pointerX = 0;
  let pointerY = 0;
  let smoothX = 0;
  let smoothY = 0;
  let rot = 0;

  const animateWheel = () => {
    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));

    smoothX += (pointerX - smoothX) * 0.08;
    smoothY += (pointerY - smoothY) * 0.08;

    rot = progress * 220;

    const wheelX = smoothX * 14;
    const wheelY = smoothY * 11 - progress * 8;
    const wheelScale = 0.92 + progress * 0.22;

    document.body.style.setProperty('--wheel-x', `${wheelX.toFixed(2)}px`);
    document.body.style.setProperty('--wheel-y', `${wheelY.toFixed(2)}px`);
    document.body.style.setProperty('--wheel-rot', `${rot.toFixed(2)}deg`);
    document.body.style.setProperty('--wheel-scale', wheelScale.toFixed(3));

    window.requestAnimationFrame(animateWheel);
  };

  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX / window.innerWidth - 0.5;
    pointerY = event.clientY / window.innerHeight - 0.5;
  });

  window.addEventListener('pointerleave', () => {
    pointerX = 0;
    pointerY = 0;
  });

  window.requestAnimationFrame(animateWheel);
};

initHomePage();
initHomeEffects();
initReveal();
initAboutEffects();
initAboutCenterZoom();
initAboutWheelMotion();


