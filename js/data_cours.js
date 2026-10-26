// Fiches de cours — séances 2 à 5 (droit commun des sociétés)
window.SEANCES = {
  s2: { num: 2, titre: "L'intérêt sociétaire", court: "Intérêt sociétaire" },
  s3: { num: 3, titre: "La formation de la société", court: "Formation" },
  s4: { num: 4, titre: "La nullité de la société", court: "Nullité" },
  s5: { num: 5, titre: "Le fonctionnement de la société", court: "Fonctionnement" }
};

window.COURS = {
  s2: [
    { h: "Société ≠ entreprise", html: `
      <p><b>L'entreprise</b> est une notion <b>économique</b> : une réunion de moyens humains et matériels pour exercer une activité. Elle n'est <b>pas un sujet de droit</b> (pas de patrimoine propre, ne peut pas contracter).</p>
      <p><b>La société</b> est une <b>structure juridique</b> : un <b>contrat</b> auquel la loi attache la <b>personnalité morale</b> dès l'<b>immatriculation au RCS</b>.</p>
      <div class="ex"><b>Exemples :</b> un artisan exploite une entreprise sans société ; une SCI qui gère un immeuble est une société sans véritable entreprise.</div>
      <div class="warn">Depuis la <b>loi du 14 février 2022</b>, tout entrepreneur individuel a automatiquement un <b>patrimoine professionnel séparé</b> de son patrimoine personnel. Mais l'EI reste <b>une personne physique</b> : il n'y a <b>pas de nouvelle personne juridique</b>. Deux EI qui collaborent restent deux personnes distinctes.</div>` },
    { h: "Les 3 éléments constitutifs d'une société", html: `
      <p>La loi définit la société comme le contrat par lequel deux ou plusieurs personnes affectent à une entreprise commune des biens ou leur industrie, en vue de partager le bénéfice ou de profiter de l'économie, et s'engagent à contribuer aux pertes.</p>
      <ol><li><b>Les apports</b> (argent, biens, ou industrie = travail/savoir-faire) ;</li>
      <li><b>La vocation aux résultats</b> : partager les bénéfices ou profiter des économies <b>et</b> contribuer aux pertes ;</li>
      <li><b>L'affectio societatis</b> (création de la jurisprudence) : volonté de collaborer ensemble, <b>sur un pied d'égalité</b>, à un <b>projet commun</b>.</li></ol>
      <div class="key">S'il manque un seul de ces éléments, <b>il n'y a pas de société</b>.</div>` },
    { h: "Les 6 avantages de la forme sociétaire", html: `
      <table><tr><th>Avantage</th><th>Contenu</th></tr>
      <tr><td>Patrimonial</td><td>Cloisonnement des risques : dans les sociétés <b>à risque limité</b> (SARL, SA, SAS), l'associé ne perd au maximum que ses apports. Limites : sociétés à risque illimité, cautions demandées aux dirigeants.</td></tr>
      <tr><td>Financier</td><td>Lever des capitaux (augmentation de capital, émission de titres, emprunts).</td></tr>
      <tr><td>Organisationnel</td><td>Cadre structuré : organes, règles de majorité, partenariat <b>opposable aux tiers</b>.</td></tr>
      <tr><td>Successoral</td><td>On cède des titres plutôt qu'un fonds ; la société survit au décès d'un associé.</td></tr>
      <tr><td>Fiscal</td><td>Choix IR / IS (25 %, 15 % jusqu'à 42 500 € pour les PME).</td></tr>
      <tr><td>Social</td><td>Statut du dirigeant (assimilé-salarié ou TNS).</td></tr></table>
      <div class="key"><b>L'argument décisif en cas pratique :</b> la <b>personnalité morale</b>. Une société est <b>une seule personne juridique</b> qui peut contracter, embaucher, emprunter, être propriétaire et agir en justice <b>en son nom</b>, avec un <b>patrimoine propre</b>.</div>` },
    { h: "Les grandes classifications", html: `
      <h4>1. Civile / commerciale (la summa divisio)</h4>
      <p><b>Principe :</b> toute société est <b>civile</b>, sauf si la loi lui donne un autre caractère. Elle est <b>commerciale</b> selon deux critères :</p>
      <ul><li><b>Par la forme</b> : SNC, SCS, SARL, SA, SAS, SCA sont <b>toujours commerciales</b>, quelle que soit leur activité ;</li>
      <li><b>Par l'objet</b> : une société de forme civile qui exerce une activité commerciale devient commerciale.</li></ul>
      <table><tr><th></th><th>Société civile</th><th>Société commerciale</th></tr>
      <tr><td>Tribunal</td><td>Tribunal judiciaire</td><td>Tribunal de commerce (des activités économiques)</td></tr>
      <tr><td>Preuve</td><td>Règles du droit civil</td><td>Preuve libre</td></tr>
      <tr><td>Solidarité</td><td>Ne se présume pas</td><td>Présumée</td></tr></table>
      <div class="warn">Une société <b>civile</b> qui exerce une activité <b>commerciale</b> risque d'être requalifiée (société créée de fait soumise au régime de la SNC). Une société <b>commerciale par la forme</b> à objet civil ne court aucun risque : la forme l'emporte.</div>
      <h4>2. Sociétés de personnes / de capitaux</h4>
      <table><tr><th></th><th>De personnes (modèle : SNC)</th><th>De capitaux (modèle : SA)</th></tr>
      <tr><td>Ce qui compte</td><td>La personne des associés (intuitu personae)</td><td>Le capital apporté</td></tr>
      <tr><td>Titres</td><td>Parts sociales, non librement cessibles</td><td>Actions, librement cessibles</td></tr>
      <tr><td>Responsabilité</td><td>Indéfinie et solidaire</td><td>Limitée aux apports</td></tr></table>
      <p>Hybrides : <b>SARL</b> (responsabilité limitée mais fort intuitu personae) et <b>SAS</b> (société de capitaux très libre).</p>
      <h4>3. Risque limité / illimité</h4>
      <p><b>Limité</b> (SARL, SA, SAS) : on ne perd que ses apports. <b>Illimité</b> (SNC, commandités, sociétés civiles) : les associés répondent des dettes sociales sur leurs biens personnels.</p>
      <h4>4. Autres</h4>
      <p>Sociétés <b>ouvertes / fermées</b> (offre au public de titres : seulement SA, SCA, SE) ; selon la <b>taille</b> (micro, PME, ETI, GE) ; selon la <b>raison d'être</b> (loi PACTE : intérêt social obligatoire, raison d'être facultative, société à mission).</p>` },
    { h: "Conditions de validité de droit commun", html: `
      <p>La société est un contrat : elle doit respecter les 3 conditions de tout contrat : <b>consentement</b>, <b>capacité</b>, <b>contenu licite et certain</b>.</p>
      <h4>Le consentement</h4>
      <p>Il doit être <b>intègre</b> (pas d'erreur sur les qualités essentielles, de dol, de violence ; le vice doit être déterminant → nullité relative) et <b>sincère</b> (pas de simulation : entre les parties l'acte secret l'emporte ; la contre-lettre est inopposable aux tiers).</p>
      <h4>La capacité</h4>
      <table><tr><th>Personne</th><th>SARL, SA, SAS, commanditaire</th><th>SNC, commandité</th></tr>
      <tr><td>Mineur non émancipé</td><td>OUI, <b>représenté</b> par son administrateur légal (autorisation du juge pour apporter un immeuble ou un fonds)</td><td>NON</td></tr>
      <tr><td>Mineur émancipé</td><td>OUI</td><td>OUI s'il est autorisé par le juge à être commerçant</td></tr>
      <tr><td>Majeur protégé</td><td>OUI, <b>assisté du curateur</b> (curatelle) ou <b>représenté par le tuteur</b> (tutelle)</td><td>NON</td></tr></table>
      <p>Logique : dans la SNC, l'associé a la <b>qualité de commerçant</b>, qu'un incapable ne peut pas avoir. Les <b>époux</b> peuvent être associés ensemble.</p>
      <h4>Les conditions spéciales</h4>
      <p>En plus : <b>pluralité d'associés</b> (au moins 2, sauf EURL / SASU qui peuvent n'en avoir qu'un), <b>apports</b>, <b>vocation aux résultats</b>, <b>affectio societatis</b>.</p>` },
    { h: "La promesse de société et les pourparlers", html: `
      <p>Avant la signature des statuts, les futurs associés <b>négocient librement</b> : l'initiative, le déroulement et la <b>rupture des pourparlers sont libres</b>, mais doivent respecter la <b>bonne foi</b>.</p>
      <ul><li>Une <b>promesse de société</b> n'est valable (et donc obligatoire) que si les parties se sont accordées sur les <b>éléments essentiels</b> du futur contrat : apports, objet, forme, répartition…</li>
      <li>À défaut, on reste au stade des <b>pourparlers</b> : chacun peut y mettre fin.</li>
      <li>Seule une <b>faute</b> dans la rupture (brutalité, mauvaise foi, rupture abusive) engage la responsabilité extracontractuelle de son auteur. La réparation <b>ne peut pas compenser la perte des gains attendus</b> du contrat non conclu.</li></ul>` },
    { h: "La clause léonine (premier contact)", html: `
      <p><b>Principe :</b> la part de chacun dans les bénéfices et sa contribution aux pertes sont proportionnelles à sa part dans le capital, <b>sauf clause contraire</b>.</p>
      <p><b>Interdit (clause léonine)</b> : attribuer à un associé <b>la totalité</b> du profit, l'<b>exonérer de la totalité</b> des pertes, l'<b>exclure totalement</b> du profit ou mettre à sa charge <b>la totalité</b> des pertes.</p>
      <div class="key"><b>Sanction :</b> la clause est <b>réputée non écrite</b>. La société <b>n'est pas nulle</b> : seule la clause disparaît, et on applique la règle de proportionnalité.</div>` }
  ],
  s3: [
    { h: "Conditions de fond de validité du contrat de société", html: `
      <p><b>Droit commun des contrats :</b> consentement, capacité, contenu licite et certain (objet social licite et déterminé, intérêt commun des associés).</p>
      <p><b>Conditions spéciales :</b> pluralité d'associés, apports, vocation aux résultats, affectio societatis.</p>
      <h4>L'objet social</h4>
      <p>C'est le <b>genre d'activité</b> que la société se propose d'exercer. Il doit être <b>déterminable</b> (clause « parapluie » fréquente) et <b>licite</b>. Il sert à <b>qualifier</b> la société (civile/commerciale) et à <b>délimiter les pouvoirs</b> des dirigeants.</p>
      <h4>L'affectio societatis</h4>
      <p>« Volonté de collaborer ensemble, sur un pied d'égalité, à la réalisation d'un projet commun » (jurisprudence, 1986). Critères : <b>collaboration active</b>, <b>égalité</b> (pas de subordination → c'est ce qui distingue l'associé du <b>salarié</b>), <b>projet commun</b>.</p>` },
    { h: "Les apports : 3 catégories", html: `
      <p>Chaque associé est <b>débiteur envers la société</b> de ce qu'il a promis d'apporter. En contrepartie il reçoit des <b>titres</b> (parts sociales ou actions).</p>
      <table><tr><th>Type</th><th>Définition</th><th>Points-clés</th></tr>
      <tr><td><b>Numéraire</b></td><td>Une somme d'argent</td><td><b>Souscription</b> = promesse d'apport ; <b>libération</b> = versement effectif. En <b>SARL</b> : au moins <b>1/5</b> libéré à la constitution, le solde dans les <b>5 ans</b>.</td></tr>
      <tr><td><b>Nature</b></td><td>Tout bien autre que de l'argent (immeuble, fonds, brevet…)</td><td>En <b>propriété</b> (garantie comme un vendeur), en <b>usufruit</b> (30 ans max), en <b>jouissance</b> (garantie comme un bailleur, l'apporteur reste propriétaire). Évaluation par un <b>commissaire aux apports</b> dans les sociétés à risque limité.</td></tr>
      <tr><td><b>Industrie</b></td><td>Travail, savoir-faire, compétences</td><td><b>Ne forme pas le capital</b>, ne sert pas de gage aux créanciers. Donne des parts ouvrant droit aux bénéfices et à l'actif net, à charge de contribuer aux pertes. Parts <b>incessibles</b>, libération successive. Possible en SARL si les statuts le prévoient.</td></tr></table>
      <div class="key"><b>L'apport en industrie est un vrai apport</b> : l'apporteur est un <b>associé</b> (pas un salarié). Sauf clause contraire, sa part dans les bénéfices et les pertes est <b>égale à celle de l'associé qui a le moins apporté</b>.</div>` },
    { h: "Le capital social et ses rôles", html: `
      <p>Le <b>capital social</b> = la somme des apports <b>en numéraire et en nature</b> (pas l'industrie). C'est un chiffre <b>fixe</b> inscrit dans les statuts, qui représente une <b>dette de la société envers ses associés</b>.</p>
      <ul><li><b>Rôle de gage</b> pour les créanciers (fonds de garantie minimal, intangible) ;</li>
      <li><b>Rôle de mesure des droits</b> des associés : répartition des bénéfices, des pertes et des droits de vote en proportion des parts ;</li>
      <li><b>Rôle de financement</b> de l'activité au démarrage.</li></ul>
      <p>À ne pas confondre avec l'<b>actif</b> (ce que la société possède) ni avec les <b>capitaux propres</b> (capital + réserves + résultat + report à nouveau).</p>` },
    { h: "Apport en numéraire ≠ compte courant d'associé", html: `
      <table><tr><th></th><th>Apport en numéraire</th><th>Avance en compte courant</th></tr>
      <tr><td>Nature</td><td>Apport : entre dans le <b>capital</b></td><td><b>Prêt</b> de l'associé à la société</td></tr>
      <tr><td>Contrepartie</td><td>Des <b>titres</b> (parts/actions)</td><td>Une <b>créance de remboursement</b> (+ intérêts éventuels)</td></tr>
      <tr><td>Risque</td><td>Soumis aux pertes, remboursé seulement au partage</td><td>Remboursable en principe à tout moment, l'associé est <b>créancier</b></td></tr></table>` },
    { h: "La vocation aux résultats", html: `
      <p><b>Bénéfice</b> : « gain pécuniaire ou matériel qui ajoute à la fortune des associés » (1914). Depuis 1978, la société peut aussi viser une <b>économie</b>.</p>
      <h4>Répartition</h4>
      <ul><li><b>Principe de proportionnalité</b> : bénéfices et pertes en proportion de la part dans le capital, <b>sauf clause contraire</b> (on peut donc prévoir une répartition inégale !).</li>
      <li><b>Limite : la clause léonine</b> (totalité du profit / exonération de la totalité des pertes / exclusion totale du profit / totalité des pertes) → <b>réputée non écrite</b>, la société n'est pas nulle.</li></ul>
      <div class="warn"><b>Piège :</b> une répartition inégale (60/25/15) n'est <b>pas</b> léonine tant que personne n'a <b>tout</b> ou <b>rien</b>.</div>
      <h4>Distribution</h4>
      <p>Bénéfice distribuable = bénéfice de l'exercice − pertes antérieures − réserves (légale, statutaires) + report bénéficiaire. <b>Pas de bénéfice distribuable → pas de dividende</b> (sinon dividende fictif).</p>
      <h4>Contribution aux pertes ≠ obligation aux dettes</h4>
      <p><b>Contribution aux pertes</b> : répartition des pertes entre associés, <b>en principe à la liquidation</b>. <b>Obligation aux dettes</b> : obligation de payer les créanciers sociaux, seulement dans les sociétés <b>à risque illimité</b>.</p>` },
    { h: "Statuts et pactes d'associés", html: `
      <p>Les <b>statuts</b> sont écrits et comportent des mentions obligatoires (apports, forme, objet, dénomination, siège, capital, durée…).</p>
      <p>Les <b>pactes d'associés</b> (extrastatutaires) organisent les relations entre certains ou tous les associés (convention de vote, clause de sortie, garantie…). Ce sont des <b>contrats</b> soumis au droit commun : <b>force obligatoire</b> entre ceux qui les ont signés, effet relatif (inopposables aux autres).</p>
      <div class="key">Une garantie entre associés (ex. : rendement minimum garanti par les autres) est en principe valable si elle n'aboutit pas à exonérer un associé de <b>la totalité</b> des pertes ou à lui attribuer <b>la totalité</b> du profit.</div>` }
  ],
  s4: [
    { h: "Pourquoi un régime restrictif ?", html: `
      <p>Annuler une société immatriculée serait catastrophique : elle a contracté, embauché, agi. Les tiers n'ont pas à subir ses irrégularités internes. D'où : <b>peu de causes, action encadrée, effets limités</b>.</p>
      <div class="reform"><b>RÉFORME — ordonnance du 12 mars 2025</b>, applicable aux sociétés constituées et aux décisions prises <b>à compter du 1er octobre 2025</b>. Régime unique pour toutes les sociétés (civiles et commerciales), dans le Code civil, conforme à la directive européenne.<br><b>Réflexe n°1 : regarde la DATE</b> de constitution de la société ou de la décision !</div>` },
    { h: "Les causes de nullité de la société", html: `
      <h4>Depuis le 1er octobre 2025 : 2 causes seulement (liste fermée)</h4>
      <ol><li>L'<b>incapacité de TOUS les associés fondateurs</b> (l'incapacité d'un seul ou de quelques-uns ne suffit pas) ;</li>
      <li>La <b>violation du minimum légal de deux associés</b> (attention : pour une forme qui admet l'associé unique — SARL, SAS — il n'y a pas de minimum de deux).</li></ol>
      <p>Tout le reste (objet illicite, vice du consentement, apport fictif…) <b>ne permet plus</b> d'annuler la société. La <b>fraude</b> reste une question ouverte.</p>
      <h4>Avant le 1er octobre 2025 : l'ancien droit</h4>
      <ul><li><b>Sociétés civiles</b> : violation des éléments essentiels (apports, vocation aux résultats, affectio → société fictive), objet illicite, causes de nullité des contrats en général.</li>
      <li><b>Sociétés commerciales</b> : violation d'une disposition expresse ou des causes de nullité des contrats. Pour les <b>SARL et sociétés par actions</b> : pas de nullité pour vice du consentement ou incapacité, <b>sauf si tous les fondateurs</b> sont atteints.</li></ul>
      <h4>Objet statutaire / objet réel</h4>
      <p>Pour les sociétés à risque limité, <b>seul l'objet statutaire compte</b> (jurisprudence Marleasing 1990, Cass. com. 2015) : une société dont l'activité réelle est illicite n'est pas nulle si ses statuts sont licites.</p>` },
    { h: "Clause réputée non écrite ≠ nullité de la société", html: `
      <p>Toute clause statutaire contraire à une <b>disposition impérative</b> du droit des sociétés (dont la violation n'entraîne pas la nullité) est <b>réputée non écrite</b> : elle est effacée, <b>la société continue</b>. Exemple type : la clause léonine.</p>
      <div class="key">Le droit préfère cette sanction car elle est <b>chirurgicale</b> : elle supprime l'irrégularité sans détruire la société, ses contrats et ses salariés (sécurité juridique, protection des tiers). Elle n'est soumise à aucun délai de prescription.</div>` },
    { h: "La nullité de l'apport (nouveau)", html: `
      <p>Sanction <b>autonome</b> créée en 2025. Causes : violation d'une disposition impérative du droit des sociétés ou <b>cause de nullité des contrats</b> en général (ex. : dol, apport d'un bien qui n'appartient pas à l'apporteur…).</p>
      <ul><li>Effets : <b>annulation des titres</b> émis en contrepartie + <b>restitution</b> de l'apport ;</li>
      <li>La <b>société survit</b> (éventuellement unipersonnelle si la forme le permet) ;</li>
      <li>Si <b>tous les apports</b> sont annulés : la société est <b>dissoute et liquidée</b> (sauf associé survivant personne morale : transmission universelle du patrimoine).</li></ul>` },
    { h: "La nullité des décisions sociales", html: `
      <p><b>Causes :</b> uniquement la violation d'une <b>disposition impérative</b> du droit des sociétés ou une cause de nullité des contrats en général.</p>
      <ul><li>La violation de l'<b>intérêt social</b> ne permet jamais d'annuler (seulement la responsabilité du dirigeant).</li>
      <li>La violation des <b>statuts</b> n'est pas une cause de nullité (sauf si la loi le prévoit ; exception : la SAS peut le prévoir dans ses statuts).</li></ul>
      <p>Règle impérative ? Indices : « à peine de nullité », « doit », « ne peut », protection d'un intérêt collectif. Règle supplétive : « sauf clause contraire », « les statuts fixent ».</p>
      <h4>Le triple test (conditions cumulatives)</h4>
      <ol><li><b>Grief</b> : le demandeur justifie d'une atteinte à l'intérêt protégé par la règle violée ;</li>
      <li><b>Influence</b> : l'irrégularité a eu une influence sur le <b>sens de la décision</b> ;</li>
      <li><b>Proportionnalité</b> : les conséquences de la nullité pour l'intérêt social ne sont pas excessives au regard de l'atteinte.</li></ol>
      <p><b>Théorie du vote utile</b> : on retire les votes irréguliers ; si le quorum et la majorité restent atteints, pas de nullité. Inversement, si la voix de l'associé écarté aurait changé le résultat, l'influence est démontrée.</p>
      <div class="ex"><b>Rappel SARL (utile en TD) :</b> convocation par <b>lettre recommandée au moins 15 jours</b> avant l'assemblée, avec l'ordre du jour ; pour l'approbation des comptes, les documents sont adressés 15 jours avant. Décisions ordinaires : plus de la moitié des parts. Modification des statuts : <b>2/3 des parts des associés présents ou représentés</b>.</div>` },
    { h: "Régime de l'action en nullité", html: `
      <table><tr><th></th><th>Nullité absolue</th><th>Nullité relative</th></tr>
      <tr><td>Protège</td><td>L'intérêt général</td><td>Un intérêt privé</td></tr>
      <tr><td>Qui agit ?</td><td>Tout intéressé</td><td>Seul le titulaire de l'intérêt protégé (ex. : l'incapable)</td></tr></table>
      <ul><li><b>Régularisation</b> : l'action s'éteint si la cause a disparu au jour où le juge statue.</li>
      <li><b>Qualité à agir</b> selon l'intérêt protégé ; <b>estoppel</b> : on ne peut contester ce qu'on a accepté.</li></ul>
      <h4>Prescription</h4>
      <table><tr><th>Action</th><th>Délai</th></tr>
      <tr><td>Action en nullité (depuis le 1er oct. 2025)</td><td><b>2 ans</b> à compter du jour où la nullité est encourue</td></tr>
      <tr><td>Action en nullité (avant)</td><td><b>3 ans</b></td></tr>
      <tr><td>Action en indemnisation liée à la nullité</td><td>3 ans</td></tr>
      <tr><td>Exception de nullité (en défense)</td><td><b>Perpétuelle</b>, sauf si l'acte a déjà été <b>exécuté, même partiellement</b></td></tr></table>
      <div class="key">Pourquoi l'exception échappe à la prescription ? Celui à qui on demande d'exécuter un acte nul doit toujours pouvoir se défendre (« ce qui est temporaire pour agir est perpétuel pour se défendre »). Mais si l'acte a déjà commencé à être exécuté, l'exception n'est plus possible.</div>` },
    { h: "Les effets de la nullité", html: `
      <table><tr><th>Effet</th><th>Règle</th></tr>
      <tr><td>Nullité de la société</td><td><b>Pas de rétroactivité</b> : elle produit les effets d'une <b>dissolution judiciaire</b>, puis liquidation. Les contrats conclus ne sont pas remis en cause.</td></tr>
      <tr><td>Nullité d'une décision</td><td>Rétroactive en principe, mais le juge <b>peut différer</b> ses effets si la rétroactivité serait <b>manifestement excessive</b> pour l'intérêt social.</td></tr>
      <tr><td>Nullités en cascade</td><td>Pas automatiques : la nullité de la nomination d'un organe n'entraîne pas celle de ses décisions.</td></tr>
      <tr><td>Tiers de bonne foi</td><td>La nullité leur est <b>inopposable</b> (sauf l'incapable et l'associé au consentement vicié).</td></tr></table>` }
  ],
  s5: [
    { h: "La naissance de la personnalité morale", html: `
      <p>La société acquiert la personnalité morale à compter de son <b>immatriculation au RCS</b> (pas à la signature des statuts !).</p>
      <p>Étapes : signature des statuts → avis dans un journal d'annonces légales → immatriculation (guichet unique, Kbis) → publication au BODACC.</p>
      <p>Sans personnalité morale : la <b>société en participation</b> (choix de ne pas immatriculer) et la <b>société créée de fait</b> (constatée après coup par le juge).</p>` },
    { h: "La société en formation et la reprise des actes", html: `
      <p>Ceux qui ont agi au nom de la société en formation sont <b>personnellement tenus</b> des actes accomplis (solidairement si la société est commerciale), <b>sauf reprise</b> par la société immatriculée. Les actes repris sont alors réputés conclus <b>par la société dès l'origine</b>, et la personne qui a agi est déchargée.</p>
      <h4>Conditions de fond</h4>
      <ol><li>un <b>acte juridique</b> ;</li><li>conclu <b>avant l'immatriculation</b> ;</li><li><b>au nom ou pour le compte</b> de la société en formation (depuis 2023, la mention expresse n'est plus exigée) ;</li><li>la société est ensuite <b>régulièrement immatriculée</b>.</li></ol>
      <h4>Les 3 modes de reprise (pas d'autre)</h4>
      <table><tr><th>Quand l'acte est conclu</th><th>Mode de reprise</th></tr>
      <tr><td>Avant la signature des statuts</td><td>Acte mentionné dans un <b>état annexé aux statuts</b> : la signature des statuts vaut reprise (automatique à l'immatriculation).</td></tr>
      <tr><td>Entre la signature et l'immatriculation</td><td><b>Mandat spécial</b> donné par les associés, précisant la nature et les modalités des actes ; reprise automatique à l'immatriculation si l'acte respecte le mandat. Pas de mandat implicite.</td></tr>
      <tr><td>Tout acte (surtout sans état ni mandat)</td><td><b>Décision des associés</b> prise <b>après l'immatriculation</b>, à la majorité sauf clause contraire.</td></tr></table>
      <div class="warn">Sans reprise, <b>la société n'est pas engagée</b> : c'est la personne qui a agi qui reste tenue.</div>` },
    { h: "Les attributs de la personnalité morale", html: `
      <table><tr><th>Attribut</th><th>Règles et fonction</th></tr>
      <tr><td><b>Le nom</b></td><td>Dénomination sociale (sociétés commerciales) ou raison sociale (civiles). Choix libre, sans porter atteinte aux droits des tiers. Fonction : <b>identifier</b> la société.<br>• <b>Arrêt Bordas (1985)</b> : l'associé qui accepte que son <b>patronyme</b> serve de dénomination ne peut plus s'opposer à son utilisation, même après son départ : le nom devient un signe distinctif détaché de la personne, objet de propriété incorporelle.<br>• <b>Arrêt Ducasse (2003)</b> : ce consentement <b>n'autorise pas</b> la société à <b>déposer le nom comme marque</b> sans l'accord de l'intéressé.</td></tr>
      <tr><td><b>Le siège</b></td><td>Son « domicile ». Il détermine la <b>loi applicable</b> (nationalité) et le <b>tribunal compétent</b>. Les tiers peuvent se prévaloir du siège statutaire, mais la société ne peut le leur opposer si le <b>siège réel</b> est ailleurs. Transfert en France = modification des statuts ; à l'étranger = unanimité.</td></tr>
      <tr><td><b>La nationalité</b></td><td>Liée au siège social.</td></tr>
      <tr><td><b>Le patrimoine</b></td><td>La société a un <b>patrimoine propre</b>, distinct de celui des associés : ses créanciers sont payés sur ses biens ; les créanciers personnels des associés ne peuvent pas saisir les biens sociaux (seulement les titres de l'associé). Les associés ne sont tenus des dettes sociales que dans les sociétés à risque illimité.</td></tr>
      <tr><td><b>La capacité</b></td><td>Limitée par le <b>principe de spécialité</b> (son objet). Peut contracter et <b>agir en justice</b>.</td></tr>
      <tr><td><b>La responsabilité</b></td><td>Civile et <b>pénale</b> (infraction commise pour son compte par un organe ou un représentant).</td></tr></table>` },
    { h: "Les pouvoirs des dirigeants : ordre externe / interne", html: `
      <p>Gérant (société civile, SNC, SARL), président (SAS), DG / directoire (SA).</p>
      <table><tr><th>Ordre EXTERNE (société ↔ tiers) : la société est-elle engagée ?</th><th>Ordre INTERNE (dirigeant ↔ associés) : le dirigeant est-il responsable ?</th></tr>
      <tr><td>• <b>Risque limité</b> (SARL, SA, SAS) : la société est engagée <b>même par les actes hors objet</b>, sauf si le tiers savait ou ne pouvait ignorer le dépassement (la seule publication des statuts ne suffit pas).<br>• <b>Risque illimité</b> (société civile, SNC) : seuls les actes <b>entrant dans l'objet</b> engagent la société.<br>• <b>Clauses limitatives de pouvoirs</b> : <b>inopposables aux tiers</b> → l'acte reste valable et la société est engagée.</td>
      <td>Le dirigeant commet une <b>faute</b> s'il viole la loi, les <b>statuts</b> (ex. : une clause limitative), commet une faute de gestion ou manque à son devoir de loyauté.<br>→ <b>Responsabilité</b> envers la société (dommages-intérêts) et <b>révocation</b> possible.</td></tr></table>
      <div class="key">Une personne <b>sans pouvoir de représentation</b> (simple associé) n'engage pas la société, sauf <b>ratification</b> par la société ou <b>mandat apparent</b> (le tiers a pu légitimement croire à ses pouvoirs).</div>` },
    { h: "La cession de parts sociales et l'agrément", html: `
      <p>Les <b>parts sociales</b> (sociétés de personnes, sociétés civiles, SARL) ne sont pas librement cessibles : la cession à un tiers suppose l'<b>agrément</b> des associés.</p>
      <h4>En société civile</h4>
      <ul><li>Principe légal : agrément <b>à l'unanimité</b> des associés ; les <b>statuts peuvent prévoir une majorité</b>.</li>
      <li>Procédure : le projet de cession est <b>notifié à la société et à chaque associé</b> ; les associés statuent.</li>
      <li>La cession est <b>constatée par écrit</b> ; elle devient opposable à la société (signification ou acceptation dans un acte authentique, ou dépôt de l'original au siège) puis aux tiers après <b>publicité</b> (dépôt au greffe).</li>
      <li>Si les statuts mentionnent la répartition des parts, il faut <b>mettre à jour les statuts</b>.</li>
      <li><b>En cas de refus</b> : les associés (ou la société) doivent <b>acheter ou faire acheter</b> les parts, au prix fixé à l'amiable ou par <b>expert</b> ; à défaut dans les <b>6 mois</b>, l'agrément est <b>réputé acquis</b>. L'associé n'est donc jamais prisonnier de ses parts.</li>
      <li>Les cessions aux <b>ascendants ou descendants</b> du cédant sont libres, <b>sauf disposition contraire des statuts</b>.</li></ul>` }
  ]
};

// Méthode : le syllogisme juridique
window.METHODE = `
<p>À l'examen, pour <b>chaque question</b> des cas pratiques, tu rédiges <b>uniquement le syllogisme</b> (pas d'introduction, pas de problématique) puis la <b>conclusion</b>. Les numéros d'articles ne sont pas exigés, mais les <b>règles de droit</b> doivent être exactes et complètes.</p>
<div class="steps">
  <div class="step"><span class="tag t1">En droit,</span><p><b>La majeure.</b> Tu énonces la ou les règles applicables avec <b>toutes leurs conditions</b> et leur <b>sanction</b>. Ordre : droit commun avant droit spécial, principe avant exception, loi avant jurisprudence. Pas de récitation de cours hors sujet : seulement les règles utiles à la question.</p></div>
  <div class="step"><span class="tag t2">En l'espèce,</span><p><b>La mineure.</b> C'est la partie <b>la plus importante</b>. Tu reprends <b>chaque condition</b> de la majeure, une par une, et tu vérifies si elle est remplie avec les <b>faits précis</b> de l'énoncé (noms, dates, montants, forme sociale). Discute les points douteux (arguments pour / contre).</p></div>
  <div class="step"><span class="tag t3">En conclusion,</span><p><b>La conclusion.</b> Réponse <b>claire et directe</b> à la question posée (« Donc, oui / non, … »), et si utile un <b>conseil</b> pratique au client.</p></div>
</div>
<h3>Les réflexes avant d'écrire</h3>
<ol>
<li><b>Forme sociale ?</b> SARL, SAS, SA → risque limité, commerciale. Société civile, SNC → risque illimité. Ça change tout (capacité, objet social, pouvoirs…).</li>
<li><b>Date ?</b> Dès qu'il est question de <b>nullité</b> : société/décision avant ou après le <b>1er octobre 2025</b> ? Et la <b>prescription</b> est-elle acquise ?</li>
<li><b>Qui agit et contre qui ?</b> Associé, tiers, société → qualité à agir, ordre interne/externe.</li>
<li><b>Une question = un syllogisme.</b> Si la question en cache deux (ex. « la clause est-elle valable ? que se passe-t-il sinon ? »), fais deux mini-syllogismes à la suite.</li>
</ol>
<h3>Exemple complet</h3>
<div class="case-text"><p><i>Faits :</i> Dans une SARL, les statuts prévoient que Paul « ne supportera aucune perte ». La société est en difficulté. <i>Question :</i> la clause est-elle valable ?</p></div>
<div class="model">
<p><span class="tag t1">En droit,</span> le Code civil pose le principe selon lequel la part de chaque associé dans les bénéfices et sa contribution aux pertes se déterminent à proportion de sa part dans le capital social, sauf clause contraire. Toutefois, est réputée non écrite la clause qui attribue à un associé la totalité du profit, l'exonère de la totalité des pertes, l'exclut totalement du profit ou met à sa charge la totalité des pertes (clause léonine). Cette sanction n'entraîne pas la nullité de la société : seule la clause est effacée.</p>
<p><span class="tag t2">En l'espèce,</span> la clause stipule que Paul « ne supportera aucune perte ». Elle a donc pour effet de l'exonérer de la totalité des pertes sociales, alors que les autres associés supporteraient seuls ces pertes. Il s'agit précisément de l'une des hypothèses de clause léonine. La circonstance que la société soit une SARL est indifférente, cette règle étant de droit commun et applicable à toutes les sociétés.</p>
<p><span class="tag t3">En conclusion,</span> la clause est léonine : elle est réputée non écrite. La SARL n'est pas annulée ; Paul contribuera aux pertes à proportion de sa part dans le capital.</p>
</div>
<h3>Les erreurs qui coûtent des points</h3>
<ul>
<li>Une majeure sans les <b>conditions</b> de la règle → la mineure ne peut rien vérifier.</li>
<li>Une mineure qui recopie les faits sans les <b>confronter</b> à chaque condition.</li>
<li>Une conclusion floue (« cela dépend ») sans trancher ni conseiller.</li>
<li>Oublier la <b>sanction</b> (réputé non écrit ? nullité ? inopposabilité ? responsabilité ?).</li>
<li>Fonder sur le « bon sens » ou la morale : <b>pas de fondement, pas d'argument</b>.</li>
</ul>`;
