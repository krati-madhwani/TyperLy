const referenceSentences = {
    en: [
        "I enjoy learning new things and practicing every day.",
        "Programming is the art of telling another human what one wants the computer to do.",
        "The best way to predict the future is to create it yourself.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only way to do great work is to love what you do."
    ],
    es: [
        "Disfruto aprendiendo cosas nuevas y practicando todos los días.",
        "La programación es el arte de decirle a otro humano lo que uno quiere que haga la computadora.",
        "La mejor manera de predecir el futuro es crearlo tú mismo.",
        "El éxito no es definitivo, el fracaso no es fatal: es el valor para continuar lo que cuenta.",
        "La única manera de hacer un gran trabajo es amar lo que haces."
    ],
    fr: [
        "J'aime apprendre de nouvelles choses et m'entraîner tous les jours.",
        "La programmation est l'art de dire à un autre humain ce que l'on veut que l'ordinateur fasse.",
        "La meilleure façon de prédire l'avenir est de le créer vous-même.",
        "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
        "La seule façon de faire un excellent travail est d'aimer ce que vous faites."
    ],
    de: [
        "Ich lerne gerne Neues und übe jeden Tag.",
        "Programmieren ist die Kunst, einem anderen Menschen zu sagen, was der Computer tun soll.",
        "Der beste Weg, die Zukunft vorherzusagen, ist, sie selbst zu gestalten.",
        "Erfolg ist nicht endgültig, Misserfolg ist nicht fatal: Es ist der Mut weiterzumachen, der zählt.",
        "Der einzige Weg, großartige Arbeit zu leisten, ist, das zu lieben, was man tut."
    ],
    hi: [
        "मुझे हर दिन नई चीजें सीखना और अभ्यास करना अच्छा लगता है।",
        "प्रोग्रामिंग एक कला है जो कंप्यूटर को बताती है कि क्या करना है।",
        "भविष्य की भविष्यवाणी करने का सबसे अच्छा तरीका है इसे खुद बनाना।",
        "सफलता अंतिम नहीं है, असफलता घातक नहीं है: यह जारी रखने का साहस है जो मायने रखता है।",
        "महान काम करने का एकमात्र तरीका है जो आप करते हैं उसे प्यार करना।"
    ],
    ru: [
        "Я люблю узнавать новое и практиковаться каждый день.",
        "Программирование - это искусство говорить другому человеку, что вы хотите, чтобы компьютер делал.",
        "Лучший способ предсказать будущее - создать его самому.",
        "Успех не окончателен, неудача не фатальна: важно мужество продолжать.",
        "Единственный способ делать великие дела - любить то, что вы делаете."
    ],
    ar: [
        "أنا أستمتع بتعلم أشياء جديدة وممارستها كل يوم.",
        "البرمجة هي فن إخبار إنسان آخر بما تريد أن يفعله الكمبيوتر.",
        "أفضل طريقة للتنبؤ بالمستقبل هي إنشاؤه بنفسك.",
        "النجاح ليس نهائياً، والفشل ليس قاتلاً: إنها الشجاعة للاستمرار هي ما يهم.",
        "الطريقة الوحيدة للقيام بعمل عظيم هي أن تحب ما تفعله."
    ],
    zh: [
        "我喜欢每天学习新事物和练习。",
        "编程是告诉另一个人你希望计算机做什么的艺术。",
        "预测未来的最好方法就是创造未来。",
        "成功不是终点，失败也不是致命的：重要的是继续前进的勇气。",
        "做伟大工作的唯一方法就是热爱你所做的事情。"
    ],
    ja: [
        "私は毎日新しいことを学び、練習するのが好きです。",
        "プログラミングは、コンピュータに何をさせたいかを他の人に伝える芸術です。",
        "未来を予測する最良の方法は、それを自分で創造することです。",
        "成功は最終的なものではなく、失敗は致命的ではありません：重要なのは続ける勇気です。",
        "素晴らしい仕事をする唯一の方法は、自分がしていることを愛することです。"
    ],
    it: [
        "Mi piace imparare cose nuove e fare pratica ogni giorno.",
        "La programmazione è l'arte di dire a un altro essere umano cosa si vuole che il computer faccia.",
        "Il modo migliore per prevedere il futuro è crearlo da soli.",
        "Il successo non è definitivo, il fallimento non è fatale: è il coraggio di continuare che conta.",
        "L'unico modo per fare un ottimo lavoro è amare quello che fai."
    ],
    pl: [
        "Lubię uczyć się nowych rzeczy i ćwiczyć każdego dnia.",
        "Programowanie to sztuka mówienia innemu człowiekowi, co chcemy, aby komputer zrobił.",
        "Najlepszym sposobem przewidywania przyszłości jest jej tworzenie.",
        "Sukces nie jest ostateczny, porażka nie jest fatalna: liczy się odwaga, by kontynuować.",
        "Jedynym sposobem na wykonanie świetnej pracy jest kochać to, co się robi."
    ],
    bn: [
        "ਮੈਂ ਹਰ ਰੋਜ਼ ਨਵੀਆਂ ਚੀਜ਼ਾਂ ਸਿੱਖਣ ਅਤੇ ਅਭਿਆਸ ਕਰਨ ਦਾ ਅਨੰਦ ਲੈਂਦਾ ਹਾਂ।",
        "ਪ੍ਰੋਗ੍ਰਾਮਿੰਗ ਦੂਜੇ ਇਨਸਾਨ ਨੂੰ ਦੱਸਣ ਦੀ ਕਲਾ ਹੈ ਕਿ ਤੁਸੀਂ ਕੰਪਿਊਟਰ ਤੋਂ ਕੀ ਕਰਵਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ।",
        "ਭਵਿੱਖ ਦੀ ਭਵਿੱਖਬਾਣੀ ਕਰਨ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕਾ ਇਹ ਹੈ ਕਿ ਤੁਸੀਂ ਖੁਦ ਬਣਾਓ।",
        "ਸਫਲਤਾ ਆਖਰੀ ਨਹੀਂ, ਅਸਫਲਤਾ ਘਾਤਕ ਨਹੀਂ: ਜਾਰੀ ਰੱਖਣ ਦੀ ਹਿੰਮਤ ਮਹੱਤਵਪੂਰਨ ਹੈ।",
        "ਉତ୍ତମ ਕਾਮ ਕਰਨ ਦਾ ਇਕੋ ਹੀ ਤਰੀਕਾ ਹੈ ਕਿ ਤੁਸੀਂ ਜੋ ਕਰਦੇ ਹੋ ਉਸ ਨਾਲ ਪਿਆਰ ਕਰੋ।"
    ],
    ta: [
        "நான் தினமும் புதிய விஷயங்களைக் கற்றுக்கொள்வதையும் பயிற்சி செய்வதையும் விரும்புகிறேன்.",
        "நிரலாக்கம் என்பது மற்றொரு மனிதருக்கு கணினி எந்த செய்ய வேண்டும் என்று சொல்வது.",
        "எதிர்காலத்தை கணிக்க சிறந்த வழி அதை நீங்களே உருவாக்குவது.",
        "வெற்றி இறுதி அல்ல, தோல்வி உயிரிழப்பல்ல: தொடரும் துணிச்சல் முக்கியம்.",
        "நீங்கள் செய்யும் செயலுக்கு காதல் கொள்வதே சிறந்த வேலை செய்யும் வழி."
    ],
    sd: [
        "مان روزانو نيون شيون سکڻ ۽ مشق ڪرڻ پسند ڪندو آهيان.",
        "پروگرامنگ اهو فن آهي جيڪو ٻئي انسان کي ٻڌائي ٿو ته ڪمپيوٽر کي ڇا ڪرڻو آهي.",
        "ايندڙ وقت جي اڳڪٿي ڪرڻ جو بهترين طريقو اهو آهي ته پاڻ ٺاهيو.",
        "ڪاميابي آخري ناهي، ناڪامي قاتل ناهي: جاري رکڻ جي همت اهم آهي.",
        "عظيم ڪم ڪرڻ جو واحد طريقو اهو آهي ته جيڪو توهان ڪريو ٿا ان سان پيار ڪريو."
    ],
    pt: [
        "Gosto de aprender coisas novas e praticar todos os dias.",
        "Programar é a arte de dizer a outro humano o que você quer que o computador faça.",
        "A melhor maneira de prever o futuro é criá-lo você mesmo.",
        "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
        "A única maneira de fazer um ótimo trabalho é amar o que você faz."
    ],
    ko: [
        "저는 매일 새로운 것을 배우고 연습하는 것을 즐깁니다.",
        "프로그래밍은 다른 사람에게 컴퓨터가 무엇을 하길 원하는지 말하는 예술이다.",
        "미래를 예측하는 가장 좋은 방법은 스스로 만드는 것이다.",
        "성공은 최종이 아니고, 실패는 치명적이지 않다: 계속하는 용기가 중요하다.",
        "훌륭한 일을 하는 유일한 방법은 자신이 하는 일을 사랑하는 것이다."
    ],
    mr: [
        "मला हर दिन नवीन गोष्टी शिकणे आ अभ्यास करे में मजा ले तानी।",
        "प्रोग्रामिंग दूसरका आदमी के बतावे के कला ह कि कंप्यूटर से का करावल जाव।",
        "भविष्याचा अंदाज घेण्याचा सर्वोत्तम मार्ग म्हणजे ते स्वतः तयार करणे.",
        "यश अंतिम नाही, अपयश घातक नाही: पुढे जाण्याचे धैर्य महत्त्वाचे आहे.",
        "उत्तम काम करण्याचा एकमेव मार्ग म्हणजे तुम्ही जे करता ते प्रेमाने करा."
    ],
    jv: [
        "Aku seneng sinau babagan anyar lan latihan saben dina.",
        "Programming iku seni ngandhani wong liya apa sing dikarepake komputer.",
        "Cara paling apik kanggo prédhiksi masa depan yaiku nggawe dhewe.",
        "Sukses dudu pungkasan, gagal dudu pati: sing penting wani nerusake.",
        "Siji-sijine cara kanggo nindakake karya apik yaiku tresna marang apa sing kok lakoni."
    ],
    vi: [
        "Tôi thích học những điều mới và luyện tập mỗi ngày.",
        "Lập trình là nghệ thuật nói cho người khác biết bạn muốn máy tính làm gì.",
        "Cách tốt nhất để dự đoán tương lai là tự tạo ra nó.",
        "Thành công không phải là cuối cùng, thất bại không phải là chết người: điều quan trọng là dám tiếp tục.",
        "Cách duy nhất để làm việc tuyệt vời là yêu những gì bạn làm."
    ],
    tr: [
        "Her gün yeni şeyler öğrenmeyi ve pratik yapmayı severim.",
        "Programlama, başka bir insana bilgisayara ne yapmasını istediğini söyleme sanatıdır.",
        "Geleceği tahmin etmenin en iyi yolu onu kendin yaratmaktır.",
        "Başarı kesin değildir, başarısızlık ölümcül değildir: önemli olan devam etme cesaretidir.",
        "Harika işler yapmanın tek yolu yaptığın işi sevmektir."
    ],
    ur: [
        "میں ہر روز نئی چیزیں سیکھنے اور مشق کرنے سے لذت می‌برم.",
        "پروگرامنگ یہ فن ہے کہ آپ دوسرے انسان کو بتائیں کہ آپ کمپیوٹر سے کیا چاہتے ہیں۔",
        "مستقبل کی پیش گوئی کا بہترین طریقہ یہ ہے کہ اسے خود بنائیں۔",
        "کامیابی حتمی نہیں، ناکامی مہلک نہیں: اہم بات یہ ہے کہ جاری رکھنے کی ہمت ہو۔",
        "عظیم کام کرنے کا واحد طریقہ یہ ہے کہ آپ جو کرتے ہیں اس سے محبت کریں۔"
    ],
    gu: [
        "મને દરરોજ નવી વસ્તુઓ શીખવા અને અભ્યાસ કરવામાં આનંદ આવે છે.",
        "પ્રોગ્રામિંગ એ બીજાને કહેવાનું કળા છે કે કમ્પ્યુટરે શું કરવું.",
        "ભવિષ્યની આગાહી કરવાનો શ્રેષ્ઠ માર્ગ એ છે કે તમે પોતે બનાવો.",
        "સફળતા અંતીમ નથી, નિષ્ફળતા ઘાતક નથી: મહત્વનું છે આગળ વધવાની હિંમ્ત.",
        "ઉત્તમ કામ કરવાનો એકમાતର ଉପାଯି ହେଉଛି ଆପଣ કରୁଥିବା કାମକୁ ଭଲପାଇବା।"
    ],
    ha: [
        "Ina jin daɗin koyan sabbin abubuwa da yin aiki kowace rana.",
        "Shirye-shiryen kwamfuta fasaha ce ta gaya wa wani mutum abin da yake so kwamfutar ta yi.",
        "Hanya mafi kyau ta annabta gaba shine ƙirƙira shi da kanka.",
        "Nasarar ba ta ƙare ba, gazawar ba ta mutuwa ba ce: jaruntakar ci gaba ce ke ƙidaya.",
        "Hanya ɗaya tilo don yin babban aiki shine son abin da kuke yi."
    ],
    uk: [
        "Я люблю вивчати нове і практикуватися щодня.",
        "Програмування — це мистецтво казати іншій людині, що ви хочете, щоб комп'ютер зробив.",
        "Найкращий спосіб передбачити майбутнє — створити його самому.",
        "Успіх не остаточний, невдача не фатальна: важлива сміливість продовжувати.",
        "Єдиний спосіб робити велику справу — любити те, що ти робиш."
    ],
    ml: [
        "ഞാൻ എല്ലാ ദിവസവും പുതിയ കാര്യങ്ങൾ പഠിക്കാനും പരിശീലിക്കാനും ഇഷ്ടപ്പെടുന്നു.",
        "പ്രോഗ്രാമിംഗ് എന്നത് മറ്റൊരാളോട് കമ്പ്യൂട്ടർ എന്ത് ചെയ്യണമെന്ന് പറയുന്ന കലയാണ്.",
        "ഭാവി പ്രവചിക്കുന്ന ഏറ്റവും നല്ല മാർഗം അതിനെ നിങ്ങൾ തന്നെ സൃഷ്ടിക്കുക എന്നതാണ്.",
        "വിജയം അന്തിമമല്ല, പരാജയം മരണകരമല്ല: തുടരാനുള്ള ധൈര്യമാണ് പ്രധാനത്.",
        "നല്ല ജോലി ചെയ്യാനുള്ള ഏക മാർഗം നിങ്ങൾ ചെയ്യുന്ന കാര്യത്തെ സ്നേഹിക്കുക എന്നതാണ്."
    ],
    kn: [
        "ನಾನು ಪ್ರತಿದಿನ ಹೊಸ ವಿಷಯಗಳನ್ನು ಕಲಿಯಲು ಮತ್ತು ಅಭ್ಯಾಸ ಮಾಡಲು ಇಷ್ಟಪಡುತ್ತೇನೆ.",
        "ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಎಂದರೆ ಇನ್ನೊಬ್ಬರಿಗೆ ಕಂಪ್ಯೂಟರ್ ಏನು ಮಾಡಬೇಕು ಎಂದು ಹೇಳುವ ಕಲೆ.",
        "ಭವಿಷ್ಯವನ್ನು ಊಹಿಸುವ ಅತ್ಯುತ್ತಮ ಮಾರ್ಗ 그것ನ್ನು ನೀವು ತಾವೇ ಸೃಷ್ಟಿಸುವುದು.",
        "ಯಶಸ್ಸು ಅಂತಿಮವಲ್ಲ, ವಿಫಲತೆ ಮಾರಕವಲ್ಲ: ಮುಂದುವರಿಯುವ ಧೈರ್ಯ ಮುಖ್ಯ.",
        "ಉತ್ತಮ ಕೆಲಸ ಮಾಡಲು ಏಕಮಾತ್ರ ಮಾರ್ಗ ನೀವು ಮಾಡುವುದನ್ನು ಪ್ರೀತಿಸುವುದು."
    ],
    or: [
        "ମୁଁ ପ୍ରତିଦିନ ନୂଆ ଜିନିଷ ଶିଖିବା ଏବଂ ଅଭ୍ୟାସ କରିବାକୁ ଭଲ ପାଏ।",
        "ପ୍ରୋଗ୍ରାମିଂ ହେଉଛି ଅନ୍ୟ ଜଣେ ମଣିଷକୁ କମ୍ପ୍ୟୁଟର୍ କ'ଣ କରିବାକୁ ଚାହାଁଛନ୍ତି ବୋଲି କହିବା କଳା।",
        "ଭବିଷ୍ୟତ୍ ବାଣୀ କରିବାର ସର୍ବୋତ୍ତମ ଉପାୟ ହେଉଛି ଏହାକୁ ନିଜେ ସୃଷ୍ଟି କରିବା।",
        "ସଫଳତା ଅନ୍ତିମ ନୁହେଁ, ବିଫଳତା ଘାତକ ନୁହେଁ: ଚାଲୁ ରଖିବାର ସାହସ ମୁଖ୍ୟ।",
        "ଉତ୍ତମ କାମ କରିବାର ଏକମାତ୍ର ଉପାୟ ହେଉଛି ଆପଣ କରୁଥିବା କାମକୁ ଭଲପାଇବା।"
    ],
    pa: [
        "ਮੈਂ ਹਰ ਰੋਜ਼ ਨਵੀਆਂ ਚੀਜ਼ਾਂ ਸਿੱਖਣ ਅਤੇ ਅਭਿਆਸ ਕਰਨ ਦਾ ਅਨੰਦ ਲੈਂਦਾ ਹਾਂ।",
        "ਪ੍ਰੋਗ੍ਰਾਮਿੰਗ ਦੂਜੇ ਇਨਸਾਨ ਨੂੰ ਦੱਸਣ ਦੀ ਕਲਾ ਹੈ ਕਿ ਤੁਸੀਂ ਕੰਪਿਊਟਰ ਤੋਂ ਕੀ ਕਰਵਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ।",
        "ਭਵਿੱਖ ਦੀ ਭਵਿੱਖਬਾਣੀ ਕਰਨ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕਾ ਇਹ ਹੈ ਕਿ ਤੁਸੀਂ ਖੁਦ ਬਣਾਓ।",
        "ਸਫਲਤਾ ਆਖਰੀ ਨਹੀਂ, ਅਸਫਲਤਾ ਘਾਤਕ ਨਹੀਂ: ਜਾਰੀ ਰੱਖਣ ਦੀ ਹਿੰਮਤ ਮਹੱਤਵਪੂਰਨ ਹੈ।",
        "ਵਧੀਆ ਕੰਮ ਕਰਨ ਦਾ ਇਕੋ ਹੀ ਤਰੀਕਾ ਹੈ ਕਿ ਤੁਸੀਂ ਜੋ ਕਰਦੇ ਹੋ ਉਸ ਨਾਲ ਪਿਆਰ ਕਰੋ।"
    ],
    ro: [
        "Îmi place să învăț lucruri noi și să exersez în fiecare zi.",
        "Programarea este arta de a spune altui om ce vrei să facă calculatorul.",
        "Cel mai bun mod de a prezice viitorul este să-l creezi tu însuți.",
        "Succesul nu este final, eșecul nu este fatal: curajul de a continua contează.",
        "Singura modalitate de a face o treabă grozavă este să iubești ceea ce faci."
    ],
    bho: [
        "हम हर दिन नया चीज सीखे आ अभ्यास करे में मजा ले तानी।",
        "प्रोग्रामिंग दूसरका आदमी के बतावे के कला ह कि कंप्यूटर से का करावल जाव।",
        "भविष्याचा अंदाज घेण्याचा सर्वोत्तम मार्ग म्हणजे ते स्वतः तयार करणे.",
        "यश अंतिम नाही, अपयश घातक नाही: पुढे जाण्याचे धैर्य महत्त्वाचे आहे.",
        "उत्तम काम करण्याचा एकमेव मार्ग म्हणजे तुम्ही जे करता ते प्रेमाने करा."
    ],
    fa: [
        "من از یادگیری چیزهای جدید و تمرین هر روز لذت می‌برم.",
        "برنامه‌نویسی هنر گفتن به یک انسان دیگر است که می‌خواهید کامپیوتر چه کاری انجام دهد.",
        "بهترین راه پیش‌بینی آینده این است که خودتان آن را بسازید.",
        "موفقیت نهایی نیست، شکست کشنده نیست: مهم شجاعت ادامه دادن است.",
        "تنها راه انجام کار عالی این است که عاشق کاری باشید که انجام می‌دهید."
    ]
};

let startTime = null;
let intervalId = null;
let currentSentenceIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const referenceTextElement = document.getElementById('referenceText');
    const languageSelect = document.getElementById('language');
    const userInput = document.getElementById('userInput');
    const resultDiv = document.getElementById('result');
    const timerDisplay = document.getElementById('timer');
    const refreshButton = document.getElementById('refreshSentence');

    function showCurrentSentence(lang) {
        const sentences = referenceSentences[lang];
        referenceTextElement.textContent = sentences[currentSentenceIndex];
    }

    function updateDigitalTimer(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        document.getElementById('digit-min-1').textContent = Math.floor(min / 10);
        document.getElementById('digit-min-2').textContent = min % 10;
        document.getElementById('digit-sec-1').textContent = Math.floor(sec / 10);
        document.getElementById('digit-sec-2').textContent = sec % 10;
    }

    function updateReferenceText() {
        const lang = languageSelect.value;
        showCurrentSentence(lang);
        userInput.value = '';
        resultDiv.innerHTML = '';
        updateDigitalTimer(0);
        userInput.disabled = true;
        clearInterval(intervalId);
        startTime = null;
    }

    languageSelect.addEventListener('change', () => {
        currentSentenceIndex = 0; // Always start with the first sentence
        updateReferenceText();
    });

    refreshButton.addEventListener('click', () => {
        const lang = languageSelect.value;
        const sentences = referenceSentences[lang];
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        updateReferenceText();
    });

    // Initial load
    currentSentenceIndex = 0;
    updateReferenceText();

    window.startTest = function () {
        userInput.disabled = false;
        userInput.value = '';
        userInput.focus();
        resultDiv.innerHTML = '';
        let seconds = 0;
        startTime = new Date();
        updateDigitalTimer(0);

        // Remove highlighted mistakes from the reference sentence
        const lang = languageSelect.value;
        const reference = referenceSentences[lang][currentSentenceIndex];
        referenceTextElement.innerHTML = reference;

        clearInterval(intervalId);
        intervalId = setInterval(() => {
            seconds++;
            updateDigitalTimer(seconds);
        }, 1000);
    };

    // Levenshtein distance function
    function levenshtein(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    // Improved highlightAllMistakes: highlights only truly incorrect characters using alignment
    function highlightAllMistakes(reference, userText) {
        // Use dynamic programming to align the strings and backtrack the path
        const n = reference.length;
        const m = userText.length;
        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
        const action = Array.from({ length: n + 1 }, () => Array(m + 1).fill(''));

        // Initialize
        for (let i = 0; i <= n; i++) {
            dp[i][0] = i;
            action[i][0] = 'delete';
        }
        for (let j = 0; j <= m; j++) {
            dp[0][j] = j;
            action[0][j] = 'insert';
        }
        action[0][0] = '';

        // Fill DP table
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (reference[i - 1] === userText[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                    action[i][j] = 'match';
                } else {
                    // substitution
                    let min = dp[i - 1][j - 1];
                    let act = 'substitute';
                    // insertion
                    if (dp[i][j - 1] < min) {
                        min = dp[i][j - 1];
                        act = 'insert';
                    }
                    // deletion
                    if (dp[i - 1][j] < min) {
                        min = dp[i - 1][j];
                        act = 'delete';
                    }
                    dp[i][j] = min + 1;
                    action[i][j] = act;
                }
            }
        }

        // Backtrack to find which reference chars are mistakes and their positions
        let i = n, j = m;
        const refHighlights = Array(n).fill(false);
        const mistakePositions = [];
        let firstMistakeExpected = null;
        let firstMistakeGot = null;
        let firstMistakeIndex = null;
        while (i > 0 || j > 0) {
            if (i > 0 && j > 0 && action[i][j] === 'match') {
                i--; j--;
            } else if (i > 0 && j > 0 && action[i][j] === 'substitute') {
                refHighlights[i - 1] = true;
                mistakePositions.push(i); // 1-based
                if (firstMistakeIndex === null) {
                    firstMistakeIndex = i - 1;
                    firstMistakeExpected = reference[i - 1] || '(end of sentence)';
                    firstMistakeGot = userText[j - 1] || '(nothing)';
                }
                i--; j--;
            } else if (j > 0 && action[i][j] === 'insert') {
                j--;
            } else if (i > 0 && action[i][j] === 'delete') {
                refHighlights[i - 1] = true;
                mistakePositions.push(i); // 1-based
                if (firstMistakeIndex === null) {
                    firstMistakeIndex = i - 1;
                    firstMistakeExpected = reference[i - 1] || '(end of sentence)';
                    firstMistakeGot = '(nothing)';
                }
                i--;
            } else {
                // fallback
                if (i > 0) i--;
                if (j > 0) j--;
            }
        }

        // Build the highlighted string
        let result = '';
        for (let k = 0; k < n; k++) {
            if (refHighlights[k]) {
                result += '<span class="mistake-highlight">' + reference[k] + '</span>';
            } else {
                result += reference[k];
            }
        }
        // Return both the highlighted string and the mistake positions and first mistake info
        return {
            highlighted: result,
            mistakePositions: mistakePositions.reverse(), // in order
            firstMistakeExpected,
            firstMistakeGot,
            firstMistakeIndex
        };
    }

    window.checkTyping = function () {
        if (!startTime) {
            alert("Please press 'Start' before checking.");
            return;
        }

        const lang = languageSelect.value;
        const reference = referenceSentences[lang][currentSentenceIndex];
        const userText = userInput.value;

        const totalChars = reference.length;
        // Use Levenshtein distance for mistakes
        const errors = levenshtein(reference, userText);
        let matched = totalChars - errors;
        if (matched < 0) matched = 0;

        // Highlight all mistakes and get their positions
        const highlightResult = highlightAllMistakes(reference, userText);
        const mistakePositions = highlightResult.mistakePositions;
        let mistakeMessage = '';
        if (mistakePositions.length > 0) {
            const positionsStr = mistakePositions.join(', ');
            mistakeMessage = `<div class='mistake-msg'>Mistakes at positions <b>${positionsStr}</b></div>`;
        }

        const endTime = new Date();
        const timeTakenSec = (endTime - startTime) / 1000;
        const timeTakenMin = timeTakenSec / 60;

        const cpm = Math.round(userText.length / timeTakenMin);
        const wpm = Math.round(userText.trim().split(/\s+/).length / timeTakenMin);

        const accuracy = ((matched / totalChars) * 100).toFixed(2);
        const skillLevel =
            accuracy >= 90 ? "Excellent" :
                accuracy >= 75 ? "Good" :
                    accuracy >= 50 ? "Average" : "Needs Improvement";

        resultDiv.innerHTML = `
            <p>Accuracy: ${accuracy}%</p>
            <p>Skill Level: <strong>${skillLevel}</strong></p>
            <p>Mistakes: ${errors} out of ${totalChars} characters</p>
            <p>Typing Speed: <strong>${cpm} CPM</strong> | <strong>${wpm} WPM</strong></p>
            <p>Time Taken: ${timeTakenSec.toFixed(1)} seconds</p>
            ${mistakeMessage}
        `;

        // Highlight all mistakes in the reference sentence
        referenceTextElement.innerHTML = highlightResult.highlighted;

        clearInterval(intervalId);
        startTime = null;
        userInput.disabled = true;
    };
});
