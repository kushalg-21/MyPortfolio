# Resume file

`Kushal-Gowda-G-Resume.pdf` is the downloadable resume served by the website. It is a
genuine one-page A4 PDF with selectable text and clickable contact links.

Edit `scripts/generate-resume.py` to update the resume content, then regenerate it:

```bash
pip install reportlab
python scripts/generate-resume.py
```

Keep the output filename and the `resume` configuration in `src/data/portfolio.ts` in sync.
The website builds the download URL with Vite's `BASE_URL`, so no change is needed for GitHub
Pages subpath deployment.
