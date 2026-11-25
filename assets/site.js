// aisuni 全站共用:導覽列、頁尾、logo 太陽光芒、進場動畫、複製按鈕
(function(){
const root=document.body.dataset.root||'';
const here=document.body.dataset.page||'';
const LOGO='AISUN<span class="bang-i"><span class="bar"></span><span class="sunny"><span class="rays"></span><span class="core"></span></span></span>';
const LINKS=[['learn','學習路線'],['guide','AI 基本功'],['tips','每天一招'],['prompts','Prompt 卡'],['tools','工具地圖'],['cases','真實案例'],['news','AI 新聞']];
window.AISUN={root,LOGO,
 esc:s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'),
 copy(btn,text){const done=()=>{const o=btn.textContent;btn.classList.add('done');btn.textContent='✓ 已複製';setTimeout(()=>{btn.classList.remove('done');btn.textContent=o},1500)};
  if(navigator.clipboard)navigator.clipboard.writeText(text).then(done,()=>fallback(text,done));else fallback(text,done)},
 rays(scope){(scope||document).querySelectorAll('.rays:empty').forEach(r=>{for(let i=0;i<8;i++){const s=document.createElement('i');s.style.transform=`rotate(${i*45}deg)`;r.appendChild(s)}})},
 rise(scope){const R=matchMedia('(prefers-reduced-motion:reduce)').matches;const els=[...(scope||document).querySelectorAll('.rise:not(.in)')];
  if(R||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=els.indexOf(e.target);setTimeout(()=>e.target.classList.add('in'),(i%4)*80);io.unobserve(e.target)}}),{threshold:.08});
  els.forEach(e=>io.observe(e))}
};
function fallback(text,done){const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();try{document.execCommand('copy');done()}catch(e){}t.remove()}

const nav=document.createElement('header');nav.className='nav';
nav.innerHTML=`<a class="logo" href="${root||'./'}" aria-label="AISUN! 首頁">${LOGO}</a>
<button class="menu" aria-expanded="false">選單</button>
${LINKS.map(([k,t])=>`<a class="pill${here===k?' on':''}" href="${root}${k}/">${t}</a>`).join('')}
<a class="pill cta" href="${root}learn/#s0">第一次用 AI？</a>`;
document.body.prepend(nav);
const mb=nav.querySelector('.menu');mb.onclick=()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'收起':'選單'};

const ft=document.createElement('footer');ft.className='foot';
ft.innerHTML=`<div class="in"><span class="logo" aria-hidden="true">${LOGO}</span>
<nav>${LINKS.map(([k,t])=>`<a href="${root}${k}/">${t}</a>`).join('')}</nav>
<small>AI 不難,看我做一次你就會。每一個案例都是真的做過的專案。AI 新聞每天 09:00(香港時間)自動更新。</small></div>`;
document.body.appendChild(ft);

AISUN.rays();AISUN.rise();
document.addEventListener('click',e=>{const b=e.target.closest('[data-copy]');if(b){const src=document.getElementById(b.dataset.copy);AISUN.copy(b,src?src.textContent:b.dataset.copy)}});
})();
