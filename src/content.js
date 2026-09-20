// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE. Everything on the site comes from here.
//  Anything marked TODO is a guess — replace it with your words.
// ─────────────────────────────────────────────────────────────

export const me = {
  name: 'Sheen',
  // TODO: put your real surname here if you want it in the hero.
  headline: 'I build web systems that institutions run on every day.',
  intro:
    'Full-stack developer based in Dasmariñas, Cavite. I work mostly in .NET and React, with SQL Server underneath. I also teach data structures and algorithms to second-year IT students, which keeps me honest about how the things I build actually work.',
  location: 'Dasmariñas, Cavite, Philippines',
  available: 'Taking on freelance and contract work',
}

export const links = {
  email: 'sheenrusselcastillo@gmail.com',
  github: 'https://github.com/shintech-asp',
  linkedin: 'http://linkedin.com/in/sheen-russel-castillo-1813a5287/',
  facebook: 'https://facebook.com/Shhhin',
  phone: '0921-853-4953',
}

export const projects = [
  {
    id: 'askbro',
    name: 'AskBro',
    org: 'De La Salle University–Dasmariñas',
    year: '2025—2026',
    url: 'https://ai.dlsud.edu.ph/chat',
    role: 'Sole developer',
    summary:
      'An AI assistant that answers student questions about enrollment, requirements and campus services, with a full admin panel behind it so staff can manage what it knows without touching code.',
    detail:
      'The hard part was never the chat window. It was the admin side: role-based access for different offices, a knowledge base staff can actually maintain, guest sessions that survive a refresh, and a dynamic API registry so new data sources can be wired in without a redeploy.',
    stack: ['ASP.NET MVC', '.NET 8', 'SQL Server', 'Bootstrap 5', 'IIS'],
    art: 'flow',
  },
  {
    id: 'admissions',
    name: 'Admissions portal',
    org: 'De La Salle University–Dasmariñas',
    year: '2026',
    url: 'http://admission.dlsud.edu.ph/portal/Account/Login',
    role: 'Software engineer, with a partner developer',
    // TODO: rewrite this summary — I don't have access to the site, so this is a placeholder.
    summary:
      'A public-facing admissions site for incoming students, covering requirements, deadlines and the application process.',
    detail:
      'Built with a partner developer, with me as software engineer. TODO: describe what you actually built here. What did applicants do on it, what ran behind it, and what was the hardest part?',
    stack: ['ASP.NET', 'SQL Server', 'IIS'], // TODO: correct the stack
    art: 'pipeline',
  },
  {
    id: 'excigent',
    name: 'Excigent Tech Partners',
    org: 'Client work',
    year: '2026',
    url: 'https://excigent-demo.vercel.app/',
    role: 'Design and build',
    summary:
      'A corporate site for an IT services company, built around an interactive 3D globe that shows where they operate.',
    detail:
      'Built from scratch in React rather than a template, so the globe, the motion and the page weight stayed under my control. I also put together a modernization proposal for the rest of their web presence.',
    stack: ['React', 'Vite', 'Tailwind', 'Three.js'],
    art: 'globe',
  },
]

export const practice = [
  {
    label: 'Systems, not pages',
    body: 'Most of my work has an admin panel, a database and real users on the other end. I think about who maintains it after I hand it over.',
  },
  {
    label: 'Two stacks, one head',
    body: '.NET and SQL Server for anything that needs to be reliable and auditable. React when the front end has to feel good. I am comfortable moving between them in the same project.',
  },
  {
    label: 'I teach this',
    body: 'I lecture on data structures, information management and integrative programming. Explaining a thing to twenty students is the fastest way to find out whether you really understand it.',
  },
]
