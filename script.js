// ==== Language System ====
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      contact: 'Contact'
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
      link1: 'View Projects',
      link2: 'Contact Me'
    },
    footer: {
      description: 'IT Student passionate about building practical solutions with professional mindset and continuous improvement.',
      connect: 'Connect',
      copyright: '&copy; 2026 Seppe Vanroy. All rights reserved.'
    },
    skills: {
      eyebrow: 'SKILLS',
      title: 'What I Can Do',
      categories: {
        webdev: 'Web Development',
        databackend: 'Data & Backend',
        tools: 'Tools & Platforms'
      },
      tech: {
        html5: 'HTML5',
        css3: 'CSS3',
        javascript: 'JavaScript',
        react: 'React',
        vuejs: 'Vue.js',
        tailwind: 'Tailwind CSS',
        bootstrap: 'Bootstrap',
        dotnet: '.NET',
        php: 'PHP',
        python: 'Python',
        mysql: 'MySQL',
        flask: 'Flask',
        kotlin: 'Kotlin',
        sql: 'SQL',
        restapis: 'REST APIs',
        firebase: 'Firebase',
        database: 'Database Design',
        github: 'Git & GitHub',
        docker: 'Docker',
        vscode: 'VS Code',
        figma: 'Figma',
        linux: 'Linux',
        aws: 'AWS',
        terminal: 'Terminal/CLI',
        agile: 'Agile'
      }
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
      missionzebra: {
        eyebrow: 'Featured Project',
        title: 'MissionZebra: Screen Time Made Smart',
        description: 'An app designed to help families navigate screen time in a positive way. Teaching children healthy digital habits through planning, tracking, and real rewards within a family ecosystem.',
        link: 'Visit MissionZebra'
      },
      footer: {
        contact: { eyebrow: 'Contact', title: "Let's connect", text: 'Email: <a href="mailto:seppe.vanroy@telenet.be">seppe.vanroy@telenet.be</a><br />GitHub: <a href="https://github.com/DaddySeppe" target="_blank" rel="noopener noreferrer">github.com/DaddySeppe</a><br />LinkedIn: <a href="https://linkedin.com/in/seppe-vanroy-857680331" target="_blank" rel="noopener noreferrer">linkedin.com/in/seppe-vanroy-857680331</a>' }
      }
    }
  },
  nl: {
    nav: {
      home: 'Home',
      about: 'Over Mij',
      projects: 'Projecten',
      contact: 'Contact'
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
      link1: 'Bekijk Projecten',
      link2: 'Neem Contact Op'
    },
    footer: {
      description: 'IT Student gepassioneerd over het bouwen van praktische oplossingen met een professionele instelling en voortdurende verbetering.',
      connect: 'Verbinding',
      copyright: '&copy; 2026 Seppe Vanroy. Alle rechten voorbehouden.'
    },
    skills: {
      eyebrow: 'VAARDIGHEDEN',
      title: 'Wat ik kan doen',
      categories: {
        webdev: 'Webontwikkeling',
        databackend: 'Data & Backend',
        tools: 'Tools & Platforms'
      },
      tech: {
        html5: 'HTML5',
        css3: 'CSS3',
        javascript: 'JavaScript',
        react: 'React',
        vuejs: 'Vue.js',
        tailwind: 'Tailwind CSS',
        bootstrap: 'Bootstrap',
        dotnet: '.NET',
        php: 'PHP',
        python: 'Python',
        mysql: 'MySQL',
        flask: 'Flask',
        kotlin: 'Kotlin',
        sql: 'SQL',
        restapis: 'REST APIs',
        firebase: 'Firebase',
        database: 'Ontwerp van database',
        github: 'Git & GitHub',
        docker: 'Docker',
        vscode: 'VS Code',
        figma: 'Figma',
        linux: 'Linux',
        aws: 'AWS',
        terminal: 'Terminal/CLI',
        agile: 'Agile'
      }
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
      missionzebra: {
        eyebrow: 'Gekozen Project',
        title: 'MissionZebra: Schermentijd op een Slimme Manier',
        description: 'Een app ontworpen om gezinnen schermentijd op een positieve manier te navigeren. Kinderen gezonde digitale gewoonten aanleren door planning, tracking en echte beloningen binnen een gezinsecosysteem.',
        link: 'Bezoek MissionZebra'
      },
      footer: {
        contact: { eyebrow: 'Contact', title: 'Laten we in contact komen', text: 'E-mail: <a href="mailto:seppe.vanroy@telenet.be">seppe.vanroy@telenet.be</a><br />GitHub: <a href="https://github.com/DaddySeppe" target="_blank" rel="noopener noreferrer">github.com/DaddySeppe</a><br />LinkedIn: <a href="https://linkedin.com/in/seppe-vanroy-857680331" target="_blank" rel="noopener noreferrer">linkedin.com/in/seppe-vanroy-857680331</a>' }
      }
    }
  }
};

const pageTranslations = {
  'index.html': {
    nl: {
      title: 'Seppe | Home',
      selectors: {
        '.neo-kicker': { text: 'Frontend Ontwikkelaar' },
        '.neo-hero h1': { text: 'Hallo, ik ben Seppe Vanroy.' },
        '.neo-hero .neo-text': { text: 'Ik bouw moderne webinterfaces met focus op duidelijkheid, prestaties en nette implementatie. Deze layout is ontworpen in een donkere cinematische stijl, geinspireerd op je referentie.' },
        '.neo-actions .neo-btn': { text: 'Lees Meer' },
        '.neo-actions .neo-link': { text: 'Mail Mij' },
        '.neo-projects h2': { text: 'Uitgelichte Projecten' },
        '.neo-card:nth-child(1) h3': { text: 'Project Een' },
        '.neo-card:nth-child(1) p': { text: 'Dashboardconcept met een heldere visuele hierarchie en praktische interacties.' },
        '.neo-card:nth-child(2) h3': { text: 'Project Twee' },
        '.neo-card:nth-child(2) p': { text: 'Webervaring gericht op transities, modulaire secties en duidelijke storytelling.' },
        '.neo-card:nth-child(3) h3': { text: 'Project Drie' },
        '.neo-card:nth-child(3) p': { text: 'Mobile-first interface met sterk contrast en snelle, responsieve werking.' },
        '.neo-side .neo-panel:first-child h2': { text: 'Over Mij' },
        '.neo-side .neo-panel:first-child p': { text: 'Ik ben een tweedejaars IT-student die graag praktische projecten oplevert en elke week beter wordt.' },
        '#contact h2': { text: 'Contacteer Mij' },
        '#contact .neo-form input[type="text"]': { placeholder: 'Naam', ariaLabel: 'Naam' },
        '#contact .neo-form input[type="email"]': { placeholder: 'E-mail', ariaLabel: 'E-mail' },
        '#contact .neo-form textarea': { placeholder: 'Bericht', ariaLabel: 'Bericht' },
        '#contact .neo-form button': { text: 'Verstuur' },
        '.cta-eyebrow': { text: 'KLAAR OM SAMEN TE WERKEN?' },
        '.cta-content h2': { text: 'Laten we samen iets sterk bouwen' },
        '.cta-content p:not(.cta-eyebrow)': { text: 'Of je nu een projectidee hebt, technische vragen of gewoon wil praten: ik ben er klaar voor.' },
        '.cta-btn-primary': { text: 'Bekijk Mijn Werk' },
        '.cta-btn-secondary': { text: 'Neem Contact Op' },
        '.ai-chat-panel': { ariaLabel: 'Portfolio assistent' }
      }
    },
    en: {
      title: 'Seppe | Home',
      selectors: {
        '.neo-kicker': { text: 'Frontend Developer' },
        '.neo-hero h1': { text: 'Hi, I am Seppe Vanroy.' },
        '.neo-hero .neo-text': { text: 'I build modern web interfaces with focus on clarity, performance, and clean implementation. This layout is designed in a dark cinematic style inspired by your reference.' },
        '.neo-actions .neo-btn': { text: 'Know More' },
        '.neo-actions .neo-link': { text: 'Email Me' },
        '.neo-projects h2': { text: 'Featured Projects' },
        '.neo-card:nth-child(1) h3': { text: 'Project One' },
        '.neo-card:nth-child(1) p': { text: 'Dashboard concept with clean visual hierarchy and practical interactions.' },
        '.neo-card:nth-child(2) h3': { text: 'Project Two' },
        '.neo-card:nth-child(2) p': { text: 'Web experience focused on transitions, modular sections, and clear storytelling.' },
        '.neo-card:nth-child(3) h3': { text: 'Project Three' },
        '.neo-card:nth-child(3) p': { text: 'Mobile-first interface with strong contrast and fast, responsive behavior.' },
        '.neo-side .neo-panel:first-child h2': { text: 'About Me' },
        '.neo-side .neo-panel:first-child p': { text: 'I am a second-year IT student who likes to ship practical projects and keep improving every week.' },
        '#contact h2': { text: 'Contact Me' },
        '#contact .neo-form input[type="text"]': { placeholder: 'Name', ariaLabel: 'Name' },
        '#contact .neo-form input[type="email"]': { placeholder: 'Email', ariaLabel: 'Email' },
        '#contact .neo-form textarea': { placeholder: 'Message', ariaLabel: 'Message' },
        '#contact .neo-form button': { text: 'Send' },
        '.cta-eyebrow': { text: 'READY TO COLLABORATE?' },
        '.cta-content h2': { text: "Let's create something amazing together" },
        '.cta-content p:not(.cta-eyebrow)': { text: "Whether you have a project idea, technical questions, or just want to chat, I'm ready." },
        '.cta-btn-primary': { text: 'Explore My Work' },
        '.cta-btn-secondary': { text: 'Get In Touch' },
        '.ai-chat-panel': { ariaLabel: 'Portfolio assistant' }
      }
    }
  },
  'about.html': {
    nl: {
      title: 'Seppe | Over Mij',
      selectors: {
        '.hero-eyebrow-mega': { text: 'WIE IK BEN' },
        '.hero-title-giant': { text: 'Praktische IT-oplossingen, stap voor stap.' },
        '.hero-intro-text': { text: 'Tweedejaars IT-student met passie voor echte oplossingen in echte omgevingen. Leren via stage, projecten en professionele samenwerking.' },
        '.hero-stats-ultra .stat-block:nth-child(1) .stat-label': { text: 'Jaar IT' },
        '.hero-stats-ultra .stat-block:nth-child(2) .stat-label': { text: 'Motivatie' },
        '.hero-stats-ultra .stat-block:nth-child(3) .stat-label': { text: 'Focus' },
        '.section-header-centered .section-eyebrow': { text: 'MIJN AANPAK' },
        '.section-header-centered h2': { text: 'Wat mijn werk stuurt' },
        '.skills-matrix .skill-card-large:nth-child(1) h3': { text: 'Eerst Structuur' },
        '.skills-matrix .skill-card-large:nth-child(1) p': { text: 'Duidelijke scope, zichtbare vooruitgang en georganiseerde uitvoering van start tot einde.' },
        '.skills-matrix .skill-card-large:nth-child(2) h3': { text: 'Betrouwbaar Werk' },
        '.skills-matrix .skill-card-large:nth-child(2) p': { text: 'Oplossingen waarop je kunt vertrouwen. Stabiele uitvoering waar anderen op kunnen bouwen.' },
        '.skills-matrix .skill-card-large:nth-child(3) h3': { text: 'Constante Groei' },
        '.skills-matrix .skill-card-large:nth-child(3) p': { text: 'Snel leren, direct toepassen, verbeteren. Elk project maakt het volgende beter.' },
        '.skills-matrix .skill-card-large:nth-child(4) h3': { text: 'Echte Oplossingen' },
        '.skills-matrix .skill-card-large:nth-child(4) p': { text: 'Bouwen voor echt gebruik. Professionele omgevingen leren pragmatisch werken.' },
        '.showcase-text .section-eyebrow': { text: 'ERVARING' },
        '.showcase-text h2': { text: 'Gevormd door IT in de praktijk' },
        '.showcase-text > p': { text: 'Mijn traject is niet alleen theorie. Echte omgevingen bij Aurubis Olen en hands-on projecten leerden me hoe IT echt werkt, waarom betrouwbaarheid telt en hoe je levert.' },
        '.call-to-action-ultra .cta-eyebrow': { text: 'KLAAR OM SAMEN TE WERKEN?' },
        '.call-to-action-ultra h2': { text: 'Laten we praten over de volgende stap' },
        '.call-to-action-ultra .cta-description': { text: 'Of het nu gaat om een projectgesprek, technische vragen of gewoon connecteren: ik sta open.' },
        '.call-to-action-ultra .btn-primary': { text: 'Bekijk Mijn Werk' },
        '.call-to-action-ultra .btn-secondary': { text: 'Neem Contact Op' }
      }
    },
    en: {
      title: 'Seppe | About Me',
      selectors: {
        '.hero-eyebrow-mega': { text: 'WHO I AM' },
        '.hero-title-giant': { text: 'Practical IT solutions, step by step.' },
        '.hero-intro-text': { text: 'Second-year IT student passionate about building real solutions in real environments. Learning through internships, projects, and professional collaboration.' },
        '.hero-stats-ultra .stat-block:nth-child(1) .stat-label': { text: 'Years IT' },
        '.hero-stats-ultra .stat-block:nth-child(2) .stat-label': { text: 'Drive' },
        '.hero-stats-ultra .stat-block:nth-child(3) .stat-label': { text: 'Focused' },
        '.section-header-centered .section-eyebrow': { text: 'MY APPROACH' },
        '.section-header-centered h2': { text: 'What drives my work' },
        '.skills-matrix .skill-card-large:nth-child(1) h3': { text: 'Structure First' },
        '.skills-matrix .skill-card-large:nth-child(1) p': { text: 'Clear scope, visible progress, and organized execution from start to finish.' },
        '.skills-matrix .skill-card-large:nth-child(2) h3': { text: 'Reliable Work' },
        '.skills-matrix .skill-card-large:nth-child(2) p': { text: 'Solutions you can trust. Dependable execution that others can build upon.' },
        '.skills-matrix .skill-card-large:nth-child(3) h3': { text: 'Constant Growth' },
        '.skills-matrix .skill-card-large:nth-child(3) p': { text: 'Learn fast, apply directly, iterate. Every project improves the next one.' },
        '.skills-matrix .skill-card-large:nth-child(4) h3': { text: 'Real Solutions' },
        '.skills-matrix .skill-card-large:nth-child(4) p': { text: 'Building for actual use. Professional environments teach pragmatism.' },
        '.showcase-text .section-eyebrow': { text: 'EXPERIENCE' },
        '.showcase-text h2': { text: 'Shaped by real-world IT' },
        '.showcase-text > p': { text: "My journey is not just theory. Real environments at Aurubis Olen and hands-on projects taught me how IT actually works, why reliability matters, and how to deliver." },
        '.call-to-action-ultra .cta-eyebrow': { text: 'READY TO COLLABORATE?' },
        '.call-to-action-ultra h2': { text: "Let's talk about what's next" },
        '.call-to-action-ultra .cta-description': { text: "Whether it's a project discussion, technical questions, or just connecting, I'm always open." },
        '.call-to-action-ultra .btn-primary': { text: 'View My Work' },
        '.call-to-action-ultra .btn-secondary': { text: 'Get In Touch' }
      }
    }
  },
  'projects.html': {
    nl: {
      title: 'Seppe | Projecten',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Projectoverzicht' },
        '.hub-hero h1': { text: 'Kies een project en duik erin' },
        '.hub-hero p': { text: 'Kies een van de drie projecten om de context, aanpak en resultaten te verkennen. Elke pagina heeft een unieke visuele stijl en duidelijke uitleg.' },
        '.hub-grid-wrap .eyebrow': { text: 'Kies Je Pad' },
        '.hub-grid-wrap h2': { text: 'Drie projecten, drie verhalen' },
        '.hub-card:nth-child(1) h3': { text: 'Project Een' },
        '.hub-card:nth-child(1) p': { text: 'Dashboardconcept met focus op visuele helderheid en bruikbare interface-structuur.' },
        '.hub-card:nth-child(1) span': { text: 'Open Project' },
        '.hub-card:nth-child(2) h3': { text: 'Project Twee' },
        '.hub-card:nth-child(2) p': { text: 'MissionZebra-samenwerking met een echt systeem voor gezinsplanning en gewoontes.' },
        '.hub-card:nth-child(2) span': { text: 'Open Project' },
        '.hub-card:nth-child(3) h3': { text: 'Project Drie' },
        '.hub-card:nth-child(3) p': { text: 'Aurubis IT-bijdrage met focus op betrouwbaarheid en praktische operationele ondersteuning.' },
        '.hub-card:nth-child(3) span': { text: 'Open Project' }
      }
    },
    en: {
      title: 'Seppe | Projects',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Project Hub' },
        '.hub-hero h1': { text: 'Pick a project and dive in' },
        '.hub-hero p': { text: 'Choose one of the three projects to explore the context, execution flow, and outcomes. Each page has a unique visual style and detailed breakdown.' },
        '.hub-grid-wrap .eyebrow': { text: 'Choose Your Path' },
        '.hub-grid-wrap h2': { text: 'Three projects, three stories' },
        '.hub-card:nth-child(1) h3': { text: 'Project One' },
        '.hub-card:nth-child(1) p': { text: 'Dashboard concept focused on visual clarity and actionable interface structure.' },
        '.hub-card:nth-child(1) span': { text: 'Open Project' },
        '.hub-card:nth-child(2) h3': { text: 'Project Two' },
        '.hub-card:nth-child(2) p': { text: 'MissionZebra collaboration with a real-world family planning and habit system.' },
        '.hub-card:nth-child(2) span': { text: 'Open Project' },
        '.hub-card:nth-child(3) h3': { text: 'Project Three' },
        '.hub-card:nth-child(3) p': { text: 'Aurubis IT contribution centered on reliability and practical operations support.' },
        '.hub-card:nth-child(3) span': { text: 'Open Project' }
      }
    }
  },
  'contact.html': {
    nl: {
      title: 'Seppe | Contact',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Contact' },
        '.hub-hero h1': { text: 'Laten we iets sterk bouwen' },
        '.hub-hero p': { text: 'Open voor stages, studentenkansen en praktische samenwerking. Neem contact op via je voorkeurskanaal en ik kom bij je terug.' },
        '.hub-grid-wrap .eyebrow': { text: 'Directe Kanalen' },
        '.hub-grid-wrap h2': { text: 'Kies de snelste manier om te connecteren' },
        '.contact-grid .hub-card:nth-child(1) span': { text: 'Stuur E-mail' },
        '.contact-grid .hub-card:nth-child(2) span': { text: 'Bekijk Profiel' },
        '.contact-grid .hub-card:nth-child(3) span': { text: 'Connecteer' },
        '.contact-form-head .eyebrow': { text: 'Stuur een bericht' },
        '.contact-form-head h2': { text: 'Laat je gegevens achter en ik antwoord via e-mail' },
        '.contact-form-head p': { text: 'Gebruik dit voor stages, samenwerking of een snelle vraag. Het bericht gaat rechtstreeks naar mijn inbox.' },
        '.contact-form .contact-form-grid label:nth-child(1) span': { text: 'Naam' },
        '.contact-form .contact-form-grid label:nth-child(2) span': { text: 'E-mail' },
        '.contact-form > label:nth-of-type(1) span': { text: 'Onderwerp' },
        '.contact-form > label:nth-of-type(2) span': { text: 'Bericht' },
        'input[name="name"]': { placeholder: 'Jouw naam' },
        'input[name="email"]': { placeholder: 'Jouw e-mail' },
        'input[name="subject"]': { placeholder: 'Waarover gaat dit?' },
        'textarea[name="message"]': { placeholder: 'Schrijf je bericht...' },
        '.contact-form button[type="submit"]': { text: 'Verstuur bericht' },
        '.contact-form-aside h3': { text: 'Rechtstreeks naar inbox' },
        '.contact-form-aside p': { text: 'Berichten uit dit formulier worden verzonden naar seppe.vanroy@telenet.be.' },
        '.contact-form-aside ul li:nth-child(1)': { text: 'Ideaal voor stages en projectvragen' },
        '.contact-form-aside ul li:nth-child(2)': { text: 'Antwoord meestal op dezelfde dag' },
        '.contact-form-aside ul li:nth-child(3)': { text: 'GitHub en LinkedIn blijven ook beschikbaar' }
      }
    },
    en: {
      title: 'Seppe | Contact',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Contact' },
        '.hub-hero h1': { text: 'Let us build something strong' },
        '.hub-hero p': { text: 'Open to internships, student opportunities, and practical collaboration. Reach out through your preferred channel and I will get back to you.' },
        '.hub-grid-wrap .eyebrow': { text: 'Direct Channels' },
        '.hub-grid-wrap h2': { text: 'Pick the fastest way to connect' },
        '.contact-grid .hub-card:nth-child(1) span': { text: 'Send Email' },
        '.contact-grid .hub-card:nth-child(2) span': { text: 'View Profile' },
        '.contact-grid .hub-card:nth-child(3) span': { text: 'Connect' },
        '.contact-form-head .eyebrow': { text: 'Send a message' },
        '.contact-form-head h2': { text: 'Drop your details and I will reply by email' },
        '.contact-form-head p': { text: 'Use this for internships, collaboration, or a quick question. The message goes straight to my inbox.' },
        '.contact-form .contact-form-grid label:nth-child(1) span': { text: 'Name' },
        '.contact-form .contact-form-grid label:nth-child(2) span': { text: 'Email' },
        '.contact-form > label:nth-of-type(1) span': { text: 'Subject' },
        '.contact-form > label:nth-of-type(2) span': { text: 'Message' },
        'input[name="name"]': { placeholder: 'Your name' },
        'input[name="email"]': { placeholder: 'Your email' },
        'input[name="subject"]': { placeholder: 'What is this about?' },
        'textarea[name="message"]': { placeholder: 'Write your message...' },
        '.contact-form button[type="submit"]': { text: 'Send message' },
        '.contact-form-aside h3': { text: 'Direct inbox' },
        '.contact-form-aside p': { text: 'Messages from this form are sent to seppe.vanroy@telenet.be.' },
        '.contact-form-aside ul li:nth-child(1)': { text: 'Best for internships and project questions' },
        '.contact-form-aside ul li:nth-child(2)': { text: 'Reply usually goes through the same day' },
        '.contact-form-aside ul li:nth-child(3)': { text: 'GitHub and LinkedIn stay available too' }
      }
    }
  },
  'project-one.html': {
    nl: {
      title: 'Seppe | Project Een',
      selectors: {
        '.project-hero .eyebrow': { text: 'Project 01' },
        '.project-hero h1': { text: 'Dashboardconcept' },
        '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Een schoon dashboardconcept met focus op praktische informatiestructuur, snelle leesbaarheid en duidelijke actiepunten. Het doel was om dagelijkse taken eenvoudiger te maken door visuele ruis te verminderen terwijl belangrijke data goed zichtbaar blijft.' },
        '.hero-tags span:nth-child(1)': { text: 'UI Design' },
        '.hero-tags span:nth-child(2)': { text: 'Frontend Bouw' },
        '.hero-tags span:nth-child(3)': { text: 'Gebruiksvriendelijkheid' },
        '.hero-side-label': { text: 'Status' },
        '.hero-side h3': { text: 'Prototype Voltooid' },
        '.hero-facts li:nth-child(1)': { html: '<span>Rol</span> Designer + Developer' },
        '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> HTML, CSS, JavaScript' },
        '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Duidelijkheid en interactieflow' },
        '.project-impact .eyebrow': { text: 'Impactblokken' },
        '.project-impact h2': { text: 'Snel scannen, sneller handelen' },
        '.project-impact-grid article:nth-child(1) h3': { text: 'Signaal Eerst' },
        '.project-impact-grid article:nth-child(1) p': { text: 'Kritieke data staat bewust centraal zodat gebruikers eerst zien wat telt en dan pas details lezen.' },
        '.project-impact-grid article:nth-child(2) h3': { text: 'Minder Ruis' },
        '.project-impact-grid article:nth-child(2) p': { text: 'Spatiering en hierarchie halen rommel weg, waardoor operationele schermen mentaal lichter worden.' },
        '.project-impact-grid article:nth-child(3) h3': { text: 'Actieritme' },
        '.project-impact-grid article:nth-child(3) p': { text: 'Knoppen en statussen zijn per workflow gegroepeerd zodat gebruikers met minder twijfel door taken gaan.' },
        '.project-flow .eyebrow': { text: 'Uitvoeringsflow' },
        '.project-flow h2': { text: 'Hoe ik dit concept bouwde' },
        '.project-steps li:nth-child(1)': { html: '<strong>Map</strong> dagelijkse beslissingen die gebruikers in de eerste 30 seconden nemen.' },
        '.project-steps li:nth-child(2)': { html: '<strong>Prototype</strong> een layout met weinig ruis en strikte visuele prioriteiten.' },
        '.project-steps li:nth-child(3)': { html: '<strong>Verfijn</strong> micro-interacties en spacing tot lezen moeiteloos aanvoelt.' },
        '.portfolio-section:last-child .eyebrow': { text: 'Projectsamenvatting' },
        '.portfolio-section:last-child h2': { text: 'Wat dit project oplost' },
        '.portfolio-section:last-child .project-copy': { text: 'Dit concept organiseert informatie in kaarten en duidelijke secties zodat gebruikers prioriteiten meteen zien. Het gebruikt sterke hierarchie, heldere spacing en leesbaar contrast om beslissingen te versnellen.' },
        '.portfolio-section:last-child .panel-actions a:nth-child(1)': { text: 'Terug naar Home' },
        '.portfolio-section:last-child .panel-actions a:nth-child(2)': { text: 'Meer Projecten' }
      }
    },
    en: {
      title: 'Seppe | Project One',
      selectors: {
        '.project-hero .eyebrow': { text: 'Project 01' },
        '.project-hero h1': { text: 'Dashboard Concept' },
        '.project-hero .hero-main > p:not(.eyebrow)': { text: 'A clean dashboard concept focused on practical information structure, fast readability, and clear action points. The goal was to make daily tasks easier by reducing visual noise while keeping important data highly visible.' },
        '.hero-tags span:nth-child(1)': { text: 'UI Design' },
        '.hero-tags span:nth-child(2)': { text: 'Frontend Build' },
        '.hero-tags span:nth-child(3)': { text: 'Usability' },
        '.hero-side-label': { text: 'Status' },
        '.hero-side h3': { text: 'Prototype Complete' },
        '.hero-facts li:nth-child(1)': { html: '<span>Role</span> Designer + Developer' },
        '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> HTML, CSS, JavaScript' },
        '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Clarity and interaction flow' },
        '.project-impact .eyebrow': { text: 'Impact Blocks' },
        '.project-impact h2': { text: 'Fast scanning, faster actions' },
        '.project-impact-grid article:nth-child(1) h3': { text: 'Signal First' },
        '.project-impact-grid article:nth-child(1) p': { text: 'Critical data is intentionally elevated so users see what matters before they read details.' },
        '.project-impact-grid article:nth-child(2) h3': { text: 'Reduced Noise' },
        '.project-impact-grid article:nth-child(2) p': { text: 'Spacing and hierarchy remove clutter, making daily operation screens less mentally heavy.' },
        '.project-impact-grid article:nth-child(3) h3': { text: 'Action Rhythm' },
        '.project-impact-grid article:nth-child(3) p': { text: 'Buttons and states are grouped by workflow so users move through tasks with less hesitation.' },
        '.project-flow .eyebrow': { text: 'Execution Flow' },
        '.project-flow h2': { text: 'How I built this concept' },
        '.project-steps li:nth-child(1)': { html: '<strong>Map</strong> daily decisions users take in the first 30 seconds.' },
        '.project-steps li:nth-child(2)': { html: '<strong>Prototype</strong> a low-noise layout with strict visual priorities.' },
        '.project-steps li:nth-child(3)': { html: '<strong>Refine</strong> micro-interactions and spacing until reading speed feels effortless.' },
        '.portfolio-section:last-child .eyebrow': { text: 'Project Summary' },
        '.portfolio-section:last-child h2': { text: 'What this project solves' },
        '.portfolio-section:last-child .project-copy': { text: 'This concept organizes information in cards and clear sections so users can spot priorities instantly. It uses strong hierarchy, clear spacing, and readable contrast to improve decision speed.' },
        '.portfolio-section:last-child .panel-actions a:nth-child(1)': { text: 'Back To Home' },
        '.portfolio-section:last-child .panel-actions a:nth-child(2)': { text: 'More Projects' }
      }
    }
  },
  'project-two.html': {
    nl: {
      title: 'Seppe | Project Twee',
      selectors: {
        '.project-hero .eyebrow': { text: 'Project 02' },
        '.project-hero h1': { text: 'MissionZebra Samenwerking' },
        '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Een teamproject dat gezinnen helpt om schermtijd op een gezondere manier te plannen. Het product combineert planning, structuur en motiverende interacties om kinderen en ouders in dagelijkse digitale routines te ondersteunen.' },
        '.hero-tags span:nth-child(1)': { text: 'Teamproject' },
        '.hero-tags span:nth-child(2)': { text: 'Mobile-first' },
        '.hero-tags span:nth-child(3)': { text: 'Echte Gebruikers' },
        '.hero-side-label': { text: 'Status' },
        '.hero-side h3': { text: 'Live Product' },
        '.hero-facts li:nth-child(1)': { html: '<span>Rol</span> Teamlid' },
        '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> Flutter, Kotlin' },
        '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Gezinsworkflow-design' }
      }
    },
    en: {
      title: 'Seppe | Project Two',
      selectors: {
        '.project-hero .eyebrow': { text: 'Project 02' },
        '.project-hero h1': { text: 'MissionZebra Collaboration' },
        '.project-hero .hero-main > p:not(.eyebrow)': { text: 'A team-driven project focused on helping families plan screen time in a healthier way. The product combines planning, structure, and motivating interactions to support children and parents in daily digital routines.' },
        '.hero-tags span:nth-child(1)': { text: 'Team Project' },
        '.hero-tags span:nth-child(2)': { text: 'Mobile-first' },
        '.hero-tags span:nth-child(3)': { text: 'Real Users' },
        '.hero-side-label': { text: 'Status' },
        '.hero-side h3': { text: 'Live Product' },
        '.hero-facts li:nth-child(1)': { html: '<span>Role</span> Team Contributor' },
        '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> Flutter, Kotlin' },
        '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Family workflow design' }
      }
    }
  },
  'project-three.html': {
    nl: {
      title: 'Seppe | Project Drie',
      selectors: {
        '.project-hero .eyebrow': { text: 'Project 03' },
        '.project-hero h1': { text: 'Aurubis IT-bijdrage' },
        '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Praktische IT-support in een echte industriele context waar betrouwbaarheid cruciaal is. Het werk focuste op stabiele dagelijkse operaties, efficiente troubleshooting, en het verbeteren van workflows waar teams op vertrouwen.' },
        '.hero-tags span:nth-child(1)': { text: 'IT Operaties' },
        '.hero-tags span:nth-child(2)': { text: 'Troubleshooting' },
        '.hero-tags span:nth-child(3)': { text: 'Betrouwbaarheid' },
        '.hero-side-label': { text: 'Status' },
        '.hero-side h3': { text: 'Lopende Ervaring' },
        '.hero-facts li:nth-child(1)': { html: '<span>Rol</span> IT Support' },
        '.hero-facts li:nth-child(2)': { html: '<span>Context</span> Productie' },
        '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Stabiliteit en continuiteit' }
      }
    },
    en: {
      title: 'Seppe | Project Three',
      selectors: {
        '.project-hero .eyebrow': { text: 'Project 03' },
        '.project-hero h1': { text: 'Aurubis IT Contribution' },
        '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Practical IT support in a real industrial context where reliability is critical. The work focused on stable day-to-day operations, efficient troubleshooting, and improving workflows that teams depend on.' },
        '.hero-tags span:nth-child(1)': { text: 'IT Operations' },
        '.hero-tags span:nth-child(2)': { text: 'Troubleshooting' },
        '.hero-tags span:nth-child(3)': { text: 'Reliability' },
        '.hero-side-label': { text: 'Status' },
        '.hero-side h3': { text: 'Ongoing Experience' },
        '.hero-facts li:nth-child(1)': { html: '<span>Role</span> IT Support' },
        '.hero-facts li:nth-child(2)': { html: '<span>Context</span> Manufacturing' },
        '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Stability and continuity' }
      }
    }
  }
};

const applyPageTranslations = (lang) => {
  const pageName = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pageConfig = pageTranslations[pageName]?.[lang];
  if (!pageConfig) return;

  if (pageConfig.title) {
    document.title = pageConfig.title;
  }

  const selectors = pageConfig.selectors || {};
  Object.entries(selectors).forEach(([selector, update]) => {
    let element = null;
    try {
      element = document.querySelector(selector);
    } catch (error) {
      return;
    }
    if (!element) return;

    if (typeof update === 'string') {
      element.textContent = update;
      return;
    }

    if (update.text !== undefined) {
      element.textContent = update.text;
    }
    if (update.html !== undefined) {
      element.innerHTML = update.html;
    }
    if (update.placeholder !== undefined) {
      element.setAttribute('placeholder', update.placeholder);
    }
    if (update.ariaLabel !== undefined) {
      element.setAttribute('aria-label', update.ariaLabel);
    }
    if (update.title !== undefined) {
      element.setAttribute('title', update.title);
    }
  });
};

let currentLanguage = localStorage.getItem('language') || 'nl';

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
  const savedLang = localStorage.getItem('language') || 'nl';
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
  applyPageTranslations(lang);
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

const initActiveNavigation = () => {
  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href]'));
  if (navLinks.length === 0) return;

  const setActiveLink = (activeHref) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === activeHref;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const routeMap = {
    '': 'index.html',
    'index.html': 'index.html',
    'about.html': 'about.html',
    'projects.html': 'projects.html',
    'contact.html': 'contact.html',
    'project-one.html': 'projects.html',
    'project-two.html': 'projects.html',
    'project-three.html': 'projects.html'
  };

  setActiveLink(routeMap[currentPath] || 'index.html');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (link.classList.contains('lang-btn')) return;
      setActiveLink(link.getAttribute('href'));
    });
  });
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initLanguageSwitcher();
    initActiveNavigation();
  });
} else {
  initializeLanguage();
  initLanguageSwitcher();
  initActiveNavigation();
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

const initContactForm = () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactFormStatus');

  if (!form || !status) return;

  const submitButton = form.querySelector('button[type="submit"]');

  const buildMailto = (values) => {
    const subject = `Portfolio contact: ${values.subject}`;
    const body = [
      'New message from the portfolio contact form',
      '',
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Subject: ${values.subject}`,
      '',
      'Message:',
      values.message
    ].join('\n');

    return `mailto:seppe.vanroy@telenet.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.style.color = isError ? '#fca5a5' : '#9ee7ff';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const website = String(formData.get('website') || '').trim();

    if (website) {
      setStatus(currentLanguage === 'nl' ? 'Bericht verzonden.' : 'Message sent.', false);
      form.reset();
      return;
    }

    if (!name || !email || !subject || !message) {
      setStatus(currentLanguage === 'nl' ? 'Vul eerst alle velden in.' : 'Fill in all fields first.', true);
      return;
    }

    if (submitButton) submitButton.disabled = true;
    const mailto = buildMailto({ name, email, subject, message });

    setStatus(
      currentLanguage === 'nl'
        ? 'Je mailapp wordt geopend met het bericht klaar.'
        : 'Opening your mail app with the message ready.',
      false
    );

    window.location.href = mailto;
    if (submitButton) {
      window.setTimeout(() => {
        submitButton.disabled = false;
      }, 1200);
    }
  });
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
initContactForm();
initPortfolioAI();


