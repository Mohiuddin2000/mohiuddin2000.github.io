# Portfolio Website

A responsive personal portfolio built with plain HTML, CSS and JavaScript. It has day/night mode, a settings panel for visitors, and all content lives in one config file.

## Folder structure
```
portfolio/
├── index.html
├── css/style.css
├── js/config.js      ← EDIT THIS: all content and options
├── js/main.js        ← rendering and interactions (no need to touch)
├── assets/images/    ← profile.jpeg, 1760465930957.jpeg, 1760465930777.jpeg
└── assets/resume.pdf ← your CV (add it)
```

## 1. Images and CV (already included)
| File | Used for |
|---|---|
| `assets/images/profile.jpeg` | Hero photo (square crop of Image.jpeg, 600×600) |
| `assets/images/1760465930957.jpeg` | DevOps 101 certificate |
| `assets/images/1760465930777.jpeg` | Software Architecture certificate |
| `assets/resume.pdf` | "Download Resume" button (downloads as Mohammad_Mohiuddin_CV.pdf) |

To replace one, keep the same file name, or change the path in `config.js`.
To add a certificate image, put it in `assets/images/` and add an entry under `certifications.items`. Entries without an `image` show as compact course cards.

## 2. Edit your content (`js/config.js`)
| Option | What it does |
|---|---|
| `theme.defaultMode` | `"dark"`, `"light"` or `"auto"` (follows the visitor's device) |
| `theme.accentColor` | Main highlight color |
| `theme.font` | `"Inter"`, `"Poppins"`, `"Space Grotesk"` or `"system"` |
| `theme.radius` | Card corner roundness, in px |
| `theme.animations` | Fade-in-on-scroll effects on or off |
| `theme.showSettingsPanel` | Floating gear button that lets visitors change theme and accent color |
| `sections` | Reorder entries to reorder the page; set `enabled: false` to hide a section. Background shading alternates automatically |
| `hero.*` | Name, tagline, photo, badges, stats, resume link |
| `social` | GitHub / LinkedIn / Upwork / email links (an empty `url` hides that link) |
| `experience.showCompanyNames` | `false` hides company names |
| `experience.items[].highlights` | Bullet points under each role |
| `education.items` | Education section: degree, school, dates, location, CGPA (`grade`), optional highlights |
| `hero.interests` / `skills.interests` | "Enthusiast in" chips in the hero, and the "Passionate about" band in Skills (DevOps, AI, MLOps) |
| `achievements` | Competitive Programming & Achievements section: highlight cards, contest rankings, and optional Codeforces/LeetCode profile links |
| `projects.items[].code / demo` | An empty value hides that button; `image` adds a thumbnail, `icon` and `label` set the placeholder icon and corner tag |
| `certifications.items` | Image, title, issuer, date and credential URL for each certificate |
| `contact.web3formsKey` | Your Web3Forms access key; the "Send a Message" form then delivers straight to your inbox (see below). Empty = opens the visitor's email app |
| `contact.replyTime` / `subjectPrefix` / `fromName` / `hcaptcha` | Reply-time note, email subject prefix, sender name in your inbox, optional hCaptcha |

## Set up the "Send a Message" form (Web3Forms, free)
1. Go to **https://web3forms.com**, enter `mohiuddinmohammad2000@gmail.com` and click **Create Access Key**. The key arrives in that inbox.
2. Paste it into `js/config.js` → `contact.web3formsKey: "your-key-here"`.
3. Deploy the site, send yourself a test message, and check your inbox. Check the spam folder too and mark the first one "Not spam".

What's built in:
- **Messages go straight to your inbox.** Reply directly to the visitor, because their email is set as reply-to.
- **Email subject:** "Portfolio: <visitor's subject>".
- **Field checks:** errors show under each field, and the form jumps to the first problem.
- **Message counter:** shows characters used out of the 2000 limit.
- **Sending state:** a spinner shows, and a message can't be sent twice.
- **Success screen,** with a "Send another message" button.
- **If sending fails:** a clear error with "Copy email" and "Open email app" buttons.
- **Spam protection:** a hidden honeypot field, and a check that ignores forms sent within 3 seconds of the page loading. Optionally turn on hCaptcha by setting `hcaptcha: true` *and* selecting hCaptcha for your form in the Web3Forms dashboard.
- **Free plan:** 250 messages a month.

Messages can't be sent from the claude.ai preview, because it blocks outside connections. They send fine on GitHub Pages.

## 3. Preview locally
Open `index.html` in a browser, or run `npx serve .` / `python3 -m http.server` in this folder.

## 4. Deploy to GitHub Pages
1. Create a repo named **`<your-username>.github.io`** (for a personal site), or use any repo name.
2. Upload the *contents* of this folder (so `index.html` sits at the repo root).
3. Open the repo's **Settings → Pages**. Under *Source*, choose **Deploy from a branch**, then **main / (root)** → Save.
4. After about a minute the site is live at `https://<your-username>.github.io/`.

Image file names are case-sensitive on GitHub Pages: `profile.jpeg` ≠ `Profile.JPEG`.
