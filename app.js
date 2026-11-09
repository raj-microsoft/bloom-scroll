'use strict';
const film=document.querySelector('#film'),journey=document.querySelector('#journey'),scene=document.querySelector('#scene'),headline=document.querySelector('#headline'),line=document.querySelector('#line'),progress=document.querySelector('#progress'),motion=document.querySelector('#motion'),still=document.querySelector('#still');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const chapters=[['Good things<br>take growing.','A little bulb. A little patience.<br>A whole lot of spring.'],['Quiet work.<br>Deep roots.','Before anything shows,<br>something is already happening.'],['A little more<br>light, every day.','Then, one day, a sign.<br>Something green. Something new.'],['Hello,<br>spring.','Worth the wait.<br>Every single petal.']];
let staticMode=reduced.matches,chapter=-1,desired=0,queued=false,ready=false;
function copy(i){if(chapter===i)return;chapter=i;headline.innerHTML=chapters[i][0];line.innerHTML=chapters[i][1];document.querySelectorAll('[data-stage]').forEach((b,j)=>b.setAttribute('aria-pressed',String(j===i)));}
function seek(){if(!ready||staticMode||film.seeking)return;const t=desired*Math.max(0,film.duration-.035);if(Math.abs(film.currentTime-t)>.014)film.currentTime=t;}
film.addEventListener('seeked',seek);film.addEventListener('loadedmetadata',()=>{ready=true;seek()});
// A local Blob also makes seeking reliable on static hosts without byte-range responses.
fetch('assets/bloom.mp4').then(r=>{if(!r.ok)throw new Error('Video download failed');return r.blob()}).then(blob=>{film.src=URL.createObjectURL(blob);film.load()}).catch(()=>{document.querySelector('#media-status').textContent='Using the direct video. Still view is also available.'});
film.addEventListener('error',()=>{ready=false;staticMode=true;applyMode();document.querySelector('#media-status').textContent='Video unavailable. Explore the still chapters instead.'});
function update(){queued=false;if(staticMode)return;const max=journey.offsetHeight-innerHeight;desired=Math.max(0,Math.min(1,-journey.getBoundingClientRect().top/max));progress.style.width=`${desired*100}%`;copy(Math.min(3,Math.floor(desired*4)));scene.classList.add('light');seek();}
function schedule(){if(!queued){queued=true;requestAnimationFrame(update)}}
function applyMode(){document.body.classList.toggle('is-still',staticMode);scene.style.color='';motion.textContent=staticMode?'Scroll animation':'Still view';motion.setAttribute('aria-pressed',String(staticMode));document.querySelector('#hint').textContent=staticMode?'Take your time. Choose a chapter.':'Scroll slowly. Let it grow.';if(staticMode){still.src='assets/end.png';copy(3);scene.classList.add('light');progress.style.width='100%'}else{chapter=-1;update()}}
motion.addEventListener('click',()=>{staticMode=!staticMode;applyMode()});reduced.addEventListener('change',e=>{staticMode=e.matches;applyMode()});
document.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.stage);if(staticMode){still.src=`assets/stage-${i}.webp`;still.alt=['AI-generated copper tulip bulb in dark soil','AI-generated roots emerging from the bulb','AI-generated tulip stem and leaves','AI-generated tulip in full bloom'][i];copy(i);scene.classList.add('light');scene.style.color='';progress.style.width=`${i/3*100}%`;}else{const p=[0,.34,.67,1][i];window.scrollTo({top:journey.offsetTop+p*(journey.offsetHeight-innerHeight),behavior:reduced.matches?'instant':'smooth'})}}));
window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);applyMode();
const preview=document.querySelector('#preview'),content=document.querySelector('#preview-content');
function togglePreview(open){content.hidden=!open;preview.setAttribute('aria-expanded',String(open));if(!open)preview.focus()}
preview.addEventListener('click',()=>togglePreview(content.hidden));document.querySelector('#close-preview').addEventListener('click',()=>togglePreview(false));
