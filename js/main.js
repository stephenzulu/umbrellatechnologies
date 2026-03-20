/* ═══════════════════════════════════════
   UMBRELLA TECH - MAIN JS
   ═══════════════════════════════════════ */
(function(){
    // Scroll: progress bar + navbar + back-to-top
    window.addEventListener('scroll',function(){
        var s=window.scrollY>40;
        var nv=document.querySelector('.nv');
        var bt=document.getElementById('btt');
        var sp=document.getElementById('sp');
        if(nv)nv.classList.toggle('ns',s);
        if(bt)bt.classList.toggle('show',s);
        if(sp){var h=document.documentElement.scrollHeight-window.innerHeight;sp.style.width=(h>0?(window.scrollY/h*100):0)+'%';}
    });

    // Theme toggle
    document.addEventListener('DOMContentLoaded',function(){
        var tg=document.getElementById('tg');
        if(!tg)return;
        var th='light';
        try{th=localStorage.getItem('ut-theme')||'light'}catch(e){}
        if(th==='dark')document.documentElement.setAttribute('data-theme','dark');
        tg.addEventListener('click',function(){
            var d=document.documentElement.getAttribute('data-theme')==='dark';
            if(d){document.documentElement.removeAttribute('data-theme');try{localStorage.setItem('ut-theme','light')}catch(e){}}
            else{document.documentElement.setAttribute('data-theme','dark');try{localStorage.setItem('ut-theme','dark')}catch(e){}}
        });
    });

    // Smooth scroll
    document.addEventListener('DOMContentLoaded',function(){
        document.querySelectorAll('a[href^="#"]').forEach(function(a){
            a.addEventListener('click',function(e){
                e.preventDefault();
                var t=document.querySelector(this.getAttribute('href'));
                if(t)t.scrollIntoView({behavior:'smooth',block:'start'});
                var nc=document.querySelector('.navbar-collapse');
                if(nc&&nc.classList.contains('show'))try{bootstrap.Collapse.getInstance(nc).hide()}catch(x){}
            });
        });
    });

    // Form handler - sends to WhatsApp + optional Web3Forms email
    document.addEventListener('DOMContentLoaded',function(){
        var W3K='YOUR_ACCESS_KEY';
        var WA_NUMBER='260973297566'; // WhatsApp number without +
        var form=document.getElementById('cf');
        if(!form)return;
        form.addEventListener('submit',function(e){
            e.preventDefault();
            var btn=this.querySelector('.btn-send'),orig=btn.innerHTML;
            btn.innerHTML='<i class="fas fa-circle-notch fa-spin me-2"></i>Sending...';btn.disabled=true;

            var fd={
                name:form.querySelector('[name="name"]').value,
                email:form.querySelector('[name="email"]').value,
                phone:form.querySelector('[name="phone"]').value||'N/A',
                service:form.querySelector('[name="service"]').value||'Not specified',
                message:form.querySelector('[name="message"]').value
            };

            // Build WhatsApp message
            var waMsg='*New Website Inquiry*%0A%0A'
                +'*Name:* '+encodeURIComponent(fd.name)+'%0A'
                +'*Email:* '+encodeURIComponent(fd.email)+'%0A'
                +'*Phone:* '+encodeURIComponent(fd.phone)+'%0A'
                +'*Service:* '+encodeURIComponent(fd.service)+'%0A'
                +'*Message:* '+encodeURIComponent(fd.message);

            // Also send via Web3Forms if configured (runs in background)
            if(W3K!=='YOUR_ACCESS_KEY'){
                fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({access_key:W3K,subject:'Website Inquiry: '+fd.service,from_name:fd.name,email:fd.email,phone:fd.phone,service:fd.service,message:fd.message})}).catch(function(){});
            }

            // Open WhatsApp with the message
            setTimeout(function(){
                btn.innerHTML='<i class="fab fa-whatsapp me-2"></i>Opening WhatsApp...';
                form.reset();
                window.open('https://wa.me/'+WA_NUMBER+'?text='+waMsg,'_blank');
                setTimeout(function(){btn.innerHTML=orig;btn.disabled=false},2000);
            },800);
        });
    });
})();

// FAQ toggle (global)
function toggleFaq(el){var a=el.nextElementSibling;var o=el.classList.contains('open');document.querySelectorAll('.faq-q').forEach(function(q){q.classList.remove('open')});document.querySelectorAll('.faq-a').forEach(function(x){x.classList.remove('open')});if(!o){el.classList.add('open');a.classList.add('open')}}