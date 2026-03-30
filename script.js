// ==== Language System ====
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me'
    },
    hero: {
      tag: 'SEPPE PORTFOLIO',
      title: 'IT Student',
      subtitle: 'I am Seppe, a second-year IT student. I like learning new things, working on practical projects and improving myself step by step.',
      chip1: 'Second-year student',
      chip2: 'Motivated',
      chip3: 'Always learning',
      scroll: 'Scroll to explore'
    },
    home: {
      eyebrow: 'Home',
      title: 'I am Seppe, a student who likes to keep learning and getting better by working on real projects.',
      description: 'I am interested in IT because I like solving problems, trying things out and seeing progress in what I do. I am still learning, but with every project I gain more experience and confidence.',
      skill1: 'Problem solving',
      skill2: 'Learning by doing',
      skill3: 'Teamwork',
      skill4: 'Step by step growth'
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Work from school projects and practical learning',
      card1: { title: 'School Work', desc: 'I work on assignments where I have to apply what I learn and turn it into something practical.' },
      card2: { title: 'Technical Skills', desc: 'I keep improving my technical skills by working with different systems, tools and course projects.' },
      card3: { title: 'My Approach', desc: 'I try to work seriously, stay clear in what I do and keep improving until the result feels right.' },
      card4: { title: 'Growth', desc: 'For me, every project is a chance to learn something new and become better at what I do.' }
    },
    aboutsection: {
      eyebrow: 'About Me',
      title: 'Growing in IT through practice and real challenges',
      description: 'On my about page, you can read more about me, my strengths and the way I try to improve myself as a student.',
      link1: 'Go to About Me',
      link2: 'Contact Me'
    },
    footer: {
      description: 'IT Student passionate about building practical solutions with professional mindset and continuous improvement.',
      connect: 'Connect',
      copyright: '&copy; 2026 Seppe Vanroy. All rights reserved.'
    },
    about: {
      hero: {
        eyebrow: 'Profile',
        title: 'Building IT solutions, step by step.',
        // title: 'I build practical IT solutions with a professional mindset and a drive to improve.',
        description: 'I am a second-year IT student who learns fastest in real environments. My 2023 internship at Aurubis Olen and my current holiday work on their IT department shaped how I approach projects: clear thinking, reliable execution, and continuous growth.',
        tag1: 'Practical Problem Solver',
        tag2: 'Professional Attitude',
        snapshot: 'Quick Snapshot',
        subtitle: 'Focused, consistent, and serious about quality.',
        fact1: { label: 'Role', value: 'IT Student' },
        fact2: { label: 'Experience', value: 'Aurubis Olen' },
        fact3: { label: 'Strength', value: 'Structured problem solving' }
      },
      showcase: {
        item1: 'PROFESSIONAL MINDSET',
        item2: 'REAL-WORLD EXPERIENCE',
        item3: 'PROJECT OWNERSHIP',
        item4: 'TECHNICAL CURIOSITY',
        item5: 'CLEAR COMMUNICATION'
      },
      stats: {
        stage: { label: 'Current Stage', value: 'Second-Year IT' },
        base: { label: 'Professional Base', value: 'Aurubis Olen' },
        approach: { label: 'Approach', value: 'Build, test, improve' }
      },
      signature: {
        eyebrow: 'How I Work',
        title: 'I keep complexity under control with a step-by-step approach.',
        description: 'I start from clear requirements, split work into manageable blocks, and validate each step before moving forward. This keeps projects stable and makes collaboration easier.'
      },
      quote: {
        eyebrow: 'Work Principle',
        text: '"Good IT work is not only about writing code. It is about delivering dependable solutions that people can trust."'
      },
      cards: {
        card1: { title: 'Execution Style', desc: 'I work with structure, set priorities, and keep progress visible. I prefer clean solutions over quick fixes.' },
        card2: { title: 'Real Environment', desc: 'At Aurubis Olen, I learned how IT supports daily operations and why reliability matters in every detail.' },
        card3: { title: 'Technical Focus', desc: 'I enjoy building functional products, troubleshooting efficiently, and refining systems until they perform well.' },
        card4: { title: 'Team Contribution', desc: 'I communicate clearly, stay accountable, and help keep projects moving forward with consistent effort.' }
      },
      strengths: {
        eyebrow: 'Strength Profile',
        title: 'What I bring to projects',
        item1: { label: 'Technical Adaptability', desc: 'I quickly adapt to tools, workflows, and project constraints while keeping code quality in focus.' },
        item2: { label: 'Problem Solving', desc: 'I analyze issues methodically and deliver solutions that are practical and maintainable.' },
        item3: { label: 'Professional Collaboration', desc: 'I work well in teams, communicate progress clearly, and align with project goals.' }
      },
      timeline: {
        eyebrow: 'Journey',
        title: 'Timeline of growth',
        item1: { year: '2023', text: 'Completed my internship at Aurubis Olen and gained first-hand experience in a professional IT environment.' },
        item2: { year: '2024', text: 'Continued building my technical base through school projects, practical assignments, and hands-on development.' },
        item3: { year: '2025', text: 'Delivered larger projects including MissionZebra and improved my ability to work across design and implementation.' },
        item4: { year: '2026', text: 'Working holiday periods at the Aurubis IT department while advancing my studies and expanding my project scope.' }
      },
      projects: {
        eyebrow: 'Selected Work',
        title: 'Projects that shaped my skills',
        item1: { title: 'MissionZebra', desc: 'A mobile application focused on planning and organization for families. Built in a team context with real delivery goals.', stack: 'Flutter • Kotlin • Team Delivery' },
        item2: { title: 'Portfolio Platform', desc: 'A custom portfolio website built to communicate my identity, process, and progress in a polished visual format.', stack: 'HTML • CSS • JavaScript • UX' },
        item3: { title: 'Aurubis IT Contribution', desc: 'Hands-on support work inside a manufacturing context, helping maintain and improve practical IT workflows.', stack: 'IT Support • Operations • Reliability' }
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'Professional strengths in action',
        item1: { title: 'Discipline', desc: 'I stay consistent, finish what I start, and maintain quality even under pressure.' },
        item2: { title: 'Learning Speed', desc: 'I absorb new tools and concepts quickly, then apply them directly in practical situations.' },
        item3: { title: 'Reliability', desc: 'I communicate clearly, take ownership, and deliver work people can depend on.' }
      },
      footer: {
        contact: { eyebrow: 'Contact', title: "Let's connect", text: 'Email: <a href="mailto:seppe.vanroy@telenet.be">seppe.vanroy@telenet.be</a><br />GitHub: <a href="https://github.com/DaddySeppe" target="_blank" rel="noopener noreferrer">github.com/DaddySeppe</a><br />LinkedIn: <a href="https://linkedin.com/in/seppe-vanroy-857680331" target="_blank" rel="noopener noreferrer">linkedin.com/in/seppe-vanroy-857680331</a>' }
      }
    }
  },
  nl: {
    nav: {
      home: 'Home',
      about: 'Over Mij'
    },
    hero: {
      tag: 'SEPPE PORTFOLIO',
      title: 'IT Student',
      subtitle: 'Ik ben Seppe, een tweedejaars IT-student. Ik hou ervan om nieuwe dingen te leren, aan praktische projecten te werken en mezelf stap voor stap te verbeteren.',
      chip1: 'Tweedejaars student',
      chip2: 'Gemotiveerd',
      chip3: 'Altijd leren',
      scroll: 'Scroll om te verkennen'
    },
    home: {
      eyebrow: 'Home',
      title: 'Ik ben Seppe, een student die graag blijft leren en beter wordt door aan echte projecten te werken.',
      description: 'Ik ben geïnteresseerd in IT omdat ik graag problemen oplos, dingen uitprobeer en voortgang zie in wat ik doe. Ik ben nog steeds aan het leren, maar met elk project krijg ik meer ervaring en zelfvertrouwen.',
      skill1: 'Probleemoplossing',
      skill2: 'Leren door doen',
      skill3: 'Teamwerk',
      skill4: 'Stap voor stap groei'
    },
    projects: {
      eyebrow: 'Projecten',
      title: 'Werk via schoolprojecten en praktische ervaring',
      card1: { title: 'Schoolwerk', desc: 'Ik werk aan opdrachten waarbij ik moet toepassen wat ik leer en het in iets practisch moet omzetten.' },
      card2: { title: 'Technische Vaardigheden', desc: 'Ik verbeter mijn technische vaardigheden voortdurend door met verschillende systemen, tools en cursusprojecten te werken.' },
      card3: { title: 'Mijn Aanpak', desc: 'Ik probeer serieus te werken, duidelijk in wat ik doe te zijn en blijf verbeteren totdat het resultaat goed voelt.' },
      card4: { title: 'Groei', desc: 'Voor mij is elk project een kans om iets nieuws te leren en beter te worden in wat ik doe.' }
    },
    aboutsection: {
      eyebrow: 'Over Mij',
      title: 'Groei in IT door oefening en uitdagingen',
      description: 'Op mijn over-mij pagina kun je meer over mij lezen, mijn sterke punten en hoe ik mezelf als student probeer te verbeteren.',
      link1: 'Ga naar Over Mij',
      link2: 'Neem Contact Op'
    },
    footer: {
      description: 'IT Student gepassioneerd over het bouwen van praktische oplossingen met een professionele instelling en voortdurende verbetering.',
      connect: 'Verbinding',
      copyright: '&copy; 2026 Seppe Vanroy. Alle rechten voorbehouden.'
    },
    about: {
      hero: {
        eyebrow: 'Profiel',
        title: 'Praktische IT-oplossingen, stap voor stap.',
        // title: 'Ik bouw praktische IT-oplossingen met een professionele instelling en drang om me te verbeteren.',
        description: 'Ik ben een tweedejaars IT-student die het snelst in echte omgevingen leert. Mijn stagering in 2023 bij Aurubis Olen en mijn huidige vakantiewerk in hun IT-afdeling hebben gevormd hoe ik projecten benaader: helder denken, betrouwbare uitvoering en voortdurende groei.',
        tag1: 'Praktische Probleemoplosser',
        tag2: 'Professionele Instelling',
        snapshot: 'Snelle Schets',
        subtitle: 'Gericht, consistent en serieus over kwaliteit.',
        fact1: { label: 'Rol', value: 'IT Student' },
        fact2: { label: 'Ervaring', value: 'Aurubis Olen' },
        fact3: { label: 'Sterkte', value: 'Gestructureerde probleemoplossing' }
      },
      showcase: {
        item1: 'PROFESSIONELE INSTELLING',
        item2: 'ERVARING IN DE PRAKTIJK',
        item3: 'PROJECTEIGENAARSCHAP',
        item4: 'TECHNISCHE NIEUWSGIERIGHEID',
        item5: 'DUIDELIJKE COMMUNICATIE'
      },
      stats: {
        stage: { label: 'Huidig Stadium', value: 'Tweedejaars IT' },
        base: { label: 'Professionele Basis', value: 'Aurubis Olen' },
        approach: { label: 'Aanpak', value: 'Bouwen, testen, verbeteren' }
      },
      signature: {
        eyebrow: 'Hoe Ik Werk',
        title: 'Ik hou de complexiteit onder controle met een stap-voor-stap benadering.',
        description: 'Ik begin met duidelijke vereisten, verdeel het werk in beheersbare blokken en valideer elke stap voordat ik voortga. Dit houdt projecten stabiel en maakt samenwerking gemakkelijker.'
      },
      quote: {
        eyebrow: 'Werkprincipe',
        text: '"Goed IT-werk gaat niet alleen over code schrijven. Het gaat over het leveren van betrouwbare oplossingen waar mensen op kunnen vertrouwen."'
      },
      cards: {
        card1: { title: 'Uitvoeringsstijl', desc: 'Ik werk met structuur, stel prioriteiten in en hou voortgang zichtbaar. Ik geef de voorkeur aan schone oplossingen boven snelle fixes.' },
        card2: { title: 'Echte Omgeving', desc: 'Bij Aurubis Olen leerde ik hoe IT dagelijkse activiteiten ondersteunt en waarom betrouwbaarheid in elk detail belangrijk is.' },
        card3: { title: 'Technische Focus', desc: 'Ik geniet ervan functionele producten te bouwen, efficiënt problemen op te lossen en systemen tot op hoog niveau te verfijnen.' },
        card4: { title: 'Teambijdrage', desc: 'Ik communiceer duidelijk, blijf verantwoordelijk en help projecten voort te zetten met consistent inzet.' }
      },
      strengths: {
        eyebrow: 'Sterkeprofiel',
        title: 'Wat ik voor projecten meebrengen',
        item1: { label: 'Technische Aanpassingsvermogen', desc: 'Ik pas me snel aan aan tools, workflows en projectbeperkingen terwijl ik me op codekwaliteit concentreer.' },
        item2: { label: 'Probleemoplossing', desc: 'Ik analyseer problemen methodisch en lever oplossingen die praktisch en onderhoudbaar zijn.' },
        item3: { label: 'Professionele Samenwerking', desc: 'Ik werk goed in teams, communiceer voortgang duidelijk en sluit aan op projectdoelstellingen.' }
      },
      timeline: {
        eyebrow: 'Reis',
        title: 'Persoonlijke groei',
        item1: { year: '2023', text: 'Mijn stage bij Aurubis Olen afgerond en directe ervaring in een professionele IT-omgeving opgedaan.' },
        item2: { year: '2024', text: 'Mijn technische basis verder uitgebouwd door schoolprojecten, praktische opdrachten en hands-on ontwikkeling.' },
        item3: { year: '2025', text: 'Grotere projecten opgeleverd, inclusief MissionZebra en mijn vermogen om over design en implementatie te werken verbeterd.' },
        item4: { year: '2026', text: 'Vakantiewerkperiodes in de Aurubis IT-afdeling terwijl ik mijn studies voortga en mijn projectomvang uitbrei.' }
      },
      projects: {
        eyebrow: 'Geselecteerde Werk',
        title: 'Projecten die mijn vaardigheden hebben gevormd',
        item1: { title: 'MissionZebra', desc: 'Een mobiele applicatie gericht op planning en organisatie voor gezinnen. Gebouwd in teamcontext met echte leveringsdoelstellingen.', stack: 'Flutter • Kotlin • Teamlevering' },
        item2: { title: 'Portfolioplatform', desc: 'Een aangepaste portfoliowebsite gebouwd om mijn identiteit, proces en voortgang in een gepolijst visueel formaat te communiceren.', stack: 'HTML • CSS • JavaScript • UX' },
        item3: { title: 'Aurubis IT Bijdrage', desc: 'Hands-on ondersteuningswerk in een fabriekscontext, helpen bij onderhoud en verbetering van praktische IT-workflows.', stack: 'IT Ondersteuning • Operaties • Betrouwbaarheid' }
      },
      capabilities: {
        eyebrow: 'Mogelijkheden',
        title: 'Professionele sterke punten in actie',
        item1: { title: 'Discipline', desc: 'Ik blijf consistent, maak af wat ik start en handhaaf kwaliteit zelfs onder druk.' },
        item2: { title: 'Leertempo', desc: 'Ik absorbeer snel nieuwe tools en concepten, en pas ze vervolgens direct in praktische situaties toe.' },
        item3: { title: 'Betrouwbaarheid', desc: 'Ik communiceer duidelijk, neem eigenaarschap en lever werk dat mensen kunnen vertrouwen.' }
      },
      footer: {
        contact: { eyebrow: 'Contact', title: 'Laten we in contact komen', text: 'E-mail: <a href="mailto:seppe.vanroy@telenet.be">seppe.vanroy@telenet.be</a><br />GitHub: <a href="https://github.com/DaddySeppe" target="_blank" rel="noopener noreferrer">github.com/DaddySeppe</a><br />LinkedIn: <a href="https://linkedin.com/in/seppe-vanroy-857680331" target="_blank" rel="noopener noreferrer">linkedin.com/in/seppe-vanroy-857680331</a>' }
      }
    }
  }
};

let currentLanguage = localStorage.getItem('language') || 'en';

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, prop) => current?.[prop], obj);
};

const translatePage = (lang) => {
  const trans = translations[lang];
  if (!trans) return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(trans, key);
    
    if (value !== undefined) {
      if (key.includes('footer.contact.text')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });
};

const initializeLanguage = () => {
  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);
};

const setLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  translatePage(lang);
  if (typeof window.updateChatWidgetLanguage === 'function') {
    window.updateChatWidgetLanguage(lang);
  }
};

const initLanguageSwitcher = () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initLanguageSwitcher();
  });
} else {
  initializeLanguage();
  initLanguageSwitcher();
}

// ==== Original Script Content ====

// ==== Original Script Content ====
const bgScenes = Array.from(document.querySelectorAll('.bg-scene'));
const scrollTriggers = Array.from(document.querySelectorAll('.scroll-trigger'));
const sceneTag = document.getElementById('sceneTag');
const sceneTitle = document.getElementById('sceneTitle');
const sceneSubtitle = document.getElementById('sceneSubtitle');
const homeAtmosphere = document.querySelector('.home-atmosphere');
const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const performanceMode = isSmallScreen || prefersReducedMotion;
const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const getSceneCopy = (lang) => {
  const trans = translations[lang] || translations.en;
  const isDutch = lang === 'nl';
  return {
    '1': {
      tag: trans.hero.tag,
      title: trans.hero.title,
      subtitle: trans.hero.subtitle
    },
    '2': {
      tag: isDutch ? 'GESELECTEERDE PROJECTEN' : 'SELECTED PROJECTS',
      title: isDutch ? 'Projecten Met Doel' : 'Projects With Purpose',
      subtitle: isDutch
        ? 'School- en persoonlijke concepten waar design en frontend-uitvoering samenkomen.'
        : 'School and personal concepts where design and frontend execution work together.'
    },
    '3': {
      tag: isDutch ? 'OVER MIJ' : 'ABOUT ME',
      title: isDutch ? 'Persoonlijk Verhaal' : 'Personal Story',
      subtitle: isDutch
        ? 'Detailgericht, nieuwsgierig en altijd aan het verbeteren bij elk project.'
        : 'Detail-focused, curious, and always improving with every project.'
    }
  };
};

const updateOverlay = (sceneKey) => {
  const sceneCopy = getSceneCopy(currentLanguage);
  const content = sceneCopy[sceneKey];
  if (!content || !sceneTag || !sceneTitle || !sceneSubtitle) return;

  if (overlayUpdateTimer) {
    window.clearTimeout(overlayUpdateTimer);
    overlayUpdateTimer = 0;
  }

  if (performanceMode) {
    sceneTag.textContent = content.tag;
    sceneTitle.textContent = content.title;
    sceneSubtitle.textContent = content.subtitle;
    return;
  }

  // Cinematic fade out with subtle scale and shift
  [sceneTag, sceneTitle, sceneSubtitle].forEach((el) => {
    el.style.transition = 'opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), transform 280ms cubic-bezier(0.4, 0, 0.6, 1)';
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px) scale(0.98)';
  });

  overlayUpdateTimer = window.setTimeout(() => {
    sceneTag.textContent = content.tag;
    sceneTitle.textContent = content.title;
    sceneSubtitle.textContent = content.subtitle;

    // Force reflow for animation trigger
    void sceneTag.offsetHeight;

    // Cinematic fade in with motion
    [sceneTag, sceneTitle, sceneSubtitle].forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
    });

    overlayUpdateTimer = 0;
  }, 240);
};

let activeScene = '1';
let targetProgress = 0;
let smoothProgress = 0;
let maxProgress = Math.max(0, bgScenes.length - 1);
let pointerTargetX = 0;
let pointerTargetY = 0;
let pointerSmoothX = 0;
let pointerSmoothY = 0;
let homeRafId = 0;
let isHomeAnimating = false;
let overlayUpdateTimer = 0;

const updateTargetProgress = () => {
  const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const normalized = window.scrollY / scrollRange;
  targetProgress = Math.min(maxProgress, Math.max(0, normalized * maxProgress));
};

const renderScenes = (progress) => {
  bgScenes.forEach((scene, index) => {
    const distance = Math.abs(progress - index);
    const weight = Math.max(0, 1 - distance);
    
    const easeWeight = weight < 0.5 
      ? 4 * weight * weight * weight 
      : 1 - Math.pow(-2 * weight + 2, 3) / 2;
    
    const opacity = easeWeight > 0.01 ? easeWeight : 0;
    const scale = 1.18 - easeWeight * 0.12;
    const brightness = 0.85 + easeWeight * 0.2;

    scene.style.opacity = opacity > 0.01 ? opacity : 0;
    scene.style.transform = `scale(${scale.toFixed(3)})`;
    scene.style.filter = `brightness(${brightness.toFixed(2)})`;
  });

  const nearest = String(Math.min(maxProgress + 1, Math.max(1, Math.round(progress) + 1)));

  if (nearest !== activeScene) {
    activeScene = nearest;
    updateOverlay(nearest);
  }
};

const renderScenesFast = (progress) => {
  bgScenes.forEach((scene, index) => {
    const distance = Math.abs(progress - index);
    const weight = Math.max(0, 1 - distance);
    const opacity = weight > 0.001 ? weight : 0;
    const scale = 1.04 - weight * 0.04;

    scene.style.opacity = opacity > 0.01 ? opacity : 0;
    scene.style.transform = `translate3d(0, 0, 0) scale(${scale.toFixed(3)})`;
  });

  const nearest = String(Math.min(maxProgress + 1, Math.max(1, Math.round(progress) + 1)));
  if (nearest !== activeScene) {
    activeScene = nearest;
    updateOverlay(nearest);
  }
};

let lastFrameTime = 0;
const FRAME_TIME = 33;

const animate = () => {
  const now = performance.now();
  const timeSinceLastFrame = now - lastFrameTime;
  
  if (timeSinceLastFrame < FRAME_TIME) {
    homeRafId = window.requestAnimationFrame(animate);
    return;
  }
  
  lastFrameTime = now;
  const delta = targetProgress - smoothProgress;
  const easeStrength = performanceMode
    ? (Math.abs(delta) > 0.15 ? 0.16 : 0.12)
    : (Math.abs(delta) > 0.15 ? 0.1 : 0.055);
  smoothProgress += delta * easeStrength;

  if (Math.abs(delta) < 0.0003) {
    smoothProgress = targetProgress;
  }

  renderScenes(smoothProgress);

  if (Math.abs(targetProgress - smoothProgress) > 0.0008) {
    homeRafId = window.requestAnimationFrame(animate);
    return;
  }

  isHomeAnimating = false;
  homeRafId = 0;
};

const requestHomeAnimation = () => {
  if (isHomeAnimating) return;
  isHomeAnimating = true;
  homeRafId = window.requestAnimationFrame(animate);
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
  if (performanceMode) {
    smoothProgress = targetProgress;
    renderScenesFast(smoothProgress);

    window.addEventListener('scroll', () => {
      updateTargetProgress();
      smoothProgress = targetProgress;
      renderScenesFast(smoothProgress);
    }, { passive: true });

    window.addEventListener('resize', () => {
      maxProgress = Math.max(0, bgScenes.length - 1);
      updateTargetProgress();
      smoothProgress = targetProgress;
      renderScenesFast(smoothProgress);
    });

    return;
  }

  renderScenes(smoothProgress);

  window.addEventListener('scroll', () => {
    updateTargetProgress();
    requestHomeAnimation();
  }, { passive: true });

  if (!performanceMode && supportsHover) {
    let pointerThrottled = false;
    window.addEventListener('pointermove', (event) => {
      if (pointerThrottled) return;
      pointerThrottled = true;
      requestAnimationFrame(() => {
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;
        pointerTargetX = nx * 8;
        pointerTargetY = ny * 6;
        requestHomeAnimation();
        pointerThrottled = false;
      });
    }, { passive: true });
    window.addEventListener('pointerleave', () => {
      pointerTargetX = 0;
      pointerTargetY = 0;
      requestHomeAnimation();
    }, { passive: true });
    window.addEventListener('blur', () => {
      pointerTargetX = 0;
      pointerTargetY = 0;
      requestHomeAnimation();
    }, { passive: true });
  }

  window.addEventListener('resize', () => {
    maxProgress = Math.max(0, bgScenes.length - 1);
    updateTargetProgress();
    requestHomeAnimation();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && homeRafId) {
      window.cancelAnimationFrame(homeRafId);
      homeRafId = 0;
      isHomeAnimating = false;
      return;
    }

    if (!document.hidden) {
      requestHomeAnimation();
    }
  });

  requestHomeAnimation();
};

const initHomeEffects = () => {
  if (!document.body.classList.contains('home-page')) return;

  const progressBar = document.getElementById('homeProgressBar');
  const interactiveCards = Array.from(document.querySelectorAll('.panel-card, .mini-grid div'));
  let progressRafId = 0;

  const updateProgress = () => {
    progressRafId = 0;
    if (!progressBar) return;

    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
    progressBar.style.width = `${(progress * 100).toFixed(2)}%`;
  };

  const requestProgressUpdate = () => {
    if (progressRafId) return;
    progressRafId = window.requestAnimationFrame(updateProgress);
  };

  const updateCardPointer = (event, card) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--px', `${x.toFixed(2)}%`);
    card.style.setProperty('--py', `${y.toFixed(2)}%`);
  };

  if (supportsHover) {
    interactiveCards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        card.classList.add('is-active');
        updateCardPointer(event, card);
      });

      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-active');
      });
    });
  }

  requestProgressUpdate();
  window.addEventListener('scroll', requestProgressUpdate, { passive: true });
  window.addEventListener('resize', requestProgressUpdate);
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
  const interactiveCards = Array.from(document.querySelectorAll('.about-showcase, .signature-panel, .about-card, .timeline, .portfolio-section, .project-card, .skill-card'));
  let progressRafId = 0;

  const updateProgress = () => {
    progressRafId = 0;
    if (!progressBar) return;

    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
    progressBar.style.width = `${(progress * 100).toFixed(2)}%`;
  };

  const requestProgressUpdate = () => {
    if (progressRafId) return;
    progressRafId = window.requestAnimationFrame(updateProgress);
  };

  const updateCardPointer = (event, card) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--px', `${x.toFixed(2)}%`);
    card.style.setProperty('--py', `${y.toFixed(2)}%`);
  };

  if (supportsHover) {
    interactiveCards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        card.classList.add('is-active');
        updateCardPointer(event, card);
      });

      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-active');
      });
    });
  }

  requestProgressUpdate();
  window.addEventListener('scroll', requestProgressUpdate, { passive: true });
  window.addEventListener('resize', requestProgressUpdate);
};

const initAboutCenterZoom = () => {
  if (!document.body.classList.contains('about-page')) return;
  if (performanceMode) return;

  const zoomTargets = Array.from(document.querySelectorAll('.about-hero, .about-showcase, .signature-layout, .about-grid, .timeline, .portfolio-section'));
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

      const scale = 1 + eased * 0.032;
      const bright = 1 + eased * 0.045;

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
  let ticking = false;

  const animateWheel = () => {
    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));

    smoothX += (pointerX - smoothX) * (performanceMode ? 0.18 : 0.06);
    smoothY += (pointerY - smoothY) * (performanceMode ? 0.18 : 0.06);

    const rot = progress * (performanceMode ? 90 : 150);

    const wheelX = smoothX * (performanceMode ? 4 : 9);
    const wheelY = smoothY * (performanceMode ? 3 : 7) - progress * (performanceMode ? 2 : 5);
    const wheelScale = 0.95 + progress * 0.12;

    document.body.style.setProperty('--wheel-x', `${wheelX.toFixed(2)}px`);
    document.body.style.setProperty('--wheel-y', `${wheelY.toFixed(2)}px`);
    document.body.style.setProperty('--wheel-rot', `${rot.toFixed(2)}deg`);
    document.body.style.setProperty('--wheel-scale', wheelScale.toFixed(3));

    ticking = false;
  };

  const requestWheelUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(animateWheel);
  };

  if (!performanceMode) {
    window.addEventListener('pointermove', (event) => {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
      requestWheelUpdate();
    });

    window.addEventListener('pointerleave', () => {
      pointerX = 0;
      pointerY = 0;
      requestWheelUpdate();
    });
  }

  window.addEventListener('scroll', requestWheelUpdate, { passive: true });
  window.addEventListener('resize', requestWheelUpdate);

  requestWheelUpdate();
};

const initPortfolioAI = () => {
  const widget = document.getElementById('aiChatWidget');
  const toggle = document.getElementById('aiChatToggle');
  const closeBtn = document.getElementById('aiChatClose');
  const panel = document.getElementById('aiChatPanel');
  const messages = document.getElementById('aiChatMessages');
  const form = document.getElementById('aiChatForm');
  const input = document.getElementById('aiChatInput');
  const sendButton = form ? form.querySelector('button[type="submit"]') : null;
  const title = document.querySelector('.ai-chat-title');
  const kicker = document.querySelector('.ai-chat-kicker');

  if (!widget || !toggle || !closeBtn || !panel || !messages || !form || !input || !title || !kicker) {
    return;
  }

  const uiByLang = {
    nl: {
      openTitle: 'Open AI chat',
      title: 'Vraag iets aan mijn AI',
      kicker: 'Portfolio Assistant',
      placeholder: 'Typ je vraag...',
      send: 'Verstuur',
      greeting: 'Hey! Ik ben de portfolio-assistent. Vraag me gerust iets over Seppe, projecten, contact of skills.'
    },
    en: {
      openTitle: 'Open AI chat',
      title: 'Ask my AI anything',
      kicker: 'Portfolio Assistant',
      placeholder: 'Type your question...',
      send: 'Send',
      greeting: 'Hey! I am the portfolio assistant. Ask me anything about Seppe, projects, contact, or skills.'
    }
  };

  const getUI = () => uiByLang[currentLanguage] || uiByLang.en;

  const addMessage = (text, role) => {
    const bubble = document.createElement('div');
    bubble.className = `ai-msg ${role === 'user' ? 'ai-msg-user' : 'ai-msg-bot'}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  };

  const conversation = [];

  const getRuleBasedReply = (prompt) => {
    const p = prompt.toLowerCase();
    const nl = currentLanguage === 'nl';

    if (/(hallo|hey|hi|goedemorgen|goedenavond)/.test(p)) {
      return nl
        ? 'Hey! Leuk dat je er bent. Je kan me vragen over projecten, vaardigheden, opleiding of contact.'
        : 'Hey! Great to have you here. You can ask me about projects, skills, education, or contact.';
    }

    if (/(contact|mail|email|linkedin|github)/.test(p)) {
      return nl
        ? 'Je kan Seppe contacteren via seppe.vanroy@telenet.be, LinkedIn of GitHub. Scroll ook gerust naar de contact-sectie onderaan.'
        : 'You can contact Seppe through seppe.vanroy@telenet.be, LinkedIn, or GitHub. You can also scroll to the contact section at the bottom.';
    }

    if (/(project|missionzebra|portfolio)/.test(p)) {
      return nl
        ? 'Belangrijke projecten zijn MissionZebra, dit portfolio, en praktische IT-bijdragen bij Aurubis. Wil je dat ik er een kort samenvat?'
        : 'Key projects include MissionZebra, this portfolio, and practical IT contributions at Aurubis. Want me to summarize one?';
    }

    if (/(skill|vaardigheid|sterkte|strength)/.test(p)) {
      return nl
        ? 'Sterktes: gestructureerd werken, probleemoplossing, snel bijleren, en betrouwbaar samenwerken in teamcontext.'
        : 'Strengths: structured execution, problem solving, fast learning, and reliable collaboration in team environments.';
    }

    if (/(studie|opleiding|school|internship|stage|aurubis)/.test(p)) {
      return nl
        ? 'Seppe is tweedejaars IT-student, liep stage bij Aurubis Olen en werkt daar ook tijdens vakantieperiodes op IT.'
        : 'Seppe is a second-year IT student, completed an internship at Aurubis Olen, and also works there in IT during holiday periods.';
    }

    return nl
      ? 'Goeie vraag. Ik kan je helpen met info over projecten, skills, ervaring, contact en studie. Stel gerust iets specifieker.'
      : 'Great question. I can help with projects, skills, experience, contact info, and studies. Feel free to ask a bit more specifically.';
  };

  const getAPIReply = async (prompt) => {
    try {
      const response = await fetch('api/chat.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: prompt,
          lang: currentLanguage,
          history: conversation.slice(-8)
        })
      });

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json();
      if (data && typeof data.reply === 'string' && data.reply.trim().length > 0) {
        return data.reply.trim();
      }

      throw new Error('No reply in API response');
    } catch (error) {
      return getRuleBasedReply(prompt);
    }
  };

  const openChat = () => {
    widget.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    window.setTimeout(() => input.focus(), 120);
  };

  const closeChat = () => {
    widget.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const applyLanguage = (lang) => {
    const ui = uiByLang[lang] || uiByLang.en;
    toggle.title = ui.openTitle;
    title.textContent = ui.title;
    kicker.textContent = ui.kicker;
    input.placeholder = ui.placeholder;
    if (sendButton) sendButton.textContent = ui.send;

    if (messages.children.length === 0) {
      addMessage(ui.greeting, 'bot');
    }
  };

  window.updateChatWidgetLanguage = applyLanguage;

  toggle.addEventListener('click', () => {
    if (widget.classList.contains('is-open')) {
      closeChat();
    } else {
      openChat();
    }
  });

  closeBtn.addEventListener('click', closeChat);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    addMessage(value, 'user');
    conversation.push({ role: 'user', content: value });
    input.value = '';

    input.disabled = true;
    if (sendButton) sendButton.disabled = true;

    const typing = document.createElement('div');
    typing.className = 'ai-msg ai-msg-bot';
    typing.textContent = currentLanguage === 'nl' ? 'AI is aan het typen...' : 'AI is typing...';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    const reply = await getAPIReply(value);

    typing.remove();
    addMessage(reply, 'bot');
    conversation.push({ role: 'assistant', content: reply });

    input.disabled = false;
    if (sendButton) sendButton.disabled = false;
    input.focus();
  });

  applyLanguage(currentLanguage);
};

initHomePage();
initHomeEffects();
initReveal();
initAboutEffects();
initAboutCenterZoom();
initAboutWheelMotion();
initPortfolioAI();


