// Atelier syllogisme : à chaque étape, choisir la meilleure rédaction.
window.ATELIER = [
  {
    titre: "La clause de dividende garanti",
    seance: "s2",
    faits: "Dans la SAS VERTIGO, les statuts prévoient que Lina « percevra chaque année l'intégralité des bénéfices réalisés par la société ». Ses deux associés contestent la clause.",
    question: "La clause est-elle valable ?",
    steps: [
      { label: "En droit,", options: [
        { t: "La clause est léonine car elle est injuste pour les autres associés, qui ne touchent rien.", ok: false, why: "Ce n'est pas une règle de droit : on commence par énoncer la règle, pas par appliquer aux faits. Et « injuste » n'est pas un fondement." },
        { t: "Le Code civil prévoit qu'en principe les bénéfices sont répartis à proportion des parts dans le capital, sauf clause contraire. Toutefois, est réputée non écrite la clause qui attribue à un associé la totalité du profit, l'exonère de la totalité des pertes, l'exclut totalement du profit ou lui impose la totalité des pertes ; la société n'est pas pour autant nulle.", ok: true, why: "Principe, exception, sanction : la majeure est complète et utile." },
        { t: "Le droit des sociétés est régi par le Code civil et le Code de commerce. Les SAS sont des sociétés commerciales par la forme et des sociétés de capitaux.", ok: false, why: "Récitation de cours sans lien avec la question : aucune règle permettant de répondre." }
      ]},
      { label: "En l'espèce,", options: [
        { t: "Lina est associée de la SAS VERTIGO et la clause est contestée.", ok: false, why: "On recopie les faits sans les confronter à la règle." },
        { t: "La clause attribue à Lina « l'intégralité des bénéfices », ce qui exclut totalement ses deux coassociés du profit. Elle correspond exactement à l'hypothèse d'une attribution de la totalité du profit à un associé ; la forme de SAS est indifférente, la règle étant de droit commun.", ok: true, why: "Chaque élément de la règle est vérifié avec les faits précis." },
        { t: "La clause est sûrement léonine, mais il faudrait savoir si les associés étaient d'accord.", ok: false, why: "L'accord des associés est indifférent : la prohibition est impérative. La mineure doit trancher." }
      ]},
      { label: "En conclusion,", options: [
        { t: "La clause est léonine : elle est réputée non écrite, la SAS n'est pas annulée et les bénéfices seront répartis à proportion des parts de chacun.", ok: true, why: "Réponse claire + sanction + conséquence concrète." },
        { t: "La clause est léonine donc la société est nulle.", ok: false, why: "Erreur classique : une clause léonine n'entraîne pas la nullité de la société." },
        { t: "Cela dépend de l'appréciation du juge.", ok: false, why: "Conclusion floue : il faut répondre à la question." }
      ]}
    ]
  },
  {
    titre: "L'associé apporteur de savoir-faire",
    seance: "s3",
    faits: "Dans la SARL PIXEL, Inès apporte 20 000 € en numéraire, Sam apporte son savoir-faire de développeur. Inès soutient que Sam n'est qu'un salarié et qu'il n'a droit à aucun bénéfice. Les statuts ne prévoient rien sur la répartition.",
    question: "Sam a-t-il droit aux bénéfices, et dans quelle proportion ?",
    steps: [
      { label: "En droit,", options: [
        { t: "Un salarié n'a pas droit aux bénéfices de la société.", ok: false, why: "Tu pars d'une qualification non démontrée. La majeure doit poser la règle sur l'apport en industrie." },
        { t: "L'apport en industrie (travail, savoir-faire) est un véritable apport qui confère la qualité d'associé ; il ne concourt pas à la formation du capital mais donne droit à des parts dans les bénéfices, à charge de contribuer aux pertes. Sauf clause contraire, la part de l'apporteur en industrie est égale à celle de l'associé qui a le moins apporté. L'associé se distingue du salarié par l'absence de lien de subordination (affectio societatis).", ok: true, why: "Toutes les règles utiles : nature de l'apport, droits, règle supplétive, critère associé/salarié." },
        { t: "Les apports en industrie sont interdits en SARL.", ok: false, why: "Faux : ils sont permis en SARL si les statuts le prévoient." }
      ]},
      { label: "En l'espèce,", options: [
        { t: "Sam apporte son savoir-faire de développeur, ce qui constitue un apport en industrie. Il collabore sur un pied d'égalité au projet et n'est pas placé sous la subordination d'Inès : il est associé, non salarié. Les statuts ne fixant aucune répartition, sa part est égale à celle de l'associé qui a le moins apporté ; or Inès est la seule à avoir des parts en capital, c'est donc sa part qui sert de référence.", ok: true, why: "Qualification + application de la règle supplétive aux faits." },
        { t: "Sam ne met pas d'argent, il est donc logique qu'il ne touche rien.", ok: false, why: "Raisonnement de « bon sens » contraire à la règle légale." },
        { t: "Sam est développeur et Inès a apporté 20 000 €.", ok: false, why: "Simple rappel des faits sans analyse." }
      ]},
      { label: "En conclusion,", options: [
        { t: "Sam est associé : il a droit aux bénéfices, à hauteur d'une part égale à celle d'Inès (soit la moitié chacun), sauf clause statutaire contraire qu'il est conseillé de rédiger.", ok: true, why: "Réponse précise + conseil." },
        { t: "Sam a droit à un salaire.", ok: false, why: "Ne répond pas à la question posée." },
        { t: "Sam a droit à 20 000 € de bénéfices.", ok: false, why: "Confusion entre valeur de l'apport et part dans les bénéfices." }
      ]}
    ]
  },
  {
    titre: "La SARL des mineurs",
    seance: "s4",
    faits: "Le 10 janvier 2026, Léo (17 ans, non émancipé, ayant signé seul) et Maya (22 ans) constituent la SARL BOIS & CO. En mars 2026, Maya veut faire annuler la société en invoquant l'incapacité de Léo.",
    question: "La nullité de la société peut-elle être prononcée ?",
    steps: [
      { label: "En droit,", options: [
        { t: "Depuis l'ordonnance du 12 mars 2025, applicable aux sociétés constituées à compter du 1er octobre 2025, la nullité d'une société ne peut résulter que de l'incapacité de tous les associés fondateurs ou de la violation du nombre minimal légal d'associés. L'action se prescrit par deux ans. Par ailleurs, une nullité fondée sur l'incapacité est relative : seul l'incapable peut s'en prévaloir.", ok: true, why: "Date d'application, causes limitatives, prescription, qualité à agir : tout est là." },
        { t: "Un mineur non émancipé ne peut pas signer seul un contrat, donc le contrat est nul.", ok: false, why: "Règle du droit commun des contrats, mais le droit des sociétés limite strictement les causes de nullité de la société." },
        { t: "La société est nulle si ses statuts sont irréguliers.", ok: false, why: "Règle fausse et imprécise." }
      ]},
      { label: "En l'espèce,", options: [
        { t: "Léo est mineur, la société est donc nulle.", ok: false, why: "Tu ne vérifies pas la condition « tous les fondateurs »." },
        { t: "La SARL a été constituée le 10 janvier 2026, donc le nouveau régime s'applique. Seul Léo, l'un des deux fondateurs, est incapable ; Maya, majeure, est capable : la condition d'incapacité de tous les fondateurs n'est pas remplie. Le minimum légal d'associés est respecté. De plus, Maya, capable, n'a pas qualité pour invoquer l'incapacité de Léo.", ok: true, why: "Date, chaque cause vérifiée, qualité à agir." },
        { t: "Maya veut annuler la société car elle ne s'entend plus avec Léo.", ok: false, why: "Le motif personnel est sans incidence juridique." }
      ]},
      { label: "En conclusion,", options: [
        { t: "Aucune cause de nullité n'est caractérisée : la SARL BOIS & CO ne peut pas être annulée.", ok: true, why: "Clair et direct." },
        { t: "La société sera annulée de façon rétroactive.", ok: false, why: "Double erreur : pas de nullité, et la nullité n'est de toute façon jamais rétroactive." },
        { t: "La société doit être transformée en SNC.", ok: false, why: "Hors sujet (et un mineur ne peut pas être associé de SNC)." }
      ]}
    ]
  },
  {
    titre: "Le gérant et la camionnette",
    seance: "s5",
    faits: "Les statuts de la SARL KAPPA exigent l'autorisation préalable des associés pour tout achat de véhicule. Le gérant achète seul une camionnette au garage DUBOIS pour les besoins de l'activité.",
    question: "La société est-elle engagée envers le garage ?",
    steps: [
      { label: "En droit,", options: [
        { t: "Le gérant doit respecter les statuts, sinon l'acte est nul.", ok: false, why: "Confusion ordre interne / ordre externe." },
        { t: "Dans les SARL, le gérant engage la société envers les tiers, même par les actes qui ne relèvent pas de l'objet social, sauf si le tiers savait ou ne pouvait ignorer le dépassement. Les clauses statutaires limitant les pouvoirs du gérant sont inopposables aux tiers.", ok: true, why: "La règle de l'ordre externe et le sort des clauses limitatives." },
        { t: "La société est engagée si les associés le veulent.", ok: false, why: "Pas une règle de droit." }
      ]},
      { label: "En l'espèce,", options: [
        { t: "Le gérant, représentant légal de la SARL, a acheté une camionnette pour les besoins de l'activité, donc dans l'objet social. La clause exigeant l'autorisation des associés est une clause limitative de pouvoirs : elle est inopposable au garage DUBOIS, tiers au contrat.", ok: true, why: "Qualification de l'acte et de la clause + effet sur le tiers." },
        { t: "Le gérant n'a pas demandé l'autorisation, il a donc commis une faute.", ok: false, why: "Vrai pour l'ordre interne, mais ne répond pas à la question posée (engagement envers le tiers)." },
        { t: "Le garage aurait dû lire les statuts publiés.", ok: false, why: "Justement, la clause est inopposable aux tiers, même publiée." }
      ]},
      { label: "En conclusion,", options: [
        { t: "La société KAPPA est engagée envers le garage et doit payer la camionnette ; le gérant pourra toutefois voir sa responsabilité engagée et être révoqué pour violation des statuts.", ok: true, why: "Réponse + ouverture utile sur l'ordre interne." },
        { t: "Le contrat est nul.", ok: false, why: "Faux : la clause est inopposable." },
        { t: "Le gérant doit payer personnellement.", ok: false, why: "C'est la société qui est engagée." }
      ]}
    ]
  },
  {
    titre: "Le contrat d'avant l'immatriculation",
    seance: "s5",
    faits: "Avant même la signature des statuts de la SAS NOVA, Hugo signe au nom de la future société un contrat de location de bureaux. Ce contrat n'est pas mentionné dans l'état annexé aux statuts et aucun mandat n'a été donné. La société est immatriculée un mois plus tard ; les associés ne se sont jamais prononcés.",
    question: "Le bail engage-t-il la SAS NOVA ?",
    steps: [
      { label: "En droit,", options: [
        { t: "Les personnes qui ont agi au nom d'une société en formation sont tenues des actes accomplis, solidairement si la société est commerciale, à moins que la société, après son immatriculation, ne reprenne ces engagements, qui sont alors réputés souscrits par elle dès l'origine. La reprise suppose un acte juridique conclu avant l'immatriculation au nom de la société en formation, et l'un des trois modes : état annexé aux statuts, mandat spécial, ou décision des associés après immatriculation.", ok: true, why: "Règle complète : principe, reprise, conditions, modes." },
        { t: "Une société n'existe qu'à son immatriculation, donc tout acte antérieur est nul.", ok: false, why: "Faux : l'acte est valable mais engage son auteur, sauf reprise." },
        { t: "La société reprend automatiquement tous les actes utiles à son activité.", ok: false, why: "Il n'y a pas de reprise implicite." }
      ]},
      { label: "En l'espèce,", options: [
        { t: "Le bail est un acte juridique conclu avant l'immatriculation, au nom de la société en formation. Mais il ne figure pas dans l'état annexé, aucun mandat spécial n'a été donné, et les associés n'ont pris aucune décision de reprise après l'immatriculation. Aucun mode de reprise n'est donc réalisé.", ok: true, why: "Les conditions de fond sont remplies, mais aucun mode de reprise : c'est la clé." },
        { t: "Hugo a agi pour la société, donc la société est engagée.", ok: false, why: "Tu oublies de vérifier les modes de reprise." },
        { t: "Le bail est utile pour la société.", ok: false, why: "Critère sans pertinence juridique." }
      ]},
      { label: "En conclusion,", options: [
        { t: "En l'état, la SAS NOVA n'est pas engagée : Hugo est personnellement tenu du bail. Il est conseillé de faire voter une décision de reprise par les associés, ce qui transférerait rétroactivement le bail à la société.", ok: true, why: "Réponse + conseil pratique." },
        { t: "Le bail est nul.", ok: false, why: "L'acte n'est pas nul, il engage son auteur." },
        { t: "La société et Hugo sont tous deux engagés.", ok: false, why: "Faux : sans reprise, seul Hugo est tenu ; après reprise, seule la société." }
      ]}
    ]
  },
  {
    titre: "La prescription de l'action en nullité",
    seance: "s4",
    faits: "La société civile LES PINS a été constituée le 2 février 2021. Le 5 mai 2025, un associé veut faire annuler la société en invoquant le caractère fictif de l'un des associés.",
    question: "L'action est-elle recevable ?",
    steps: [
      { label: "En droit,", options: [
        { t: "Pour les sociétés constituées avant le 1er octobre 2025, l'ancien droit s'applique : l'action en nullité se prescrit par trois ans à compter du jour où la nullité est encourue.", ok: true, why: "Bon régime transitoire et bon délai." },
        { t: "L'action en nullité se prescrit par deux ans.", ok: false, why: "Délai du nouveau droit : il ne s'applique pas à une société constituée en 2021." },
        { t: "L'action en nullité est imprescriptible.", ok: false, why: "C'est l'exception de nullité (en défense) qui est perpétuelle, pas l'action." }
      ]},
      { label: "En l'espèce,", options: [
        { t: "La société a été constituée le 2 février 2021, sous l'ancien droit. La cause de nullité invoquée existait dès la constitution ; le délai de trois ans a donc expiré le 2 février 2024. L'action engagée en mai 2025 est tardive.", ok: true, why: "Point de départ, calcul, comparaison avec la date d'action." },
        { t: "L'associé fictif rend la société nulle.", ok: false, why: "Tu passes à côté de la question de recevabilité." },
        { t: "Le délai de deux ans court jusqu'en 2027.", ok: false, why: "Mauvais régime et mauvais calcul." }
      ]},
      { label: "En conclusion,", options: [
        { t: "L'action est prescrite donc irrecevable : la société ne pourra pas être annulée par cette voie.", ok: true, why: "Réponse nette." },
        { t: "L'action est recevable mais le juge appréciera.", ok: false, why: "Faux et flou." },
        { t: "La société est dissoute.", ok: false, why: "Aucun lien avec la question." }
      ]}
    ]
  }
];
