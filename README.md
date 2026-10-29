# Kushal Gowda G. — Portfolio

A single-page personal portfolio for Kushal Gowda G., a third-year Computer Science and
Engineering student at CMR University. The site is built with React, Vite, and TypeScript,
with a custom editorial design system written in plain CSS.

## Stack

- React 19
- Vite 8
- TypeScript 7
- Plain CSS with custom properties (no UI framework)
- Lucide React for the few interface icons needed
- Google Fonts: Instrument Serif, Space Grotesk, JetBrains Mono

## Run locally

```bash
pnpm install
pnpm dev
```

The development server prints its local URL (normally `http://localhost:5173`).

Other useful commands:

```bash
pnpm typecheck   # TypeScript project build check
pnpm lint        # oxlint
pnpm build       # production build into dist/
pnpm preview     # serve the production build locally
```

## Where to edit content

All personal content lives in one file:

```text
src/data/portfolio.ts
```

It contains the profile copy, navigation, about paragraphs, workshop principles, skills,
education, projects, experience placeholder, interests, contact links, and resume settings.

### Personal details

The verified email, LinkedIn, and GitHub URLs are configured in `contactLinks`. To change
them later, update the `value` and `href` fields together.

- `resume.available`: already `true` because the PDF is included.
- Project `repoUrl` and `liveUrl` fields: set to real URLs only when they are public.
- `education.startYear` / `education.endYear`: optional dates.
- `experience.entries`: add verified internships, hackathons, certifications, or awards.

The site does not fabricate project links, achievements, or personal details. Empty or
pending values are shown honestly with placeholders.

## Resume

The downloadable resume is included at:

```text
public/resume/Kushal-Gowda-G-Resume.pdf
```

It is generated from `scripts/generate-resume.py` and must remain exactly one A4 page.
To update the content, edit the generator and rebuild the PDF:

```bash
python scripts/generate-resume.py
```

The generator requires ReportLab:

```bash
pip install reportlab
```

The website reads the PDF path from `resume` in `src/data/portfolio.ts` and prefixes it with
Vite's `BASE_URL`, so the download works on both the root domain and a GitHub Pages
repository subpath.

## Deployment on GitHub Pages

The Vite `base` path is read from `VITE_BASE_PATH`. The included workflow sets it to the
repository name automatically, so assets resolve correctly on a project page such as
`https://<username>.github.io/<repository>/`.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys the site on every
   push to `main`. You can also run it manually from the **Actions** tab.
5. When the workflow finishes, the site URL appears in the deployment environment and in
   **Settings → Pages**.

To test the production build locally exactly as it will be served at a repository subpath
(PowerShell):

```powershell
$env:VITE_BASE_PATH="/MyPortfolio/"
pnpm build
pnpm preview
Remove-Item Env:VITE_BASE_PATH
```

Use your actual repository name in place of `MyPortfolio`. If you deploy to a custom domain
or a user/organisation site (`<username>.github.io`), build without `VITE_BASE_PATH` so the
base remains `/`.

## Accessibility and performance notes

- Semantic landmarks and heading order, skip link, visible focus states.
- Mobile navigation locks scroll, closes with Escape, and traps keyboard focus while open.
- `prefers-reduced-motion` is respected by reveal animations and smooth scrolling.
- No fabricated images or screenshot assets; project visuals are labelled concept diagrams
  built from inline SVG.
- Production output is static and requires no server runtime.

## Known limitations

- No phone number, address, academic marks, CGPA, graduation date, or work experience has
  been added because those details were not supplied.
- Project demo links are absent until a verified deployment exists. Only public repositories
  are linked.
- GitHub Pages deployment requires the repository to exist and the workflow permissions
  described above; nothing is published automatically from this local workspace.
