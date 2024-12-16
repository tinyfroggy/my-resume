import { createContext } from "react";

const WorkInfoAr = 
[
  {
    id: 1,
    link: "https://home-swit-home.netlify.app/",
    srcImg: "../imgs/Studi app 1.png",
    title: "تطبيق الدراسة",
    description: "تطبيق الدراسة هو موقع يساعدك على الدراسة بشكل فعال، يحتوي التطبيق على مؤقت بومودورو، قائمة مهام، وملاحظات لاصقة.",  
  },
  {
    id: 2,
    link: "https://studyapp0.netlify.app/",
    srcImg: "../imgs/studi-app-2.png",
    title: "تطبيق الدراسة 2",
    description: "تطبيق الدراسة 2 هو الإصدار الثاني من تطبيق الدراسة، يحتوي على ميزات جديدة مثل الرجوع للخلف والمزيد.",
  },{
    id: 3,
    link: "https://menufoodforg.netlify.app/",
    srcImg: "../imgs/menufood 3.png",
    title: "قائمة الطعام",
    description: "قائمة الطعام تساعدك على اكتشاف وصفات جديدة واختيارها بسهولة وسرعة.",
  },{
    id: 4,
    link: "https://xogamereacsfrogs.netlify.app/",
    srcImg: "../imgs/tik tak tok 4.png",
    title: "لعبة XO",
    description: "لعبة XO هي موقع بسيط وممتع يتيح لك لعب لعبة تيك تاك تو الكلاسيكية. تحدَّ صديقًا أو العب ضد الكمبيوتر لمعرفة من يستطيع الفوز بثلاثة على التوالي!",
  },{
    id: 5,
    link: "https://sonic-runner-frog.netlify.app/",
    srcImg: "../imgs/sonic-runner 5.png",
    title: "سونك رنر",
    description: "سونك رنر هو موقع مليء بالإثارة يقدم لعبة عداء لا نهائية ممتعة. قُد سونيك لتجاوز العقبات الصعبة، اجمع الحلقات، وحقق أعلى الدرجات في هذه المغامرة السريعة!",
  },{
    id: 6,
    link: "https://statuesque-gumption-bdec37.netlify.app",
    srcImg: "../imgs/KAMEL FROG 6.png",
    title: "موقع كامل",
    description: "موقعي الأول",
  },{
    id: 7,
    link: "https://frogs-math-4-kids.netlify.app",
    srcImg: "../imgs/math-4-kids 7.png",
    title: "الرياضيات للأطفال",
    description: "الرياضيات للأطفال هو موقع تعليمي مصمم لجعل تعلم الرياضيات ممتعًا وتفاعليًا للأطفال. استكشف الألعاب والألغاز والأنشطة التي تساعد على بناء المهارات الرياضية الأساسية مع إبقاء الأطفال مستمتعين!",
  },{
    id: 8,
    link: "https://movieappfrogs.netlify.app",
    srcImg: "../imgs/Movie App 8.png",
    title: "تطبيق الأفلام",
    description: "تطبيق الأفلام هو منصة سهلة الاستخدام تتيح لك استكشاف واكتشاف وتتبع أفلامك المفضلة. تصفح العناوين الرائجة، اعرض معلومات تفصيلية، وأنشئ قائمة المشاهدة الخاصة بك بكل سهولة!",
  },{
    id: 9,
    link: "https://snakegamefrogs.netlify.app",
    srcImg: "../imgs/Snak game 9.png",
    title: "لعبة الثعبان",
    description: "لعبة الثعبان هي موقع كلاسيكي على طراز الألعاب القديمة حيث تتحكم بثعبان ينمو، تجمع الطعام، وتسعى للحصول على أعلى الدرجات. تحدَّ نفسك في التنقل دون الاصطدام بالجدران أو بذيلك!",
  },
];

const WorkInfoContextAr = createContext(WorkInfoAr);

export default WorkInfoContextAr;
export { WorkInfoAr };
