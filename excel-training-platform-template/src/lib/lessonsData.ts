import type { LessonData, QuizQuestion } from './types';

// Excel 2017+ Rus tilida formulalar
export const foundationLessons: LessonData[] = [
  {
    n:1,
    d:'Shanba',
    t:'Excel interfeys + jadval yaratish',
    desc:'Excel 2017+ oynasini tanib olamiz va birinchi jadvalimizni yaratamiz.',
    items:['Excel oynasini ochish','Ustunlar (Столбцы) — A,B,C,D','Qatorlar (Строки) — 1,2,3,4','Katak (Ячейка) — B4','Varaq (Лист)','Jadval tuzish','Oddiy formatlash'],
    keys:[['Ctrl+B','Жирный (Qalin)'],['Ctrl+S','Сохранить (Saqlash)'],['Ctrl+Z','Отменить (Bekor)'],['Ctrl+C','Копировать (Nusxa)'],['Ctrl+V','Вставить (Joylashtirish)'],['Ctrl+Home','Boshiga']],
    tables:[{
      label:'📊 Kirim-chiqim jadvali',
      h:['','B','C','D','E','F'],
      hr:['Ism','Kirim','Chiqim','Bonus','Jami'],
      hc:['var(--acc)','var(--green)','var(--red)','var(--yellow)','#4b5563'],
      rows:[['2','Sherzod','10 000','3 400','200','6 800'],['3','Ali','15 000','4 200','350','11 150'],['4','Madina','8 000','5 100','150','3 050'],['5','Aziza','12 000','2 800','180','9 380']],
      st:[[0,'cv2','cg','cr','cy','cb'],[0,'cv2','cg','cr','cy','cb'],[0,'cv2','cg','cr','cy','cb'],[0,'cv2','cg','cr','cy','cb']],
      f:'F2 = C2 - D2 + E2',
      fd:'Kirim - Chiqim + Bonus = Jami'
    }],
    sc:[['Ctrl+B','Жирный'],['Границы','Chegara'],['Заливка','Rang'],['Числовой','Son formati'],['Объединить','Birlashtirish'],['Ctrl+Z','Отменить']],
    bog:null,
    nat:"O'quvchi birinchi jadvalini yaratadi",
    files:['01_Mashq.xlsx','01_Yechim.xlsx']
  },
  {
    n:2,
    d:'Yakshanba',
    t:'Asosiy formulalar — СУММ, СРЗНАЧ, МИН, МАКС',
    desc:'Excelning eng muhim 4 ta formulasini o\'rganamiz (rus tilida).',
    items:['СУММ — yig\'indi (SUM)','СРЗНАЧ — o\'rtacha (AVERAGE)','МИН — eng kichik (MIN)','МАКС — eng katta (MAX)','Formulani yozish','Автосумма'],
    keys:[['Alt+=','Автосумма'],['Ctrl+S','Сохранить'],['Tab','Keyingi katak'],['Enter','Tasdiqlash'],['F2','Tahrirlash'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 1-qadam: Boshlang\'ich',
      h:['','A','B','C','D'],
      hr:['Ism','1-kun','2-kun','3-kun'],
      hc:['var(--acc)','var(--green)','var(--green)','var(--green)'],
      rows:[['2','Sherzod','10 000','15 000','8 000'],['3','Ali','12 000','9 000','14 000'],['4','Madina','8 000','11 000','7 000']],
      st:[[0,'cv2','cg','cg','cg'],[0,'cv2','cg','cg','cg'],[0,'cv2','cg','cg','cg']],
      f:null,
      fd:null
    },{
      label:'📊 2-qadam: Natija',
      h:['','A','B','C','D','E','F'],
      hr:['Ism','1-kun','2-kun','3-kun','JAMI','O\'RTACHA'],
      hc:['var(--acc)','var(--green)','var(--green)','var(--green)','var(--blue)','var(--yellow)'],
      rows:[['2','Sherzod','10 000','15 000','8 000','33 000','11 000'],['3','Ali','12 000','9 000','14 000','35 000','11 667'],['4','Madina','8 000','11 000','7 000','26 000','8 667'],['5','','','','','',''],['6','МИН','8 000','9 000','7 000','26 000','8 667'],['7','МАКС','12 000','15 000','14 000','35 000','11 667']],
      st:[[0,'cv2','cg','cg','cg','cb','cy'],[0,'cv2','cg','cg','cg','cb','cy'],[0,'cv2','cg','cg','cg','cb','cy'],[0,0,0,0,0,0,0],[0,'cr','cr','cr','cr','cr','cr'],[0,'cg','cg','cg','cg','cg','cg']],
      f:'E2 = СУММ(B2:D2)\nF2 = СРЗНАЧ(B2:D2)\nB6 = МИН(B2:B4)\nB7 = МАКС(B2:B4)',
      fd:'СУММ—jami, СРЗНАЧ—o\'rtacha, МИН—eng kichik, МАКС—eng katta'
    }],
    sc:[['СУММ','Yig\'indi'],['СРЗНАЧ','O\'rtacha'],['МИН','Eng kichik'],['МАКС','Eng katta'],['Alt+=','Автосумма'],['F2','Tahrirlash']],
    bog:'1-dars',
    nat:'Hisobli jadval',
    files:['02_Formulalar_Mashq.xlsx','02_Formulalar_Yechim.xlsx']
  },
  {
    n:3,
    d:'Shanba',
    t:'ЕСЛИ — mantiqiy formula',
    desc:'ЕСЛИ — "Agar shart bajarilsa shunday qil" degan mantiq (rus tilida IF = ЕСЛИ).',
    items:['ЕСЛИ — shartli formula','Вложенные ЕСЛИ (Nested IF)','Mantiq tuzish','ИСТИНА va ЛОЖЬ'],
    keys:[['=ЕСЛИ(','Formulani boshlash'],['Ctrl+S','Сохранить'],['F2','Tahrirlash'],['Tab','Keyingi'],['Ctrl+Z','Отменить'],['Alt+=','Автосумма']],
    tables:[{
      label:'📊 1-qadam',
      h:['','A','B'],
      hr:['Ism','Ball'],
      hc:['var(--acc)','var(--blue)'],
      rows:[['2','Sherzod','85'],['3','Ali','45'],['4','Madina','72'],['5','Sardor','58']],
      st:[[0,'cv2','cb'],[0,'cv2','cr'],[0,'cv2','cy'],[0,'cv2','cr']],
      f:null,
      fd:null
    },{
      label:'📊 2-qadam: Natija',
      h:['','A','B','C','D'],
      hr:['Ism','Ball','Natija','Daraja'],
      hc:['var(--acc)','var(--blue)','var(--green)','var(--yellow)'],
      rows:[['2','Sherzod','85','O\'tdi','Yaxshi'],['3','Ali','45','Yiqildi','Yomon'],['4','Madina','72','O\'tdi','O\'rta'],['5','Sardor','58','Yiqildi','Yomon']],
      st:[[0,'cv2','cb','cg','cy'],[0,'cv2','cb','cr','cr'],[0,'cv2','cb','cg','cy'],[0,'cv2','cb','cr','cr']],
      f:'C2 = ЕСЛИ(B2>=60;"O\'tdi";"Yiqildi")\nD2 = ЕСЛИ(B2>=80;"Yaxshi";ЕСЛИ(B2>=60;"O\'rta";"Yomon"))',
      fd:'C — oddiy ЕСЛИ, D — Вложенные ЕСЛИ (ichma-ich)'
    }],
    sc:[['ЕСЛИ','Shartli'],['>=','Katta-teng'],['<=','Kichik-teng'],['ИСТИНА','To\'g\'ri'],['ЛОЖЬ','Noto\'g\'ri'],['Вложенные','Ichma-ich']],
    bog:'2-dars',
    nat:'Aqlli hisob',
    files:['03_ESLI_Mashq.xlsx','03_ESLI_Yechim.xlsx']
  },
  {
    n:4,
    d:'Yakshanba',
    t:'СЧЁТЕСЛИ va СУММЕСЛИ',
    desc:'СЧЁТЕСЛИ — sanaydi, СУММЕСЛИ — yig\'adi (rus tilida COUNTIF, SUMIF).',
    items:['СЧЁТЕСЛИ — shartli sanash','СУММЕСЛИ — shartli yig\'ish','Matn shartlari','Son shartlari'],
    keys:[['СЧЁТЕСЛИ','Shartli sanash'],['СУММЕСЛИ','Shartli yig\'ish'],['Ctrl+S','Сохранить'],['F2','Tahrirlash'],['Tab','Keyingi'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 1-qadam',
      h:['','A','B','C','D'],
      hr:['Ism','Mahsulot','Soni','Narxi'],
      hc:['var(--acc)','var(--purple)','var(--blue)','var(--green)'],
      rows:[['2','Sherzod','Olma','10','50 000'],['3','Ali','Nok','5','40 000'],['4','Madina','Olma','8','40 000'],['5','Sardor','Nok','12','96 000'],['6','Aziza','Olma','6','30 000']],
      st:[[0,'cv2','cp2','cb','cg'],[0,'cv2','cp2','cb','cg'],[0,'cv2','cp2','cb','cg'],[0,'cv2','cp2','cb','cg'],[0,'cv2','cp2','cb','cg']],
      f:null,
      fd:null
    },{
      label:'📊 2-qadam: Natija',
      h:['','A','B'],
      hr:['Tahlil','Natija'],
      hc:['var(--acc)','var(--blue)'],
      rows:[['8','Olma necha marta:','3'],['9','Nok necha marta:','2'],['10','Olma jami:','120 000'],['11','Nok jami:','136 000']],
      st:[[0,'cv2','cb'],[0,'cv2','cb'],[0,'cv2','cg'],[0,'cv2','cg']],
      f:'B8 = СЧЁТЕСЛИ(B2:B6;"Olma")\nB9 = СЧЁТЕСЛИ(B2:B6;"Nok")\nB10 = СУММЕСЛИ(B2:B6;"Olma";D2:D6)\nB11 = СУММЕСЛИ(B2:B6;"Nok";D2:D6)',
      fd:'СЧЁТЕСЛИ — sanaydi, СУММЕСЛИ — yig\'adi'
    }],
    sc:[['СЧЁТЕСЛИ','Sanash'],['СУММЕСЛИ','Yig\'ish'],['СЧЁТЕСЛИМН','Ko\'p shartli'],['СУММЕСЛИМН','Ko\'p shartli'],['*','Wildcard'],['?','1 belgi']],
    bog:'ЕСЛИ',
    nat:'Shartli analiz',
    files:['04_SCHETESLI_Mashq.xlsx','04_SCHETESLI_Yechim.xlsx']
  },
  {
    n:5,
    d:'Shanba',
    t:'ВПР / ПРОСМОТРX',
    desc:'Bitta jadvaldan boshqa jadvalga qidirish (VLOOKUP = ВПР, XLOOKUP = ПРОСМОТРX).',
    items:['ВПР — vertikal qidiruv','ПРОСМОТРX — zamonaviy qidiruv (Excel 365/2021)','Qidiruv jadvali','#Н/Д xatosi'],
    keys:[['ВПР','Klassik qidiruv'],['ПРОСМОТРX','Zamonaviy (365+)'],['F2','Tahrir'],['Ctrl+S','Сохранить'],['Tab','Keyingi'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 Buyurtmalar',
      h:['','A','B','C'],
      hr:['Kod','Mahsulot','Soni'],
      hc:['var(--purple)','var(--acc)','var(--blue)'],
      rows:[['2','A01','','10'],['3','B02','','5'],['4','C03','','8']],
      st:[[0,'cp2','cv2','cb'],[0,'cp2','cv2','cb'],[0,'cp2','cv2','cb']],
      f:null,
      fd:null
    },{
      label:'📊 Qidiruv jadvali',
      h:['','E','F','G'],
      hr:['Kod','Nomi','Narxi'],
      hc:['var(--purple)','var(--acc)','var(--green)'],
      rows:[['2','A01','Olma','5 000'],['3','B02','Nok','8 000'],['4','C03','Uzum','3 000']],
      st:[[0,'cp2','cv2','cg'],[0,'cp2','cv2','cg'],[0,'cp2','cv2','cg']],
      f:'B2 = ВПР(A2;$E$2:$G$4;2;ЛОЖЬ)\n— yoki —\nB2 = ПРОСМОТРX(A2;E2:E4;F2:F4;"Topilmadi")',
      fd:'Kod bo\'yicha mahsulot nomini topadi'
    }],
    sc:[['ВПР','Vertikal'],['ПРОСМОТРX','Zamonaviy'],['ЛОЖЬ','Aniq moslik'],['ИСТИНА','Yaqin'],['ПОИСКПОЗ','Pozitsiya'],['ИНДЕКС','Qiymat']],
    bog:'Oldingi',
    nat:'Jadvallarni birlashtirish',
    files:['05_VPR_Mashq.xlsx','05_VPR_Yechim.xlsx']
  },
  {
    n:6,
    d:'Yakshanba',
    t:'Фильтр + Сортировка',
    desc:'Kerakli ma\'lumotni tez topish (Filter va Sort).',
    items:['Сортировка А-Я','Сортировка kattadan kichikka','Автофильтр','Ko\'p shartli filter'],
    keys:[['Ctrl+Shift+L','Автофильтр'],['Alt+↓','Filter menyu'],['Ctrl+S','Сохранить'],['Ctrl+Z','Отменить'],['Ctrl+Home','Boshiga'],['Ctrl+End','Oxiriga']],
    tables:[{
      label:'📊 OLDIN',
      h:['','A','B','C'],
      hr:['Ism','Shahar','Balans'],
      hc:['var(--acc)','var(--purple)','var(--green)'],
      rows:[['2','Ali','Toshkent','15 000'],['3','Madina','Samarqand','8 000'],['4','Sardor','Toshkent','22 000'],['5','Zarina','Buxoro','5 000'],['6','Jasur','Toshkent','18 000']],
      st:[[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg']],
      f:null,
      fd:null
    },{
      label:'📊 KEYIN (Filtrlangan)',
      h:['','A','B','C'],
      hr:['Ism','Shahar','Balans'],
      hc:['var(--acc)','var(--purple)','var(--green)'],
      rows:[['2','Ali','Toshkent','15 000'],['4','Sardor','Toshkent','22 000'],['6','Jasur','Toshkent','18 000']],
      st:[[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg']],
      f:'Автофильтр: Shahar = "Toshkent"',
      fd:'Faqat Toshkent shahri ko\'rinadi'
    }],
    sc:[['Ctrl+Shift+L','Автофильтр'],['А→Я','Kichikdan'],['Я→А','Kattadan'],['Настраиваемый','Maxsus'],['Очистить','Tozalash'],['Alt+↓','Menyu']],
    bog:'ВПР',
    nat:'Boshqariladigan data',
    files:['06_Filter_Mashq.xlsx','06_Filter_Yechim.xlsx']
  },
  {
    n:7,
    d:'Shanba',
    t:'Сводная таблица (Pivot Table)',
    desc:'Katta ma\'lumotlarni hisobot qilish uchun eng kuchli vosita.',
    items:['Сводная таблица yaratish','Guruhlash','Сумма/Количество/Среднее','Formatlash'],
    keys:[['Alt+N+V','Сводная таблица'],['Alt+F1','Диаграмма'],['Ctrl+S','Сохранить'],['Ctrl+Z','Отменить'],['F2','Tahrir'],['Ctrl+Shift+L','Фильтр']],
    tables:[{
      label:'📊 1-qadam: Boshlang\'ich data',
      h:['','A','B','C'],
      hr:['Ism','Oy','Sotuv'],
      hc:['var(--acc)','var(--purple)','var(--green)'],
      rows:[['2','Ali','Yanvar','5 000'],['3','Madina','Yanvar','8 000'],['4','Ali','Fevral','7 000'],['5','Madina','Fevral','12 000']],
      st:[[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg']],
      f:null,
      fd:null
    },{
      label:'📊 2-qadam: Сводная таблица natijasi',
      h:['','A','B','C','D'],
      hr:['Oy','Ali','Madina','JAMI'],
      hc:['var(--purple)','var(--blue)','var(--yellow)','var(--green)'],
      rows:[['2','Yanvar','5 000','8 000','13 000'],['3','Fevral','7 000','12 000','19 000']],
      st:[[0,'cp2','cb','cy','cg'],[0,'cp2','cb','cy','cg']],
      f:'Строки = Oy, Столбцы = Ism, Значения = СУММ(Sotuv)',
      fd:'Katta data → qisqa hisobot'
    }],
    sc:[['Alt+N+V','Сводная'],['Перетащить','Tortish'],['Сумма','Yig\'indi'],['Количество','Sanash'],['Среднее','O\'rtacha'],['Обновить','Yangilash']],
    bog:'Barcha data',
    nat:'Umumiy analiz',
    files:['07_Pivot_Mashq.xlsx','07_Pivot_Yechim.xlsx']
  },
  {
    n:8,
    d:'Yakshanba',
    t:'Mini Dashboard',
    desc:'Vizual ko\'rsatkichlar va grafiklar.',
    items:['KPI kartalari','Диаграммы (Grafiklar)','ALT+F1 — tezkor grafik','Formatlash'],
    keys:[['Alt+F1','Tezkor диаграмма'],['Ctrl+S','Сохранить'],['F11','Alohida varaq'],['Ctrl+1','Формат ячеек'],['Ctrl+B','Жирный'],['Ctrl+Shift+L','Фильтр']],
    tables:[{
      label:'📊 1-qadam: Data',
      h:['','A','B','C','D'],
      hr:['Oy','Sotuv','Xarajat','Foyda'],
      hc:['var(--purple)','var(--green)','var(--red)','var(--blue)'],
      rows:[['2','Yanvar','13 000','8 000','5 000'],['3','Fevral','19 000','10 000','9 000']],
      st:[[0,'cp2','cg','cr','cb'],[0,'cp2','cg','cr','cb']],
      f:null,
      fd:null
    },{
      label:'📊 2-qadam: KPI kartalari',
      h:['','A','B'],
      hr:['Ko\'rsatkich','Qiymat'],
      hc:['var(--acc)','var(--blue)'],
      rows:[['8','Jami sotuv','32 000'],['9','O\'rtacha','16 000']],
      st:[[0,'cv2','cg'],[0,'cv2','cy']],
      f:'B8 = СУММ(B2:B3)\nB9 = СРЗНАЧ(B2:B3)',
      fd:'Dashboard asosi'
    }],
    sc:[['Alt+F1','Диаграмма'],['Гистограмма','Ustunli'],['Круговая','Doiraviy'],['Линия','Chiziqli'],['F11','To\'liq'],['Ctrl+1','Format']],
    bog:'Сводная',
    nat:'Hisobot',
    files:['08_Dashboard_Mashq.xlsx','08_Dashboard_Yechim.xlsx']
  }
];

export const proLessons: LessonData[] = [
  {
    n:1,
    d:'1-hafta',
    t:'Murakkab formulalar — И, ИЛИ, ЕСЛИОШИБКА',
    desc:'Вложенные ЕСЛИ, И, ИЛИ — murakkab mantiq.',
    items:['Вложенные ЕСЛИ (Nested IF)','И — barcha shartlar (AND)','ИЛИ — biror shart (OR)','ЕСЛИОШИБКА — xatoni ushlash'],
    keys:[['И','Va (AND)'],['ИЛИ','Yoki (OR)'],['ЕСЛИОШИБКА','Xatoni yashirish'],['ЕСЛИ','Shart'],['F2','Tahrir'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 1-qadam',
      h:['','A','B','C'],
      hr:['Ism','Ball','Davomat'],
      hc:['var(--acc)','var(--blue)','var(--green)'],
      rows:[['2','Sherzod','85','95%'],['3','Ali','72','60%']],
      st:[[0,'cv2','cb','cg'],[0,'cv2','cb','cy']],
      f:null,
      fd:null
    },{
      label:'📊 2-qadam',
      h:['','A','B','C','D'],
      hr:['Ism','Ball','Davomat','Bonus'],
      hc:['var(--acc)','var(--blue)','var(--green)','var(--yellow)'],
      rows:[['2','Sherzod','85','95%','Bor'],['3','Ali','72','60%','Yo\'q']],
      st:[[0,'cv2','cb','cg','cg'],[0,'cv2','cb','cy','cr']],
      f:'D2 = ЕСЛИ(И(B2>=70;C2>=80%);"Bor";"Yo\'q")',
      fd:'И — ikki shart ham bajarilishi kerak'
    }],
    sc:[['И','Hammasi to\'g\'ri'],['ИЛИ','Biri to\'g\'ri'],['НЕ','Teskari'],['ЕСЛИОШИБКА','Xato'],['Вложенные','Ichma-ich'],['F2','Tahrir']],
    bog:null,
    nat:'Murakkab mantiq',
    files:['PRO_01_Murakkab_Mashq.xlsx','PRO_01_Murakkab_Yechim.xlsx']
  },
  {
    n:2,
    d:'1-hafta',
    t:'СУММЕСЛИМН — Ko\'p shartli yig\'ish',
    desc:'Ko\'p shartga mos yig\'ish (SUMIFS = СУММЕСЛИМН).',
    items:['СУММЕСЛИМН — ko\'p shartli yig\'ish','СЧЁТЕСЛИМН — ko\'p shartli sanash','Murakkab analiz'],
    keys:[['СУММЕСЛИМН','Ko\'p shartli yig\'ish'],['СЧЁТЕСЛИМН','Ko\'p shartli sanash'],['Ctrl+S','Сохранить'],['F2','Tahrir'],['Tab','Keyingi'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 1-qadam',
      h:['','A','B','C','D'],
      hr:['Sotuvchi','Shahar','Oy','Sotuv'],
      hc:['var(--acc)','var(--purple)','var(--blue)','var(--green)'],
      rows:[['2','Ali','Toshkent','Yanvar','15 000'],['3','Ali','Toshkent','Fevral','20 000'],['4','Ali','Samarqand','Yanvar','8 000'],['5','Madina','Toshkent','Yanvar','12 000']],
      st:[[0,'cv2','cp2','cb','cg'],[0,'cv2','cp2','cb','cg'],[0,'cv2','cp2','cb','cg'],[0,'cv2','cp2','cb','cg']],
      f:null,
      fd:null
    },{
      label:'📊 2-qadam',
      h:['','F','G'],
      hr:['Tahlil','Natija'],
      hc:['var(--acc)','var(--blue)'],
      rows:[['1','Ali + Toshkent jami:','35 000']],
      st:[[0,'cv2','cg']],
      f:'G1 = СУММЕСЛИМН(D:D;A:A;"Ali";B:B;"Toshkent")',
      fd:'Faqat Ali va Toshkent shartlariga mos'
    }],
    sc:[['СУММЕСЛИМН','Ko\'p shart yig\'ish'],['СЧЁТЕСЛИМН','Ko\'p shart sanash'],['СРЗНАЧЕСЛИМН','Ko\'p shart o\'rtacha'],['>=','Katta-teng'],['<=','Kichik-teng'],['<>','Teng emas']],
    bog:'1-dars',
    nat:'Kuchli analiz',
    files:['PRO_02_SUMMESLIMN_Mashq.xlsx','PRO_02_SUMMESLIMN_Yechim.xlsx']
  },
  {
    n:3,
    d:'2-hafta',
    t:'ПРОСМОТРX kengaytirilgan',
    desc:'ПРОСМОТРX (XLOOKUP) — zamonaviy qidiruv (Excel 365/2021+).',
    items:['Ko\'p ustunli natija','Xato ushlash (if_not_found)','Yaqin moslik'],
    keys:[['ПРОСМОТРX','Zamonaviy qidiruv'],['ЕСЛИОШИБКА','Xato ushlash'],['F2','Tahrir'],['Ctrl+S','Сохранить'],['Tab','Keyingi'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 Xodimlar bazasi',
      h:['','A','B','C','D'],
      hr:['ID','Ism','Bo\'lim','Maosh'],
      hc:['var(--acc)','var(--blue)','var(--purple)','var(--green)'],
      rows:[['2','101','Sherzod','IT','8 000 000'],['3','102','Madina','HR','6 000 000'],['4','103','Ali','IT','7 500 000']],
      st:[[0,'cp2','cv2','cp2','cg'],[0,'cp2','cv2','cp2','cg'],[0,'cp2','cv2','cp2','cg']],
      f:null,
      fd:null
    },{
      label:'📊 Qidiruv',
      h:['','F','G'],
      hr:['Savol','Javob'],
      hc:['var(--acc)','var(--green)'],
      rows:[['1','ID kiriting:','103'],['2','Ism:','Ali'],['3','Maosh:','7 500 000']],
      st:[[0,'cv2','cb'],[0,'cv2','cg'],[0,'cv2','cg']],
      f:'G2 = ПРОСМОТРX(G1;A2:A4;B2:B4;"Topilmadi")\nG3 = ПРОСМОТРX(G1;A2:A4;D2:D4;0)',
      fd:'ID bo\'yicha barcha ma\'lumotni topadi'
    }],
    sc:[['ПРОСМОТРX','Qidiruv'],['ПОИСКПОЗ','Pozitsiya'],['ИНДЕКС','Qiymat'],['ЕСЛИОШИБКА','Xato'],['F4','Qulf ($)'],['ЛОЖЬ','Aniq']],
    bog:'ВПР',
    nat:'Professional qidiruv',
    files:['PRO_03_PROSMOTRIX_Mashq.xlsx','PRO_03_PROSMOTRIX_Yechim.xlsx']
  },
  {
    n:4,
    d:'2-hafta',
    t:'Dinamik formulalar — УНИК, СОРТ, ФИЛЬТР',
    desc:'Excel 365/2021+ dinamik array formulalar (UNIQUE, SORT, FILTER).',
    items:['УНИК — takrorlanmaydigan qiymatlar','СОРТ — tartiblash','ФИЛЬТР — shartli ajratish'],
    keys:[['УНИК','Unikal (UNIQUE)'],['СОРТ','Tartiblash (SORT)'],['ФИЛЬТР','Filter (FILTER)'],['Ctrl+S','Сохранить'],['F2','Tahrir'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 Ma\'lumotlar',
      h:['','A','B','C'],
      hr:['Ism','Shahar','Sotuv'],
      hc:['var(--acc)','var(--purple)','var(--green)'],
      rows:[['2','Ali','Toshkent','15 000'],['3','Madina','Buxoro','8 000'],['4','Ali','Samarqand','12 000'],['5','Sardor','Toshkent','20 000']],
      st:[[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg'],[0,'cv2','cp2','cg']],
      f:null,
      fd:null
    },{
      label:'📊 Natijalar',
      h:['','E','F','G'],
      hr:['УНИК','СОРТ','ФИЛЬТР'],
      hc:['var(--blue)','var(--yellow)','var(--green)'],
      rows:[['1','Ali','8 000','Ali - 15 000'],['2','Madina','12 000','Sardor - 20 000'],['3','Sardor','15 000','']],
      st:[[0,'cb','cy','cg'],[0,'cb','cy','cg'],[0,'cb','cy','cg']],
      f:'E1 = УНИК(A2:A5)\nF1 = СОРТ(C2:C5)\nG1 = ФИЛЬТР(A2:C5;C2:C5>=15000)',
      fd:'Dinamik natijalar — avtomatik yangilanadi'
    }],
    sc:[['УНИК','Unikal'],['СОРТ','Tartiblash'],['ФИЛЬТР','Ajratish'],['ПОСЛЕД','Ketma-ket'],['СЛУЧМАССИВ','Tasodifiy'],['СОРТПО','Saralash']],
    bog:'3-dars',
    nat:'Avtomatik jadval',
    files:['PRO_04_Dinamik_Mashq.xlsx','PRO_04_Dinamik_Yechim.xlsx']
  },
  {
    n:5,
    d:'3-hafta',
    t:'Real loyiha — Zakaz tizimi',
    desc:'Haqiqiy zakaz bazasini yaratish va tahlil qilish.',
    items:['Zakaz bazasi tuzish','Formulalar qo\'llash','KPI tahlil'],
    keys:[['СЧЁТЗ','Bo\'sh emaslarni sanash'],['СУММЕСЛИ','Shartli yig\'ish'],['СРЗНАЧ','O\'rtacha'],['Ctrl+S','Сохранить'],['Ctrl+T','Таблица'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 Buyurtmalar bazasi',
      h:['','A','B','C','D','E'],
      hr:['Zakaz#','Sana','Mijoz','Mahsulot','Summa'],
      hc:['var(--acc)','var(--blue)','var(--purple)','var(--yellow)','var(--green)'],
      rows:[['2','Z001','01.01.2024','Bobur','Telefon','6 000 000'],['3','Z002','02.01.2024','Nilufar','Noutbuk','8 000 000'],['4','Z003','03.01.2024','Bobur','Naushnik','500 000']],
      st:[[0,'cp2','cb','cv2','cy','cg'],[0,'cp2','cb','cv2','cy','cg'],[0,'cp2','cb','cv2','cy','cg']],
      f:null,
      fd:null
    },{
      label:'📊 KPI Tahlil',
      h:['','H','I'],
      hr:['Ko\'rsatkich','Natija'],
      hc:['var(--acc)','var(--green)'],
      rows:[['1','Jami zakazlar:','3'],['2','Jami summa:','14 500 000'],['3','O\'rtacha chek:','4 833 333'],['4','Bobur zakazlari:','6 500 000']],
      st:[[0,'cv2','cg'],[0,'cv2','cg'],[0,'cv2','cy'],[0,'cv2','cb']],
      f:'I1 = СЧЁТЗ(A2:A100)\nI2 = СУММ(E:E)\nI3 = СРЗНАЧ(E2:E100)\nI4 = СУММЕСЛИ(C:C;"Bobur";E:E)',
      fd:'Real loyiha asosi'
    }],
    sc:[['СЧЁТЗ','Bo\'sh emaslar'],['СУММ','Yig\'indi'],['СУММЕСЛИ','Shartli'],['СЧЁТЕСЛИ','Sanash'],['СРЗНАЧ','O\'rtacha'],['Ctrl+T','Таблица']],
    bog:'Barcha bilimlar',
    nat:'Loyiha skeleti',
    files:['PRO_05_Zakaz_Mashq.xlsx','PRO_05_Zakaz_Yechim.xlsx']
  },
  {
    n:6,
    d:'3-hafta',
    t:'Data cleaning — Ma\'lumotlarni tozalash',
    desc:'Noto\'g\'ri ma\'lumotlarni tuzatish formulalari.',
    items:['ПРОПНАЧ — Bosh harf (PROPER)','СЖПРОБЕЛЫ — Bo\'shliqlarni olib tashlash (TRIM)','ПЕЧСИМВ — Maxsus belgilarni tozalash (CLEAN)','ПОДСТАВИТЬ — Almashtirish (SUBSTITUTE)'],
    keys:[['ПРОПНАЧ','Bosh harf'],['СЖПРОБЕЛЫ','Bo\'shliq tozalash'],['ПЕЧСИМВ','Maxsus belgilar'],['ПОДСТАВИТЬ','Almashtirish'],['ДЛСТР','Uzunlik'],['НАЙТИ','Topish']],
    tables:[{
      label:'📊 Noto\'g\'ri data',
      h:['','A','B'],
      hr:['Ism','Telefon'],
      hc:['var(--acc)','var(--blue)'],
      rows:[['2','sherzod','  90-123-45-67  '],['3','ALI','tel:90123'],['4','  madina  ','901234567']],
      st:[[0,'cr','cr'],[0,'cr','cr'],[0,'cr','cr']],
      f:null,
      fd:null
    },{
      label:'📊 Tozalangan',
      h:['','C','D'],
      hr:['Ism','Telefon'],
      hc:['var(--acc)','var(--blue)'],
      rows:[['2','Sherzod','901234567'],['3','Ali','90123'],['4','Madina','901234567']],
      st:[[0,'cg','cg'],[0,'cg','cg'],[0,'cg','cg']],
      f:'C2 = ПРОПНАЧ(СЖПРОБЕЛЫ(A2))\nD2 = ПОДСТАВИТЬ(ПОДСТАВИТЬ(СЖПРОБЕЛЫ(B2);"-";"");"tel:";"")',
      fd:'Toza va standart data'
    }],
    sc:[['ПРОПНАЧ','Bosh Harf'],['СЖПРОБЕЛЫ','Bo\'shliq'],['ПЕЧСИМВ','Tozalash'],['ПОДСТАВИТЬ','Almashtir'],['ДЛСТР','Uzunlik'],['ЗНАЧЕН','Songa']],
    bog:'5-dars',
    nat:'Toza data',
    files:['PRO_06_Cleaning_Mashq.xlsx','PRO_06_Cleaning_Yechim.xlsx']
  },
  {
    n:7,
    d:'4-hafta',
    t:'Dashboard PRO — ИНДЕКС + ПОИСКПОЗ',
    desc:'Professional KPI dashboard — ИНДЕКС va ПОИСКПОЗ kombinatsiyasi.',
    items:['KPI kartalari','ИНДЕКС — qiymatni olish','ПОИСКПОЗ — pozitsiyani topish','Murakkab grafiklar'],
    keys:[['ИНДЕКС','Qiymat olish'],['ПОИСКПОЗ','Pozitsiya topish'],['Ctrl+1','Формат ячеек'],['Alt+F1','Диаграмма'],['Ctrl+B','Жирный'],['F11','Alohida varaq']],
    tables:[{
      label:'📊 KPI data',
      h:['','A','B','C','D'],
      hr:['Oy','Sotuv','Xarajat','Foyda'],
      hc:['var(--acc)','var(--green)','var(--red)','var(--blue)'],
      rows:[['2','Yanvar','25 000','18 000','7 000'],['3','Fevral','32 000','20 000','12 000'],['4','Mart','28 000','22 000','6 000']],
      st:[[0,'cp2','cg','cr','cb'],[0,'cp2','cg','cr','cb'],[0,'cp2','cg','cr','cb']],
      f:null,
      fd:null
    },{
      label:'📊 Dinamik Dashboard',
      h:['','G','H'],
      hr:['Ko\'rsatkich','Natija'],
      hc:['var(--acc)','var(--green)'],
      rows:[['1','Oy tanlang:','Fevral'],['2','Sotuv:','32 000'],['3','Foyda:','12 000']],
      st:[[0,'cv2','cb'],[0,'cv2','cg'],[0,'cv2','cy']],
      f:'H2 = ИНДЕКС(B2:B4;ПОИСКПОЗ(H1;A2:A4;0))\nH3 = ИНДЕКС(D2:D4;ПОИСКПОЗ(H1;A2:A4;0))',
      fd:'Oy tanlaganda natijalar avtomatik o\'zgaradi'
    }],
    sc:[['ИНДЕКС','Qiymat'],['ПОИСКПОЗ','Pozitsiya'],['МАКС','Eng katta'],['МИН','Eng kichik'],['Спарклайн','Mini grafik'],['Ctrl+1','Format']],
    bog:'6-dars',
    nat:'Professional dashboard',
    files:['PRO_07_Dashboard_Mashq.xlsx','PRO_07_Dashboard_Yechim.xlsx']
  },
  {
    n:8,
    d:'4-hafta',
    t:'Interaktiv dashboard — Срезы',
    desc:'Срезы (Slicer) — vizual filter paneli.',
    items:['Срезы yaratish','Dinamik filter','Временная шкала (Timeline)','Vizualizatsiya'],
    keys:[['Срезы','Vizual filter'],['Временная шкала','Sana filter'],['Alt+F1','Диаграмма'],['Ctrl+S','Сохранить'],['F5','Yangilash'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 Svodnya + Srezы',
      h:['','A','B'],
      hr:['Srez','Natija'],
      hc:['var(--acc)','var(--green)'],
      rows:[['2','Oy: Yanvar','13 000'],['3','Sotuvchi: Ali','5 000'],['4','Mahsulot: Telefon','8 000']],
      st:[[0,'cv2','cg'],[0,'cv2','cg'],[0,'cv2','cg']],
      f:'Срезы → Сводная таблица → Диаграмма',
      fd:'Bir tugma bilan filter'
    }],
    sc:[['Срезы','Vizual panel'],['Временная шкала','Sana'],['Сводная','Pivot'],['Диаграмма','Grafik'],['Обновить','Yangilash'],['Формат','Bezash']],
    bog:'7-dars',
    nat:'Interaktiv hisobot',
    files:['PRO_08_Srezy_Mashq.xlsx','PRO_08_Srezy_Yechim.xlsx']
  },
  {
    n:9,
    d:'5-hafta',
    t:'ChatGPT + Excel',
    desc:'AI yordamida formulalar yozish va xatolarni tuzatish.',
    items:['To\'g\'ri prompt yozish','Formula so\'rash','Xatolarni debug qilish'],
    keys:[['Prompt','Savol yozish'],['ChatGPT','AI yordamchi'],['Ctrl+C','Копировать'],['Ctrl+V','Вставить'],['F2','Tahrir'],['Ctrl+Z','Отменить']],
    tables:[{
      label:'📊 Prompt misollar',
      h:['','A','B'],
      hr:['Prompt','Natija'],
      hc:['var(--acc)','var(--green)'],
      rows:[['2','"3 ta shartli ЕСЛИ formulasi yoz"','=ЕСЛИ(...)'],['3','"СУММЕСЛИМН 2 shart bilan"','=СУММЕСЛИМН(...)'],['4','"#Н/Д xatosini qanday tuzataman?"','=ЕСЛИОШИБКА(...)']],
      st:[[0,'cv2','cg'],[0,'cv2','cg'],[0,'cv2','cg']],
      f:'Aniq savol = aniq natija\nKontekst bering: qanday data, nima natija kerak',
      fd:'AI — vaqt tejash vositasi'
    }],
    sc:[['Prompt','Savol'],['Context','Kontekst'],['Copy','Nusxalash'],['Test','Tekshirish'],['Refine','Yaxshilash'],['Debug','Xato topish']],
    bog:'Barcha formulalar',
    nat:'AI bilan tezroq ishlash',
    files:['PRO_09_ChatGPT_Qollanma.pdf']
  },
  {
    n:10,
    d:'5-hafta',
    t:'Avtomatlashtirish va optimallashtirish',
    desc:'Excel ni tezroq ishlashga sozlash.',
    items:['Sekin vs tez formulalar','Именованные диапазоны (Named Ranges)','Таблица (Table) afzalliklari'],
    keys:[['Ctrl+`','Formulalarni ko\'rsatish'],['F9','Qayta hisoblash'],['Ctrl+S','Сохранить'],['Ctrl+T','Таблица'],['F2','Tahrir'],['Alt+=','Автосумма']],
    tables:[{
      label:'📊 Tez vs Sekin',
      h:['','A','B','C'],
      hr:['Vazifa','Sekin','Tez'],
      hc:['var(--acc)','var(--red)','var(--green)'],
      rows:[['2','Qidiruv','ВПР','ПРОСМОТРX'],['3','Shartli yig\'ish','СУММ(ЕСЛИ(...))','СУММЕСЛИМН'],['4','Array','CSE formula','Dinamik array']],
      st:[[0,'cv2','cr','cg'],[0,'cv2','cr','cg'],[0,'cv2','cr','cg']],
      f:'Именованные диапазоны: Sotuv = $B$2:$B$100',
      fd:'Tez = samarali'
    }],
    sc:[['Ctrl+`','Formulalar'],['F9','Hisoblash'],['Ctrl+T','Таблица'],['Имя','Named Range'],['Вручную','Qo\'lda'],['F2','Tahrir']],
    bog:'9-dars',
    nat:'Samarali ishlash',
    files:['PRO_10_Optimizatsiya_Mashq.xlsx']
  },
  {
    n:11,
    d:'6-hafta',
    t:'VBA asoslari — Birinchi makros',
    desc:'VBA makroslar bilan avtomatlashtirish.',
    items:['VBA muhiti — Alt+F11','Sub protsedura','MsgBox — xabar ko\'rsatish','Range — kataklar bilan ishlash'],
    keys:[['Alt+F11','VBA muhiti'],['F5','Makrosni ishga tushirish'],['Ctrl+S','Сохранить'],['Sub','Protsedura boshlash'],['End Sub','Yakunlash'],['MsgBox','Xabar']],
    tables:[{
      label:'📊 Birinchi makros',
      h:['','A','B'],
      hr:['Buyruq','Vazifa'],
      hc:['var(--acc)','var(--green)'],
      rows:[['2','Sub Salom()','Protsedura boshlash'],['3','MsgBox "Salom!"','Xabar chiqarish'],['4','End Sub','Yakunlash']],
      st:[[0,'cb','cg'],[0,'cb','cg'],[0,'cb','cg']],
      f:'Sub Salom()\n    MsgBox "Salom, Excel Qirolligi!"\nEnd Sub',
      fd:'Alt+F11 → Insert → Module → Kod yozing → F5'
    }],
    sc:[['Alt+F11','VBA'],['F5','Ishga tushir'],['Sub','Boshlash'],['End Sub','Yakun'],['MsgBox','Xabar'],['Range','Katak']],
    bog:'10-dars',
    nat:'Birinchi makros',
    files:['PRO_11_VBA_Boshlangich.xlsm']
  },
  {
    n:12,
    d:'6-hafta',
    t:'Tugma orqali hisobot — Yakuniy loyiha',
    desc:'Bir tugma bilan avtomatik hisobot yaratish.',
    items:['Tugma qo\'shish','Makrosni ulash','Avtomatik hisobot','Grafik yaratish'],
    keys:[['Кнопка','Tugma qo\'shish'],['Назначить макрос','Makrosni ulash'],['Sub','Protsedura'],['Alt+F11','VBA'],['F5','Ishga tushirish'],['Ctrl+S','Сохранить']],
    tables:[{
      label:'📊 Avtomatik hisobot',
      h:['','A','B'],
      hr:['Bosqich','Amal'],
      hc:['var(--acc)','var(--green)'],
      rows:[['2','1. Tugma','Вставка → Фигуры → Кнопка'],['3','2. Makros','Sub Hisobot()'],['4','3. Natija','Bir tugma = tayyor hisobot']],
      st:[[0,'cv2','cg'],[0,'cv2','cg'],[0,'cv2','cg']],
      f:'Sub Hisobot()\n    Range("H1").Value = Application.Sum(Range("B:B"))\n    Range("H2").Value = Application.Average(Range("B:B"))\n    MsgBox "Hisobot tayyor!"\nEnd Sub',
      fd:'Bir tugma = to\'liq hisobot'
    }],
    sc:[['Кнопка','Tugma'],['Назначить','Ulash'],['.xlsm','Makrosli fayl'],['Charts.Add','Grafik'],['Sum','Yig\'indi'],['Average','O\'rtacha']],
    bog:'11-dars',
    nat:'Avtomat hisobot tizimi',
    files:['PRO_12_Yakuniy_Loyiha.xlsm']
  }
];

// Quiz data - Rus tilidagi formulalar bilan
export const quizData: { f: QuizQuestion[][]; p: QuizQuestion[][] } = {
  f: [
    // 1-dars
    [{q:"Excel da katak (ячейка) nima?", opts:["Ustun va qatorning kesishmasi","Faqat ustun","Faqat qator","Лист nomi"], ans:0, exp:"Ячейка — bu столбец (ustun) va строка (qator) ning kesishmasi. Masalan: B4 = B ustuni + 4-qator."}, {q:"Ctrl+S nima vazifani bajaradi?", opts:["Копировать","Сохранить (Saqlash)","Отменить","Печать"], ans:1, exp:"Ctrl+S — faylni saqlash (Сохранить)."}, {q:"Excel da ustunlar qanday belgilanadi?", opts:["Raqamlar bilan (1,2,3)","Harflar bilan (A,B,C)","Belgilar bilan (*,#,@)","Ranglar bilan"], ans:1, exp:"Ustunlar (Столбцы) harflar bilan (A, B, C...) belgilanadi."}],
    // 2-dars
    [{q:"=СУММ(B2:B5) nima qiladi?", opts:["B2 dan B5 gacha o'rtacha hisoblaydi","B2 dan B5 gacha yig'indi chiqaradi","Eng katta qiymatni topadi","Sanaydi"], ans:1, exp:"СУММ — yig'indi funksiyasi (SUM)."}, {q:"СРЗНАЧ funksiyasi nima hisoblaydi?", opts:["Yig'indi","Eng kichik qiymat","O'rtacha qiymat","Eng katta qiymat"], ans:2, exp:"СРЗНАЧ — o'rtacha qiymat hisoblaydi (AVERAGE)."}, {q:"Alt+= nima qiladi?", opts:["Yangi лист ochadi","Автосумма — avtomatik yig'indi","Saqlaydi","Yopadi"], ans:1, exp:"Alt+= — avtomatik СУММ yozadi (Автосумма)."}],
    // 3-dars
    [{q:"=ЕСЛИ(A1>10;\"Katta\";\"Kichik\") — A1=15 bo'lsa natija nima?", opts:["Kichik","Katta","0","#ЗНАЧ!"], ans:1, exp:"A1=15, shart bajariladi (15>10), natija 'Katta'."}, {q:"Вложенные ЕСЛИ nima?", opts:["Oddiy ЕСЛИ","ЕСЛИ ichida ЕСЛИ","И bilan ЕСЛИ","СУММЕСЛИ"], ans:1, exp:"Вложенные ЕСЛИ — ЕСЛИ ichida yana ЕСЛИ yozish (Nested IF)."}, {q:"ЕСЛИ formulasida 3-argument nima?", opts:["Shart","Shart to'g'ri bo'lsa natija","Shart yolg'on bo'lsa natija","Ikkinchi shart"], ans:2, exp:"3-argument — shart bajarilMAGANDA chiqadigan natija."}],
    // 4-dars
    [{q:"СЧЁТЕСЛИ nima hisoblaydi?", opts:["Yig'indi","Shartga mos kataklarni sanaydi","O'rtacha","Eng katta"], ans:1, exp:"СЧЁТЕСЛИ — berilgan shartga ko'ra kataklarni sanaydi (COUNTIF)."}, {q:"СУММЕСЛИ va СУММЕСЛИМН farqi nima?", opts:["Hech farq yo'q","СУММЕСЛИ — 1 shart, СУММЕСЛИМН — ko'p shart","СУММЕСЛИ yangi, СУММЕСЛИМН eski","СУММЕСЛИМН faqat sonlar uchun"], ans:1, exp:"СУММЕСЛИ bitta, СУММЕСЛИМН ko'p shart uchun (SUMIF vs SUMIFS)."}, {q:"=СЧЁТЕСЛИ(A2:A10;\"Nok\") nima sanaydi?", opts:["A2:A10 barcha kataklarni","'Nok' so'zi necha marta borligini","A2:A10 sonlarni","Nok ning uzunligini"], ans:1, exp:"'Nok' qancha marta uchrashini sanaydi."}],
    // 5-dars
    [{q:"ВПР da 4-argument ЛОЖЬ nima ma'nosi?", opts:["Taxminiy moslik","Aniq moslik","Xatoni yashirish","Chapdan qidirish"], ans:1, exp:"ЛОЖЬ — exact match (aniq moslik). ИСТИНА — yaqin moslik."}, {q:"ПРОСМОТРX ning ВПР dan afzalligi nima?", opts:["Faqat tezroq ishlaydi","Chapga ham qidira oladi, default qiymat berish mumkin","Ko'proq ustun qidiradi","Eski Excel da ham ishlaydi"], ans:1, exp:"ПРОСМОТРX (XLOOKUP) moslashuvchanroq, chapga ham qidiradi."}, {q:"#Н/Д xatosi nima sababdan chiqadi?", opts:["Formula noto'g'ri","Qidirilgan qiymat topilmadi","Ustun nomi xato","Internet yo'q"], ans:1, exp:"#Н/Д — 'Not Available' ya'ni qiymat topilmadi."}],
    // 6-dars
    [{q:"Автофильтр ni qanday qo'shish mumkin?", opts:["Ctrl+F","Ctrl+Shift+L","Alt+=","Ctrl+T"], ans:1, exp:"Ctrl+Shift+L — jadvalga Автофильтр qo'shadi."}, {q:"Сортировка А→Я nima qiladi?", opts:["Kattadan kichikka tartiblaydi","Kichikdan kattaga tartiblaydi","Filterlaydi","Saqlaydi"], ans:1, exp:"А→Я — alifbo tartibida (kichikdan kattaga)."}, {q:"Настраиваемый фильтр nima?", opts:["Faqat bitta qiymatni ko'rsatadi","O'z shartingni qo'yib filterlash","Ranglar bo'yicha filter","Avtomatik filter"], ans:1, exp:"Настраиваемый фильтр — o'z shartingiz bilan ajratish."}],
    // 7-dars
    [{q:"Сводная таблица nima uchun ishlatiladi?", opts:["Rasm qo'shish uchun","Katta ma'lumotlarni guruhlash va hisobot qilish uchun","Formula yozish uchun","Grafik chizish uchun"], ans:1, exp:"Сводная таблица — tez hisobot tayyorlash vositasi (Pivot Table)."}, {q:"Сводная da 'Значения' maydoniga nima tashlanadi?", opts:["Guruhlanadigan maydon","Hisoblanadigan (son) maydon","Filter maydon","Sarlavha"], ans:1, exp:"Значения — hisob-kitob (СУММ, Количество) bo'ladigan maydon."}, {q:"Сводная таблица ni yangilash uchun nima qilinadi?", opts:["Qaytadan yaratiladi","Обновить bosiladi","O'chirib yangisi qo'yiladi","Fayl yopiladi"], ans:1, exp:"O'ng tugma -> Обновить!"}],
    // 8-dars
    [{q:"Dashboard uchun trend ko'rsatish uchun qaysi grafik yaxshi?", opts:["Круговая","Гистограмма","Линия (Chiziqli)","Точечная"], ans:2, exp:"Линия (Line Chart) — trend ko'rsatadi."}, {q:"KPI kartasi nima?", opts:["Rasm","Asosiy ko'rsatkichni katta ko'rsatadigan element","Jadval","Grafik"], ans:1, exp:"KPI — eng muhim raqamlarni katta qilish."}, {q:"Alt+F1 nima qiladi?", opts:["Yangi лист","Tezkor диаграмма yaratadi","Сводная таблица","Saqlaydi"], ans:1, exp:"Alt+F1 — varaqning o'zida darhol grafik qo'yadi."}]
  ],
  p: [
    // PRO 1-dars
    [{q:"И funksiyasi qachon ИСТИНА qaytaradi?", opts:["Biror shart to'g'ri bo'lsa","Barcha shartlar to'g'ri bo'lsa","Hech qaysi shart to'g'ri bo'lmasa","Har doim"], ans:1, exp:"И (AND) — BARCHA shartlar ИСТИНА bo'lishini talab qiladi."}, {q:"ЕСЛИОШИБКА nima uchun ishlatiladi?", opts:["Xatolarni topish uchun","Xato bo'lsa o'rniga boshqa qiymat ko'rsatish uchun","Formula tekshirish uchun","Hisoblash uchun"], ans:1, exp:"ЕСЛИОШИБКА — formula xato bersa uni yashiradi (IFERROR)."}, {q:"=ЕСЛИ(И(B2>=70;C2>=80%);\"Bonus\";\"Yo'q\") — B2=75, C2=75% bo'lsa?", opts:["Bonus","Yo'q","#ЗНАЧ!","0"], ans:1, exp:"75% >= 80% bu ЛОЖЬ, demak И = ЛОЖЬ, natija Yo'q."}],
    // PRO 2-dars
    [{q:"СУММЕСЛИМН da argumentlar tartibi qanday?", opts:["Диапазон_критериев, Диапазон_суммирования, Критерий","Диапазон_суммирования, Диапазон_критериев1, Критерий1","Критерий, Диапазон_суммирования, Диапазон_критериев","Range, Criteria, Sum"], ans:1, exp:"СУММЕСЛИМН doim Диапазон_суммирования dan boshlanadi!"}, {q:"СУММЕСЛИ va СУММЕСЛИМН da Диапазон_суммирования o'rni farq qiladimi?", opts:["Yo'q","Ha, СУММЕСЛИ da oxirgi, СУММЕСЛИМН da birinchi","Ha, СУММЕСЛИ da birinchi, СУММЕСЛИМН da oxirgi","Ikkalasida ham birinchi"], ans:1, exp:"СУММЕСЛИ da oxirida, СУММЕСЛИМН da boshida turadi."}, {q:"СЧЁТЕСЛИМН qanday ishlaydi?", opts:["Faqat bitta shartga mos sanaydi","Ko'p shartga mos kataklarni sanaydi","Barcha kataklarni sanaydi","Faqat sonlarni sanaydi"], ans:1, exp:"СЧЁТЕСЛИМН — barcha berilgan shartlarga mosini sanaydi (COUNTIFS)."}],
    // PRO 3-dars
    [{q:"ПРОСМОТРX ning 3-argumenti nima?", opts:["Искомое_значение","Просматриваемый_массив","Возвращаемый_массив","Если_не_найдено"], ans:2, exp:"Qaytarilishi kerak bo'lgan ustun (Возвращаемый_массив)."}, {q:"ПРОСМОТРX da topilmasa nima bo'ladi (agar 4-argument berilsa)?", opts:["#Н/Д xatosi","4-argumentdagi qiymat ko'rsatiladi","0 ko'rsatiladi","Bo'sh katak"], ans:1, exp:"4-argument Если_не_найдено."}, {q:"ИНДЕКС+ПОИСКПОЗ kombinatsiyasi nima uchun?", opts:["Faqat o'ngga qidirish","Chapga ham qidirish + moslashuvchanlik","Faqat son qidirish","Tezroq ishlash"], ans:1, exp:"ИНДЕКС+ПОИСКПОЗ moslashuvchan kuchli qidiruv."}],
    // PRO 4-dars
    [{q:"УНИК funksiyasi nima qiladi?", opts:["Tartiblaydi","Takrorlanmaydigan qiymatlarni chiqaradi","Filterlaydi","Sanaydi"], ans:1, exp:"УНИК — dublikatlarni olib tashlaydi (UNIQUE)."}, {q:"ФИЛЬТР funksiyasi qanday ishlaydi?", opts:["Faqat ranglar bo'yicha filterlaydi","Shartga mos qatorlarni dinamik chiqaradi","Ustunlarni yashiradi","Saralaydi"], ans:1, exp:"ФИЛЬТР — shartli dinamik jadval chiqaradi (FILTER)."}, {q:"СОРТ funksiyasi nima qiladi?", opts:["O'chiradi","Tartiblangan nusxasini chiqaradi","Filterlaydi","Sanaydi"], ans:1, exp:"СОРТ — ma'lumotni tartiblab ko'rsatadi (SORT)."}],
    // PRO 5-dars
    [{q:"СЧЁТЗ va СЧЁТ farqi nima?", opts:["Hech farq yo'q","СЧЁТ faqat sonlarni, СЧЁТЗ barcha to'ldirilgan kataklarni sanaydi","СЧЁТЗ faqat matnlarni sanaydi","СЧЁТ kattaroq"], ans:1, exp:"СЧЁТЗ har qanday to'ldirilgan katakni sanaydi (COUNTA vs COUNT)."}, {q:"Ctrl+T nima qiladi?", opts:["Matnni qalin qiladi","Ma'lumotlarni rasmiy Excel Таблица ga aylantiradi","Formulani tekshiradi","Transpozitsiya qiladi"], ans:1, exp:"Ctrl+T — avtomatik Таблица yaratadi."}, {q:"Real loyihada birinchi qadam nima?", opts:["Grafik chizish","Ma'lumotlarni tekshirish va tozalash","Formula yozish","Dashboard qilish"], ans:1, exp:"Birinchi qadam — Datani tozalash!"}],
    // PRO 6-dars
    [{q:"СЖПРОБЕЛЫ funksiyasi nima qiladi?", opts:["Matnni qisqartiradi","Ortiqcha bo'shliqlarni olib tashlaydi","Katta harfga o'giradi","Matnni birlashtiradi"], ans:1, exp:"СЖПРОБЕЛЫ — ortiqcha probellarni yo'qotadi (TRIM)."}, {q:"ПРОПНАЧ funksiyasi nima qiladi?", opts:["Hammani kichik harfga o'giradi","Har so'zning birinchi harfini katta qiladi","Matnni tozalaydi","Raqamga aylantiradi"], ans:1, exp:"ПРОПНАЧ — Bosh Harf Bilan Yozadi (PROPER)."}, {q:"ЗНАЧЕН funksiyasi nima uchun?", opts:["Matnni sanaga aylantiradi","Matn ko'rinishidagi sonni haqiqiy songa aylantiradi","Sonni matnga aylantiradi","Qiymatni topadi"], ans:1, exp:"ЗНАЧЕН — matn-sonlarni asil songa o'giradi (VALUE)."}],
    // PRO 7-dars
    [{q:"ИНДЕКС funksiyasi nima qaytaradi?", opts:["Qatorni sanaydi","Berilgan pozitsiyadagi qiymatni qaytaradi","Eng katta qiymatni topadi","Qidiradi"], ans:1, exp:"ИНДЕКС — ko'rsatilgan koordinatadagi qiymatni beradi."}, {q:"ПОИСКПОЗ funksiyasi nima qaytaradi?", opts:["Qiymatning o'zini","Qiymatning pozitsiyasini (raqamini)","ИСТИНА yoki ЛОЖЬ","Qiymatni ikki baravar"], ans:1, exp:"ПОИСКПОЗ — qidirilgan narsa nechanchi qatorda ekanligini beradi (MATCH)."}, {q:"ИНДЕКС+ПОИСКПОЗ kombinatsiyasida ПОИСКПОЗ nima rol o'ynaydi?", opts:["Qiymatni qaytaradi","ИНДЕКС uchun qator raqamini topib beradi","Shartni tekshiradi","Xatoni ushlaydi"], ans:1, exp:"ПОИСКПОЗ raqam topib beradi, ИНДЕКС o'sha raqamdagi qiymatni qaytaradi."}],
    // PRO 8-dars
    [{q:"Срезы nima?", opts:["Grafik turi","Сводная таблица uchun vizual filter panel","Formula turi","Jadval uslubi"], ans:1, exp:"Срезы — bosiladigan chiroyli filter tugmalari (Slicer)."}, {q:"Временная шкала nima uchun?", opts:["Vaqt o'lchash uchun","Sana bo'yicha filter qilish uchun vizual panel","Grafik turi","Makros"], ans:1, exp:"Временная шкала — oylar va yillar bo'yicha filter (Timeline)."}, {q:"Dashboard da Круговая диаграмма qachon mos?", opts:["Trend ko'rsatishda","Qiymatlar ulushini (%) ko'rsatishda","Taqqoslashda","Munosabat ko'rsatishda"], ans:1, exp:"Круговая диаграмма qismlarning butunlikdagi ulushini (foiz) ko'rsatish uchun ideal."}],
    // PRO 9-dars
    [{q:"ChatGPT ga yaxshi prompt yozish uchun nima kerak?", opts:["Faqat 'formula yoz' deyish","Aniq kontekst: nima kerak, qanday data, qanday natija","Inglizcha yozish","Formulani o'zi yozib berish"], ans:1, exp:"AI dan aniq narsa xohlasangiz, unga aniq shartlarni yozishingiz kerak."}, {q:"ChatGPT formula berdi, lekin xato chiqdi. Nima qilish kerak?", opts:["ChatGPT ni o'chirish","Xatoni va formulani ChatGPT ga qayta yuborish va tushuntirish so'rash","Boshqa formula topish","Qo'lda hisoblash"], ans:1, exp:"AIdan debug (xatoni to'g'irlash) ni so'rash eng to'g'ri yo'l."}, {q:"AI yordamchini Excel da qachon ishlatish yaxshi?", opts:["Har doim","Murakkab formula, VBA kod, xato debug qilishda vaqt tejash uchun","Hech qachon","Faqat VBA uchun"], ans:1, exp:"Vaqt tejash va murakkab ishlarni tezlashtirish uchun."}],
    // PRO 10-dars
    [{q:"Именованный диапазон nima?", opts:["Лист nomi","Kataklar diapazoniga berilgan nom","Formula nomi","Ustun nomi"], ans:1, exp:"Именованный диапазон — masalan B2:B100 ni 'Sotuv' deb nomlash (Named Range)."}, {q:"Вручную vs Автоматически hisoblash farqi?", opts:["Hech farq yo'q","Вручную — formulalar faqat F9 bosilganda yangilanadi","Автоматически sekinroq","Вручную xavfsizroq"], ans:1, exp:"Вручную faqat siz buyruq bersangiz hisoblaydi, og'ir fayllarda kerak."}, {q:"Excel Таблица (Ctrl+T) ning formulalar uchun afzalligi?", opts:["Ko'proq joy","Yangi qator qo'shilsa formulalar avtomatik kengayadi","Tezroq hisoblaydi","Ranglar chiroyli ko'rinadi"], ans:1, exp:"Таблица dinamik, o'z-o'zidan pastga qarab o'sadi."}],
    // PRO 11-dars
    [{q:"VBA da Sub nima?", opts:["Переменная","Kod bloki (protsedura) — bajarilishi mumkin bo'lgan buyruqlar to'plami","Цикл","Условие"], ans:1, exp:"Sub - Makrosning asosiy ishlash tanasi."}, {q:"MsgBox nima qiladi?", opts:["Ячейка qiymatini o'zgartiradi","Ekranda xabar oynasi chiqaradi","Faylni saqlaydi","Цикл boshlaydi"], ans:1, exp:"MsgBox ekranga popup xabar chiqaradi."}, {q:"Alt+F11 nima qiladi?", opts:["Диаграмма qo'shadi","VBA muharrirni ochadi","Makroslarni o'chiradi","Faylni yopadi"], ans:1, exp:"Alt+F11 VBA kod yozish muhitiga o'tkazadi."}],
    // PRO 12-dars
    [{q:"Tugmaga makros ulash uchun nima qilinadi?", opts:["Tugmani ikki marta bosish","Вставка → Фигуры → Кнопка → Назначить макрос","Alt+F11 bosiladi","Tugma o'zi ulanadi"], ans:1, exp:"Tugma ustiga bosib Назначить макрос qilinadi."}, {q:".xlsm fayl nima?", opts:["Oddiy Excel fayl","Makrolar saqlanadigan Excel fayl formati","Shifrlangan fayl","Eski format"], ans:1, exp:".xlsm VBA makros kodlarini ham saqlab qoladigan format."}, {q:"VBA da Range(\"A1\").Value = 100 nima qiladi?", opts:["A1 ni o'chiradi","A1 katak qiymatini 100 ga o'rnatadi","A1 ni tanlaydi","A1 ni rang qiladi"], ans:1, exp:"A1 ga 100 yozib qo'yadi."}]
  ]
};

// AI uchun mavzu bo'yicha yordam
export const topicHelp: Record<string, { tips: string[]; examples: string[] }> = {
  'СУММ': {
    tips: [
      'СУММ — sonlarni yig\'ish uchun ishlatiladi',
      'Sintaksis: =СУММ(диапазон) yoki =СУММ(ячейка1;ячейка2;...)',
      'Rus Excelda nuqta-vergul (;) ajratkich sifatida ishlatiladi'
    ],
    examples: [
      '=СУММ(A1:A10) — A1 dan A10 gacha yig\'indi',
      '=СУММ(A1;B1;C1) — 3 ta katak yig\'indisi',
      '=СУММ(A:A) — butun A ustuni yig\'indisi'
    ]
  },
  'СРЗНАЧ': {
    tips: [
      'СРЗНАЧ — o\'rtacha qiymatni hisoblaydi (AVERAGE)',
      'Bo\'sh kataklar hisoblanmaydi',
      'Matn qiymatlar ham o\'tkazib yuboriladi'
    ],
    examples: [
      '=СРЗНАЧ(B2:B10) — B2 dan B10 gacha o\'rtacha',
      '=СРЗНАЧ(A1;A2;A3) — 3 ta qiymat o\'rtachasi'
    ]
  },
  'ЕСЛИ': {
    tips: [
      'ЕСЛИ — shartli formula (IF)',
      'Sintaksis: =ЕСЛИ(условие;значение_если_истина;значение_если_ложь)',
      'Ichma-ich (Вложенные) ЕСЛИ ishlatish mumkin'
    ],
    examples: [
      '=ЕСЛИ(A1>10;"Katta";"Kichik")',
      '=ЕСЛИ(B2>=60;"O\'tdi";"Yiqildi")',
      '=ЕСЛИ(A1>90;"A";ЕСЛИ(A1>80;"B";"C")) — Вложенные ЕСЛИ'
    ]
  },
  'СЧЁТЕСЛИ': {
    tips: [
      'СЧЁТЕСЛИ — shartga mos kataklar sonini sanaydi (COUNTIF)',
      'Matn shartlar qo\'shtirnoq ichida yoziladi',
      'Wildcard: * — bir nechta belgi, ? — bitta belgi'
    ],
    examples: [
      '=СЧЁТЕСЛИ(A:A;"Olma") — "Olma" necha marta bor',
      '=СЧЁТЕСЛИ(B2:B100;">100") — 100 dan katta qiymatlar soni',
      '=СЧЁТЕСЛИ(A:A;"*телефон*") — "телефон" so\'zi bor kataklar'
    ]
  },
  'СУММЕСЛИ': {
    tips: [
      'СУММЕСЛИ — shartga mos qiymatlarni yig\'adi (SUMIF)',
      'Sintaksis: =СУММЕСЛИ(диапазон_условия;условие;диапазон_суммирования)',
      '3-argument berilmasa, 1-diapazon yig\'iladi'
    ],
    examples: [
      '=СУММЕСЛИ(A:A;"Olma";B:B) — "Olma" uchun B ustunini yig\'adi',
      '=СУММЕСЛИ(C2:C100;">1000") — 1000 dan katta qiymatlar yig\'indisi'
    ]
  },
  'ВПР': {
    tips: [
      'ВПР — vertikal qidiruv (VLOOKUP)',
      'Sintaksis: =ВПР(искомое;таблица;номер_столбца;тип)',
      '4-argument: ЛОЖЬ = aniq moslik, ИСТИНА = yaqin moslik',
      'Faqat o\'ngga qidiradi (birinchi ustundan)'
    ],
    examples: [
      '=ВПР(A2;$E$2:$G$100;2;ЛОЖЬ) — A2 ni E ustunidan qidiradi, F ustunidan qaytaradi',
      '=ВПР("A01";Товары;3;ЛОЖЬ) — "A01" kodini topib 3-ustunni qaytaradi'
    ]
  },
  'ПРОСМОТРX': {
    tips: [
      'ПРОСМОТРX — zamonaviy qidiruv (XLOOKUP, Excel 365/2021+)',
      'ВПР dan afzalliklari: chapga ham qidiradi, default qiymat, xatosiz',
      'Sintaksis: =ПРОСМОТРX(искомое;массив_поиска;массив_возврата;если_не_найдено)'
    ],
    examples: [
      '=ПРОСМОТРX(A2;E:E;F:F;"Topilmadi") — A2 ni E da qidiradi, F dan qaytaradi',
      '=ПРОСМОТРX(G1;A:A;B:D) — bir nechta ustunni qaytaradi'
    ]
  },
  'И': {
    tips: [
      'И — barcha shartlar to\'g\'ri bo\'lsa ИСТИНА qaytaradi (AND)',
      'Odatda ЕСЛИ bilan birgalikda ishlatiladi',
      '254 tagacha shartni tekshirishi mumkin'
    ],
    examples: [
      '=ЕСЛИ(И(A1>50;B1>50);"O\'tdi";"Yiqildi")',
      '=И(A1>=18;A1<=65) — Yosh 18-65 orasidami?'
    ]
  },
  'ИЛИ': {
    tips: [
      'ИЛИ — biror shart to\'g\'ri bo\'lsa ИСТИНА qaytaradi (OR)',
      'И ning teskarisi: kamida bitta shart bajarilishi kerak'
    ],
    examples: [
      '=ЕСЛИ(ИЛИ(A1="VIP";B1>1000);"Chegirma";"Oddiy")',
      '=ИЛИ(A1="Да";A1="Yes";A1="Ha") — 3 ta variant'
    ]
  },
  'ИНДЕКС': {
    tips: [
      'ИНДЕКС — berilgan qator/ustun raqami bo\'yicha qiymatni qaytaradi',
      'ПОИСКПОЗ bilan birgalikda kuchli qidiruv vositasi',
      'Sintaksis: =ИНДЕКС(массив;номер_строки;номер_столбца)'
    ],
    examples: [
      '=ИНДЕКС(A1:A10;3) — A1:A10 ning 3-elementi',
      '=ИНДЕКС(A1:C10;2;3) — 2-qator, 3-ustun kesishmasi'
    ]
  },
  'ПОИСКПОЗ': {
    tips: [
      'ПОИСКПОЗ — qiymatning pozitsiyasini (raqamini) topadi (MATCH)',
      'ИНДЕКС bilan birgalikda ВПР ni almashtiradi',
      '3-argument: 0 = aniq, 1 = kichikroq, -1 = kattaroq'
    ],
    examples: [
      '=ПОИСКПОЗ("Olma";A:A;0) — "Olma" nechanchi qatorda',
      '=ИНДЕКС(B:B;ПОИСКПОЗ(D1;A:A;0)) — professional qidiruv'
    ]
  }
};
