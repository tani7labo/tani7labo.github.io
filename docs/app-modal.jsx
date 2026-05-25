// Shared app detail modal — used by all three variations.
// Style adapts to variant via the `variant` prop ('a' | 'b' | 'c').

const AppModal = ({ app, lang, onClose, variant = 'a' }) => {
  const t = T7_BIO[lang];

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={'tm-overlay tm-v-' + variant} onClick={onClose}>
      <div className="tm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="tm-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        </button>

        <header className="tm-head">
          <div className="tm-head-meta">
            <span className="tm-id">EXP·{app.no}</span>
            <span className="tm-dot">·</span>
            <span>{app.category[lang]}</span>
            <span className="tm-dot">·</span>
            <span>{app.year}</span>
          </div>
          <h2 className="tm-name">
            {app.name[lang]}
            {lang === 'ja' && <span className="tm-name-en">{app.name.en}</span>}
          </h2>
          <p className="tm-tagline">{app.tagline[lang]}</p>
        </header>

        <div className="tm-hero">
          <div className="tm-hero-bg" />
          <div className="tm-hero-grid" />
          <div className="tm-hero-mark">{app.name.en.slice(0, 1)}</div>
          <span className={'tm-status tm-status-' + app.statusKey}>
            <span className="tm-status-dot" />
            {app.status[lang]}
          </span>
        </div>

        <div className="tm-body">
          <p className="tm-desc">{app.description[lang]}</p>

          <div className="tm-spec-grid">
            <div className="tm-spec">
              <div className="tm-spec-key">{t.stack}</div>
              <div className="tm-spec-val">
                {app.stack.map((s) => <span key={s} className="tm-chip">{s}</span>)}
              </div>
            </div>
            <div className="tm-spec">
              <div className="tm-spec-key">{t.platform}</div>
              <div className="tm-spec-val">
                {app.platforms.map((p) => <span key={p} className="tm-chip tm-chip-line">{p}</span>)}
              </div>
            </div>
            <div className="tm-spec">
              <div className="tm-spec-key">{t.release}</div>
              <div className="tm-spec-val tm-spec-text">{app.year}</div>
            </div>
            <div className="tm-spec">
              <div className="tm-spec-key">{t.status}</div>
              <div className="tm-spec-val tm-spec-text">{app.status[lang]}</div>
            </div>
          </div>

          <div className="tm-actions">
            <a href={app.url} className="tm-cta-primary">
              {t.cta_visit}
              <span>↗</span>
            </a>
            <button className="tm-cta-secondary" onClick={onClose}>{t.cta_close}</button>
          </div>
        </div>
      </div>
      <style>{modalCss}</style>
    </div>
  );
};

const modalCss = `
.tm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(30, 24, 18, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: grid;
  place-items: center;
  padding: 40px 20px;
  animation: tm-fade 0.2s ease-out;
  font-family: "Inter Tight", "Noto Sans JP", system-ui, sans-serif;
  font-feature-settings: "palt" 1;
}
@keyframes tm-fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes tm-rise { from { opacity: 0; transform: translateY(20px) scale(0.98) } to { opacity: 1; transform: none } }

.tm-modal {
  background: #faf6ec;
  color: #1c1815;
  max-width: 640px;
  width: 100%;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  border-radius: 4px;
  position: relative;
  animation: tm-rise 0.28s cubic-bezier(.2,.7,.3,1);
  border: 1px solid #d9d2c1;
  box-shadow: 0 30px 80px rgba(20,15,10,0.3);
}
.tm-modal::-webkit-scrollbar { width: 6px; }
.tm-modal::-webkit-scrollbar-thumb { background: #d9d2c1; border-radius: 3px; }

.tm-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #d9d2c1;
  cursor: pointer;
  display: grid;
  place-items: center;
  color: #1c1815;
  transition: background .15s, color .15s;
  z-index: 2;
}
.tm-close:hover { background: #1c1815; color: #faf6ec; }

.tm-head { padding: 36px 40px 28px; border-bottom: 1px dashed #d9d2c1; }
.tm-head-meta {
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #6b6357;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.tm-id { color: oklch(0.55 0.16 125); font-weight: 600; }
.tm-dot { color: #d9d2c1; }

.tm-name {
  font-family: "Newsreader", "Noto Serif JP", serif;
  font-weight: 500;
  font-size: 44px;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0 0 12px;
  display: flex;
  align-items: baseline;
  gap: 14px;
  flex-wrap: wrap;
}
.tm-name-en {
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  letter-spacing: 0.06em;
  color: #6b6357;
  font-weight: 400;
  text-transform: uppercase;
}
.tm-tagline {
  font-family: "Newsreader", "Noto Serif JP", serif;
  font-style: italic;
  font-size: 18px;
  line-height: 1.5;
  color: #3a3530;
  margin: 0;
  text-wrap: balance;
}

.tm-hero {
  height: 240px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ece4d2, #e8dfca);
  display: grid;
  place-items: center;
  margin: 0;
}
.tm-hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(circle at 30% 40%, oklch(0.82 0.16 122 / 0.25), transparent 50%),
    radial-gradient(circle at 75% 70%, oklch(0.78 0.08 60 / 0.2), transparent 50%);
}
.tm-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(to right, rgba(40,30,20,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(40,30,20,0.05) 1px, transparent 1px);
  background-size: 16px 16px;
}
.tm-hero-mark {
  position: relative;
  font-family: "Newsreader", serif;
  font-style: italic;
  font-size: 160px;
  color: #1c1815;
  opacity: 0.2;
  line-height: 1;
  z-index: 1;
}
.tm-status {
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(250,246,236,0.95);
  backdrop-filter: blur(4px);
  padding: 5px 12px 5px 10px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #1c1815;
  border: 1px solid #d9d2c1;
  z-index: 2;
}
.tm-status-dot { width: 7px; height: 7px; border-radius: 50%; background: #6b6357; }
.tm-status-live .tm-status-dot { background: oklch(0.82 0.16 122); box-shadow: 0 0 0 3px oklch(0.82 0.16 122 / 0.25); }
.tm-status-beta .tm-status-dot { background: #d99a2c; }
.tm-status-soon .tm-status-dot { background: #c4bfb3; }

.tm-body { padding: 32px 40px 36px; }
.tm-desc {
  font-size: 15.5px;
  line-height: 1.8;
  color: #3a3530;
  margin: 0 0 32px;
}

.tm-spec-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px 28px;
  padding: 24px 0;
  border-top: 1px solid #d9d2c1;
  border-bottom: 1px solid #d9d2c1;
  margin-bottom: 32px;
}
.tm-spec-key {
  font-family: "JetBrains Mono", monospace;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6b6357;
  margin-bottom: 10px;
}
.tm-spec-val { display: flex; flex-wrap: wrap; gap: 5px; }
.tm-spec-text { font-size: 14px; color: #1c1815; }
.tm-chip {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  padding: 4px 9px;
  background: #f0e9d8;
  color: #1c1815;
  border-radius: 3px;
}
.tm-chip-line { background: transparent; border: 1px solid #d9d2c1; color: #3a3530; }

.tm-actions { display: flex; gap: 10px; }
.tm-cta-primary {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #1c1815;
  color: #faf6ec;
  padding: 14px 22px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 3px;
  transition: background .15s;
}
.tm-cta-primary:hover { background: oklch(0.45 0.16 125); }
.tm-cta-secondary {
  background: transparent;
  border: 1px solid #d9d2c1;
  font: inherit;
  font-size: 14px;
  color: #1c1815;
  padding: 14px 22px;
  cursor: pointer;
  border-radius: 3px;
  transition: background .15s;
}
.tm-cta-secondary:hover { background: #f3ede1; }
`;

Object.assign(window, { AppModal });
