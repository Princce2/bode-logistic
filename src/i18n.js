import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar translations
      services: "Services",
      careers: "Careers",
      contact: "Contact Us",
      bodeHub: "Bode Hub",
      trackShipment: "Track Shipment",
      searchPlaceholder: "Search...",
      // App translations
      video_unsupported: "Your browser does not support the video tag.",
      about_bode_logistics: "ABOUT BODE LOGISTICS",
      about_bode_logistics_description:
        "Discover our origin story, commitment to excellence, and how we deliver seamless logistics solutions across the globe.",
      dare_to_grow: "DARE TO GROW",
      dare_to_grow_description:
        "Empowering people and building logistics excellence together.",
      engineering_winning_solutions: "ENGINEERING WINNING SOLUTIONS",
      engineering_winning_solutions_description:
        "Smart solutions that move your business forward.",
      learn_more: "Learn More",
      track_and_trace: "Track & Trace",
      track_your_shipment: "Track Your Shipment",
      bode_hub_description:
        "Log in or sign up to Bode Hub to enjoy the full features. Quote, book and ship all over the world, and manage your cargo end-to-end via a single platform.",
      get_started_bode_hub: "Get Started with Bode Hub",
      global_logistics_excellence: "Global Logistics Excellence",
      global_logistics_excellence_description:
        "At Bode Logistics, we redefine global trade with unmatched precision and innovation. Our world-class infrastructure spans over 50 countries, ensuring your goods move seamlessly from origin to destination with cutting-edge technology and expert oversight as of July 21, 2025.",
      global_logistics_excellence_details:
        "With a fleet of state-of-the-art vessels, aircraft, and a robust land transport network, we deliver reliability at scale. Our real-time tracking and AI-driven analytics provide unparalleled visibility, empowering businesses to thrive in a dynamic market.",
      explore_our_network: "Explore Our Network",
      special_highlights: "SPECIAL HIGHLIGHTS",
      special_highlights_description: "Discover Bode Logistics!",
      digital_freight_platform: "myBODE - Your Digital Freight Platform",
      bode_insights: "BODE Insights",
      promoting_gender_diversity: "Promoting gender diversity at BODE",
      case_studies: "Case Studies",
      innovative_solutions_showcase: "Innovative Solutions Showcase",
      innovative_solutions_showcase_description:
        "Revolutionize your supply chain with Bode Logistics' pioneering solutions. From sustainable packaging to automated warehousing, we integrate the latest advancements to drive efficiency and reduce costs as of July 21, 2025.",
      innovative_solutions_showcase_details:
        "Our proprietary logistics platform leverages machine learning to optimize routes and predict demand, saving you time and resources. Experience a future-ready logistics partner committed to sustainability and innovation.",
      discover_innovations: "Discover Innovations",
      real_time_market_updates: "Real-Time Market Updates",
      real_time_market_updates_description:
        "Stay ahead with Bode Logistics' live insights as of 08:50 AM WAT, July 21, 2025. Our expert analysis covers freight rates, port congestion, and emerging trade routes to keep your operations competitive.",
      real_time_market_updates_details:
        "Access real-time data dashboards and personalized reports to adapt to market shifts instantly. Our team of analysts ensures you’re equipped with the knowledge to make informed decisions.",
      view_live_updates: "View Live Updates",
      sustainability_commitment: "Sustainability Commitment",
      sustainability_commitment_description:
        "Bode Logistics is dedicated to a greener future. Our eco-friendly initiatives, including carbon-neutral shipping, reduce your environmental footprint as of July 21, 2025.",
      sustainability_commitment_details:
        "We’ve invested in electric fleets, renewable energy warehouses, and sustainable packaging solutions. Join us in building a logistics ecosystem that prioritizes the planet.",
      learn_about_sustainability: "Learn About Sustainability",
      exclusive_client_portal_access: "Exclusive Client Portal Access",
      exclusive_client_portal_access_description:
        "Unlock a world of control with Bode Hub. Manage shipments, access analytics, and connect with our team 24/7 starting today, July 21, 2025.",
      exclusive_client_portal_access_details:
        "Our secure portal offers real-time updates, custom dashboards, and direct support. Elevate your logistics experience with a personalized, all-in-one platform.",
      access_bode_hub: "Access Bode Hub",
      bode_logistics_newsroom: "BODE LOGISTICS NEWSROOM",
      news_main: "News Main",
      press_release: "Press release",
      date_4_25_2025: "4/25/2025",
      newsroom_acquisition_title:
        "Bode Logistics signs deal to acquire Borusan Tedarik, expand in Turkey",
      newsroom_acquisition_description:
        "Bode agrees to share transfer agreement for 100% of Borusan Tedarik",
      interview: "Interview",
      date_3_19_2025: "3/19/2025",
      news_interview_title: "Building the Future of Supply Chain",
      article: "Article",
      date_4_2_2025: "4/2/2025",
      news_article_title: "Bode Logistics 2024 CSR Summary Report",
      news_press_release: "Press Release",
      date_3_28_2025: "3/28/2025",
      news_press_release_title:
        "Bode Logistics Expands Global Air Freight Capacity with WUX (China) to ORD (U.S.) Air Charter",
      see_all_news: "SEE ALL NEWS",
      join_us: "JOIN US",
      join_us_description:
        "At Bode Logistics, we are not just a leading global supply chain solutions provider; we are a community of innovators, collaborators, and problem-solvers. With a presence in over 170 countries and a workforce of more than 110,000 dedicated employees, we understand that our people are the key to our success. Join us on a journey where you can take bold steps in your career and embrace the opportunities for growth and development that await you. Dare to grow with Bode Logistics and help shape the future of global logistics through imagination, excellence, and commitment.",
    },
  },
  fr: {
    translation: {
      services: "Services",
      careers: "Carrières",
      contact: "Contactez-nous",
      bodeHub: "Centre Bode",
      trackShipment: "Suivi d'expédition",
      searchPlaceholder: "Recherche...",
      video_unsupported:
        "Votre navigateur ne prend pas en charge la balise vidéo.",
      about_bode_logistics: "À PROPOS DE BODE LOGISTICS",
      about_bode_logistics_description:
        "Découvrez notre histoire d'origine, notre engagement envers l'excellence et comment nous offrons des solutions logistiques fluides à travers le monde.",
      dare_to_grow: "OSER GRANDIR",
      dare_to_grow_description:
        "Autonomiser les personnes et construire l'excellence logistique ensemble.",
      engineering_winning_solutions: "CONCEVOIR DES SOLUTIONS GAGNANTES",
      engineering_winning_solutions_description:
        "Des solutions intelligentes qui font avancer votre entreprise.",
      learn_more: "En savoir plus",
      track_and_trace: "Suivi et traçabilité",
      track_your_shipment: "Suivre votre expédition",
      bode_hub_description:
        "Connectez-vous ou inscrivez-vous à Centre Bode pour profiter de toutes les fonctionnalités. Obtenez des devis, réservez et expédiez partout dans le monde, et gérez votre fret de bout en bout via une seule plateforme.",
      get_started_bode_hub: "Commencer avec Centre Bode",
      global_logistics_excellence: "Excellence Logistique Mondiale",
      global_logistics_excellence_description:
        "Chez Bode Logistics, nous redéfinissons le commerce mondial avec une précision inégalée et une innovation. Notre infrastructure de classe mondiale s'étend sur plus de 50 pays, garantissant que vos marchandises se déplacent sans encombre de l'origine à la destination avec une technologie de pointe et une supervision experte au 21 juillet 2025.",
      global_logistics_excellence_details:
        "Avec une flotte de navires, d'avions et un réseau de transport terrestre robuste à la pointe de la technologie, nous offrons une fiabilité à grande échelle. Notre suivi en temps réel et nos analyses basées sur l'IA offrent une visibilité inégalée, permettant aux entreprises de prospérer sur un marché dynamique.",
      explore_our_network: "Explorer notre réseau",
      special_highlights: "POINTS FORTS SPÉCIAUX",
      special_highlights_description: "Découvrez Bode Logistics !",
      digital_freight_platform: "myBODE - Votre plateforme de fret numérique",
      bode_insights: "Perspectives BODE",
      promoting_gender_diversity: "Promouvoir la diversité de genre chez BODE",
      case_studies: "Études de cas",
      innovative_solutions_showcase: "Vitrine des solutions innovantes",
      innovative_solutions_showcase_description:
        "Révolutionnez votre chaîne d'approvisionnement avec les solutions pionnières de Bode Logistics. De l'emballage durable à l'entreposage automatisé, nous intégrons les dernières avancées pour améliorer l'efficacité et réduire les coûts au 21 juillet 2025.",
      innovative_solutions_showcase_details:
        "Notre plateforme logistique exclusive exploite l'apprentissage automatique pour optimiser les itinéraires et prévoir la demande, vous faisant gagner du temps et des ressources. Faites l'expérience d'un partenaire logistique prêt pour l'avenir, engagé dans la durabilité et l'innovation.",
      discover_innovations: "Découvrir les innovations",
      real_time_market_updates: "Mises à jour du marché en temps réel",
      real_time_market_updates_description:
        "Restez en tête avec les insights en direct de Bode Logistics au 08:50 WAT, 21 juillet 2025. Notre analyse experte couvre les tarifs de fret, la congestion portuaire et les nouvelles routes commerciales pour maintenir la compétitivité de vos opérations.",
      real_time_market_updates_details:
        "Accédez à des tableaux de bord de données en temps réel et à des rapports personnalisés pour vous adapter instantanément aux changements du marché. Notre équipe d'analystes s'assure que vous êtes équipé des connaissances nécessaires pour prendre des décisions éclairées.",
      view_live_updates: "Voir les mises à jour en direct",
      sustainability_commitment: "Engagement envers la durabilité",
      sustainability_commitment_description:
        "Bode Logistics est dédié à un avenir plus vert. Nos initiatives écologiques, y compris l'expédition neutre en carbone, réduisent votre empreinte environnementale au 21 juillet 2025.",
      sustainability_commitment_details:
        "Nous avons investi dans des flottes électriques, des entrepôts alimentés par des énergies renouvelables et des solutions d'emballage durables. Rejoignez-nous pour construire un écosystème logistique qui privilégie la planète.",
      learn_about_sustainability: "En savoir plus sur la durabilité",
      exclusive_client_portal_access: "Accès exclusif au portail client",
      exclusive_client_portal_access_description:
        "Déverrouillez un monde de contrôle avec Centre Bode. Gérez les expéditions, accédez aux analyses et connectez-vous avec notre équipe 24/7 à partir d'aujourd'hui, 21 juillet 2025.",
      exclusive_client_portal_access_details:
        "Notre portail sécurisé offre des mises à jour en temps réel, des tableaux de bord personnalisés et un support direct. Élevez votre expérience logistique avec une plateforme tout-en-un personnalisée.",
      access_bode_hub: "Accéder à Centre Bode",
      bode_logistics_newsroom: "SALLE DE PRESSE BODE LOGISTICS",
      news_main: "Actualités principales",
      press_release: "Communiqué de presse",
      date_4_25_2025: "25/04/2025",
      newsroom_acquisition_title:
        "Bode Logistics signe un accord pour acquérir Borusan Tedarik et s'étendre en Turquie",
      newsroom_acquisition_description:
        "Bode accepte un accord de transfert d'actions pour 100% de Borusan Tedarik",
      interview: "Interview",
      date_3_19_2025: "19/03/2025",
      news_interview_title:
        "Construire l'avenir de la chaîne d'approvisionnement",
      article: "Article",
      date_4_2_2025: "02/04/2025",
      news_article_title: "Rapport récapitulatif CSR 2024 de Bode Logistics",
      news_press_release: "Communiqué de presse",
      date_3_28_2025: "28/03/2025",
      news_press_release_title:
        "Bode Logistics élargit sa capacité mondiale de fret aérien avec un charter aérien de WUX (Chine) à ORD (États-Unis)",
      see_all_news: "VOIR TOUTES LES ACTUALITÉS",
      join_us: "REJOIGNEZ-NOUS",
      join_us_description:
        "Chez Bode Logistics, nous ne sommes pas seulement un fournisseur de solutions de chaîne d'approvisionnement mondiale de premier plan ; nous sommes une communauté d'innovateurs, de collaborateurs et de résolveurs de problèmes. Avec une présence dans plus de 170 pays et une main-d'œuvre de plus de 110 000 employés dévoués, nous comprenons que nos employés sont la clé de notre succès. Rejoignez-nous dans un voyage où vous pouvez faire des pas audacieux dans votre carrière et saisir les opportunités de croissance et de développement qui vous attendent. Osez grandir avec Bode Logistics et contribuez à façonner l'avenir de la logistique mondiale à travers l'imagination, l'excellence et l'engagement.",
    },
  },
  es: {
    translation: {
      services: "Servicios",
      careers: "Carreras",
      contact: "Contáctenos",
      bodeHub: "Centro Bode",
      trackShipment: "Rastrear Envío",
      searchPlaceholder: "Buscar...",
      video_unsupported: "Tu navegador no soporta la etiqueta de video.",
      about_bode_logistics: "SOBRE BODE LOGISTICS",
      about_bode_logistics_description:
        "Descubre nuestra historia de origen, compromiso con la excelencia y cómo ofrecemos soluciones logísticas perfectas en todo el mundo.",
      dare_to_grow: "ATREVETE A CRECER",
      dare_to_grow_description:
        "Empoderando a las personas y construyendo la excelencia logística juntos.",
      engineering_winning_solutions: "INGENIERÍA DE SOLUCIONES GANADORAS",
      engineering_winning_solutions_description:
        "Soluciones inteligentes que impulsan tu negocio hacia adelante.",
      learn_more: "Saber más",
      track_and_trace: "Rastreo y Seguimiento",
      track_your_shipment: "Rastrear tu envío",
      bode_hub_description:
        "Inicia sesión o regístrate en Centro Bode para disfrutar de todas las funciones. Cotiza, reserva y envía a todo el mundo, y gestiona tu carga de principio a fin a través de una sola plataforma.",
      get_started_bode_hub: "Comienza con Centro Bode",
      global_logistics_excellence: "Excelencia Logística Global",
      global_logistics_excellence_description:
        "En Bode Logistics, redefinimos el comercio global con una precisión inigualable e innovación. Nuestra infraestructura de clase mundial abarca más de 50 países, asegurando que tus mercancías se muevan sin problemas desde el origen hasta el destino con tecnología de vanguardia y supervisión experta al 21 de julio de 2025.",
      global_logistics_excellence_details:
        "Con una flota de barcos, aviones y una robusta red de transporte terrestre de última generación, ofrecemos confiabilidad a gran escala. Nuestro seguimiento en tiempo real y análisis impulsados por IA proporcionan una visibilidad sin igual, empoderando a las empresas para prosperar en un mercado dinámico.",
      explore_our_network: "Explora Nuestra Red",
      special_highlights: "DESTACADOS ESPECIALES",
      special_highlights_description: "¡Descubre Bode Logistics!",
      digital_freight_platform: "myBODE - Tu Plataforma de Flete Digital",
      bode_insights: "Perspectivas BODE",
      promoting_gender_diversity: "Promoviendo la diversidad de género en BODE",
      case_studies: "Estudios de Caso",
      innovative_solutions_showcase: "Vitrina de Soluciones Innovadoras",
      innovative_solutions_showcase_description:
        "Revoluciona tu cadena de suministro con las soluciones pioneras de Bode Logistics. Desde empaques sostenibles hasta almacenamiento automatizado, integramos los últimos avances para impulsar la eficiencia y reducir costos al 21 de julio de 2025.",
      innovative_solutions_showcase_details:
        "Nuestra plataforma logística patentada utiliza aprendizaje automático para optimizar rutas y predecir la demanda, ahorrándote tiempo y recursos. Experimenta un socio logístico preparado para el futuro, comprometido con la sostenibilidad y la innovación.",
      discover_innovations: "Descubre Innovaciones",
      real_time_market_updates: "Actualizaciones del Mercado en Tiempo Real",
      real_time_market_updates_description:
        "Mantente adelante con los insights en vivo de Bode Logistics a las 08:50 WAT, 21 de julio de 2025. Nuestro análisis experto cubre tarifas de flete, congestión portuaria y nuevas rutas comerciales para mantener tus operaciones competitivas.",
      real_time_market_updates_details:
        "Accede a tableros de datos en tiempo real e informes personalizados para adaptarte instantáneamente a los cambios del mercado. Nuestro equipo de analistas asegura que estés equipado con el conocimiento para tomar decisiones informadas.",
      view_live_updates: "Ver Actualizaciones en Vivo",
      sustainability_commitment: "Compromiso con la Sostenibilidad",
      sustainability_commitment_description:
        "Bode Logistics está dedicado a un futuro más verde. Nuestras iniciativas ecológicas, incluyendo envíos neutros en carbono, reducen tu huella ambiental al 21 de julio de 2025.",
      sustainability_commitment_details:
        "Hemos invertido en flotas eléctricas, almacenes de energía renovable y soluciones de empaque sostenibles. Únete a nosotros para construir un ecosistema logístico que priorice el planeta.",
      learn_about_sustainability: "Aprende Sobre Sostenibilidad",
      exclusive_client_portal_access: "Acceso Exclusivo al Portal de Clientes",
      exclusive_client_portal_access_description:
        "Desbloquea un mundo de control con Centro Bode. Gestiona envíos, accede a análisis y conéctate con nuestro equipo 24/7 a partir de hoy, 21 de julio de 2025.",
      exclusive_client_portal_access_details:
        "Nuestro portal seguro ofrece actualizaciones en tiempo real, tableros personalizados y soporte directo. Eleva tu experiencia logística con una plataforma personalizada todo en uno.",
      access_bode_hub: "Acceder a Centro Bode",
      bode_logistics_newsroom: "SALA DE PRENSA DE BODE LOGISTICS",
      news_main: "Noticias Principales",
      press_release: "Comunicado de prensa",
      date_4_25_2025: "25/04/2025",
      newsroom_acquisition_title:
        "Bode Logistics firma un acuerdo para adquirir Borusan Tedarik y expandirse en Turquía",
      newsroom_acquisition_description:
        "Bode acuerda un contrato de transferencia de acciones para el 100% de Borusan Tedarik",
      interview: "Entrevista",
      date_3_19_2025: "19/03/2025",
      news_interview_title: "Construyendo el Futuro de la Cadena de Suministro",
      article: "Artículo",
      date_4_2_2025: "02/04/2025",
      news_article_title: "Informe Resumen de RSE 2024 de Bode Logistics",
      news_press_release: "Comunicado de Prensa",
      date_3_28_2025: "28/03/2025",
      news_press_release_title:
        "Bode Logistics amplía la capacidad global de flete aéreo con un charter aéreo de WUX (China) a ORD (EE.UU.)",
      see_all_news: "VER TODAS LAS NOTICIAS",
      join_us: "ÚNETE A NOSOTROS",
      join_us_description:
        "En Bode Logistics, no solo somos un proveedor líder de soluciones de cadena de suministro global; somos una comunidad de innovadores, colaboradores y solucionadores de problemas. Con presencia en más de 170 países y una fuerza laboral de más de 110,000 empleados dedicados, entendemos que nuestra gente es la clave de nuestro éxito. Únete a nosotros en un viaje donde puedes dar pasos audaces en tu carrera y aprovechar las oportunidades de crecimiento y desarrollo que te esperan. Atrévete a crecer con Bode Logistics y ayuda a dar forma al futuro de la logística global a través de la imaginación, la excelencia y el compromiso.",
    },
  },
  de: {
    translation: {
      services: "Dienstleistungen",
      careers: "Karriere",
      contact: "Kontaktieren Sie uns",
      bodeHub: "Bode Zentrum",
      trackShipment: "Sendung verfolgen",
      searchPlaceholder: "Suche...",
      video_unsupported: "Ihr Browser unterstützt das Video-Tag nicht.",
      about_bode_logistics: "ÜBER BODE LOGISTICS",
      about_bode_logistics_description:
        "Entdecken Sie unsere Entstehungsgeschichte, unser Engagement für Exzellenz und wie wir nahtlose Logistiklösungen weltweit liefern.",
      dare_to_grow: "WAGEN SIE ZU WACHSEN",
      dare_to_grow_description:
        "Menschen befähigen und gemeinsam logistische Exzellenz aufbauen.",
      engineering_winning_solutions: "ERFOLGREICHE LÖSUNGEN ENTWICKELN",
      engineering_winning_solutions_description:
        "Intelligente Lösungen, die Ihr Unternehmen voranbringen.",
      learn_more: "Erfahren Sie mehr",
      track_and_trace: "Verfolgen und Nachverfolgen",
      track_your_shipment: "Ihre Sendung verfolgen",
      bode_hub_description:
        "Melden Sie sich an oder registrieren Sie sich bei Bode Zentrum, um alle Funktionen zu nutzen. Erstellen Sie Angebote, buchen und versenden Sie weltweit und verwalten Sie Ihre Fracht von Anfang bis Ende über eine einzige Plattform.",
      get_started_bode_hub: "Beginnen Sie mit Bode Zentrum",
      global_logistics_excellence: "Globale Logistik-Exzellenz",
      global_logistics_excellence_description:
        "Bei Bode Logistics definieren wir den globalen Handel mit unübertroffener Präzision und Innovation neu. Unsere erstklassige Infrastruktur erstreckt sich über mehr als 50 Länder und sorgt dafür, dass Ihre Waren mit modernster Technologie und fachkundiger Aufsicht nahtlos vom Ursprung zum Ziel transportiert werden, Stand 21. Juli 2025.",
      global_logistics_excellence_details:
        "Mit einer Flotte modernster Schiffe, Flugzeuge und einem robusten Landtransportnetzwerk liefern wir Zuverlässigkeit im großen Maßstab. Unsere Echtzeitverfolgung und KI-gestützte Analysen bieten unvergleichliche Transparenz und befähigen Unternehmen, in einem dynamischen Markt erfolgreich zu sein.",
      explore_our_network: "Unser Netzwerk erkunden",
      special_highlights: "BESONDERE HIGHLIGHTS",
      special_highlights_description: "Entdecken Sie Bode Logistics!",
      digital_freight_platform: "myBODE - Ihre digitale Frachtplattform",
      bode_insights: "BODE Einblicke",
      promoting_gender_diversity: "Förderung der Geschlechtervielfalt bei BODE",
      case_studies: "Fallstudien",
      innovative_solutions_showcase: "Schaukasten innovativer Lösungen",
      innovative_solutions_showcase_description:
        "Revolutionieren Sie Ihre Lieferkette mit den bahnbrechenden Lösungen von Bode Logistics. Von nachhaltiger Verpackung bis hin zu automatisiertem Warehousing integrieren wir die neuesten Fortschritte, um die Effizienz zu steigern und Kosten zu senken, Stand 21. Juli 2025.",
      innovative_solutions_showcase_details:
        "Unsere proprietäre Logistikplattform nutzt maschinelles Lernen, um Routen zu optimieren und die Nachfrage vorherzusagen, wodurch Sie Zeit und Ressourcen sparen. Erleben Sie einen zukunftssicheren Logistikpartner, der sich für Nachhaltigkeit und Innovation einsetzt.",
      discover_innovations: "Innovationen entdecken",
      real_time_market_updates: "Echtzeit-Markt-Updates",
      real_time_market_updates_description:
        "Bleiben Sie mit den Live-Einblicken von Bode Logistics, Stand 08:50 WAT, 21. Juli 2025, voraus. Unsere Expertenanalysen decken Frachtraten, Hafenstaus und neue Handelsrouten ab, um Ihre Operationen wettbewerbsfähig zu halten.",
      real_time_market_updates_details:
        "Greifen Sie auf Echtzeit-Daten-Dashboards und personalisierte Berichte zu, um sich sofort an Marktveränderungen anzupassen. Unser Analystenteam stellt sicher, dass Sie mit dem Wissen ausgestattet sind, um fundierte Entscheidungen zu treffen.",
      view_live_updates: "Live-Updates anzeigen",
      sustainability_commitment: "Engagement für Nachhaltigkeit",
      sustainability_commitment_description:
        "Bode Logistics ist einem grüneren Morgen verpflichtet. Unsere umweltfreundlichen Initiativen, einschließlich kohlenstoffneutralem Versand, reduzieren Ihren ökologischen Fußabdruck, Stand 21. Juli 2025.",
      sustainability_commitment_details:
        "Wir haben in elektrische Flotten, Lagerhäuser mit erneuerbarer Energie und nachhaltige Verpackungslösungen investiert. Schließen Sie sich uns an, um ein Logistik-Ökosystem zu schaffen, das den Planeten priorisiert.",
      learn_about_sustainability: "Mehr über Nachhaltigkeit erfahren",
      exclusive_client_portal_access: "Exklusiver Zugang zum Kundenportal",
      exclusive_client_portal_access_description:
        "Schalten Sie eine Welt der Kontrolle mit Bode Zentrum frei. Verwalten Sie Sendungen, greifen Sie auf Analysen zu und verbinden Sie sich rund um die Uhr mit unserem Team, ab heute, 21. Juli 2025.",
      exclusive_client_portal_access_details:
        "Unser sicheres Portal bietet Echtzeit-Updates, individuelle Dashboards und direkten Support. Heben Sie Ihre Logistikerfahrung mit einer personalisierten All-in-One-Plattform auf ein neues Niveau.",
      access_bode_hub: "Zugang zu Bode Zentrum",
      bode_logistics_newsroom: "BODE LOGISTICS NACHRICHTENRAUM",
      news_main: "Hauptnachrichten",
      press_release: "Pressemitteilung",
      date_4_25_2025: "25.04.2025",
      newsroom_acquisition_title:
        "Bode Logistics unterzeichnet Vertrag zur Übernahme von Borusan Tedarik und Expansion in der Türkei",
      newsroom_acquisition_description:
        "Bode stimmt einem Aktienübertragungsvertrag für 100% von Borusan Tedarik zu",
      interview: "Interview",
      date_3_19_2025: "19.03.2025",
      news_interview_title: "Die Zukunft der Lieferkette aufbauen",
      article: "Artikel",
      date_4_2_2025: "02.04.2025",
      news_article_title: "Bode Logistics CSR-Zusammenfassungsbericht 2024",
      news_press_release: "Pressemitteilung",
      date_3_28_2025: "28.03.2025",
      news_press_release_title:
        "Bode Logistics erweitert globale Luftfrachtkapazität mit Luftcharter von WUX (China) nach ORD (USA)",
      see_all_news: "ALLE NACHRICHTEN ANSEHEN",
      join_us: "SCHLIESSEN SIE SICH UNS AN",
      join_us_description:
        "Bei Bode Logistics sind wir nicht nur ein führender Anbieter globaler Lieferkettenlösungen; wir sind eine Gemeinschaft von Innovatoren, Kollaborateuren und Problemlösern. Mit einer Präsenz in über 170 Ländern und einer Belegschaft von mehr als 110.000 engagierten Mitarbeitern verstehen wir, dass unsere Mitarbeiter der Schlüssel zu unserem Erfolg sind. Schließen Sie sich uns auf einer Reise an, bei der Sie mutige Schritte in Ihrer Karriere machen und die Möglichkeiten für Wachstum und Entwicklung nutzen können, die auf Sie warten. Wagen Sie es, mit Bode Logistics zu wachsen und die Zukunft der globalen Logistik durch Vorstellungskraft, Exzellenz und Engagement mitzugestalten.",
    },
  },
  zh: {
    translation: {
      services: "服务",
      careers: "职业",
      contact: "联系我们",
      bodeHub: "博德中心",
      trackShipment: "跟踪发货",
      searchPlaceholder: "搜索...",
      video_unsupported: "您的浏览器不支持视频标签。",
      about_bode_logistics: "关于博德物流",
      about_bode_logistics_description:
        "了解我们的起源故事、对卓越的承诺以及我们如何在全球范围内提供无缝物流解决方案。",
      dare_to_grow: "敢于成长",
      dare_to_grow_description: "赋予人们能力，共同打造物流卓越。",
      engineering_winning_solutions: "打造成功解决方案",
      engineering_winning_solutions_description:
        "推动您业务前进的智能解决方案。",
      learn_more: "了解更多",
      track_and_trace: "跟踪与追溯",
      track_your_shipment: "跟踪您的发货",
      bode_hub_description:
        "登录或注册博德中心以享受全部功能。全球范围内报价、预订和运输，并通过单一平台端到端管理您的货物。",
      get_started_bode_hub: "开始使用博德中心",
      global_logistics_excellence: "全球物流卓越",
      global_logistics_excellence_description:
        "在博德物流，我们以无与伦比的精准和创新重新定义全球贸易。我们的世界级基础设施覆盖超过50个国家，确保您的货物从起点到终点无缝运输，配备尖端技术和专家监督，截至2025年7月21日。",
      global_logistics_excellence_details:
        "凭借最先进的船舶、飞机和强大的陆运网络，我们大规模提供可靠性。我们的实时跟踪和人工智能驱动的分析提供了无与伦比的可见性，使企业在动态市场中蓬勃发展。",
      explore_our_network: "探索我们的网络",
      special_highlights: "特别亮点",
      special_highlights_description: "发现博德物流！",
      digital_freight_platform: "myBODE - 您的数字货运平台",
      bode_insights: "博德洞察",
      promoting_gender_diversity: "在博德促进性别多样性",
      case_studies: "案例研究",
      innovative_solutions_showcase: "创新解决方案展示",
      innovative_solutions_showcase_description:
        "通过博德物流的开创性解决方案革新您的供应链。从可持续包装到自动化仓储，我们整合最新技术以提高效率并降低成本，截至2025年7月21日。",
      innovative_solutions_showcase_details:
        "我们的专有物流平台利用机器学习优化路线和预测需求，节省您的时间和资源。体验一个致力于可持续性和创新的未来就绪物流伙伴。",
      discover_innovations: "发现创新",
      real_time_market_updates: "实时市场更新",
      real_time_market_updates_description:
        "通过博德物流的实时洞察保持领先，截至2025年7月21日08:50 WAT。我们的专家分析涵盖运费率、港口拥堵和新贸易路线，以保持您的运营竞争力。",
      real_time_market_updates_details:
        "访问实时数据仪表板和个性化报告，以立即适应市场变化。我们的分析师团队确保您具备做出明智决策的知识。",
      view_live_updates: "查看实时更新",
      sustainability_commitment: "可持续性承诺",
      sustainability_commitment_description:
        "博德物流致力于更绿色的未来。我们的环保举措，包括碳中和运输，减少您的环境足迹，截至2025年7月21日。",
      sustainability_commitment_details:
        "我们投资于电动车队、可再生能源仓库和可持续包装解决方案。加入我们，打造一个优先考虑地球的物流生态系统。",
      learn_about_sustainability: "了解可持续性",
      exclusive_client_portal_access: "独家客户门户访问",
      exclusive_client_portal_access_description:
        "通过博德中心解锁控制世界。管理运输、访问分析并与我们的团队全天候联系，从今天开始，2025年7月21日。",
      exclusive_client_portal_access_details:
        "我们的安全门户提供实时更新、定制仪表板和直接支持。通过个性化的多功能平台提升您的物流体验。",
      access_bode_hub: "访问博德中心",
      bode_logistics_newsroom: "博德物流新闻室",
      news_main: "主要新闻",
      press_release: "新闻发布",
      date_4_25_2025: "2025年4月25日",
      newsroom_acquisition_title:
        "博德物流签署协议收购Borusan Tedarik，扩展土耳其市场",
      newsroom_acquisition_description:
        "博德同意100%收购Borusan Tedarik的股份转让协议",
      interview: "访谈",
      date_3_19_2025: "2025年3月19日",
      news_interview_title: "构建供应链的未来",
      article: "文章",
      date_4_2_2025: "2025年4月2日",
      news_article_title: "博德物流2024年企业社会责任总结报告",
      news_press_release: "新闻发布",
      date_3_28_2025: "2025年3月28日",
      news_press_release_title:
        "博德物流通过WUX（中国）至ORD（美国）的航空包租扩展全球航空货运能力",
      see_all_news: "查看所有新闻",
      join_us: "加入我们",
      join_us_description:
        "在博德物流，我们不仅是全球供应链解决方案的领先提供商；我们是一个由创新者、合作者和问题解决者组成的社区。我们在超过170个国家设有业务，拥有超过110,000名敬业员工，我们明白员工是我们成功的关键。加入我们，开启一段旅程，在这里您可以在职业生涯中迈出大胆步伐，拥抱等待您的成长和发展机会。敢于与博德物流一起成长，通过想象力、卓越和承诺帮助塑造全球物流的未来。",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
