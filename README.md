# Akanksha Rani — Portfolio (Tailwind CSS Version)

Dark-themed personal portfolio built with **Next.js 14** + **Tailwind CSS v3**.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → open http://localhost:3000
```

## Project structure

```
portfolio-tw/
├── pages/
│   ├── _app.js          ← imports globals.css
│   └── index.js         ← assembles all sections
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── styles/
│   └── globals.css      ← Tailwind directives + Google Fonts
├── tailwind.config.js   ← custom colors & fonts
├── postcss.config.js
└── public/
    └── AkankshaRani_WebDev_CV.pdf  ← put your CV here
```

## How to customise

### ✏️ Add your project links
Open `components/Projects.js` and replace the `#` placeholders:
```js
liveUrl: 'https://your-live-site.vercel.app',
codeUrl: 'https://github.com/akanksha8012/your-repo',
```

### 🎨 Change accent colour
Open `tailwind.config.js` and update:
```js
accent:  '#7c6af7',   // change to any hex colour
teal:    '#2dd4bf',   // secondary accent
```

### 📄 Add your CV PDF
Place `AkankshaRani_WebDev_CV.pdf` inside the `public/` folder.

### ➕ Add a new project
Add an object to the `projects` array in `components/Projects.js`:
```js
{
  title:       'My New Project',
  period:      'Jan 2026',
  tech:        ['React', 'Next.js'],
  description: 'What it does and why it matters.',
  liveUrl:     'https://your-site.com',
  codeUrl:     'https://github.com/akanksha8012/repo',
  featured:    false,
}
```

## Deploy to Vercel (free, 1 minute)

```bash
npx vercel
```
# akportfolio
