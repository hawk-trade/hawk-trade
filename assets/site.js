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

    chip:["الصين · دبي · مصر · تركيا — العراق قريبًا","China · Dubai · Egypt · Turkey — Iraq soon"],
    h1a:["نستورد لك كل اللي تحتاجه","We import everything you need"],
    r1:["إلكترونيات ولابتوبات","electronics & laptops"],
    r2:["حديد ومواد بناء","steel & building materials"],
    r3:["منتجات غذائية","food products"],
    r4:["أي صنف تطلبه","any item you ask for"],
    h1b:["بالجملة من أي سوق لحد مخزنك في العراق","wholesale, from any market to your warehouse in Iraq"],
    lead:["مجموعة HTS شبكة شركات تجارة ولوجستيك في الصين ودبي ومصر وتركيا. نوفّر الأصناف اللي تطلبها من أي سوق فيهم، ونتولى الشحن والتخليص الجمركي بأنفسنا لحد ما توصل لمخزنك.","HTS is a network of trading and logistics companies in China, Dubai, Egypt and Turkey. We source the items you ask for from any of those markets and handle freight and customs clearance in-house, all the way to your warehouse."],
    hp1:["عرض سعر مكتوب","Written quotation"],
    hp2:["شحن وتخليص علينا","Freight & clearance on us"],
    hp3:["رد خلال يوم عمل","Reply within 1 business day"],
    cta_lead:["اترك بياناتك ونتواصل وياك","Leave your details — we'll call you"],
    cta_wa:["راسلنا على واتساب","Message us on WhatsApp"],
    card_h:["خلّينا نتواصل وياك","Let us call you"],
    card_p:["اسمك ورقمك بس، وفريقنا يرجع لك بعرض سعر خلال يوم عمل.","Just your name and number — we'll come back with a quote within one business day."],
    card_or:["أو","or"],

    t1b:["سنة","yrs"], t1:["خبرة لوجستية في مصر منذ 2004","logistics experience in Egypt since 2004"],
    t2b:["سنة","yrs"], t2:["عمل متواصل في دبي","operating in Dubai"],
    t3b:["أسواق","markets"], t3:["الصين · دبي · مصر · تركيا","China · Dubai · Egypt · Turkey"],
    t4b:["العراق","Iraq"], t4:["فرعنا الجديد قريبًا","new branch coming soon"],

    sec_k:["قطاعاتنا","What we supply"],
    sec_h:["نستورد لك من أي قطاع","We import across every sector"],
    sec_p:["مو تخصص واحد — نوفّر الأصناف اللي تشتغل بيها من أي سوق من أسواق المجموعة، وبلد المنشأ يكون واضح في عرض السعر.","Not one niche — we source whatever you trade in from any of our group's markets, with country of origin stated in every quote."],
    s1h:["إلكترونيات وتكنولوجيا","Electronics & technology"],
    s1a:["لابتوبات وأجهزة كمبيوتر","Laptops & computers"],
    s1b2:["موبايلات وإكسسوارات","Phones & accessories"],
    s1c:["أجهزة منزلية","Home appliances"],
    s1d:["قطع غيار وملحقات","Parts & peripherals"],
    s2h:["حديد ومواد بناء","Steel & building materials"],
    s2a:["حديد تسليح ومقاطع","Rebar & steel sections"],
    s2b2:["ألمنيوم وبروفيلات","Aluminium profiles"],
    s2c:["سيراميك وبورسلين","Ceramic & porcelain"],
    s2d:["أدوات صحية ودهانات","Sanitary ware & paints"],
    s3h:["منتجات غذائية","Food products"],
    s3a:["معلبات وصلصات","Canned goods & sauces"],
    s3b2:["أرز وبقوليات وزيوت","Rice, pulses & oils"],
    s3c:["مكرونة ومواد جافة","Pasta & dry goods"],
    s3d:["مربى وحلاوة وطحينة","Jams, halawa & tahini"],
    s1tag:["لابتوبات، موبايلات، أجهزة منزلية وقطع غيار","Laptops, phones, appliances & parts"],
    s2tag:["حديد تسليح، ألمنيوم، سيراميك وأدوات صحية","Rebar, aluminium, ceramic & sanitary ware"],
    s3tag:["معلبات، أرز وزيوت، مكرونة ومربيات","Canned goods, rice & oils, pasta & jams"],
    s4h:["أي صنف ثاني؟","Anything else?"],
    s4p:["أرسل لنا قائمتك بالأصناف والكميات، ونرجع لك بالتوفر والسعر وبلد المنشأ — مهما كان الصنف أو السوق.","Send us your list of items and quantities and we'll come back with availability, price and origin — whatever the item or the market."],
    s4tag:["أرسل قائمتك ونرجع لك بالسعر وبلد المنشأ","Send your list and we'll reply with price and origin"],
    s4go:["أرسل قائمتك","Send your list"],

    j_k:["من المصدر لحد مخزنك","From source to your door"],
    j_h:["رحلة شحنتك ويانا","Your shipment's journey with us"],
    j_p:["جوًا أو بحرًا أو برًا — المجموعة تتولى الشحنة من لحظة الشراء لحد ما تنزل في مخزنك.","By air, sea or land — the group handles your shipment from purchase to unloading at your warehouse."],
    j_from:["من أي بلد","From any country"],
    j_to:["مخزنك في العراق","Your warehouse in Iraq"],
    j_air:["شحن جوي","Air freight"],
    j_sea:["شحن بحري","Sea freight"],
    j_land:["شحن بري","Land freight"],
    j1h:["ترسل طلبك","Send your request"],
    j1:["الأصناف والكمية التقريبية — بزر واحد أو على واتساب.","Items and approximate quantity — one button, or over WhatsApp."],
    j2h:["نرسل عرض السعر","You get a quote"],
    j2:["عرض مكتوب بالأسعار والمواصفات وبلد المنشأ.","A written offer with prices, specs and origin."],
    j3h:["نتفق ونجهّز","Agree & prepare"],
    j3:["نثبّت التفاصيل ونجهّز البضاعة من المصدر.","We confirm details and prepare the goods at source."],
    j4h:["نشحن ونخلّص","We ship & clear"],
    j4:["الشحن والتخليص علينا، مع متابعة الشحنة خطوة بخطوة.","Freight and clearance on us, with step-by-step tracking."],
    j_step:["الخطوة","STEP"],

    sv_k:["خدمات المجموعة","Group services"],
    sv_h:["شبكة لوجستية كاملة وراء كل شحنة","A full logistics network behind every shipment"],
    sv_p:["مو بس توريد — المجموعة عندها شركات لوجستية ومستودعات في الصين ودبي تشتغل على شحنتك.","More than sourcing — the group runs logistics companies and warehouses in China and Dubai working on your shipment."],
    v1h:["تنسيق الشحن","Freight coordination"],
    v1:["تخطيط وتنسيق حركة الشحنات بين الأسواق.","Planning and coordinating shipment movement across markets."],
    v2h:["حاويات كاملة وجزئية","FCL & LCL cargo"],
    v2:["خيارات الشحن بالحاوية الكاملة أو الجزئية حسب حجم طلبك.","Full-container or part-container options to match your order size."],
    v3h:["مستودعات في الصين ودبي","Warehouses in China & Dubai"],
    v3:["تواجد مستودعي يدعم التخزين وتجميع الشحنات.","Warehouse presence supporting storage and consolidation."],
    v4h:["دعم الاستيراد","Import support"],
    v4:["تنسيق انتقال البضائع بين الأسواق لحد الوصول.","Coordinating goods moving between markets to arrival."],
    v5h:["مناولة البضائع","Cargo handling"],
    v5:["دعم خلال المراحل الرئيسية للشحنة.","Support through the key stages of the shipment."],
    v6h:["تحديثات الشحنة","Shipment updates"],
    v6:["تواصل واضح عن تقدم الشحنة في كل مرحلة.","Clear communication on shipment progress at every stage."],

    why_k:["ليش إحنا","Why us"],
    why_h:["جهة وحدة، من المصدر لحد مخزنك","One partner, from source to your warehouse"],
    why_p:["بدل ما تتعامل مع مورّد وشركة شحن ومخلّص كل واحد لحاله، نرتّب لك كل شي.","Instead of juggling a supplier, a freight company and a customs broker, we arrange it all."],
    w1h:["حسب طلبك بالضبط","Built around your order"],
    w1:["تحدد الصنف والكمية والتعبئة، ونجهّز العرض على أساسها.","You set the item, quantity and packaging; we quote on that basis."],
    w2h:["الشحن والتخليص علينا","Freight & clearance handled"],
    w2:["شركات المجموعة تدير الشحن والتخليص بنفسها، بدون وسطاء.","Our group companies run shipping and clearance in-house, with no middlemen."],
    w3h:["أربع أسواق تحت إيدك","Four markets at your disposal"],
    w3:["الصين ودبي ومصر وتركيا — نجيب لك الصنف من السوق الأنسب سعرًا وجودة.","China, Dubai, Egypt and Turkey — we source from whichever market suits best on price and quality."],
    w4h:["شراكة مستمرة","Long-term partnership"],
    w4:["نبني علاقة طويلة الأمد مع التاجر، مو صفقة لمرة وحدة.","We build lasting relationships with traders, not one-off deals."],

    g_k:["مجموعة HTS","HTS Group"],
    g_h:["شبكة شركات في أربع أسواق","A network of companies in four markets"],
    g_p:["شركة قابضة تربط شركات متخصصة في التجارة والخدمات اللوجستية.","A holding company connecting specialist trade and logistics businesses."],
    g_more:["تعرّف على المجموعة","Meet the group"],
    gp_p:["مجموعة HTS القابضة تربط شركات متخصصة في التجارة والخدمات اللوجستية في الصين والإمارات ومصر وتركيا، والعراق فرعها القادم.","HTS Holding Group connects specialist trade and logistics companies across China, the UAE, Egypt and Turkey — with Iraq as its next branch."],
    gc_k:["شركات المجموعة","Group companies"],
    gc_h:["شركات متخصصة، إدارة وحدة","Specialist companies, one management"],
    gm_k:["التغطية","Coverage"],
    gm_h:["أسواقنا اليوم","Our markets today"],
    gm_p:["كل سوق فيه شركة تابعة للمجموعة، والعراق فرعنا القادم.","Each market has a group company; Iraq is our next branch."],
    eg:["مصر","Egypt"], ae:["دبي","Dubai"], tr:["تركيا","Turkey"], cn:["الصين","China"], iq:["العراق","Iraq"],
    co_ram_t:["خدمات لوجستية — تأسست 2004","Logistics services — established 2004"],
    co_ram:["أقدم شركات المجموعة وأكثرها خبرة، وأكثر من عقدين في السوق المصري.","The group's oldest company, with more than two decades in the Egyptian market."],
    co_hw_t:["تجارة أجهزة كمبيوتر وتكنولوجيا","Computer & technology trading"],
    co_hw:["15 سنة في سوق دبي، ومستودع يدعم مناولة المنتجات والتجارة الإقليمية.","15 years in the Dubai market, with a warehouse supporting product handling and regional trade."],
    co_nw_t:["شحن وخدمات لوجستية","Shipping & logistics services"],
    co_nw:["15 سنة في دبي، وتتولى الشحن وتنسيق الشحنات لعمليات المجموعة.","15 years in Dubai, handling shipping and shipment coordination for the group."],
    co_tm_t:["عمليات لوجستية في الصين","Logistics operations in China"],
    co_tm:["تثبّت حضور المجموعة في الصين، ومستودع محلي يدعم التنسيق والتخزين.","Anchors the group's presence in China, with a local warehouse for coordination and storage."],
    co_nv_t:["خدمات لوجستية في تركيا","Logistics services in Turkey"],
    co_nv:["تربط السوق التركي بشبكة المجموعة وتوفّر نقطة تنسيق محلية.","Links the Turkish market to the group's network with a local coordination point."],
    soon:["قريبًا","Coming soon"],
    co_iq:["شركة لوجستية جديدة للمجموعة لخدمة تجار العراق عن قرب.","A new group logistics company to serve Iraqi traders up close."],

    pp_h:["المنتجات","Products"],
    pp_p:["نستورد من الصين ودبي ومصر وتركيا — إلكترونيات وحديد ومواد بناء وأغذية وأي صنف ثاني تطلبه.","We import from China, Dubai, Egypt and Turkey — electronics, steel, building materials, food, and anything else you ask for."],
    pp_k:["القطاعات","Sectors"],
    pf_k:["أمثلة","Examples"],
    pf_h:["نماذج من الأصناف الغذائية","A sample of our food range"],
    pf_p:["دي أمثلة بس — الأصناف تتحدد حسب طلبك والتوفر.","These are examples only — items depend on your request and availability."],
    c1:["معلبات وصلصات","Canned goods & sauces"],
    c2:["أرز وبقوليات","Rice & pulses"],
    c3:["زيوت وسمن","Oils & ghee"],
    c4:["مربى وحلاوة وطحينة","Jams, halawa & tahini"],
    c5:["مكرونة ومواد جافة","Pasta & dry goods"],
    c6:["أغذية مجمدة","Frozen foods"],
    p_note:["الأصناف تتحدد حسب الطلب والتوفر، وكل عرض سعر يوضح المواصفات وبلد المنشأ لكل صنف.","Items depend on demand and availability. Every quote states specifications and country of origin per item."],
    p_more:["شوف كل القطاعات","See all sectors"],
    sp_h:["كل عرض سعر يوصلك واضح","Every quote arrives clear"],
    sp_p:["مو بس سعر — تعرف بالضبط شنو تستلم وشلون توصلك.","Not just a price — you know exactly what you receive and how it reaches you."],
    sp1b:["مواصفات لكل صنف","Specs per item"], sp1:["الموديل، الوزن، التعبئة، وبلد المنشأ","model, weight, packing and country of origin"],
    sp2b:["سعر شامل للشحن","Price including freight"], sp2:["توصلك البضاعة لحد مخزنك","goods reach your warehouse"],
    sp3b:["جدول زمني واضح","A clear timeline"], sp3:["تعرف متى تجهز الشحنة ومتى تصل","you know when it ships and when it lands"],
    sp4b:["متابعة لحد الاستلام","Tracking to delivery"], sp4:["نبلغك بكل مرحلة","we update you at every stage"],

    cp_h:["تواصل ويانا","Get in touch"],
    cp_p:["اترك بياناتك ونتواصل وياك، أو راسلنا مباشرة على واتساب. نرد خلال يوم عمل من السبت للخميس.","Leave your details and we'll contact you, or message us directly on WhatsApp. We reply within one business day, Saturday to Thursday."],
    cf_h:["اطلب عرض سعر","Request a quote"],
    q_h:["سجّل طلبك خلال دقيقة","Register your request in a minute"],
    cf_p:["كل الحقول اختيارية ما عدا الاسم والرقم.","Everything is optional except your name and number."],
    f_n:["الاسم","Name"],
    f_ph:["رقم الهاتف / واتساب","Phone / WhatsApp"],
    f_em:["البريد الإلكتروني","Email"],
    f_em_opt:["البريد الإلكتروني (اختياري)","Email (optional)"],
    f_c:["اسم الشركة / المكتب","Company / office"],
    f_ci:["المدينة","City"],
    f_t:["نوع النشاط","Business type"],
    f_s:["القطاع المطلوب","Sector"],
    f_p:["الأصناف المطلوبة","Items needed"],
    f_q:["الكمية التقريبية","Approximate quantity"],
    o1:["مستورد","Importer"], o2:["تاجر جملة","Wholesaler"], o3:["موزع","Distributor"], o4:["سوبرماركت / سلسلة","Supermarket / chain"], o5:["مقاولات","Contracting"], o6:["أخرى","Other"],
    k1:["إلكترونيات وتكنولوجيا","Electronics & technology"], k2:["حديد ومواد بناء","Steel & building materials"], k3:["منتجات غذائية","Food products"], k4:["أكثر من قطاع / غير ذلك","Multiple / other"],
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

    faq_k:["أسئلة متكررة","FAQ"],
    faq_h:["قبل ما تتواصل","Before you get in touch"],
    fq1:["شكد الأسعار؟","What are your prices?"],
    fa1:["السعر يعتمد على الصنف والكمية والتعبئة وسوق المصدر. أرسل لنا طلبك ونرجع لك بعرض سعر مكتوب.","Prices depend on the item, quantity, packaging and source market. Send your request and we'll reply with a written quote."],
    fq2:["منين البضاعة؟","Where do the goods come from?"],
    fa2:["من أسواق المجموعة: الصين ودبي ومصر وتركيا — ونقدر نوفّر من أسواق ثانية حسب الصنف. بلد المنشأ واضح في عرض السعر لكل صنف.","From our group's markets — China, Dubai, Egypt and Turkey — and we can source from other markets depending on the item. Country of origin is stated per item in every quote."],
    fq3:["تستوردون إلكترونيات وحديد ومواد بناء فعلاً؟","Do you really import electronics, steel and building materials?"],
    fa3:["إي. من ضمن شركات المجموعة شركة Headway في دبي متخصصة في تجارة أجهزة الكمبيوتر والتكنولوجيا، وشبكتنا اللوجستية تتعامل مع كل أنواع البضائع.","Yes. Headway, one of our Dubai companies, specialises in computer and technology trading, and our logistics network handles cargo of every kind."],
    fq4:["منو يتولى الشحن والتخليص؟","Who handles shipping and customs?"],
    fa4:["شركات المجموعة اللوجستية تتولى تنسيق الشحن والتخليص بنفسها، وتتابع الشحنة لحد ما توصل.","Our group's logistics companies coordinate freight and clearance in-house and follow the shipment to arrival."],
    fq5:["شلون الدفع؟","What are the payment terms?"],
    fa5:["طرق الدفع تتحدد حسب حجم الطلبية، وترسل لك مكتوبة مع عرض السعر.","Payment terms depend on order size and are sent in writing with the quote."],
    fq6:["شكد أقل كمية؟","Is there a minimum order?"],
    fa6:["نشتغل بكميات الجملة، ونوفّر حاويات كاملة أو جزئية حسب حجم طلبك. أرسل طلبك ونوضح لك.","We work in wholesale volumes and offer full or part containers depending on your order. Send your request and we'll clarify."],
    fq7:["عدكم مكتب بالعراق؟","Do you have an office in Iraq?"],
    fa7:["المجموعة راح تفتح شركة لوجستية في العراق قريبًا، وبعد الاتفاق يقدر ممثلنا يتابع وياك مباشرة.","The group will open a logistics company in Iraq soon; after agreement our representative can follow up with you directly."],

    band_h:["جاهز تبدأ؟","Ready to start?"],
    band_p:["اترك بياناتك بزر واحد، ونتواصل وياك بعرض سعر مكتوب.","Leave your details with one button and we'll come back with a written quote."],
    f_links:["روابط","Links"],
    f_contact:["تواصل","Contact"],
    f_about:["مجموعة HTS القابضة — تجارة وخدمات لوجستية من الصين ودبي ومصر وتركيا إلى العراق.","HTS Holding Group — trade and logistics from China, Dubai, Egypt and Turkey to Iraq."],
    f_rights:["جميع الحقوق محفوظة","All rights reserved"],

    m_h:["اترك بياناتك","Leave your details"],
    m_p:["اسمك ورقمك بس — ونتواصل وياك خلال يوم عمل.","Just your name and number — we'll contact you within one business day."],
    m_note:["شنو تحتاج؟ (اختياري)","What do you need? (optional)"],
    m_send:["أرسل","Send"],
    m_sending:["جارٍ الإرسال…","Sending…"],
    m_priv:["بياناتك تستخدم للتواصل وياك بخصوص طلبك فقط.","Your details are used only to contact you about your request."],
    m_ok_h:["وصلنا طلبك","We've got it"],
    m_ok_p:["شكرًا لك. فريقنا راح يتواصل وياك خلال يوم عمل.","Thank you. Our team will contact you within one business day."],
    m_ok_wa:["تحب تستعجل؟ راسلنا على واتساب","In a hurry? Message us on WhatsApp"],
    m_close:["تمام","Done"],
    ld_txt:["جارٍ التحميل","LOADING"],
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

  /* ---------- loader + page transition ---------- */
  var loader = $("loader");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function hideLoader(){ if (loader) loader.classList.add("gone"); }
  if (loader){
    if (reduce) hideLoader();
    else if (d.readyState === "complete") setTimeout(hideLoader, 220);
    else window.addEventListener("load", function(){ setTimeout(hideLoader, 220); });
    setTimeout(hideLoader, 3000);
    window.addEventListener("pageshow", function(e){ if (e.persisted) hideLoader(); });
    if (!reduce){
      d.addEventListener("click", function(e){
        var a = e.target.closest("a");
        if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        var href = a.getAttribute("href") || "";
        if (!href || href.charAt(0) === "#" || a.target === "_blank") return;
        if (/^(mailto:|tel:|https?:)/i.test(href)) return;
        e.preventDefault();
        loader.classList.remove("gone");
        setTimeout(function(){ location.href = href; }, 300);
      });
    }
  }

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
  var rv = d.querySelectorAll(".rv,.rv-s");
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
