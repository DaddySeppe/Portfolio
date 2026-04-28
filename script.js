// ==== Language System ====
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      tag: 'SEPPE PORTFOLIO',
      title: 'IT Student',
      subtitle: 'I am Seppe, a second-year APP/AI student. I like learning new things, working on practical projects and improving myself step by step.',
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
        description: 'I am a second-year APP/AI student who learns fastest in real environments. My 2023 internship at Aurubis Olen and my current holiday work on their IT department shaped how I approach projects: clear thinking, reliable execution, and continuous growth.',
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
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      tag: 'SEPPE PORTFOLIO',
      title: 'IT Student',
      subtitle: 'Ik ben Seppe, een tweedejaars APP/AI-student. Ik hou ervan om nieuwe dingen te leren, aan praktische projecten te werken en mezelf stap voor stap te verbeteren.',
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
        description: 'Ik ben een tweedejaars APP/AI-student die het snelst in echte omgevingen leert. Mijn stage in 2023 bij Aurubis Olen en mijn huidige vakantiewerk in hun IT-afdeling hebben gevormd hoe ik projecten benader: helder denken, betrouwbare uitvoering en voortdurende groei.',
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

const pageTranslations = {};

pageTranslations['cv.html'] = {
  nl: {
    title: 'Seppe | CV',
    selectors: {
      '.cv-toolbar .eyebrow': { text: 'Curriculum vitae' },
      '.cv-toolbar h1': { text: 'CV Seppe Vanroy' },
      '.cv-toolbar p:not(.eyebrow)': { text: 'Een scanbare webversie van mijn CV, met daarnaast een downloadbare PDF-versie.' },
      '.cv-toolbar .btn-link:nth-child(1)': { text: 'Download PDF' },
      '.cv-toolbar .btn-link:nth-child(2)': { text: 'Terug naar Over Mij' },
      '.cv-sheet': { ariaLabel: 'CV van Seppe Vanroy' },
      '.cv-name-block p': { text: 'APP/AI student' },
      '.cv-sidebar .cv-block:nth-child(3) h3': { text: 'Contact' },
      '.cv-sidebar .cv-block:nth-child(4) h3': { text: 'Talen' },
      '.cv-sidebar .cv-block:nth-child(4) li:nth-child(1)': { text: 'Nederlands' },
      '.cv-sidebar .cv-block:nth-child(4) li:nth-child(2)': { text: 'Engels' },
      '.cv-sidebar .cv-block:nth-child(5) h3': { text: 'Soft skills' },
      '.cv-sidebar .cv-block:nth-child(5) li:nth-child(2)': { text: 'Communicatie' },
      '.cv-sidebar .cv-block:nth-child(5) li:nth-child(3)': { text: 'Leergierigheid' },
      '.cv-sidebar .cv-block:nth-child(5) li:nth-child(4)': { text: 'Betrouwbaarheid' },
      '.cv-section:nth-child(1) h3': { text: 'Profiel' },
      '.cv-section:nth-child(1) p': { text: 'Ik ben een tweedejaarsstudent APP/AI met interesse in webontwikkeling, praktische IT-support en gestructureerd projectwerk. Ik werk graag aan duidelijke oplossingen die professioneel ogen en echt bruikbaar zijn.' },
      '.cv-section:nth-child(2) h3': { text: 'Opleiding' },
      '.cv-section:nth-child(2) .cv-entry span': { text: 'Thomas More' },
      '.cv-section:nth-child(2) .cv-entry p': { text: 'Focus op applicatieontwikkeling, webontwikkeling, databases, AI-basis en projectmatig werken.' },
      '.cv-section:nth-child(3) h3': { text: 'Ervaring en projecten' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(2) strong': { text: 'Aurubis IT-ondersteuning' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(2) span': { text: 'Praktijkervaring' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(2) p': { text: 'Ondersteuning bij troubleshooting, dagelijkse IT-taken en communicatie in een professionele productieomgeving.' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(3) p': { text: 'Teamproject rond planning en gewoontes, met aandacht voor analyse, mobile-first schermen en samenwerking.' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(4) strong': { text: 'Portfolio website' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(4) span': { text: 'Eigen realisatie' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(4) p': { text: "Ontwerp en ontwikkeling van een persoonlijke portfolio met aparte pagina's voor projecten, CV en contact." },
      '.cv-section:nth-child(4) h3': { text: 'Technische skills' },
      '.cv-skill-grid span:nth-child(9)': { text: 'Flutter / Kotlin basis' },
      '.cv-skill-grid span:nth-child(10)': { text: 'IT-support' }
    }
  },
  en: {
    title: 'Seppe | CV',
    selectors: {
      '.cv-toolbar .eyebrow': { text: 'Curriculum vitae' },
      '.cv-toolbar h1': { text: 'CV Seppe Vanroy' },
      '.cv-toolbar p:not(.eyebrow)': { text: 'A scannable web version of my CV, with a downloadable PDF version next to it.' },
      '.cv-toolbar .btn-link:nth-child(1)': { text: 'Download PDF' },
      '.cv-toolbar .btn-link:nth-child(2)': { text: 'Back to About Me' },
      '.cv-sheet': { ariaLabel: 'CV of Seppe Vanroy' },
      '.cv-name-block p': { text: 'APP/AI student' },
      '.cv-sidebar .cv-block:nth-child(3) h3': { text: 'Contact' },
      '.cv-sidebar .cv-block:nth-child(4) h3': { text: 'Languages' },
      '.cv-sidebar .cv-block:nth-child(4) li:nth-child(1)': { text: 'Dutch' },
      '.cv-sidebar .cv-block:nth-child(4) li:nth-child(2)': { text: 'English' },
      '.cv-sidebar .cv-block:nth-child(5) h3': { text: 'Soft skills' },
      '.cv-sidebar .cv-block:nth-child(5) li:nth-child(2)': { text: 'Communication' },
      '.cv-sidebar .cv-block:nth-child(5) li:nth-child(3)': { text: 'Eagerness to learn' },
      '.cv-sidebar .cv-block:nth-child(5) li:nth-child(4)': { text: 'Reliability' },
      '.cv-section:nth-child(1) h3': { text: 'Profile' },
      '.cv-section:nth-child(1) p': { text: 'I am a second-year APP/AI student with an interest in web development, practical IT support, and structured project work. I like working on clear solutions that look professional and are genuinely useful.' },
      '.cv-section:nth-child(2) h3': { text: 'Education' },
      '.cv-section:nth-child(2) .cv-entry span': { text: 'Thomas More' },
      '.cv-section:nth-child(2) .cv-entry p': { text: 'Focus on application development, web development, databases, AI foundations, and project-based work.' },
      '.cv-section:nth-child(3) h3': { text: 'Experience and projects' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(2) strong': { text: 'Aurubis IT Support' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(2) span': { text: 'Practical experience' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(2) p': { text: 'Support with troubleshooting, daily IT tasks, and communication in a professional production environment.' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(3) p': { text: 'Team project around planning and habits, with attention to analysis, mobile-first screens, and collaboration.' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(4) strong': { text: 'Portfolio website' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(4) span': { text: 'Own realization' },
      '.cv-section:nth-child(3) .cv-entry:nth-child(4) p': { text: 'Design and development of a personal portfolio with separate pages for projects, CV, and contact.' },
      '.cv-section:nth-child(4) h3': { text: 'Technical skills' },
      '.cv-skill-grid span:nth-child(9)': { text: 'Flutter / Kotlin basics' },
      '.cv-skill-grid span:nth-child(10)': { text: 'IT support' }
    }
  }
};

pageTranslations['project-one.html'] = {
  nl: {
    title: 'Seppe | SKIL2 Semester 1',
    selectors: {
      '.project-hero .eyebrow': { text: 'SKIL2 Semester 1' },
      '.project-hero h1': { text: 'Eerste portfolio-opzet' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: dit was mijn eerste SKIL2-opdracht binnen Skill 2. Ik bouwde een eenvoudige portfolio-structuur om te tonen dat ik HTML, CSS en inhoud logisch kan samenbrengen in een nette pagina.' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Prototype voltooid' },
      '.hero-facts li:nth-child(1)': { html: '<span>Rol</span> Solo studentproject' },
      '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> HTML, CSS, basis JavaScript' },
      '.hero-facts li:nth-child(3)': { html: '<span>Vak</span> SKIL2 - semester 1' },
      '.project-impact .eyebrow': { text: 'Realisaties' },
      '.project-impact h2': { text: 'Wat ik effectief heb gemaakt' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Pagina-opbouw' },
      '.project-impact-grid article:nth-child(1) p': { text: 'Ik zette de inhoud op in duidelijke secties zodat de lezer snel snapt waar elke blok over gaat.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Visuele hiërarchie' },
      '.project-impact-grid article:nth-child(2) p': { text: 'Met titels, spacing en contrast oefende ik hoe je een pagina meteen professioneler laat aanvoelen.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Herbruikbare structuur' },
      '.project-impact-grid article:nth-child(3) p': { text: 'Ik werkte bewust met herhaalbare elementen zodat uitbreiden later eenvoudiger werd.' },
      '.project-flow .eyebrow': { text: 'Wat ik leerde' },
      '.project-flow h2': { text: 'Leerpunten uit semester 1' },
      '.project-steps li:nth-child(1)': { html: '<strong>Analyse</strong> bepalen wat een bezoeker eerst moet zien en welke info later kan komen.' },
      '.project-steps li:nth-child(2)': { html: '<strong>Realisatie</strong> een duidelijke HTML-structuur maken die later goed uitbreidbaar blijft.' },
      '.project-steps li:nth-child(3)': { html: '<strong>Communicatie</strong> inhoud professioneel brengen, zonder overbodige ruis.' },
      '.portfolio-section:last-child .eyebrow': { text: 'Mijn deel' },
      '.portfolio-section:last-child h2': { text: 'Waar ik zelf voor instond' },
      '.portfolio-section:last-child .project-copy': { text: 'Dit project was volledig mijn eigen oefening. Ik maakte de structuur, koos de inhoud en werkte de presentatie af om te tonen dat ik de basis van een nette portfolio beheer.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Terug naar Projecten' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'Bekijk mijn CV' }
    }
  },
  en: {
    title: 'Seppe | SKIL2 Semester 1',
    selectors: {
      '.project-hero .eyebrow': { text: 'SKIL2 Semester 1' },
      '.project-hero h1': { text: 'First portfolio setup' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: this was my first SKIL2 assignment in Skill 2. I built a simple portfolio structure to show that I can combine HTML, CSS, and content logically in a clean page.' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Prototype completed' },
      '.hero-facts li:nth-child(1)': { html: '<span>Role</span> Solo student project' },
      '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> HTML, CSS, basic JavaScript' },
      '.hero-facts li:nth-child(3)': { html: '<span>Course</span> SKIL2 - semester 1' },
      '.project-impact .eyebrow': { text: 'Realizations' },
      '.project-impact h2': { text: 'What I actually built' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Page structure' },
      '.project-impact-grid article:nth-child(1) p': { text: 'I organized the content into clear sections so the reader quickly understands what each block is about.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Visual hierarchy' },
      '.project-impact-grid article:nth-child(2) p': { text: 'With headings, spacing, and contrast, I practiced how to make a page feel more professional right away.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Reusable structure' },
      '.project-impact-grid article:nth-child(3) p': { text: 'I consciously worked with repeatable elements so expanding the site later became easier.' },
      '.project-flow .eyebrow': { text: 'What I learned' },
      '.project-flow h2': { text: 'Learning points from semester 1' },
      '.project-steps li:nth-child(1)': { html: '<strong>Analysis</strong> decide what a visitor should see first and which information can come later.' },
      '.project-steps li:nth-child(2)': { html: '<strong>Realization</strong> create a clear HTML structure that remains easy to expand later.' },
      '.project-steps li:nth-child(3)': { html: '<strong>Communication</strong> present content professionally, without unnecessary noise.' },
      '.portfolio-section:last-child .eyebrow': { text: 'My part' },
      '.portfolio-section:last-child h2': { text: 'What I was responsible for' },
      '.portfolio-section:last-child .project-copy': { text: 'This project was fully my own exercise. I created the structure, chose the content, and finished the presentation to show that I understand the basics of a clean portfolio.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Back to Projects' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'View my CV' }
    }
  }
};

Object.assign(pageTranslations, {
  'index.html': {
    nl: {
      title: 'Seppe | Home',
      selectors: {
        '.neo-window-top p': { text: 'Portfolio v2' },
        '.neo-kicker': { text: 'APP/AI Student' },
        '.neo-hero h1': { text: 'Hallo, ik ben Seppe Vanroy.' },
        '.neo-text': { text: 'Ik ben een tweedejaarsstudent APP/AI die graag dingen maakt die echt werken. Via projecten zoals MissionZebra, mijn portfolio en IT-ondersteuning bij Aurubis leer ik stap voor stap hoe je technische kennis omzet in duidelijke, bruikbare oplossingen.' },
        '.neo-btn': { text: 'Lees Meer' },
        '.neo-link': { text: 'Mail Mij' },
        '.neo-projects h2': { text: 'Uitgelichte Projecten' },
        '.neo-card:nth-child(1) h3': { text: 'Aurubis IT-ondersteuning' },
        '.neo-card:nth-child(1) p': { text: 'Troubleshooting en support in een echte productieomgeving.' },
        '.neo-card:nth-child(2) h3': { text: 'SKIL2 Semester 2' },
        '.neo-card:nth-child(2) p': { text: 'MissionZebra als teamproject rond planning en mobile-first flows.' },
        '.neo-card:nth-child(3) h3': { text: 'Portfolio Website' },
        '.neo-card:nth-child(3) p': { text: 'Mijn eigen website met focus op structuur, inhoud en presentatie.' },
        '.neo-card:nth-child(4) h3': { text: 'SKIL2 Semester 1' },
        '.neo-card:nth-child(4) p': { text: 'Mijn eerste portfolio-opzet met HTML, CSS en duidelijke inhoud.' },
        '.neo-side .neo-panel:nth-child(1) h2': { text: 'Over Mij' },
        '.neo-side .neo-panel:nth-child(1) p': { text: 'Ik ben iemand die graag rustig uitzoekt hoe iets werkt en het daarna beter probeert te maken. In APP/AI wil ik vooral groeien in web, applicaties en slimme oplossingen die mensen echt kunnen gebruiken.' },
        '#contact h2': { text: 'Contacteer Mij' },
        '#contact input[name="name"]': { placeholder: 'Naam', ariaLabel: 'Naam' },
        '#contact input[name="email"]': { placeholder: 'E-mail', ariaLabel: 'E-mail' },
        '#contact textarea[name="message"]': { placeholder: 'Bericht', ariaLabel: 'Bericht' },
        '#contact button[type="submit"]': { text: 'Verstuur' },
        '.cta-hero .cta-eyebrow': { text: 'KLAAR OM SAMEN TE WERKEN?' },
        '.cta-hero h2': { text: 'Laten we samen iets sterk bouwen' },
        '.cta-hero .cta-content > p:not(.cta-eyebrow)': { text: 'Of je nu een projectidee hebt, technische vragen of gewoon wil praten: ik ben er klaar voor.' },
        '.cta-btn-primary': { text: 'Bekijk Mijn Werk' },
        '.cta-btn-secondary': { text: 'Neem Contact Op' }
      }
    },
    en: {
      title: 'Seppe | Home',
      selectors: {
        '.neo-window-top p': { text: 'Portfolio v2' },
        '.neo-kicker': { text: 'APP/AI Student' },
        '.neo-hero h1': { text: 'Hi, I am Seppe Vanroy.' },
        '.neo-text': { text: 'I am a second-year APP/AI student who likes building things that actually work. Through projects like MissionZebra, my portfolio, and IT support at Aurubis, I learn step by step how to turn technical knowledge into clear, useful solutions.' },
        '.neo-btn': { text: 'Read More' },
        '.neo-link': { text: 'Email Me' },
        '.neo-projects h2': { text: 'Featured Projects' },
        '.neo-card:nth-child(1) h3': { text: 'Aurubis IT Support' },
        '.neo-card:nth-child(1) p': { text: 'Troubleshooting and support in a real production environment.' },
        '.neo-card:nth-child(2) h3': { text: 'SKIL2 Semester 2' },
        '.neo-card:nth-child(2) p': { text: 'MissionZebra as a team project around planning and mobile-first flows.' },
        '.neo-card:nth-child(3) h3': { text: 'Portfolio Website' },
        '.neo-card:nth-child(3) p': { text: 'My own website with focus on structure, content, and presentation.' },
        '.neo-card:nth-child(4) h3': { text: 'SKIL2 Semester 1' },
        '.neo-card:nth-child(4) p': { text: 'My first portfolio setup with HTML, CSS, and clear content.' },
        '.neo-side .neo-panel:nth-child(1) h2': { text: 'About Me' },
        '.neo-side .neo-panel:nth-child(1) p': { text: 'I like calmly figuring out how something works and then trying to make it better. In APP/AI, I mainly want to grow in web, applications, and smart solutions people can actually use.' },
        '#contact h2': { text: 'Contact Me' },
        '#contact input[name="name"]': { placeholder: 'Name', ariaLabel: 'Name' },
        '#contact input[name="email"]': { placeholder: 'Email', ariaLabel: 'Email' },
        '#contact textarea[name="message"]': { placeholder: 'Message', ariaLabel: 'Message' },
        '#contact button[type="submit"]': { text: 'Send' },
        '.cta-hero .cta-eyebrow': { text: 'READY TO WORK TOGETHER?' },
        '.cta-hero h2': { text: 'Let us build something strong together' },
        '.cta-hero .cta-content > p:not(.cta-eyebrow)': { text: 'Whether you have a project idea, technical questions, or just want to talk: I am ready.' },
        '.cta-btn-primary': { text: 'View My Work' },
        '.cta-btn-secondary': { text: 'Contact Me' }
      }
    }
  },
  'about.html': {
    nl: {
      title: 'Seppe | Over Mij',
      selectors: {
        '.hero-eyebrow-mega': { text: 'WIE IK BEN' },
        '.hero-title-giant': { text: 'Seppe Vanroy' },
        '.hero-intro-text': { text: 'Tweedejaarsstudent APP/AI met een praktische blik op IT, een rustige werkstijl en veel interesse in oplossingen die echt gebruikt kunnen worden.' },
        '.hero-stats-ultra .stat-block:nth-child(1) .stat-label': { text: 'Applicatieontwikkeling en AI' },
        '.hero-stats-ultra .stat-block:nth-child(2) .stat-label': { text: 'Praktijkgericht' },
        '.hero-stats-ultra .stat-block:nth-child(3) .stat-label': { text: 'Bekijk en download' },
        '.section-header-centered .section-eyebrow': { text: 'OVER MIJ' },
        '.section-header-centered h2': { text: 'Wie ik ben naast mijn studies' },
        '.skills-matrix .skill-card-large:nth-child(1) h3': { text: "Hobby's" },
        '.skills-matrix .skill-card-large:nth-child(1) p': { text: 'Ik hou van lopen, fietsen, muziek ontdekken en af en toe experimenteren met hardware of kleine technische projecten. Die combinatie helpt mij om creatief en geconcentreerd te blijven.' },
        '.skills-matrix .skill-card-large:nth-child(2) h3': { text: 'Waarom APP/AI' },
        '.skills-matrix .skill-card-large:nth-child(2) p': { text: 'Ik koos voor APP/AI omdat ik graag applicaties bouw, systemen begrijp en wil leren hoe AI praktische oplossingen sterker kan maken.' },
        '.skills-matrix .skill-card-large:nth-child(3) h3': { text: 'Toekomst' },
        '.skills-matrix .skill-card-large:nth-child(3) p': { text: 'Ik wil doorgroeien naar een rol waarin ik software, support of infrastructuur combineer met duidelijke communicatie en betrouwbare uitvoering.' },
        '.skills-matrix .skill-card-large:nth-child(4) h3': { text: 'CV' },
        '.skills-matrix .skill-card-large:nth-child(4) p': { text: 'Mijn CV staat apart op een eigen pagina en kan ook direct als pdf worden gedownload zodra je het bestand in deze map zet.' },
        '.skills-matrix .skill-card-large:nth-child(4) .btn-link:nth-child(1)': { text: 'Bekijk CV' },
        '.showcase-text .section-eyebrow': { text: 'VAARDIGHEDEN' },
        '.showcase-text h2': { text: 'Een extract uit mijn CV in HTML-vorm' },
        '.showcase-text > p:not(.section-eyebrow)': { text: 'Deze lijst is expres in HTML opgebouwd zodat de jury meteen ziet welke technische en soft skills ik meebreng.' },
        '.experience-list .exp-item:nth-child(1) span': { text: 'Basis voor webinterfaces en interactieve portfolio’s' },
        '.experience-list .exp-item:nth-child(2) span': { text: 'Back-end, data en probleemoplossing' },
        '.experience-list .exp-item:nth-child(3) strong': { text: 'Communicatie, teamwork, leergierigheid' },
        '.experience-list .exp-item:nth-child(3) span': { text: 'Belangrijk in projecten, stage en samenwerking' },
        '.experience-list .exp-item:nth-child(4) strong': { text: 'Betrouwbaarheid en structuur' },
        '.experience-list .exp-item:nth-child(4) span': { text: 'Ik werk graag ordelijk en lever af waar ik voor ga' },
        '.highlight-card-1 h3': { text: 'Motivatie' },
        '.highlight-card-1 p': { text: 'Ik wil begrijpen hoe dingen werken en daar zelf mee iets bouwen dat nuttig is.' },
        '.highlight-card-2 h3': { text: 'Werkstijl' },
        '.highlight-card-2 p': { text: 'Rustig, gestructureerd en met aandacht voor details, maar wel met tempo als het nodig is.' },
        '.highlight-card-3 h3': { text: 'Doel' },
        '.highlight-card-3 p': { text: 'Doorgroeien naar een stage of job waar ik projecten professioneel kan ondersteunen en afwerken.' },
        '.call-to-action-ultra .cta-eyebrow': { text: 'CV EN CONTACT' },
        '.call-to-action-ultra h2': { text: 'Bekijk mijn CV of open de download' },
        '.call-to-action-ultra .cta-description': { text: 'De CV staat op een aparte pagina, en de pdf-link is alvast klaar voor wanneer je hem in de map plaatst.' },
        '.call-to-action-ultra .btn-primary': { text: 'Open CV' }
      }
    },
    en: {
      title: 'Seppe | About Me',
      selectors: {
        '.hero-eyebrow-mega': { text: 'WHO I AM' },
        '.hero-title-giant': { text: 'Seppe Vanroy' },
        '.hero-intro-text': { text: 'Second-year APP/AI student with a practical view on IT, a calm working style, and a strong interest in solutions that can actually be used.' },
        '.hero-stats-ultra .stat-block:nth-child(1) .stat-label': { text: 'Application Development and AI' },
        '.hero-stats-ultra .stat-block:nth-child(2) .stat-label': { text: 'Practice-oriented' },
        '.hero-stats-ultra .stat-block:nth-child(3) .stat-label': { text: 'View and download' },
        '.section-header-centered .section-eyebrow': { text: 'ABOUT ME' },
        '.section-header-centered h2': { text: 'Who I am besides my studies' },
        '.skills-matrix .skill-card-large:nth-child(1) h3': { text: 'Hobbies' },
        '.skills-matrix .skill-card-large:nth-child(1) p': { text: 'I enjoy running, cycling, discovering music, and sometimes experimenting with hardware or small technical projects. That combination helps me stay creative and focused.' },
        '.skills-matrix .skill-card-large:nth-child(2) h3': { text: 'Why APP/AI' },
        '.skills-matrix .skill-card-large:nth-child(2) p': { text: 'I chose APP/AI because I like building applications, understanding systems, and learning how AI can make practical solutions stronger.' },
        '.skills-matrix .skill-card-large:nth-child(3) h3': { text: 'Future' },
        '.skills-matrix .skill-card-large:nth-child(3) p': { text: 'I want to grow into a role where I combine software, support, or infrastructure with clear communication and reliable execution.' },
        '.skills-matrix .skill-card-large:nth-child(4) h3': { text: 'CV' },
        '.skills-matrix .skill-card-large:nth-child(4) p': { text: 'My CV has its own separate page and can also be downloaded as a PDF once the file is placed in this folder.' },
        '.skills-matrix .skill-card-large:nth-child(4) .btn-link:nth-child(1)': { text: 'View CV' },
        '.showcase-text .section-eyebrow': { text: 'SKILLS' },
        '.showcase-text h2': { text: 'An extract from my CV in HTML format' },
        '.showcase-text > p:not(.section-eyebrow)': { text: 'This list is intentionally built in HTML so the jury can immediately see which technical and soft skills I bring.' },
        '.experience-list .exp-item:nth-child(1) span': { text: 'Foundation for web interfaces and interactive portfolios' },
        '.experience-list .exp-item:nth-child(2) span': { text: 'Back-end, data, and problem solving' },
        '.experience-list .exp-item:nth-child(3) strong': { text: 'Communication, teamwork, eagerness to learn' },
        '.experience-list .exp-item:nth-child(3) span': { text: 'Important in projects, internships, and collaboration' },
        '.experience-list .exp-item:nth-child(4) strong': { text: 'Reliability and structure' },
        '.experience-list .exp-item:nth-child(4) span': { text: 'I like working in an organized way and delivering what I commit to' },
        '.highlight-card-1 h3': { text: 'Motivation' },
        '.highlight-card-1 p': { text: 'I want to understand how things work and use that knowledge to build something useful.' },
        '.highlight-card-2 h3': { text: 'Working Style' },
        '.highlight-card-2 p': { text: 'Calm, structured, and attentive to details, while still keeping pace when needed.' },
        '.highlight-card-3 h3': { text: 'Goal' },
        '.highlight-card-3 p': { text: 'Grow into an internship or job where I can support and finish projects professionally.' },
        '.call-to-action-ultra .cta-eyebrow': { text: 'CV AND CONTACT' },
        '.call-to-action-ultra h2': { text: 'View my CV or open the download' },
        '.call-to-action-ultra .cta-description': { text: 'The CV is on a separate page, and the PDF link is ready for when the file is placed in the folder.' },
        '.call-to-action-ultra .btn-primary': { text: 'Open CV' }
      }
    }
  },
  'projects.html': {
    nl: {
      title: 'Seppe | Projecten',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Projectoverzicht' },
        '.hub-hero h1': { text: 'Projecten en realisaties' },
        '.hub-hero .hero-main > p:not(.eyebrow)': { text: 'Hier staan de twee verplichte SKIL2-projecten, plus twee extra realisaties waar ik trots op ben. De meest indrukwekkende resultaten staan bovenaan.' },
        '.hub-grid-wrap .eyebrow': { text: 'Kies Je Pad' },
        '.hub-grid-wrap h2': { text: 'Vier projecten, vier verhalen' },
        '.hub-card:nth-child(1) h3': { text: 'Aurubis IT-ondersteuning' },
        '.hub-card:nth-child(1) p': { text: 'Praktische support en troubleshooting in een professionele productieomgeving.' },
        '.hub-card:nth-child(2) h3': { text: 'SKIL2 Semester 2' },
        '.hub-card:nth-child(2) p': { text: 'MissionZebra en de bijhorende flow: een teamproject dat nog verder werd uitgewerkt.' },
        '.hub-card:nth-child(3) h3': { text: 'Portfolio Website' },
        '.hub-card:nth-child(3) p': { text: 'Mijn eigen portfolio als presentatie van wie ik ben, wat ik maak en waar ik naartoe wil.' },
        '.hub-card:nth-child(4) h3': { text: 'SKIL2 Semester 1' },
        '.hub-card:nth-child(4) p': { text: 'De eerste portfolio- en weboefeningen waarin ik mijn basis in HTML, CSS en structuur toonde.' },
        '.hub-card:nth-child(1) span': { text: 'Open Project' },
        '.hub-card:nth-child(2) span': { text: 'Open Project' },
        '.hub-card:nth-child(3) span': { text: 'Open Project' },
        '.hub-card:nth-child(4) span': { text: 'Open Project' }
      }
    },
    en: {
      title: 'Seppe | Projects',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Project Overview' },
        '.hub-hero h1': { text: 'Projects and achievements' },
        '.hub-hero .hero-main > p:not(.eyebrow)': { text: 'This page includes the two required SKIL2 projects, plus two extra achievements I am proud of. The most impressive results are shown first.' },
        '.hub-grid-wrap .eyebrow': { text: 'Choose Your Path' },
        '.hub-grid-wrap h2': { text: 'Four projects, four stories' },
        '.hub-card:nth-child(1) h3': { text: 'Aurubis IT Support' },
        '.hub-card:nth-child(1) p': { text: 'Practical support and troubleshooting in a professional production environment.' },
        '.hub-card:nth-child(2) h3': { text: 'SKIL2 Semester 2' },
        '.hub-card:nth-child(2) p': { text: 'MissionZebra and the related flow: a team project that was developed further.' },
        '.hub-card:nth-child(3) h3': { text: 'Portfolio Website' },
        '.hub-card:nth-child(3) p': { text: 'My own portfolio as a presentation of who I am, what I make, and where I want to go.' },
        '.hub-card:nth-child(4) h3': { text: 'SKIL2 Semester 1' },
        '.hub-card:nth-child(4) p': { text: 'The first portfolio and web exercises where I showed my foundation in HTML, CSS, and structure.' },
        '.hub-card:nth-child(1) span': { text: 'Open Project' },
        '.hub-card:nth-child(2) span': { text: 'Open Project' },
        '.hub-card:nth-child(3) span': { text: 'Open Project' },
        '.hub-card:nth-child(4) span': { text: 'Open Project' }
      }
    }
  },
  'contact.html': {
    nl: {
      title: 'Seppe | Contact',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Contact' },
        '.hub-hero h1': { text: 'Laten we iets sterk bouwen' },
        '.hub-hero .hero-main > p:not(.eyebrow)': { text: 'Open voor stages, studentenkansen en praktische samenwerking. Neem contact op via je voorkeurskanaal en ik kom bij je terug.' },
        '.hub-grid-wrap .eyebrow': { text: 'Directe Kanalen' },
        '.hub-grid-wrap h2': { text: 'Kies de snelste manier om te connecteren' },
        '.contact-grid .hub-card:nth-child(1) h3': { text: 'E-mail' },
        '.contact-grid .hub-card:nth-child(1) span': { text: 'Stuur E-mail' },
        '.contact-grid .hub-card:nth-child(2) span': { text: 'Bekijk Profiel' },
        '.contact-grid .hub-card:nth-child(3) span': { text: 'Connecteer' },
        '.contact-form-head .eyebrow': { text: 'Stuur een bericht' },
        '.contact-form-head h2': { text: 'Laat je gegevens achter en ik antwoord via e-mail' },
        '.contact-form-head p:not(.eyebrow)': { text: 'Gebruik dit voor stages, samenwerking of een snelle vraag. Het bericht gaat rechtstreeks naar mijn inbox.' },
        '.contact-form-grid label:nth-child(1) span': { text: 'Naam' },
        '.contact-form-grid label:nth-child(2) span': { text: 'E-mail' },
        '.contact-form > label:nth-of-type(1) span': { text: 'Onderwerp' },
        '.contact-form > label:nth-of-type(2) span': { text: 'Bericht' },
        '.contact-form input[name="name"]': { placeholder: 'Jouw naam' },
        '.contact-form input[name="email"]': { placeholder: 'Jouw e-mail' },
        '.contact-form input[name="subject"]': { placeholder: 'Waarover gaat dit?' },
        '.contact-form textarea[name="message"]': { placeholder: 'Schrijf je bericht...' },
        '.contact-form button[type="submit"]': { text: 'Verstuur bericht' },
        '.contact-form-aside h3': { text: 'Rechtstreeks naar inbox' },
        '.contact-form-aside p': { html: 'Berichten uit dit formulier worden verzonden naar <a href="mailto:seppe.vanroy@telenet.be">seppe.vanroy@telenet.be</a>.' },
        '.contact-form-aside li:nth-child(1)': { text: 'Ideaal voor stages en projectvragen' },
        '.contact-form-aside li:nth-child(2)': { text: 'Antwoord meestal op dezelfde dag' },
        '.contact-form-aside li:nth-child(3)': { text: 'GitHub en LinkedIn blijven ook beschikbaar' }
      }
    },
    en: {
      title: 'Seppe | Contact',
      selectors: {
        '.hub-hero .eyebrow': { text: 'Contact' },
        '.hub-hero h1': { text: 'Let us build something strong' },
        '.hub-hero .hero-main > p:not(.eyebrow)': { text: 'Open to internships, student opportunities, and practical collaboration. Contact me through your preferred channel and I will get back to you.' },
        '.hub-grid-wrap .eyebrow': { text: 'Direct Channels' },
        '.hub-grid-wrap h2': { text: 'Choose the fastest way to connect' },
        '.contact-grid .hub-card:nth-child(1) h3': { text: 'Email' },
        '.contact-grid .hub-card:nth-child(1) span': { text: 'Send Email' },
        '.contact-grid .hub-card:nth-child(2) span': { text: 'View Profile' },
        '.contact-grid .hub-card:nth-child(3) span': { text: 'Connect' },
        '.contact-form-head .eyebrow': { text: 'Send a message' },
        '.contact-form-head h2': { text: 'Leave your details and I will reply by email' },
        '.contact-form-head p:not(.eyebrow)': { text: 'Use this for internships, collaboration, or a quick question. The message goes straight to my inbox.' },
        '.contact-form-grid label:nth-child(1) span': { text: 'Name' },
        '.contact-form-grid label:nth-child(2) span': { text: 'Email' },
        '.contact-form > label:nth-of-type(1) span': { text: 'Subject' },
        '.contact-form > label:nth-of-type(2) span': { text: 'Message' },
        '.contact-form input[name="name"]': { placeholder: 'Your name' },
        '.contact-form input[name="email"]': { placeholder: 'Your email' },
        '.contact-form input[name="subject"]': { placeholder: 'What is this about?' },
        '.contact-form textarea[name="message"]': { placeholder: 'Write your message...' },
        '.contact-form button[type="submit"]': { text: 'Send message' },
        '.contact-form-aside h3': { text: 'Straight to inbox' },
        '.contact-form-aside p': { html: 'Messages from this form are sent to <a href="mailto:seppe.vanroy@telenet.be">seppe.vanroy@telenet.be</a>.' },
        '.contact-form-aside li:nth-child(1)': { text: 'Ideal for internships and project questions' },
        '.contact-form-aside li:nth-child(2)': { text: 'Usually replies the same day' },
        '.contact-form-aside li:nth-child(3)': { text: 'GitHub and LinkedIn remain available too' }
      }
    }
  }
});

pageTranslations['project-two.html'] = {
  nl: {
    title: 'Seppe | SKIL2 Semester 2',
    selectors: {
      '.project-hero .eyebrow': { text: 'SKIL2 Semester 2' },
      '.project-hero h1': { text: 'MissionZebra prototype' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: dit is het SKIL2-project van semester 2 dat tot nu toe werd uitgewerkt. Het idee draait rond planning en gewoontevorming voor gezinnen, met focus op een duidelijke flow en een bruikbare mobiele ervaring.' },
      '.hero-tags span:nth-child(1)': { text: 'Teamproject' },
      '.hero-tags span:nth-child(2)': { text: 'Mobile-first' },
      '.hero-tags span:nth-child(3)': { text: 'Planning' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Verder uitgewerkt' },
      '.hero-facts li:nth-child(1)': { html: '<span>Rol</span> Teamlid' },
      '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> Flutter, Kotlin' },
      '.hero-facts li:nth-child(3)': { html: '<span>Vak</span> SKIL2 - semester 2' },
      '.project-impact .eyebrow': { text: 'Realisaties' },
      '.project-impact h2': { text: 'Wat er al klaar is' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Planningflow' },
      '.project-impact-grid article:nth-child(1) p': { text: 'Ik hielp mee aan een structuur waarin afspraken en schermtijd op een begrijpelijke manier samenkomen.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Prototype-opbouw' },
      '.project-impact-grid article:nth-child(2) p': { text: 'We werkten aan schermen en interacties die het idee tastbaar maken zonder de gebruiker te overladen.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Gebruiksklaar denken' },
      '.project-impact-grid article:nth-child(3) p': { text: 'De focus lag op iets dat ouders en kinderen echt zouden begrijpen en willen gebruiken.' },
      '.project-flow .eyebrow': { text: 'Mijn deel' },
      '.project-flow h2': { text: 'Wat ik zelf deed binnen het team' },
      '.project-steps li:nth-child(1)': { html: '<strong>Analyse</strong> de basisbehoefte vertalen naar een eenvoudige gebruiksstroom.' },
      '.project-steps li:nth-child(2)': { html: '<strong>Realisatie</strong> meewerken aan schermen, logica en de opbouw van de prototype-ervaring.' },
      '.project-steps li:nth-child(3)': { html: '<strong>Communicatie</strong> in het team afstemmen zodat de flow helder en de scope haalbaar bleef.' },
      '.portfolio-section:last-child .eyebrow': { text: 'Wat ik geleerd heb' },
      '.portfolio-section:last-child h2': { text: 'Leerpunten uit semester 2' },
      '.portfolio-section:last-child .project-copy': { text: 'Ik leerde hoe je in teamverband een idee afbakent, keuzes bespreekbaar maakt en samen iets opbouwt dat verder kan groeien.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Terug naar Projecten' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'Volgend project' }
    }
  },
  en: {
    title: 'Seppe | SKIL2 Semester 2',
    selectors: {
      '.project-hero .eyebrow': { text: 'SKIL2 Semester 2' },
      '.project-hero h1': { text: 'MissionZebra prototype' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: this is the SKIL2 project from semester 2 that has been developed so far. The idea focuses on planning and habit building for families, with a clear flow and a usable mobile experience.' },
      '.hero-tags span:nth-child(1)': { text: 'Team project' },
      '.hero-tags span:nth-child(2)': { text: 'Mobile-first' },
      '.hero-tags span:nth-child(3)': { text: 'Planning' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Further developed' },
      '.hero-facts li:nth-child(1)': { html: '<span>Role</span> Team member' },
      '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> Flutter, Kotlin' },
      '.hero-facts li:nth-child(3)': { html: '<span>Course</span> SKIL2 - semester 2' },
      '.project-impact .eyebrow': { text: 'Realizations' },
      '.project-impact h2': { text: 'What is already finished' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Planning flow' },
      '.project-impact-grid article:nth-child(1) p': { text: 'I helped build a structure where agreements and screen time come together in an understandable way.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Prototype setup' },
      '.project-impact-grid article:nth-child(2) p': { text: 'We worked on screens and interactions that make the idea tangible without overwhelming the user.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Usability thinking' },
      '.project-impact-grid article:nth-child(3) p': { text: 'The focus was on something parents and children would actually understand and want to use.' },
      '.project-flow .eyebrow': { text: 'My part' },
      '.project-flow h2': { text: 'What I did within the team' },
      '.project-steps li:nth-child(1)': { html: '<strong>Analysis</strong> translate the basic need into a simple user flow.' },
      '.project-steps li:nth-child(2)': { html: '<strong>Realization</strong> contribute to screens, logic, and the structure of the prototype experience.' },
      '.project-steps li:nth-child(3)': { html: '<strong>Communication</strong> align within the team so the flow stayed clear and the scope remained realistic.' },
      '.portfolio-section:last-child .eyebrow': { text: 'What I learned' },
      '.portfolio-section:last-child h2': { text: 'Learning points from semester 2' },
      '.portfolio-section:last-child .project-copy': { text: 'I learned how to define an idea in a team, discuss choices clearly, and build something together that can continue to grow.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Back to Projects' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'Next project' }
    }
  }
};

pageTranslations['project-three.html'] = {
  nl: {
    title: 'Seppe | Aurubis IT-ondersteuning',
    selectors: {
      '.project-hero .eyebrow': { text: 'Andere realisatie' },
      '.project-hero h1': { text: 'Aurubis IT-ondersteuning' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: stage en latere ondersteuning in een echte industriële omgeving waar betrouwbaarheid telt. Ik hielp mee met dagelijkse IT-taken, troubleshooting en onderhoud in een professionele context.' },
      '.hero-tags span:nth-child(1)': { text: 'IT Support' },
      '.hero-tags span:nth-child(2)': { text: 'Operaties' },
      '.hero-tags span:nth-child(3)': { text: 'Betrouwbaarheid' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Praktijkervaring' },
      '.hero-facts li:nth-child(1)': { html: '<span>Rol</span> IT Support' },
      '.hero-facts li:nth-child(2)': { html: '<span>Context</span> Productieomgeving' },
      '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Stabiliteit en continuïteit' },
      '.project-impact .eyebrow': { text: 'Realisaties' },
      '.project-impact h2': { text: 'Wat ik daar effectief deed' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Troubleshooting' },
      '.project-impact-grid article:nth-child(1) p': { text: 'Ik hielp bij het opsporen en oplossen van technische problemen zodat collega’s verder konden werken.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Onderhoud' },
      '.project-impact-grid article:nth-child(2) p': { text: 'Ik ondersteunde configuratie, update-werk en algemene IT-handelingen in een operationele omgeving.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Teamwerking' },
      '.project-impact-grid article:nth-child(3) p': { text: 'Ik werkte duidelijk en professioneel samen zodat taken correct en tijdig werden opgevolgd.' },
      '.project-flow .eyebrow': { text: 'Wat ik geleerd heb' },
      '.project-flow h2': { text: 'Leerpunten uit de praktijk' },
      '.project-steps li:nth-child(1)': { html: '<strong>Analyse</strong> problemen rustiger onderzoeken door naar de oorzaak te kijken in plaats van enkel naar het symptoom.' },
      '.project-steps li:nth-child(2)': { html: '<strong>Operate</strong> ondersteuning bieden in een omgeving waar stabiliteit en opvolging belangrijk zijn.' },
      '.project-steps li:nth-child(3)': { html: '<strong>Professioneel handelen</strong> duidelijk communiceren en verantwoordelijkheid opnemen.' },
      '.portfolio-section:last-child .eyebrow': { text: 'Mijn deel' },
      '.portfolio-section:last-child h2': { text: 'Waar ik zelf voor instond' },
      '.portfolio-section:last-child .project-copy': { text: 'Ik droeg bij aan het dagelijks werk door praktische support te geven, problemen mee op te lossen en de omgeving stabiel te houden. Dat maakte dit een waardevolle stap richting professioneel werken.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Terug naar Projecten' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'Volgend project' }
    }
  },
  en: {
    title: 'Seppe | Aurubis IT Support',
    selectors: {
      '.project-hero .eyebrow': { text: 'Other achievement' },
      '.project-hero h1': { text: 'Aurubis IT Support' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: internship and later support in a real industrial environment where reliability matters. I helped with daily IT tasks, troubleshooting, and maintenance in a professional context.' },
      '.hero-tags span:nth-child(1)': { text: 'IT Support' },
      '.hero-tags span:nth-child(2)': { text: 'Operations' },
      '.hero-tags span:nth-child(3)': { text: 'Reliability' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Practical experience' },
      '.hero-facts li:nth-child(1)': { html: '<span>Role</span> IT Support' },
      '.hero-facts li:nth-child(2)': { html: '<span>Context</span> Production environment' },
      '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Stability and continuity' },
      '.project-impact .eyebrow': { text: 'Realizations' },
      '.project-impact h2': { text: 'What I actually did there' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Troubleshooting' },
      '.project-impact-grid article:nth-child(1) p': { text: 'I helped identify and solve technical problems so colleagues could continue working.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Maintenance' },
      '.project-impact-grid article:nth-child(2) p': { text: 'I supported configuration, update work, and general IT actions in an operational environment.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Teamwork' },
      '.project-impact-grid article:nth-child(3) p': { text: 'I worked clearly and professionally with others so tasks were followed up correctly and on time.' },
      '.project-flow .eyebrow': { text: 'What I learned' },
      '.project-flow h2': { text: 'Learning points from practice' },
      '.project-steps li:nth-child(1)': { html: '<strong>Analysis</strong> investigate problems more calmly by looking for the cause instead of only the symptom.' },
      '.project-steps li:nth-child(2)': { html: '<strong>Operate</strong> provide support in an environment where stability and follow-up matter.' },
      '.project-steps li:nth-child(3)': { html: '<strong>Professional behavior</strong> communicate clearly and take responsibility.' },
      '.portfolio-section:last-child .eyebrow': { text: 'My part' },
      '.portfolio-section:last-child h2': { text: 'What I was responsible for' },
      '.portfolio-section:last-child .project-copy': { text: 'I contributed to daily work by providing practical support, helping solve problems, and keeping the environment stable. That made this a valuable step toward professional work.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Back to Projects' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'Next project' }
    }
  }
};

pageTranslations['project-four.html'] = {
  nl: {
    title: 'Seppe | Portfolio Website',
    selectors: {
      '.project-hero .eyebrow': { text: 'Andere realisatie' },
      '.project-hero h1': { text: 'Portfolio website' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: dit portfolio zelf is een extra realisatie waar ik trots op ben. Het doel was om mijn profiel, projecten en CV professioneel samen te brengen in één website.' },
      '.hero-tags span:nth-child(1)': { text: 'HTML/CSS' },
      '.hero-tags span:nth-child(2)': { text: 'Design' },
      '.hero-tags span:nth-child(3)': { text: 'Presentatie' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Live portfolio' },
      '.hero-facts li:nth-child(1)': { html: '<span>Rol</span> Designer + Developer' },
      '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> HTML, CSS, JavaScript' },
      '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Professionele presentatie' },
      '.project-impact .eyebrow': { text: 'Realisaties' },
      '.project-impact h2': { text: 'Wat deze website laat zien' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Eigen stijl' },
      '.project-impact-grid article:nth-child(1) p': { text: 'Ik bouwde een visuele identiteit die consistent is doorheen de volledige site.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Structuur' },
      '.project-impact-grid article:nth-child(2) p': { text: 'Bezoekers vinden snel Home, Over Mij, Projecten en CV zonder extra zoeken.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Afwerking' },
      '.project-impact-grid article:nth-child(3) p': { text: "De pagina's zijn bedoeld om professioneel en duidelijk over te komen, ook op juryniveau." },
      '.project-flow .eyebrow': { text: 'Wat ik geleerd heb' },
      '.project-flow h2': { text: 'Leerpunten uit dit portfolio' },
      '.project-steps li:nth-child(1)': { html: '<strong>Design</strong> een interface die persoonlijk voelt maar toch overzichtelijk blijft.' },
      '.project-steps li:nth-child(2)': { html: "<strong>Realisatie</strong> pagina's bouwen die inhoudelijk sterk zijn, niet alleen mooi ogen." },
      '.project-steps li:nth-child(3)': { html: '<strong>Communicatie</strong> mijn werk via duidelijke secties, cv en projectbeschrijvingen.' },
      '.portfolio-section:last-child .eyebrow': { text: 'Mijn deel' },
      '.portfolio-section:last-child h2': { text: 'Wat ik hier zelf maakte' },
      '.portfolio-section:last-child .project-copy': { text: 'Ik heb de volledige structuur, stijl en inhoud van dit portfolio uitgewerkt zodat het mijn werk, groei en ambities helder toont.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Terug naar Projecten' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'Bekijk CV' }
    }
  },
  en: {
    title: 'Seppe | Portfolio Website',
    selectors: {
      '.project-hero .eyebrow': { text: 'Other achievement' },
      '.project-hero h1': { text: 'Portfolio website' },
      '.project-hero .hero-main > p:not(.eyebrow)': { text: 'Context: this portfolio itself is an extra achievement I am proud of. The goal was to bring my profile, projects, and CV together professionally in one website.' },
      '.hero-tags span:nth-child(1)': { text: 'HTML/CSS' },
      '.hero-tags span:nth-child(2)': { text: 'Design' },
      '.hero-tags span:nth-child(3)': { text: 'Presentation' },
      '.hero-side-label': { text: 'Status' },
      '.hero-side h3': { text: 'Live portfolio' },
      '.hero-facts li:nth-child(1)': { html: '<span>Role</span> Designer + Developer' },
      '.hero-facts li:nth-child(2)': { html: '<span>Stack</span> HTML, CSS, JavaScript' },
      '.hero-facts li:nth-child(3)': { html: '<span>Focus</span> Professional presentation' },
      '.project-impact .eyebrow': { text: 'Realizations' },
      '.project-impact h2': { text: 'What this website shows' },
      '.project-impact-grid article:nth-child(1) h3': { text: 'Own style' },
      '.project-impact-grid article:nth-child(1) p': { text: 'I built a visual identity that stays consistent throughout the full site.' },
      '.project-impact-grid article:nth-child(2) h3': { text: 'Structure' },
      '.project-impact-grid article:nth-child(2) p': { text: 'Visitors can quickly find Home, About Me, Projects, and CV without extra searching.' },
      '.project-impact-grid article:nth-child(3) h3': { text: 'Polish' },
      '.project-impact-grid article:nth-child(3) p': { text: 'The pages are meant to feel professional and clear, also at jury level.' },
      '.project-flow .eyebrow': { text: 'What I learned' },
      '.project-flow h2': { text: 'Learning points from this portfolio' },
      '.project-steps li:nth-child(1)': { html: '<strong>Design</strong> an interface that feels personal while staying clear.' },
      '.project-steps li:nth-child(2)': { html: '<strong>Realization</strong> build pages that are strong in content, not just nice to look at.' },
      '.project-steps li:nth-child(3)': { html: '<strong>Communication</strong> present my work through clear sections, a CV, and project descriptions.' },
      '.portfolio-section:last-child .eyebrow': { text: 'My part' },
      '.portfolio-section:last-child h2': { text: 'What I made myself here' },
      '.portfolio-section:last-child .project-copy': { text: 'I worked out the full structure, style, and content of this portfolio so it clearly shows my work, growth, and ambitions.' },
      '.panel-actions .btn-link:nth-child(1)': { text: 'Back to Projects' },
      '.panel-actions .btn-link:nth-child(2)': { text: 'View CV' }
    }
  }
};

const applyPageTranslations = (lang) => {
  const rawPageName = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pageName = pageTranslations[rawPageName] ? rawPageName : 'index.html';
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
    'cv.html': 'cv.html',
    'contact.html': 'contact.html',
    'project-one.html': 'projects.html',
    'project-two.html': 'projects.html',
    'project-three.html': 'projects.html',
    'project-four.html': 'projects.html'
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

window.addEventListener('load', () => {
  applyPageTranslations(currentLanguage);
});

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

  const messages = {
    nl: {
      allFields: 'Vul eerst alle velden correct in.',
      short: 'Naam, onderwerp of bericht is te kort.',
      badEmail: 'Vul een geldig e-mailadres in.',
      sending: 'Bericht wordt verzonden...',
      sent: 'Bericht verzonden. Ik neem snel contact op.',
      fallback: 'Server mail is nu niet beschikbaar. Je mailapp wordt geopend als fallback.',
      genericError: 'Verzenden mislukt. Probeer opnieuw binnen enkele minuten.'
    },
    en: {
      allFields: 'Please fill in all required fields.',
      short: 'Name, subject, or message is too short.',
      badEmail: 'Please enter a valid email address.',
      sending: 'Sending message...',
      sent: 'Message sent. I will reply soon.',
      fallback: 'Server mail is not available right now. Opening your mail app as fallback.',
      genericError: 'Sending failed. Please try again in a few minutes.'
    }
  };

  const getMsg = (key) => {
    const lang = currentLanguage === 'nl' ? 'nl' : 'en';
    return messages[lang][key] || messages.en[key] || '';
  };

  const setStatus = (message, tone = 'info') => {
    status.textContent = message;
    status.classList.remove('is-info', 'is-success', 'is-error');
    status.classList.add(`is-${tone}`);
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
      setStatus(getMsg('sent'), 'success');
      form.reset();
      return;
    }

    if (!name || !email || !subject || !message) {
      setStatus(getMsg('allFields'), 'error');
      return;
    }

    if (name.length < 2 || subject.length < 3 || message.length < 10) {
      setStatus(getMsg('short'), 'error');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus(getMsg('badEmail'), 'error');
      return;
    }

    const endpoint = form.getAttribute('action') || 'api/contact.php';
    const payload = { name, email, subject, message, website };
    const idleButtonLabel = submitButton ? submitButton.textContent : '';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = getMsg('sending');
    }
    form.setAttribute('aria-busy', 'true');
    setStatus(getMsg('sending'), 'info');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const raw = await response.text();
      let result = {};

      try {
        result = raw ? JSON.parse(raw) : {};
      } catch (parseError) {
        result = {};
      }

      if (!response.ok || !result.success) {
        if (typeof result.fallback === 'string' && result.fallback.startsWith('mailto:')) {
          setStatus(getMsg('fallback'), 'error');
          window.location.href = result.fallback;
          return;
        }

        const backendMessage = typeof result.error === 'string' ? result.error : '';
        throw new Error(backendMessage || getMsg('genericError'));
      }

      setStatus(getMsg('sent'), 'success');
      form.reset();
    } catch (error) {
      const message = error instanceof Error && error.message ? error.message : getMsg('genericError');
      setStatus(message, 'error');
    } finally {
      form.removeAttribute('aria-busy');
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = idleButtonLabel;
      }
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
      closeLabel: 'Sluit chat',
      panelLabel: 'Portfolio assistent',
      title: 'Vraag iets aan mijn AI',
      kicker: 'Portfolio Assistant',
      placeholder: 'Typ je vraag...',
      send: 'Verstuur',
      greeting: 'Hey! Ik ben de portfolio-assistent. Vraag me gerust iets over Seppe, projecten, contact of skills.'
    },
    en: {
      openTitle: 'Open AI chat',
      closeLabel: 'Close chat',
      panelLabel: 'Portfolio assistant',
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
        ? 'Seppe is tweedejaars APP/AI-student, liep stage bij Aurubis Olen en werkt daar ook tijdens vakantieperiodes op IT.'
        : 'Seppe is a second-year APP/AI student, completed an internship at Aurubis Olen, and also works there in IT during holiday periods.';
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
    closeBtn.setAttribute('aria-label', ui.closeLabel);
    panel.setAttribute('aria-label', ui.panelLabel);
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
// Performance first: disable heavy animations on all pages
try { initHomeEffects(); } catch (e) { console.error('initHomeEffects error:', e); }
try { initReveal(); } catch (e) { console.error('initReveal error:', e); }
try { initAboutEffects(); } catch (e) { console.error('initAboutEffects error:', e); }
// try { initAboutCenterZoom(); } catch (e) { console.error('initAboutCenterZoom error:', e); }
// try { initAboutWheelMotion(); } catch (e) { console.error('initAboutWheelMotion error:', e); }
try { initContactForm(); } catch (e) { console.error('initContactForm error:', e); }
try { initPortfolioAI(); } catch (e) { console.error('initPortfolioAI error:', e); }


