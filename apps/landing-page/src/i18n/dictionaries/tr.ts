import { callout, list, p, table } from "../blocks";
import type { Dictionary } from "../types";

const tr: Dictionary = {
    meta: {
        siteName: "MotionCore",
        home: {
            title: "MotionCore: her tekrarı kamera sayar",
            description:
                "MotionCore telefonunuzun kamerasıyla formunuzu takip eder, tam ve yarım tekrarları sayar; 60 saniyelik düellolarda ve sıralamalarda yarışmanızı sağlar. Android'de ücretsiz.",
        },
        support: {
            title: "Destek",
            description: "MotionCore ile ilgili yardım alın: ekibe ulaşın, sorun bildirin ya da sık sorulan soruların yanıtlarını bulun.",
        },
        deleteAccount: {
            title: "Hesabınızı silin",
            description: "MotionCore hesabınızı ve verilerinizi uygulama içinden ya da web üzerinden talep göndererek nasıl silebileceğiniz.",
        },
        privacy: {
            title: "Gizlilik Politikası",
            description: "MotionCore'un hangi verileri neden topladığı, kimlerin işlediği ve haklarınızı nasıl kullanabileceğiniz.",
        },
        terms: {
            title: "Kullanım Koşulları",
            description: "MotionCore uygulamasını ve web sitesini kullanırken geçerli olan koşullar.",
        },
    },
    nav: {
        features: "Özellikler",
        howItWorks: "Nasıl çalışır",
        faq: "SSS",
        support: "Destek",
        download: "Uygulamayı indir",
        openMenu: "Menüyü aç",
        closeMenu: "Menüyü kapat",
        language: "Dil",
        skipToContent: "İçeriğe geç",
    },
    common: {
        googlePlayAlt: "Google Play'den indirin",
        availability: "Android'de ücretsiz",
        effectiveLabel: "Yürürlük tarihi",
        contents: "İçindekiler",
        backToTop: "Başa dön",
        emailUs: "E-posta gönderin",
    },
    home: {
        hero: {
            eyebrow: "Cihaz üzerinde yapay zekâ ile form takibi",
            titleLead: "Her tekrar görülür.",
            titleAccent: "Her tekrar sayılır.",
            subtitle:
                "MotionCore telefonunuzun kamerasıyla eklemlerinizi takip eder, tam ve yarım tekrarları sayar, formunuzu anında yönlendirir ve 60 saniyelik düellolarda diğer sporcularla kapışmanızı sağlar. Görüntünüz telefonunuzdan hiç çıkmaz.",
            secondaryCta: "Nasıl çalıştığını görün",
            hud: { full: "Tam", half: "Yarım", time: "Süre", cue: "Harika derinlik", exercise: "Squat" },
        },
        ribbon: [
            "17 rehberli hareket",
            "Anlık form geri bildirimi",
            "Kamera görüntüsü telefonunuzda kalır",
            "English · Türkçe · Deutsch · Español",
        ],
        showcase: {
            eyebrow: "Uygulamanın içinden",
            titleLead: "Telefonu yerleştirin, harekete geçin.",
            titleAccent: "Skoru MotionCore tutsun.",
            description: "Her ekran tek bir fikir üzerine kurulu: siz antrenman yaparsınız, sayımı kamera yapar.",
            tracking: {
                tag: "Canlı takip",
                title: "Tam tekrar, yarım tekrar ve tutuşlar siz hareket ederken sayılır",
                body: "Poz takibi her karede vücudunuzdaki 33 noktayı okur. Sığ bir squat yarım tekrar sayılır, plank yalnızca vücudunuz düz kaldığı sürece zamanlanır ve kısa uyarılar neyi düzeltmeniz gerektiğini söyler.",
                chips: ["Tam", "Yarım", "Tutuş"],
            },
            battle: {
                title: "60 saniyede 1'e 1 düello",
                body: "Benzer kupa puanına sahip bir oyuncuyla eşleşin, aynı hareketi aynı anda yapın ve rakibinizin canlı iskeletini kendinizinkinin yanında izleyin. Kimse yoksa hemen bir bot ile kapışın.",
            },
            leaderboard: {
                title: "Sıfırlanan sıralamalar",
                body: "Günün, haftanın, ayın ya da tüm zamanların sıralamasında yükselin. İster genel sıralamada, ister tek bir harekette.",
            },
            library: {
                title: "7 kategoride 17 hareket",
                body: "Kollar, omuzlar, göğüs, sırt, karın, bacaklar ve yoga. Her hareketin animasyonlu bir gösterimi ve anlaşılır bir açıklaması var.",
                exercises: ["Squat", "Şınav", "Lunge", "Plank", "Omuz Press", "Savaşçı İki"],
            },
            progress: {
                title: "Haftanız tek bakışta",
                body: "Haftalık aktivite, toplam ve günlük antrenman süresi, seriler ve başarımlar ilerlemenizi hep göz önünde tutar.",
            },
        },
        features: {
            eyebrow: "Neden MotionCore",
            titleLead: "Cebinizde bir koç.",
            titleAccent: "Giyilebilir cihaz gerekmez.",
            description: "Tek ihtiyacınız zaten elinizdeki telefon ve biraz boş alan.",
            items: [
                {
                    title: "Gizlilik esas alınarak tasarlandı",
                    body: "Poz analizi tamamen telefonunuzda çalışır. Kamera görüntüleri kaydedilmez, saklanmaz ve hiçbir yere yüklenmez.",
                },
                {
                    title: "Doğru anda yönlendirme",
                    body: "“Daha derine” ya da “Harika tekrar” gibi kısa uyarılar ekranda ve sesli olarak gelir, ritminiz bozulmaz.",
                },
                {
                    title: "Önden ya da yandan",
                    body: "Çoğu hareket kameraya dönük ya da yan duruşta çalışır; tam olarak kadraja girmeniz gerektiğinde uygulama söyler.",
                },
                {
                    title: "Adil puanlama",
                    body: "Tekrarlar zaman damgasıyla sunucularımızda kontrol edilir; sıralama ve düello sonuçları elle yazılarak değiştirilemez.",
                },
                {
                    title: "Sizin dilinizde",
                    body: "MotionCore'u Türkçe, İngilizce, Almanca veya İspanyolca kullanın.",
                },
                {
                    title: "Hızlı giriş",
                    body: "E-posta adresinizle hesap oluşturun ya da Google ile devam edin.",
                },
            ],
        },
        privacy: {
            eyebrow: "Gizlilik",
            title: "Kamera görüntünüz telefonunuzdan hiç çıkmaz",
            body: "MotionCore her kamera karesini cihazın kendisinde vücut noktalarına dönüştürür ve yalnızca sayıları saklar: tekrar, süre ve form. Düelloda rakibiniz videonuzu değil, sadeleştirilmiş bir iskeleti görür.",
            link: "Gizlilik politikasını okuyun",
            stats: [
                { value: "0", label: "yüklenen video karesi" },
                { value: "33", label: "karede takip edilen vücut noktası" },
                { value: "60 sn", label: "sıralamalı düello süresi" },
                { value: "17", label: "rehberli hareket" },
            ],
        },
        steps: {
            eyebrow: "Nasıl çalışır",
            titleLead: "İndirmeden ilk tekrara",
            titleAccent: "üç adımda",
            description: "Eşleştirilecek cihaz ya da uzun bir kurulum yok. Telefonunuz ve hareket edecek biraz alan yeterli.",
            stepLabel: "Adım",
            items: [
                {
                    title: "Hesabınızı oluşturun",
                    body: "MotionCore'u Google Play'den indirin, e-posta ya da Google ile kaydolun. Yaş, boy ve kilo isteğe bağlıdır ve yalnızca kendi istatistikleriniz için kullanılır.",
                },
                {
                    title: "Telefonunuzu yerleştirin",
                    body: "Telefonu kalça hizasında dik olarak birkaç adım öteye koyun; tüm vücudunuz, baştan ayağa kadrajda olsun.",
                },
                {
                    title: "Harekete geçin",
                    body: "Bir hareket ya da düello seçin. MotionCore her tekrarı sayar, formunuzu yönlendirir ve antrenmanı geçmişinize ve sıralamaya kaydeder.",
                },
            ],
        },
        faq: {
            eyebrow: "SSS",
            titleLead: "İyi sorular,",
            titleAccent: "net cevaplar",
            items: [
                {
                    q: "Kamera görüntüm yükleniyor ya da saklanıyor mu?",
                    a: "Hayır. Poz analizi telefonunuzda çalışır; kamera görüntüleri kaydedilmez, saklanmaz ve hiçbir yere gönderilmez. Hesabınıza yalnızca sonuçlar kaydedilir: tekrar sayısı, süre ve form.",
                },
                {
                    q: "MotionCore ücretsiz mi?",
                    a: "Evet. MotionCore'u indirmek ücretsizdir ve şu anda tüm özellikleri ücretsiz olarak kullanılabilir.",
                },
                {
                    q: "Hangi telefonlar destekleniyor?",
                    a: "MotionCore, Google Play üzerinden Android telefonlarda kullanılabilir. Çalışan bir kamera gerekir; yeni telefonlarda takip en akıcı şekilde çalışır.",
                },
                {
                    q: "Telefonumu nereye koymalıyım?",
                    a: "Telefonu kalça hizasında dik olarak birkaç adım öteye yerleştirin; başınız ve ayaklarınız birlikte görünsün. Düzgün ve eşit ışık yardımcı olur. Çoğu hareket kameraya dönük ya da yan duruşta yapılabilir.",
                },
                {
                    q: "Düellolar nasıl işliyor?",
                    a: "Bir hareket seçin, MotionCore size benzer kupa puanına sahip bir rakip bulsun. İkinizin de 60 saniyesi var; yüksek skoru yapan kazanır ve kupa kazanır. Kimse müsait değilse hemen bir bot ile kapışabilirsiniz.",
                },
                {
                    q: "Hesabımı nasıl silerim?",
                    a: "Uygulamada profil fotoğrafınıza dokunun, ardından **Ayarlar → Profili Düzenle → Hesabı Sil** adımlarını izleyin. Dilerseniz [hesap silme sayfamızdan](/delete-account) talep de gönderebilirsiniz.",
                },
            ],
        },
        cta: {
            titleLead: "İlk sayılan tekrarınıza",
            titleAccent: "hazır mısınız?",
            body: "MotionCore'u indirin, telefonunuzu yerleştirin ve sayımı kameraya bırakın.",
            secondary: "Sorunuz mu var? Destek sayfasına gidin",
        },
    },
    footer: {
        tagline: "Her tekrarı sayan, kamera tabanlı antrenman uygulaması.",
        columns: { app: "Uygulama", help: "Yardım", legal: "Yasal" },
        links: {
            features: "Özellikler",
            howItWorks: "Nasıl çalışır",
            faq: "SSS",
            support: "Destek ve iletişim",
            deleteAccount: "Hesap silme",
            privacy: "Gizlilik Politikası",
            terms: "Kullanım Koşulları",
        },
        rights: "© 2026 MotionCore. Tüm hakları saklıdır.",
    },
    support: {
        title: "Size nasıl yardımcı olabiliriz?",
        intro: "MotionCore ile ilgili bir sorunuz, hata bildiriminiz ya da geri bildiriminiz mi var? Bize yazın, ekipten gerçek bir kişi yanıtlayacak.",
        contact: {
            title: "Bize e-posta gönderin",
            body: "{email} adresine yazın. Lütfen uygulamada kullandığınız e-posta adresini ve hata bildirimlerinde telefon modelinizi de ekleyin.",
            note: "Birkaç iş günü içinde yanıt vermeye çalışıyoruz.",
        },
        inApp: {
            title: "Uygulamadan bildirin",
            body: "Uygulamada profil fotoğrafınıza dokunun, ardından **Ayarlar → Sorun Bildir** adımlarını izleyip ne olduğunu anlatın.",
        },
        topics: {
            title: "Sık sorulan sorular",
            items: [
                {
                    title: "Tekrarlarım sayılmıyor",
                    body: "Tüm vücudunuzun baştan ayağa kadrajda ve iyi aydınlatılmış olduğundan emin olun. Biraz geri çekilin ve en iyi kamera açısı için hareketin açıklamasına bakın.",
                },
                {
                    title: "Giriş yapamıyorum",
                    body: "Giriş ekranındaki **Şifrenizi mi Unuttunuz?** bağlantısıyla e-postanıza sıfırlama bağlantısı alın. Google ile kaydolduysanız yine Google düğmesini kullanın.",
                },
                {
                    title: "Sıralama puanım yanlış görünüyor",
                    body: "Puanlar sunucularımızda tamamlanan antrenmanlardan hesaplanır; çakışan ya da doğrulanamayan antrenmanlar sayılmaz. Yine de bir terslik varsa antrenmanın tarihiyle birlikte bize yazın.",
                },
                {
                    title: "Kamera açılmıyor",
                    body: "MotionCore hareketinizi takip etmek için kamera iznine ihtiyaç duyar. İzni reddettiyseniz telefonunuzun ayarlarında Uygulamalar → MotionCore → İzinler bölümünden tekrar verin.",
                },
            ],
        },
        deletion: {
            title: "Hesabınızı silin",
            body: "Hesabınızı istediğiniz zaman uygulama içinden silebilirsiniz; uygulamaya erişiminiz yoksa web üzerinden talep gönderebilirsiniz.",
            cta: "Hesap silme sayfasına git",
        },
    },
    deletion: {
        title: "Hesabınızı ya da verilerinizi silin",
        intro: "MotionCore hesabınızı ve ona bağlı verileri uygulamayla ya da uygulama olmadan nasıl silebileceğiniz.",
        app: "Uygulama: MotionCore (com.motioncore.app) · Geliştirici: MotionCore",
        inApp: {
            title: "Uygulama içinden silin",
            badge: "En hızlı yol",
            steps: [
                "MotionCore'u açın ve giriş yapın.",
                "Profil fotoğrafınıza, ardından **Ayarlar**'a dokunun.",
                "**Profili Düzenle**'yi açıp **Hesabı Sil**'e dokunun.",
                "Onaylayın. Hesabınız ve tüm verileri anında silinir.",
            ],
        },
        form: {
            title: "Web üzerinden silme talebi",
            intro: "Uygulamaya artık erişemiyor musunuz? Talebinizi buradan gönderin. Herhangi bir şeyi silmeden önce {email} adresinden e-postayla onay alırız ve talepleri en geç 7 gün içinde tamamlarız.",
            email: "MotionCore hesabınızın e-posta adresi",
            emailHelp: "Yalnızca hesabın e-posta adresinden onaylanan talepleri işleme alırız.",
            scope: "Neyi silmemizi istiyorsunuz?",
            scopeAccount: "Hesabımın tamamını ve tüm verilerini",
            scopeAccountHelp: "Kalıcıdır, geri alınamaz.",
            scopeData: "Yalnızca bazı verilerimi (hesabım kalsın)",
            scopeDataHelp: "Silinecekleri seçin:",
            dataItems: [
                "Antrenman kayıtları ve istatistikler",
                "Vücut ölçümleri ve hedefler",
                "Profil fotoğrafı",
                "Gönderdiğim hata bildirimleri",
            ],
            details: "Bilmemiz gereken başka bir şey var mı? (isteğe bağlı)",
            detailsPlaceholder: "Örneğin uygulamada kullandığınız kullanıcı adı",
            confirm: "Silinen verilerin geri getirilemeyeceğini anlıyorum.",
            submit: "Talebi gönder",
            submitting: "Gönderiliyor…",
            successTitle: "Talebiniz alındı",
            successBody: "Onaylamak ve tamamlamak için 7 gün içinde size e-posta göndereceğiz. Bizden haber alamazsanız {email} adresine yazın.",
            again: "Yeni bir talep gönder",
            errorGeneric: "Talebiniz gönderilemedi. Lütfen tekrar deneyin ya da {email} adresine e-posta gönderin.",
            errorEmail: "Lütfen geçerli bir e-posta adresi girin.",
            errorConfirm: "Lütfen silme işleminin kalıcı olduğunu anladığınızı onaylayın.",
            errorData: "Silinecek en az bir veri türü seçin.",
            privacyNote: "Buraya girdikleriniz yalnızca bu talebi işlemek için kullanılır.",
        },
        email: {
            title: "Ya da e-postayla talep edin",
            body: "Hesabınızın e-posta adresinden {email} adresine **Hesap Silme Talebi** konulu bir e-posta gönderin. Hesabınızı koruyup yalnızca bazı verilerinizi sildirmek istiyorsanız konu **Veri Silme Talebi** olsun.",
        },
        deleted: {
            title: "Neler silinir",
            items: [
                "Profil: ad, kullanıcı adı, cinsiyet ve profil fotoğrafı",
                "Vücut ölçümleri ve hedefler: yaş, boy, kilo ve hedef kilo",
                "Tüm antrenmanlar, tekrarlar ve istatistikler",
                "Düello geçmişi ve kupa puanı",
                "Gönderdiğiniz hata bildirimleri",
                "Giriş bilgileriniz ve hesabın kendisi",
            ],
            note: "Silme işlemi kalıcıdır. Veriler canlı sistemlerimizden anında kaldırılır; yedeklerdeki kopyaları en geç 30 gün içinde temizlenir.",
        },
    },
    legal: {
        privacy: {
            title: "Gizlilik Politikası",
            effective: "31 Ekim 2026",
            intro: "Bu politika, MotionCore uygulamasının hangi verileri topladığını, bunları neden işlediğimizi, işlemede bize kimlerin yardım ettiğini ve haklarınızı nasıl kullanabileceğinizi açıklar.",
            sections: [
                {
                    id: "data-we-collect",
                    title: "1. Topladığımız veriler",
                    blocks: [
                        table(
                            ["Veri", "Neden"],
                            ["E-posta adresi ve şifre", "Hesabınızı oluşturmak ve giriş yapmanızı sağlamak. Şifreler geri döndürülemez şekilde şifrelenerek saklanır ve hiçbir zaman okunamaz."],
                            ["Ad, kullanıcı adı, cinsiyet", "Profilinizi oluşturmak ve sizi sıralamalarda ve düellolarda göstermek."],
                            ["Profil fotoğrafı (isteğe bağlı)", "Profilinizde, sıralamalarda ve düellolarda gösterilir."],
                            ["Yaş, boy, kilo, hedef kilo (isteğe bağlı)", "İstatistiklerinizi kişiselleştirmek."],
                            ["Antrenman kayıtları (hareket, tekrar, süre, form sonuçları, zaman damgaları)", "İlerlemenizi takip etmek, sıralama puanlarını hesaplamak ve puanlamayı adil tutmak."],
                            ["Düello kayıtları (rakip, skorlar, sonuç, kupa puanı)", "Maçları, eşleştirmeyi ve sıralamaları yürütmek."],
                            ["İsteğe bağlı uygulama analitiği (yalnızca izin verirseniz): ekran adları, hareket kimlikleri, antrenman olayları, tekrarlar, oturum süresi ve performans ölçümleri", "Uygulamanın nasıl kullanıldığını anlamak ve iyileştirmek."],
                            ["Gönderdiğiniz hata bildirimleri ve geri bildirimler", "Sorunları çözmek ve size yanıt vermek."],
                            ["Çökme ve hata raporları (cihaz modeli, işletim sistemi ve uygulama sürümü, teknik hata ayrıntıları)", "Çökmeleri bulmak ve düzeltmek. Adınızı, e-posta adresinizi ya da kamera görüntülerinizi içermez."],
                        ),
                        callout(
                            "**Kamera görüntüleri cihazınızdan çıkmaz.** Hareket analizi tamamen telefonunuzda yapılır; kamera görüntüleri kaydedilmez, saklanmaz ve hiçbir yere iletilmez. Sunucularımıza yalnızca sayısal sonuçlar ulaşır: tekrar sayısı, süre ve form sonuçları. Düello sırasında hareketinizin gösterilebilmesi için sadeleştirilmiş vücut noktaları (görüntü değil, çöp adam şeklinde bir iskelet) rakibinize canlı olarak gönderilir; bunlar saklanmaz.",
                        ),
                        p("Şunları **toplamayız**:"),
                        list(
                            "Konum bilgisi",
                            "Rehber, mesaj veya çağrı kayıtları",
                            "Reklam kimliği (uygulamada reklam gösterilmez)",
                            "Ödeme veya kart bilgisi (uygulamada uygulama içi satın alma yoktur)",
                        ),
                    ],
                },
                {
                    id: "how-we-use",
                    title: "2. Verilerinizi nasıl kullanıyoruz",
                    blocks: [
                        list(
                            "Hesabınızı oluşturmak, girişinizi doğrulamak ve oturumunuzu sürdürmek",
                            "Antrenman geçmişinizi ve istatistiklerinizi göstermek",
                            "Sıralamaları hesaplamak ve benzer kupa puanına sahip düello rakipleri bulmak",
                            "Puanlamayı adil tutmak; örneğin gerçekçi olmayan ya da çakışan antrenmanları saymamak",
                            "Çökmeleri ve bildirdiğiniz sorunları incelemek, taleplerinize yanıt vermek",
                        ),
                        p("İsteğe bağlı ürün analitiği yalnızca açıkça izin verdiğinizde toplanır. Tercihinizi istediğiniz zaman **Ayarlar → İzinler** bölümünden değiştirebilirsiniz. Reddetmeniz veya izni geri çekmeniz hesabınızı ya da uygulama özelliklerini etkilemez."),
                        p("Verilerinizi reklam amacıyla kullanmıyor ve asla satmıyoruz."),
                    ],
                },
                {
                    id: "shared-with-users",
                    title: "3. Diğer kullanıcıların görebildikleri",
                    blocks: [
                        p("Sıralamalarda ve düellolarda diğer kullanıcılar **kullanıcı adınızı, profil fotoğrafınızı, puanınızı ve kupa puanınızı** görebilir. Düello sırasında rakibiniz ayrıca canlı tekrar sayınızı ve iskeletinizi görür. Bunları paylaşmak istemiyorsanız profil fotoğrafı eklemeyebilir ve kimliğinizi belli etmeyen bir kullanıcı adı seçebilirsiniz."),
                        p("E-posta adresiniz, yaşınız, boyunuz, kilonuz ve hedefleriniz diğer kullanıcılara hiçbir zaman gösterilmez."),
                    ],
                },
                {
                    id: "service-providers",
                    title: "4. Hizmet sağlayıcılar",
                    blocks: [
                        table(
                            ["Sağlayıcı", "Amaç"],
                            ["Supabase", "Veritabanı, kimlik doğrulama, dosya depolama ve düellolarda kullanılan anlık bağlantı"],
                            ["Google", "Google ile devam etmeyi seçerseniz giriş; Google Play üzerinden uygulama dağıtımı"],
                            ["Apple", "Apple ile devam etmeyi seçerseniz giriş (iOS)"],
                            ["Sentry", "Çökme ve hata raporlama"],
                            ["PostHog (AB)", "Yalnızca izin verdiğiniz isteğe bağlı ürün analitiği olaylarının işlenmesi. Projemizde IP anonimleştirme açıktır."],
                        ),
                        p("Analitik verileri PostHog'un Avrupa hizmetine yalnızca izin verdikten sonra gönderilir. Olaylarda ekran adları, hareket kimlikleri, antrenman tamamlanması, tekrar sayısı, süre, sınırlı performans ölçümleri ve özellik etkileşimleri bulunabilir. Kayıt olduktan sonra olaylarınız adınız veya e-posta adresiniz yerine hesabınızın dahili kimliğiyle ilişkilendirilir. Analitik olaylarına şifreniz, kamera görüntüleriniz veya vücut koordinatlarınız eklenmez. Analitiği kapatmanız yeni veri gönderimini durdurur ve cihazınızda bekleyen olayları siler; PostHog'a daha önce ulaşmış olayları silmez."),
                        p("Bu sağlayıcılar verileri yalnızca bize hizmet sunmak için işler. Bazıları verileri bulunduğunuz ülkenin dışında işleyebilir; mevzuatın gerektirdiği durumlarda bu, standart sözleşme hükümleri gibi uygun güvenceler altında yapılır."),
                    ],
                },
                {
                    id: "retention",
                    title: "5. Saklama süresi",
                    blocks: [
                        p("Hesap ve antrenman verilerinizi hesabınız var olduğu sürece saklarız. Hesabınızı sildiğinizde bu veriler silinir; yedeklerden temizlenmesi en geç 30 gün sürer. Çökme raporları en fazla 90 gün saklanır. İzin verirseniz PostHog analitik olayları projemiz için yapılandırılmış saklama süresine göre tutulur. Analitiği kapatmanız daha önce PostHog'a ulaşmış olayları silmez; MotionCore hesabınızı silmeniz de bu olayları otomatik olarak kaldırmaz. Analitik verilerinin silinmesini talep etmek için {email} adresinden bize ulaşabilirsiniz."),
                    ],
                },
                {
                    id: "deleting-your-account",
                    title: "6. Hesabınızı silme",
                    blocks: [
                        p("Uygulamada profil fotoğrafınıza dokunun, ardından **Ayarlar → Profili Düzenle → Hesabı Sil** adımlarını izleyin. Bu işlem profilinizi, antrenman kayıtlarınızı, düello geçmişinizi, ölçümlerinizi, hedeflerinizi, profil fotoğrafınızı ve giriş bilgilerinizi kalıcı olarak kaldırır. Geri alınamaz."),
                        p("Uygulamayı kullanamıyorsanız [hesap silme sayfamızı](/delete-account) kullanın."),
                    ],
                },
                {
                    id: "your-rights",
                    title: "7. Haklarınız",
                    blocks: [
                        p("Bulunduğunuz yere bağlı olarak, örneğin 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ya da AB Genel Veri Koruma Tüzüğü (GDPR) kapsamında, verilerinize erişme, düzeltilmesini ya da silinmesini isteme, işlenmesini kısıtlama veya itiraz etme, verilerinizi taşınabilir biçimde alma ve veri koruma otoritesine şikâyette bulunma haklarına sahipsiniz."),
                        p("Profilinizi uygulama içinden düzenleyebilir ve hesabınızı istediğiniz an silebilirsiniz. Diğer tüm talepleriniz için {email} adresine yazın."),
                    ],
                },
                {
                    id: "security",
                    title: "8. Güvenlik",
                    blocks: [
                        list(
                            "Tüm veri aktarımı HTTPS ile şifrelenir",
                            "Oturum bilgileriniz telefonunuzun güvenli deposunda (Android Keystore) tutulur",
                            "Veritabanı kuralları her kullanıcının yalnızca kendi verisine erişmesini sağlar",
                            "Poz analizi cihazda yapıldığından korunması gereken bir kamera kaydı oluşmaz",
                        ),
                    ],
                },
                {
                    id: "children",
                    title: "9. Çocuklar",
                    blocks: [
                        p("MotionCore 16 yaşın altındaki kişilere yönelik değildir ve bu kişilerden bilerek veri toplamayız. Böyle bir durumu fark edersek verileri siler ve hesabı kapatırız."),
                    ],
                },
                {
                    id: "changes",
                    title: "10. Bu politikadaki değişiklikler",
                    blocks: [
                        p("Bu politikayı güncelleyebiliriz. Önemli değişikliklerde sizi uygulama içinden bilgilendiririz. Sayfanın başındaki yürürlük tarihi en güncel sürümü gösterir."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. İletişim",
                    blocks: [p("Verilerinizle ilgili soru ve talepleriniz için: {email}")],
                },
            ],
        },
        terms: {
            title: "Kullanım Koşulları",
            effective: "18 Ekim 2026",
            intro: "Bu koşullar, MotionCore (“biz”) tarafından sunulan MotionCore uygulamasını ve bu web sitesini (birlikte “Hizmet”) kullanımınız için geçerlidir. Hesap oluşturarak ya da Hizmet'i kullanarak bu koşulları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen Hizmet'i kullanmayın.",
            sections: [
                {
                    id: "health",
                    title: "1. Fitness ve sağlık",
                    blocks: [
                        callout("**MotionCore bir tıbbi cihaz değildir.** Teşhis koymaz, tedavi etmez ve bir doktorun ya da fizyoterapistin önerilerinin yerini tutmaz. Antrenmanlar, tekrar sayımları ve form geri bildirimleri yalnızca genel fitness amaçlıdır."),
                        list(
                            "Yeni bir egzersiz programına başlamadan önce, özellikle kalp, eklem, bel veya solunum sorunlarınız, yüksek tansiyonunuz varsa ya da hamileyseniz bir doktora danışın.",
                            "Egzersiz yaralanma riski taşır. Her hareketi kendi tercihinizle ve kendi sorumluluğunuzda yaparsınız.",
                            "Ağrı, baş dönmesi, mide bulantısı ya da nefes darlığı hissederseniz hemen durun ve yardım alın.",
                            "Poz takibi hata yapabilir. Tekrar sayımlarını ve form uyarılarını profesyonel bir değerlendirme olarak değil, yol gösterici olarak görün.",
                            "Antrenman alanınızı boş tutun ve telefonunuzu düşmeyeceği, kimsenin takılmayacağı bir yere koyun.",
                        ),
                    ],
                },
                {
                    id: "eligibility",
                    title: "2. Uygunluk ve hesabınız",
                    blocks: [
                        list(
                            "En az 16 yaşında olmalısınız; yaşadığınız yerde dijital rıza yaşı daha yüksekse o yaşta olmalısınız.",
                            "Bize verdiğiniz bilgiler doğru olmalıdır ve her hesap yalnızca bir kişiye aittir.",
                            "Giriş bilgilerinizi kimseyle paylaşmayın; hesabınıza başkası erişirse bize hemen haber verin.",
                        ),
                    ],
                },
                {
                    id: "fair-play",
                    title: "3. Adil oyun ve kabul edilebilir kullanım",
                    blocks: [
                        p("Sıralamaların ve düelloların herkes için adil kalması için şunları yapmamalısınız:"),
                        list(
                            "Tekrar sayılarını, puanları ya da düello sonuçlarını sahte şekilde oluşturmak veya değiştirmek, örneğin betiklerle, değiştirilmiş uygulamalarla, emülatörlerle ya da kayıtlı videolarla",
                            "Uygulamayı veya modellerini tersine mühendislikle çözmek, kaynak koda dönüştürmek, değiştirmek ya da kurcalamak",
                            "Güvenlik önlemlerini veya istek sınırlarını aşmak ya da Hizmet'e otomatik yollarla erişmek",
                            "Saldırgan, yanıltıcı ya da başkasını taklit eden bir kullanıcı adı veya profil fotoğrafı kullanmak",
                            "Diğer kullanıcıları taciz etmek, tehdit etmek ya da onlara kötü davranmak",
                        ),
                        p("Bu kurallara uymazsanız sonuçlarınızı kaldırabilir, kupa puanınızı sıfırlayabilir ya da hesabınızı askıya alabilir veya kapatabiliriz."),
                    ],
                },
                {
                    id: "your-content",
                    title: "4. İçerikleriniz",
                    blocks: [
                        p("Eklediğiniz kullanıcı adı ve profil fotoğrafı üzerindeki haklar size aittir. Hesabınız var olduğu sürece bunları saklamamıza ve Hizmet içinde diğer kullanıcılara göstermemize izin verirsiniz."),
                    ],
                },
                {
                    id: "intellectual-property",
                    title: "5. Fikri mülkiyet",
                    blocks: [
                        p("Hizmet'in yazılımı, poz analizi teknolojisi, tasarımları, illüstrasyonları, sesleri, adı ve logosu MotionCore'a veya lisans verenlerine aittir. Size Hizmet'i kendi kişisel ve ticari olmayan antrenmanlarınız için kullanmanız amacıyla kişisel, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veririz."),
                    ],
                },
                {
                    id: "purchases",
                    title: "6. Satın almalar",
                    blocks: [
                        p("MotionCore şu anda ücretsizdir. Ücretli özellikler sunarsak bunlar Google Play faturalandırması üzerinden satılır ve Google Play'in koşulları geçerli olur. Abonelikler, yenilemeden en az 24 saat önce Play Store'dan iptal edilmedikçe otomatik olarak yenilenir; iadeler Google Play'in iade politikasına tabidir."),
                    ],
                },
                {
                    id: "termination",
                    title: "7. Hesap silme ve sonlandırma",
                    blocks: [
                        p("Hizmet'i kullanmayı istediğiniz zaman bırakabilir ve hesabınızı uygulama içinden ya da [hesap silme sayfamızdan](/delete-account) silebilirsiniz. Bu koşulları ciddi şekilde ya da tekrar tekrar ihlal eden hesapları askıya alabilir veya kapatabiliriz."),
                    ],
                },
                {
                    id: "changes",
                    title: "8. Erişilebilirlik ve değişiklikler",
                    blocks: [
                        p("Hizmet'i çalışır durumda tutmak için çalışırız; ancak zaman zaman kesintiler olabilir ve özellikleri değiştirebilir ya da kaldırabiliriz. Bu koşulları güncelleyebiliriz; önemli değişikliklerde sizi uygulama içinden bilgilendiririz ve Hizmet'i kullanmaya devam etmeniz yeni koşulları kabul ettiğiniz anlamına gelir."),
                    ],
                },
                {
                    id: "liability",
                    title: "9. Sorumluluk reddi ve sorumluluğun sınırlandırılması",
                    blocks: [
                        p("Hizmet, mevzuatın izin verdiği ölçüde hiçbir garanti verilmeksizin “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Mevzuatın izin verdiği ölçüde MotionCore dolaylı veya sonuç olarak ortaya çıkan zararlardan ya da yapmayı seçtiğiniz egzersizlerden kaynaklanan yaralanmalardan sorumlu değildir."),
                        p("Bu koşullardaki hiçbir hüküm, kanunen sınırlandırılamayan sorumluluğu (örneğin kast veya ağır ihmalden doğan sorumluluğu) ya da tüketici olarak sahip olduğunuz hakları sınırlamaz."),
                    ],
                },
                {
                    id: "governing-law",
                    title: "10. Uygulanacak hukuk",
                    blocks: [
                        p("Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir ve Ankara mahkemeleri yetkilidir. Tüketiciyseniz yaşadığınız ülkenin emredici hükümlerinin sağladığı korumadan da yararlanmaya devam edersiniz."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. İletişim",
                    blocks: [p("Bu koşullarla ilgili sorularınız için: {email}")],
                },
            ],
        },
    },
};

export default tr;
