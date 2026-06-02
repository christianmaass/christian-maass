export type Locale = 'de' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    perspectives: string;
    books: string;
    teaching: string;
    boardAdvisory: string;
    contact: string;
    blog: string;
  };
  footer: {
    navigation: string;
    contact: string;
    legal: string;
    imprint: string;
    privacy: string;
    accessibility: string;
    myMostRecentBook: string;
    allRightsReserved: string;
  };
  pages: {
    index: {
      title: string;
      description: string;
      heroTitle: string;
      heroSubtitle: string;
      hero: {
        h1: string;
        triade: string;
        lead: string;
        miniBio: string;
        ctaProfile: string;
        ctaContact: string;
        headlineLeading: string;
        headlineAccent: string;
        headlineTrailing: string;
        credentials: string;
        portraitAlt: string;
      };
      latestArticles: {
        heading: string;
        readAll: string;
      };
      pillars: {
        eyebrow: string;
        intro: string;
        cta: string;
        kiOperating: { title: string; description: string };
        grundlagen: { title: string; description: string };
        boardPerspective: { title: string; description: string };
      };
      cases: {
        eyebrow: string;
        title: string;
        intro: string;
        cta: string;
        thomann: { title: string; subtitle: string; description: string };
        otto: { title: string; subtitle: string; description: string };
        vistaprint: { title: string; subtitle: string; description: string };
      };
      mdThomann: {
        title: string;
        description1: string;
        description2: string;
        cta: string;
      };
      mandates: {
        title: string;
        description: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
      };
      keyAreas: {
        title: string;
        description: string;
        item1: string;
        item2: string;
        item3: string;
      };
    };
    christianMaass: {
      title: string;
      description: string;
      h1: string;
      intro: string;
      cases: {
        eyebrow: string;
        thomann: {
          title: string;
          subtitle: string;
          paragraph1: string;
          paragraph2: string;
        };
        otto: {
          title: string;
          subtitle: string;
          paragraph1: string;
          paragraph2: string;
        };
        vistaprint: {
          title: string;
          subtitle: string;
          paragraph1: string;
          paragraph2: string;
        };
      };
      plugAndPlay: {
        title: string;
        paragraph1: string;
        paragraph2: string;
      };
      publications: {
        title: string;
        paragraph: string;
      };
      mandates: {
        title: string;
        paragraph: string;
      };
      ctaSection: {
        headline: string;
        text: string;
        button: string;
      };
      whatIDo: {
        title: string;
        text: string;
      };
      whereIDoIt: {
        title: string;
        text: string;
      };
      whenCompanies: {
        title: string;
        text: string;
      };
      whatIPublish: {
        title: string;
        text: string;
      };
    };
    kontakt: {
      title: string;
      description: string;
      h1: string;
      lead: string;
      advisory: {
        title: string;
        description: string;
        cta: string;
      };
      speaker: {
        title: string;
        description: string;
        cta: string;
      };
      media: {
        title: string;
        description: string;
        cta: string;
      };
      details: {
        title: string;
        email: string;
        linkedin: string;
        addressTitle: string;
      };
    };
    buecher: {
      title: string;
      description: string;
      h1: string;
      intro: string;
      executivePresence: {
        title: string;
        meta: string;
        description1: string;
        description2: string;
        description3: string;
        cta: string;
      };
      onlineProduktmanagement: {
        title: string;
        meta: string;
        description1: string;
        description2: string;
        description3: string;
        cta: string;
      };
      eBusinessManagement: {
        title: string;
        meta: string;
        description1: string;
        description2: string;
        description3: string;
        cta: string;
      };
      openSource: {
        title: string;
        meta: string;
        description1: string;
        description2: string;
        description3: string;
        cta: string;
      };
    };
    fachartikel: {
      title: string;
      description: string;
      h1: string;
      intro: string;
      pillars: {
        kiOperating: { title: string; description: string };
        grundlagen: { title: string; description: string };
        boardPerspective: { title: string; description: string };
      };
      pillarLabels: {
        kiOperating: string;
        grundlagen: string;
        boardPerspective: string;
      };
      articlesTitle: string;
      articlesIntro: string;
      articles: Array<{
        title: string;
        meta: string;
        description: string;
        cta: string;
        url: string;
        pillar: 'kiOperating' | 'grundlagen' | 'boardPerspective';
        year: string;
      }>;
      strategic: {
        title: string;
        description: string;
        cta: string;
      };
      operational: {
        title: string;
        description: string;
        cta: string;
      };
      legal: {
        title: string;
        description: string;
        cta: string;
      };
    };
    lehre: {
      title: string;
      description: string;
      h1: string;
      intro: string;
      talks: {
        eyebrow: string;
        title: string;
        intro: string;
        kiOperating: { title: string; description: string };
        grundlagen: { title: string; description: string };
        boardPerspective: { title: string; description: string };
      };
      university: {
        eyebrow: string;
        title: string;
        institution: string;
        current: string;
      };
      ctaSection: {
        headline: string;
        text: string;
        button: string;
      };
      keynotes: {
        title: string;
        description: string;
        cta: string;
      };
      teaching: {
        title: string;
        description: string;
        cta: string;
      };
    };
    beirat: {
      title: string;
      description: string;
      h1: string;
      intro: string;
      bevh: {
        title: string;
        item1: string;
        item2: string;
      };
      optilyz: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
      };
      wmd: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
        item4: string;
      };
      mdm: {
        title: string;
        item1: string;
        item2: string;
        item3: string;
      };
    };
  };
  ui: {
    skipToContent: string;
    menuToggle: string;
  };
}

export const translations: Record<Locale, Translations> = {
  de: {
    nav: {
      home: 'Start',
      about: 'Über mich',
      perspectives: 'Essays',
      books: 'Bücher',
      teaching: 'Vorträge & Lehre',
      boardAdvisory: 'Mandate',
      contact: 'Kontakt',
      blog: 'Blog',
    },
    footer: {
      navigation: 'Navigation',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      accessibility: 'Barrierefreiheit',
      myMostRecentBook: 'Mein aktuelles Buch',
      allRightsReserved: '© 2026 Christian Maaß. Alle Rechte vorbehalten.',
    },
    pages: {
      index: {
        title: 'Christian Maaß · Operating Executive für digitale Geschäfte',
        description: 'Strategie, Technologie und Organisation laufen oft nicht synchron. Genau dort arbeite ich – seit 20 Jahren, als Manager, nicht als Berater. Managing Director & CDO Thomann.',
        heroTitle: 'Dr. Christian Maaß',
        heroSubtitle: 'Managing Director & CDO Thomann',
        hero: {
          h1: 'Strategie, Technologie, Organisation.',
          triade: 'Strategie. Technologie. Organisation.',
          lead: 'Die meisten KI- und Digitalprojekte sind technisch erfolgreich und trotzdem wertlos. Nicht weil die Technik versagt — die funktioniert. Sondern weil Strategie, Technik und Organisation in drei Geschwindigkeiten laufen. Über diese Lücke schreibe ich — und darüber, wie man sie schließt.',
          miniBio: '',
          ctaProfile: 'Mein Profil',
          ctaContact: 'Kontakt',
          headlineLeading: 'Strategie, Technologie, ',
          headlineAccent: 'Organisation',
          headlineTrailing: '.',
          credentials: 'CDO · Aufsichtsrat · Autor · Speaker',
          portraitAlt: 'Christian Maaß — Porträt',
        },
        latestArticles: {
          heading: 'Neueste Beiträge',
          readAll: 'alle Artikel lesen',
        },
        pillars: {
          eyebrow: 'Worüber ich arbeite',
          intro: 'Drei Themen, in denen Synchronisation den Unterschied macht – und zu denen ich publiziere, vortrage und berate.',
          cta: 'Perspektiven lesen →',
          kiOperating: {
            title: 'KI im Operating, nicht im Marketing',
            description: 'Die meisten Unternehmen reden über KI, statt mit KI zu arbeiten. Der echte Hebel liegt in Prozessen und Softwareentwicklung – nicht in Demo-Reels und Decks.',
          },
          grundlagen: {
            title: 'Die vergessenen Grundlagen',
            description: 'Während alle über Transformation reden, liegt der größte ungehobene Wert in operativen Grundlagen, die übersehen werden. Substanz schlägt Glanz.',
          },
          boardPerspective: {
            title: 'Board-Perspektive auf Digital & KI',
            description: 'Aufsichtsräte stellen bei Digital und KI oft die falschen Fragen – oder gar keine. Die Übersetzung zwischen Operator-Realität und Board-Verantwortung ist mein zweites Werkzeug.',
          },
        },
        cases: {
          eyebrow: 'Woran ich es bewiesen habe',
          title: 'Drei Beispiele aus zwanzig Jahren',
          intro: 'Familien-Weltmarktführer, Plattform-Transformation, Cross-border-Portfolio. Drei verschiedene Synchronisations-Probleme – eine Methode.',
          cta: 'Mehr im Profil →',
          thomann: {
            title: 'Thomann',
            subtitle: 'seit 2023 · Managing Director & CDO',
            description: 'Familiengeführter Weltmarktführer im Musikhandel, ca. 1,6 Mrd EUR Umsatz. Strategie für die nächste digitale Stufe trifft die operative Realität einer gewachsenen Organisation.',
          },
          otto: {
            title: 'OTTO',
            subtitle: '2009–2010 · Head of Business Development',
            description: 'Plattform-Transformation eines Versandhauses. Marketplace-Logik, gewachsene Logistik und etablierte Marken mussten in einer Roadmap zusammenkommen.',
          },
          vistaprint: {
            title: 'Vistaprint / Cimpress',
            subtitle: '2016–2021 · Managing Director',
            description: 'Cross-border-Portfolio aus sechs europäischen Druck-Akquisitionen (WirmachenDruck, Drukwerkdeal, Druck.at, weitere). Tech-Stacks und Operating-Modelle synchronisieren – ohne lokale Stärken zu zerstören.',
          },
        },
        mdThomann: {
          title: 'MD Thomann',
          description1: 'Managing Director bei Thomann mit Ergebnis- und Organisationsverantwortung für das Digitalgeschäft.',
          description2: 'Thomann erwirtschaftet ca. 1,6 Mrd. EUR Umsatz und ist der weltweit größte digitale Musikhändler.',
          cta: 'Thomann besuchen',
        },
        mandates: {
          title: 'Mandate & Board-Kontext',
          description: 'Ich übernehme Mandate und Beiratsrollen in unterschiedlichen unternehmerischen und verbandlichen Kontexten.',
          item1: 'Vizepräsident Bundesverband E-Commerce, BEVH (aktiv)',
          item2: 'Unternehmensentwicklung (Bertelsmann, OTTO Group – frühere Rollen)',
          item3: 'Ehemalige Executive-Rollen (Managing Director Cimpress Investments NV; Managing Director DRUCK.AT; Vice President Commerce Europe, Cimpress / Vistaprint)',
          item4: 'Beiratsrollen (Auszug): Wir-machen-Druck GmbH, Deutsche Münze MDM',
        },
        keyAreas: {
          title: 'Schwerpunkte',
          description: 'Eingebunden auf Board-Ebene in Situationen, in denen strategische Entscheidungen nicht delegierbar sind und Klarheit sowie Richtung über unterschiedliche Interessen und Verantwortlichkeiten hinweg geschaffen werden müssen.',
          item1: 'Skalierung digitaler Geschäfte jenseits von Gründer- oder Pionierlogik (Thomann, Flyeralarm, Cimpress)',
          item2: 'Aufbau und Rollout neuer Commerce Plattformen unter Live-P&L-Verantwortung (Cimpress, Thomann)',
          item3: 'Portfolio-Management mehrerer Unternehmen in Europa (Cimpress, Printbrothers)',
        },
      },
      christianMaass: {
        title: 'Christian Maaß · Profil. Manager, nicht Berater.',
        description: 'Christian Maaß übernimmt digitale Geschäfte dort, wo Strategie, Technologie und Organisation nicht synchron laufen. 20 Jahre als Operator: Thomann, OTTO, Vistaprint, Flyeralarm, Bertelsmann, AutoScout24.',
        h1: 'Manager, nicht Berater.',
        intro: 'Ich übernehme digitale Geschäfte in Phasen, in denen Strategie, Technologie und Organisation nicht zusammen laufen. Mein Beitrag ist nicht die nächste Strategie-Folie, sondern die Reihenfolge, in der entschieden und umgesetzt wird. Drei Stationen zeigen, was das in der Praxis heißt.',
        cases: {
          eyebrow: 'Drei Beispiele aus zwanzig Jahren',
          thomann: {
            title: 'Thomann · seit 2023',
            subtitle: 'Managing Director & CDO · ca. 1,6 Mrd EUR Umsatz',
            paragraph1: 'Familiengeführter Weltmarktführer im Musikhandel. Aufgabe: die nächste digitale Stufe an die gewachsene Operations-Realität eines Familienunternehmens andocken – ohne die DNA zu zerstören, die Thomann groß gemacht hat.',
            paragraph2: 'Asynchron ist hier vor allem die Geschwindigkeit: Strategie auf Konzern-Niveau, Operations und Organisation auf der Reise dorthin. Synchronisation heißt: gemeinsame Reihenfolge, gemeinsame Sprache, gemeinsame Datenbasis.',
          },
          otto: {
            title: 'OTTO · 2009–2010',
            subtitle: 'Head of Business Development',
            paragraph1: 'Plattform-Transformation eines Versandhauses. Drei Welten standen nebeneinander: die alte Logistik- und Kategoriensteuerung, die neue Marketplace-Logik und die bestehenden Marken – jede mit eigener Sprache, eigenen Anreizen, eigenen Lieferzeiten.',
            paragraph2: 'Synchron wurde es erst, als die Marketplace-Frage nicht mehr als Tech-Projekt, sondern als organisatorische Neuordnung verstanden wurde.',
          },
          vistaprint: {
            title: 'Vistaprint / Cimpress · 2016–2021',
            subtitle: 'Managing Director · Portfolio aus sechs europäischen Akquisitionen',
            paragraph1: 'WirmachenDruck, Drukwerkdeal, Druck.at und drei weitere Druck-Player unter einem Dach. Jede Marke mit eigenem Tech-Stack, eigenem Sortiment, eigener Marge, eigener Sprache zum Kunden.',
            paragraph2: 'Die Synchronisations-Frage: Wie viel Konzern, wie viel Marktnähe? Synchronisation heißt hier nicht Vereinheitlichung, sondern Klarheit darüber, was geteilt wird – und was nicht.',
          },
        },
        plugAndPlay: {
          title: 'Plug-and-Play. Auch in Branchen, die ich vorher nicht kannte.',
          paragraph1: 'Druck, Musik, Automobil-Online, Versandhandel, Medien, KI-Forschung – ich war in keiner dieser Branchen Spezialist, als ich anfing. Ich bin schnell drin. Das geht, weil das Muster (Strategie, Technologie, Organisation in Asynchronität) wiederkehrt – nur die Domänensprache wechselt.',
          paragraph2: 'Headhunter und Aufsichtsräte fragen mich genau deshalb: weil ich keine zehnjährige Branchen-Karriere brauche, um in sechs Wochen den Engpass zu finden.',
        },
        publications: {
          title: 'Werk. Vier Bücher, sechs eTailment-Beiträge, Lehre.',
          paragraph: 'Ich publiziere parallel zu meiner operativen Rolle. Vier Fachbücher – zuletzt „Executive Presence" (Haufe, 2025) –, regelmäßige Beiträge im eTailment-Expertenrat, Lehrbeauftragung an der Frankfurt School of Business & Finance mit dem Seminar „KI im E-Commerce". Das ist keine Marketing-Übung. Es ist die Disziplin, eigene Beobachtungen ordnen zu müssen, bevor man sie weitergibt.',
        },
        mandates: {
          title: 'Mandate. Verband. Akademia.',
          paragraph: 'Vizepräsident E-Commerce im BEVH (seit 2023). Vier Beirats-Mandate (BEVH, Optilyz, WIRmachenDRUCK, MdM). Alumni Oxford, INSEAD, Universität Paderborn. Promotion über strategische Optionen im Wettbewerb mit Open-Source-Software.',
        },
        ctaSection: {
          headline: 'Wenn das zu Ihrer Situation passt:',
          text: 'Beirats- und Mandats-Anfragen, Speaker-Bookings oder Medien-Anfragen erreichen mich am besten direkt. Ich antworte persönlich.',
          button: 'Kontakt aufnehmen',
        },
        whatIDo: {
          title: 'Was ich tue',
          text: 'Ich bin auf Board-Ebene verantwortlich für die Skalierung der end-to-end digitalen Wertschöpfungskette, die Kundenplattformen, Produktdaten, Beschaffung, Service-Operationen und Kerntechnologie umfasst. Mein Fokus liegt auf dem Aufbau nachhaltiger Betriebsmodelle, robuster Plattformen und Governance-Strukturen, die funktionieren, wenn Intuition nicht mehr skaliert. Diese Arbeit erfordert oft die Ausrichtung verschiedener Executive- und Funktionsperspektiven, um gemeinsames Verständnis, klare Verantwortlichkeiten und entscheidungsbereite Strukturen im Maßstab zu etablieren.',
        },
        whereIDoIt: {
          title: 'Wo ich es tue',
          text: 'Ich bin derzeit Managing Director und Chief Digital Officer bei Thomann, einem führenden globalen digitalen Musikhändler, mit vollständiger Verantwortung für das Digitalgeschäft des Unternehmens. Zusätzlich agiere ich in Board-Kontexten zu digitaler Strategie und organisatorischer Transformation. Ich bin Vizepräsident E-Commerce beim Bundesverband E-Commerce und Versandhandel (BEVH).',
        },
        whenCompanies: {
          title: 'Wann Unternehmen mich einbeziehen',
          text: 'Ich werde typischerweise einbezogen, wenn digitale Geschäfte einen Punkt erreichen, an dem strategische, technologische und organisatorische Entscheidungen auf Board-Ebene verlagert werden – beispielsweise während Post-Gründer-Skalierungsphasen, bei konzernweiten Plattformentscheidungen unter Live-P&L-Verantwortung oder wenn die Ausrichtung über mehrere Managing Directors und Märkte hinweg kritisch wird, insbesondere in komplexen und mehrdeutigen Umgebungen, in denen Klarheit geschaffen werden muss, bevor Entscheidungen getroffen werden können.',
        },
        whatIPublish: {
          title: 'Was ich publiziere',
          text: 'Im Rahmen meiner Board-bezogenen Rollen und Aktivitäten publiziere ich zu Strategie, Technologie und Regulierung mit Fokus auf Handel, Commerce und Medien.',
        },
      },
      buecher: {
        title: 'Bücher · Christian Maaß',
        description: 'Vier Bücher in zwanzig Jahren. Executive Presence, Online-Produktmanagement, E-Business Management, Open Source. Werkzeuge für die Praxis – keine CDO-Memoiren.',
        h1: 'Vier Bücher in zwanzig Jahren.',
        intro: 'Jedes geschrieben, weil sich eine wiederkehrende Frage nicht mehr in einem einzigen Vortrag beantworten ließ. Keine CDO-Memoiren, keine Buzzword-Sammlungen – Werkzeuge für die Praxis.',
        executivePresence: {
          title: 'Executive Presence – mehr als der erste Eindruck',
          meta: '<strong>2025</strong> | Haufe Verlag | 156 Seiten',
          description1: 'Executive Presence ist der Schlüssel, der den Unterschied ausmacht: zwischen jemandem, der einfach einen Raum betritt, und jemandem, der ihn verändert. Sie entscheidet darüber, ob Menschen zuhören, folgen und handeln – und ob Führung akzeptiert wird.',
          description2: 'Dieses Buch unterstützt Führungskräfte dabei, ihre Wirkung in sozialen Interaktionen zu optimieren, Einfluss zu gewinnen und ihre Führungsstärke auszubauen. Es beleuchtet, warum wir manche Menschen als Führungspersönlichkeiten wahrnehmen. Dabei stehen vier zentrale Säulen, die eine starke Präsenz ausmachen, im Fokus: Auftreten, Kommunikation, Wirkung sowie Feedback und Selbstreflexion.',
          description3: 'Praxiserprobte Methoden, Fallbeispiele und Selbstchecks helfen Ihnen, auch unter Druck oder in schwierigen Situationen souverän aufzutreten und Ihre Führungsstärke gezielt einzusetzen.',
          cta: 'Bei Amazon bestellen →',
        },
        onlineProduktmanagement: {
          title: 'Online-Produktmanagement: Von der Idee zum Online-Produkt',
          meta: '<strong>2010</strong> | Carl Hanser Verlag | 272 Seiten | Mit Gotthard Pietsch',
          description1: 'Online-Produkte wie Amazon, Twitter & Co. oder auch die Webpräsenz Ihres Unternehmens prägen mittlerweile die moderne Wirtschaft und bringen grundlegende Veränderungen gewachsener Business-Strukturen mit sich. Auch für Sie als Produktmanager bedeutet das einschneidende Veränderungen.',
          description2: 'Die betriebswirtschaftlichen Kenntnisse alleine reichen nicht mehr aus. Wer Online-Produkte erfolgreich etablieren will, muss sich auch mit der Informationstechnik auseinandersetzen. Dieses Buch bietet einen praxisorientierten und systematischen Überblick über das Online-Produktmanagement und damit einen Leitfaden für Ihre tägliche Arbeit.',
          description3: 'Es beschreibt die zentralen Aufgaben und Tätigkeitsfelder und stellt die dafür benötigten Arbeitsinstrumente und -methoden vor. Basiert auf der Erfahrung der Autoren mit erfolgreich etablierten Online-Produkten von Unternehmen wie AutoScout24, Lycos Europe, Otto und Bertelsmann. Beispiele aus der Praxis, Erfahrungsberichte verschiedener Online-Produktmanager sowie Arbeitsvorlagen und Checklisten helfen beim Transfer des Gelernten in Ihre Projekte.',
          cta: 'Bei Amazon bestellen →',
        },
        eBusinessManagement: {
          title: 'E-Business Management: Gestaltung von Geschäftsmodellen in der vernetzten Wirtschaft',
          meta: '<strong>2008</strong> | UTB Verlag | 321 Seiten',
          description1: 'Die elektronische Geschäftstätigkeit gewinnt für Unternehmen in allen Wirtschaftszweigen immer mehr an Bedeutung. Die Auseinandersetzung mit dem E-Business Management bereitet mitunter jedoch erhebliche Probleme. An dieser Stelle setzt das vorliegende Buch an.',
          description2: 'Es vermittelt dem Leser die aus betriebswirtschaftlicher Sicht relevanten technischen Grundlagen, um Geschäftsmodelle im E-Business beurteilen, gestalten und modifizieren zu können, sowie die dazu benötigten Steuerungs- und Analysewerkzeuge kennen zu lernen.',
          description3: 'Das Buch ist als Einführung und zugleich Nachschlagewerk für das Thema E-Business Management konzipiert und richtet sich an Studenten und Lehrende an Universitäten und Fachhochschulen, aber auch Leser aus der Unternehmenspraxis, die sich einen fundierten Überblick über die Gestaltung digitaler Geschäftsmodelle verschaffen möchten.',
          cta: 'Bei Amazon bestellen →',
        },
        openSource: {
          title: 'Strategische Optionen im Wettbewerb mit Open-Source-Software',
          meta: '<strong>2006</strong> | Logos Berlin | 241 Seiten',
          description1: 'Open-Source-Software hat in den vergangenen Jahren eine große Resonanz in der Wirtschaft hervorgerufen. In dieser Arbeit werden damit einhergehende wettbewerbsstrategische Fragen diskutiert.',
          description2: 'Dabei wird eine neue Strategietypologie entwickelt und deren inhaltliche Ausgestaltung im Bereich der Preis- und Lizenzpolitik erörtert. Die Dissertation analysiert die strategischen Optionen, die Unternehmen im Wettbewerb mit Open-Source-Software zur Verfügung stehen, und beleuchtet die Implikationen aus netzwerkökonomischer Perspektive.',
          description3: 'Das Buch richtet sich an Dozenten und Studenten der Wirtschaftsinformatik und Betriebswirtschaftslehre sowie an Führungskräfte in der IT-Branche, die sich mit den strategischen Herausforderungen von Open-Source-Software auseinandersetzen möchten.',
          cta: 'Bei Amazon bestellen →',
        },
      },
      fachartikel: {
        title: 'Perspektiven · Christian Maaß',
        description: 'Sechs Artikel, drei Themen-Säulen: KI im Operating, vergessene Grundlagen, Board-Perspektive. Beobachtungen aus der operativen Verantwortung.',
        h1: 'Perspektiven.',
        intro: 'Sechs Artikel im eTailment-Expertenrat, drei Themen-Säulen: KI im Operating, vergessene Grundlagen, Board-Perspektive auf Digital. Keine Marketing-Sprech, keine Pressemitteilungen – Beobachtungen aus der operativen Verantwortung.',
        pillars: {
          kiOperating: {
            title: 'KI im Operating, nicht im Marketing',
            description: 'Die meisten Unternehmen reden über KI, statt mit KI zu arbeiten. Der echte Hebel liegt in Prozessen und Softwareentwicklung – nicht in Demo-Reels.',
          },
          grundlagen: {
            title: 'Die vergessenen Grundlagen',
            description: 'Während alle über Transformation reden, liegt der größte ungehobene Wert in operativen Grundlagen, die übersehen werden. Margen, Komplexitätsdisziplin, Reihenfolge.',
          },
          boardPerspective: {
            title: 'Board-Perspektive auf Digital & KI',
            description: 'Aufsichtsräte stellen bei Digital und KI oft die falschen Fragen – oder gar keine. Strategische Marktbeobachtung in Board-Sprache.',
          },
        },
        pillarLabels: {
          kiOperating: 'KI im Operating',
          grundlagen: 'Vergessene Grundlagen',
          boardPerspective: 'Board-Perspektive',
        },
        articlesTitle: 'Artikel im eTailment-Expertenrat',
        articlesIntro: 'Gruppiert nach Säule, innerhalb chronologisch sortiert (neueste zuerst).',
        articles: [
          {
            title: 'Warum das Spiel mit den Margen endlich ist',
            meta: '<strong>2024</strong> | eTailment',
            description: 'Black Friday und Cyber Week haben sich zu einem Margenwettbewerb entwickelt, der langfristig nicht nachhaltig ist. Wie Händler aus dem Teufelskreis ausbrechen – und warum Margen-Disziplin eine vergessene Grundlage ist.',
            cta: 'Artikel lesen →',
            url: 'https://etailment.de/news/stories/black-friday-und-cyber-week-warum-das-spiel-mit-den-margen-endlich-ist-24992',
            pillar: 'grundlagen',
            year: '2024',
          },
          {
            title: 'Braucht der E-Commerce noch Entwickler – oder nur noch Anwälte?',
            meta: '<strong>2024</strong> | eTailment',
            description: 'Die zunehmende Regulierung im E-Commerce verschiebt Ressourcen. Wo Engineering-Kapazität durch Compliance-Kapazität ersetzt wird – und warum das eine Frage des Operating-Modells ist, nicht der Strategie.',
            cta: 'Artikel lesen →',
            url: 'https://etailment.de/news/stories/buerokratie-braucht-der-e-commerce-noch-entwickler---oder-nur-noch-anwaelte-24923',
            pillar: 'kiOperating',
            year: '2024',
          },
          {
            title: 'Hier lauern Komplexitätsfallen für Online-Händler',
            meta: '<strong>2024</strong> | eTailment',
            description: 'Systemkomplexität ist eine der größten Herausforderungen im E-Commerce. Welche Komplexitätsfallen typisch sind, woran man sie erkennt – und warum Komplexitätsdisziplin oft wichtiger ist als die nächste neue Plattform.',
            cta: 'Artikel lesen →',
            url: 'https://etailment.de/news/stories/e-commerce-hier-lauern-komplexitaetsfallen-fuer-online-haendler-24738',
            pillar: 'grundlagen',
            year: '2024',
          },
          {
            title: 'Erlebt der Handel mit Temu den Tesla-Moment der Autoindustrie?',
            meta: '<strong>2023</strong> | eTailment',
            description: 'Was Temu für den europäischen Handel bedeutet – analysiert in Board-Sprache. Welche strategischen Implikationen für etablierte Händler aus dieser Disruption folgen.',
            cta: 'Artikel lesen →',
            url: 'https://etailment.de/news/stories/etailment-expertenrat-erlebt-der-handel-mit-temu-den-tesla-moment-der-autoindustrie-24433',
            pillar: 'boardPerspective',
            year: '2023',
          },
          {
            title: 'Krisenjahr 2023: Diese Hausaufgaben muss der Handel jetzt machen',
            meta: '<strong>2022</strong> | eTailment',
            description: 'In multiplen Krisen müssen Aufsichtsräte und Boards Prioritäten setzen. Welche strategischen Anpassungen krisenfest machen – und welche Fragen Boards stellen sollten, bevor sie genehmigen.',
            cta: 'Artikel lesen →',
            url: 'https://etailment.de/news/stories/etailment-expertenrat-krisenjahr-2023-diese-hausaufgaben-muss-der-handel-jetzt-machen-24190',
            pillar: 'boardPerspective',
            year: '2022',
          },
          {
            title: 'Wie krisenfest ist der E-Commerce 2023?',
            meta: '<strong>2022</strong> | eTailment',
            description: 'Strukturanalyse: Welche Stärken und Schwächen des digitalen Handels in der Krise sichtbar werden. Eine Standortbestimmung für strategische Entscheidungen auf Board-Ebene.',
            cta: 'Artikel lesen →',
            url: 'https://etailment.de/news/stories/handeln-in-zeiten-der-krise-wie-krisenfest-ist-der-e-commerce-2023-24090',
            pillar: 'boardPerspective',
            year: '2022',
          },
        ],
        strategic: {
          title: 'Strategische Marktentwicklungen',
          description: 'Veraltet – wird durch Säulen ersetzt.',
          cta: 'Zu den Artikeln',
        },
        operational: {
          title: 'Operative Herausforderungen',
          description: 'Veraltet – wird durch Säulen ersetzt.',
          cta: 'Zu den Artikeln',
        },
        legal: {
          title: 'Rechtliche und organisatorische Aspekte',
          description: 'Veraltet – wird durch Säulen ersetzt.',
          cta: 'Zu den Artikeln',
        },
      },
      lehre: {
        title: 'Vorträge & Lehre · Christian Maaß',
        description: 'Vorträge entlang drei Säulen: KI im Operating, vergessene Grundlagen, Board-Perspektive. Plus Lehrauftrag an der Frankfurt School of Business & Finance.',
        h1: 'Vorträge und Lehre.',
        intro: 'Drei Themen, die wiederkehren – auf Bühnen wie im Seminar. Vorträge entstehen aus der operativen Praxis: keine Theorie-Folien, keine Marketing-Sprech.',
        talks: {
          eyebrow: 'Vortragsthemen',
          title: 'Drei Themen, drei Vorträge.',
          intro: 'Konkrete Beobachtungen mit konkreter Konsequenz – für Board, Vorstand oder Führungskreis. Format und Dauer abgestimmt auf die Situation.',
          kiOperating: {
            title: 'KI im Operating, nicht im Marketing',
            description: 'Was passiert wirklich, wenn KI im Unternehmen ankommt? Warum die meisten Unternehmen Copy-Paste machen, statt mit KI zu arbeiten – und wo der echte Hebel sitzt: in Prozessen und Softwareentwicklung.',
          },
          grundlagen: {
            title: 'Die vergessenen Grundlagen',
            description: 'Während alle über Transformation reden, bleibt der größte Wert in operativen Grundlagen liegen. Margen, Komplexitätsdisziplin, Executive Presence – wo Substanz Glanz schlägt.',
          },
          boardPerspective: {
            title: 'Board-Perspektive auf Digital & KI',
            description: 'Welche Fragen müsste der Aufsichtsrat zu Digital und KI stellen – und tut es selten. Governance-Agenda für Boards, übersetzt aus der Operator-Realität.',
          },
        },
        university: {
          eyebrow: 'Lehre',
          title: 'Frankfurt School of Business & Finance',
          institution: 'Lehrbeauftragter an einer der führenden Business Schools im deutschsprachigen Raum.',
          current: 'Aktuelles Seminar (Wintersemester 2025/26): »KI im E-Commerce«.',
        },
        ctaSection: {
          headline: 'Interesse an einem Vortrag oder einer Zusammenarbeit?',
          text: 'Speaker-Bookings am besten mit Datum, Format und thematischer Erwartung in einer Mail. Ich antworte persönlich.',
          button: 'Kontakt aufnehmen',
        },
        keynotes: {
          title: 'Vorträge und Key Notes',
          description: 'Veraltet.',
          cta: 'Vortrag anfragen',
        },
        teaching: {
          title: 'Lehraufträge und Seminare',
          description: 'Veraltet.',
          cta: 'Infos folgen',
        },
      },
      beirat: {
        title: 'Beirat & Verbandsarbeit · Christian Maaß',
        description: 'Vier Beirats-Mandate, eine Vorstandsrolle im BEVH. Ich werde gerufen, wenn es um die Reihenfolge geht – was wird zuerst entschieden, wer entscheidet, wann wird umgesetzt.',
        h1: 'Beirat & Verbandsarbeit.',
        intro: 'Vier Beirats-Mandate, eine Vorstandsrolle im BEVH. Ich werde gerufen, wenn es nicht um die nächste Strategie geht, sondern um die Reihenfolge: Was wird zuerst entschieden, wer entscheidet, wann wird umgesetzt.',
        bevh: {
          title: 'Vorstand im Bundesverband E-Commerce und Versandhandel',
          item1: 'Seit 2023 bin ich Vorstandsmitglied im Bundesverband E-Commerce und Versandhandel.',
          item2: 'Link zur Seite des BEVH: <a href="https://bevh.org/" target="_blank" rel="noopener noreferrer">Bundesverband E-Commerce und Versandhandel</a>',
        },
        optilyz: {
          title: 'Mitglied im Beirat',
          item1: 'Von 2019 bis 2021 habe ich Optilyz als Beirat unterstützt.',
          item2: 'Optilyz ist ein Unternehmen, das sich auf die Automatisierung von Direct Mail (physischen Postsendungen) spezialisiert hat.',
          item3: 'Durch den Einsatz ihrer Software integrieren sie physische Postsendungen wie Briefe, Selfmailer und Postkarten in das kanalübergreifende Marketing ihrer Kunden.',
          item4: 'Ziel von Optilyz ist es, Direct Mail in einen agilen Leistungskanal zu verwandeln, der auf datengesteuerter, personalisierter und automatisierter Umsetzung basiert.',
        },
        wmd: {
          title: 'Mitglied im Beirat',
          item1: 'Von 2017 bis 2021 habe ich WIRmachenDRUCK als Beirat unterstützt.',
          item2: 'Wirmachendruck ist der innovativste und eines der größten Online-Druckportale und Teil des Cimpress Konzerns (NASDAQ: CIM).',
          item3: 'Das Unternehmen bietet Privat- und Geschäftskunden die Möglichkeit, Druckaufträge einfach und effizient online zu gestalten und zu bestellen.',
          item4: 'Ziel von Wirmachendruck ist es, den Druckprozess durch innovative Online-Lösungen zu vereinfachen und höchste Qualität mit wettbewerbsfähigen Preisen zu verbinden.',
        },
        mdm: {
          title: 'Mitglied im Beirat',
          item1: 'Von 2016 bis 2017 habe ich die MdM Münzhandelsgesellschaft als Beirat unterstützt.',
          item2: 'MDM ist eines der weltweit größten Versandhäuser für Münzen und Medaillen. Sie spezialisieren sich auf den Handel und die Vermarktung von Sammlermünzen, Gedenkprägungen und historischen Zahlungsmitteln aus aller Welt.',
          item3: 'Ziel von MDM ist es, Münzsammlern und Interessierten exklusive und qualitativ hochwertige Produkte anzubieten und das kulturelle Erbe sowie die Faszination der Numismatik einem breiten Publikum zugänglich zu machen.',
        },
      },
      kontakt: {
        title: 'Kontakt · Christian Maaß',
        description: 'Beirats- und Mandats-Anfragen, Speaker-Bookings, Medien-Anfragen an Christian Maaß. Persönlich, diskret, ohne Formular.',
        h1: 'Sprechen wir.',
        lead: 'Drei Wege, wie ich kontaktiert werde. Welcher passt für Sie?',
        advisory: {
          title: 'Beirats- & Mandats-Anfragen',
          description: 'Diskret per E-Mail oder über Ihre Search-Partner. Eine kurze Skizze der Situation reicht – ich melde mich persönlich zurück.',
          cta: 'christian@christianmaass.com',
        },
        speaker: {
          title: 'Speaker- & Keynote-Bookings',
          description: 'Bevorzugt mit Datum, Format und thematischer Erwartung in einer Mail. Themen: KI im Operating, vergessene Grundlagen, Board-Perspektive auf Digital.',
          cta: 'christian@christianmaass.com',
        },
        media: {
          title: 'Medien & Interviews',
          description: 'Anfragen zu E-Commerce, Skalierung, Digital Operating und KI im Handel. Ich gebe Interviews mit klarer Position – keinen Marketing-Sprech.',
          cta: 'christian@christianmaass.com',
        },
        details: {
          title: 'Direkt erreichbar',
          email: 'christian@christianmaass.com',
          linkedin: 'linkedin.com/in/christianmaass',
          addressTitle: 'Postanschrift',
        },
      },
    },
    ui: {
      skipToContent: 'Zum Inhalt springen',
      menuToggle: 'Menü öffnen/Schließen',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About me',
      perspectives: 'Essays',
      books: 'Books',
      teaching: 'Talks & Teaching',
      boardAdvisory: 'Mandates',
      contact: 'Contact',
      blog: 'Blog',
    },
    footer: {
      navigation: 'Navigation',
      contact: 'Contact',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy',
      accessibility: 'Accessibility',
      myMostRecentBook: 'My most recent book',
      allRightsReserved: '© 2026 Christian Maaß. All rights reserved.',
    },
    pages: {
      index: {
        title: 'Christian Maaß · Operating Executive for digital businesses',
        description: 'Strategy, technology and organisation often run out of sync. That is where I work – for 20 years, as a manager, not a consultant. Managing Director & CDO at Thomann.',
        heroTitle: 'Dr. Christian Maaß',
        heroSubtitle: 'Managing Director & CDO Thomann',
        hero: {
          h1: 'Strategy, Technology, Organisation.',
          triade: 'Strategy. Technology. Organisation.',
          lead: 'Most AI and digital projects succeed technically and remain worthless. Not because the technology fails — it works. But because strategy, technology and organisation run at three different speeds. I write about that gap — and about how to close it.',
          miniBio: '',
          ctaProfile: 'My profile',
          ctaContact: 'Contact',
          headlineLeading: 'Strategy, Technology, ',
          headlineAccent: 'Organisation',
          headlineTrailing: '.',
          credentials: 'CDO · Board Director · Author · Speaker',
          portraitAlt: 'Christian Maaß — portrait',
        },
        latestArticles: {
          heading: 'Latest Articles',
          readAll: 'read all articles',
        },
        pillars: {
          eyebrow: 'What I work on',
          intro: 'Three topics where synchronisation makes the difference – and where I publish, speak and advise.',
          cta: 'Read perspectives →',
          kiOperating: {
            title: 'AI in operating, not in marketing',
            description: 'Most companies talk about AI instead of working with it. The real leverage is in processes and software engineering – not in demo reels and decks.',
          },
          grundlagen: {
            title: 'The forgotten fundamentals',
            description: 'While everyone talks transformation, the largest untapped value sits in operational fundamentals that get overlooked. Substance beats polish.',
          },
          boardPerspective: {
            title: 'Board perspective on digital & AI',
            description: 'Supervisory boards often ask the wrong digital and AI questions – or none at all. Translating between operator reality and board responsibility is my second tool.',
          },
        },
        cases: {
          eyebrow: 'Where I have proven it',
          title: 'Three examples from twenty years',
          intro: 'Family-owned global market leader, platform transformation, cross-border portfolio. Three different synchronisation problems – one method.',
          cta: 'More in the profile →',
          thomann: {
            title: 'Thomann',
            subtitle: 'since 2023 · Managing Director & CDO',
            description: 'Family-owned global market leader in music retail, approx. EUR 1.6bn revenue. Strategy for the next digital stage meets the operational reality of a grown organisation.',
          },
          otto: {
            title: 'OTTO',
            subtitle: '2009–2010 · Head of Business Development',
            description: 'Platform transformation of a mail-order retailer. Marketplace logic, established logistics and existing brands had to come together in one roadmap.',
          },
          vistaprint: {
            title: 'Vistaprint / Cimpress',
            subtitle: '2016–2021 · Managing Director',
            description: 'Cross-border portfolio of six European print acquisitions (WirmachenDruck, Drukwerkdeal, Druck.at and more). Synchronising tech stacks and operating models – without destroying local strengths.',
          },
        },
        mdThomann: {
          title: 'MD Thomann',
          description1: 'Managing Director at Thomann with full P&L and organizational responsibility for the digital business.',
          description2: 'Thomann generates approx. EUR 1.6bn in revenue and is the world\'s largest digital music retailer.',
          cta: 'Visit Thomann',
        },
        mandates: {
          title: 'Mandates & Board Context',
          description: 'I take on mandates and advisory board roles across a range of different corporate and industry contexts.',
          item1: 'Vice President E-Commerce, BEVH (active)',
          item2: 'Board Advisory Roles (Bertelsmann, OTTO Group – past roles)',
          item3: 'Former Executive Roles (Managing Director Cimpress Investments NV; Managing Director DRUCK.AT; Vice President Commerce Europe, Cimpress / Vistaprint)',
          item4: 'Selected advisory board roles (excerpt): Wir-machen-Druck GmbH, Deutsche Münze (MDM)',
        },
        keyAreas: {
          title: 'Key Areas of Focus',
          description: 'Engaged at board level in situations where strategic decisions cannot be delegated and clarity as well as direction have to be created across multiple stakeholders with diverging priorities.',
          item1: 'Scaling digital businesses beyond founder or pioneer logic (Thomann, Flyeralarm, Cimpress)',
          item2: 'Building and rolling out core technology platforms under live P&L responsibility (Cimpress)',
          item3: 'Operating and aligning multiple managing directors across markets and entities (Cimpress, Printbrothers)',
        },
      },
      christianMaass: {
        title: 'Christian Maaß · Profile. Manager, not consultant.',
        description: 'Christian Maaß takes on digital businesses where strategy, technology and organisation do not run in sync. 20 years as an operator: Thomann, OTTO, Vistaprint, Flyeralarm, Bertelsmann, AutoScout24.',
        h1: 'Manager, not consultant.',
        intro: 'I take on digital businesses in phases where strategy, technology and organisation do not run together. My contribution is not the next strategy deck but the order in which decisions are made and executed. Three stations show what that means in practice.',
        cases: {
          eyebrow: 'Three examples from twenty years',
          thomann: {
            title: 'Thomann · since 2023',
            subtitle: 'Managing Director & CDO · approx. EUR 1.6bn revenue',
            paragraph1: 'Family-owned global market leader in music retail. The task: dock the next digital stage onto the grown operational reality of a family business – without destroying the DNA that made Thomann big.',
            paragraph2: 'What is out of sync here is mostly speed: strategy at corporate level, operations and organisation on the journey there. Synchronisation means shared sequence, shared language, shared data foundation.',
          },
          otto: {
            title: 'OTTO · 2009–2010',
            subtitle: 'Head of Business Development',
            paragraph1: 'Platform transformation of a mail-order retailer. Three worlds stood next to each other: old logistics and category steering, new marketplace logic, and existing brands – each with its own language, incentives and lead times.',
            paragraph2: 'It only became synchronised once the marketplace question was understood not as a tech project but as an organisational re-ordering.',
          },
          vistaprint: {
            title: 'Vistaprint / Cimpress · 2016–2021',
            subtitle: 'Managing Director · portfolio of six European acquisitions',
            paragraph1: 'WirmachenDruck, Drukwerkdeal, Druck.at and three more print players under one roof. Each brand with its own tech stack, range, margin and tone towards the customer.',
            paragraph2: 'The synchronisation question: how much group, how much local proximity? Synchronisation here does not mean uniformity, but clarity about what is shared – and what is not.',
          },
        },
        plugAndPlay: {
          title: 'Plug-and-play. Including in industries I did not know.',
          paragraph1: 'Print, music, online automotive, mail order, media, AI research – I was a specialist in none of these industries when I started. I get up to speed fast. That works because the pattern (strategy, technology, organisation out of sync) recurs – only the domain language changes.',
          paragraph2: 'Headhunters and supervisory boards ask me for exactly that reason: because I do not need a ten-year industry career to find the bottleneck in six weeks.',
        },
        publications: {
          title: 'Work. Four books, six eTailment contributions, teaching.',
          paragraph: 'I publish in parallel to my operating role. Four expert books – most recently "Executive Presence" (Haufe, 2025) –, regular contributions in the eTailment expert panel, lectureship at Frankfurt School of Business & Finance with the seminar "AI in E-Commerce". This is not a marketing exercise. It is the discipline of having to order one\'s own observations before passing them on.',
        },
        mandates: {
          title: 'Mandates. Association. Academia.',
          paragraph: 'Vice President E-Commerce at BEVH (since 2023). Four advisory board mandates (BEVH, Optilyz, WIRmachenDRUCK, MdM). Alumni Oxford, INSEAD, Paderborn University. Doctorate on strategic options in competition with open source software.',
        },
        ctaSection: {
          headline: 'If this fits your situation:',
          text: 'Advisory and mandate enquiries, speaker bookings or media requests reach me best directly. I reply personally.',
          button: 'Get in touch',
        },
        whatIDo: {
          title: 'What I do',
          text: 'I am responsible at board level for scaling the end-to-end digital value chain, covering customer platforms, product data, sourcing, service operations and core technology. My focus is on building sustainable operating models, robust platforms and governance structures that hold when intuition no longer scales. This work often involves aligning diverse executive and functional perspectives to establish shared understanding, clear ownership and decision-ready structures at scale.',
        },
        whereIDoIt: {
          title: 'Where I do it',
          text: 'I currently serve as Managing Director and Chief Digital Officer at Thomann, a leading global digital music retailer, with full responsibility for the company\'s digital business. In addition, I act in board-level contexts on digital strategy and organizational transformation. I serve as Vice President E-Commerce at the German E-Commerce Association (BEVH).',
        },
        whenCompanies: {
          title: 'When companies bring me in',
          text: 'I am typically brought in when digital businesses reach a point where strategic, technological and organizational decisions move to board level — for example during post-founder scaling phases, in group-wide platform decisions under live P&L responsibility, or when alignment across multiple managing directors and markets becomes critical, particularly in complex and ambiguous environments where clarity has to be created before decisions can be made.',
        },
        whatIPublish: {
          title: 'What I publish',
          text: 'As part of my board-related roles and activities, I publish on strategy, technology and regulation, with a focus on retail, commerce and media.',
        },
      },
      buecher: {
        title: 'Books · Christian Maaß',
        description: 'Four books in twenty years. Executive Presence, Online Product Management, E-Business Management, Open Source. Tools for practice – not CDO memoirs.',
        h1: 'Four books in twenty years.',
        intro: 'Each written because a recurring question could no longer be answered in a single talk. No CDO memoirs, no buzzword collections – tools for practice.',
        executivePresence: {
          title: 'Executive Presence – more than first impressions',
          meta: '<strong>2025</strong> | Haufe Verlag | 156 pages',
          description1: 'Executive Presence is the key that makes the difference: between someone who simply enters a room and someone who changes it. It determines whether people listen, follow and act – and whether leadership is accepted.',
          description2: 'This book supports executives in optimizing their impact in social interactions, gaining influence and expanding their leadership strength. It illuminates why we perceive some people as leaders. Four central pillars that make up strong presence are in focus: appearance, communication, impact, and feedback/self-reflection.',
          description3: 'Proven methods, case studies and self-checks help you to appear confidently even under pressure or in difficult situations and to use your leadership strength strategically.',
          cta: 'Order on Amazon →',
        },
        onlineProduktmanagement: {
          title: 'Online Product Management: From Idea to Online Product',
          meta: '<strong>2010</strong> | Carl Hanser Verlag | 272 pages | With Gotthard Pietsch',
          description1: 'Online products like Amazon, Twitter & Co. or your company\'s web presence now shape the modern economy and bring fundamental changes to established business structures. This also means significant changes for you as a product manager.',
          description2: 'Business knowledge alone is no longer enough. Anyone who wants to successfully establish online products must also deal with information technology. This book provides a practical and systematic overview of online product management and thus a guide for your daily work.',
          description3: 'It describes the central tasks and fields of activity and presents the working tools and methods needed for them. Based on the authors\' experience with successfully established online products from companies such as AutoScout24, Lycos Europe, Otto and Bertelsmann. Examples from practice, reports from various online product managers as well as work templates and checklists help transfer what you have learned to your projects.',
          cta: 'Order on Amazon →',
        },
        eBusinessManagement: {
          title: 'E-Business Management: Designing Business Models in the Networked Economy',
          meta: '<strong>2008</strong> | UTB Verlag | 321 pages',
          description1: 'Electronic business is becoming increasingly important for companies in all sectors. However, dealing with e-business management sometimes causes considerable problems. This is where this book comes in.',
          description2: 'It provides readers with the technically relevant fundamentals from a business perspective to be able to assess, design and modify business models in e-business, as well as to get to know the control and analysis tools needed for this.',
          description3: 'The book is designed as an introduction and reference work on the topic of e-business management and is aimed at students and teachers at universities and colleges, but also readers from business practice who want to gain a sound overview of the design of digital business models.',
          cta: 'Order on Amazon →',
        },
        openSource: {
          title: 'Strategic Options in Competition with Open Source Software',
          meta: '<strong>2006</strong> | Logos Berlin | 241 pages',
          description1: 'Open source software has generated great resonance in the economy in recent years. This work discusses associated competitive strategy issues.',
          description2: 'A new strategy typology is developed and its content design in the area of pricing and licensing policy is discussed. The dissertation analyzes the strategic options available to companies in competition with open source software and examines the implications from a network economics perspective.',
          description3: 'The book is aimed at lecturers and students of business informatics and business administration as well as executives in the IT industry who want to deal with the strategic challenges of open source software.',
          cta: 'Order on Amazon →',
        },
      },
      fachartikel: {
        title: 'Perspectives · Christian Maaß',
        description: 'Six articles, three thematic pillars: AI in operating, forgotten fundamentals, board perspective. Observations from operational responsibility.',
        h1: 'Perspectives.',
        intro: 'Six articles in the eTailment expert panel, three thematic pillars: AI in operating, forgotten fundamentals, board perspective on digital. No marketing talk, no press releases – observations from operational responsibility.',
        pillars: {
          kiOperating: {
            title: 'AI in operating, not in marketing',
            description: 'Most companies talk about AI instead of working with it. The real leverage is in processes and software engineering – not in demo reels.',
          },
          grundlagen: {
            title: 'The forgotten fundamentals',
            description: 'While everyone talks transformation, the largest untapped value sits in operational fundamentals that get overlooked. Margins, complexity discipline, sequence.',
          },
          boardPerspective: {
            title: 'Board perspective on digital & AI',
            description: 'Supervisory boards often ask the wrong digital and AI questions – or none at all. Strategic market observation in board language.',
          },
        },
        pillarLabels: {
          kiOperating: 'AI in operating',
          grundlagen: 'Forgotten fundamentals',
          boardPerspective: 'Board perspective',
        },
        articlesTitle: 'Articles in the eTailment expert panel',
        articlesIntro: 'Grouped by pillar, within sorted chronologically (newest first). Published in German.',
        articles: [
          {
            title: 'Why the margin game is over',
            meta: '<strong>2024</strong> | eTailment',
            description: 'Black Friday and Cyber Week have turned into a margin race that is not sustainable. How retailers can break out of the vicious circle – and why margin discipline is a forgotten fundamental.',
            cta: 'Read article →',
            url: 'https://etailment.de/news/stories/black-friday-und-cyber-week-warum-das-spiel-mit-den-margen-endlich-ist-24992',
            pillar: 'grundlagen',
            year: '2024',
          },
          {
            title: 'Does e-commerce still need developers – or just lawyers?',
            meta: '<strong>2024</strong> | eTailment',
            description: 'Increasing regulation in e-commerce shifts resources. Where engineering capacity is replaced by compliance capacity – and why that is a question of operating model, not strategy.',
            cta: 'Read article →',
            url: 'https://etailment.de/news/stories/buerokratie-braucht-der-e-commerce-noch-entwickler---oder-nur-noch-anwaelte-24923',
            pillar: 'kiOperating',
            year: '2024',
          },
          {
            title: 'Complexity traps for online retailers',
            meta: '<strong>2024</strong> | eTailment',
            description: 'System complexity is one of the biggest challenges in e-commerce. Which complexity traps are typical, how to recognise them – and why complexity discipline is often more important than the next new platform.',
            cta: 'Read article →',
            url: 'https://etailment.de/news/stories/e-commerce-hier-lauern-komplexitaetsfallen-fuer-online-haendler-24738',
            pillar: 'grundlagen',
            year: '2024',
          },
          {
            title: 'Is commerce experiencing the Tesla moment of the automotive industry with Temu?',
            meta: '<strong>2023</strong> | eTailment',
            description: 'What Temu means for European commerce – analysed in board language. Which strategic implications follow from this disruption for established retailers.',
            cta: 'Read article →',
            url: 'https://etailment.de/news/stories/etailment-expertenrat-erlebt-der-handel-mit-temu-den-tesla-moment-der-autoindustrie-24433',
            pillar: 'boardPerspective',
            year: '2023',
          },
          {
            title: 'Crisis year 2023: These are the tasks commerce must now complete',
            meta: '<strong>2022</strong> | eTailment',
            description: 'In multiple crises, boards and supervisory boards must set priorities. Which strategic adjustments build resilience – and which questions boards should ask before approving.',
            cta: 'Read article →',
            url: 'https://etailment.de/news/stories/etailment-expertenrat-krisenjahr-2023-diese-hausaufgaben-muss-der-handel-jetzt-machen-24190',
            pillar: 'boardPerspective',
            year: '2022',
          },
          {
            title: 'How crisis-proof is e-commerce 2023?',
            meta: '<strong>2022</strong> | eTailment',
            description: 'Structural analysis: which strengths and weaknesses of digital commerce become visible in crisis. A baseline for strategic decisions at board level.',
            cta: 'Read article →',
            url: 'https://etailment.de/news/stories/handeln-in-zeiten-der-krise-wie-krisenfest-ist-der-e-commerce-2023-24090',
            pillar: 'boardPerspective',
            year: '2022',
          },
        ],
        strategic: {
          title: 'Strategic Market Developments',
          description: 'Deprecated – replaced by pillars.',
          cta: 'To the articles',
        },
        operational: {
          title: 'Operational Challenges',
          description: 'Deprecated – replaced by pillars.',
          cta: 'To the articles',
        },
        legal: {
          title: 'Legal and Organizational Aspects',
          description: 'Deprecated – replaced by pillars.',
          cta: 'To the articles',
        },
      },
      lehre: {
        title: 'Talks & Teaching · Christian Maaß',
        description: 'Talks along three pillars: AI in operating, forgotten fundamentals, board perspective. Plus a lectureship at Frankfurt School of Business & Finance.',
        h1: 'Talks and teaching.',
        intro: 'Three recurring topics – on stage and in the seminar room. Talks come out of operational practice: no theory slides, no marketing talk.',
        talks: {
          eyebrow: 'Talk topics',
          title: 'Three topics, three talks.',
          intro: 'Concrete observations with concrete consequences – for boards, executive teams or leadership circles. Format and length adapted to the setting.',
          kiOperating: {
            title: 'AI in operating, not in marketing',
            description: 'What really happens when AI lands in the company? Why most organisations copy-paste instead of working with AI – and where the real leverage sits: in processes and software engineering.',
          },
          grundlagen: {
            title: 'The forgotten fundamentals',
            description: 'While everyone talks transformation, the biggest value stays untapped in operational fundamentals. Margins, complexity discipline, executive presence – where substance beats polish.',
          },
          boardPerspective: {
            title: 'Board perspective on digital & AI',
            description: 'Which questions should the supervisory board ask on digital and AI – and rarely does. A governance agenda for boards, translated from operator reality.',
          },
        },
        university: {
          eyebrow: 'Teaching',
          title: 'Frankfurt School of Business & Finance',
          institution: 'Lecturer at one of the leading business schools in the German-speaking region.',
          current: 'Current seminar (winter term 2025/26): "AI in E-Commerce".',
        },
        ctaSection: {
          headline: 'Interested in a talk or collaboration?',
          text: 'Speaker bookings best with date, format and topic expectation in an email. I reply personally.',
          button: 'Get in touch',
        },
        keynotes: {
          title: 'Talks and Key Notes',
          description: 'Deprecated.',
          cta: 'Request talk',
        },
        teaching: {
          title: 'Teaching and Seminars',
          description: 'Deprecated.',
          cta: 'Info to follow',
        },
      },
      beirat: {
        title: 'Board Advisory · Christian Maaß',
        description: 'Four advisory mandates, one board role at BEVH. I am called in for the sequence – what gets decided first, who decides, when is it executed.',
        h1: 'Board Advisory.',
        intro: 'Four advisory mandates, one board role at BEVH. I am called in not for the next strategy but for the sequence: what gets decided first, who decides, when is it executed.',
        bevh: {
          title: 'Board Member of the German E-Commerce and Mail Order Association',
          item1: 'Since 2023, I have been a board member of the German E-Commerce and Mail Order Association.',
          item2: 'Link to BEVH page: <a href="https://bevh.org/" target="_blank" rel="noopener noreferrer">German E-Commerce and Mail Order Association</a>',
        },
        optilyz: {
          title: 'Board Member',
          item1: 'From 2019 to 2021, I supported Optilyz as a board advisor.',
          item2: 'Optilyz is a company specializing in the automation of direct mail (physical mailings).',
          item3: 'Through the use of their software, they integrate physical mailings such as letters, self-mailers and postcards into their customers\' cross-channel marketing.',
          item4: 'Optilyz\'s goal is to transform direct mail into an agile service channel based on data-driven, personalized and automated implementation.',
        },
        wmd: {
          title: 'Board Member',
          item1: 'From 2017 to 2021, I supported WIRmachenDRUCK as a board advisor.',
          item2: 'Wirmachendruck is the most innovative and one of the largest online printing portals and part of the Cimpress Group (NASDAQ: CIM).',
          item3: 'The company offers private and business customers the opportunity to design and order print jobs simply and efficiently online.',
          item4: 'Wirmachendruck\'s goal is to simplify the printing process through innovative online solutions and to combine the highest quality with competitive prices.',
        },
        mdm: {
          title: 'Board Member',
          item1: 'From 2016 to 2017, I supported the MdM Coin Trading Company as a board advisor.',
          item2: 'MDM is one of the world\'s largest mail-order houses for coins and medals. They specialize in trading and marketing collector coins, commemorative coins and historical means of payment from around the world.',
          item3: 'MDM\'s goal is to offer coin collectors and interested parties exclusive and high-quality products and to make the cultural heritage and fascination of numismatics accessible to a broad audience.',
        },
      },
      kontakt: {
        title: 'Contact · Christian Maaß',
        description: 'Advisory and mandate enquiries, speaker bookings, media requests for Christian Maaß. Personal, discreet, no forms.',
        h1: 'Let\'s talk.',
        lead: 'Three ways I am contacted. Which one fits for you?',
        advisory: {
          title: 'Advisory & mandate enquiries',
          description: 'Discreetly by email or via your search partner. A short sketch of the situation is enough – I reply personally.',
          cta: 'christian@christianmaass.com',
        },
        speaker: {
          title: 'Speaker & keynote bookings',
          description: 'Preferably with date, format and topic expectation in an email. Topics: AI in operating, forgotten fundamentals, board perspective on digital.',
          cta: 'christian@christianmaass.com',
        },
        media: {
          title: 'Media & interviews',
          description: 'Enquiries on e-commerce, scaling, digital operating and AI in retail. I give interviews with a clear position – no marketing talk.',
          cta: 'christian@christianmaass.com',
        },
        details: {
          title: 'Directly reachable',
          email: 'christian@christianmaass.com',
          linkedin: 'linkedin.com/in/christianmaass',
          addressTitle: 'Postal address',
        },
      },
    },
    ui: {
      skipToContent: 'Skip to content',
      menuToggle: 'Open/Close menu',
    },
  },
};

