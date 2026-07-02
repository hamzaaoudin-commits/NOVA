/*
  NOVA — moteur i18n
  -------------------
  - Traductions FR/EN dans DICT ci-dessous (clé = data-i18n dans le HTML).
  - Langue résolue dans l'ordre : ?lang= dans l'URL > localStorage > défaut FR.
  - Le toggle FR/EN met à jour l'URL (?lang=) et localStorage.
  Pour éditer un texte : cherche sa clé dans DICT et modifie fr/en.
*/

const DICT = {
  // ---------- NAV (commun) ----------
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.offer": { fr: "L'offre", en: "The offer" },
  "nav.journey": { fr: "Le parcours", en: "The journey" },
  "nav.pricing": { fr: "Tarif", en: "Pricing" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.start": { fr: "Commencer", en: "Start" },

  // ---------- FOOTER (commun) ----------
  "footer.house": { fr: "Strawberry Production", en: "Strawberry Production" },
  "footer.quote": { fr: "On ne te livre pas une marque. On fait naître l'entreprise avec toi.", en: "We don't hand you a brand. We bring the company to life with you." },
  "footer.sign": { fr: "Architecture de marque — Paris", en: "Brand Narrative Architecture — Paris" },

  // ---------- INDEX ----------
  "index.eyebrow": { fr: "Strawberry Production — Application payante", en: "Strawberry Production — Paid application" },
  "index.subtitle": { fr: "L'application qui vous fait avancer, étape par étape, de l'idée à l'entreprise lancée.", en: "The application that moves you forward, step by step, from idea to launched company." },
  "index.manifesto": { fr: "« On ne vous livre pas une marque.<br>On la fait naître avec vous. »", en: "\"We don't hand you a brand.<br>We bring it to life with you.\"" },
  "index.cta.discover": { fr: "Découvrir l'offre", en: "Discover the offer" },
  "index.cta.start": { fr: "Commencer mon parcours", en: "Start my journey" },

  "index.concept.label": { fr: "Le concept", en: "The concept" },
  "index.concept.h2": { fr: "Ni un audit, ni un produit livré clé en main.<br>Une application, et vous aux commandes.", en: "Not an audit, not a done-for-you deliverable.<br>An application, with you at the controls." },
  "index.concept.lead": { fr: "NOVA prend une idée encore floue — « j'aimerais lancer quelque chose » — et la conduit jusqu'à une entreprise prête à exister : un nom, un positionnement, une identité, un site, un plan de lancement. Pas en le faisant à votre place, mais en avançant <em>avec</em> vous, étape après étape. À chaque phase, l'application structure le travail et vous prenez les décisions qui n'appartiennent qu'au fondateur.", en: "NOVA takes an idea that's still blurry — \"I'd like to launch something\" — and carries it all the way to a company ready to exist: a name, a positioning, an identity, a site, a launch plan. Not by doing it for you, but by moving forward <em>with</em> you, step after step. At each phase, the application structures the work and you make the decisions only a founder can make." },

  "index.why.label": { fr: "Pourquoi ça marche", en: "Why it works" },
  "index.why.01.t": { fr: "Vous restez le fondateur", en: "You stay the founder" },
  "index.why.01.p": { fr: "L'application ne décide rien à votre place. Elle pose les bonnes questions, dans le bon ordre, et transforme vos réponses en fondations solides.", en: "The application decides nothing for you. It asks the right questions, in the right order, and turns your answers into solid foundations." },
  "index.why.02.t": { fr: "Un seul fil, pas dix prestataires", en: "One thread, not ten vendors" },
  "index.why.02.p": { fr: "Stratégie, naming, identité, site, lancement : tout est coordonné dans un même outil cohérent, au lieu d'être éclaté entre des intervenants qui ne se parlent pas.", en: "Strategy, naming, identity, site, launch: everything is coordinated in one coherent tool, instead of scattered across people who never talk to each other." },
  "index.why.03.t": { fr: "Votre rythme, votre progression", en: "Your pace, your progress" },
  "index.why.03.p": { fr: "Un paiement unique, un accès sans date limite. Vous avancez quand vous êtes prêt, et tout ce que vous écrivez est sauvegardé.", en: "A single payment, access with no deadline. You move when you're ready, and everything you write is saved." },

  "index.close.label": { fr: "En une phrase", en: "In one sentence" },
  "index.close.quote": { fr: "NOVA transforme une idée encore floue en une entreprise prête à être lancée — nom, positionnement, identité, site, plan d'action — via une application pas-à-pas où le fondateur garde la main à chaque étape.", en: "NOVA turns a still-blurry idea into a company ready to launch — name, positioning, identity, site, action plan — through a step-by-step application where the founder keeps control at every stage." },
  "index.close.cta1": { fr: "Voir le parcours en détail", en: "See the journey in detail" },
  "index.close.cta2": { fr: "Voir le tarif", en: "See the price" },

  // ---------- OFFRE ----------
  "offer.h1": { fr: "L'<em>offre</em>, en détail", en: "The <em>offer</em>, in detail" },
  "offer.sub": { fr: "Trois savoir-faire fusionnés dans une application en 5 étapes, pour un seul résultat : une entreprise prête à naître, construite avec vous.", en: "Three crafts fused into a 5-step application, for a single result: a company ready to be born, built with you." },
  "offer.concept.label": { fr: "Le concept", en: "The concept" },
  "offer.concept.h2": { fr: "Pas un audit. Pas une prestation qu'on subit passivement.", en: "Not an audit. Not a service you sit through passively." },
  "offer.concept.lead": { fr: "NOVA est une application payante qui vous conduit de « j'ai une idée » à « j'ai une entreprise prête à lancer ». C'est la méthode appliquée en interne par Strawberry Production sur ses propres projets, packagée en un outil que vous parcourez vous-même — l'application cadre chaque étape, vous fournissez la matière, les choix, la direction.", en: "NOVA is a paid application that takes you from \"I have an idea\" to \"I have a company ready to launch.\" It's the method Strawberry Production applies internally on its own projects, packaged into a tool you go through yourself — the application frames each step, you provide the substance, the choices, the direction." },

  "offer.diff.label": { fr: "Ce qui différencie", en: "What sets it apart" },
  "offer.diff.h2": { fr: "Personne ne couvre tout ce spectre en gardant le fondateur au centre.", en: "No one covers this whole spectrum while keeping the founder at the center." },
  "offer.diff.lead": { fr: "La plupart des acteurs sont spécialisés sur un seul maillon — stratégie, ou branding, ou dev web — et vous laissent recoller les morceaux entre plusieurs interlocuteurs. NOVA inverse ça : un seul fil narratif, un seul outil, du premier brief au lancement. Et à aucun moment vous n'êtes spectateur : chaque étape attend votre décision.", en: "Most players specialize in a single link — strategy, or branding, or web dev — and leave you to piece it together across several parties. NOVA flips that: one narrative thread, one tool, from first brief to launch. And at no point are you a spectator: every step waits for your decision." },
  "offer.diff.quote": { fr: "Un paiement unique. Cinq étapes. Le fondateur aux commandes, tout du long.", en: "A single payment. Five steps. The founder in control, the whole way through." },

  "offer.how.label": { fr: "Comment ça marche", en: "How it works" },
  "offer.how.h2": { fr: "Vous payez une fois. Vous avancez à votre rythme. Vous décidez à chaque étape.", en: "You pay once. You move at your pace. You decide at each step." },
  "offer.how.lead": { fr: "Après paiement, l'application se débloque intégralement. Les 5 étapes s'enchaînent dans l'ordre — chacune s'appuie sur ce que vous avez rempli à la précédente. Rien ne se perd : votre progression est sauvegardée à chaque étape, vous fermez et vous reprenez où vous en étiez.", en: "After payment, the application unlocks completely. The 5 steps run in order — each builds on what you filled in before. Nothing is lost: your progress is saved at every step, you close and pick up where you left off." },

  // ---------- PARCOURS ----------
  "journey.h1": { fr: "Le <em>parcours</em>", en: "The <em>journey</em>" },
  "journey.sub": { fr: "Cinq étapes dans l'application. Chacune se débloque quand la précédente est complétée — et chacune attend une décision du fondateur.", en: "Five steps in the application. Each unlocks when the previous one is complete — and each waits for a founder's decision." },
  "journey.format.label": { fr: "Format", en: "Format" },
  "journey.format.h2": { fr: "Une application, pas une commande passive.", en: "An application, not a passive order." },
  "journey.format.lead": { fr: "Vous n'attendez pas qu'on vous livre un fichier. Vous construisez, étape par étape, la marque et l'entreprise — l'application vous guide, garde la cohérence entre les étapes, et ne laisse jamais un choix stratégique se faire sans vous.", en: "You're not waiting for a file to be delivered. You build, step by step, the brand and the company — the application guides you, keeps coherence between steps, and never lets a strategic choice happen without you." },
  "journey.weeks": { fr: "À VOTRE RYTHME — AUCUNE DATE LIMITE, PROGRESSION SAUVEGARDÉE", en: "AT YOUR PACE — NO DEADLINE, PROGRESS SAVED" },

  "journey.step.role": { fr: "Le rôle du fondateur", en: "The founder's role" },

  "journey.s1.n": { fr: "ÉTAPE 01", en: "STEP 01" },
  "journey.s1.t": { fr: "Clarification de l'idée", en: "Clarifying the idea" },
  "journey.s1.p": { fr: "On transforme une intuition en projet lisible : quel problème, pour qui, pourquoi maintenant. L'application structure le questionnement ; le fondateur tranche ce qu'est réellement son projet — et ce qu'il n'est pas.", en: "We turn an intuition into a legible project: what problem, for whom, why now. The application structures the questioning; the founder decides what their project truly is — and what it isn't." },
  "journey.s1.role": { fr: "Vous seul savez ce qui vous anime. NOVA vous force à le formuler noir sur blanc — c'est votre matière première.", en: "Only you know what drives you. NOVA forces you to put it in writing — that's your raw material." },

  "journey.s2.n": { fr: "ÉTAPE 02", en: "STEP 02" },
  "journey.s2.t": { fr: "Validation du positionnement", en: "Validating the positioning" },
  "journey.s2.p": { fr: "On définit ce que la marque dit, à qui, et pourquoi elle est différente. L'application propose les axes ; le fondateur choisit l'angle qu'il est prêt à défendre pendant des années.", en: "We define what the brand says, to whom, and why it's different. The application lays out the angles; the founder picks the one they're ready to defend for years." },
  "journey.s2.role": { fr: "Un positionnement ne se délègue pas : c'est une conviction. Vous validez celui dans lequel vous vous reconnaissez.", en: "A positioning can't be delegated: it's a conviction. You validate the one you recognize yourself in." },

  "journey.s3.n": { fr: "ÉTAPE 03", en: "STEP 03" },
  "journey.s3.t": { fr: "Nom et identité", en: "Name and identity" },
  "journey.s3.p": { fr: "Naming, ton de voix, univers visuel et verbal, cohérents avec le positionnement acté. L'application génère des pistes structurées ; le fondateur retient celles qui portent sa vision.", en: "Naming, tone of voice, visual and verbal world, coherent with the agreed positioning. The application generates structured directions; the founder keeps the ones that carry their vision." },
  "journey.s3.role": { fr: "Le nom, vous allez le porter partout. C'est vous qui décidez lequel devient le vôtre.", en: "You'll carry the name everywhere. You're the one who decides which one becomes yours." },

  "journey.s4.n": { fr: "ÉTAPE 04", en: "STEP 04" },
  "journey.s4.t": { fr: "Le site", en: "The site" },
  "journey.s4.p": { fr: "La vitrine web, alignée avec l'identité définie. L'application cadre l'architecture des pages et les priorités de contenu ; le fondateur arbitre ce qui mérite d'être mis en avant.", en: "The web storefront, aligned with the defined identity. The application frames the page architecture and content priorities; the founder decides what deserves the spotlight." },
  "journey.s4.role": { fr: "Personne ne connaît votre offre mieux que vous. Vous dictez ce que le site doit dire en premier.", en: "No one knows your offer better than you. You dictate what the site must say first." },

  "journey.s5.n": { fr: "ÉTAPE 05", en: "STEP 05" },
  "journey.s5.t": { fr: "Plan de lancement à 90 jours", en: "90-day launch plan" },
  "journey.s5.p": { fr: "Une feuille de route concrète pour les trois premiers mois d'existence publique. L'application propose une structure d'actions ; le fondateur s'engage sur celles qu'il tiendra vraiment.", en: "A concrete roadmap for the first three months of public existence. The application proposes a structure of actions; the founder commits to the ones they'll truly hold to." },
  "journey.s5.role": { fr: "Un plan que vous n'exécuterez pas ne vaut rien. Vous choisissez les actions à votre portée réelle.", en: "A plan you won't execute is worth nothing. You choose the actions within your real reach." },

  "journey.invol.label": { fr: "Implication", en: "Involvement" },
  "journey.invol.h2": { fr: "C'est vous qui avancez. L'application structure, elle ne fait pas à votre place.", en: "You're the one moving forward. The application structures; it doesn't do it for you." },
  "journey.invol.lead": { fr: "Contrairement à un audit qu'on lit passivement, NOVA demande un vrai travail à chaque étape : vous répondez, vous formulez, vous décidez. C'est la condition pour que l'entreprise qui en sort soit vraiment la vôtre.", en: "Unlike an audit you read passively, NOVA demands real work at every step: you answer, you formulate, you decide. That's the condition for the company that comes out to truly be yours." },
  "journey.invol.left": { fr: "Lecture passive", en: "Passive reading" },
  "journey.invol.right": { fr: "Travail actif du fondateur", en: "Active founder work" },
  "journey.cta1": { fr: "Voir le tarif", en: "See the price" },
  "journey.cta2": { fr: "Commencer mon parcours", en: "Start my journey" },
  "journey.close.quote": { fr: "Cinq étapes. Une application. Le fondateur, à chaque décision.", en: "Five steps. One application. The founder, at every decision." },

  // ---------- TARIFS ----------
  "pricing.h1": { fr: "Tarif & <em>valeur</em>", en: "Price & <em>value</em>" },
  "pricing.sub": { fr: "Un paiement unique. Un accès complet et sans date limite à l'application.", en: "A single payment. Full access to the application, with no deadline." },
  "pricing.label": { fr: "Tarification", en: "Pricing" },
  "pricing.h2": { fr: "Un paiement unique, accès à vie au parcours.", en: "A single payment, lifetime access to the journey." },
  "pricing.note": { fr: "Paiement unique — pas d'abonnement. L'application reste accessible tant que vous progressez, sans date limite.", en: "One-time payment — no subscription. The application stays accessible as long as you're progressing, with no deadline." },
  "pricing.r1": { fr: "RAISON 01", en: "REASON 01" },
  "pricing.r1.p": { fr: "Remplace le travail d'un stratège, d'un copywriter, d'un designer et d'un développeur — structuré en un seul outil cohérent.", en: "Replaces the work of a strategist, a copywriter, a designer and a developer — structured into one coherent tool." },
  "pricing.r2": { fr: "RAISON 02", en: "REASON 02" },
  "pricing.r2.p": { fr: "Un seul paiement couvre les 5 étapes intégralement, sans facturation additionnelle en cours de route.", en: "A single payment covers all 5 steps in full, with no extra billing along the way." },
  "pricing.incl.label": { fr: "Ce qui est inclus", en: "What's included" },
  "pricing.incl.quote": { fr: "Un paiement unique. Cinq étapes débloquées progressivement. Aucun frais caché, aucun abonnement.", en: "A single payment. Five steps unlocked progressively. No hidden fees, no subscription." },
  "pricing.cta1": { fr: "Commencer mon parcours", en: "Start my journey" },
  "pricing.cta2": { fr: "Revoir le parcours", en: "Review the journey" },
  "pricing.close.quote": { fr: "Un paiement. Cinq étapes. Votre entreprise.", en: "One payment. Five steps. Your company." },

  // ---------- CONTACT ----------
  "contact.h1": { fr: "Une <em>question</em><br>avant de commencer ?", en: "A <em>question</em><br>before you start?" },
  "contact.sub": { fr: "NOVA s'achète et se démarre directement dans l'application. Ce formulaire sert uniquement si vous voulez échanger avant.", en: "NOVA is bought and started directly in the application. This form is only for reaching out beforehand." },
  "contact.check.label": { fr: "Pour vérifier que c'est pour vous", en: "To check it's right for you" },
  "contact.check.no.tag": { fr: "Ce n'est pas pour vous si", en: "It's not for you if" },
  "contact.check.no.p": { fr: "Votre entreprise est déjà lancée et tourne — c'est l'offre Strawberry classique qu'il vous faut, pas NOVA.", en: "Your company is already launched and running — you need the classic Strawberry offer, not NOVA." },
  "contact.check.yes.tag": { fr: "C'est pour vous si", en: "It's for you if" },
  "contact.check.yes.p": { fr: "Vous avez une idée claire, rien n'est encore lancé, et vous voulez avancer vous-même, étape par étape, dans un outil qui structure le travail.", en: "You have a clear idea, nothing is launched yet, and you want to move forward yourself, step by step, in a tool that structures the work." },
  "contact.check.cta": { fr: "Commencer mon parcours", en: "Start my journey" },
  "contact.q.label": { fr: "Une question", en: "A question" },
  "contact.q.h2": { fr: "Écrivez-nous avant de payer.", en: "Write to us before paying." },
  "contact.q.lead": { fr: "Doute sur le format, question technique, cas particulier : ce formulaire part directement dans notre boîte mail. Réponse sous 48h ouvrées.", en: "Unsure about the format, technical question, edge case: this form goes straight to our inbox. Reply within 48 business hours." },
  "contact.f.name": { fr: "Nom & prénom", en: "Full name" },
  "contact.f.email": { fr: "Email", en: "Email" },
  "contact.f.question": { fr: "Votre question", en: "Your question" },
  "contact.f.send": { fr: "Envoyer", en: "Send" },
  "contact.direct.label": { fr: "Ou directement", en: "Or directly" },
  "contact.direct.p": { fr: "Vous préférez écrire directement ?", en: "Prefer to write directly?" },
  "contact.status.ok": { fr: "Message envoyé — réponse sous 48h ouvrées.", en: "Message sent — reply within 48 business hours." },
  "contact.status.sending": { fr: "Envoi...", en: "Sending..." },
  "contact.status.sent": { fr: "Envoyé", en: "Sent" },

  // ---------- APP ----------
  "app.pay.label": { fr: "Accès à l'application", en: "Application access" },
  "app.pay.lead": { fr: "Un paiement unique. Accès immédiat aux 5 étapes. Votre progression est sauvegardée automatiquement, vous pouvez reprendre à tout moment.", en: "A single payment. Immediate access to all 5 steps. Your progress is saved automatically, you can resume anytime." },
  "app.pay.btn": { fr: "Payer et commencer", en: "Pay and start" },
  "app.pay.fine": { fr: "Paiement sécurisé par Stripe. Redirection automatique vers votre application juste après.", en: "Secure payment via Stripe. Automatic redirect to your application right after." },
  "app.h1": { fr: "Votre <em>parcours</em>", en: "Your <em>journey</em>" },
  "app.sub": { fr: "Complétez chaque étape pour débloquer la suivante. Rien n'est perdu — tout se sauvegarde ici, sur cet appareil.", en: "Complete each step to unlock the next. Nothing is lost — everything saves here, on this device." },
  "app.progress": { fr: "étapes complétées", en: "steps completed" },
  "app.save": { fr: "Sauvegarder l'étape", en: "Save step" },
  "app.saved": { fr: "Sauvegardé", en: "Saved" },
  "app.status.done": { fr: "Complété", en: "Completed" },
  "app.status.locked": { fr: "Verrouillé", en: "Locked" },
  "app.status.todo": { fr: "À faire", en: "To do" }
};

const NOVA_APP_STEPS = {
  fr: [
    { id: "idee", title: "1. Clarification de l'idée", hint: "Votre rôle : formuler ce qui vous anime. Quel problème, pour qui, pourquoi maintenant.", placeholder: "Quel problème résolvez-vous, pour qui, et pourquoi maintenant ?" },
    { id: "positionnement", title: "2. Validation du positionnement", hint: "Votre rôle : choisir l'angle que vous êtes prêt à défendre pendant des années.", placeholder: "En une phrase : qu'est-ce que votre marque dit que personne d'autre ne peut dire ?" },
    { id: "identite", title: "3. Nom et identité", hint: "Votre rôle : retenir le nom et l'univers qui deviennent vraiment les vôtres.", placeholder: "Pistes de nom, ton de voix, références visuelles qui vous parlent..." },
    { id: "site", title: "4. Le site", hint: "Votre rôle : dicter ce que le site doit dire en premier.", placeholder: "Pages nécessaires, contenu prioritaire, exemples de sites que vous aimez..." },
    { id: "lancement", title: "5. Plan de lancement à 90 jours", hint: "Votre rôle : vous engager sur les actions que vous tiendrez vraiment.", placeholder: "Vos 3 premières actions, canaux prioritaires, objectif à 90 jours..." }
  ],
  en: [
    { id: "idee", title: "1. Clarifying the idea", hint: "Your role: articulate what drives you. What problem, for whom, why now.", placeholder: "What problem do you solve, for whom, and why now?" },
    { id: "positionnement", title: "2. Validating the positioning", hint: "Your role: choose the angle you're ready to defend for years.", placeholder: "In one sentence: what does your brand say that no one else can?" },
    { id: "identite", title: "3. Name and identity", hint: "Your role: keep the name and world that truly become yours.", placeholder: "Name directions, tone of voice, visual references you connect with..." },
    { id: "site", title: "4. The site", hint: "Your role: dictate what the site must say first.", placeholder: "Pages needed, priority content, examples of sites you like..." },
    { id: "lancement", title: "5. 90-day launch plan", hint: "Your role: commit to the actions you'll truly hold to.", placeholder: "Your first 3 actions, priority channels, 90-day goal..." }
  ]
};

function novaGetLang() {
  const p = new URLSearchParams(window.location.search).get('lang');
  if (p === 'fr' || p === 'en') return p;
  const stored = localStorage.getItem('nova_lang');
  if (stored === 'fr' || stored === 'en') return stored;
  return 'fr';
}

function novaApplyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('nova_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (DICT[key] && DICT[key][lang] !== undefined) el.innerHTML = DICT[key][lang];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (DICT[key] && DICT[key][lang] !== undefined) el.setAttribute('placeholder', DICT[key][lang]);
  });
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  // keep ?lang in URL without reloading
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

function novaInitLang() {
  const lang = novaGetLang();
  novaApplyLang(lang);
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.addEventListener('click', () => novaApplyLang(b.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', novaInitLang);
