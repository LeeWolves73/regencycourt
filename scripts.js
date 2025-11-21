async function init() {
  const res = await fetch('translations.json');
  const data = await res.json();
  window._translations = data;
  const langSelect = document.getElementById('langSelect');
  const order = ['en','es','fr','de','bn','bg','cs','gu','pl','pt','pa','ro','so','tr','ur','uk'];
  const flagMap = {en:'🇬🇧',es:'🇪🇸',fr:'🇫🇷',de:'🇩🇪',bn:'🇧🇩',bg:'🇧🇬',cs:'🇨🇿',gu:'🇮🇳',pl:'🇵🇱',pt:'🇵🇹',pa:'🇵🇰',ro:'🇷🇴',so:'🇸🇴',tr:'🇹🇷',ur:'🇵🇰',uk:'🇺🇦'};
  order.forEach(code => {
    if(!data[code]) return;
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = (flagMap[code]||'') + ' ' + (data[code].name||code);
    langSelect.appendChild(opt);
  });
  const saved = localStorage.getItem('regency_lang') || 'en';
  langSelect.value = saved;
  applyLanguage(saved);
  langSelect.addEventListener('change', (e)=>{ const c=e.target.value; localStorage.setItem('regency_lang',c); applyLanguage(c); });
  document.getElementById('viewRulesBtn').addEventListener('click', ()=>{
    const panel=document.getElementById('rulesPanel'); const btn=document.getElementById('viewRulesBtn');
    const hidden = panel.hasAttribute('hidden');
    if(hidden){ panel.removeAttribute('hidden'); btn.textContent = window._current.view_rules + ' ▴'; btn.setAttribute('aria-expanded','true'); }
    else{ panel.setAttribute('hidden',''); btn.textContent = window._current.view_rules + ' ▾'; btn.setAttribute('aria-expanded','false'); }
  });
  document.getElementById('reportBtn').addEventListener('click', ()=>{ window.location.href='mailto:info@block-buddy.co.uk'; });
  document.getElementById('complaintBtn').addEventListener('click', ()=>{ const subj=encodeURIComponent(window._current.complaint_subject||'Complaint - Regency Court'); window.location.href='mailto:info@block-buddy.co.uk?subject='+subj; });
}
function applyLanguage(code){
  const t = window._translations[code] || window._translations['en'];
  window._current = t;
  document.getElementById('langLabel').textContent = t.select_language;
  document.getElementById('viewRulesBtn').textContent = t.view_rules + ' ▾';
  document.getElementById('reportBtn').textContent = t.report_issue + ' ▾';
  document.getElementById('complaintBtn').textContent = t.make_complaint + ' ▾';
  // Load rules from rules_en.txt (for now) and display; we can add translated rule files later
  fetch('rules_en.txt').then(r=>r.text()).then(txt=>{ document.getElementById('rulesText').textContent = txt; });
  document.getElementById('blockTitle').textContent = 'Regency Court';
  document.getElementById('subtitle').textContent = 'Scan the QR code or use the controls below';
  document.getElementById('note').textContent = 'This page includes pre-translated UI text; full human-reviewed translations can be added on request.';
}
window.addEventListener('DOMContentLoaded', init);