// Generated from designs/portfolio-redesign by scripts/port.py — do not hand-edit.
export const homeMarkup = String.raw`
<header>
  <nav>
    <a class="brand" href="#top"><span class="mark"></span>Emma Sun</a>
    <div class="navlinks">
      <a href="#work">Work</a><a href="#lab">Lab</a><a href="#automation">Automation</a><a href="#writing">Writing</a><a href="#contact">Contact</a>
    </div>
  </nav>
</header>

<main id="top">
  <section class="hero wrap">
    <div class="hero-text hero-narr">
      <h1 class="rise d2" style="font-size:clamp(27px,3.4vw,40px);max-width:20ch;line-height:1.2;font-weight:600;margin-bottom:22px;">I'm <span class="hl">Emma</span>, a product manager working in AI.</h1>
      <p class="rise d3" style="font-size:18px;color:var(--acc);font-weight:600;margin-bottom:18px;">I didn't start in product by writing PRDs.</p>
      <p class="rise d3">I started on trading floors, sitting next to people making fast decisions with incomplete information. My job was to understand how they worked: what they watched, what they ignored, where the workflow broke, and what a better tool would have changed.</p>
      <p class="turn rise d3">That instinct stayed.</p>
      <p class="rise d3">At JPMorgan, I built tools around how macro people think: monitoring Fed speeches, turning messy communication into signals, and structuring client conversations into something a recommendation system could learn from. A colleague once told me, <em>"you automated my brain."</em> I still think that is the best compliment a product can get.</p>
      <p class="rise d3">Later, in healthcare and clinical simulation, the domain changed but the problem did not. Billing experts, clinicians, patients: they all had workflows, judgment calls, edge cases, and failure modes.</p>
      <p class="rise d3"><b>That is still the work I like most: watching how experts think, then turning that into systems people can use.</b></p>
      <p class="rise d3">Today, most of my work sits at the layer where a model's capability has to become something people actually use, trust, and keep using. The important parts are usually quiet: evaluation, edge cases, knowing when an answer is wrong, and understanding the workflow well enough to know what "right" even means.</p>
      <p class="rise d3" style="color:var(--acc);font-weight:600;">And when I'm not building, you'll probably still find me spending an unreasonable amount of time thinking and writing about the Fed and the U.S. economy :)</p>
      <div class="herocta rise d4" style="margin-top:30px;">
        <a class="btn ghost" href="#work">See the work</a>
      </div>
    </div>
    <div class="hero-photo rise d2">
      <img src="/redesign/emma.png" alt="Emma Sun" onerror="this.style.display='none'" />
    </div>
  </section>

  <section class="sec wrap" id="work">
    <div class="sec-top"><h2>Selected <span class="hl">work</span></h2><span class="n">what I've worked on</span></div>

    <article class="proj">
      <a class="media" href="https://www.getchatgenet.com" target="_blank"><span class="corner">chatgenet</span><img src="/redesign/chatgenet.png" alt="ChatGeneT" /></a>
      <div>
        <div class="ptag">Agentic AI · Healthcare<span class="status st-live">● Live</span></div>
        <h3>ChatGeneT</h3>
        <div class="onepager">
          <p><span class="lead">The problem:</span> Junior doctors learn bedside reasoning on real patients: inconsistent, bottlenecked by supervisor time, and thin on the rare cases that matter most.</p>
          <p><span class="lead">What changed:</span> LLMs can now hold a realistic, multi-turn clinical conversation on demand.</p>
          <p><span class="lead">Our solution:</span> ChatGeneT, an agentic patient simulator. It orchestrates a multi-turn agent that holds memory and context across a full encounter, stays in character, adapts to the clinician's questions, and enforces clinical and factual consistency, then returns structured feedback. I owned product, evaluation, and QA.</p>
          <p><span class="lead">Achievements:</span> Live across <b>30+ hospitals</b> and 500+ clinicians, at a <b>0.31%</b> hallucination rate and 4.5/5 CSAT.</p>
        </div>
        <div class="plinks"><a href="https://www.getchatgenet.com" target="_blank">Live site ↗</a></div>
      </div>
    </article>

    <article class="proj">
      <a class="media" href="https://getvalence.io" target="_blank"><span class="corner">valence</span><img src="/redesign/valence.png" alt="Valence" /></a>
      <div>
        <div class="ptag">Agentic AI · Marketplace<span class="status st-live">● Private beta</span></div>
        <h3>Valence</h3>
        <div class="onepager">
          <p><span class="lead">The problem:</span> The most valuable expertise lives in people's heads as tacit judgment and taste, which doesn't transfer. Most "expert AI" is a prompt wrapper that loses exactly what made the expert worth hiring.</p>
          <p><span class="lead">What changed:</span> An LLM can now be interviewed and tested like a new hire, so an expert's judgment can be elicited, encoded, and checked instead of guessed at.</p>
          <p><span class="lead">Our solution:</span> Valence, the marketplace our company pivoted into. Experts teach an agent through a guided interview, test it against real cases, and publish it. As co-founder and founding product, I built the teach-test-publish core loop and owned product, design, and the React and Next.js front end end to end.</p>
          <p><span class="lead">Achievements:</span> <b>$1M</b> angel-backed and in private beta with early users. Ahead of a public launch, I seeded the marketplace's supply myself, hand-building <b>10+</b> agents and curating 45-70 more.</p>
        </div>
        <div class="plinks"><a href="https://getvalence.io" target="_blank">Live site ↗</a></div>
      </div>
    </article>

    <article class="proj">
      <a class="media" href="https://github.com/emma-devhub" target="_blank"><span class="corner">dispatch</span><img src="/redesign/dispatch.png" alt="Dispatch" /></a>
      <div>
        <div class="ptag">AI Marketing Engine<span class="status st-build">▲ Building</span></div>
        <h3>Dispatch</h3>
        <div class="onepager">
          <p><span class="lead">The problem:</span> Distribution runs on gut feel. "I can tell this one will land" is a qualitative hunch: unmeasured, hard to repeat, and capped by the single person making the call.</p>
          <p><span class="lead">What changed:</span> An LLM can rewrite one idea into many native variants, and the platforms hand back the response. So distribution stops being a guess and becomes a measurable loop.</p>
          <p><span class="lead">Our solution:</span> Dispatch, a marketing engine. From one content base it generates many variations, schedules and posts them, reads the data on what reached and resonated, and uses it to iterate the writing and the timing on its own. You install your taste once, and after that the engine runs the loop and keeps the human out of it.</p>
          <p><span class="lead">Achievements:</span> Turns "I think this will go viral" from a hunch into a structured, self-improving system.</p>
        </div>
        <div class="plinks"><a href="https://github.com/emma-devhub" target="_blank">GitHub ↗</a></div>
      </div>
    </article>

    <article class="proj">
      <div class="media"><span class="corner">beigebook</span><img src="/redesign/beigebook.png" alt="Beige Book" /></div>
      <div>
        <div class="ptag">LLM Research · Macro signals<span class="status st-pub">◆ ACM ICAIF '25</span></div>
        <h3>Decoding the Beige Book</h3>
        <div class="onepager">
          <p><span class="lead">The problem:</span> The Fed's Beige Book is one of the best reads on the real economy, but it is qualitative narrative, so you cannot track it over time, compare across districts, or feed it into a model.</p>
          <p><span class="lead">What changed:</span> LLMs can read long, unstructured narrative and turn it into consistent, machine-comparable features.</p>
          <p><span class="lead">Our solution:</span> An end-to-end text-to-signal pipeline over 526 Beige Books and 56K+ topic entries. I designed the topic taxonomy, paragraph-level routing, and ground-truth guidelines, and used a multi-model majority vote to turn narrative into structured recession-risk signals.</p>
          <p><span class="lead">Achievements:</span> Peak <b>F1 0.89</b> on recession nowcasting. Accepted as an oral presentation at ACM ICAIF '25.</p>
        </div>
        <div class="plinks"><a href="https://dl.acm.org/doi/full/10.1145/3768292.3770425" target="_blank">Read the paper ↗</a></div>
      </div>
    </article>
  </section>

  <section class="sec wrap" id="lab">
    <div class="sec-top"><h2><span class="hl">Lab</span></h2><span class="n">side projects</span></div>
    <div class="lab-grid">

      <article class="lab-card">
        <div class="lab-thumb"><img src="/redesign/macro-corpus.png" data-full="/redesign/macro-corpus-full.png" alt="macro-corpus" /></div>
        <div class="lab-top"><span class="lab-id">macro-corpus</span><span class="status st-build">▲ Engine</span></div>
        <h3>macro-corpus</h3>
        <p>A client-agnostic data and "lens" layer over MCP, a zero-dependency server that encodes how I read each macro indicator. It's the engine the Macro Research IDE runs on.</p>
        <div class="lab-tags"><span>MCP</span><span>Zero-dep</span><span>Architecture</span></div>
      </article>

      <article class="lab-card">
        <div class="lab-thumb"><img src="/redesign/macro-ide.png" data-full="/redesign/macro-ide-full.png" alt="Macro Research IDE" /></div>
        <div class="lab-top"><span class="lab-id">macro-ide</span><span class="status st-build">▲ Building</span></div>
        <h3>Macro Research IDE</h3>
        <p>A Cursor-style writing environment for macro research: a file-tree explorer, rich notes with live charts and tables, and a side-panel agent powered by headless Claude Code and custom MCP tools.</p>
        <div class="lab-tags"><span>Next.js</span><span>MCP</span><span>Claude Code</span></div>
      </article>

      <article class="lab-card">
        <div class="lab-thumb"><img src="/redesign/macro-terminal.png" data-full="/redesign/macro-terminal-full.png" alt="Macro Terminal" /></div>
        <div class="lab-top"><span class="lab-id">macro-terminal</span><span class="status st-live">● Live</span></div>
        <h3>Macro Terminal</h3>
        <p>A macro research terminal I built and use daily: labor, inflation, rates, and cross-asset on one screen, pulling FRED, BLS, and live market data into interactive charts. The data backbone I write my recaps from.</p>
        <div class="lab-tags"><span>Next.js</span><span>Multi-source data</span><span>Charts</span></div>
      </article>

      <article class="lab-card">
        <div class="lab-thumb"><img src="/redesign/fed-chatterbox.png" data-full="/redesign/fed-chatterbox-full.png" alt="Fed Chatterbox" /></div>
        <div class="lab-top"><span class="lab-id">fed-chatterbox</span><span class="status st-live">● Live</span></div>
        <h3>Fed Chatterbox</h3>
        <p>Tracks Federal Reserve communications and scores their policy direction, with a curated research feed and a newsletter. An LLM pipeline over central-bank speak.</p>
        <div class="lab-tags"><span>NLP</span><span>Gemini API</span><span>Newsletter</span></div>
      </article>

      <article class="lab-card">
        <div class="lab-thumb"><img src="/redesign/thinkflow.png" data-full="/redesign/thinkflow-full.png" alt="ThinkFlow" /></div>
        <div class="lab-top"><span class="lab-id">thinkflow</span><span class="status st-live">● Live</span></div>
        <h3>ThinkFlow</h3>
        <p>A visual AI research tool that turns conversations into an explorable mind map. Every answer is a draggable card on an infinite canvas you can branch from, with adaptive tree-or-chain layout.</p>
        <div class="lab-tags"><span>React canvas</span><span>Groq / Gemini</span><span>AI tool</span></div>
      </article>

      <article class="lab-card">
        <div class="lab-thumb"><img src="/redesign/rate-brief.png" data-full="/redesign/rate-brief-full.png" alt="Rate Brief" /></div>
        <div class="lab-top"><span class="lab-id">rate-brief</span><span class="status st-live">● Daily</span></div>
        <h3>Rate Brief</h3>
        <p>An automated rates research pipeline that runs every morning: pulls news (RSS and Tavily), drafts with an LLM, and renders a bilingual HTML and PDF brief to my inbox. It has run on its own every morning for months.</p>
        <div class="lab-tags"><span>Python</span><span>Scheduled</span><span>In production</span></div>
      </article>

      <article class="lab-card" style="justify-content:center;align-items:flex-start;background:var(--bg);border-style:dashed;">
        <div class="lab-top"><span class="lab-id">more</span></div>
        <h3 style="color:var(--ink-2);">More on GitHub</h3>
        <p>A private macro-education RAG corpus (~2.5M tokens) and a shelf of smaller tools and experiments.</p>
        <a class="lab-link" href="https://github.com/emma-devhub" target="_blank">github.com/emma-devhub ↗</a>
      </article>

    </div>
  </section>

  <section class="sec wrap" id="automation">
    <div class="sec-top"><h2>Tools I built for <span class="hl">myself</span></h2><span class="n">Claude Code skills</span></div>
    <div class="auto">
      <div class="auto-row">
        <span class="nm">market-podcast-writing</span>
        <span class="ds">Turns an Apple Podcasts episode into a transcript, drafts a research note in my house style, and posts it to X, in one command.</span>
        <span class="tg">pipeline · publish</span>
      </div>
      <div class="auto-row">
        <span class="nm">rate-daily / rate-weekly</span>
        <span class="ds">A near-autonomous rates desk note: pulls news (RSS + Tavily), drafts with an LLM, and renders a styled HTML / PDF brief on a schedule.</span>
        <span class="tg">research · scheduled</span>
      </div>
      <div class="auto-row">
        <span class="nm">post-multi</span>
        <span class="ds">One orchestrator that adapts a single piece into platform-native drafts and posts them across social channels, short form and long.</span>
        <span class="tg">distribution</span>
      </div>
      <div class="auto-row">
        <span class="nm">writing-ide</span>
        <span class="ds">Revises a draft like a pull request: rewrites the prose, then generates a word-level diff with accept and reject hunks, and never touches the source until I accept.</span>
        <span class="tg">tooling · UX</span>
      </div>
      <div class="auto-row">
        <span class="nm">us-macro-daily-summary</span>
        <span class="ds">Web-searches the day's US macro releases, compares actual against consensus, and writes a tight plain-English note to a fixed length and audience.</span>
        <span class="tg">research · scheduled</span>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="experience">
    <div class="sec-top"><h2>Experience</h2><span class="n">2019 – present</span></div>
    <p class="exp-thesis">A few places I learned to turn expert workflows into systems.</p>

    <div class="explog">
      <div class="exprow">
        <div>
          <p class="co2">Société Générale</p>
          <p class="kick">Electronic FX · 2019–2021</p>
        </div>
        <div>
          <p class="note">I learned to read workflows from the outside in: how systematic macro funds traded, where platforms got in the way, and what a better trading experience would have changed.</p>
        </div>
      </div>

      <div class="exprow">
        <div>
          <p class="co2">JPMorgan</p>
          <p class="kick">U.S. Rates + AI/Data Strategy · 2021–2023</p>
        </div>
        <div>
          <p class="note">I started building around my own domain: turning Fed communication, market interpretation, and client conversations into structured signals and recommendation systems.</p>
        </div>
      </div>

      <div class="exprow">
        <div>
          <p class="co2">Commure</p>
          <p class="kick">AI-Powered Enterprise Platforms · 2023–2024</p>
        </div>
        <div>
          <p class="note">I took the same instinct into healthcare workflows, where the hard part was defining evidence, confidence, missing information, and the human review loop.</p>
        </div>
      </div>

      <div class="exprow">
        <div>
          <p class="co2">ChatGeneT / Applied AI Startup</p>
          <p class="kick">Co-founder · 2024–Present</p>
        </div>
        <div>
          <p class="note">I now build systems closer to the source: helping experts turn specialized workflows into AI behavior that can be tested, improved, and deployed.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="writing">
    <div class="sec-top"><h2><span class="hl">Writing</span> &amp; notes</h2><span class="n">thinking in public</span></div>
    <p class="write-intro">I think in public, and have for years. Most of it lives in Chinese, where I write and podcast on AI and markets for an audience of <b>tens of thousands of finance and AI professionals</b>. These are the English distillations: the few ideas I keep coming back to.</p>
    <div class="write-stack">
      <a class="wbig" href="/essays/the-evaluation-gap.html">
        <div class="src">Essay</div>
        <h4>The Evaluation Gap</h4>
        <p class="dek">When an agent underperforms on a task that isn't hard, the missing piece is usually a closed evaluation loop, not a better model. Coding works because it has ground truth. Vertical AI has to build it.</p>
        <span class="more">Read →</span>
      </a>
      <a class="wbig" href="/essays/interview-dont-upload.html">
        <div class="src">Essay</div>
        <h4>Interview, Don't Upload</h4>
        <p class="dek">The bottleneck in building a great expert agent is not the model, it is getting a person's tacit method and taste out of their head. People can't describe their own method, but they can answer questions, so you interview them. The thinking behind Foundry.</p>
        <span class="more">Read →</span>
      </a>
      <a class="wbig" href="/essays/your-job-is-a-bundle-of-tasks.html">
        <div class="src">Essay · part 1</div>
        <h4>Your Job Is a Bundle of Tasks</h4>
        <p class="dek">"Will AI take my job" is the wrong question. The right unit is the task, not the title: decompose the work, and ask how codifiable each piece really is.</p>
        <span class="more">Read →</span>
      </a>
      <a class="wbig" href="/essays/complement-or-substitute.html">
        <div class="src">Essay · part 2</div>
        <h4>Complement or Substitute</h4>
        <p class="dek">Is AI lowering a task's cost, or raising your value? The O-ring, demand elasticity, and four questions to write down about your own job. Even a surviving role can shed headcount.</p>
        <span class="more">Read →</span>
      </a>
      <a class="wbig" href="/essays/the-agentic-future-is-here.html">
        <div class="src">Essay · Medium</div>
        <h4>The Agentic Future Is Here</h4>
        <p class="dek">In mid-2024, fresh off a markets desk, I wrote down what I thought agents would become. This goes back and grades those predictions against what actually happened.</p>
        <span class="more">Read →</span>
      </a>
      <a class="wbig" href="/essays/product-model-market-fit.html">
        <div class="src">Essay · Medium</div>
        <h4>Beyond PMF: Product-Model-Market Fit</h4>
        <p class="dek">Product-market fit assumes a fixed product. AI breaks that: the model keeps moving under you. A third axis, and a Manus case study for when product, model, and market line up.</p>
        <span class="more">Read →</span>
      </a>
    </div>
  </section>

  <section class="contact wrap" id="contact">
    <h2>Quietly <span class="hl">looking.</span></h2>
    <p>Open to founding-product and AI-product roles building LLM systems for complex, high-stakes work. Happy to talk.</p>
    <div class="herocta">
      <a class="btn solid" href="mailto:emmayisun@gmail.com">Email me</a>
      <a class="btn ghost" href="https://www.linkedin.com/in/yi-s-982931380/" target="_blank">LinkedIn</a>
      <a class="btn ghost" href="https://github.com/emma-devhub" target="_blank">GitHub</a>
      <a class="btn ghost" href="/emma-sun-resume.pdf" target="_blank">Résumé</a>
    </div>
  </section>
</main>

<footer>
  <div class="wrap foot"><span>© 2026 Emma Sun</span><span>Kami · Navy v2</span></div>
</footer>

<div class="lightbox" id="lightbox">
  <span class="x">close ✕</span>
  <figure><img id="lb-img" src="" alt="" /><figcaption id="lb-cap"></figcaption></figure>
</div>
`;
