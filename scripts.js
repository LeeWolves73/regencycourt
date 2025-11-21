const reportEmail='info@block-buddy.co.uk';
const complaintEmail='info@block-buddy.co.uk';
const complaintSubject='Complaint - Block 1 Regency Court';
const viewBtn=document.getElementById('viewRulesBtn');
const rulesPanel=document.getElementById('rulesPanel');
const reportBtn=document.getElementById('reportBtn');
const complaintBtn=document.getElementById('complaintBtn');

viewBtn.addEventListener('click', ()=>{
  const hidden = rulesPanel.hasAttribute('hidden');
  if(hidden){ rulesPanel.removeAttribute('hidden'); viewBtn.textContent='View Site Rules ▴'; viewBtn.setAttribute('aria-expanded','true'); }
  else{ rulesPanel.setAttribute('hidden',''); viewBtn.textContent='View Site Rules ▾'; viewBtn.setAttribute('aria-expanded','false'); }
});

reportBtn.addEventListener('click', ()=>{ window.location.href='mailto:'+encodeURIComponent(reportEmail); });
complaintBtn.addEventListener('click', ()=>{ window.location.href='mailto:'+encodeURIComponent(complaintEmail)+'?subject='+encodeURIComponent(complaintSubject); });
