// Variation C — Lab Notebook
// Grid-paper background, experiment numbers, hand-marked underlines, tactile.

const VariationC = () => {
  const [lang, setLang] = React.useState('ja');
  const [open, setOpen] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const t = T7_BIO[lang];

  const cats = ['all', ...Array.from(new Set(T7_APPS.map((a) => a.category[lang])))];
  const filtered = filter === 'all' ? T7_APPS : T7_APPS.filter((a) => a.category[lang] === filter);

  return (
    <div className="vc-root">
      <div className="vc-grid-bg" />
      <div className="vc-page">
        {/* Notebook header / sticker */}
        <header className="vc-nav">
          <div className="vc-stamp">
            <div className="vc-stamp-inner">
              <div className="vc-stamp-l1">Tani7</div>
              <div className="vc-stamp-l2">Laboratory</div>
              <div className="vc-stamp-l3">Est. 2021 · Tokyo</div>
            </div>
          </div>
          <nav className="vc-nav-right">
            <div className="vc-nav-meta">
              <div>
                <span className="vc-key">FIELD</span>
                <span className="vc-val">Software</span>
              </div>
              <div>
                <span className="vc-key">VOL.</span>
                <span className="vc-val">07 / 2026</span>
              </div>
            </div>
            <button className="vc-lang-btn" onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}>
              <span className={lang === 'ja' ? 'is-active' : ''}>日本語</span>
              <span className="vc-sep">/</span>
              <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            </button>
          </nav>
        </header>

        {/* Hero notebook entry */}
        <section className="vc-hero">
          <div className="vc-entry-label">
            <span className="vc-entry-num">ENTRY—000</span>
            <span className="vc-entry-date">2026 / 05 / 25</span>
          </div>
          <h1 className="vc-headline">
            <span className="vc-h-block">{t.intro_line1}</span>
            <span className="vc-h-block">
              <span className="vc-h-mark">{t.intro_line2}</span>
            </span>
          </h1>
          <div className="vc-hero-body">
            <p className="vc-hero-bio">{t.bio}</p>
            <aside className="vc-sidecard">
              <div className="vc-sidecard-key">OBSERVATIONS</div>
              <ul className="vc-sidecard-list">
                <li>
                  <span className="vc-bullet">→</span>
                  {lang === 'ja' ? '小さな道具を、長く作る。' : 'Tiny tools, long-running.'}
                </li>
                <li>
                  <span className="vc-bullet">→</span>
                  {lang === 'ja' ? '基本はFlutter / Dart。' : 'Mostly Flutter / Dart.'}
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Experiments */}
        <section className="vc-section">
          <div className="vc-section-head">
            <div>
              <div className="vc-section-num">§ 01</div>
              <h2 className="vc-section-title">
                {lang === 'ja' ? 'アプリ一覧' : 'Apps'}
                <span className="vc-section-count">— {T7_APPS.length}</span>
              </h2>
            </div>
            <div className="vc-filters">
              {cats.map((c) => (
                <button
                  key={c}
                  className={'vc-filter ' + (filter === c ? 'is-active' : '')}
                  onClick={() => setFilter(c)}
                >
                  <span className="vc-check">{filter === c ? '✕' : '☐'}</span>
                  {c === 'all' ? t.all : c}
                </button>
              ))}
            </div>
          </div>

          <div className="vc-cards">
            {filtered.map((app, i) => (
              <article key={app.id} className="vc-card" onClick={() => setOpen(app)}>
                <div className="vc-tape" />
                <div className="vc-card-head">
                  <span className="vc-card-id">EXP·{app.no}</span>
                  <span className={'vc-badge vc-badge-' + app.statusKey}>{app.status[lang]}</span>
                </div>
                <div className="vc-card-thumb">
                  <svg className="vc-card-svg" viewBox="0 0 200 120" preserveAspectRatio="none">
                    <defs>
                      <pattern id={'vc-pat-' + app.id} width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(50,40,30,0.07)" strokeWidth="0.6" />
                      </pattern>
                    </defs>
                    <rect width="200" height="120" fill={`url(#vc-pat-${app.id})`} />
                  </svg>
                  <div className="vc-card-mark">
                    <span>{app.name.en.slice(0, 2).toLowerCase()}</span>
                  </div>
                  <div className="vc-card-cat-tag">{app.category[lang]}</div>
                </div>
                <h3 className="vc-card-name">
                  <span className="vc-underline">{app.name[lang]}</span>
                </h3>
                <p className="vc-card-tag">{app.tagline[lang]}</p>
                <div className="vc-card-foot">
                  <div className="vc-card-stack">
                    {app.stack.slice(0, 3).map((s, idx) => (
                      <React.Fragment key={s}>
                        {idx > 0 && <span className="vc-stack-sep">·</span>}
                        <span>{s}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  {app.url !== '#'
                    ? <a href={app.url} target="_blank" rel="noopener" className="vc-card-play" onClick={e => e.stopPropagation()}>Google Play ↗</a>
                    : <div className="vc-card-arrow">↗</div>
                  }
                </div>
              </article>
            ))}
            {/* Empty slot placeholder — invites future apps */}
            <article className="vc-card vc-card-empty">
              <div className="vc-empty-plus">+</div>
              <div className="vc-empty-text">{lang === 'ja' ? '次の実験' : 'Next experiment'}</div>
              <div className="vc-empty-sub">{lang === 'ja' ? '空きスロット' : 'reserved slot'}</div>
            </article>
          </div>
        </section>

        {/* Methods / about */}
        <section className="vc-section">
          <div className="vc-section-head">
            <div>
              <div className="vc-section-num">§ 02</div>
              <h2 className="vc-section-title">{lang === 'ja' ? '開発手順' : 'Methods'}</h2>
            </div>
          </div>
          <ol className="vc-method-list">
            <li>
              <span className="vc-method-num">01</span>
              <div>
                <h4>{lang === 'ja' ? '観察する' : 'Observe'}</h4>
                <p>{lang === 'ja' ? '日々の不便や欲しい道具を、手帳に書き留める。' : 'Note daily friction or wished-for tools in a notebook.'}</p>
              </div>
            </li>
            <li>
              <span className="vc-method-num">02</span>
              <div>
                <h4>{lang === 'ja' ? '最小で作る' : 'Build the smallest version'}</h4>
                <p>{lang === 'ja' ? '一週間で動く形まで持っていく。動かなければ捨てる。' : 'Aim for a working prototype in one week. Drop it if it does not move.'}</p>
              </div>
            </li>
            <li>
              <span className="vc-method-num">03</span>
              <div>
                <h4>{lang === 'ja' ? '日常に置く' : 'Live with it'}</h4>
                <p>{lang === 'ja' ? '自分の暮らしで使い続けて、無理のない形を探す。' : 'Use it daily. Iterate toward a form that doesn’t demand effort.'}</p>
              </div>
            </li>
            <li>
              <span className="vc-method-num">04</span>
              <div>
                <h4>{lang === 'ja' ? '公開する' : 'Ship'}</h4>
                <p>{lang === 'ja' ? '誰かの暮らしにも置けそうな手応えが出てきたら、世に出す。' : 'Once it feels like it could live in someone else’s day, release it.'}</p>
              </div>
            </li>
          </ol>
        </section>

        <footer className="vc-foot">
          <div className="vc-foot-stamp">
            <div className="vc-foot-stamp-line">SIGNED</div>
            <div className="vc-foot-stamp-name">Tani7Labo</div>
            <div className="vc-foot-stamp-line">2026.05.25</div>
          </div>
          <div className="vc-foot-links">
            <a href="https://x.com/Tani7Labo" target="_blank" rel="noopener">x.com/Tani7Labo</a>
            <a href="mailto:tani7labo@gmail.com">tani7labo@gmail.com</a>
          </div>
          <div className="vc-foot-page">— p. 001 / ∞ —</div>
        </footer>
      </div>

      {open && <AppModal app={open} lang={lang} onClose={() => setOpen(null)} variant="c" />}

      <style>{vcCss}</style>
    </div>
  );
};

const vcCss = `
.vc-root {
  --cream: #f0e9d8;
  --paper: #fbf6e9;
  --paper-soft: #f5efde;
  --ink: #1f1a13;
  --ink-soft: #4a4135;
  --muted: #847a6a;
  --line: rgba(50,40,30,0.18);
  --line-soft: rgba(50,40,30,0.08);
  --red: #b94d3d;
  --lime: oklch(0.82 0.16 122);
  --lime-deep: oklch(0.55 0.16 125);
  background: var(--cream);
  color: var(--ink);
  font-family: "Inter Tight", "Noto Sans JP", system-ui, sans-serif;
  font-feature-settings: "palt" 1;
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 0;
  box-sizing: border-box;
}
.vc-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(50,40,30,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(50,40,30,0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
}
.vc-root::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(60,40,20,0.04) 1px, transparent 1px);
  background-size: 3px 3px;
  pointer-events: none;
}
.vc-page {
  position: relative;
  z-index: 1;
  padding: 40px 56px 72px;
}

.vc-nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 32px;
}
.vc-stamp {
  display: inline-block;
  border: 2px solid var(--red);
  border-radius: 4px;
  padding: 10px 20px;
  transform: rotate(-1.5deg);
  background: var(--paper);
  box-shadow: 1px 1px 0 rgba(0,0,0,0.04);
}
.vc-stamp-inner { color: var(--red); text-align: left; font-family: "JetBrains Mono", monospace; letter-spacing: 0.08em; }
.vc-stamp-l1 { font-family: "Newsreader", serif; font-style: italic; font-size: 30px; line-height: 1; font-weight: 500; letter-spacing: -0.01em; }
.vc-stamp-l2 { font-size: 11px; font-weight: 600; text-transform: uppercase; margin-top: 4px; letter-spacing: 0.16em; }
.vc-stamp-l3 { font-size: 9.5px; color: var(--red); opacity: 0.7; margin-top: 6px; letter-spacing: 0.14em; }
.vc-nav-right { display: flex; align-items: center; gap: 28px; }
.vc-nav-meta { display: flex; gap: 32px; }
.vc-nav-meta > div { display: flex; flex-direction: column; gap: 4px; }
.vc-key { font-family: "JetBrains Mono", monospace; font-size: 9.5px; letter-spacing: 0.16em; color: var(--muted); }
.vc-val { font-family: "JetBrains Mono", monospace; font-size: 12px; color: var(--ink); }
.vc-lang-btn {
  background: var(--paper);
  border: 1px solid var(--line);
  font-family: "Inter Tight", "Noto Sans JP", sans-serif;
  font-size: 13px;
  padding: 8px 14px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--muted);
  border-radius: 2px;
}
.vc-lang-btn span.is-active { color: var(--ink); font-weight: 600; }
.vc-sep { color: var(--line); }

/* HERO */
.vc-hero { padding: 56px 0 80px; position: relative; }
.vc-entry-label {
  display: flex;
  gap: 24px;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--muted);
  margin-bottom: 32px;
  padding-bottom: 14px;
  border-bottom: 1px dashed var(--line);
}
.vc-entry-num { color: var(--red); font-weight: 600; }
.vc-headline {
  font-family: "Newsreader", "Noto Serif JP", serif;
  font-weight: 400;
  font-size: 112px;
  line-height: 1.0;
  letter-spacing: -0.025em;
  margin: 0 0 56px;
}
.vc-h-block { display: block; }
.vc-h-mark { position: relative; font-style: italic; padding: 0 4px; }
.vc-h-mark::before {
  content: "";
  position: absolute;
  left: -8px; right: -8px; bottom: 8px;
  height: 22px;
  background: var(--lime);
  z-index: -1;
  opacity: 0.85;
  transform: skew(-3deg, -1deg);
  border-radius: 4px;
}
.vc-hero-body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: start; }
.vc-hero-bio {
  font-size: 17px;
  line-height: 1.85;
  color: var(--ink-soft);
  margin: 0;
}
.vc-sidecard {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 18px 20px 20px;
  border-radius: 2px;
  position: relative;
  box-shadow: 2px 2px 0 var(--line-soft);
}
.vc-sidecard::before {
  content: "";
  position: absolute;
  top: -10px; left: 24px; width: 60px; height: 18px;
  background: rgba(220, 200, 140, 0.65);
  transform: rotate(-2deg);
  border-radius: 1px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.vc-sidecard-key {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--muted);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--line-soft);
}
.vc-sidecard-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; font-size: 14px; color: var(--ink-soft); }
.vc-sidecard-list li { display: flex; gap: 10px; align-items: flex-start; }
.vc-bullet { color: var(--red); font-family: "JetBrains Mono", monospace; flex: 0 0 auto; }

/* Section heads */
.vc-section { padding: 56px 0; border-top: 1px solid var(--line); }
.vc-section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 28px;
  margin-bottom: 36px;
  flex-wrap: wrap;
}
.vc-section-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--red);
  margin-bottom: 10px;
}
.vc-section-title {
  font-family: "Newsreader", "Noto Serif JP", serif;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1;
}
.vc-section-count {
  font-family: "JetBrains Mono", monospace;
  font-size: 16px;
  color: var(--muted);
  margin-left: 12px;
  letter-spacing: 0;
}
.vc-filters { display: flex; gap: 4px; flex-wrap: wrap; }
.vc-filter {
  background: transparent;
  border: 1px solid transparent;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  padding: 6px 12px;
  color: var(--ink-soft);
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 2px;
  font-family: "JetBrains Mono", monospace;
}
.vc-filter:hover { background: var(--paper); }
.vc-filter.is-active { background: var(--ink); color: var(--paper); }
.vc-filter.is-active .vc-check { color: var(--lime); }
.vc-check { font-size: 11px; color: var(--muted); }

/* Cards */
.vc-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.vc-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 20px 20px 18px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 0 var(--line-soft);
  transition: transform .18s, box-shadow .18s;
}
.vc-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--line-soft), 0 8px 24px rgba(40,30,20,0.06);
}
.vc-tape {
  position: absolute;
  top: -8px; left: 28px;
  width: 68px; height: 18px;
  background: rgba(220, 200, 140, 0.55);
  transform: rotate(-3deg);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  z-index: 1;
}
.vc-card:nth-child(3n) .vc-tape { background: rgba(180, 200, 160, 0.55); transform: rotate(2deg); left: auto; right: 22px; }
.vc-card:nth-child(3n+1) .vc-tape { background: rgba(200, 170, 140, 0.55); transform: rotate(-1deg); left: 38px; }

.vc-card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  margin-bottom: 14px;
}
.vc-card-id { color: var(--red); font-weight: 600; letter-spacing: 0.08em; }
.vc-badge {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 2px;
  letter-spacing: 0.08em;
  border: 1px solid currentColor;
  text-transform: uppercase;
}
.vc-badge-live { color: var(--lime-deep); background: oklch(0.82 0.16 122 / 0.18); border-color: oklch(0.82 0.16 122 / 0.55); }
.vc-badge-beta { color: #8b5a14; background: rgba(217, 154, 44, 0.15); border-color: rgba(217, 154, 44, 0.55); }
.vc-badge-soon { color: var(--muted); background: var(--paper-soft); }

.vc-card-thumb {
  height: 120px;
  background: var(--paper-soft);
  position: relative;
  display: grid;
  place-items: center;
  border: 1px solid var(--line-soft);
  margin-bottom: 18px;
  overflow: hidden;
}
.vc-card-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.vc-card-mark {
  font-family: "Newsreader", serif;
  font-style: italic;
  font-size: 56px;
  color: var(--ink);
  opacity: 0.2;
  letter-spacing: -0.05em;
  line-height: 1;
}
.vc-card-cat-tag {
  position: absolute;
  bottom: 6px;
  right: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  color: var(--muted);
  background: var(--paper);
  padding: 1px 6px;
  border: 1px solid var(--line-soft);
}

.vc-card-name {
  font-family: "Newsreader", "Noto Serif JP", serif;
  font-weight: 500;
  font-size: 24px;
  margin: 0 0 6px;
  line-height: 1.2;
}
.vc-underline {
  background-image: linear-gradient(transparent 70%, oklch(0.82 0.16 122 / 0.5) 70%);
  background-size: 100% 100%;
  padding: 0 2px;
}
.vc-card-tag {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 0 18px;
  flex: 1;
}
.vc-card-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px dashed var(--line);
}
.vc-card-stack {
  font-family: "JetBrains Mono", monospace;
  font-size: 10.5px;
  color: var(--muted);
  letter-spacing: 0.04em;
}
.vc-stack-sep { margin: 0 5px; opacity: 0.6; }
.vc-card-arrow { font-size: 16px; color: var(--ink); }
.vc-card-play {
  font-family: "JetBrains Mono", monospace;
  font-size: 10.5px;
  color: var(--lime-deep);
  text-decoration: none;
  letter-spacing: 0.06em;
  border-bottom: 1px solid oklch(0.55 0.16 125 / 0.4);
  padding-bottom: 1px;
}
.vc-card-play:hover { border-bottom-color: var(--lime-deep); }

/* Empty card */
.vc-card-empty {
  display: grid;
  place-items: center;
  text-align: center;
  background: transparent;
  border: 1.5px dashed var(--line);
  box-shadow: none;
  cursor: default;
  padding: 32px;
  min-height: 320px;
}
.vc-card-empty:hover { transform: none; box-shadow: none; }
.vc-empty-plus { font-size: 40px; color: var(--muted); font-weight: 300; line-height: 1; margin-bottom: 12px; }
.vc-empty-text { font-family: "Newsreader", "Noto Serif JP", serif; font-size: 18px; color: var(--ink-soft); }
.vc-empty-sub { font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.1em; margin-top: 4px; text-transform: uppercase; }

/* Methods */
.vc-method-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px 56px;
}
.vc-method-list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: start;
  padding-bottom: 20px;
  border-bottom: 1px dashed var(--line);
}
.vc-method-num {
  font-family: "Newsreader", serif;
  font-style: italic;
  font-size: 38px;
  color: var(--red);
  line-height: 1;
  font-weight: 500;
}
.vc-method-list h4 {
  font-family: "Newsreader", "Noto Serif JP", serif;
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 8px;
}
.vc-method-list p {
  font-size: 14px;
  line-height: 1.65;
  color: var(--ink-soft);
  margin: 0;
}

/* Footer */
.vc-foot {
  margin-top: 56px;
  padding-top: 36px;
  border-top: 2px solid var(--ink);
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 36px;
  align-items: center;
}
.vc-foot-stamp {
  border: 1.5px solid var(--ink);
  padding: 8px 16px;
  text-align: center;
  font-family: "JetBrains Mono", monospace;
  transform: rotate(-1deg);
  background: var(--paper);
}
.vc-foot-stamp-line { font-size: 9px; letter-spacing: 0.2em; color: var(--muted); }
.vc-foot-stamp-name { font-family: "Newsreader", serif; font-style: italic; font-size: 18px; color: var(--ink); margin: 2px 0 4px; }
.vc-foot-links { display: flex; gap: 28px; justify-content: center; }
.vc-foot-links a { font-family: "JetBrains Mono", monospace; font-size: 12px; color: var(--ink); text-decoration: underline; text-decoration-color: var(--line); text-underline-offset: 4px; }
.vc-foot-links a:hover { text-decoration-color: var(--lime-deep); color: var(--lime-deep); }
.vc-foot-page {
  font-family: "Newsreader", serif;
  font-style: italic;
  color: var(--muted);
  font-size: 14px;
}
`;

Object.assign(window, { VariationC });
