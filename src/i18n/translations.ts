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
    sponsors: string;
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
      latestEssays: {
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
      intro: string[];
    };
    kontakt: {
      title: string;
      description: string;
      h1: string;
      lead: string;
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
      eyebrow: string;
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
      emptyState: string;
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
      eyebrow: string;
      h1: string;
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
  components: {
    authorBox: {
      eyebrow: string;
      name: string;
      bio: string;
      cta: string;
      portraitAlt: string;
    };
  };
}

export const translations: Translations = {
  nav: {
    home: 'Start',
    about: 'Über mich',
    perspectives: 'Essays, Interviews & Podcasts',
    books: 'Bücher',
    teaching: 'Vorträge & Lehre',
    boardAdvisory: 'Mandate',
    contact: 'Kontakt',
    blog: 'Blog',
  },
  footer: {
    navigation: 'Navigation',
    sponsors: 'Sponsoren',
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
      description:
        'Strategie, Technologie und Organisation laufen oft nicht synchron. Genau dort arbeite ich – seit 20 Jahren, als Manager, nicht als Berater. Managing Director & CDO Thomann.',
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
      latestEssays: {
        heading: 'Neueste Beiträge',
        readAll: 'alle Essays & Interviews lesen',
      },
      pillars: {
        eyebrow: 'Worüber ich arbeite',
        intro:
          'Drei Themen, in denen Synchronisation den Unterschied macht – und zu denen ich publiziere, vortrage und berate.',
        cta: 'Perspektiven lesen →',
        kiOperating: {
          title: 'KI im Operating, nicht im Marketing',
          description:
            'Die meisten Unternehmen reden über KI, statt mit KI zu arbeiten. Der echte Hebel liegt in Prozessen und Softwareentwicklung – nicht in Demo-Reels und Decks.',
        },
        grundlagen: {
          title: 'Die vergessenen Grundlagen',
          description:
            'Während alle über Transformation reden, liegt der größte ungehobene Wert in operativen Grundlagen, die übersehen werden. Substanz schlägt Glanz.',
        },
        boardPerspective: {
          title: 'Board-Perspektive auf Digital & KI',
          description:
            'Aufsichtsräte stellen bei Digital und KI oft die falschen Fragen – oder gar keine. Die Übersetzung zwischen Operator-Realität und Board-Verantwortung ist mein zweites Werkzeug.',
        },
      },
      cases: {
        eyebrow: 'Woran ich es bewiesen habe',
        title: 'Drei Beispiele aus zwanzig Jahren',
        intro:
          'Familien-Weltmarktführer, Plattform-Transformation, Cross-border-Portfolio. Drei verschiedene Synchronisations-Probleme – eine Methode.',
        cta: 'Mehr im Profil →',
        thomann: {
          title: 'Thomann',
          subtitle: 'seit 2023 · Managing Director & CDO',
          description:
            'Familiengeführter Weltmarktführer im Musikhandel, ca. 1,6 Mrd EUR Umsatz. Strategie für die nächste digitale Stufe trifft die operative Realität einer gewachsenen Organisation.',
        },
        otto: {
          title: 'OTTO',
          subtitle: '2009–2010 · Head of Business Development',
          description:
            'Plattform-Transformation eines Versandhauses. Marketplace-Logik, gewachsene Logistik und etablierte Marken mussten in einer Roadmap zusammenkommen.',
        },
        vistaprint: {
          title: 'Vistaprint / Cimpress',
          subtitle: '2016–2021 · Managing Director',
          description:
            'Cross-border-Portfolio aus sechs europäischen Druck-Akquisitionen (WirmachenDruck, Drukwerkdeal, Druck.at, weitere). Tech-Stacks und Operating-Modelle synchronisieren – ohne lokale Stärken zu zerstören.',
        },
      },
      mdThomann: {
        title: 'MD Thomann',
        description1:
          'Managing Director bei Thomann mit Ergebnis- und Organisationsverantwortung für das Digitalgeschäft.',
        description2:
          'Thomann erwirtschaftet ca. 1,6 Mrd. EUR Umsatz und ist der weltweit größte digitale Musikhändler.',
        cta: 'Thomann besuchen',
      },
      mandates: {
        title: 'Mandate & Board-Kontext',
        description:
          'Ich übernehme Mandate und Beiratsrollen in unterschiedlichen unternehmerischen und verbandlichen Kontexten.',
        item1: 'Vizepräsident Bundesverband E-Commerce, BEVH (aktiv)',
        item2: 'Unternehmensentwicklung (Bertelsmann, OTTO Group – frühere Rollen)',
        item3:
          'Ehemalige Executive-Rollen (Managing Director Cimpress Investments NV; Managing Director DRUCK.AT; Vice President Commerce Europe, Cimpress / Vistaprint)',
        item4: 'Beiratsrollen (Auszug): Wir-machen-Druck GmbH, Deutsche Münze MDM',
      },
      keyAreas: {
        title: 'Schwerpunkte',
        description:
          'Eingebunden auf Board-Ebene in Situationen, in denen strategische Entscheidungen nicht delegierbar sind und Klarheit sowie Richtung über unterschiedliche Interessen und Verantwortlichkeiten hinweg geschaffen werden müssen.',
        item1:
          'Skalierung digitaler Geschäfte jenseits von Gründer- oder Pionierlogik (Thomann, Flyeralarm, Cimpress)',
        item2:
          'Aufbau und Rollout neuer Commerce Plattformen unter Live-P&L-Verantwortung (Cimpress, Thomann)',
        item3: 'Portfolio-Management mehrerer Unternehmen in Europa (Cimpress, Printbrothers)',
      },
    },
    christianMaass: {
      title: 'Christian Maaß · Profil. Manager, nicht Berater.',
      description:
        'Christian Maaß übernimmt digitale Geschäfte dort, wo Strategie, Technologie und Organisation nicht synchron laufen. 20 Jahre als Operator: Thomann, OTTO, Vistaprint, Flyeralarm, Bertelsmann, AutoScout24.',
      h1: 'Strategie. Technologie. Organisation.',
      intro: [
        'Die meisten KI- und Digitalinitiativen sind technisch erfolgreich – und generieren dennoch keinen Wert. Nicht weil die Technologie versagt; sie funktioniert. Sie scheitern, weil Strategie, Technologie und Organisation in drei unterschiedlichen Geschwindigkeiten laufen. Diese Lücke zu schließen, ist die Arbeit, die mir am wichtigsten ist und über die ich hier schreibe.',
        'Ich bin Geschäftsführer und Chief Digital Officer bei Thomann. Mit knapp 2 Mrd. EUR Umsatz sind wir die weltweite Nr. 1 im Musikhandel. Ich verantworte den gesamten Digitalbereich – 98 % des Umsatzes. Mein aktueller Fokus liegt auf KI und den strategischen, organisatorischen und technischen Fragen, die damit aufbrechen.',
        'Neben meiner operativen Rolle in der Geschäftsführung arbeite ich in Aufsichts- und Beiratskontexten im Schnittbereich dieser drei Kräfte – u. a. als VP E-Commerce und Vorstand beim bevh, dem Bundesverband E-Commerce und Versandhandel.',
      ],
    },
    buecher: {
      title: 'Bücher · Christian Maaß',
      description:
        'Aktuelle Buchveröffentlichungen von Christian Maaß: Executive Presence, Online-Produktmanagement, E-Business Management, Open Source.',
      eyebrow: 'Bücher',
      h1: 'Aktuelle Buchveröffentlichungen.',
      intro:
        'Jedes geschrieben, weil sich eine wiederkehrende Frage nicht mehr in einem einzigen Vortrag beantworten ließ.',
      executivePresence: {
        title: 'Executive Presence – mehr als der erste Eindruck',
        meta: '<strong>2025</strong> | Haufe Verlag | 156 Seiten',
        description1:
          'Executive Presence ist der Schlüssel, der den Unterschied ausmacht: zwischen jemandem, der einfach einen Raum betritt, und jemandem, der ihn verändert. Sie entscheidet darüber, ob Menschen zuhören, folgen und handeln – und ob Führung akzeptiert wird.',
        description2:
          'Dieses Buch unterstützt Führungskräfte dabei, ihre Wirkung in sozialen Interaktionen zu optimieren, Einfluss zu gewinnen und ihre Führungsstärke auszubauen. Es beleuchtet, warum wir manche Menschen als Führungspersönlichkeiten wahrnehmen. Dabei stehen vier zentrale Säulen, die eine starke Präsenz ausmachen, im Fokus: Auftreten, Kommunikation, Wirkung sowie Feedback und Selbstreflexion.',
        description3:
          'Praxiserprobte Methoden, Fallbeispiele und Selbstchecks helfen Ihnen, auch unter Druck oder in schwierigen Situationen souverän aufzutreten und Ihre Führungsstärke gezielt einzusetzen.',
        cta: 'Bei Amazon bestellen →',
      },
      onlineProduktmanagement: {
        title: 'Online-Produktmanagement: Von der Idee zum Online-Produkt',
        meta: '<strong>2010</strong> | Carl Hanser Verlag | 272 Seiten | Mit Gotthard Pietsch',
        description1:
          'Online-Produkte wie Amazon, Twitter & Co. oder auch die Webpräsenz Ihres Unternehmens prägen mittlerweile die moderne Wirtschaft und bringen grundlegende Veränderungen gewachsener Business-Strukturen mit sich. Auch für Sie als Produktmanager bedeutet das einschneidende Veränderungen.',
        description2:
          'Die betriebswirtschaftlichen Kenntnisse alleine reichen nicht mehr aus. Wer Online-Produkte erfolgreich etablieren will, muss sich auch mit der Informationstechnik auseinandersetzen. Dieses Buch bietet einen praxisorientierten und systematischen Überblick über das Online-Produktmanagement und damit einen Leitfaden für Ihre tägliche Arbeit.',
        description3:
          'Es beschreibt die zentralen Aufgaben und Tätigkeitsfelder und stellt die dafür benötigten Arbeitsinstrumente und -methoden vor. Basiert auf der Erfahrung der Autoren mit erfolgreich etablierten Online-Produkten von Unternehmen wie AutoScout24, Lycos Europe, Otto und Bertelsmann. Beispiele aus der Praxis, Erfahrungsberichte verschiedener Online-Produktmanager sowie Arbeitsvorlagen und Checklisten helfen beim Transfer des Gelernten in Ihre Projekte.',
        cta: 'Bei Amazon bestellen →',
      },
      eBusinessManagement: {
        title:
          'E-Business Management: Gestaltung von Geschäftsmodellen in der vernetzten Wirtschaft',
        meta: '<strong>2008</strong> | UTB Verlag | 321 Seiten',
        description1:
          'Die elektronische Geschäftstätigkeit gewinnt für Unternehmen in allen Wirtschaftszweigen immer mehr an Bedeutung. Die Auseinandersetzung mit dem E-Business Management bereitet mitunter jedoch erhebliche Probleme. An dieser Stelle setzt das vorliegende Buch an.',
        description2:
          'Es vermittelt dem Leser die aus betriebswirtschaftlicher Sicht relevanten technischen Grundlagen, um Geschäftsmodelle im E-Business beurteilen, gestalten und modifizieren zu können, sowie die dazu benötigten Steuerungs- und Analysewerkzeuge kennen zu lernen.',
        description3:
          'Das Buch ist als Einführung und zugleich Nachschlagewerk für das Thema E-Business Management konzipiert und richtet sich an Studenten und Lehrende an Universitäten und Fachhochschulen, aber auch Leser aus der Unternehmenspraxis, die sich einen fundierten Überblick über die Gestaltung digitaler Geschäftsmodelle verschaffen möchten.',
        cta: 'Bei Amazon bestellen →',
      },
      openSource: {
        title: 'Strategische Optionen im Wettbewerb mit Open-Source-Software',
        meta: '<strong>2006</strong> | Logos Berlin | 241 Seiten',
        description1:
          'Open-Source-Software hat in den vergangenen Jahren eine große Resonanz in der Wirtschaft hervorgerufen. In dieser Arbeit werden damit einhergehende wettbewerbsstrategische Fragen diskutiert.',
        description2:
          'Dabei wird eine neue Strategietypologie entwickelt und deren inhaltliche Ausgestaltung im Bereich der Preis- und Lizenzpolitik erörtert. Die Dissertation analysiert die strategischen Optionen, die Unternehmen im Wettbewerb mit Open-Source-Software zur Verfügung stehen, und beleuchtet die Implikationen aus netzwerkökonomischer Perspektive.',
        description3:
          'Das Buch richtet sich an Dozenten und Studenten der Wirtschaftsinformatik und Betriebswirtschaftslehre sowie an Führungskräfte in der IT-Branche, die sich mit den strategischen Herausforderungen von Open-Source-Software auseinandersetzen möchten.',
        cta: 'Bei Amazon bestellen →',
      },
    },
    fachartikel: {
      title: 'Essays, Interviews & Podcasts · Christian Maaß',
      description:
        'Journalistische Veröffentlichungen in der Fachpresse — Essays, Interviews und Podcasts zu Handel, KI im Operating und digitaler Verantwortung. Erschienen u. a. bei eTailment, Textilwirtschaft, t3n, W&V, Kassenzone und digital kompakt.',
      h1: 'Beiträge in Fachmedien',
      intro:
        'Journalistische Veröffentlichungen in der Fachpresse — Essays, Interviews und Podcasts zu Handel, KI im Operating und digitaler Verantwortung. Erschienen u. a. bei eTailment, Textilwirtschaft, t3n, W&V, Kassenzone und digital kompakt. Persönliche Beobachtungen aus der operativen Praxis, nicht aus der Beraterperspektive.',
      emptyState: 'Noch keine Beiträge veröffentlicht.',
    },
    lehre: {
      title: 'Vorträge & Lehre · Christian Maaß',
      description:
        'Vorträge entlang drei Säulen: KI im Operating, vergessene Grundlagen, Board-Perspektive. Plus Lehrauftrag an der Frankfurt School of Business & Finance.',
      h1: 'Vorträge und Lehre.',
      intro:
        'Drei Themen, die wiederkehren – auf Bühnen wie im Seminar. Vorträge entstehen aus der operativen Praxis: keine Theorie-Folien, keine Marketing-Sprech.',
      talks: {
        eyebrow: 'Vortragsthemen',
        title: 'Drei Themen, drei Vorträge.',
        intro:
          'Konkrete Beobachtungen mit konkreter Konsequenz – für Board, Vorstand oder Führungskreis. Format und Dauer abgestimmt auf die Situation.',
        kiOperating: {
          title: 'KI im Operating, nicht im Marketing',
          description:
            'Was passiert wirklich, wenn KI im Unternehmen ankommt? Warum die meisten Unternehmen Copy-Paste machen, statt mit KI zu arbeiten – und wo der echte Hebel sitzt: in Prozessen und Softwareentwicklung.',
        },
        grundlagen: {
          title: 'Die vergessenen Grundlagen',
          description:
            'Während alle über Transformation reden, bleibt der größte Wert in operativen Grundlagen liegen. Margen, Komplexitätsdisziplin, Executive Presence – wo Substanz Glanz schlägt.',
        },
        boardPerspective: {
          title: 'Board-Perspektive auf Digital & KI',
          description:
            'Welche Fragen müsste der Aufsichtsrat zu Digital und KI stellen – und tut es selten. Governance-Agenda für Boards, übersetzt aus der Operator-Realität.',
        },
      },
      university: {
        eyebrow: 'Lehre',
        title: 'Frankfurt School of Business & Finance',
        institution:
          'Lehrbeauftragter an einer der führenden Business Schools im deutschsprachigen Raum.',
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
      description:
        'Vier Beirats-Mandate, eine Vorstandsrolle im BEVH. Ich werde gerufen, wenn es um die Reihenfolge geht – was wird zuerst entschieden, wer entscheidet, wann wird umgesetzt.',
      eyebrow: 'Mandate',
      h1: 'Beirat & Verbandsarbeit.',
      bevh: {
        title: 'Vorstand im Bundesverband E-Commerce und Versandhandel',
        item1: 'Seit 2023 bin ich Vorstandsmitglied im Bundesverband E-Commerce und Versandhandel.',
        item2:
          'Link zur Seite des BEVH: <a href="https://bevh.org/" target="_blank" rel="noopener noreferrer">Bundesverband E-Commerce und Versandhandel</a>',
      },
      optilyz: {
        title: 'Mitglied im Beirat',
        item1: 'Von 2019 bis 2021 habe ich Optilyz als Beirat unterstützt.',
        item2:
          'Optilyz ist ein Unternehmen, das sich auf die Automatisierung von Direct Mail (physischen Postsendungen) spezialisiert hat.',
        item3:
          'Durch den Einsatz ihrer Software integrieren sie physische Postsendungen wie Briefe, Selfmailer und Postkarten in das kanalübergreifende Marketing ihrer Kunden.',
        item4:
          'Ziel von Optilyz ist es, Direct Mail in einen agilen Leistungskanal zu verwandeln, der auf datengesteuerter, personalisierter und automatisierter Umsetzung basiert.',
      },
      wmd: {
        title: 'Mitglied im Beirat',
        item1: 'Von 2017 bis 2021 habe ich WIRmachenDRUCK als Beirat unterstützt.',
        item2:
          'Wirmachendruck ist der innovativste und eines der größten Online-Druckportale und Teil des Cimpress Konzerns (NASDAQ: CIM).',
        item3:
          'Das Unternehmen bietet Privat- und Geschäftskunden die Möglichkeit, Druckaufträge einfach und effizient online zu gestalten und zu bestellen.',
        item4:
          'Ziel von Wirmachendruck ist es, den Druckprozess durch innovative Online-Lösungen zu vereinfachen und höchste Qualität mit wettbewerbsfähigen Preisen zu verbinden.',
      },
      mdm: {
        title: 'Mitglied im Beirat',
        item1: 'Von 2016 bis 2017 habe ich die MdM Münzhandelsgesellschaft als Beirat unterstützt.',
        item2:
          'MDM ist eines der weltweit größten Versandhäuser für Münzen und Medaillen. Sie spezialisieren sich auf den Handel und die Vermarktung von Sammlermünzen, Gedenkprägungen und historischen Zahlungsmitteln aus aller Welt.',
        item3:
          'Ziel von MDM ist es, Münzsammlern und Interessierten exklusive und qualitativ hochwertige Produkte anzubieten und das kulturelle Erbe sowie die Faszination der Numismatik einem breiten Publikum zugänglich zu machen.',
      },
    },
    kontakt: {
      title: 'Kontakt · Christian Maaß',
      description:
        'Kontakt zu Christian Maaß — per E-Mail, LinkedIn oder Telefon. Keine Formulare, keine vertriebliche Kaltakquise.',
      h1: 'Sprechen wir.',
      lead: 'Am besten per E-Mail erreichbar, alternativ über LinkedIn oder Telefon. Von vertrieblichen Anrufen und Kontaktaufnahmen bitte Abstand nehmen.',
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
  components: {
    authorBox: {
      eyebrow: 'Über den Autor',
      name: 'Christian Maaß',
      bio: 'Christian Maaß ist Managing Director und Chief Digital Officer bei Thomann sowie Aufsichtsrat im E-Commerce. Er schreibt und spricht über die Übersetzung zwischen Strategie, Technologie und Organisation — und über die Operating-Realität, in der sich entscheidet, ob digitale Vorhaben Wert schaffen. Vier Fachbücher, zuletzt „Executive Presence" (Haufe, 2025), Lehrauftrag an der Frankfurt School of Business & Finance.',
      cta: 'Mehr über mich',
      portraitAlt: 'Porträt von Christian Maaß',
    },
  },
};
