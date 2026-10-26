(function () {
  "use strict";

  // ---------- Stockage (progression locale, propre à chaque navigateur) ----------
  const KEY = "droit-revisions-v1";
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { store = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
  function get(path, def) { return path in store ? store[path] : def; }
  function set(path, val) { store[path] = val; save(); }

  const $app = document.getElementById("app");
  const S = window.SEANCES;
  const SIDS = Object.keys(S);
  let timerHandle = null;

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function pill(sid) { return `<span class="pill ${sid}">Séance ${S[sid].num} · ${S[sid].court}</span>`; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function pct(n, d) { return d ? Math.round((n / d) * 100) : 0; }

  // ---------- Thème ----------
  const themeBtn = document.getElementById("theme");
  const savedTheme = get("theme", null);
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  themeBtn.onclick = () => {
    const cur = document.documentElement.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    set("theme", next);
  };

  // ---------- Progression ----------
  function progress() {
    const cours = SIDS.filter(s => get("cours:" + s, false)).length;
    const qcm = SIDS.filter(s => get("qcm:" + s, 0) >= 80).length;
    const flashKnown = window.FLASH.filter((f, i) => get("flash:" + i, 0) === 2).length;
    const atel = window.ATELIER.filter((a, i) => get("atelier:" + i, false)).length;
    const cas = window.CAS.filter(c => get("cas:" + c.id, false)).length;
    const ex = window.EXAMS.filter(e => get("exam:" + e.id + ":score", null) !== null).length;
    return [
      { n: 1, r: "methode", t: "La méthode du syllogisme", d: "Comprendre ce qu'on attend de toi : En droit / En l'espèce / En conclusion.", v: get("methode", false) ? 1 : 0, of: 1 },
      { n: 2, r: "cours", t: "Fiches de cours", d: "Les règles à connaître, séance par séance (2 à 5).", v: cours, of: 4 },
      { n: 3, r: "qcm", t: "QCM", d: "Vérifier que les règles sont acquises. Objectif : 80 % à chaque séance.", v: qcm, of: 4 },
      { n: 4, r: "flash", t: "Questions de cours", d: "La partie 1 de l'examen : réponds puis compare au corrigé.", v: flashKnown, of: window.FLASH.length },
      { n: 5, r: "atelier", t: "Atelier syllogisme", d: "Construire un syllogisme pas à pas en choisissant la bonne rédaction.", v: atel, of: window.ATELIER.length },
      { n: 6, r: "cas", t: "Cas pratiques des TD", d: "Rédige, puis compare au corrigé et coche les points obtenus.", v: cas, of: window.CAS.length },
      { n: 7, r: "examen", t: "Examen blanc (1 h 30)", d: "Conditions réelles : questions de cours + 3 cas (1, 3 et 1 questions).", v: ex, of: window.EXAMS.length }
    ];
  }

  // ---------- Pages ----------
  function home() {
    const lv = progress();
    const total = lv.reduce((a, l) => a + Math.min(1, l.v / l.of), 0);
    $app.innerHTML = `
      <section class="hero">
        <span class="pill">Examen intermédiaire · Séances 2 à 5</span>
        <h1>Réussir l'examen de droit des sociétés</h1>
        <p>Un parcours en 7 niveaux, du cours jusqu'à l'examen blanc en conditions réelles. Fais-les dans l'ordre : chaque niveau prépare le suivant.</p>
        <div class="format">
          <div><b>Partie 1</b>Questions de cours</div>
          <div><b>Cas n°1</b>1 question</div>
          <div><b>Cas n°2</b>3 questions</div>
          <div><b>Cas n°3</b>1 question</div>
        </div>
        <p class="small">Pour chaque question de cas : <b>syllogisme uniquement</b> (pas d'introduction ni de problématique) + <b>conclusion</b>. Les numéros d'articles ne sont pas exigés, les règles de droit oui. Aucun document autorisé.</p>
      </section>
      <div class="row" style="margin-top:10px"><span class="muted small">Progression globale : <b>${pct(total, lv.length)} %</b></span></div>
      <div class="bar"><i style="width:${pct(total, lv.length)}%"></i></div>
      <div class="levels">
        ${lv.map(l => `
          <a class="level ${l.v >= l.of ? "done" : ""}" href="#/${l.r}">
            <div class="lvl-n">${l.v >= l.of ? "✓" : l.n}</div>
            <div class="lvl-body"><b>Niveau ${l.n} — ${l.t}</b><div class="muted">${l.d}</div>
              <div class="bar"><i style="width:${pct(Math.min(l.v, l.of), l.of)}%"></i></div></div>
            <div class="lvl-stat">${Math.min(l.v, l.of)} / ${l.of}</div>
          </a>`).join("")}
      </div>
      <p class="footer">Progression enregistrée dans ce navigateur uniquement. <a href="#" id="reset">Réinitialiser</a></p>`;
    document.getElementById("reset").onclick = e => {
      e.preventDefault();
      if (confirm("Effacer toute ta progression et tes réponses ?")) { const t = store.theme; store = t ? { theme: t } : {}; save(); home(); }
    };
  }

  function methode() {
    $app.innerHTML = `<div class="narrow">
      <a class="back" href="#/">← Parcours</a>
      <h1>Niveau 1 — La méthode du syllogisme</h1>
      <div class="card">${window.METHODE}</div>
      <div class="row"><button class="btn primary" id="ok">${get("methode", false) ? "✓ Compris" : "J'ai compris, niveau suivant →"}</button></div></div>`;
    document.getElementById("ok").onclick = () => { set("methode", true); location.hash = "#/cours"; };
  }

  function cours(sid) {
    sid = S[sid] ? sid : "s2";
    $app.innerHTML = `
      <a class="back" href="#/">← Parcours</a>
      <h1>Niveau 2 — Fiches de cours</h1>
      <p class="muted">Ouvre chaque partie, lis attentivement, puis valide la séance. Les encadrés verts sont à savoir par cœur.</p>
      <div class="tabs">${SIDS.map(s => `<button data-s="${s}" class="${s === sid ? "on" : ""}">${get("cours:" + s, false) ? "✓ " : ""}Séance ${S[s].num} · ${S[s].court}</button>`).join("")}</div>
      <h2>Séance ${S[sid].num} — ${S[sid].titre}</h2>
      <div class="lesson">${window.COURS[sid].map((sec, i) => `<details ${i === 0 ? "open" : ""}><summary>${sec.h}</summary><div class="content">${sec.html}</div></details>`).join("")}</div>
      <div class="row" style="margin-top:16px">
        <button class="btn primary" id="read">${get("cours:" + sid, false) ? "✓ Séance lue" : "J'ai lu cette séance"}</button>
        <a class="btn" href="#/qcm/${sid}">Tester avec le QCM →</a>
      </div>`;
    $app.querySelectorAll(".tabs button").forEach(b => b.onclick = () => location.hash = "#/cours/" + b.dataset.s);
    document.getElementById("read").onclick = () => {
      set("cours:" + sid, true);
      const next = SIDS[SIDS.indexOf(sid) + 1];
      location.hash = next ? "#/cours/" + next : "#/qcm";
    };
  }

  // ---------- QCM ----------
  function qcmMenu() {
    $app.innerHTML = `
      <a class="back" href="#/">← Parcours</a>
      <h1>Niveau 3 — QCM</h1>
      <p class="muted">Une réponse juste par question, correction immédiate. Vise <b>80 %</b> minimum à chaque séance.</p>
      <div class="grid">
        ${SIDS.map(s => { const b = get("qcm:" + s, null); return `
          <a class="card level ${b >= 80 ? "done" : ""}" href="#/qcm/${s}" style="flex-direction:column;align-items:flex-start">
            ${pill(s)}<b style="margin-top:8px">${S[s].titre}</b>
            <span class="muted small">${window.QCM[s].length} questions · meilleur score : ${b === null ? "—" : b + " %"}</span></a>`; }).join("")}
        <a class="card level" href="#/qcm/mix" style="flex-direction:column;align-items:flex-start">
          <span class="pill">Mélange</span><b style="margin-top:8px">QCM mixte — 20 questions</b>
          <span class="muted small">Tirées au hasard dans toutes les séances · meilleur : ${get("qcm:mix", null) === null ? "—" : get("qcm:mix") + " %"}</span></a>
      </div>`;
  }

  function qcmRun(set_) {
    let pool;
    if (set_ === "mix") pool = shuffle(SIDS.flatMap(s => window.QCM[s].map(q => ({ ...q, s })))).slice(0, 20);
    else if (window.QCM[set_]) pool = shuffle(window.QCM[set_].map(q => ({ ...q, s: set_ })));
    else return qcmMenu();
    const qs = pool.map(q => { const order = shuffle(q.c.map((_, i) => i)); return { ...q, order }; });
    let i = 0, good = 0;
    const wrongs = [];
    function render() {
      if (i >= qs.length) return end();
      const q = qs[i];
      $app.innerHTML = `<div class="narrow">
        <a class="back" href="#/qcm">← QCM</a>
        <div class="card">
          <div class="q-head"><span>${pill(q.s)}</span><span>Question ${i + 1} / ${qs.length} · ${good} ✓</span></div>
          <div class="bar" style="margin:-4px 0 14px"><i style="width:${pct(i, qs.length)}%"></i></div>
          <div class="q-text">${q.q}</div>
          <div class="choices">${q.order.map((ci, k) => `<button class="choice" data-c="${ci}"><span class="lt">${"ABCD"[k]}</span><span>${q.c[ci]}</span></button>`).join("")}</div>
          <div id="fb"></div>
        </div></div>`;
      $app.querySelectorAll(".choice").forEach(btn => btn.onclick = () => {
        const c = +btn.dataset.c, ok = c === q.a;
        if (ok) good++; else wrongs.push(q);
        $app.querySelectorAll(".choice").forEach(b => { b.disabled = true; if (+b.dataset.c === q.a) b.classList.add("good"); });
        if (!ok) btn.classList.add("wrong");
        document.getElementById("fb").innerHTML = `<div class="feedback ${ok ? "good" : "wrong"}"><b>${ok ? "Bonne réponse." : "Pas tout à fait."}</b> ${q.e}</div>
          <div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn primary" id="nx">${i + 1 < qs.length ? "Question suivante →" : "Voir mon score"}</button></div>`;
        document.getElementById("nx").onclick = () => { i++; render(); };
        document.getElementById("nx").focus();
      });
    }
    function end() {
      const p = pct(good, qs.length);
      const key = "qcm:" + set_;
      if (p > get(key, -1)) set(key, p);
      $app.innerHTML = `<div class="narrow">
        <a class="back" href="#/qcm">← QCM</a>
        <div class="card" style="text-align:center">
          <div class="score-big">${p} %</div>
          <p>${good} bonnes réponses sur ${qs.length}. ${p >= 80 ? "Objectif atteint, bravo !" : "Relis la fiche de cours correspondante puis recommence : l'objectif est 80 %."}</p>
          <div class="row" style="justify-content:center"><button class="btn primary" id="again">Recommencer</button>
          ${set_ !== "mix" ? `<a class="btn" href="#/cours/${set_}">Revoir le cours</a>` : ""}<a class="btn" href="#/qcm">Autres QCM</a></div>
        </div>
        ${wrongs.length ? `<h3>À retenir (tes erreurs)</h3>${wrongs.map(q => `<div class="card"><b>${q.q}</b><p style="margin:6px 0 0">✓ ${q.c[q.a]}</p><p class="muted small" style="margin:4px 0 0">${q.e}</p></div>`).join("")}` : ""}
      </div>`;
      document.getElementById("again").onclick = () => qcmRun(set_);
    }
    render();
  }

  // ---------- Questions de cours (cartes) ----------
  function flash(filter) {
    filter = filter && (S[filter] || filter === "revoir") ? filter : "all";
    const items = window.FLASH.map((f, idx) => ({ ...f, idx }))
      .filter(f => filter === "all" ? true : filter === "revoir" ? get("flash:" + f.idx, 0) !== 2 : f.s === filter);
    let i = 0;
    function render() {
      const known = window.FLASH.filter((f, k) => get("flash:" + k, 0) === 2).length;
      const head = `<a class="back" href="#/">← Parcours</a>
        <h1>Niveau 4 — Questions de cours</h1>
        <p class="muted">Rédige ta réponse comme à l'examen (quelques lignes précises), puis compare. Sois honnête : « Je savais » seulement si tous les éléments du corrigé y sont.</p>
        <div class="tabs">
          <button data-f="all" class="${filter === "all" ? "on" : ""}">Toutes</button>
          ${SIDS.map(s => `<button data-f="${s}" class="${filter === s ? "on" : ""}">Séance ${S[s].num}</button>`).join("")}
          <button data-f="revoir" class="${filter === "revoir" ? "on" : ""}">À revoir</button>
        </div>
        <p class="small muted">Maîtrisées : <b>${known} / ${window.FLASH.length}</b></p>`;
      if (!items.length) { $app.innerHTML = `<div class="narrow">${head}<div class="card">Rien à revoir ici. Bravo ! 🎉</div></div>`; bindTabs(); return; }
      if (i >= items.length) {
        $app.innerHTML = `<div class="narrow">${head}<div class="card" style="text-align:center"><h2>Série terminée</h2><p>Passe sur « À revoir » pour retravailler les questions non maîtrisées.</p><div class="row" style="justify-content:center"><button class="btn primary" id="again">Recommencer</button><a class="btn" href="#/atelier">Niveau suivant →</a></div></div></div>`;
        bindTabs(); document.getElementById("again").onclick = () => { i = 0; render(); }; return;
      }
      const f = items[i], st = get("flash:" + f.idx, 0);
      $app.innerHTML = `<div class="narrow">${head}
        <div class="card flash">
          <div class="q-head"><span>${pill(f.s)}</span><span>${i + 1} / ${items.length} ${st === 2 ? "· ✓ maîtrisée" : st === 1 ? "· à revoir" : ""}</span></div>
          <div class="q">${f.q}</div>
          <textarea class="short" id="ans" placeholder="Ta réponse…" style="margin-top:12px">${esc(get("flashans:" + f.idx, ""))}</textarea>
          <div id="rev"><div class="row" style="margin-top:12px"><button class="btn primary" id="show">Voir le corrigé</button><span class="spacer"></span><button class="btn" id="skip">Passer</button></div></div>
        </div></div>`;
      bindTabs();
      document.getElementById("ans").oninput = e => set("flashans:" + f.idx, e.target.value);
      document.getElementById("skip").onclick = () => { i++; render(); };
      document.getElementById("show").onclick = () => {
        document.getElementById("rev").innerHTML = `<div class="a"><b>Corrigé :</b><p>${f.a}</p></div>
          <div class="row"><button class="btn bad" id="no">À revoir</button><button class="btn ok" id="yes">Je savais ✓</button></div>`;
        document.getElementById("no").onclick = () => { set("flash:" + f.idx, 1); i++; render(); };
        document.getElementById("yes").onclick = () => { set("flash:" + f.idx, 2); i++; render(); };
      };
    }
    function bindTabs() { $app.querySelectorAll(".tabs button").forEach(b => b.onclick = () => location.hash = "#/flash/" + b.dataset.f); }
    render();
  }

  // ---------- Atelier syllogisme ----------
  function atelierMenu() {
    $app.innerHTML = `<div class="narrow">
      <a class="back" href="#/">← Parcours</a>
      <h1>Niveau 5 — Atelier syllogisme</h1>
      <p class="muted">Pour chaque mini-cas, choisis la meilleure rédaction de la majeure, de la mineure puis de la conclusion. Chaque mauvaise option est expliquée : c'est là qu'on apprend les pièges.</p>
      ${window.ATELIER.map((a, i) => `<a class="case-item ${get("atelier:" + i, false) ? "done" : ""}" href="#/atelier/${i}"><span class="done-dot"></span><span style="flex:1"><b>${a.titre}</b><br><span class="muted small">${a.question}</span></span>${pill(a.seance)}</a>`).join("")}
    </div>`;
  }

  function atelierRun(idx) {
    const a = window.ATELIER[idx];
    if (!a) return atelierMenu();
    let step = 0, errors = 0;
    const built = [];
    function render() {
      const done = step >= a.steps.length;
      $app.innerHTML = `<div class="narrow">
        <a class="back" href="#/atelier">← Atelier</a>
        <h2>${a.titre}</h2>
        <div class="case-text"><p>${a.faits}</p><p><b>Question :</b> ${a.question}</p></div>
        ${built.map(b => `<div class="built"><span class="tag ${b.cls}">${b.label}</span> ${b.t}</div>`).join("")}
        ${done ? `<div class="card" style="text-align:center"><h3 style="margin-top:0">Syllogisme complet ✓</h3><p>${errors === 0 ? "Sans aucune erreur, parfait !" : errors + " erreur(s) en chemin : relis les explications des options écartées."}</p>
          <div class="row" style="justify-content:center">${window.ATELIER[idx + 1] ? `<a class="btn primary" href="#/atelier/${idx + 1}">Exercice suivant →</a>` : `<a class="btn primary" href="#/cas">Passer aux cas pratiques →</a>`}<a class="btn" href="#/atelier">Liste</a></div></div>`
        : `<div class="card"><p><b>Étape ${step + 1}/3 — Choisis la meilleure rédaction pour « <span class="tag t${step + 1}">${a.steps[step].label}</span> »</b></p>
          <div id="opts">${shuffle(a.steps[step].options.map((o, k) => k)).map(k => `<button class="opt" data-k="${k}">${a.steps[step].options[k].t}</button>`).join("")}</div></div>`}
      </div>`;
      if (done) { set("atelier:" + idx, true); return; }
      $app.querySelectorAll(".opt").forEach(btn => btn.onclick = () => {
        const o = a.steps[step].options[+btn.dataset.k];
        if (btn.disabled) return;
        if (o.ok) {
          btn.classList.add("good");
          btn.insertAdjacentHTML("beforeend", `<span class="why">✓ ${o.why}</span>`);
          $app.querySelectorAll(".opt").forEach(b => b.disabled = true);
          setTimeout(() => { built.push({ label: a.steps[step].label, t: o.t, cls: "t" + (step + 1) }); step++; render(); }, 1300);
        } else {
          errors++;
          btn.classList.add("wrong"); btn.disabled = true;
          btn.insertAdjacentHTML("beforeend", `<span class="why">✗ ${o.why}</span>`);
        }
      });
    }
    render();
  }

  // ---------- Cas pratiques ----------
  function modelHtml(q) {
    return `<div class="model">
      <div class="blk"><span class="tag t1">En droit,</span>${q.droit}</div>
      <div class="blk"><span class="tag t2">En l'espèce,</span>${q.espece}</div>
      <div class="blk"><span class="tag t3">En conclusion,</span>${q.concl}</div></div>`;
  }
  function checklistHtml(prefix, points) {
    return `<p class="helper"><b>Auto-correction :</b> coche chaque point présent (et juste) dans ta copie.</p>
      <ul class="checklist">${points.map((p, k) => `<li><input type="checkbox" id="${prefix}-${k}" data-key="${prefix}:${k}" ${get(prefix + ":" + k, false) ? "checked" : ""}><label for="${prefix}-${k}">${p}</label></li>`).join("")}</ul>`;
  }

  function casMenu() {
    $app.innerHTML = `<div class="narrow">
      <a class="back" href="#/">← Parcours</a>
      <h1>Niveau 6 — Cas pratiques des TD</h1>
      <p class="muted">Ce sont les cas de ta plaquette. Pour chacun : lis l'énoncé, <b>rédige ton syllogisme</b> (En droit / En l'espèce / En conclusion), puis affiche le corrigé et coche les points que tu as. Ta copie est sauvegardée automatiquement.</p>
      ${SIDS.map(s => `<h3>Séance ${S[s].num} — ${S[s].titre}</h3>
        ${window.CAS.filter(c => c.seance === s).map(c => { const sc = get("cas:" + c.id + ":score", null); return `<a class="case-item ${get("cas:" + c.id, false) ? "done" : ""}" href="#/cas/${c.id}"><span class="done-dot"></span><span style="flex:1"><b>${c.titre}</b><br><span class="muted small">${c.questions.length} question${c.questions.length > 1 ? "s" : ""}${sc !== null ? " · auto-évaluation : " + sc + " %" : ""}</span></span></a>`; }).join("")}`).join("")}
    </div>`;
  }

  function casRun(id) {
    const c = window.CAS.find(x => x.id === id);
    if (!c) return casMenu();
    const idx = window.CAS.indexOf(c), next = window.CAS[idx + 1];
    $app.innerHTML = `<div class="narrow">
      <a class="back" href="#/cas">← Cas pratiques</a>
      ${pill(c.seance)}
      <h2 style="margin-top:8px">${c.titre}</h2>
      <div class="case-text">${c.enonce}</div>
      ${c.questions.map((q, k) => `<div class="qblock card">
        <h4>Question ${c.questions.length > 1 ? k + 1 : ""}${c.questions.length > 1 ? " — " : ""}${q.q}</h4>
        <textarea data-k="${k}" placeholder="En droit, …&#10;&#10;En l'espèce, …&#10;&#10;En conclusion, …">${esc(get("casans:" + c.id + ":" + k, ""))}</textarea>
        <div class="row" style="margin-top:10px"><button class="btn primary" data-show="${k}">Voir le corrigé</button></div>
        <div id="cor-${k}"></div></div>`).join("")}
      <div class="card" id="result" style="display:none"></div>
      <div class="row" style="margin-top:8px">${next ? `<a class="btn" href="#/cas/${next.id}">Cas suivant →</a>` : `<a class="btn primary" href="#/examen">Passer à l'examen blanc →</a>`}</div>
    </div>`;
    $app.querySelectorAll("textarea").forEach(t => t.oninput = () => set("casans:" + c.id + ":" + t.dataset.k, t.value));
    const shown = new Set();
    function score() {
      let tot = 0, got = 0;
      c.questions.forEach((q, k) => q.points.forEach((p, j) => { tot++; if (get("casck:" + c.id + ":" + k + ":" + j, false)) got++; }));
      const p = pct(got, tot);
      set("cas:" + c.id + ":score", p);
      const r = document.getElementById("result");
      r.style.display = "block";
      r.innerHTML = `<b>Auto-évaluation : ${got} / ${tot} points (${p} %)</b><div class="bar"><i style="width:${p}%"></i></div>
        <p class="small muted" style="margin:8px 0 0">${p >= 75 ? "Très bien : ton raisonnement couvre l'essentiel." : p >= 50 ? "Correct, mais il manque des éléments : relis les points non cochés." : "Reprends la fiche de cours de cette séance, puis réécris ta réponse."}</p>`;
    }
    $app.querySelectorAll("[data-show]").forEach(b => b.onclick = () => {
      const k = +b.dataset.show, q = c.questions[k];
      b.remove();
      document.getElementById("cor-" + k).innerHTML = modelHtml(q) + checklistHtml("casck:" + c.id + ":" + k, q.points);
      document.querySelectorAll(`#cor-${k} input[type=checkbox]`).forEach(cb => cb.onchange = () => { set(cb.dataset.key, cb.checked); score(); });
      shown.add(k);
      if (shown.size === c.questions.length) set("cas:" + c.id, true);
      score();
    });
  }

  // ---------- Examen blanc ----------
  const DURATION = 90 * 60;
  function examMenu() {
    $app.innerHTML = `<div class="narrow">
      <a class="back" href="#/">← Parcours</a>
      <h1>Niveau 7 — Examen blanc</h1>
      <div class="card">
        <p><b>Conditions réelles :</b> 1 h 30, aucun document. Idéalement, rédige sur papier comme le jour J (ou ici dans les zones de texte).</p>
        <ul><li><b>Partie 1</b> — questions de cours : réponses courtes et précises.</li>
        <li><b>Partie 2</b> — 3 cas : le n°1 avec 1 question, le n°2 avec 3 questions, le n°3 avec 1 question. Pour chacune : <b>syllogisme + conclusion</b>, sans introduction ni problématique.</li></ul>
        <p class="small muted">Gestion du temps conseillée : 20 min pour le cours, 15 min cas n°1, 35 min cas n°2, 15 min cas n°3, 5 min de relecture. Barème indicatif : cours 6 pts, cas 14 pts.</p>
      </div>
      ${window.EXAMS.map(e => { const sc = get("exam:" + e.id + ":score", null); return `<a class="case-item ${sc !== null ? "done" : ""}" href="#/examen/${e.id}"><span class="done-dot"></span><span style="flex:1"><b>${e.titre}</b><br><span class="muted small">${sc !== null ? "Dernière note : " + sc + " / 20" : "Non commencé"}</span></span></a>`; }).join("")}
    </div>`;
  }

  function examRun(id) {
    const e = window.EXAMS.find(x => x.id === id);
    if (!e) return examMenu();
    const base = "exam:" + e.id;
    const corrected = get(base + ":corrected", false);
    let start = get(base + ":start", null);
    const nQ = e.cas.reduce((a, c) => a + c.questions.length, 0);
    // barème : cours 6 pts répartis ; cas 14 pts répartis par question
    const coursPts = 6 / e.cours.length, casPts = 14 / nQ;

    if (!start && !corrected) {
      $app.innerHTML = `<div class="narrow"><a class="back" href="#/examen">← Examens</a><h1>${e.titre}</h1>
        <div class="card"><p>Le chronomètre de <b>1 h 30</b> démarre dès que tu cliques. Tes réponses sont sauvegardées au fur et à mesure.</p>
        <div class="row"><button class="btn primary" id="go">Commencer l'épreuve</button></div></div></div>`;
      document.getElementById("go").onclick = () => { set(base + ":start", Date.now()); examRun(id); };
      return;
    }

    let qi = 0;
    $app.innerHTML = `<div class="narrow">
      <a class="back" href="#/examen">← Examens</a>
      <h1>${e.titre}</h1>
      ${corrected ? "" : `<div class="timer" id="timer"><span>⏱</span><span class="t" id="tleft">--:--</span><span class="spacer"></span><button class="btn" id="hand">Rendre ma copie</button></div>`}
      <h2 class="part-title">Partie 1 — Questions de cours</h2>
      ${e.cours.map((q, k) => `<div class="qblock card"><h4>${k + 1}. ${q.q}</h4>
        <textarea class="short" data-key="${base}:c:${k}" ${corrected ? "readonly" : ""}>${esc(get(base + ":c:" + k, ""))}</textarea>
        ${corrected ? `<div class="model"><b>Corrigé :</b> ${q.a}</div>
          <div class="self" data-self="${base}:cs:${k}">${[["0", "Faux / vide"], ["0.5", "Partiel"], ["1", "Complet"]].map(([v, l]) => `<button data-v="${v}" class="${String(get(base + ":cs:" + k, "")) === v ? "on" : ""}">${l}</button>`).join("")}</div>` : ""}
      </div>`).join("")}
      <h2 class="part-title">Partie 2 — Cas pratiques</h2>
      ${e.cas.map((c, ci) => `<div class="card"><h3 style="margin-top:0">${c.titre}</h3><div class="case-text">${c.enonce}</div>
        ${c.questions.map((q, k) => { const key = base + ":q:" + ci + ":" + k; qi++; return `<div class="qblock"><h4>Question ${c.questions.length > 1 ? k + 1 + " — " : ""}${q.q}</h4>
          <textarea data-key="${key}" placeholder="En droit, …&#10;&#10;En l'espèce, …&#10;&#10;En conclusion, …" ${corrected ? "readonly" : ""}>${esc(get(key, ""))}</textarea>
          ${corrected ? modelHtml(q) + checklistHtml(base + ":ck:" + ci + ":" + k, q.points) : ""}</div>`; }).join("")}
      </div>`).join("")}
      ${corrected ? `<div class="card" id="note"></div><div class="row"><button class="btn" id="redo">Recommencer cet examen</button><a class="btn primary" href="#/examen">Autres examens</a></div>`
        : `<div class="row"><button class="btn primary" id="hand2">Rendre ma copie et voir le corrigé</button></div>`}
    </div>`;

    $app.querySelectorAll("textarea:not([readonly])").forEach(t => t.oninput = () => set(t.dataset.key, t.value));

    if (!corrected) {
      const tick = () => {
        const left = Math.max(0, DURATION - Math.floor((Date.now() - start) / 1000));
        const el = document.getElementById("tleft");
        if (!el) { clearInterval(timerHandle); return; }
        el.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")} restantes`;
        document.getElementById("timer").classList.toggle("low", left < 600);
        if (left === 0) { clearInterval(timerHandle); alert("Temps écoulé ! La correction s'affiche."); hand(); }
      };
      const hand = () => { clearInterval(timerHandle); set(base + ":corrected", true); examRun(id); window.scrollTo(0, 0); };
      clearInterval(timerHandle); timerHandle = setInterval(tick, 1000); tick();
      document.getElementById("hand").onclick = () => { if (confirm("Rendre ta copie maintenant ?")) hand(); };
      document.getElementById("hand2").onclick = () => { if (confirm("Rendre ta copie maintenant ?")) hand(); };
      return;
    }

    function note() {
      let pts = 0;
      e.cours.forEach((q, k) => { pts += (parseFloat(get(base + ":cs:" + k, 0)) || 0) * coursPts; });
      e.cas.forEach((c, ci) => c.questions.forEach((q, k) => {
        const got = q.points.filter((p, j) => get(base + ":ck:" + ci + ":" + k + ":" + j, false)).length;
        pts += (got / q.points.length) * casPts;
      }));
      const n = Math.round(pts * 2) / 2;
      set(base + ":score", n);
      document.getElementById("note").innerHTML = `<b>Note indicative : ${n} / 20</b><div class="bar"><i style="width:${n * 5}%"></i></div>
        <p class="small muted" style="margin:8px 0 0">Évalue chaque question de cours et coche les points de chaque cas pour calculer ta note. ${n >= 14 ? "Tu es prêt(e) !" : n >= 10 ? "La moyenne est là ; retravaille les cas où tu as perdu des points." : "Reprends les niveaux 2 à 6 sur les séances concernées avant de retenter."}</p>`;
    }
    $app.querySelectorAll(".self").forEach(g => g.querySelectorAll("button").forEach(b => b.onclick = () => {
      set(g.dataset.self, b.dataset.v);
      g.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
      note();
    }));
    $app.querySelectorAll(".checklist input").forEach(cb => cb.onchange = () => { set(cb.dataset.key, cb.checked); note(); });
    document.getElementById("redo").onclick = () => {
      if (!confirm("Effacer tes réponses à cet examen et recommencer ?")) return;
      Object.keys(store).forEach(k => { if (k.startsWith(base + ":")) delete store[k]; });
      save(); examRun(id);
    };
    note();
  }

  // ---------- Routeur ----------
  function route() {
    clearInterval(timerHandle);
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    const r = parts[0] || "", arg = parts[1];
    document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.dataset.r === r));
    switch (r) {
      case "methode": methode(); break;
      case "cours": cours(arg); break;
      case "qcm": arg ? qcmRun(arg) : qcmMenu(); break;
      case "flash": flash(arg); break;
      case "atelier": arg !== undefined ? atelierRun(+arg) : atelierMenu(); break;
      case "cas": arg ? casRun(arg) : casMenu(); break;
      case "examen": arg ? examRun(arg) : examMenu(); break;
      default: home();
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
