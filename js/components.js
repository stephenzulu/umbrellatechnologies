/* ═══════════════════════════════════════
   UMBRELLA TECH - SHARED COMPONENTS
   ═══════════════════════════════════════ */
function getPage(){var p=window.location.pathname;var f=p.substring(p.lastIndexOf('/')+1)||'index.html';return f.replace('.html','')|| 'index';}
function isAct(pg){return getPage()===pg?'active':'';}

function injectFavicon(){
    var h=document.head;
    [{rel:'icon',type:'image/x-icon',href:'img/ut-favicon.ico'},{rel:'icon',type:'image/png',sizes:'32x32',href:'img/ut-favicon-32.png'},{rel:'apple-touch-icon',sizes:'180x180',href:'img/ut-apple-touch-icon.png'}].forEach(function(f){
        var l=document.createElement('link');l.rel=f.rel;if(f.type)l.type=f.type;if(f.sizes)l.sizes=f.sizes;l.href=f.href;h.appendChild(l);
    });
}

function injectNav(){
    var nav=document.createElement('nav');
    nav.className='navbar navbar-expand-lg nv fixed-top';
    nav.innerHTML='<div class="container"><a class="nv-b" href="index.html"><i class="fas fa-umbrella"></i>UMBRELLA<span>TECHNOLOGIES</span></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nm"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-end" id="nm"><ul class="navbar-nav align-items-lg-center gap-lg-1"><li class="nav-item"><a class="nav-link '+isAct('index')+'" href="index.html">Home</a></li><li class="nav-item"><a class="nav-link '+isAct('about')+'" href="about.html">About</a></li><li class="nav-item"><a class="nav-link '+isAct('services')+'" href="services.html">Services</a></li><li class="nav-item"><a class="nav-link '+isAct('contact')+'" href="contact.html">Contact</a></li><li class="nav-item ms-lg-2"><a class="btn btn-a" href="contact.html">Contact Us</a></li><li class="nav-item ms-lg-2"><button class="tg" id="tg"><i class="fas fa-moon"></i><i class="fas fa-sun"></i></button></li></ul></div></div>';
    document.body.insertBefore(nav,document.body.firstChild);
}

function injectFooter(){
    var f=document.createElement('footer');
    f.innerHTML='<div class="f-yline"></div><div class="container"><div class="row g-3"><div class="col-lg-4"><div class="f-brand mb-2"><i class="fas fa-umbrella me-1"></i> UMBRELLA TECHNOLOGIES</div><p style="font-size:.7rem;color:#333;line-height:1.7;max-width:240px">Customized technology solutions. You dream it, we create it.</p><p style="font-size:.6rem;color:#2a2a2a;margin-top:.5rem;font-family:\'Space Mono\',monospace"></p></div><div class="col-6 col-lg-2"><h6 style="font-size:.6rem;text-transform:uppercase;letter-spacing:2px;color:#444;margin-bottom:.7rem;font-family:\'Space Mono\',monospace">Pages</h6><div class="f-links d-flex flex-column gap-2"><a href="index.html">Home</a><a href="about.html">About</a><a href="services.html">Services</a><a href="contact.html">Contact</a></div></div><div class="col-6 col-lg-3"><h6 style="font-size:.6rem;text-transform:uppercase;letter-spacing:2px;color:#444;margin-bottom:.7rem;font-family:\'Space Mono\',monospace">Services</h6><div class="f-links d-flex flex-column gap-2"><a href="services.html">Software Dev</a><a href="services.html">ICT Consulting</a><a href="services.html">Logo Design</a><a href="services.html">Rebranding</a></div></div><div class="col-lg-3"><h6 style="font-size:.6rem;text-transform:uppercase;letter-spacing:2px;color:#444;margin-bottom:.7rem;font-family:\'Space Mono\',monospace">Connect</h6><div class="f-social d-flex gap-2"><a href="https://facebook.com/UmbrellaTechnologieszambia" target="_blank" class="sf-fb"><i class="fab fa-facebook-f"></i></a><a href="https://wa.me/260960847099" target="_blank" class="sf-wa"><i class="fab fa-whatsapp"></i></a><a href="mailto:umbrellatechnologies21@gmail.com" class="sf-em"><i class="fas fa-envelope"></i></a></div></div></div><div class="f-bot text-center"><p>&copy; '+new Date().getFullYear()+' Umbrella Technologies. Ndola, Zambia.</p></div></div>';
    document.body.appendChild(f);
}

function injectUtils(){
    // WhatsApp float
    var wa=document.createElement('a');wa.href='https://wa.me/260973297566';wa.target='_blank';wa.className='waf';wa.title='WhatsApp';wa.innerHTML='<i class="fab fa-whatsapp"></i>';document.body.appendChild(wa);
    // Back to top
    var bt=document.createElement('button');bt.className='btt';bt.id='btt';bt.innerHTML='<i class="fas fa-arrow-up"></i>';bt.onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};document.body.appendChild(bt);
    // Scroll progress
    var sp=document.createElement('div');sp.id='sp';document.body.insertBefore(sp,document.body.firstChild);
}

document.addEventListener('DOMContentLoaded',function(){
    injectFavicon();
    injectNav();
    injectFooter();
    injectUtils();
});
