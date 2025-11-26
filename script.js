// Define supported languages
const LANGUAGES = {
  en: {
    label: "🇬🇧 English",
    file: "translations/English.txt",
    dir: "ltr",
    ui: {
      select: "Select language",
      viewRules: "View site rules",
      reportIssue: "Report an issue to the Block Management Company",
      rulesTitle: "Regency Court Site Rules"
    }
  },
  pl: {
    label: "🇵🇱 Polski",
    file: "translations/Polish.txt",
    dir: "ltr",
    ui: {
      select: "Wybierz język",
      viewRules: "Zobacz zasady obiektu",
      reportIssue: "Zgłoś problem do zarządcy",
      rulesTitle: "Zasady obiektu Regency Court"
    }
  },
  ro: {
    label: "🇷🇴 Română",
    file: "translations/Romanian.txt",
    dir: "ltr",
    ui: {
      select: "Selectați limba",
      viewRules: "Vezi regulile complexului",
      reportIssue: "Raportați o problemă administratorului",
      rulesTitle: "Regulile complexului Regency Court"
    }
  },
  lt: {
    label: "🇱🇹 Lietuvių",
    file: "translations/Lithuanian.txt",
    dir: "ltr",
    ui: {
      select: "Pasirinkite kalbą",
      viewRules: "Peržiūrėti taisykles",
      reportIssue: "Pranešti apie problemą administracijai",
      rulesTitle: "Regency Court taisyklės"
    }
  },
  lv: {
    label: "🇱🇻 Latviešu",
    file: "translations/Latvian.txt",
    dir: "ltr",
    ui: {
      select: "Izvēlieties valodu",
      viewRules: "Skatīt mājas noteikumus",
      reportIssue: "Ziņot par problēmu pārvaldniekam",
      rulesTitle: "Regency Court noteikumi"
    }
  },
  sk: {
    label: "🇸🇰 Slovenčina",
    file: "translations/Slovak.txt",
    dir: "ltr",
    ui: {
      select: "Vyberte jazyk",
      viewRules: "Zobraziť pravidlá objektu",
      reportIssue: "Nahlásiť problém správcovi",
      rulesTitle: "Pravidlá objektu Regency Court"
    }
  },
  pa: {
    label: "🇵🇰 ਪੰਜਾਬੀ / Punjabi",
    file: "translations/Punjabi.txt",
    dir: "ltr",
    ui: {
      select: "ਭਾਸ਼ਾ ਚੁਣੋ",
      viewRules: "ਸਾਈਟ ਨਿਯਮ ਵੇਖੋ",
      reportIssue: "ਬਲਾਕ ਮੈਨੇਜਮੈਂਟ ਕੰਪਨੀ ਨੂੰ ਸਮੱਸਿਆ ਦੱਸੋ",
      rulesTitle: "ਰੇਜੈਂਸੀ ਕੋਰਟ ਸਾਈਟ ਨਿਯਮ"
    }
  },
  ur: {
    label: "🇵🇰 اردو / Urdu",
    file: "translations/Urdu.txt",
    dir: "rtl",
    ui: {
      select: "زبان منتخب کریں",
      viewRules: "سائٹ کے قواعد دیکھیں",
      reportIssue: "بلاک مینجمنٹ کمپنی کو مسئلہ بتائیں",
      rulesTitle: "ریجنسی کورٹ سائٹ قوانین"
    }
  },
  bn: {
    label: "🇧🇩 বাংলা / Bengali",
    file: "translations/Bengali.txt",
    dir: "ltr",
    ui: {
      select: "ভাষা নির্বাচন করুন",
      viewRules: "সাইটের নিয়মাবলী দেখুন",
      reportIssue: "ম্যানেজমেন্ট কোম্পানিকে সমস্যা জানান",
      rulesTitle: "রিজেন্সি কোর্ট সাইট নিয়মাবলী"
    }
  },
  ar: {
    label: "🇸🇦 العربية / Arabic",
    file: "translations/Arabic.txt",
    dir: "rtl",
    ui: {
      select: "اختر اللغة",
      viewRules: "عرض قواعد الموقع",
      reportIssue: "أبلغ شركة الإدارة عن مشكلة",
      rulesTitle: "قواعد موقع ريجنسي كورت"
    }
  },
  fr: {
    label: "🇫🇷 Français",
    file: "translations/French.txt",
    dir: "ltr",
    ui: {
      select: "Choisissez la langue",
      viewRules: "Voir les règles du site",
      reportIssue: "Signaler un problème au gestionnaire",
      rulesTitle: "Règles du site Regency Court"
    }
  },
  es: {
    label: "🇪🇸 Español",
    file: "translations/Spanish.txt",
    dir: "ltr",
    ui: {
      select: "Seleccione el idioma",
      viewRules: "Ver normas del sitio",
      reportIssue: "Informar de un problema a la administración",
      rulesTitle: "Normas del sitio Regency Court"
    }
  },
  pt: {
    label: "🇵🇹 Português",
    file: "translations/Portuguese.txt",
    dir: "ltr",
    ui: {
      select: "Selecione o idioma",
      viewRules: "Ver regras do condomínio",
      reportIssue: "Comunicar um problema à administração",
      rulesTitle: "Regras do Regency Court"
    }
  },
  tr: {
    label: "🇹🇷 Türkçe",
    file: "translations/Turkish.txt",
    dir: "ltr",
    ui: {
      select: "Dil seçin",
      viewRules: "Site kurallarını görüntüle",
      reportIssue: "Yönetim şirketine sorunu bildirin",
      rulesTitle: "Regency Court site kuralları"
    }
  },
  so: {
    label: "🇸🇴 Soomaali",
    file: "translations/Somali.txt",
    dir: "ltr",
    ui: {
      select: "Dooro luqadda",
      viewRules: "Eeg xeerarka goobta",
      reportIssue: "Ka warbixi dhibaato shirkadda maamulka",
      rulesTitle: "Xeerarka Regency Court"
    }
  },
  cs: {
    label: "🇨🇿 Čeština",
    file: "translations/Czech.txt",
    dir: "ltr",
    ui: {
      select: "Vyberte jazyk",
      viewRules: "Zobrazit pravidla objektu",
      reportIssue: "Nahlásit problém správci",
      rulesTitle: "Pravidla objektu Regency Court"
    }
  },
  ru: {
    label: "🇷🇺 Русский",
    file: "translations/Russian.txt",
    dir: "ltr",
    ui: {
      select: "Выберите язык",
      viewRules: "Просмотреть правила объекта",
      reportIssue: "Сообщить о проблеме управляющей компании",
      rulesTitle: "Правила территории Regency Court"
    }
  },
  uk: {
    label: "🇺🇦 Українська",
    file: "translations/Ukrainian.txt",
    dir: "ltr",
    ui: {
      select: "Оберіть мову",
      viewRules: "Переглянути правила комплексу",
      reportIssue: "Повідомити керуючу компанію про проблему",
      rulesTitle: "Правила території Regency Court"
    }
  },
  zh: {
    label: "🇨🇳 中文 (简体)",
    file: "translations/Chinese.txt",
    dir: "ltr",
    ui: {
      select: "选择语言",
      viewRules: "查看场地规则",
      reportIssue: "向物业公司报告问题",
      rulesTitle: "雷金西苑场地规则"
    }
  },
  gu: {
    label: "🇮🇳 ગુજરાતી",
    file: "translations/Gujarati.txt",
    dir: "ltr",
    ui: {
      select: "ભાષા પસંદ કરો",
      viewRules: "સાઇટના નિયમો જુઓ",
      reportIssue: "બ્લોક મેનેજમેન્ટ કંપનીને પ્રશ્ન જણાવો",
      rulesTitle: "રેજન્સી કોર્ટ સાઇટ નિયમો"
    }
  },
  tl: {
    label: "🇵🇭 Filipino",
    file: "translations/Filipino.txt",
    dir: "ltr",
    ui: {
      select: "Piliin ang wika",
      viewRules: "Tingnan ang mga patakaran ng site",
      reportIssue: "I-ulat ang isyu sa kumpanya ng pamamahala",
      rulesTitle: "Mga Panuntunan ng Regency Court"
    }
  },
  hi: {
    label: "🇮🇳 हिन्दी",
    file: "translations/Hindi.txt",
    dir: "ltr",
    ui: {
      select: "भाषा चुनें",
      viewRules: "साइट के नियम देखें",
      reportIssue: "ब्लॉक प्रबंधन कंपनी को समस्या बताएं",
      rulesTitle: "रेजेंसी कोर्ट साइट नियम"
    }
  }
};

const languageSelect = document.getElementById("languageSelect");
const languageLabel = document.getElementById("languageLabel");
const viewRulesBtn = document.getElementById("viewRulesBtn");
const reportIssueBtn = document.getElementById("reportIssueBtn");
const rulesPanel = document.getElementById("rulesPanel");
const rulesTitle = document.getElementById("rulesTitle");
const rulesContent = document.getElementById("rulesContent");
const page = document.querySelector("body");

// Populate dropdown
Object.entries(LANGUAGES).forEach(([code, cfg]) => {
  const opt = document.createElement("option");
  opt.value = code;
  opt.textContent = cfg.label;
  languageSelect.appendChild(opt);
});

// Default language = English
languageSelect.value = "en";
updateLanguage("en");

// When user changes language
languageSelect.addEventListener("change", (e) => {
  const code = e.target.value;
  updateLanguage(code);
});

// Toggle rules panel visibility
viewRulesBtn.addEventListener("click", () => {
  if (rulesPanel.hasAttribute("hidden")) {
    rulesPanel.removeAttribute("hidden");
  } else {
    rulesPanel.setAttribute("hidden", "hidden");
  }
});

// Always configure the email button
const email = "info@block-buddy.co.uk";
const subject = encodeURIComponent("Query from Regency Court");
reportIssueBtn.href = `mailto:${email}?subject=${subject}`;

// Helper: update language UI + load rules text
function updateLanguage(code) {
  const cfg = LANGUAGES[code];
  if (!cfg) return;

  // Direction
  if (cfg.dir === "rtl") {
    page.setAttribute("dir", "rtl");
    rulesPanel.classList.add("rtl");
  } else {
    page.setAttribute("dir", "ltr");
    rulesPanel.classList.remove("rtl");
  }

  // UI labels
  languageLabel.textContent = "🌐 " + (cfg.ui.select || "Select language");
  viewRulesBtn.querySelector(".btn-text").textContent =
    cfg.ui.viewRules || "View site rules";
  reportIssueBtn.querySelector(".btn-text").textContent =
    cfg.ui.reportIssue ||
    "Report an issue to the Block Management Company";
  rulesTitle.textContent =
    cfg.ui.rulesTitle || "Regency Court Site Rules";

  // Load the rules text from the appropriate .txt file
  fetch(cfg.file)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load rules");
      return res.text();
    })
    .then((text) => {
      rulesContent.textContent = text.trim();
    })
    .catch(() => {
      rulesContent.textContent =
        "Rules could not be loaded for this language.";
    });
}
