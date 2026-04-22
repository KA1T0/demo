import { useState } from "react";

const RED = "#c0392b";
const GOLD = "#d4a017";
const DARK = "#1a0a00";
const CARD = "#2a1200";
const MUTED = "#8a6040";
const LIGHT = "#f5e6d0";
const GREEN = "#2d6a4f";
const BLUE = "#1a4a6b";
const TEAL = "#1a6b5a";
const PURPLE = "#4a1a6b";

const data = {
  broths: [
    {
      id: "mala", tag: "🌶️ VEGAN", color: RED, zh: "四川麻辣锅底", de: "Sichuan Málà – Scharf & betäubend",
      desc: "Das Original. Doubanjiang + Sichuan-Pfeffer = taub-scharf. Unbedingt authentisch kochen.",
      zutaten: [
        "3 EL 郫县豆瓣酱 (Pixian Doubanjiang) – fermentierte Chili-Bohnenpaste, NICHT ersetzen",
        "2 EL Rapsöl + 1 EL Chiliöl",
        "15–20 getrocknete Chilis (Facing Heaven oder Erjingtiao)",
        "2 TL Sichuan-Pfefferkörner (整粒花椒) – extra toasten",
        "1 TL Sichuan-Pfeffer gemahlen",
        "5 Knoblauchzehen grob gehackt, 3 cm Ingwer, 2 Frühlingszwiebeln",
        "2 Sternanis, 1 Zimtstange, 3 Lorbeerblätter",
        "1 TL fermentierte schwarze Bohnen (豆豉, optional aber authentisch)",
        "1,5 L Gemüsebrühe, 2 EL helle Sojasoße, 1 TL dunkle Sojasoße, 1 TL Zucker"
      ],
      steps: [
        "Öl in Wok/Topf stark erhitzen. Sichuan-Pfeffer & Sternanis 30 Sek. anrösten.",
        "Chilis, Knoblauch, Ingwer 2 Min. bei mittlerer Hitze.",
        "Doubanjiang einrühren, 5 Min. bei niedriger Hitze karamellisieren – Paste muss dunkelrot & ölig werden.",
        "Gemüsebrühe aufgießen, alle Gewürze, Sojasoße, Zucker. 20 Min. köcheln.",
        "Durch Sieb passieren oder Feststoffe drin lassen.",
        "Beim Fondue mittlere Hitze – das Öl trennt sich oben ab, ist normal."
      ]
    },
    {
      id: "mushroom", tag: "🍄 VEGAN", color: "#5a8a3a", zh: "菌菇清汤锅底", de: "Pilz-Klarbouillon – Umami-Bombe",
      desc: "Perfekter Kontrast zur Málà. Reich, tief, komplex. Ideal für Meeresfrüchte, zartes Gemüse & Tofu.",
      zutaten: [
        "6 getrocknete Shiitake – über Nacht einweichen, Einweichwasser aufbewahren!",
        "15 g getrocknete Steinpilze / Porcini",
        "10 cm Kombu (昆布) – 30 Min. kalt ziehen, NICHT kochen",
        "100 g Enoki-Pilze, 100 g King-Oyster-Pilze halbiert",
        "4 Knoblauchzehen, 3 cm Ingwer, 2 Frühlingszwiebeln",
        "1 L Wasser + Shiitake-Einweichwasser",
        "2 EL helle Sojasoße, 1 TL Sesamöl, Salz, weißer Pfeffer"
      ],
      steps: [
        "Kombu 30 Min. kalt ziehen – rausnehmen bevor Wasser kocht.",
        "Kombu-Wasser + Shiitake-Einweichwasser + frisches Wasser aufkochen.",
        "Alle Pilze, Knoblauch, Ingwer, Frühlingszwiebeln rein. 30 Min. leise köcheln.",
        "Sojasoße, Sesamöl, Salz, weißer Pfeffer abschmecken.",
        "Feststoffe können drin bleiben – wirkt lebendiger und gibt mehr Geschmack."
      ]
    },
    {
      id: "coconut", tag: "🥥 FLEISCH (Besonders!)", color: GOLD, zh: "椰子鸡锅底", de: "Kokosnuss-Hähnchen – Hainan-Spezialität",
      desc: "Das Besondere das du noch nicht hattest: süß, cremig, leicht, tropisch. Keine Chilischärfe. In Guangdong & Hainan der Sommer-Hotpot. Völlig anders als Sichuan.",
      zutaten: [
        "½ Hähnchen (Freiland), in Stücke gehackt – MIT Knochen für Tiefe",
        "400 ml Kokosmilch (vollfett, Dose)",
        "500 ml frisches Kokoswasser (Tetrapack oder frische Kokosnuss)",
        "500 ml Hühnerbrühe",
        "4 cm Galangal (南姜) – authentisch! Notfalls normaler Ingwer",
        "3 Zitronengrassstängel angebrochen, 4 Kaffirlimettenblätter, 3 Schalotten",
        "1 EL Fischsoße, Salz, weißer Pfeffer"
      ],
      steps: [
        "Hähnchenstücke kurz blanchieren (kochendes Wasser, 2 Min., abgießen).",
        "Kokoswasser + Hühnerbrühe aufkochen. Hähnchen, Galangal, Zitronengras, Kaffirlimettenblätter, Schalotten rein.",
        "30 Min. köcheln bis Hähnchen gar. Hähnchen rausnehmen (wird Beilage).",
        "Kokosmilch einrühren, Fischsoße, Salz, weißer Pfeffer. NICHT mehr stark kochen.",
        "Brühe wird durch das Garen immer reicher – am Ende wie Consommé."
      ]
    }
  ],
  dips: [
    {
      name: "麻酱碟 – Sesampaste", tag: "VEGAN", color: "#8B6914",
      ingredients: "3 EL Sesampaste (芝麻酱, nicht Tahini), 1 EL helle Sojasoße, 1 EL Reisessig, 1 TL Chiliöl, 1 Knoblauchzehe gerieben, 1 TL Zucker, 2 EL warmes Wasser, Frühlingszwiebeln + Koriander",
      note: "Der Beijing-Klassiker. Für Pilze & Gemüse unschlagbar."
    },
    {
      name: "沙茶碟 – Shacha-Sauce", tag: "FLEISCH", color: "#7a3b1e",
      ingredients: "2 EL Shacha-Sauce (Bullhead-Marke!), 1 EL helle Sojasoße, 1 rohes Eigelb (optional, südchinesisch-authentisch), 1 Knoblauchzehe, 1 TL Sesamöl",
      note: "Für 毛肚, Meeresfrüchte & Innereien."
    },
    {
      name: "蒜泥香油碟 – Knoblauch-Sesamöl", tag: "VEGAN", color: "#2d6a4f",
      ingredients: "4 Knoblauchzehen fein gerieben, 2 EL geröstetes Sesamöl, 1 EL helle Sojasoße, 1 TL Reisessig, frische Chili optional",
      note: "Universaldip. Besonders gut zu Meeresfrüchten & Fisch."
    },
    {
      name: "海鲜酱碟 – Seafood-Dip", tag: "MEERESFRÜCHTE", color: BLUE,
      ingredients: "2 EL Hoisin-Sauce, 1 EL Sojasoße, 1 TL Reisessig, 1 TL Zitronensaft, 1 TL Chiliöl, 1 TL geriebener Ingwer, 1 TL Sesamöl",
      note: "Speziell für Garnelen, Jakobsmuscheln & Fischfilets."
    }
  ],
  cookingIngredients: {
    vegan: [
      { emoji: "🍄", name: "Pilze (Pflicht!)", items: "Enoki (金针菇), Shiitake, King Oyster, Austernpilze, Mu-Err (木耳), Buchenpilze" },
      { emoji: "🥬", name: "Blattgemüse", items: "Napa-Kohl (白菜), Spinat, Chrysanthemen-Blätter (茼蒿) – sehr authentisch!, Pak Choi, Wasserspinach (空心菜)" },
      { emoji: "🫘", name: "Tofu-Familie", items: "Fester Tofu, Seiden-Tofu, gefrorener Tofu (冻豆腐, saugt Brühe auf!), Tofu-Haut gerollt (腐竹), Tofu-Stangen" },
      { emoji: "🌿", name: "Knollen & Wurzeln", items: "Lotus-Wurzel (莲藕) dünn geschnitten, Süßkartoffel, Yamswurzel (山药), Taro, Rettich (白萝卜)" },
      { emoji: "🍜", name: "Stärke & Nudeln", items: "Glasnudeln (粉丝), breite Süßkartoffelnudeln (宽粉) – UNBEDINGT!, Reisnudeln, Udon, Instant-Nudeln zum Schluss" },
      { emoji: "🍡", name: "Besonderes", items: "Reiskuchen (年糕), Sojabohnenknospen (黄豆芽), Maiskolben, Seitan" }
    ],
    seafood: [
      { emoji: "🦐", name: "虾 – Garnelen", time: "2–3 Min", items: "Roh, ganz oder geschält. Vorher entdarmen. In Pilzbrühe oder Kokosnuss-Brühe besonders gut.", tip: "In der Málà-Brühe nehmen sie die Schärfe perfekt an." },
      { emoji: "🐚", name: "扇贝 – Jakobsmuscheln", time: "1–2 Min", items: "Dünn geschnitten oder ganz (klein). Raus sobald sie opak werden – sonst gummiartig.", tip: "In Pilzbrühe oder Kokosnuss-Brühe am besten." },
      { emoji: "🦑", name: "鱿鱼 – Tintenfisch", time: "15–30 Sek", items: "In Ringe oder scored einschneiden (macht Blütenform). Sehr authentisch im Sichuan-Hotpot.", tip: "Extrem kurze Kochzeit! Übergart = Gummi." },
      { emoji: "🐟", name: "鱼片 – Fischfilet (mariniert)", time: "1–2 Min", items: "Tilapia, Bass, Lachs oder Kabeljau, hauchdünn. Marinade: 1 TL Stärke + 1 TL Sesamöl + ½ TL Shaoxing-Wein + Prise weißer Pfeffer, 15 Min.", tip: "Marinade verhindert Auseinanderfallen. In Pilzbrühe fantastisch." },
      { emoji: "⚪", name: "鱼丸 / 虾丸 – TK-Bällchen", time: "3–4 Min", items: "Im Asia-Markt TK: Fischbällchen (鱼丸), Garnelenbällchen (虾丸), Tintenfischbällchen (墨鱼丸). Federnde Textur = authentisch.", tip: "Die Klassiker – müssen nicht selbst gemacht werden." },
      { emoji: "🦪", name: "蛤蜊 – Venusmuscheln", time: "Bis sie aufgehen", items: "Vorher 1 Std. in Salzwasser wässern. Öffnen = gar. Geschlossen gebliebene wegwerfen.", tip: "Geben enorm viel Umami an die Brühe ab!" },
      { emoji: "🦐", name: "蟹棒 – Surimi/Krabbenstäbchen", time: "2 Min", items: "Im Asia-Markt in besserer Qualität (japanische Kamaboko-Variante).", tip: "Einfach, günstig, gut als Lückenfüller." }
    ],
    meat: [
      { emoji: "💥", name: "毛肚 – Wabenmagenstreifen", special: true, items: "Rinderpansen – Königsdisziplin im Sichuan-Hotpot. Nur 10–15 Sek. in Málà! Knackig, Textur pur. TK im Asia-Markt." },
      { emoji: "⚡", name: "黄喉 – Rinderschlagader", special: true, items: "Knorpelig, crunchig, kaum Eigengeschmack. 15 Sek. in der Brühe. Sehr authentisch, kaum bekannt in DE." },
      { emoji: "🌀", name: "鸭肠 – Entengedärm", special: true, items: "Gerollt, fedrig-knackig. 10 Sek. in der heißen Brühe. Polarisierend, aber das authentischste Erlebnis." },
      { emoji: "🥩", name: "Rindfleisch / Lamm", items: "Hauchdünne Rindfleisch-Scheiben (肥牛) oder Lammscheiben (羊肉片) – für Hotpot vorgeschnitten kaufen (TK, Asia-Markt)" }
    ]
  },
  sideDishes: {
    coldVegan: [
      {
        emoji: "🥒", name: "拍黄瓜 – Smashed Cucumber", time: "10 Min",
        recipe: "Gurke mit Messerrücken zerschlagen, in Stücke brechen, 1 TL Salz 10 Min. ziehen, abgießen. Dressing: 2 Knoblauchzehen gerieben + 1 EL Reisessig + 1 EL Sojasoße + 1 TL Sesamöl + 1 TL Chiliöl + 1 TL Zucker. Frischer Koriander drüber.",
        note: "Das bekannteste chinesische Cold Dish. Pflicht."
      },
      {
        emoji: "🌿", name: "凉拌木耳 – Mu-Err-Pilz-Salat", time: "15 Min + Einweichen",
        recipe: "30 Min. einweichen, 2 Min. blanchieren, kalt abschrecken. Dressing: 2 EL Sojasoße + 1 EL Reisessig + 1 TL Chiliöl + 1 TL Sesamöl + 1 Knoblauchzehe + Chili + Frühlingszwiebel + Koriander.",
        note: "Knackig, leicht gelartig. Sehr authentisch."
      },
      {
        emoji: "🫘", name: "凉拌豆腐皮 – Tofu-Haut-Salat", time: "10 Min + Einweichen",
        recipe: "Getrocknete Tofu-Haut (腐竹) 20 Min. einweichen, in Streifen. Dressing: Sojasoße + Sesamöl + Reisessig + Chiliöl + Frühlingszwiebel + Koriander. Optional: Karottenjulienne.",
        note: "Gut vorzubereiten, befriedigendes Kauerlebnis."
      },
      {
        emoji: "🥜", name: "香辣花生 – Würzige Erdnüsse", time: "20 Min",
        recipe: "Rohe Erdnüsse in Wasser mit 2 Sternanis + 1 Zimtstange + 2 EL Sojasoße + 1 TL Sichuan-Pfeffer + Salz 15 Min. kochen. Abkühlen. Alternativ: trocken rösten + Chiliöl + Salz.",
        note: "Klassischer Restaurantsnack. Stunden vorher machbar."
      },
      {
        emoji: "🥗", name: "凉拌粉皮 – Glasnudel-Salat", time: "15 Min",
        recipe: "Glasnudeln 5 Min. kochen, kalt abschrecken. Gurke julienne, Karotte julienne, Koriander. Dressing: verdünnte Sesampaste (芝麻酱) + Sojasoße + Reisessig + Chiliöl + Knoblauch + Zucker.",
        note: "Sättigend, erfrischend. Gut als Basis vor dem Hotpot."
      },
      {
        emoji: "🥦", name: "腌萝卜 – Eingelegter Daikon", time: "1 Std. (besser über Nacht)",
        recipe: "Daikon (500g) dünn schneiden, 1 TL Salz 30 Min. ziehen, Wasser auspressen. Lake: 3 EL Reisessig + 2 EL Zucker + 1 TL Salz + optional Chili + Ingwer. Mindestens 1 Stunde ziehen.",
        note: "Reinigt den Gaumen zwischen den Brühen."
      }
    ],
    warmVegan: [
      {
        emoji: "🫓", name: "葱油饼 – Scallion Pancakes", time: "30 Min",
        recipe: "200g Mehl + 100ml heißes Wasser verkneten, 20 Min. ruhen. Dünn ausrollen, Sesamöl + Salz + Frühlingszwiebeln drauf, einrollen, flachdrücken. In Öl goldbraun braten (je 3 Min. Seite). Dip: Sojasoße + Reisessig + Chili.",
        note: "Knusprig außen, flockig innen. Klassisches Straßenessen."
      },
      {
        emoji: "🥟", name: "蒸饺 – Gedämpfte Gemüse-Dumplings", time: "20 Min",
        recipe: "Fertiggyoza-Teig. Füllung: Tofu + Glasnudeln + Mu-Err-Pilze + Knoblauch + Ingwer + Sesamöl + Sojasoße + Fünf-Gewürze-Pulver. 8–10 Min. dampfgaren. Dip: Sojasoße + Reisessig.",
        note: "Kann vorbereitet und eingefroren werden."
      },
      {
        emoji: "🍢", name: "炸豆腐 – Knusprig gebratener Tofu", time: "15 Min",
        recipe: "Festen Tofu würfeln, gut abtupfen. In heißem Öl frittieren oder in Pfanne goldbraun braten. Dip: Sojasoße + Chiliöl + Sesamöl + Frühlingszwiebeln.",
        note: "Saugt Brühe perfekt auf wenn danach im Hotpot gedippt."
      },
      {
        emoji: "🌶️", name: "麻婆豆腐 – Mapo Tofu (leicht)", time: "20 Min",
        recipe: "Seiden-Tofu in Würfel. Wok: 1 EL Chiliöl + 1 EL Doubanjiang + Knoblauch + Ingwer + 1 TL Sichuan-Pfeffer anrösten. 200ml Gemüsebrühe + 1 EL Sojasoße + 1 TL Zucker. Tofu rein, 5 Min. köcheln. Mit Stärke binden. Frühlingszwiebeln + Sichuan-Pfeffer drüber.",
        note: "Vegan wenn kein Hackfleisch. Perfekt heiß als Beilage."
      },
      {
        emoji: "🫚", name: "炒年糕 – Gebratene Reiskuchen", time: "10 Min",
        recipe: "Reiskuchen (年糕) in 0,5 cm Scheiben. 2 Min. in heißem Öl braten. Sojasoße + Zucker + Sesamöl. Optional: Pak Choi oder Pilze mitbraten.",
        note: "Klebrig, chewy, leicht süßlich."
      },
      {
        emoji: "🥬", name: "蒜蓉炒菠菜 – Wok-Spinat mit Knoblauch", time: "5 Min",
        recipe: "Wok stark erhitzen, 2 EL Öl. 4–5 Knoblauchzehen grob gehackt kurz anrösten. Spinat oder Pak Choi rein, 2 Min. bei Maxhitze schwenken. 1 EL Sojasoße, 1 TL Sesamöl, Prise Zucker, weißer Pfeffer.",
        note: "Schnellst-mögliche Beilage. Wok hei (Wokgeschmack) macht's besonders."
      },
      {
        emoji: "🌱", name: "毛豆 – Gekochte Edamame", time: "10 Min",
        recipe: "Edamame in Schale in kochendem Salzwasser 5–7 Min. kochen. Abgießen. Heißes Dressing: 2 TL Sichuan-Pfeffer in Öl erhitzen, über Edamame gießen + Salz + optional Chili.",
        note: "Unkomplizierter Snack zum Nebenbei-Knabbern."
      },
      {
        emoji: "🍄", name: "香煎杏鲍菇 – Gebratene King-Oyster-Pilze", time: "10 Min",
        recipe: "King-Oyster-Pilze in dicke Scheiben schneiden. In Pfanne OHNE Öl bei mittlerer Hitze trocken anrösten bis goldbraun (zieht Feuchtigkeit raus). Dann 1 EL Öl + 2 EL Sojasoße + 1 TL Sesamöl + Frühlingszwiebeln. 2 Min. karamellisieren.",
        note: "Fleischige Textur, tief umami. Immer ein Hit."
      }
    ],
    meatSides: [
      {
        emoji: "🐾", name: "凤爪 – Hühnerfüße (Dim Sum Style)", time: "1,5 Std. (lohnt sich!)",
        recipe: "Hühnerklauen putzen, Nägel abschneiden. Blanchieren (3 Min.), kalt abschrecken. Bei 180°C frittieren bis goldbraun (5 Min.) – WICHTIG für Textur. Sofort in Eiswasser 1 Std. einweichen (Haut bläht sich auf). Sauce: Öl + Knoblauch + Ingwer + 2 EL fermentierte schwarze Bohnen (豆豉) + 1 EL Austernsauce + 1 EL Sojasoße + 1 TL Zucker + 1 TL Sesamöl. Hühnerfüße rein, 200ml Wasser, 45 Min. schmoren. 10 Min. dämpfen zum Servieren.",
        note: "Gelatinös, tief-würzig. Isst man mit den Händen. Knochen ausspucken."
      },
      {
        emoji: "🍗", name: "醉鸡 – Drunken Chicken (Kalt)", time: "Am Vortag!",
        recipe: "Hähnchenschenkel 20 Min. poachen. Lake: 300 ml Shaoxing-Wein (绍兴酒) + 100 ml Hühnerbrühe + 2 TL Salz + 1 TL Zucker + Frühlingszwiebeln + Ingwer aufkochen, abkühlen. Hähnchen 12+ Std. einlegen (Kühlschrank). Kalt in Scheiben serviert.",
        note: "Das eleganteste Cold Dish. Intensives Shaoxing-Aroma."
      },
      {
        emoji: "🥩", name: "夫妻肺片 – Sichuan Cold Beef", time: "30 Min",
        recipe: "Rinderzunge oder Rindfleisch kochen bis zart, dünn aufschneiden. Dressing (大量!): Chiliöl + Sojasoße + Reisessig + Zucker + Sichuan-Pfeffer gemahlen + Knoblauch + Sesamöl + Sesam + Erdnüsse. Kalt.",
        note: "Eines der berühmtesten Sichuan-Gerichte. Feurig, numbing, süß-sauer."
      },
      {
        emoji: "🥟", name: "煎饺 – Pan-fried Pork Dumplings", time: "20 Min",
        recipe: "Fertige Gyoza. In Pfanne mit Öl 2 Min. anbraten. 50 ml Wasser dazu, Deckel, 5 Min. dampfen. Deckel ab, Wasser verdampfen lassen bis Boden knusprig. Dip: Sojasoße + Reisessig + Chiliöl.",
        note: "Knusprig unten, weich oben. Der Klassiker."
      },
      {
        emoji: "🌯", name: "炸春卷 – Frühlingsrollen", time: "30 Min",
        recipe: "Füllung: Schweinehack + Glasnudeln + Kohl + Karotte + Sojasoße + Sesamöl + Fünf-Gewürze. Einrollen. Bei 180°C frittieren 3–4 Min. bis goldbraun. Dip: süße Chilisauce oder Hoisin.",
        note: "Kann vorbereitet & direkt vor dem Essen frittiert werden."
      },
      {
        emoji: "🍖", name: "红烧猪蹄 – Geschmorte Schweinepfoten", time: "2 Std.",
        recipe: "Schweinepfoten halbieren, blanchieren (5 Min.), abspülen. In Topf: Öl + Zucker karamellisieren, Pfoten rein. 3 EL Sojasoße + 1 EL dunkle Sojasoße + 2 EL Shaoxing-Wein + Sternanis + Zimt + Knoblauch + Ingwer + Wasser bedecken. 1,5–2 Std. köcheln bis zart-klebrig.",
        note: "Gelatinös, schweinisch gut. Ähnlich wie Hühnerfüße – Collagen pur."
      }
    ]
  },
  drinks: {
    alcoholic: [
      {
        emoji: "🍺", name: "青岛啤酒 – Tsingtao Bier", tag: "KLASSIKER",
        desc: "Das authentischste Hotpot-Getränk. Kalte Lager-Biere kühlen die Málà-Schärfe perfekt. Tsingtao, Snow Beer (雪花) oder Harbin.",
        tip: "Kalt, kalt, kalt. Beim Hotpot trinkt man viel – leichtes Lager ist richtig."
      },
      {
        emoji: "🥃", name: "白酒 – Baijiu", tag: "TRADITIONAL",
        desc: "Das Nationalgetränk Chinas. 40–60% Vol. Aus fermentiertem Sorghum. Wird in kleinen Schalen getrunken, immer mit Essen. Einstieg: Jiang Xiaobai (江小白) – milder, moderner Stil. Klassisch: Erguotou (二锅头).",
        tip: "干杯 (Gānbēi) = Prost/Auf ex. Gesellschaftliches Ritual beim Hotpot."
      },
      {
        emoji: "🍶", name: "绍兴黄酒 – Shaoxing Huangjiu", tag: "ELEGANT",
        desc: "Chinesischer Reiswein, 15–18% Vol. Warm oder kalt. Tief, nussig, komplex. Passt ideal zur Kokosnuss-Brühe und den Cold Dishes.",
        tip: "Warm servieren (auf ~40°C erhitzen) für maximales Aroma – typisch für kalte Abende."
      },
      {
        emoji: "🍷", name: "干红葡萄酒 – Trockener Rotwein", tag: "MODERN",
        desc: "In China boomt Rotwein bei Hotpot. Grenache oder leichter Pinot Noir funktionieren gut zur Málà-Brühe. Riesling zur Pilzbrühe.",
        tip: "Wer kein Baijiu will: trockener Rotwein mit Sichuan-Schärfe ist überraschend gut."
      }
    ],
    nonAlcoholic: [
      {
        emoji: "🍵", name: "茉莉花茶 – Jasmin-Tee (heiß/kalt)", tag: "AUTHENTISCH",
        desc: "Der chinesische Hotpot-Klassiker. Heiß oder kalt. Jasmin reinigt den Gaumen nach Schärfe und fettem Fleisch.",
        tip: "Beim Hotpot-Restaurant in China immer Jasmin- oder grüner Tee auf dem Tisch."
      },
      {
        emoji: "🫖", name: "酸梅汤 – Saure Pflaumenlimo (kalt)", tag: "KÜHLEND",
        desc: "Traditionelles chinesisches Erfrischungsgetränk aus getrockneten Pflaumen, Hawthorn, Osmanthus-Blüten. Süß-säuerlich, erfrischend. Im Asia-Markt als Fertiggetränk (Wang Lao Ji, He Cha).",
        tip: "Perfekt gegen Überhitzung durch die Schärfe. Kalt und süß-sauer ist der Kontrast zur Brühe."
      },
      {
        emoji: "🧋", name: "奶茶 – Milk Tea (kalt)", tag: "MODERN",
        desc: "Chinesischer Milk Tea (不是 Bubble Tea): starker schwarzer Tee + Milch/Kondensmilch. Kalt mit Eis. Funktioniert überraschend gut zur Schärfe.",
        tip: "Milchfett neutralisiert Capsaicin besser als Wasser – Schärfe-Hack."
      },
      {
        emoji: "🥤", name: "菊花茶 – Chrysanthemen-Tee (kalt)", tag: "KÜHLEND",
        desc: "Getrocknete Chrysanthemenblüten aufbrühen, kalt stellen, Eiswürfel. Süß (Kandiszucker dazu), blumig, sehr erfrischend. Beliebt zu Sichuan-Essen.",
        tip: "In der TCM 'kühlend' – hilft subjektiv gegen die Hitze der Schärfe."
      }
    ]
  },
  tips: [
    "🔥 Split-Pot (鸳鸯锅): Málà auf einer Seite, Pilzbrühe auf der anderen. Meeresfrüchte in der Pilzbrühe – schmecken besser.",
    "⏱️ Kochzeiten einhalten: Tintenfisch/Innereien übergart = Gummi. Blattgemüse: 30 Sek. Tofu: 2–3 Min. Fisch: 1–2 Min. Garnelen: 2–3 Min.",
    "🦐 Meeresfrüchte-Reihenfolge: Erst Muscheln (lange), dann Fischbällchen, dann Garnelen & Scallops, Tintenfisch zuletzt (nur Sekunden!).",
    "🥢 Vegan first: In geteiltem Topf – Pilzbrühe für vegane Zutaten & Meeresfrüchte, Málà für Fleisch & Innereien.",
    "🛒 Einkauf Asia-Markt: Doubanjiang, Shacha-Sauce (Bullhead!), Sesampaste, Glasnudeln, Tofu-Haut, Fisch-/Garnelenbällchen (TK), 毛肚 (TK), Reiskuchen, Hühnerklauen.",
    "🍜 Finale: Am Ende Nudeln & Reiskuchen in die Brühe – sie ist dann am reichsten."
  ]
};

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: GOLD, marginBottom: 14, borderBottom: `1px solid ${GOLD}33`, paddingBottom: 8 }}>{title}</div>
      {children}
    </div>
  );
}

function BrothCard({ b }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: CARD, border: `1px solid ${b.color}44`, borderRadius: 8, marginBottom: 10, overflow: "hidden" }}>
      <div onClick={() => setOpen(!open)} style={{ padding: "12px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <span style={{ background: `${b.color}22`, border: `1px solid ${b.color}66`, color: b.color, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, letterSpacing: 1 }}>{b.tag}</span>
          <div style={{ color: b.color, fontSize: 14, fontWeight: 700, fontFamily: "'Noto Serif SC', serif", marginTop: 5 }}>{b.zh}</div>
          <div style={{ color: LIGHT, fontSize: 13, marginTop: 1 }}>{b.de}</div>
          <div style={{ color: MUTED, fontSize: 11, marginTop: 4 }}>{b.desc}</div>
        </div>
        <div style={{ color: GOLD, fontSize: 14, flexShrink: 0, marginTop: 4 }}>{open ? "▲" : "▼"}</div>
      </div>
      {open && (
        <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${b.color}22` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
            <div>
              <div style={{ color: GOLD, fontSize: 10, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>ZUTATEN</div>
              <ul style={{ margin: 0, paddingLeft: 14 }}>
                {b.zutaten.map((z, i) => <li key={i} style={{ color: LIGHT, fontSize: 11, marginBottom: 5, lineHeight: 1.5 }}>{z}</li>)}
              </ul>
            </div>
            <div>
              <div style={{ color: GOLD, fontSize: 10, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>ZUBEREITUNG</div>
              {b.steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 7, marginBottom: 7 }}>
                  <span style={{ background: b.color, color: "#fff", width: 17, height: 17, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                  <span style={{ color: LIGHT, fontSize: 11, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SideDishCard({ item, accentColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: CARD, border: `1px solid ${accentColor}33`, borderRadius: 8, marginBottom: 8, overflow: "hidden" }}>
      <div onClick={() => setOpen(!open)} style={{ padding: "11px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 20, flexShrink: 0 }}>{item.emoji}</span>
        <div style={{ flex: 1 }}>
          <div style={{ color: LIGHT, fontWeight: 700, fontSize: 13 }}>{item.name}</div>
          <div style={{ color: MUTED, fontSize: 11, marginTop: 1 }}>⏱ {item.time} · {item.note}</div>
        </div>
        <div style={{ color: accentColor, fontSize: 13 }}>{open ? "▲" : "▼"}</div>
      </div>
      {open && (
        <div style={{ padding: "0 14px 12px", borderTop: `1px solid ${accentColor}22` }}>
          <div style={{ color: "#cbb090", fontSize: 12, lineHeight: 1.7, marginTop: 10 }}>{item.recipe}</div>
        </div>
      )}
    </div>
  );
}

const ING_TABS = [
  { key: "vegan", label: "🌱 Vegan", color: GREEN },
  { key: "seafood", label: "🦐 Meeresfrüchte", color: BLUE },
  { key: "meat", label: "🥩 Fleisch/Innereien", color: RED }
];

const SIDE_TABS = [
  { key: "coldVegan", label: "❄️ Kalt Vegan", color: TEAL },
  { key: "warmVegan", label: "🔥 Warm Vegan", color: GREEN },
  { key: "meatSides", label: "🍗 Fleisch-Beilagen", color: RED }
];

const DRINK_TABS = [
  { key: "alcoholic", label: "🍺 Alkoholisch", color: GOLD },
  { key: "nonAlcoholic", label: "🍵 Alkoholfrei", color: TEAL }
];

export default function HotpotGuide() {
  const [ingTab, setIngTab] = useState("vegan");
  const [sideTab, setSideTab] = useState("coldVegan");
  const [drinkTab, setDrinkTab] = useState("alcoholic");

  const sideColor = SIDE_TABS.find(t => t.key === sideTab).color;
  const drinkColor = DRINK_TABS.find(t => t.key === drinkTab).color;

  return (
    <div style={{ background: DARK, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: LIGHT, padding: "22px 14px", maxWidth: 940, margin: "0 auto" }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap" rel="stylesheet" />

      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 36, marginBottom: 4 }}>🫕</div>
        <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 24, color: GOLD, letterSpacing: 2 }}>火锅 HOTPOT</div>
        <div style={{ color: MUTED, fontSize: 10, marginTop: 4, letterSpacing: 3 }}>AUTHENTISCHES GUIDE — HEUTE ABEND</div>
      </div>

      {/* Broths */}
      <Section title="锅底 — Brühen (klick zum Aufklappen)">
        {data.broths.map(b => <BrothCard key={b.id} b={b} />)}
      </Section>

      {/* Dips */}
      <Section title="蘸料 — Dipping Sauces">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
          {data.dips.map((d, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${d.color}44`, borderRadius: 8, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                <div style={{ color: LIGHT, fontWeight: 700, fontSize: 12 }}>{d.name}</div>
                <span style={{ fontSize: 9, fontWeight: 700, color: d.color, border: `1px solid ${d.color}66`, padding: "1px 6px", borderRadius: 3 }}>{d.tag}</span>
              </div>
              <div style={{ color: "#cbb090", fontSize: 11, lineHeight: 1.6, marginBottom: 7 }}>{d.ingredients}</div>
              <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic" }}>{d.note}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cooking Ingredients incl. seafood tab */}
      <Section title="食材 — Zutaten zum Kochen im Topf">
        <div style={{ display: "flex", gap: 7, marginBottom: 12, flexWrap: "wrap" }}>
          {ING_TABS.map(({ key, label, color }) => (
            <button key={key} onClick={() => setIngTab(key)} style={{ background: ingTab === key ? color : "transparent", border: `1px solid ${color}`, color: ingTab === key ? "#fff" : color, padding: "5px 12px", borderRadius: 4, cursor: "pointer", fontSize: 11, fontWeight: 600 }}>{label}</button>
          ))}
        </div>

        {ingTab === "seafood" ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {data.cookingIngredients.seafood.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BLUE}44`, borderRadius: 8, padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 20 }}>{s.emoji}</span>
                    <div style={{ color: LIGHT, fontWeight: 700, fontSize: 12 }}>{s.name}</div>
                  </div>
                  <span style={{ background: `${BLUE}33`, color: "#7ab8d9", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4, whiteSpace: "nowrap", flexShrink: 0, marginLeft: 6 }}>⏱ {s.time}</span>
                </div>
                <div style={{ color: "#cbb090", fontSize: 11, lineHeight: 1.6, marginBottom: 5 }}>{s.items}</div>
                <div style={{ color: "#7ab8d9", fontSize: 11, fontStyle: "italic" }}>💡 {s.tip}</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {data.cookingIngredients[ingTab].map((item, i) => (
              <div key={i} style={{ background: CARD, border: item.special ? `1px solid ${GOLD}88` : "1px solid #3a2010", borderRadius: 8, padding: 12, position: "relative" }}>
                {item.special && <div style={{ position: "absolute", top: -1, right: 10, background: GOLD, color: DARK, fontSize: 9, fontWeight: 800, padding: "2px 7px", borderRadius: "0 0 4px 4px", letterSpacing: 1 }}>NEULAND</div>}
                <div style={{ fontSize: 18, marginBottom: 3 }}>{item.emoji}</div>
                <div style={{ color: item.special ? GOLD : LIGHT, fontWeight: 700, fontSize: 12, marginBottom: 3 }}>{item.name}</div>
                <div style={{ color: MUTED, fontSize: 11, lineHeight: 1.5 }}>{item.items}</div>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Side Dishes */}
      <Section title="小菜 — Side Dishes & Beilagen (klick für Rezept)">
        <div style={{ display: "flex", gap: 7, marginBottom: 12, flexWrap: "wrap" }}>
          {SIDE_TABS.map(({ key, label, color }) => (
            <button key={key} onClick={() => setSideTab(key)} style={{ background: sideTab === key ? color : "transparent", border: `1px solid ${color}`, color: sideTab === key ? "#fff" : color, padding: "5px 12px", borderRadius: 4, cursor: "pointer", fontSize: 11, fontWeight: 600 }}>{label}</button>
          ))}
        </div>
        {data.sideDishes[sideTab].map((item, i) => <SideDishCard key={i} item={item} accentColor={sideColor} />)}
      </Section>

      {/* Drinks */}
      <Section title="饮料 — Getränke">
        <div style={{ display: "flex", gap: 7, marginBottom: 12 }}>
          {DRINK_TABS.map(({ key, label, color }) => (
            <button key={key} onClick={() => setDrinkTab(key)} style={{ background: drinkTab === key ? color : "transparent", border: `1px solid ${color}`, color: drinkTab === key ? (key === "alcoholic" ? DARK : "#fff") : color, padding: "5px 12px", borderRadius: 4, cursor: "pointer", fontSize: 11, fontWeight: 600 }}>{label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {data.drinks[drinkTab].map((d, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${drinkColor}44`, borderRadius: 8, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 7 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 22 }}>{d.emoji}</span>
                  <div style={{ color: LIGHT, fontWeight: 700, fontSize: 12 }}>{d.name}</div>
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, color: drinkColor, border: `1px solid ${drinkColor}66`, padding: "1px 6px", borderRadius: 3, whiteSpace: "nowrap", flexShrink: 0, marginLeft: 6 }}>{d.tag}</span>
              </div>
              <div style={{ color: "#cbb090", fontSize: 11, lineHeight: 1.6, marginBottom: 7 }}>{d.desc}</div>
              <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic" }}>💡 {d.tip}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tips */}
      <Section title="🔑 Wichtige Tipps">
        {data.tips.map((t, i) => (
          <div key={i} style={{ background: CARD, borderLeft: `3px solid ${GOLD}`, padding: "9px 14px", borderRadius: "0 6px 6px 0", marginBottom: 7, fontSize: 12, color: LIGHT, lineHeight: 1.6 }}>{t}</div>
        ))}
      </Section>
    </div>
  );
}
