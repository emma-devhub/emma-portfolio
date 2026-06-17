# Emma Sun — AI Product Builder Portfolio

Personal portfolio site showcasing AI product work across healthcare, agent infrastructure, and LLM research.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Projects

### [ChatGeneT](https://www.getchatgenet.com)
AI patient simulator for hospital-based clinical training. Multi-turn dialogue system that simulates realistic patient encounters, generates structured training feedback, and enforces factual consistency across sessions. Deployed across 30+ hospitals, 500+ junior doctors trained. Hallucination rate 0.31%.

Role: Product, Eval, QA — built the dialogue taxonomy, eval framework, and release gate protocol.

### [Valence](https://getvalence.io)
Expert-agent marketplace where domain experts teach, test, and publish AI agents that encode their judgment and workflows. Built the teach-test-publish core loop, owned front-end design, hand-built 10+ live agents, and curated 45–70 additional marketplace agents.

Role: Founding Product (COO) — product, design, front-end, marketing, supply.

### Repurpose
AI content redistribution pipeline. Ingests long-form content and generates platform-native drafts with audience-aware style configs across content channels. Built end to end as a production CLI tool.

Role: Sole builder — Claude API, X API, LinkedIn API, browser automation.

### [Decoding the Beige Book](src/app/work/beigebook/page.tsx)
End-to-end LLM pipeline for transforming Fed Beige Book narratives into structured recession risk signals. 526 documents, 56K+ topic entries, peak F1 0.89 on recession nowcasting. Accepted as oral presentation at ACM ICAIF 2025.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- Playfair Display + Libre Franklin (Google Fonts)

## Run Locally

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Links

- LinkedIn: [linkedin.com/in/emmayisun](https://www.linkedin.com/in/emmayisun)
- GitHub: [github.com/emma-devhub](https://github.com/emma-devhub)
- ChatGeneT: [getchatgenet.com](https://www.getchatgenet.com)
- Valence: [getvalence.io](https://getvalence.io)
