# Sebastian Numpaque — CV Site

Source for my personal CV website, built with [Astro](https://astro.build). It presents one bilingual (EN/ES) profile with an Academic ⇄ Industry toggle that reorders and emphasizes sections for grad-school/scholarship reviewers versus software-industry recruiters, without ever hiding content.

**Live site:** [https://numpaque4.github.io/](https://numpaque4.github.io/)

## Contact

- **Email**: [david.rodriguez1@udea.edu.co](mailto:david.rodriguez1@udea.edu.co)
- **GitHub**: [Numpaque4](https://github.com/Numpaque4)
- **LinkedIn**: [sebastian-numpaque-b257072a6](https://www.linkedin.com/in/sebastian-numpaque-b257072a6)
- **ORCID**: [0009-0000-5697-3416](https://orcid.org/0009-0000-5697-3416)

## Development

```sh
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # serve the production build locally
npx astro check   # type-check
```

## Updating content

All CV content lives in typed, bilingual data modules — there is no CMS and no markdown to edit:

- `src/data/*.ts` — education, experience, publications, skills, conferences, languages, references, certifications. Each substantive entry carries `{ en, es }` text and a `weight: { academic, industry }` that drives its position under each mode.
- `src/data/sections.ts` — section-level ordering per mode.
- `src/i18n/ui.ts` — interface strings (button labels, etc).
- `src/data/certifications.ts` — entries marked `verified: false` were transcribed only from filenames in `public/certificates/`; confirm the real issuer/title/year before trusting them.

## Rebuilding the PDF résumés

Four PDF variants (academic/industry × en/es) are generated from LaTeX sources in `resume-latex/` and committed to `public/cv/` — they are **not** rebuilt in CI.

```sh
cd resume-latex
make          # compiles all 4 variants into ../public/cv/
make clean    # removes build artifacts
```

Edit `resume-latex/content/{en,es}/*.tex`; the four `cv-{academic,industry}-{en,es}.tex` files at the top level are thin ordering manifests — only sections whose content genuinely differs by mode have separate `-academic`/`-industry` files.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages via `actions/deploy-pages`. In the repo's **Settings → Pages**, the source must be set to "GitHub Actions".

## License

Site content is licensed under [CC BY-SA 4.0](LICENSE). Third-party certificates in `public/certificates/` remain the property of their issuing institutions.

<!-- npm run dev -->