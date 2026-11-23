# بريف الصور — Hawk Trade

> **طريقة الشغل:** ابعتي أي صور تجهز أول بأول، مش لازم الكل مرة واحدة.
> أنا هحوّلهم WebP وأضغطهم وأقص الخلفيات وأركبهم في أماكنهم.

---

## 🔴 قاعدة الهوية — اقرئيها الأول

في آخر **كل** برومبت، ضيفي السطر ده بالظبط:

### للمشاهد والصور العادية (A)

```
cinematic photography, deep navy blue tones with warm golden highlights,
dark moody background, professional corporate look, photorealistic, sharp
detail, 35mm, no text, no letters, no logos, no watermarks, no faces
```

### للعناصر المقصوصة / الستيكرات (B)

```
isolated single object centered on pure solid white background, 3D product
render, soft studio lighting, subtle contact shadow, no text, no logos,
no watermark
```

**ليه ده مهم؟**
- **نفس الدرجة اللونية (كحلي + ذهبي)** = الموقع يبان هوية واحدة مش صور مجمّعة من النت.
- **`no text`** = الـ AI بيكتب عربي متكسّر وحروف غلط. كل الكتابة أنا بحطها فوق الصور بالـ CSS.
- **`pure white background`** في النوع B = عشان أقدر أقص الخلفية بنظافة وأطلّعها ستيكر شفاف.

---

## 1️⃣ القطاعات — مربعة 1200×1200

| الملف | المحتوى |
|---|---|
| `sec-electronics.jpg` | لابتوبات وإلكترونيات |
| `sec-mobiles.jpg` | موبايلات وإكسسوارات |
| `sec-appliances.jpg` | أجهزة منزلية |
| `sec-steel.jpg` | حديد تسليح |
| `sec-building.jpg` | سيراميك ودهانات وتشطيبات |
| `sec-sanitary.jpg` | أدوات صحية وألمنيوم |
| `sec-general.jpg` | بضائع عامة / كونتينر مفتوح |

**البرومبتات** (كل واحد + قاعدة A):

1. `Stacks of boxed laptops and consumer electronics on wooden pallets inside a large distribution warehouse, shrink-wrapped cartons, square 1:1`
2. `Sealed smartphone boxes and accessory cartons stacked neatly on a pallet in a wholesale warehouse, square 1:1`
3. `Boxed home appliances — washing machines and refrigerators — wrapped and stacked in a distribution centre, square 1:1`
4. `Bundles of steel reinforcement rebar and steel coils stacked in an industrial yard, heavy metal texture, square 1:1`
5. `Pallets of ceramic tiles and paint buckets stacked in a building-materials warehouse, square 1:1`
6. `Aluminium profiles and sanitary ware boxes stacked in an industrial warehouse, square 1:1`
7. `An open shipping container packed with mixed assorted cargo boxes at a port terminal, forklift nearby, square 1:1`

---

## 2️⃣ الخلفيات الكبيرة — عرضية 2400×1350

| الملف | المحتوى |
|---|---|
| `hero-wide.jpg` | ميناء حاويات وقت الغروب — **الأهم** |
| `hero-tall.jpg` | **نفس المشهد** بس طولي 1080×1620 (للموبايل) |
| `bg-ship.jpg` | باخرة شحن في عرض البحر |
| `bg-air.jpg` | طيارة شحن بتتشحن ليلاً |
| `bg-road.jpg` | قافلة شاحنات على طريق |
| `bg-warehouse.jpg` | مخزن ضخم من جوه |

**البرومبتات:**

1. `Aerial view of a busy container port terminal at blue hour, gantry cranes, stacked colorful containers, cargo ship docked, city lights on the horizon, cinematic wide shot`
2. **نفس البرومبت** + `vertical portrait composition 2:3`
3. `Large container ship sailing on open sea at dusk, long cinematic wide shot, dramatic sky`
4. `Cargo plane being loaded with freight pallets on an airport apron at night, floodlights, wide shot`
5. `Convoy of freight trucks driving on a desert highway at golden hour, motion blur, wide cinematic shot`
6. `Interior of a huge modern logistics warehouse, tall racking, pallets, forklifts, dramatic lighting, wide shot`

---

## 3️⃣ الستيكرات / العناصر المقصوصة — 1024×1024

> دي اللي بتدي الموقع الروح: عناصر طايرة بين الأقسام، جنب العناوين، في الفواصل.
> **كلها بقاعدة B** (خلفية بيضا صافية). أنا اللي هقص الخلفية.

| الملف | البرومبت |
|---|---|
| `st-box.png` | `A single cardboard shipping box, 3/4 angle` |
| `st-container.png` | `A single blue shipping container, 3/4 angle` |
| `st-pallet.png` | `A wooden pallet stacked with wrapped cargo boxes` |
| `st-truck.png` | `A modern freight semi-truck, side profile view` |
| `st-ship.png` | `A container cargo ship, side 3/4 view` |
| `st-plane.png` | `A cargo airplane, side 3/4 view` |
| `st-forklift.png` | `A yellow forklift truck, 3/4 angle` |
| `st-laptop.png` | `An open modern laptop, 3/4 angle` |
| `st-rebar.png` | `A bundle of steel reinforcement bars` |
| `st-tiles.png` | `A stack of ceramic floor tiles` |
| `st-crane.png` | `A port gantry crane` |
| `st-globe.png` | `A navy blue and gold globe showing Asia and the Middle East` |
| `st-doc.png` | `A stack of shipping documents with a stamp` |
| `st-helmet.png` | `A safety helmet, 3/4 angle` |

---

## 4️⃣ مراحل العمل — 1600×1070

> الصور الحالية شغالة، بس لو عايزة تجدديها:

| الملف | البرومبت |
|---|---|
| `step-1.jpg` | `A trader reviewing a product list on a smartphone in an office, over-the-shoulder shot` |
| `step-2.jpg` | `A printed price quotation document on a desk with a pen and calculator, top-down shot` |
| `step-3.jpg` | `Warehouse workers wrapping and preparing pallets for shipment` |
| `step-4.jpg` | `A delivery truck backed into a warehouse loading dock, cargo being unloaded` |

---

## 5️⃣ صور الثقة والعمليات — 1600×1000

| الملف | البرومبت |
|---|---|
| `ops-qc.jpg` | `A warehouse supervisor with a clipboard inspecting stacked goods on racking` |
| `ops-customs.jpg` | `Customs clearance paperwork and cargo manifest on a desk at a port office` |
| `ops-loading.jpg` | `Forklift loading pallets into a shipping container at a logistics yard` |
| `ops-office.jpg` | `A modern logistics company office with a world map on the wall, wide shot` |

---

## 6️⃣ خامات وخلفيات — 2000×2000 (اختياري)

| الملف | البرومبت |
|---|---|
| `tex-metal.jpg` | `Dark brushed steel metal surface texture, seamless, navy blue tint` |
| `tex-concrete.jpg` | `Dark concrete wall texture, seamless, subtle navy tint` |

---

## ❌ متبعتيش دول — أنا بعملهم أحسن

| العنصر | ليه |
|---|---|
| **الفواصل بين الأقسام** | برسمها SVG — موجات، خطوط ذهبية، تدرّجات. الـ AI بيطلّعها مش متناسقة ومش بتتمدّد على كل المقاسات |
| **الأيقونات** | SVG مرسومة بإيدي — حادّة على أي شاشة وبتتلوّن مع الهوية وحجمها بايتات |
| **الأنماط والخلفيات الهندسية** | CSS — بتتكرر لانهائي ووزنها صفر |
| **الشارات والباجات** (جودة، ضمان، أرقام) | CSS — نص حقيقي يتقرا ويتترجم ويظهر في جوجل |
| **اللوجو** | موجود بجودة كويسة |
| **صورة معاينة الواتساب** | بعملها من اللوجو |
| **الأعلام** | SVG |
| **الأنيميشن** | SVG + CSS — عربية النقل والباخرة والطيارة كلها متحركة فعلاً، مش صور ثابتة |

---

## 📦 التسليم

- **الصيغة:** JPG أو PNG عادي — أنا هحوّلهم WebP
- **الحجم:** متقلقيش من الحجم، أنا بضغطهم
- **الأسماء:** مش مهمة، ابعتيهم بأي اسم وأنا هسميهم
- **الترتيب:** ابعتي **رقم 1 و 2 و 3** الأول — دول اللي هيغيّروا شكل الموقع فعلاً

---

## ⚠️ لو صورة طلعت وحشة

قوليلي ومتعيديش المحاولة كتير. غالبًا هيكون أسهل أظبطها بالفلاتر والتدرّجات،
أو أستخدم عنصر SVG مكانها.
