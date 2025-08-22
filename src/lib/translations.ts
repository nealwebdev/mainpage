export type Language = 'en' | 'nl';

export interface Translations {
  // Header
  header: {
    title: string;
    subtitle: string;
    search: string;
    quickSearch: string;
  };

  // Hero Section
  hero: {
    badge: string;
    badgeMobile: string;
    title: string;
    subtitle: string;
    description: string;
    viewWork: string;
    startProject: string;
    pills: {
      fullStack: string;
      fullStackShort: string;
      itSolutions: string;
      modernTech: string;
    };
  };

  // Work Section
  work: {
    title: string;
    description: string;
    projects: Array<{
      title: string;
      desc: string;
      tags: string[];
      overview: string;
      features: string[];
    }>;
  };

  // Services Section
  services: {
    title: string;
    description: string;
    services: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };

  // About Section
  about: {
    title: string;
    description: string;
    skills: Array<{
      name: string;
      level: string;
    }>;
  };

  // Contact Section
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      networkError: string;
    };
  };

  // Navigation
  navigation: {
    home: string;
    work: string;
    services: string;
    about: string;
    contact: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: "Neal Focke",
      subtitle: "Full-Stack IT Solutions Developer",
      search: "Search",
      quickSearch: "Quick Search",
    },
    hero: {
      badge: "Available for IT & Web Development projects",
      badgeMobile: "IT & Web Development",
      title: "IT Solutions",
      subtitle: "Web Development",
      description: "I'm a versatile IT professional specializing in web development, with expertise in modern technologies and AI integration. From custom applications to enterprise solutions, I deliver comprehensive IT services.",
      viewWork: "View My Work",
      startProject: "Start a Project",
      pills: {
        fullStack: "Full-Stack Developer",
        fullStackShort: "Full-Stack",
        itSolutions: "IT Solutions",
        modernTech: "Modern Tech",
      },
    },
    work: {
      title: "Featured Work",
      description: "A showcase of projects that demonstrate my expertise in IT solutions and web development, from custom applications to enterprise systems.",
      projects: [
        {
          title: "AI-Powered CMS",
          desc: "Modern content management system with integrated AI content generation and automated workflows for enhanced content management.",
          tags: ["Modern CMS", "OpenAI API", "Custom Development"],
          overview: "Built a comprehensive content management system that leverages AI to automate content creation, categorization, and optimization. The system includes intelligent workflows that reduce manual content management by 70%.",
          features: ["AI Content Generation", "Automated Workflows", "Smart Categorization", "Performance Analytics"],
        },
        {
          title: "Headless Commerce",
          desc: "Modern e-commerce platform with React frontend, featuring real-time inventory and AI-driven recommendations.",
          tags: ["E-commerce", "React", "REST API"],
          overview: "Developed a modern e-commerce platform with robust backend and React frontend. Integrated AI-powered product recommendations and real-time inventory management.",
          features: ["Real-time Inventory", "AI Recommendations", "Headless Architecture", "Mobile-First Design"],
        },
        {
          title: "Multi-API Platform",
          desc: "Complex application integrating multiple third-party APIs for data aggregation and analysis.",
          tags: ["API Integration", "GraphQL", "Data Analytics"],
          overview: "Created a sophisticated data aggregation platform that connects to 15+ external APIs, providing unified data access and real-time analytics through GraphQL.",
          features: ["Multi-API Integration", "GraphQL Interface", "Real-time Data", "Advanced Analytics"],
        },
        {
          title: "AI Chatbot System",
          desc: "Intelligent customer service solution with AI-powered conversation engine and seamless integration.",
          tags: ["AI/ML", "Customer Service", "Custom API"],
          overview: "Implemented an intelligent customer service chatbot that handles 80% of customer inquiries automatically, with seamless escalation to human agents.",
          features: ["Natural Language Processing", "Smart Escalation", "24/7 Availability", "Multi-language Support"],
        },
        {
          title: "Analytics Dashboard",
          desc: "Real-time data visualization platform with advanced user permissions and API connections.",
          tags: ["Data Visualization", "D3.js", "Real-time Analytics"],
          overview: "Built a comprehensive analytics dashboard with real-time data visualization, custom reporting, and role-based access control.",
          features: ["Real-time Visualization", "Custom Reports", "Role-based Access", "Data Export"],
        },
        {
          title: "Automated Workflow",
          desc: "AI-enhanced approval system with smart routing and automated publishing workflows.",
          tags: ["Workflow Automation", "AI Logic", "Process Optimization"],
          overview: "Developed an intelligent approval system that automatically routes content through approval workflows based on AI analysis of content quality and relevance.",
          features: ["Smart Routing", "Quality Analysis", "Automated Publishing", "Workflow Analytics"],
        },
      ],
    },
    services: {
      title: "Services",
      description: "Comprehensive IT solutions tailored to your business needs, from web development to enterprise system integration.",
      services: [
        {
          title: "Web Development",
          description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
          features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
        },
        {
          title: "AI Integration",
          description: "Intelligent automation and AI-powered features to enhance your digital solutions.",
          features: ["OpenAI Integration", "Machine Learning", "Automated Workflows", "Smart Analytics"],
        },
        {
          title: "API Development",
          description: "Robust backend systems and API integrations for seamless data flow.",
          features: ["REST APIs", "GraphQL", "Database Design", "Third-party Integrations"],
        },
      ],
    },
    about: {
      title: "About Me",
      description: "I'm a versatile IT professional with expertise in creating robust, scalable web solutions that integrate seamlessly with modern technologies and AI. I focus on building intelligent digital ecosystems that automate processes and enhance user experiences across various platforms.",
      skills: [
        { name: "Web Development", level: "Expert" },
        { name: "Full-Stack", level: "Advanced" },
        { name: "REST APIs", level: "Expert" },
        { name: "GraphQL", level: "Advanced" },
        { name: "AI Integration", level: "Advanced" },
        { name: "Modern Frameworks", level: "Advanced" },
        { name: "DevOps", level: "Advanced" },
        { name: "Database Design", level: "Advanced" },
      ],
    },
    contact: {
      title: "Let's Build Together",
      description: "Ready to bring your digital vision to life? I'm here to help you create something extraordinary. Let's discuss your project and make it happen.",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Tell me about your project...",
        submit: "Send Message",
        success: "Message sent successfully! I'll get back to you soon.",
        error: "Failed to send message. Please try again.",
        networkError: "Network error. Please check your connection and try again.",
      },
    },
    navigation: {
      home: "Home",
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
  },
  nl: {
    header: {
      title: "Neal Focke",
      subtitle: "Full-Stack IT Oplossingen Ontwikkelaar",
      search: "Zoeken",
      quickSearch: "Snelle Zoek",
    },
    hero: {
      badge: "Beschikbaar voor IT & Web Development projecten",
      badgeMobile: "IT & Web Development",
      title: "IT Oplossingen",
      subtitle: "Web Development",
      description: "Ik ben een veelzijdige IT-professional gespecialiseerd in web development, met expertise in moderne technologieën en AI-integratie. Van aangepaste applicaties tot enterprise oplossingen, ik lever uitgebreide IT-diensten.",
      viewWork: "Bekijk Mijn Werk",
      startProject: "Start een Project",
      pills: {
        fullStack: "Full-Stack Ontwikkelaar",
        fullStackShort: "Full-Stack",
        itSolutions: "IT Oplossingen",
        modernTech: "Moderne Tech",
      },
    },
    work: {
      title: "Uitgelicht Werk",
      description: "Een showcase van projecten die mijn expertise in IT-oplossingen en web development demonstreren, van aangepaste applicaties tot enterprise systemen.",
      projects: [
        {
          title: "AI-Gedreven CMS",
          desc: "Modern content management systeem met geïntegreerde AI content generatie en geautomatiseerde workflows voor verbeterde content management.",
          tags: ["Modern CMS", "OpenAI API", "Aangepaste Development"],
          overview: "Gebouwd een uitgebreid content management systeem dat AI gebruikt om content creatie, categorisering en optimalisatie te automatiseren. Het systeem omvat intelligente workflows die handmatig content management met 70% verminderen.",
          features: ["AI Content Generatie", "Geautomatiseerde Workflows", "Slimme Categorisering", "Prestatie Analytics"],
        },
        {
          title: "Headless Commerce",
          desc: "Modern e-commerce platform met React frontend, met real-time voorraad en AI-gedreven aanbevelingen.",
          tags: ["E-commerce", "React", "REST API"],
          overview: "Ontwikkeld een modern e-commerce platform met robuuste backend en React frontend. Geïntegreerde AI-gedreven productaanbevelingen en real-time voorraadbeheer.",
          features: ["Real-time Voorraad", "AI Aanbevelingen", "Headless Architectuur", "Mobile-First Design"],
        },
        {
          title: "Multi-API Platform",
          desc: "Complexe applicatie die meerdere third-party APIs integreert voor data aggregatie en analyse.",
          tags: ["API Integratie", "GraphQL", "Data Analytics"],
          overview: "Gemaakt een geavanceerd data aggregatie platform dat verbindt met 15+ externe APIs, voor verenigde data toegang en real-time analytics via GraphQL.",
          features: ["Multi-API Integratie", "GraphQL Interface", "Real-time Data", "Geavanceerde Analytics"],
        },
        {
          title: "AI Chatbot Systeem",
          desc: "Intelligente klantenservice oplossing met AI-gedreven conversatie engine en naadloze integratie.",
          tags: ["AI/ML", "Klantenservice", "Aangepaste API"],
          overview: "Geïmplementeerd een intelligente klantenservice chatbot die 80% van klantvragen automatisch afhandelt, met naadloze escalatie naar menselijke agenten.",
          features: ["Natural Language Processing", "Slimme Escalatie", "24/7 Beschikbaarheid", "Meertalige Ondersteuning"],
        },
        {
          title: "Analytics Dashboard",
          desc: "Real-time data visualisatie platform met geavanceerde gebruikersrechten en API verbindingen.",
          tags: ["Data Visualisatie", "D3.js", "Real-time Analytics"],
          overview: "Gebouwd een uitgebreid analytics dashboard met real-time data visualisatie, aangepaste rapporten en rol-gebaseerde toegangscontrole.",
          features: ["Real-time Visualisatie", "Aangepaste Rapporten", "Rol-gebaseerde Toegang", "Data Export"],
        },
        {
          title: "Geautomatiseerde Workflow",
          desc: "AI-verbeterd goedkeuringssysteem met slimme routing en geautomatiseerde publicatie workflows.",
          tags: ["Workflow Automatisering", "AI Logica", "Proces Optimalisatie"],
          overview: "Ontwikkeld een intelligent goedkeuringssysteem dat automatisch content door goedkeuringsworkflows routeert op basis van AI-analyse van content kwaliteit en relevantie.",
          features: ["Slimme Routing", "Kwaliteitsanalyse", "Geautomatiseerde Publicatie", "Workflow Analytics"],
        },
      ],
    },
    services: {
      title: "Diensten",
      description: "Uitgebreide IT-oplossingen op maat voor uw bedrijfsbehoeften, van web development tot enterprise systeem integratie.",
      services: [
        {
          title: "Web Development",
          description: "Moderne, responsieve websites en web applicaties gebouwd met cutting-edge technologieën.",
          features: ["React & Next.js", "TypeScript", "Responsive Design", "Prestatie Optimalisatie"],
        },
        {
          title: "AI Integratie",
          description: "Intelligente automatisering en AI-gedreven functies om uw digitale oplossingen te verbeteren.",
          features: ["OpenAI Integratie", "Machine Learning", "Geautomatiseerde Workflows", "Slimme Analytics"],
        },
        {
          title: "API Development",
          description: "Robuuste backend systemen en API integraties voor naadloze data flow.",
          features: ["REST APIs", "GraphQL", "Database Design", "Third-party Integraties"],
        },
      ],
    },
    about: {
      title: "Over Mij",
      description: "Ik ben een veelzijdige IT-professional met expertise in het creëren van robuuste, schaalbare web oplossingen die naadloos integreren met moderne technologieën en AI. Ik focus op het bouwen van intelligente digitale ecosystemen die processen automatiseren en gebruikerservaringen verbeteren op verschillende platforms.",
      skills: [
        { name: "Web Development", level: "Expert" },
        { name: "Full-Stack", level: "Geavanceerd" },
        { name: "REST APIs", level: "Expert" },
        { name: "GraphQL", level: "Geavanceerd" },
        { name: "AI Integratie", level: "Geavanceerd" },
        { name: "Moderne Frameworks", level: "Geavanceerd" },
        { name: "DevOps", level: "Geavanceerd" },
        { name: "Database Design", level: "Geavanceerd" },
      ],
    },
    contact: {
      title: "Laten We Samen Bouwen",
      description: "Klaar om uw digitale visie tot leven te brengen? Ik ben hier om u te helpen iets buitengewoons te creëren. Laten we uw project bespreken en het laten gebeuren.",
      form: {
        name: "Uw naam",
        email: "Uw email",
        message: "Vertel me over uw project...",
        submit: "Bericht Versturen",
        success: "Bericht succesvol verzonden! Ik neem binnenkort contact met u op.",
        error: "Bericht verzenden mislukt. Probeer het opnieuw.",
        networkError: "Netwerkfout. Controleer uw verbinding en probeer het opnieuw.",
      },
    },
    navigation: {
      home: "Home",
      work: "Werk",
      services: "Diensten",
      about: "Over",
      contact: "Contact",
    },
  },
};
