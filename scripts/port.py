#!/usr/bin/env python3
"""Port the standalone mockup into the Next.js app.
Edit designs/portfolio-redesign/Direction BC v2 — Kami Navy.html, then run:
    python3 scripts/port.py
Generates src/app/globals.css + src/app/homeMarkup.ts, and copies assets/essays
into public/. The floating surface/accent toggle and the inline <script> are
stripped for production; the lightbox is re-wired in src/app/page.tsx.
"""
import re, io, os, shutil
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
SRC = "designs/portfolio-redesign/Direction BC v2 — Kami Navy.html"
html = io.open(SRC, encoding="utf-8").read()

os.makedirs("public/redesign", exist_ok=True)
for f in os.listdir("designs/portfolio-redesign/assets"):
    if f.lower().endswith((".png", ".jpg", ".jpeg")):
        shutil.copy(f"designs/portfolio-redesign/assets/{f}", f"public/redesign/{f}")

os.makedirs("public/essays", exist_ok=True)
for f in os.listdir("designs/portfolio-redesign/essays"):
    if f.endswith(".html"):
        t = io.open(f"designs/portfolio-redesign/essays/{f}", encoding="utf-8").read()
        t = t.replace('href="../Emma Sun — portfolio (standalone).html"', 'href="/"')
        io.open(f"public/essays/{f}", "w", encoding="utf-8").write(t)

css = re.search(r"<style>(.*?)</style>", html, re.S).group(1)
io.open("src/app/globals.css", "w", encoding="utf-8").write(
    "/* Generated from designs/portfolio-redesign by scripts/port.py — do not hand-edit. */\n"
    + css.strip() + "\n")

body = re.search(r"<body>(.*?)</body>", html, re.S).group(1)
body = re.sub(r'<div class="bgtoggle">.*?</div>\s*</div>\s*', "", body, flags=re.S, count=1)
body = re.sub(r"<script>.*?</script>", "", body, flags=re.S)
body = re.sub(r'(src|data-full)="assets/', r'\1="/redesign/', body)
body = re.sub(r'href="essays/', 'href="/essays/', body)
body = re.sub(r'<span class="lbl">your photo.*?</span>\s*', "", body, flags=re.S)
io.open("src/app/homeMarkup.ts", "w", encoding="utf-8").write(
    "// Generated from designs/portfolio-redesign by scripts/port.py — do not hand-edit.\n"
    "export const homeMarkup = String.raw`\n" + body.strip() + "\n`;\n")
print("ported ok")
