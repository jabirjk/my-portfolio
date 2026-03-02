import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { about: "About", projects: "Projects", experience: "Experience", contact: "Contact", resume: "Resume" },
      hero: { status: "AVAILABLE FOR NEW PROJECTS", subtitle: "Building scalable and high-performance web applications.", viewWork: "View My Work", latestNews: "Latest News", downloadCV: "Download CV", experience: "Experience", years: "4+ Years", scroll: "Scroll" },
      about: { title: "About Me", subtitle: "Biography", bio1: "I am a dedicated Full Stack Developer with 4+ years of experience building scalable web applications using modern frontend and backend technologies. I specialize in designing RESTful APIs, responsive UIs, and robust database architectures.", bio2: "Passionate about clean code, performance optimization, and solving real-world problems. With a B.Sc. in Computer Science from Haramaya University, I bring a strong theoretical foundation to practical, high-impact software development.", skillsTitle: "Core Proficiencies", quote: "Always learning, always evolving. The tech landscape changes every day, and I'm here to master the next wave." },
      projects: { title: "Featured Projects", subtitle: "My Work", viewProject: "View Project", modal: { overview: "Overview", challenge: "The Challenge", features: "Key Features", gallery: "Gallery", tech: "Technologies", impact: "Impact", live: "Live Preview", repo: "View Repository", caseStudy: "Full Case Study" } },
      experience: { title: "Experience", subtitle: "Professional Journey" },
      contact: { title: "Get In Touch", subtitle: "Contact", name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send Message" },
      footer: { rights: "All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Service", status: "System Status: Optimal" }
    }
  },
  es: {
    translation: {
      nav: { about: "Sobre mí", projects: "Proyectos", experience: "Experiencia", contact: "Contacto", resume: "Currículum" },
      hero: { status: "DISPONIBLE PARA NUEVOS PROYECTOS", subtitle: "Construyendo aplicaciones web escalables y de alto rendimiento.", viewWork: "Ver mi trabajo", latestNews: "Últimas noticias", downloadCV: "Descargar CV", experience: "Experiencia", years: "4+ Años", scroll: "Desplazarse" },
      about: { title: "Sobre mí", subtitle: "Biografía", bio1: "Soy un Desarrollador Full Stack dedicado con más de 4 años de experiencia creando aplicaciones web escalables utilizando tecnologías modernas de frontend y backend. Me especializo en diseñar APIs RESTful, interfaces de usuario receptivas y arquitecturas de bases de datos robustas.", bio2: "Apasionado por el código limpio, la optimización del rendimiento y la resolución de problemas del mundo real. Con una licenciatura en Ciencias de la Computación de la Universidad de Haramaya, aporto una sólida base teórica al desarrollo de software práctico y de alto impacto.", skillsTitle: "Habilidades Principales", quote: "Siempre aprendiendo, siempre evolucionando. El panorama tecnológico cambia cada día, y estoy aquí para dominar la próxima ola." },
      projects: { title: "Proyectos Destacados", subtitle: "Mi Trabajo", viewProject: "Ver Proyecto", modal: { overview: "Descripción general", challenge: "El Desafío", features: "Características Principales", gallery: "Galería", tech: "Tecnologías", impact: "Impacto", live: "Vista Previa en Vivo", repo: "Ver Repositorio", caseStudy: "Estudio de Caso Completo" } },
      experience: { title: "Experiencia", subtitle: "Trayectoria Profesional" },
      contact: { title: "Ponerse en contacto", subtitle: "Contacto", name: "Nombre", email: "Correo electrónico", subject: "Asunto", message: "Mensaje", send: "Enviar Mensaje" },
      footer: { rights: "Todos los derechos reservados.", privacy: "Política de Privacidad", terms: "Términos de Servicio", status: "Estado del Sistema: Óptimo" }
    }
  },
  fr: {
    translation: {
      nav: { about: "À propos", projects: "Projets", experience: "Expérience", contact: "Contact", resume: "CV" },
      hero: { status: "DISPONIBLE POUR DE NOUVEAUX PROJETS", subtitle: "Création d'applications web évolutives et performantes.", viewWork: "Voir mon travail", latestNews: "Dernières nouvelles", downloadCV: "Télécharger le CV", experience: "Expérience", years: "4+ Ans", scroll: "Défiler" },
      about: { title: "À propos de moi", subtitle: "Biographie", bio1: "Je suis un développeur Full Stack dévoué avec plus de 4 ans d'expérience dans la création d'applications web évolutives utilisant des technologies frontend et backend modernes. Je me spécialise dans la conception d'API RESTful, d'interfaces utilisateur réactives et d'architectures de bases de données robustes.", bio2: "Passionné par le code propre, l'optimisation des performances et la résolution de problèmes du monde réel. Avec une licence en informatique de l'Université d'Haramaya, j'apporte une base théorique solide au développement de logiciels pratiques et à fort impact.", skillsTitle: "Compétences Principales", quote: "Toujours apprendre, toujours évoluer. Le paysage technologique change tous les jours, et je suis ici pour maîtriser la prochaine vague." },
      projects: { title: "Projets en Vedette", subtitle: "Mon Travail", viewProject: "Voir le Projet", modal: { overview: "Aperçu", challenge: "Le Défi", features: "Caractéristiques Principales", gallery: "Galerie", tech: "Technologies", impact: "Impact", live: "Aperçu en Direct", repo: "Voir le Dépôt", caseStudy: "Étude de Cas Complète" } },
      experience: { title: "Expérience", subtitle: "Parcours Professionnel" },
      contact: { title: "Entrer en contact", subtitle: "Contact", name: "Nom", email: "Email", subject: "Sujet", message: "Message", send: "Envoyer le Message" },
      footer: { rights: "Tous droits réservés.", privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation", status: "État du Système : Optimal" }
    }
  },
  de: {
    translation: {
      nav: { about: "Über mich", projects: "Projekte", experience: "Erfahrung", contact: "Kontakt", resume: "Lebenslauf" },
      hero: { status: "VERFÜGBAR FÜR NEUE PROJEKTE", subtitle: "Entwicklung skalierbarer und leistungsstarker Webanwendungen.", viewWork: "Meine Arbeit ansehen", latestNews: "Neueste Nachrichten", downloadCV: "Lebenslauf herunterladen", experience: "Erfahrung", years: "4+ Jahre", scroll: "Scrollen" },
      about: { title: "Über mich", subtitle: "Biografie", bio1: "Ich bin ein engagierter Full-Stack-Entwickler mit mehr als 4 Jahren Erfahrung in der Entwicklung skalierbarer Webanwendungen unter Verwendung moderner Frontend- und Backend-Technologien. Ich bin spezialisiert auf die Entwicklung von RESTful APIs, reaktionsschnellen UIs und robusten Datenbankarchitekturen.", bio2: "Leidenschaftlich für sauberen Code, Leistungsoptimierung und die Lösung realer Probleme. Mit einem B.Sc. in Informatik der Haramaya University bringe ich eine starke theoretische Grundlage für die praktische, wirkungsvolle Softwareentwicklung mit.", skillsTitle: "Kernkompetenzen", quote: "Immer lernen, sich immer weiterentwickeln. Die Technologielandschaft ändert sich jeden Tag, und ich bin hier, um die nächste Welle zu meistern." },
      projects: { title: "Ausgewählte Projekte", subtitle: "Meine Arbeit", viewProject: "Projekt ansehen", modal: { overview: "Überblick", challenge: "Die Herausforderung", features: "Hauptmerkmale", gallery: "Galerie", tech: "Technologien", impact: "Auswirkungen", live: "Live-Vorschau", repo: "Repository ansehen", caseStudy: "Vollständige Fallstudie" } },
      experience: { title: "Erfahrung", subtitle: "Beruflicher Werdegang" },
      contact: { title: "In Kontakt kommen", subtitle: "Kontakt", name: "Name", email: "E-Mail", subject: "Betreff", message: "Nachricht", send: "Nachricht senden" },
      footer: { rights: "Alle Rechte vorbehalten.", privacy: "Datenschutzrichtlinie", terms: "Nutzungsbedingungen", status: "Systemstatus: Optimal" }
    }
  },
  zh: {
    translation: {
      nav: { about: "关于我", projects: "项目", experience: "经验", contact: "联系", resume: "简历" },
      hero: { status: "可接受新项目", subtitle: "构建可扩展和高性能的Web应用程序。", viewWork: "查看我的作品", latestNews: "最新消息", downloadCV: "下载简历", experience: "经验", years: "4+ 年", scroll: "滚动" },
      about: { title: "关于我", subtitle: "个人简介", bio1: "我是一名敬业的全栈开发人员，拥有4年以上的经验，使用现代前端和后端技术构建可扩展的Web应用程序。我专注于设计RESTful API，响应式UI和强大的数据库架构。", bio2: "热衷于整洁的代码，性能优化和解决现实世界的问题。凭借哈拉马亚大学计算机科学学士学位，我为实用，高影响力的软件开发带来了坚实的理论基础。", skillsTitle: "核心技能", quote: "不断学习，不断发展。技术领域每天都在变化，我在这里掌握下一波浪潮。" },
      projects: { title: "精选项目", subtitle: "我的工作", viewProject: "查看项目", modal: { overview: "概述", challenge: "挑战", features: "主要特点", gallery: "画廊", tech: "技术", impact: "影响", live: "实时预览", repo: "查看存储库", caseStudy: "完整案例研究" } },
      experience: { title: "经验", subtitle: "职业历程" },
      contact: { title: "取得联系", subtitle: "联系", name: "姓名", email: "电子邮件", subject: "主题", message: "信息", send: "发送信息" },
      footer: { rights: "版权所有。", privacy: "隐私政策", terms: "服务条款", status: "系统状态：最佳" }
    }
  },
  ar: {
    translation: {
      nav: { about: "عني", projects: "المشاريع", experience: "الخبرة", contact: "اتصل", resume: "السيرة الذاتية" },
      hero: { status: "متاح لمشاريع جديدة", subtitle: "بناء تطبيقات ويب قابلة للتطوير وعالية الأداء.", viewWork: "عرض عملي", latestNews: "أحدث الأخبار", downloadCV: "تحميل السيرة الذاتية", experience: "الخبرة", years: "4+ سنوات", scroll: "تمرير" },
      about: { title: "عني", subtitle: "سيرة شخصية", bio1: "أنا مطور Full Stack متفاني ولدي أكثر من 4 سنوات من الخبرة في بناء تطبيقات ويب قابلة للتطوير باستخدام تقنيات الواجهة الأمامية والخلفية الحديثة. أنا متخصص في تصميم واجهات برمجة التطبيقات RESTful، وواجهات المستخدم سريعة الاستجابة، وبنى قواعد البيانات القوية.", bio2: "شغوف بالكود النظيف وتحسين الأداء وحل مشاكل العالم الحقيقي. مع درجة البكالوريوس في علوم الكمبيوتر من جامعة هارامايا، أقدم أساسًا نظريًا قويًا لتطوير البرمجيات العملية وعالية التأثير.", skillsTitle: "الكفاءات الأساسية", quote: "دائما أتعلم، دائما أتطور. يتغير المشهد التكنولوجي كل يوم، وأنا هنا لإتقان الموجة التالية." },
      projects: { title: "المشاريع المميزة", subtitle: "عملي", viewProject: "عرض المشروع", modal: { overview: "نظرة عامة", challenge: "التحدي", features: "الميزات الرئيسية", gallery: "معرض الصور", tech: "التقنيات", impact: "التأثير", live: "معاينة حية", repo: "عرض المستودع", caseStudy: "دراسة حالة كاملة" } },
      experience: { title: "الخبرة", subtitle: "الرحلة المهنية" },
      contact: { title: "ابقى على تواصل", subtitle: "اتصل", name: "الاسم", email: "البريد الإلكتروني", subject: "الموضوع", message: "رسالة", send: "إرسال رسالة" },
      footer: { rights: "كل الحقوق محفوظة.", privacy: "سياسة الخصوصية", terms: "شروط الخدمة", status: "حالة النظام: مثالية" }
    }
  },
  hi: {
    translation: {
      nav: { about: "मेरे बारे में", projects: "प्रोजेक्ट्स", experience: "अनुभव", contact: "संपर्क", resume: "रेज़्यूमे" },
      hero: { status: "नए प्रोजेक्ट्स के लिए उपलब्ध", subtitle: "स्केलेबल और उच्च-प्रदर्शन वाले वेब एप्लिकेशन बनाना।", viewWork: "मेरा काम देखें", latestNews: "ताज़ा ख़बरें", downloadCV: "सीवी डाउनलोड करें", experience: "अनुभव", years: "4+ वर्ष", scroll: "स्क्रॉल करें" },
      about: { title: "मेरे बारे में", subtitle: "जीवनी", bio1: "मैं एक समर्पित फुल स्टैक डेवलपर हूं, जिसके पास आधुनिक फ्रंटएंड और बैकएंड तकनीकों का उपयोग करके स्केलेबल वेब एप्लिकेशन बनाने का 4+ वर्षों का अनुभव है। मैं RESTful API, उत्तरदायी UI और मजबूत डेटाबेस आर्किटेक्चर डिजाइन करने में माहिर हूं।", bio2: "स्वच्छ कोड, प्रदर्शन अनुकूलन और वास्तविक दुनिया की समस्याओं को हल करने के प्रति जुनूनी। हरमाया विश्वविद्यालय से कंप्यूटर विज्ञान में बी.एससी. के साथ, मैं व्यावहारिक, उच्च प्रभाव वाले सॉफ्टवेयर विकास के लिए एक मजबूत सैद्धांतिक आधार लाता हूं।", skillsTitle: "मुख्य दक्षताएँ", quote: "हमेशा सीखना, हमेशा विकसित होना। तकनीकी परिदृश्य हर दिन बदलता है, और मैं अगली लहर में महारत हासिल करने के लिए यहां हूं।" },
      projects: { title: "विशेष रुप से प्रदर्शित प्रोजेक्ट्स", subtitle: "मेरा काम", viewProject: "प्रोजेक्ट देखें", modal: { overview: "अवलोकन", challenge: "चुनौती", features: "मुख्य विशेषताएं", gallery: "गैलरी", tech: "तकनीक", impact: "प्रभाव", live: "लाइव पूर्वावलोकन", repo: "रिपॉजिटरी देखें", caseStudy: "पूर्ण केस स्टडी" } },
      experience: { title: "अनुभव", subtitle: "व्यावसायिक यात्रा" },
      contact: { title: "संपर्क में रहें", subtitle: "संपर्क", name: "नाम", email: "ईमेल", subject: "विषय", message: "संदेश", send: "संदेश भेजें" },
      footer: { rights: "सर्वाधिकार सुरक्षित।", privacy: "गोपनीयता नीति", terms: "सेवा की शर्तें", status: "सिस्टम स्थिति: इष्टतम" }
    }
  },
  pt: {
    translation: {
      nav: { about: "Sobre mim", projects: "Projetos", experience: "Experiência", contact: "Contato", resume: "Currículo" },
      hero: { status: "DISPONÍVEL PARA NOVOS PROJETOS", subtitle: "Construindo aplicações web escaláveis e de alto desempenho.", viewWork: "Ver meu trabalho", latestNews: "Últimas notícias", downloadCV: "Baixar CV", experience: "Experiência", years: "4+ Anos", scroll: "Rolar" },
      about: { title: "Sobre mim", subtitle: "Biografia", bio1: "Sou um Desenvolvedor Full Stack dedicado com mais de 4 anos de experiência na criação de aplicações web escaláveis usando tecnologias modernas de frontend e backend. Sou especialista em projetar APIs RESTful, UIs responsivas e arquiteturas de banco de dados robustas.", bio2: "Apaixonado por código limpo, otimização de desempenho e resolução de problemas do mundo real. Com um B.Sc. em Ciência da Computação pela Universidade de Haramaya, trago uma forte base teórica para o desenvolvimento de software prático e de alto impacto.", skillsTitle: "Principais Competências", quote: "Sempre aprendendo, sempre evoluindo. O cenário tecnológico muda todos os dias, e estou aqui para dominar a próxima onda." },
      projects: { title: "Projetos em Destaque", subtitle: "Meu Trabalho", viewProject: "Ver Projeto", modal: { overview: "Visão Geral", challenge: "O Desafio", features: "Principais Recursos", gallery: "Galeria", tech: "Tecnologias", impact: "Impacto", live: "Pré-visualização ao Vivo", repo: "Ver Repositório", caseStudy: "Estudo de Caso Completo" } },
      experience: { title: "Experiência", subtitle: "Jornada Profissional" },
      contact: { title: "Entrar em contato", subtitle: "Contato", name: "Nome", email: "E-mail", subject: "Assunto", message: "Mensagem", send: "Enviar Mensagem" },
      footer: { rights: "Todos os direitos reservados.", privacy: "Política de Privacidade", terms: "Termos de Serviço", status: "Status do Sistema: Ideal" }
    }
  },
  ru: {
    translation: {
      nav: { about: "Обо мне", projects: "Проекты", experience: "Опыт", contact: "Контакты", resume: "Резюме" },
      hero: { status: "ДОСТУПЕН ДЛЯ НОВЫХ ПРОЕКТОВ", subtitle: "Создание масштабируемых и высокопроизводительных веб-приложений.", viewWork: "Посмотреть мои работы", latestNews: "Последние новости", downloadCV: "Скачать CV", experience: "Опыт", years: "4+ Года", scroll: "Прокрутить" },
      about: { title: "Обо мне", subtitle: "Биография", bio1: "Я преданный своему делу Full Stack разработчик с более чем 4-летним опытом создания масштабируемых веб-приложений с использованием современных технологий frontend и backend. Я специализируюсь на проектировании RESTful API, адаптивных пользовательских интерфейсов и надежных архитектур баз данных.", bio2: "Увлечен чистым кодом, оптимизацией производительности и решением реальных проблем. Имея степень бакалавра компьютерных наук Университета Харамайя, я привношу прочную теоретическую базу в практическую разработку программного обеспечения с высокой отдачей.", skillsTitle: "Основные компетенции", quote: "Всегда учусь, всегда развиваюсь. Технологический ландшафт меняется каждый день, и я здесь, чтобы освоить следующую волну." },
      projects: { title: "Избранные проекты", subtitle: "Моя работа", viewProject: "Посмотреть проект", modal: { overview: "Обзор", challenge: "Задача", features: "Ключевые особенности", gallery: "Галерея", tech: "Технологии", impact: "Влияние", live: "Предпросмотр", repo: "Посмотреть репозиторий", caseStudy: "Полное тематическое исследование" } },
      experience: { title: "Опыт", subtitle: "Профессиональный путь" },
      contact: { title: "Связаться", subtitle: "Контакты", name: "Имя", email: "Электронная почта", subject: "Тема", message: "Сообщение", send: "Отправить сообщение" },
      footer: { rights: "Все права защищены.", privacy: "Политика конфиденциальности", terms: "Условия использования", status: "Статус системы: Оптимальный" }
    }
  },
  ja: {
    translation: {
      nav: { about: "私について", projects: "プロジェクト", experience: "経験", contact: "連絡先", resume: "履歴書" },
      hero: { status: "新しいプロジェクトに対応可能", subtitle: "スケーラブルで高性能なWebアプリケーションの構築。", viewWork: "私の作品を見る", latestNews: "最新ニュース", downloadCV: "履歴書をダウンロード", experience: "経験", years: "4年以上", scroll: "スクロール" },
      about: { title: "私について", subtitle: "略歴", bio1: "私は、最新のフロントエンドおよびバックエンド技術を使用してスケーラブルなWebアプリケーションを構築する4年以上の経験を持つ、献身的なフルスタック開発者です。RESTful API、レスポンシブUI、堅牢なデータベースアーキテクチャの設計を専門としています。", bio2: "クリーンなコード、パフォーマンスの最適化、現実世界の問題解決に情熱を注いでいます。ハラマヤ大学でコンピュータサイエンスの学士号を取得しており、実用的で影響力の高いソフトウェア開発に強力な理論的基盤をもたらします。", skillsTitle: "コアコンピタンス", quote: "常に学び、常に進化する。テクノロジーの状況は毎日変化しており、私は次の波をマスターするためにここにいます。" },
      projects: { title: "注目のプロジェクト", subtitle: "私の仕事", viewProject: "プロジェクトを見る", modal: { overview: "概要", challenge: "課題", features: "主な機能", gallery: "ギャラリー", tech: "テクノロジー", impact: "影響", live: "ライブプレビュー", repo: "リポジトリを見る", caseStudy: "完全なケーススタディ" } },
      experience: { title: "経験", subtitle: "プロフェッショナルな旅" },
      contact: { title: "連絡を取る", subtitle: "連絡先", name: "名前", email: "メール", subject: "件名", message: "メッセージ", send: "メッセージを送信" },
      footer: { rights: "全著作権所有。", privacy: "プライバシーポリシー", terms: "利用規約", status: "システムステータス：最適" }
    }
  },
  ko: {
    translation: {
      nav: { about: "내 소개", projects: "프로젝트", experience: "경력", contact: "연락처", resume: "이력서" },
      hero: { status: "새로운 프로젝트 가능", subtitle: "확장 가능하고 성능이 뛰어난 웹 애플리케이션 구축.", viewWork: "내 작업 보기", latestNews: "최신 뉴스", downloadCV: "이력서 다운로드", experience: "경력", years: "4+년", scroll: "스크롤" },
      about: { title: "내 소개", subtitle: "약력", bio1: "저는 최신 프런트엔드 및 백엔드 기술을 사용하여 확장 가능한 웹 애플리케이션을 구축한 4년 이상의 경험을 가진 헌신적인 풀스택 개발자입니다. RESTful API, 반응형 UI 및 강력한 데이터베이스 아키텍처 설계가 전문입니다.", bio2: "깔끔한 코드, 성능 최적화 및 실제 문제 해결에 열정을 가지고 있습니다. 하라마야 대학에서 컴퓨터 공학 학사 학위를 취득하여 실용적이고 영향력 있는 소프트웨어 개발에 강력한 이론적 기반을 제공합니다.", skillsTitle: "핵심 역량", quote: "항상 배우고, 항상 진화합니다. 기술 환경은 매일 변하며, 저는 다음 물결을 마스터하기 위해 여기에 있습니다." },
      projects: { title: "주요 프로젝트", subtitle: "내 작업", viewProject: "프로젝트 보기", modal: { overview: "개요", challenge: "과제", features: "주요 특징", gallery: "갤러리", tech: "기술", impact: "영향", live: "라이브 미리보기", repo: "저장소 보기", caseStudy: "전체 사례 연구" } },
      experience: { title: "경력", subtitle: "전문적인 여정" },
      contact: { title: "연락하기", subtitle: "연락처", name: "이름", email: "이메일", subject: "제목", message: "메시지", send: "메시지 보내기" },
      footer: { rights: "모든 권리 보유.", privacy: "개인정보 보호정책", terms: "서비스 약관", status: "시스템 상태: 최적" }
    }
  },
  it: {
    translation: {
      nav: { about: "Chi sono", projects: "Progetti", experience: "Esperienza", contact: "Contatto", resume: "CV" },
      hero: { status: "DISPONIBILE PER NUOVI PROGETTI", subtitle: "Costruire applicazioni web scalabili e ad alte prestazioni.", viewWork: "Guarda il mio lavoro", latestNews: "Ultime notizie", downloadCV: "Scarica CV", experience: "Esperienza", years: "4+ Anni", scroll: "Scorri" },
      about: { title: "Chi sono", subtitle: "Biografia", bio1: "Sono un Full Stack Developer dedicato con oltre 4 anni di esperienza nella creazione di applicazioni web scalabili utilizzando moderne tecnologie frontend e backend. Sono specializzato nella progettazione di API RESTful, interfacce utente reattive e architetture di database robuste.", bio2: "Appassionato di codice pulito, ottimizzazione delle prestazioni e risoluzione di problemi del mondo reale. Con una laurea in Informatica presso l'Università di Haramaya, porto una solida base teorica allo sviluppo di software pratico e di grande impatto.", skillsTitle: "Competenze Principali", quote: "Sempre a imparare, sempre a evolvere. Il panorama tecnologico cambia ogni giorno e io sono qui per padroneggiare la prossima onda." },
      projects: { title: "Progetti in Evidenza", subtitle: "Il Mio Lavoro", viewProject: "Vedi Progetto", modal: { overview: "Panoramica", challenge: "La Sfida", features: "Caratteristiche Principali", gallery: "Galleria", tech: "Tecnologie", impact: "Impatto", live: "Anteprima dal Vivo", repo: "Vedi Repository", caseStudy: "Caso di Studio Completo" } },
      experience: { title: "Esperienza", subtitle: "Percorso Professionale" },
      contact: { title: "Mettiti in contatto", subtitle: "Contatto", name: "Nome", email: "Email", subject: "Oggetto", message: "Messaggio", send: "Invia Messaggio" },
      footer: { rights: "Tutti i diritti riservati.", privacy: "Informativa sulla Privacy", terms: "Termini di Servizio", status: "Stato del Sistema: Ottimale" }
    }
  },
  am: {
    translation: {
      nav: { about: "ስለ እኔ", projects: "ፕሮጀክቶች", experience: "ልምድ", contact: "ግንኙነት", resume: "ሲቪ" },
      hero: { status: "ለአዳዲስ ፕሮጀክቶች ዝግጁ", subtitle: "ሊለኩ የሚችሉ እና ከፍተኛ አፈጻጸም ያላቸው የድር መተግበሪያዎችን መገንባት።", viewWork: "ስራዬን ይመልከቱ", latestNews: "የቅርብ ጊዜ ዜናዎች", downloadCV: "ሲቪ አውርድ", experience: "ልምድ", years: "4+ ዓመታት", scroll: "ወደ ታች" },
      about: { title: "ስለ እኔ", subtitle: "ባዮግራፊ", bio1: "እኔ ዘመናዊ የፊት እና የኋላ ቴክኖሎጂዎችን በመጠቀም ሊለኩ የሚችሉ የድር መተግበሪያዎችን በመገንባት የ 4+ ዓመታት ልምድ ያለኝ ቁርጠኛ የሙሉ ስታክ አልሚ ነኝ። እኔ የ RESTful APIs ፣ ምላሽ ሰጪ UIs እና ጠንካራ የውሂብ ጎታ አርክቴክቸር በመንደፍ ላይ እሰራለሁ።", bio2: "ስለ ንጹህ ኮድ ፣ የአፈፃፀም ማመቻጸት እና የእውነተኛ ዓለም ችግሮችን መፍታት ጥልቅ ስሜት አለኝ። ከሐረማያ ዩኒቨርሲቲ በኮምፒውተር ሳይንስ ቢ.ኤስ.ሲ ዲግሪ በማግኘት ፣ ለተግባራዊ እና ከፍተኛ ተጽዕኖ ላለው የሶፍትዌር ልማት ጠንካራ ቲዎሬቲካል መሰረት አመጣለሁ።", skillsTitle: "ዋና ብቃቶች", quote: "ሁልጊዜ መማር ፣ ሁልጊዜ ማደግ። የቴክኖሎጂው ገጽታ በየቀኑ ይለወጣል ፣ እና እኔ የሚቀጥለውን ማዕበል ለመቆጣጠር እዚህ ነኝ።" },
      projects: { title: "ተለይተው የቀረቡ ፕሮጀክቶች", subtitle: "የእኔ ስራ", viewProject: "ፕሮጀክቱን ይመልከቱ", modal: { overview: "አጠቃላይ እይታ", challenge: "ፈተናው", features: "ቁልፍ ባህሪያት", gallery: "ጋለሪ", tech: "ቴክኖሎጂዎች", impact: "ተፅዕኖ", live: "ቀጥታ እይታ", repo: "ሪፖዚቶሪውን ይመልከቱ", caseStudy: "ሙሉ የጉዳይ ጥናት" } },
      experience: { title: "ልምድ", subtitle: "የሙያ ጉዞ" },
      contact: { title: "ያግኙኝ", subtitle: "ግንኙነት", name: "ስም", email: "ኢሜይል", subject: "ርዕሰ ጉዳይ", message: "መልእክት", send: "መልእክት ላክ" },
      footer: { rights: "መብቱ በህግ የተጠበቀ ነው።", privacy: "የግላዊነት ፖሊሲ", terms: "የአገልግሎት ውል", status: "የስርዓት ሁኔታ: በጥሩ ሁኔታ ላይ" }
    }
  },
  om: {
    translation: {
      nav: { about: "Waa'ee koo", projects: "Pirojektoota", experience: "Muuxannoo", contact: "Qunnamtii", resume: "CV" },
      hero: { status: "PIROJEKTOOTA HAARAAF QOPHII DHA", subtitle: "Appilikeeshiniiwwan weebii bal'achuu danda'an fi raawwii olaanaa qaban ijaaruu.", viewWork: "Hojii koo ilaali", latestNews: "Oduuwwan dhihoo", downloadCV: "CV buufadhu", experience: "Muuxannoo", years: "Waggaa 4+", scroll: "Gadi bu'i" },
      about: { title: "Waa'ee koo", subtitle: "Seenaa jireenyaa", bio1: "Ani Full Stack Developer waggaa 4+ muuxannoo qabu yoon ta'u, teeknooloojiiwwan amayyaa fayyadamuun appilikeeshiniiwwan weebii bal'achuu danda'an ijaaruu irratti xiyyeeffadha. RESTful APIs, UIs deebii quubsaa qaban fi arkiteekcharoota kuusaa deetaa cimaa ta'an dizaayiniin ijaaruu irratti dandeettii qaba.", bio2: "Koodii qulqulluu, fooyya'iinsa raawwii fi rakkoolee addunyaa dhugaa hiikuu irratti fedhii guddaa qaba. Yuunivarsiitii Haramayaa irraa saayinsii kompiitaraatiin digrii jalqabaa qabaachuu kootiin, misooma sooftiweerii hojiirra ooluu danda'uuf bu'uura tiyoorii cimaa qaba.", skillsTitle: "Dandeettiiwwan Ijoo", quote: "Yeroo hunda barachuu, yeroo hunda guddachuu. Teeknooloojiin guyyaa guyyaan jijjiirama, ani immoo isa itti aanu madaquuf as jira." },
      projects: { title: "Pirojektoota Filataman", subtitle: "Hojii koo", viewProject: "Pirojektii ilaali", modal: { overview: "Waliigala", challenge: "Qormaata", features: "Amaloota Ijoo", gallery: "Galaarii", tech: "Teeknooloojiiwwan", impact: "Dhiibbaa", live: "Agarsiisa Kallattii", repo: "Kuusaa ilaali", caseStudy: "Qo'annoo Guutuu" } },
      experience: { title: "Muuxannoo", subtitle: "Adeemsa ogummaa" },
      contact: { title: "Nu qunnamaa", subtitle: "Qunnamtii", name: "Maqaa", email: "Iimeeyilii", subject: "Dhimma", message: "Ergaa", send: "Ergaa ergi" },
      footer: { rights: "Mirgi hunduu eegamaadha.", privacy: "Imaammata dhuunfaa", terms: "Waliigaltee tajaajilaa", status: "Haala sirnaa: Gaarii" }
    }
  },
  ti: {
    translation: {
      nav: { about: "ብዛዕባይ", projects: "ፕሮጀክትታት", experience: "ተመኩሮ", contact: "ርክብ", resume: "ሲቪ" },
      hero: { status: "ንሓደሽቲ ፕሮጀክትታት ድሉው", subtitle: "ዝተፈላለዩን ልዑል ብቕዓት ዘለዎምን ናይ መርበብ ሓበሬታ መተግበሪያታት ምህናፅ።", viewWork: "ስራሕተይ ርኣዩ", latestNews: "ሓደሽቲ ዜናታት", downloadCV: "ሲቪ አውርድ", experience: "ተመኩሮ", years: "4+ ዓመታት", scroll: "ወደ ታች" },
      about: { title: "ብዛዕባይ", subtitle: "ባዮግራፊ", bio1: "እነ ዘመናዊ ናይ ቅድሚትን ድሕሪትን ቴክኖሎጂታት ብምጥቃም ዝተፈላለዩ ናይ መርበብ ሓበሬታ መተግበሪያታት ብምህናፅ ናይ 4+ ዓመታት ተመኩሮ ዘለኒ ቁርጠኛ ፉል ስታክ ዲቨሎፐር እየ። RESTful APIs ፣ ምላሽ ዝህቡ UIs ን ድልዱል ናይ ዳታቤዝ አርክቴክቸርን ኣብ ምንዳፍ እሰርሕ።", bio2: "ብዛዕባ ንጹህ ኮድ ፣ ምምሕያሽ ብቕዓትን ናይ ሓቀኛ ዓለም ፀገማት ምፍታሕን ልዑል ተገዳስነት ኣለኒ። ካብ ዩኒቨርሲቲ ሓረማያ ብኮምፒውተር ሳይንስ ቢ.ኤስ.ሲ ዲግሪ ብምርካብ ፣ ንተግባራዊን ልዑል ፅልዋ ዘለዎን ናይ ሶፍትዌር ልምዓት ድልዱል ቲዎሬቲካዊ መሰረት ኣምፅእ እየ።", skillsTitle: "ቀንዲ ብቕዓታት", quote: "ኩሉ ግዜ ምምሃር ፣ ኩሉ ግዜ ምዕባይ። ናይ ቴክኖሎጂ ኩነታት መዓልታዊ ይለዋወጥ እዩ ፣ ኣነ ድማ ነቲ ዝቕፅል ማዕበል ንምቁፅፃር ኣብዚ ኣለኹ።" },
      projects: { title: "ፍሉያት ፕሮጀክትታት", subtitle: "ስራሕተይ", viewProject: "ፕሮጀክት ርኣዩ", modal: { overview: "ሓፈሻዊ ትሕዝቶ", challenge: "እቲ ብድሆ", features: "ቀንዲ ባህርያት", gallery: "ጋለሪ", tech: "ቴክኖሎጂታት", impact: "ፅልዋ", live: "ቀጥታ ምርኢት", repo: "ሪፖዚቶሪ ርኣዩ", caseStudy: "ሙሉእ መፅናዕቲ" } },
      experience: { title: "ተመኩሮ", subtitle: "ናይ ሞያ ጉዕዞ" },
      contact: { title: "ርክብ ግበሩ", subtitle: "ርክብ", name: "ስም", email: "ኢሜይል", subject: "ርእሰ ጉዳይ", message: "መልእኽቲ", send: "መልእኽቲ ስደዱ" },
      footer: { rights: "መሰል ኩሉ ዝተሓለወ እዩ።", privacy: "ፖሊሲ ምስጢራዊነት", terms: "ውዕል ኣገልግሎት", status: "ኩነታት ስርዓት: ፅቡቕ" }
    }
  },
  so: {
    translation: {
      nav: { about: "Igu saabsan", projects: "Mashaariicda", experience: "Waayo-aragnimo", contact: "Xiriirka", resume: "CV" },
      hero: { status: "DIYAAR U AH MASHAARIIC CUSUB", subtitle: "Dhisidda codsiyada shabakadda ee la miisaami karo iyo kuwa waxqabadkoodu sarreeyo.", viewWork: "Eeg shaqadayda", latestNews: "Wararkii u dambeeyay", downloadCV: "Soo deji CV", experience: "Waayo-aragnimo", years: "4+ Sano", scroll: "Hoos u soco" },
      about: { title: "Igu saabsan", subtitle: "Taariikh nololeed", bio1: "Waxaan ahay Horumariye Full Stack ah oo u heellan kaas oo leh 4+ sano oo waayo-aragnimo ah dhisidda codsiyada shabakadda ee la miisaami karo iyadoo la adeegsanayo tignoolajiyada casriga ah. Waxaan ku takhasusay naqshadaynta RESTful APIs, UIs jawaab celin leh, iyo qaab-dhismeedka xogta ee adag.", bio2: "Waxaan aad u jecelahay koodhka nadiifka ah, hagaajinta waxqabadka, iyo xallinta dhibaatooyinka adduunka dhabta ah. Shahaadada B.Sc. ee Sayniska Kombiyuutarka ee Jaamacadda Haramaya, waxaan u keenayaa aasaas aragtiyeed oo adag horumarinta software-ka ee saameynta sare leh.", skillsTitle: "Awoodaha Muhiimka ah", quote: "Had iyo jeer barashada, had iyo jeer horumarinta. Muuqaalka tignoolajiyada ayaa isbedela maalin kasta, waxaana halkan u joogaa inaan barto mowjada xigta." },
      projects: { title: "Mashaariicda la doortay", subtitle: "Shaqadayda", viewProject: "Eeg Mashruuca", modal: { overview: "Guudmar", challenge: "Caqabadda", features: "Astaamaha Muhiimka ah", gallery: "Sawirada", tech: "Tignoolajiyada", impact: "Saamaynta", live: "Hordhaca Tooska ah", repo: "Eeg Kaydka", caseStudy: "Daraasadda oo Buuxda" } },
      experience: { title: "Waayo-aragnimo", subtitle: "Safarka xirfadeed" },
      contact: { title: "Nala soo xiriir", subtitle: "Xiriirka", name: "Magaca", email: "Iimaylka", subject: "Mawduuca", message: "Farriinta", send: "Dir Farriinta" },
      footer: { rights: "Xuquuqda oo dhan waa la dhawray.", privacy: "Siyaasadda gaarka ah", terms: "Shuruudaha adeegga", status: "Heerka nidaamka: Wanaagsan" }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
