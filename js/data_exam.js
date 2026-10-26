// Examens blancs : format officiel (questions de cours + cas 1 [1 q], cas 2 [3 q], cas 3 [1 q]).
window.EXAMS = [
  {
    id: "e1", titre: "Examen blanc n°1",
    cours: [
      { q: "Définissez l'affectio societatis et indiquez ses critères.", a: "Volonté des associés de collaborer ensemble, sur un pied d'égalité, à la réalisation d'un projet commun (jurisprudence de 1986). Critères : collaboration active, égalité (absence de subordination, ce qui distingue l'associé du salarié), projet d'entreprise commun. Il permet de prouver l'existence d'une société, de révéler une société fictive et de distinguer la société d'autres contrats." },
      { q: "Distinguez l'apport en numéraire de l'avance en compte courant d'associé.", a: "L'apport en numéraire entre dans le capital et donne des titres ; il est exposé aux pertes et n'est remboursé qu'au partage. L'avance en compte courant est un prêt de l'associé à la société : elle ne donne pas de titres mais une créance de remboursement." },
      { q: "Quelles sont les causes de nullité d'une société constituée après le 1er octobre 2025 ?", a: "Deux causes seulement : l'incapacité de tous les associés fondateurs et la violation du nombre minimal légal d'associés (deux, sauf formes unipersonnelles). La liste est fermée ; la fraude reste discutée." },
      { q: "Qu'est-ce que la reprise des actes de la société en formation ? Citez ses modes.", a: "Mécanisme par lequel la société immatriculée reprend les actes conclus en son nom avant l'immatriculation ; ils sont réputés conclus par elle dès l'origine et la personne qui a agi est déchargée. Modes : état annexé aux statuts, mandat spécial, décision des associés après immatriculation." },
      { q: "Selon quels critères une société est-elle commerciale ?", a: "Principe : toute société est civile sauf disposition contraire. Elle est commerciale par la forme (SNC, SCS, SARL, SA, SAS, SCA quelle que soit l'activité) ou par l'objet (activité commerciale)." }
    ],
    cas: [
      {
        titre: "Cas n°1 — Les Ateliers du Rhône",
        enonce: `<p>Léa, Hugo et Malo constituent en janvier 2026 la SAS LES ATELIERS DU RHÔNE. Léa et Hugo apportent chacun 20 000 €, Malo 10 000 €. À la demande de Malo, qui hésitait à s'engager, les statuts stipulent : « <i>Monsieur Malo percevra chaque année un dividende fixe de 1 000 € et ne supportera, en toute hypothèse, aucune perte sociale.</i> » La société enregistre une perte importante. Léa et Hugo veulent savoir si Malo peut se retrancher derrière cette clause.</p>`,
        questions: [{
          q: "La clause est-elle valable et quelles en sont les conséquences ?",
          droit: "<p>La part de chaque associé dans les bénéfices et sa contribution aux pertes se déterminent à proportion de sa part dans le capital, sauf clause contraire. Est toutefois réputée non écrite la stipulation attribuant à un associé la totalité du profit, l'exonérant de la totalité des pertes, l'excluant totalement du profit ou mettant à sa charge la totalité des pertes. Cette sanction n'entraîne pas la nullité de la société. Par ailleurs, aucun dividende ne peut être distribué en l'absence de bénéfice distribuable.</p>",
          espece: "<p>La clause dispense Malo de « toute » perte sociale « en toute hypothèse » : elle l'exonère de la totalité des pertes, hypothèse type de clause léonine. Le dividende fixe garanti est, en outre, contraire à la règle selon laquelle un dividende suppose un bénéfice distribuable. Le consentement de tous les associés à la clause est indifférent. La société, constituée de trois associés ayant effectué des apports, n'est pas atteinte.</p>",
          concl: "<p>La clause est léonine et réputée non écrite. Malo contribuera aux pertes à proportion de sa part dans le capital (10 000 / 50 000, soit 20 %), et ne percevra de dividende qu'en cas de bénéfice distribuable. La SAS demeure valable.</p>",
          points: ["Proportionnalité sauf clause contraire", "4 hypothèses léonines", "Sanction : réputée non écrite, société non nulle", "Qualification : exonération de toutes les pertes", "Dividende fixe sans bénéfice distribuable impossible", "Contribution à 20 %"]
        }]
      },
      {
        titre: "Cas n°2 — La SARL ATELIER NOMADE",
        enonce: `<p>Nadia et Bruno ont signé les statuts de la SARL ATELIER NOMADE le 5 janvier 2026 ; la société a été immatriculée le 1er mars 2026. Nadia en est la gérante. Les statuts soumettent « toute acquisition d'immeuble » à l'autorisation préalable de l'assemblée. Objet social : « fabrication et vente de mobilier ».</p>
        <p>Le 2 décembre 2025, avant même la signature des statuts, Bruno a signé au nom de la future société un contrat d'achat de bois pour 15 000 €. Ce contrat ne figure pas dans l'état annexé aux statuts. Depuis l'immatriculation, les associés ne se sont jamais prononcés sur ce contrat.</p>
        <p>En avril 2026, Nadia achète seule, au nom de la société, un petit entrepôt à M. Ferrand pour y stocker le mobilier. En mai 2026, elle signe au nom de la société avec l'agence VOYAGES PLUS l'organisation d'un séjour touristique pour sa famille. L'agence ignorait tout des statuts.</p>`,
        questions: [
          {
            q: "Le contrat d'achat de bois engage-t-il la société ?",
            droit: "<p>Ceux qui ont agi au nom d'une société en formation sont tenus des actes accomplis, solidairement si la société est commerciale, sauf reprise par la société immatriculée ; les actes repris sont réputés conclus par elle dès l'origine. La reprise suppose un acte juridique conclu avant l'immatriculation au nom de la société en formation, et résulte soit de la signature des statuts pour les actes mentionnés dans un état annexé, soit de l'immatriculation pour les actes accomplis en vertu d'un mandat spécial, soit d'une décision des associés prise après l'immatriculation.</p>",
            espece: "<p>Le contrat d'achat de bois est un acte juridique conclu le 2 décembre 2025, avant l'immatriculation, au nom de la future société. Il a été conclu avant la signature des statuts mais ne figure pas dans l'état annexé ; aucun mandat n'a été donné ; et aucune décision des associés n'est intervenue depuis l'immatriculation. Aucun mode de reprise n'est réalisé.</p>",
            concl: "<p>En l'état, la SARL n'est pas engagée : Bruno est personnellement tenu du contrat. Les associés peuvent toutefois voter sa reprise à la majorité, ce qui engagerait la société rétroactivement.</p>",
            points: ["Principe : auteur tenu sauf reprise", "Conditions + 3 modes de reprise", "Pas d'état annexé, pas de mandat, pas de décision", "Bruno tenu ; reprise possible par décision"]
          },
          {
            q: "L'achat de l'entrepôt engage-t-il la société ?",
            droit: "<p>Dans les rapports avec les tiers, le gérant de SARL est investi des pouvoirs les plus étendus pour agir au nom de la société. Les clauses statutaires limitant ses pouvoirs sont inopposables aux tiers. Dans l'ordre interne, la violation des statuts constitue une faute susceptible d'engager la responsabilité du gérant et de justifier sa révocation.</p>",
            espece: "<p>Nadia, gérante, a acheté l'entrepôt sans l'autorisation exigée par les statuts pour « toute acquisition d'immeuble ». Cette clause est une limitation statutaire de pouvoirs : elle est inopposable à M. Ferrand. L'achat, destiné au stockage du mobilier, entre en outre dans l'objet social. En revanche, Nadia a violé les statuts.</p>",
            concl: "<p>La SARL est engagée envers M. Ferrand. Nadia pourra être révoquée pour juste motif et, si la société subit un préjudice, voir sa responsabilité engagée.</p>",
            points: ["Pouvoirs les plus étendus à l'égard des tiers", "Clauses limitatives inopposables", "Acte dans l'objet", "Société engagée", "Faute du gérant : responsabilité/révocation"]
          },
          {
            q: "Le contrat avec VOYAGES PLUS engage-t-il la société ?",
            droit: "<p>Dans les SARL, la société est engagée même par les actes du gérant qui ne relèvent pas de l'objet social, à moins qu'elle ne prouve que le tiers savait que l'acte dépassait cet objet ou ne pouvait l'ignorer compte tenu des circonstances, la seule publication des statuts ne suffisant pas à constituer cette preuve. Le gérant qui agit hors de l'objet ou contre l'intérêt social commet une faute.</p>",
            espece: "<p>L'organisation d'un séjour touristique pour la famille de la gérante est étrangère à l'objet social (fabrication et vente de mobilier). Mais la SARL est une société à risque limité : elle est engagée, sauf à prouver la mauvaise foi de l'agence. Or VOYAGES PLUS ignorait tout des statuts ; la circonstance que ceux-ci aient été publiés est insuffisante. On pourrait soutenir qu'un séjour familial ne pouvait manifestement pas relever de l'activité d'une entreprise de mobilier, mais rien n'indique que l'agence en avait connaissance.</p>",
            concl: "<p>La SARL est engagée envers VOYAGES PLUS. En conséquence, la société est tenue des contrats conclus par Nadia ; elle pourra en revanche agir en responsabilité contre la gérante, qui a agi hors de l'objet social et contre l'intérêt social, et la révoquer.</p>",
            points: ["Risque limité : engagée même hors objet", "Exception : tiers de mauvaise foi ; publication insuffisante", "Acte hors objet qualifié", "Agence de bonne foi → société engagée", "Faute de la gérante"]
          }
        ]
      },
      {
        titre: "Cas n°3 — L'oubli de Lucie",
        enonce: `<p>La SARL TERRA NOVA compte quatre associés : Marc (45 parts), Julie (30 parts), Karim (15 parts) et Lucie (10 parts). Le gérant convoque régulièrement par lettre recommandée Marc, Julie et Karim à l'assemblée annuelle du 20 mai 2026, mais <b>oublie de convoquer Lucie</b>. L'assemblée approuve les comptes de l'exercice 2025 à l'unanimité des présents. Lucie, qui aurait voté contre, veut obtenir l'annulation de la décision.</p>`,
        questions: [{
          q: "Lucie peut-elle obtenir l'annulation de la décision d'approbation des comptes ?",
          droit: "<p>Pour les décisions prises depuis le 1er octobre 2025, la nullité d'une décision sociale ne peut résulter que de la violation d'une disposition impérative du droit des sociétés ou d'une cause de nullité des contrats. Les règles de convocation des associés de SARL et le droit de participer aux décisions collectives sont impératifs. L'annulation suppose cumulativement que le demandeur justifie d'un grief, que l'irrégularité ait eu une influence sur le sens de la décision, et que les conséquences de la nullité ne soient pas excessives pour l'intérêt social. Les décisions ordinaires de SARL sont adoptées à plus de la moitié des parts. L'action se prescrit par deux ans.</p>",
          espece: "<p>Lucie n'a pas été convoquée : une règle impérative a été violée et elle justifie d'un grief, ayant été privée de son droit de participer. Mais la décision a été adoptée par 90 parts sur 100 ; même si Lucie avait voté contre avec ses 10 parts, la majorité de plus de la moitié aurait été largement atteinte. L'irrégularité n'a donc eu aucune influence sur le sens de la décision.</p>",
          concl: "<p>Lucie ne peut pas obtenir l'annulation : la condition d'influence fait défaut. Elle pourrait en revanche rechercher la responsabilité du gérant pour le préjudice éventuel lié à son éviction.</p>",
          points: ["Date → nouveau régime", "Causes de nullité d'une décision", "Convocation = règle impérative", "Triple test énoncé et appliqué", "Influence absente (90/100)", "Conclusion + autre voie"]
        }]
      }
    ]
  },
  {
    id: "e2", titre: "Examen blanc n°2",
    cours: [
      { q: "Présentez les trois modalités de l'apport en nature.", a: "En propriété (transfert de propriété, garantie d'éviction et des vices comme un vendeur), en usufruit (droit réel, 30 ans maximum), en jouissance (droit personnel, garantie comme un bailleur, l'apporteur reste propriétaire et récupère le bien). Évaluation par un commissaire aux apports dans les sociétés à risque limité." },
      { q: "Qu'est-ce qu'une clause léonine ? Quelle en est la sanction ?", a: "Clause attribuant à un associé la totalité du profit, l'exonérant de la totalité des pertes, l'excluant totalement du profit ou mettant à sa charge la totalité des pertes. Elle est réputée non écrite ; la société n'est pas nulle." },
      { q: "Présentez le « triple test » de la nullité des décisions sociales.", a: "Conditions cumulatives : un grief (atteinte à l'intérêt protégé par la règle violée), une influence de l'irrégularité sur le sens de la décision, et la proportionnalité (conséquences de la nullité non excessives pour l'intérêt social)." },
      { q: "Quels sont les effets de la nullité de la société ?", a: "Elle n'est pas rétroactive : elle produit les effets d'une dissolution judiciaire, suivie d'une liquidation. Les contrats conclus ne sont pas remis en cause ; la nullité est inopposable aux tiers de bonne foi (sauf incapable ou associé au consentement vicié)." },
      { q: "Quelles sont les fonctions du siège social ?", a: "Domicile de la société : il détermine la loi applicable (nationalité), le tribunal compétent et le lieu des formalités. Les tiers peuvent invoquer le siège statutaire ; la société ne peut le leur opposer si le siège réel est ailleurs." }
    ],
    cas: [
      {
        titre: "Cas n°1 — Chloé et la SNC",
        enonce: `<p>Chloé, 17 ans, non émancipée, souhaite s'associer avec Paul, 25 ans, pour reprendre un food-truck. Paul propose de constituer une <b>société en nom collectif</b>, « plus simple et plus conviviale ». Les parents de Chloé sont d'accord pour la représenter.</p>`,
        questions: [{
          q: "Chloé peut-elle devenir associée de la SNC envisagée ?",
          droit: "<p>La validité du contrat de société suppose la capacité des associés. Un mineur non émancipé peut être associé des sociétés dans lesquelles l'associé n'a pas la qualité de commerçant (SARL, SA, SAS, commanditaire), à condition d'être représenté par son administrateur légal. En revanche, les associés de SNC ont tous la qualité de commerçant ; or le mineur non émancipé ne peut pas être commerçant. Seul le mineur émancipé peut l'être, sur autorisation du juge.</p>",
          espece: "<p>Chloé, 17 ans, n'est pas émancipée. Dans une SNC, elle aurait la qualité de commerçante, ce qui lui est interdit, peu important l'accord et la représentation de ses parents. En revanche, elle pourrait être associée d'une SARL ou d'une SAS, représentée par ses parents, administrateurs légaux.</p>",
          concl: "<p>Chloé ne peut pas être associée de la SNC. Il est conseillé de choisir une SARL ou une SAS, dans laquelle elle pourra être associée en étant représentée par ses parents (ou d'attendre une émancipation et une autorisation du juge).</p>",
          points: ["Capacité, condition de validité", "Mineur non émancipé : SARL/SA/SAS oui, représenté", "SNC : qualité de commerçant → impossible", "Accord des parents indifférent", "Conseil : SARL/SAS"]
        }]
      },
      {
        titre: "Cas n°2 — La SCI LES GLYCINES",
        enonce: `<p>La société civile immobilière LES GLYCINES, constituée en 2022 par Agathe, Bastien et Coralie, a pour objet « l'acquisition et la gestion d'un immeuble à Lyon ». Ses statuts sont muets sur la cession des parts. Jérôme en est le gérant.</p>
        <p>Agathe souhaite vendre ses parts à son amie Inès. Par ailleurs, Jérôme a signé au nom de la SCI un contrat d'achat d'un <b>food-truck</b> auprès de la société MOBILE CUISINE, qui savait que la SCI ne gérait qu'un immeuble. Enfin, un plombier, impayé depuis des mois par la SCI dont les comptes sont vides, se demande s'il peut réclamer son dû à Bastien personnellement.</p>`,
        questions: [
          {
            q: "Agathe peut-elle céder librement ses parts à Inès ?",
            droit: "<p>Les parts sociales d'une société civile ne peuvent être cédées qu'avec l'agrément de tous les associés, sauf clause statutaire prévoyant une majorité. Le projet de cession est notifié à la société et à chacun des associés. En cas de refus, les associés ou la société doivent acquérir ou faire acquérir les parts à un prix fixé à l'amiable ou par expert ; à défaut dans les six mois, l'agrément est réputé acquis. Les cessions aux ascendants et descendants sont libres sauf clause contraire.</p>",
            espece: "<p>Inès est une amie, non associée, ni ascendante ni descendante d'Agathe. Les statuts étant muets, l'agrément de tous les associés (Bastien, Coralie, et Agathe elle-même) est nécessaire. Agathe devra notifier son projet à la SCI et à ses coassociés. En cas de refus, elle pourra obtenir le rachat de ses parts.</p>",
            concl: "<p>Non : Agathe ne peut pas céder librement ses parts ; il lui faut l'agrément unanime des associés, à défaut duquel ses parts devront être rachetées dans les six mois ou l'agrément sera réputé acquis.</p>",
            points: ["Agrément légal à l'unanimité en société civile", "Statuts muets → unanimité", "Notification du projet", "Refus : rachat / agrément réputé acquis après 6 mois", "Inès hors cercle familial"]
          },
          {
            q: "Le contrat d'achat du food-truck engage-t-il la SCI ?",
            droit: "<p>Dans les sociétés à risque illimité, comme la société civile, le gérant n'engage la société envers les tiers que par les actes <b>entrant dans l'objet social</b> : les associés n'ont accepté de répondre indéfiniment des dettes sociales que dans cette limite. Les actes étrangers à l'objet n'engagent pas la société, et le gérant engage sa responsabilité.</p>",
            espece: "<p>L'achat d'un food-truck est étranger à l'objet de la SCI (acquisition et gestion d'un immeuble). La SCI étant une société civile, à risque illimité, cet acte ne l'engage pas, peu important d'ailleurs la bonne foi du vendeur ; ici, MOBILE CUISINE savait même que l'activité de la SCI était limitée à un immeuble.</p>",
            concl: "<p>Non : le contrat n'engage pas la SCI. MOBILE CUISINE ne pourra se retourner que contre Jérôme, qui a agi hors de ses pouvoirs.</p>",
            points: ["Risque illimité : engagée seulement dans l'objet", "Justification (responsabilité indéfinie des associés)", "Acte hors objet", "Différence avec la SARL (bonne foi indifférente ici)", "Recours contre le gérant"]
          },
          {
            q: "Le plombier peut-il réclamer son dû à Bastien personnellement ?",
            droit: "<p>La société a un patrimoine propre, qui répond en principe de ses dettes. Dans une société civile, société à risque illimité, les associés répondent <b>indéfiniment</b> des dettes sociales à proportion de leur part dans le capital, <b>sans solidarité</b> (la solidarité ne se présume pas en matière civile). Les créanciers ne peuvent poursuivre les associés qu'après avoir <b>préalablement et vainement poursuivi</b> la société.</p>",
            espece: "<p>La dette envers le plombier est une dette sociale de la SCI. Celle-ci n'a plus de fonds : si le plombier a d'abord vainement poursuivi la SCI (mise en demeure, tentative d'exécution infructueuse), il pourra agir contre Bastien. Mais Bastien n'est tenu qu'à proportion de sa part dans le capital, et non pour la totalité, faute de solidarité.</p>",
            concl: "<p>Oui, mais sous conditions : après avoir vainement poursuivi la SCI, le plombier pourra réclamer à Bastien sa quote-part de la dette, proportionnelle à ses parts. En conséquence, la cession d'Agathe exige l'agrément unanime, la SCI n'est pas engagée par le food-truck, et ses associés répondent de ses dettes à proportion de leurs parts.</p>",
            points: ["Patrimoine social propre", "Société civile : responsabilité indéfinie mais conjointe (proportionnelle)", "Pas de solidarité en matière civile", "Poursuite préalable et vaine de la société", "Conclusion : quote-part seulement"]
          }
        ]
      },
      {
        titre: "Cas n°3 — La SAS au faux associé",
        enonce: `<p>Le 3 décembre 2025, Romain constitue la <b>SAS</b> HORIZON avec son cousin Damien. En réalité, Damien n'a jamais été informé du projet : Romain a imité sa signature pour « faire plus sérieux » auprès des fournisseurs. Un concurrent, découvrant la supercherie en février 2026, envisage de demander la nullité de la société pour défaut de pluralité d'associés.</p>`,
        questions: [{
          q: "La nullité de la SAS HORIZON peut-elle être prononcée ?",
          droit: "<p>Pour les sociétés constituées depuis le 1er octobre 2025, la nullité de la société ne peut résulter que de l'incapacité de tous les associés fondateurs ou de la violation du nombre minimal d'associés <b>prévu par la loi</b> pour la forme concernée. Celui qui n'a pas consenti au contrat n'est pas associé. La SAS peut être constituée par une seule personne (SASU).</p>",
          espece: "<p>La SAS a été constituée le 3 décembre 2025 : le nouveau régime s'applique. Damien n'a jamais consenti : il n'est pas associé, et la société n'a en réalité qu'un associé, Romain. Mais la loi admet la SAS à associé unique : le minimum légal d'associés est donc respecté. Romain étant capable, la première cause est également exclue.</p>",
          concl: "<p>La nullité de la SAS HORIZON ne peut pas être prononcée : elle fonctionnera comme une SASU avec Romain pour seul associé. Romain pourra en revanche engager sa responsabilité (faux, tromperie des tiers).</p>",
          points: ["Date → nouveau régime", "Deux causes seulement", "Absence de consentement → pas associé", "SAS : minimum légal d'un associé (SASU)", "Conclusion : pas de nullité, SASU", "Ouverture : responsabilité de Romain"]
        }]
      }
    ]
  }
];
