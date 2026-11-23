/* Hawk Trade — shared behaviour
   ------------------------------------------------------------------
   CONFIG: to receive leads straight to your inbox / sheet instead of
   WhatsApp, put the form endpoint below (Formspree, FormSubmit,
   Google Apps Script …). Leave it empty to keep the WhatsApp flow.
   ------------------------------------------------------------------ */
var LEAD_ENDPOINT = "";          /* (اختياري) رابط Formspree أو أي خدمة أخرى */
var LEAD_EMAIL    = "info@htstradegroup.com";   /* الإيميل اللي توصل عليه طلبات العملاء */
var WA  = "201551876540";
var TEL = "+201551876540";

(function () {
  "use strict";
  var d = document, html = d.documentElement;
  html.classList.add("js");

  /* ---------- i18n ---------- */
  var T = {
    nav_home:["الرئيسية","Home"],
    nav_prod:["المنتجات","Products"],
    nav_group:["المجموعة","Our group"],
    nav_contact:["تواصل","Contact"],
    nav_cta:["اترك بياناتك","Leave your details"],

    /* home */
    chip:["مصر · دبي · تركيا · الصين — العراق قريبًا","Egypt · Dubai · Turkey · China — Iraq soon"],
    h1a:["كل اللي تحتاجه تجارتك","Everything your business needs"],
    h1b:["بالجملة من المصدر لحد مخزنك في العراق","wholesale, from source to your warehouse in Iraq"],
    lead:["شريك توريد واحد للمستوردين والموزعين وتجار الجملة في العراق: نوفّر الأصناف اللي تطلبها من مصر ومن أسواق المجموعة، ونتولى الشحن والتخليص الجمركي بأنفسنا.","One sourcing partner for importers, distributors and wholesalers in Iraq: we supply the items you ask for from Egypt and our group's markets, and handle freight and customs clearance in-house."],
    hp1:["عرض سعر مكتوب","Written quotation"],
    hp2:["شحن وتخليص علينا","Freight & clearance on us"],
    hp3:["رد خلال يوم عمل","Reply within 1 business day"],
    cta_lead:["اترك بياناتك ونتواصل وياك","Leave your details — we'll call you"],
    cta_wa:["راسلنا على واتساب","Message us on WhatsApp"],
    cta_how:["شلون نشتغل؟","How we work"],
    card_h:["خلّينا نتواصل وياك","Let us call you"],
    card_p:["اسمك ورقمك بس، وفريقنا يرجع لك بعرض سعر خلال يوم عمل.","Just your name and number — we'll come back with a quote within one business day."],
    card_or:["أو","or"],

    t1b:["سنة","yrs"], t1:["خبرة لوجستية في مصر منذ 2004","logistics experience in Egypt since 2004"],
    t2b:["سنة","yrs"], t2:["عمل متواصل في دبي","operating in Dubai"],
    t3b:["دول","countries"], t3:["مصر · الإمارات · تركيا · الصين","Egypt · UAE · Turkey · China"],
    t4b:["العراق","Iraq"], t4:["فرعنا الجديد قريبًا","new branch coming soon"],

    why_k:["ليش إحنا","Why us"],
    why_h:["جهة وحدة، من المصدر لحد مخزنك","One partner, from source to your warehouse"],
    why_p:["بدل ما تتعامل مع مورّد وشركة شحن ومخلّص كل واحد لحاله، نرتّب لك كل شي.","Instead of juggling a supplier, a freight company and a customs broker, we arrange it all."],
    w1h:["حسب طلبك بالضبط","Built around your order"],
    w1:["تحدد الصنف والكمية والتعبئة، ونجهّز العرض على أساسها.","You set the item, quantity and packaging; we quote on that basis."],
    w2h:["الشحن والتخليص علينا","Freight & clearance handled"],
    w2:["مجموعتنا تدير الشحن والتخليص الجمركي بنفسها، بدون وسطاء.","Our group runs shipping and customs clearance in-house, with no middlemen."],
    w3h:["مستودعات للمجموعة","Group warehouses"],
    w3:["مستودعات في دبي والصين تدعم التخزين وتنسيق الشحنات.","Warehouses in Dubai and China support storage and shipment coordination."],
    w4h:["شراكة مستمرة","Long-term partnership"],
    w4:["نبني علاقة طويلة الأمد مع التاجر، مو صفقة لمرة وحدة.","We build lasting relationships with traders, not one-off deals."],

    p_k:["المنتجات","Products"],
    p_h:["فئات نوفّرها لتجار العراق","Categories we supply to Iraqi traders"],
    p_p:["أكثر الفئات طلبًا من السوق المصري — وأي صنف ثاني تشتغل بيه، أرسله لنا ونرجع لك بالتوفر والسعر.","The most requested categories from the Egyptian market — and for any other item you trade in, send it over and we'll reply with availability and pricing."],
    c1:["معلبات وصلصات","Canned goods & sauces"],
    c2:["أرز وبقوليات","Rice & pulses"],
    c3:["زيوت وسمن","Oils & ghee"],
    c4:["مربى وحلاوة وطحينة","Jams, halawa & tahini"],
    c5:["مكرونة ومواد جافة","Pasta & dry goods"],
    c6:["أغذية مجمدة","Frozen foods"],
    c7:["أصناف ثانية؟","Another item?"],
    c7s:["أرسل القائمة ونشوفها لك","Send your list and we'll source it"],
    p_note:["الأصناف تتحدد حسب الطلب والتوفر، وكل عرض سعر يوضح المواصفات وبلد المنشأ لكل صنف.","Items depend on demand and availability. Every quote states specifications and country of origin per item."],
    p_more:["شوف كل الفئات","See all categories"],

    h_k:["طريقة العمل","How it works"],
    h_h:["أربع خطوات، وكل مرحلة واضحة","Four steps, every stage visible"],
    h_p:["تتابع ويانا كل مرحلة لحد ما توصل البضاعة لمخزنك.","You follow every stage with us until the goods reach your warehouse."],
    st1h:["ترسل طلبك","Send your request"],
    st1:["الأصناف والكمية التقريبية — بزر واحد أو على واتساب.","Items and approximate quantity — one button, or over WhatsApp."],
    st2h:["نرسل عرض السعر","You get a quote"],
    st2:["عرض مكتوب بالأسعار والمواصفات وبلد المنشأ.","A written offer with prices, specs and origin."],
    st3h:["نتفق ونجهّز","Agree & prepare"],
    st3:["نثبّت التفاصيل ونجهّز البضاعة من المصدر.","We confirm details and prepare the goods at source."],
    st4h:["نشحن لحد عندك","We deliver"],
    st4:["الشحن والتخليص علينا، مع متابعة الشحنة خطوة بخطوة.","Freight and clearance on us, with step-by-step tracking."],

    g_k:["مجموعة HTS","HTS Group"],
    g_h:["شبكة شركات في أربع دول","A network of companies in four countries"],
    g_p:["مجموعة قابضة تربط شركات متخصصة في التجارة والخدمات اللوجستية.","A holding group connecting specialist trade and logistics companies."],
    g_more:["تعرّف على المجموعة","Meet the group"],
    eg:["مصر","Egypt"], ae:["دبي","Dubai"], tr:["تركيا","Turkey"], cn:["الصين","China"], iq:["العراق","Iraq"],
    ram:["شركة لوجستية تأسست سنة 2004، وهي نواة المجموعة.","A logistics company founded in 2004 — the core of the group."],
    hw:["تجارة وشحن ولوجستيك، 15 سنة في السوق، ومستودع في دبي.","Trading, shipping and logistics; 15 years in the market, with a Dubai warehouse."],
    nv:["شركة لوجستية تربط السوق التركي بشبكة المجموعة.","A logistics company linking the Turkish market to the group."],
    tm:["عمليات لوجستية مع مستودع محلي في الصين.","Logistics operations with a local warehouse in China."],
    soon:["قريبًا","Coming soon"],
    iqp:["فرع جديد للمجموعة لخدمة تجار العراق عن قرب.","A new group branch to serve Iraqi traders up close."],

    /* products page */
    pp_h:["المنتجات","Products"],
    pp_p:["نوفّر الأصناف من السوق المصري ومن أسواق المجموعة في دبي وتركيا والصين، حسب طلبك.","We supply items from the Egyptian market and from our group's markets in Dubai, Turkey and China — to order."],
    pp_k:["الفئات","Categories"],
    pp_h2:["أكثر الفئات طلبًا","Most requested categories"],
    pq_h:["ما لقيت الصنف اللي تدور عليه؟","Didn't find the item you need?"],
    pq_p:["أرسل لنا قائمتك بالأصناف والكميات، ونرجع لك بالتوفر والسعر وبلد المنشأ.","Send us your list of items and quantities; we'll come back with availability, price and origin."],
    sp_h:["كل عرض سعر يوصلك واضح","Every quote arrives clear"],
    sp_p:["مو بس سعر — تعرف بالضبط شنو تستلم وشلون توصلك.","Not just a price — you know exactly what you receive and how it reaches you."],
    sp1b:["مواصفات لكل صنف","Specs per item"], sp1:["الوزن، التعبئة، العبوة، وبلد المنشأ","weight, packing, unit and country of origin"],
    sp2b:["سعر شامل للشحن","Price including freight"], sp2:["توصلك البضاعة لحد مخزنك","goods reach your warehouse"],
    sp3b:["جدول زمني واضح","A clear timeline"], sp3:["تعرف متى تجهز الشحنة ومتى تصل","you know when it ships and when it lands"],
    sp4b:["متابعة لحد الاستلام","Tracking to delivery"], sp4:["نبلغك بكل مرحلة","we update you at every stage"],

    /* group page */
    gp_p:["مجموعة قابضة تعمل منذ 2004 في التجارة والخدمات اللوجستية، وتخدم تجار العراق من أربع أسواق.","A holding group working in trade and logistics since 2004, serving Iraqi traders from four markets."],
    gc_k:["شركات المجموعة","Group companies"],
    gc_h:["شركات متخصصة، إدارة وحدة","Specialist companies, one management"],
    gm_k:["التغطية","Coverage"],
    gm_h:["أسواقنا اليوم","Our markets today"],
    gm_p:["كل سوق فيه شركة تابعة للمجموعة، والعراق فرعنا القادم.","Each market has a group company; Iraq is our next branch."],

    /* contact page */
    cp_h:["تواصل ويانا","Get in touch"],
    cp_p:["اترك بياناتك ونتواصل وياك، أو راسلنا مباشرة على واتساب. نرد خلال يوم عمل من السبت للخميس.","Leave your details and we'll contact you, or message us directly on WhatsApp. We reply within one business day, Saturday to Thursday."],
    cf_h:["اطلب عرض سعر","Request a quote"],
    cf_p:["كل الحقول اختيارية ما عدا الاسم والرقم.","Everything is optional except your name and number."],
    q_h:["سجّل طلبك خلال دقيقة","Register your request in a minute"],
    f_n:["الاسم","Name"],
    f_ph:["رقم الهاتف / واتساب","Phone / WhatsApp"],
    f_em:["البريد الإلكتروني","Email"],
    f_em_opt:["البريد الإلكتروني (اختياري)","Email (optional)"],
    f_c:["اسم الشركة / المكتب","Company / office"],
    f_ci:["المدينة","City"],
    f_t:["نوع النشاط","Business type"],
    f_p:["الأصناف المطلوبة","Items needed"],
    f_q:["الكمية التقريبية","Approximate quantity"],
    o1:["مستورد","Importer"], o2:["تاجر جملة","Wholesaler"], o3:["موزع","Distributor"], o4:["سوبرماركت / سلسلة","Supermarket / chain"], o5:["أخرى","Other"],
    f_send:["أرسل الطلب","Send request"],
    f_req:["الرجاء كتابة الاسم ورقم الهاتف.","Please enter your name and phone number."],
    f_err:["تعذّر الإرسال. جرّب واتساب من الزر تحت.","Couldn't send. Please use the WhatsApp button below."],
    ci_k:["بيانات التواصل","Contact details"],
    ci_h:["تحب تتصل مباشرة؟","Prefer to call?"],
    ci_wa:["واتساب","WhatsApp"],
    ci_mail:["البريد الإلكتروني","Email"],
    ci_hours:["ساعات العمل","Working hours"],
    ci_hours_v:["السبت – الخميس، 9 صباحًا – 6 مساءً (توقيت مصر)","Saturday – Thursday, 9am – 6pm (Egypt time)"],
    ci_resp:["وقت الرد","Response time"],
    ci_resp_v:["خلال يوم عمل واحد","Within one business day"],

    /* faq */
    faq_k:["أسئلة متكررة","FAQ"],
    faq_h:["قبل ما تتواصل","Before you get in touch"],
    fq1:["شكد الأسعار؟","What are your prices?"],
    fa1:["السعر يعتمد على الصنف والكمية والتعبئة. أرسل لنا طلبك ونرجع لك بعرض سعر مكتوب.","Prices depend on item, quantity and packaging. Send your request and we'll reply with a written quote."],
    fq2:["منين البضاعة؟","Where do the goods come from?"],
    fa2:["تركيزنا الأساسي على السوق المصري، ونوفّر كذلك من دبي وتركيا والصين عبر شركات المجموعة. بلد المنشأ يكون واضح في عرض السعر لكل صنف.","Our main focus is the Egyptian market; we also supply from Dubai, Turkey and China through our group companies. Country of origin is stated per item in every quote."],
    fq3:["منو يتولى الشحن والتخليص؟","Who handles shipping and customs?"],
    fa3:["مجموعتنا تتولى الشحن والتخليص الجمركي بنفسها، وتتابع الشحنة لحد ما توصل.","Our group handles freight and customs clearance in-house and follows the shipment to arrival."],
    fq4:["شلون الدفع؟","What are the payment terms?"],
    fa4:["طرق الدفع تتحدد حسب حجم الطلبية، وترسل لك مكتوبة مع عرض السعر.","Payment terms depend on order size and are sent in writing with the quote."],
    fq5:["عدكم مكتب بالعراق؟","Do you have an office in Iraq?"],
    fa5:["فرعنا في العراق قريبًا، وبعد الاتفاق يقدر ممثلنا يتابع وياك مباشرة.","Our Iraq branch is opening soon; after agreement our representative can follow up with you directly."],
    fq6:["شكد أقل كمية؟","Is there a minimum order?"],
    fa6:["نشتغل بكميات الجملة، والحد الأدنى يختلف حسب الصنف. أرسل طلبك ونوضح لك.","We work in wholesale volumes; the minimum varies per item. Send your request and we'll clarify."],

    /* band + footer */
    band_h:["جاهز تبدأ؟","Ready to start?"],
    band_p:["اترك بياناتك بزر واحد، ونتواصل وياك بعرض سعر مكتوب.","Leave your details with one button and we'll come back with a written quote."],
    f_links:["روابط","Links"],
    f_contact:["تواصل","Contact"],
    f_about:["مجموعة HTS — تجارة وخدمات لوجستية من مصر ودبي وتركيا والصين إلى العراق.","HTS Group — trade and logistics from Egypt, Dubai, Turkey and China to Iraq."],
    f_rights:["جميع الحقوق محفوظة","All rights reserved"],

    /* modal */
    m_h:["اترك بياناتك","Leave your details"],
    m_p:["اسمك ورقمك بس — ونتواصل وياك خلال يوم عمل.","Just your name and number — we'll contact you within one business day."],
    m_note:["شنو تحتاج؟ (اختياري)","What do you need? (optional)"],
    m_send:["أرسل","Send"],
    m_priv:["بياناتك تستخدم للتواصل وياك بخصوص طلبك فقط.","Your details are used only to contact you about your request."],
    m_sending:["جارٍ الإرسال…","Sending…"],
    m_ok_h:["وصلنا طلبك","We've got it"],
    m_ok_p:["شكرًا لك. فريقنا راح يتواصل وياك خلال يوم عمل.","Thank you. Our team will contact you within one business day."],
    m_ok_wa:["تحب تستعجل؟ راسلنا على واتساب","In a hurry? Message us on WhatsApp"],
    m_close:["تمام","Done"],
    wa_msg:["السلام عليكم، أريد عرض سعر من Hawk Trade","Hello, I'd like a quote from Hawk Trade"]
  };

  var L = "ar";
  function $(id){ return d.getElementById(id); }
  function waUrl(m){ return "https://wa.me/" + WA + "?text=" + encodeURIComponent(m); }

  function setLang(l){
    L = l;
    html.lang = l;
    html.dir = (l === "ar") ? "rtl" : "ltr";
    var i = (l === "ar") ? 0 : 1;
    var nodes = d.querySelectorAll("[data-t]"), k, v;
    for (var n = 0; n < nodes.length; n++){
      k = nodes[n].getAttribute("data-t"); v = T[k];
      if (v) nodes[n].textContent = v[i];
    }
    var ph = d.querySelectorAll("[data-ph]");
    for (var p = 0; p < ph.length; p++){
      v = T[ph[p].getAttribute("data-ph")];
      if (v) ph[p].setAttribute("placeholder", v[i]);
    }
    var lb = $("lang"); if (lb) lb.textContent = (l === "ar") ? "English" : "العربية";
    var tt = d.querySelector("[data-title-ar]");
    if (tt) d.title = (l === "ar") ? tt.getAttribute("data-title-ar") : tt.getAttribute("data-title-en");
    var wa = d.querySelectorAll(".js-wa");
    for (var w = 0; w < wa.length; w++) wa[w].href = waUrl(T.wa_msg[i]);
    try { localStorage.setItem("hts-lang", l); } catch (e) {}
  }

  var langBtn = $("lang");
  if (langBtn) langBtn.addEventListener("click", function(){ setLang(L === "ar" ? "en" : "ar"); });
  var saved = "ar";
  try { saved = localStorage.getItem("hts-lang") || "ar"; } catch (e) {}
  setLang(saved === "en" ? "en" : "ar");

  /* ---------- mobile nav ---------- */
  var burger = $("burger"), nav = $("nav");
  if (burger && nav){
    burger.addEventListener("click", function(){
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function(e){
      if (e.target.closest("a")){ nav.classList.remove("open"); burger.setAttribute("aria-expanded","false"); }
    });
  }

  /* ---------- lead modal ---------- */
  var ovl = $("ovl");
  var lastFocus = null;

  function openLead(){
    if (!ovl) { location.href = "contact.html"; return; }
    lastFocus = d.activeElement;
    ovl.classList.add("on");
    ovl.setAttribute("aria-hidden","false");
    var f = $("m-n"); if (f) setTimeout(function(){ f.focus(); }, 180);
  }
  function closeLead(){
    if (!ovl) return;
    ovl.classList.remove("on");
    ovl.setAttribute("aria-hidden","true");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  d.addEventListener("click", function(e){
    if (e.target.closest(".js-lead")){ e.preventDefault(); openLead(); }
    else if (e.target.closest(".js-close")){ e.preventDefault(); closeLead(); }
    else if (ovl && e.target === ovl){ closeLead(); }
  });
  d.addEventListener("keydown", function(e){
    if (e.key === "Escape" && ovl && ovl.classList.contains("on")) closeLead();
  });

  /* ---------- lead submission ---------- */
  function fieldLabels(ar){
    return ar
      ? { name:"الاسم", phone:"الهاتف", email:"البريد الإلكتروني", company:"الشركة", city:"المدينة", type:"النشاط", items:"الأصناف", qty:"الكمية", note:"الملاحظات" }
      : { name:"Name", phone:"Phone", email:"Email", company:"Company", city:"City", type:"Type", items:"Items", qty:"Quantity", note:"Notes" };
  }
  function buildMessage(data, ar){
    var lb = fieldLabels(ar), out = [], k;
    for (k in data){ if (data[k]) out.push("• " + (lb[k] || k) + ": " + data[k]); }
    return (ar ? "السلام عليكم، أريد عرض سعر من Hawk Trade:" : "Hello, I'd like a quote from Hawk Trade:") + "\n" + out.join("\n");
  }
  function endpoint(){
    if (LEAD_ENDPOINT) return LEAD_ENDPOINT;
    if (LEAD_EMAIL) return "https://formsubmit.co/ajax/" + encodeURIComponent(LEAD_EMAIL);
    return "";
  }
  function send(data, ar, onDone, onFail){
    var msg = buildMessage(data, ar), url = endpoint();
    if (url){
      var body = {}; for (var k in data) body[k] = data[k];
      body.message = msg;
      body.source  = location.href;
      body._subject = (ar ? "طلب جديد من الموقع — " : "New website request — ") + (data.name || "");
      body._template = "table";
      body._captcha = "false";
      fetch(url, {
        method:"POST",
        headers:{ "Content-Type":"application/json", "Accept":"application/json" },
        body: JSON.stringify(body)
      }).then(function(r){ r.ok ? onDone(msg) : onFail(msg); })
        .catch(function(){ onFail(msg); });
    } else {
      var win = window.open(waUrl(msg), "_blank", "noopener");
      if (!win) location.href = waUrl(msg);
      onDone(msg);
    }
  }

  var mForm = $("m-form");
  if (mForm){
    mForm.addEventListener("submit", function(e){
      e.preventDefault();
      var ar = (L === "ar");
      var val = function(id){ var el = $(id); return el ? el.value.trim() : ""; };
      var box = $("m-msg");
      if (!val("m-n") || !val("m-ph")){
        box.className = "msg err"; box.textContent = T.f_req[ar ? 0 : 1]; return;
      }
      box.className = "msg";
      var btn = mForm.querySelector("button[type=submit]");
      var lbl = btn.querySelector("span"), old = lbl ? lbl.textContent : "";
      btn.disabled = true; btn.style.opacity = ".7";
      if (lbl) lbl.textContent = T.m_sending[ar ? 0 : 1];
      var restore = function(){ btn.disabled = false; btn.style.opacity = ""; if (lbl) lbl.textContent = old; };
      send({ name:val("m-n"), phone:val("m-ph"), email:val("m-em"), note:val("m-note") }, ar,
        function(){ $("m-body").hidden = true; $("m-done").hidden = false; },
        function(msg){
          restore();
          box.className = "msg err"; box.textContent = T.f_err[ar ? 0 : 1];
          var w = window.open(waUrl(msg), "_blank", "noopener"); if (!w) location.href = waUrl(msg);
        });
    });
  }

  var cForm = $("c-form");
  if (cForm){
    cForm.addEventListener("submit", function(e){
      e.preventDefault();
      var ar = (L === "ar");
      var val = function(id){ var el = $(id); return el ? el.value.trim() : ""; };
      var box = $("c-msg");
      if (!val("c-n") || !val("c-ph")){
        box.className = "msg err"; box.textContent = T.f_req[ar ? 0 : 1]; return;
      }
      box.className = "msg";
      var btn = cForm.querySelector("button[type=submit]");
      var lbl = btn.querySelector("span"), old = lbl ? lbl.textContent : "";
      btn.disabled = true; btn.style.opacity = ".7";
      if (lbl) lbl.textContent = T.m_sending[ar ? 0 : 1];
      var restore = function(){ btn.disabled = false; btn.style.opacity = ""; if (lbl) lbl.textContent = old; };
      send({
        name:val("c-n"), phone:val("c-ph"), email:val("c-em"), company:val("c-c"), city:val("c-ci"),
        type:$("c-ty") ? $("c-ty").value : "", items:val("c-p"), qty:val("c-q")
      }, ar,
        function(){
          restore();
          box.className = "msg ok"; box.textContent = T.m_ok_p[ar ? 0 : 1];
          cForm.reset();
        },
        function(msg){
          restore();
          box.className = "msg err"; box.textContent = T.f_err[ar ? 0 : 1];
          var w = window.open(waUrl(msg), "_blank", "noopener"); if (!w) location.href = waUrl(msg);
        });
    });
  }

  /* ---------- email links ---------- */
  var mails = d.querySelectorAll("[data-mail]");
  for (var mi = 0; mi < mails.length; mi++){
    if (LEAD_EMAIL){
      var a = mails[mi].tagName === "A" ? mails[mi] : mails[mi].querySelector("a");
      if (a){ a.href = "mailto:" + LEAD_EMAIL; a.textContent = LEAD_EMAIL; }
    } else {
      mails[mi].hidden = true;
    }
  }

  /* ---------- floating WhatsApp ---------- */
  var fab = $("fab");
  if (fab){
    var onScroll = function(){ fab.classList.toggle("on", window.pageYOffset > 320); };
    window.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
  }

  /* ---------- counters + reveal ---------- */
  function count(el){
    var n = +el.getAttribute("data-n"), t0 = performance.now();
    var step = function(t){
      var p = Math.min(1, (t - t0) / 1100);
      el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  var rv = d.querySelectorAll(".rv");
  if ("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(x){
        if (!x.isIntersecting) return;
        x.target.classList.add("in");
        var c = x.target.querySelectorAll(".cnt");
        for (var i = 0; i < c.length; i++) count(c[i]);
        io.unobserve(x.target);
      });
    }, { threshold:.12, rootMargin:"0px 0px -40px 0px" });
    for (var i = 0; i < rv.length; i++) io.observe(rv[i]);
  } else {
    for (var j = 0; j < rv.length; j++) rv[j].classList.add("in");
  }

  var yr = $("yr"); if (yr) yr.textContent = new Date().getFullYear();
})();
