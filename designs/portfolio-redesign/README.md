# Portfolio redesign (low-key, white + navy)

Work-in-progress redesign of the site. Right now it lives as a **standalone HTML mockup**, not yet ported into the Next.js app. The Next.js app under `src/` is still the OLD design and is untouched.

## Files
- **`Direction BC v2 — Kami Navy.html`** — the canonical mockup. Edit this one.
- `Emma Sun — portfolio (standalone).html` — generated single-file version with images inlined (double-click to view offline). Regenerate after editing the canonical file (see below).
- `essays/` — the Writing-section essays (markdown):
  - `the-evaluation-gap.md`
  - `interview-dont-upload.md` (the Foundry idea, supersedes the older `taste-is-the-last-mile.md`)
  - `your-job-is-a-bundle-of-tasks.md`
- `assets/` — project screenshots used by the mockup.
- `Direction A / B / C / BC` — earlier exploration, kept for reference.

## Preview
```bash
# from this folder's parent (designs/):
python3 -m http.server 4311
# then open http://localhost:4311/portfolio-redesign/Direction%20BC%20v2%20—%20Kami%20Navy.html
```
The mockup has a bottom-right toggle for surface (white/cool/tint/warm) and accent (navy/cobalt/teal/rust/ink). Decided: **white + navy**.

## Rebuild the standalone (after editing the canonical HTML)
```bash
cd designs/portfolio-redesign
python3 - <<'PY'
import base64, re, io, os
html=io.open("Direction BC v2 — Kami Navy.html",encoding='utf-8').read()
def d(p):
    ext=os.path.splitext(p)[1].lstrip('.').lower();m={'png':'image/png','jpg':'image/jpeg','jpeg':'image/jpeg'}.get(ext,'image/png')
    return f"data:{m};base64,"+base64.b64encode(open(p,'rb').read()).decode()
html=re.sub(r'src="(assets/[^"]+)"', lambda x:'src="'+d(x.group(1))+'"' if os.path.exists(x.group(1)) else x.group(0), html)
io.open("Emma Sun — portfolio (standalone).html",'w',encoding='utf-8').write(html)
PY
```

## Decisions so far
- Tone: **low-key personal site**, no sloganeering, no metric walls, no hard-sell. Calm first person.
- Hero: "I'm Emma, a product manager working in AI." + one quiet paragraph. No stat strip.
- Writing rule: **no em dashes** anywhere.
- Work cards use a four-point one-pager: **The problem / What changed / Our solution / Achievements** (bold black lead-ins).
- Sections: Hero, Work (ChatGeneT, Valence, Dispatch, Decoding the Beige Book), Lab, Automation, Experience, Writing, Contact.
- ChatGeneT and Valence are ONE company (ChatGeneT pivoted into Valence). Valence is in private beta, $1M angel-backed.
- Foundry: not exposed as a homepage exhibit (stealth + shared IP). It lives only as the essay `interview-dont-upload.md`.
- Dispatch (formerly Repurpose): a self-iterating AI marketing engine.

## TODO
- Decide whether to keep the public `getvalence.io` link (Valence is in stealth).
- Keep refining content, then port the mockup into the Next.js app under `src/` (globals.css can be generated from the mockup's `<style>` block; fonts via next/font: Space Grotesk, Source Serif 4, JetBrains Mono).
- Fix two old-site bugs during the port: resume link case (`/emma-sun-resume.pdf`) and `/work` page broken images.
