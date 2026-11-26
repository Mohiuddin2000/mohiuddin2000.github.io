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
| `sections` | Reorder entries to reorder the page; set `enabled: false` to hide a section |
| `hero.*` | Name, tagline, photo, badges, stats, resume link |
| `social` | GitHub / LinkedIn / Upwork / email links (an empty `url` hides that link) |
| `experience.showCompanyNames` | `false` hides company names |
| `experience.items[].highlights` / `experience.education` | Bullet points under each role; education entry at the end of the timeline |
| `projects.items[].code / demo` | An empty value hides that button; `image` adds a thumbnail, `icon` and `label` set the placeholder icon and corner tag |
| `certifications.items` | Image, title, issuer, date and credential URL for each certificate |
| `contact.formEndpoint` | Empty = the form opens the visitor's email app. Set a Formspree URL (or Web3Forms URL + `web3formsKey`) to receive messages in your inbox |

## 3. Preview locally
Open `index.html` in a browser, or run `npx serve .` / `python3 -m http.server` in this folder.

## 4. Deploy to GitHub Pages
1. Create a repo named **`<your-username>.github.io`** (for a personal site), or use any repo name.
2. Upload the *contents* of this folder (so `index.html` sits at the repo root).
3. Open the repo's **Settings → Pages**. Under *Source*, choose **Deploy from a branch**, then **main / (root)** → Save.
4. After about a minute the site is live at `https://<your-username>.github.io/`.

Image file names are case-sensitive on GitHub Pages: `profile.jpeg` ≠ `Profile.JPEG`.
