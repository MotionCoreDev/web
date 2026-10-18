import { callout, list, p, table } from "../blocks";
import type { Dictionary } from "../types";

const de: Dictionary = {
    meta: {
        siteName: "MotionCore",
        home: {
            title: "MotionCore — die Kamera zählt jede Wiederholung",
            description:
                "MotionCore verfolgt deine Technik über die Handykamera, zählt volle und halbe Wiederholungen und lässt dich in 60-Sekunden-Duellen und Ranglisten antreten. Kostenlos für Android.",
        },
        support: {
            title: "Support",
            description: "Hilfe zu MotionCore: Kontakt zum Team, Probleme melden und Antworten auf häufige Fragen.",
        },
        deleteAccount: {
            title: "Konto löschen",
            description: "So löschst du dein MotionCore-Konto und deine Daten — in der App oder per Anfrage im Web.",
        },
        privacy: {
            title: "Datenschutzerklärung",
            description: "Welche Daten MotionCore erhebt, warum, wer sie verarbeitet und wie du deine Rechte ausübst.",
        },
        terms: {
            title: "Nutzungsbedingungen",
            description: "Die Bedingungen für die Nutzung der MotionCore-App und dieser Website.",
        },
    },
    nav: {
        features: "Funktionen",
        howItWorks: "So funktioniert's",
        faq: "FAQ",
        support: "Support",
        download: "App holen",
        openMenu: "Menü öffnen",
        closeMenu: "Menü schließen",
        language: "Sprache",
        skipToContent: "Zum Inhalt springen",
    },
    common: {
        googlePlayAlt: "Jetzt bei Google Play",
        availability: "Kostenlos für Android",
        effectiveLabel: "Gültig ab",
        contents: "Inhalt",
        backToTop: "Nach oben",
        emailUs: "Schreib uns",
    },
    home: {
        hero: {
            eyebrow: "KI-Technikanalyse direkt auf dem Gerät",
            titleLead: "Jede Wiederholung gesehen.",
            titleAccent: "Jede Wiederholung gezählt.",
            subtitle:
                "MotionCore verfolgt deine Gelenke über die Handykamera, zählt volle und halbe Wiederholungen, korrigiert deine Technik in Echtzeit und lässt dich in 60-Sekunden-Duellen gegen andere antreten. Dein Video verlässt dein Handy nie.",
            secondaryCta: "So funktioniert's",
            hud: { full: "Vollständig", half: "Halb", time: "Zeit", cue: "Tolle Tiefe", exercise: "Kniebeugen" },
        },
        ribbon: [
            "17 angeleitete Übungen",
            "Technik-Feedback in Echtzeit",
            "Kamerabilder bleiben auf deinem Handy",
            "English · Türkçe · Deutsch · Español",
        ],
        showcase: {
            eyebrow: "Ein Blick in die App",
            titleLead: "Handy aufstellen, loslegen —",
            titleAccent: "MotionCore zählt mit",
            description: "Jeder Bildschirm folgt einer Idee: Du trainierst, die Kamera zählt.",
            tracking: {
                tag: "Live-Tracking",
                title: "Volle und halbe Wiederholungen und Halteübungen — gezählt, während du dich bewegst",
                body: "Das Pose-Tracking erfasst in jedem Bild 33 Körperpunkte. Eine flache Kniebeuge zählt als halbe Wiederholung, der Unterarmstütz wird nur gezählt, solange dein Körper gerade bleibt, und kurze Hinweise sagen dir, was du verbessern kannst.",
                chips: ["Vollständig", "Halb", "Halten"],
            },
            battle: {
                title: "1-gegen-1-Duelle in 60 Sekunden",
                body: "Tritt gegen jemanden mit ähnlicher Trophäenwertung an, macht gleichzeitig dieselbe Übung und sieh sein Live-Skelett neben deinem. Niemand da? Spiel sofort gegen einen Bot.",
            },
            leaderboard: {
                title: "Ranglisten, die neu starten",
                body: "Steig in der Tages-, Wochen-, Monats- oder Allzeit-Rangliste auf — insgesamt oder für eine einzelne Übung.",
            },
            library: {
                title: "17 Übungen in 7 Kategorien",
                body: "Arme, Schultern, Brust, Rücken, Rumpf, Beine und Yoga — jede Übung mit animierter Vorführung und klarer Beschreibung.",
                exercises: ["Kniebeugen", "Liegestütze", "Ausfallschritte", "Unterarmstütz", "Schulterdrücken", "Krieger II"],
            },
            progress: {
                title: "Deine Woche auf einen Blick",
                body: "Wöchentliche Aktivität, gesamte und tägliche Trainingszeit, Serien und Erfolge behalten deinen Fortschritt im Blick.",
            },
        },
        features: {
            eyebrow: "Warum MotionCore",
            titleLead: "Ein Coach in deiner Tasche.",
            titleAccent: "Ganz ohne Wearables.",
            description: "Du brauchst nur das Handy, das du schon hast, und etwas Platz.",
            items: [
                {
                    title: "Datenschutz von Anfang an",
                    body: "Die Pose-Analyse läuft komplett auf deinem Handy. Kamerabilder werden nie aufgezeichnet, gespeichert oder hochgeladen.",
                },
                {
                    title: "Hinweise im richtigen Moment",
                    body: "Kurze Tipps wie „Geh tiefer“ oder „Starke Wiederholung“ auf dem Bildschirm und per Stimme — ohne deinen Rhythmus zu stören.",
                },
                {
                    title: "Von vorne oder seitlich",
                    body: "Die meisten Übungen funktionieren frontal zur Kamera oder seitlich, und die App sagt dir, wenn du ganz ins Bild treten musst.",
                },
                {
                    title: "Faire Wertung",
                    body: "Wiederholungen werden mit Zeitstempel auf unseren Servern geprüft — Ranglisten- und Duellergebnisse lassen sich nicht einfach eintippen.",
                },
                {
                    title: "Spricht deine Sprache",
                    body: "Nutze MotionCore auf Deutsch, Englisch, Türkisch oder Spanisch.",
                },
                {
                    title: "Schnelle Anmeldung",
                    body: "Erstelle ein Konto mit deiner E-Mail-Adresse oder melde dich mit Google an.",
                },
            ],
        },
        privacy: {
            eyebrow: "Datenschutz",
            title: "Dein Kamerabild verlässt nie dein Handy",
            body: "MotionCore wandelt jedes Kamerabild direkt auf dem Gerät in Körperpunkte um und behält nur die Zahlen — Wiederholungen, Zeit und Technik. Im Duell sieht dein Gegner ein vereinfachtes Skelett, nie dein Video.",
            link: "Datenschutzerklärung lesen",
            stats: [
                { value: "0", label: "hochgeladene Videobilder" },
                { value: "33", label: "Körperpunkte pro Bild" },
                { value: "60 s", label: "pro Ranglistenduell" },
                { value: "17", label: "angeleitete Übungen" },
            ],
        },
        steps: {
            eyebrow: "So funktioniert's",
            titleLead: "Vom Download zur ersten Wiederholung",
            titleAccent: "in drei Schritten",
            description: "Nichts zu koppeln und keine lange Einrichtung — nur dein Handy und etwas Platz zum Bewegen.",
            stepLabel: "Schritt",
            items: [
                {
                    title: "Konto erstellen",
                    body: "Lade MotionCore bei Google Play herunter und registriere dich per E-Mail oder mit Google. Alter, Größe und Gewicht sind freiwillig und nur für deine eigenen Statistiken.",
                },
                {
                    title: "Handy aufstellen",
                    body: "Stell es aufrecht auf Hüfthöhe ein paar Schritte entfernt auf, sodass dein ganzer Körper — von Kopf bis Fuß — im Bild ist.",
                },
                {
                    title: "Loslegen",
                    body: "Wähle eine Übung oder ein Duell. MotionCore zählt jede Wiederholung, korrigiert deine Technik und speichert das Training in deinem Verlauf und in der Rangliste.",
                },
            ],
        },
        faq: {
            eyebrow: "FAQ",
            titleLead: "Gute Fragen,",
            titleAccent: "klare Antworten",
            items: [
                {
                    q: "Wird mein Kameravideo hochgeladen oder gespeichert?",
                    a: "Nein. Die Pose-Analyse läuft auf deinem Handy, und Kamerabilder werden weder aufgezeichnet noch gespeichert oder irgendwohin gesendet. In deinem Konto landen nur die Ergebnisse — Wiederholungen, Dauer und Technik.",
                },
                {
                    q: "Ist MotionCore kostenlos?",
                    a: "Ja. MotionCore ist kostenlos zum Download, und alle Funktionen sind derzeit kostenlos nutzbar.",
                },
                {
                    q: "Welche Handys werden unterstützt?",
                    a: "MotionCore gibt es für Android-Handys bei Google Play. Du brauchst eine funktionierende Kamera; auf neueren Handys läuft das Tracking am flüssigsten.",
                },
                {
                    q: "Wo soll ich mein Handy hinstellen?",
                    a: "Stell es aufrecht auf Hüfthöhe ein paar Schritte entfernt auf, sodass Kopf und Füße zu sehen sind. Gleichmäßiges Licht hilft. Die meisten Übungen gehen frontal zur Kamera oder seitlich.",
                },
                {
                    q: "Wie funktionieren Duelle?",
                    a: "Wähle eine Übung, und MotionCore findet einen Gegner mit ähnlicher Trophäenwertung. Ihr habt beide 60 Sekunden; die höhere Punktzahl gewinnt und bringt Trophäen. Ist niemand verfügbar, kannst du sofort gegen einen Bot spielen.",
                },
                {
                    q: "Wie lösche ich mein Konto?",
                    a: "Tippe in der App auf dein Profilbild und dann auf **Einstellungen → Profil bearbeiten → Konto löschen**. Du kannst auch über unsere [Seite zur Kontolöschung](/delete-account) eine Anfrage senden.",
                },
            ],
        },
        cta: {
            titleLead: "Bereit für deine",
            titleAccent: "erste gezählte Wiederholung?",
            body: "Lade MotionCore herunter, stell dein Handy auf und lass die Kamera zählen.",
            secondary: "Fragen? Zum Support",
        },
    },
    footer: {
        tagline: "Die kamerabasierte Trainings-App, die jede Wiederholung zählt.",
        columns: { app: "App", help: "Hilfe", legal: "Rechtliches" },
        links: {
            features: "Funktionen",
            howItWorks: "So funktioniert's",
            faq: "FAQ",
            support: "Support & Kontakt",
            deleteAccount: "Konto löschen",
            privacy: "Datenschutzerklärung",
            terms: "Nutzungsbedingungen",
        },
        rights: "© 2026 MotionCore. Alle Rechte vorbehalten.",
    },
    support: {
        title: "Wie können wir helfen?",
        intro: "Fragen, ein Fehler oder Feedback zu MotionCore? Schreib uns — ein echter Mensch aus dem Team antwortet dir.",
        contact: {
            title: "Schreib uns eine E-Mail",
            body: "Schreib an {email}. Gib bitte die E-Mail-Adresse an, die du in der App nutzt, und bei Fehlern dein Handymodell.",
            note: "Wir versuchen, innerhalb weniger Werktage zu antworten.",
        },
        inApp: {
            title: "Direkt in der App melden",
            body: "Tippe in der App auf dein Profilbild, dann auf **Einstellungen → Problem melden**, und beschreib, was passiert ist.",
        },
        topics: {
            title: "Häufige Fragen",
            items: [
                {
                    title: "Meine Wiederholungen werden nicht gezählt",
                    body: "Achte darauf, dass dein ganzer Körper von Kopf bis Fuß im Bild und gut beleuchtet ist. Geh etwas zurück und sieh in der Übungsbeschreibung nach dem besten Kamerawinkel.",
                },
                {
                    title: "Ich kann mich nicht anmelden",
                    body: "Tippe auf dem Anmeldebildschirm auf **Passwort vergessen?**, um einen Link zum Zurücksetzen per E-Mail zu bekommen. Wenn du dich mit Google registriert hast, nutze wieder die Google-Schaltfläche.",
                },
                {
                    title: "Mein Ranglistenwert sieht falsch aus",
                    body: "Die Punkte werden auf unseren Servern aus abgeschlossenen Trainings berechnet; überlappende oder nicht verifizierte Trainings zählen nicht. Wenn trotzdem etwas nicht stimmt, schreib uns mit dem Datum des Trainings.",
                },
                {
                    title: "Die Kamera startet nicht",
                    body: "MotionCore braucht Kamerazugriff, um deine Bewegung zu verfolgen. Wenn du ihn abgelehnt hast, erlaube ihn in den Einstellungen deines Handys unter Apps → MotionCore → Berechtigungen.",
                },
            ],
        },
        deletion: {
            title: "Konto löschen",
            body: "Du kannst dein Konto jederzeit in der App löschen oder uns im Web eine Anfrage senden, wenn du keinen Zugriff mehr hast.",
            cta: "Zur Kontolöschung",
        },
    },
    deletion: {
        title: "Konto oder Daten löschen",
        intro: "So löschst du dein MotionCore-Konto und die damit verbundenen Daten — mit oder ohne App.",
        app: "App: MotionCore (com.motioncore.app) · Entwickler: MotionCore",
        inApp: {
            title: "In der App löschen",
            badge: "Am schnellsten — sofort",
            steps: [
                "Öffne MotionCore und melde dich an.",
                "Tippe auf dein Profilbild und dann auf **Einstellungen**.",
                "Öffne **Profil bearbeiten** und tippe auf **Konto löschen**.",
                "Bestätige. Dein Konto und alle zugehörigen Daten werden sofort gelöscht.",
            ],
        },
        form: {
            title: "Löschung im Web anfragen",
            intro: "Kein Zugriff mehr auf die App? Sende uns hier eine Anfrage. Bevor wir etwas löschen, bestätigen wir die Anfrage per E-Mail von {email}, und wir erledigen Anfragen innerhalb von 7 Tagen.",
            email: "E-Mail-Adresse deines MotionCore-Kontos",
            emailHelp: "Wir bearbeiten nur Anfragen, die über die E-Mail-Adresse des Kontos bestätigt werden.",
            scope: "Was sollen wir löschen?",
            scopeAccount: "Mein ganzes Konto mit allen Daten",
            scopeAccountHelp: "Endgültig — kann nicht rückgängig gemacht werden.",
            scopeData: "Nur einen Teil meiner Daten — Konto behalten",
            scopeDataHelp: "Wähle aus, was gelöscht werden soll:",
            dataItems: [
                "Trainingsdaten und Statistiken",
                "Körpermaße und Ziele",
                "Profilbild",
                "Von mir gesendete Fehlerberichte",
            ],
            details: "Sollen wir noch etwas wissen? (optional)",
            detailsPlaceholder: "Zum Beispiel deinen Benutzernamen in der App",
            confirm: "Mir ist klar, dass gelöschte Daten nicht wiederhergestellt werden können.",
            submit: "Anfrage senden",
            submitting: "Wird gesendet…",
            successTitle: "Anfrage erhalten",
            successBody: "Wir melden uns innerhalb von 7 Tagen per E-Mail, um sie zu bestätigen und zu erledigen. Wenn du nichts von uns hörst, schreib an {email}.",
            again: "Weitere Anfrage senden",
            errorGeneric: "Deine Anfrage konnte nicht gesendet werden. Versuch es bitte noch einmal oder schreib an {email}.",
            errorEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
            errorConfirm: "Bitte bestätige, dass dir die Löschung als endgültig bewusst ist.",
            errorData: "Wähle mindestens eine Datenart zum Löschen aus.",
            privacyNote: "Deine Angaben hier verwenden wir nur, um diese Anfrage zu bearbeiten.",
        },
        email: {
            title: "Oder per E-Mail anfragen",
            body: "Sende von der E-Mail-Adresse deines Kontos eine Nachricht mit dem Betreff **Anfrage zur Kontolöschung** — oder **Anfrage zur Datenlöschung**, wenn du dein Konto behalten möchtest — an {email}.",
        },
        deleted: {
            title: "Was gelöscht wird",
            items: [
                "Profil: Name, Benutzername, Geschlecht und Profilbild",
                "Körpermaße und Ziele: Alter, Größe, Gewicht und Zielgewicht",
                "Alle Trainings, Wiederholungen und Statistiken",
                "Duellverlauf und Trophäenwertung",
                "Von dir gesendete Fehlerberichte",
                "Deine Anmeldedaten und das Konto selbst",
            ],
            note: "Die Löschung ist endgültig. Die Daten werden sofort aus unseren laufenden Systemen entfernt; Kopien in Backups werden innerhalb von 30 Tagen gelöscht.",
        },
    },
    legal: {
        privacy: {
            title: "Datenschutzerklärung",
            effective: "18. Oktober 2026",
            intro: "Diese Erklärung beschreibt, welche Daten die MotionCore-App erhebt, warum wir sie verarbeiten, wer uns dabei hilft und wie du deine Rechte ausübst.",
            sections: [
                {
                    id: "data-we-collect",
                    title: "1. Welche Daten wir erheben",
                    blocks: [
                        table(
                            ["Daten", "Zweck"],
                            ["E-Mail-Adresse und Passwort", "Um dein Konto zu erstellen und dich anzumelden. Passwörter werden nur als nicht umkehrbarer Hash gespeichert und können nie gelesen werden."],
                            ["Name, Benutzername, Geschlecht", "Um dein Profil zu erstellen und dich in Ranglisten und Duellen anzuzeigen."],
                            ["Profilbild (optional)", "Wird in deinem Profil, in Ranglisten und in Duellen angezeigt."],
                            ["Alter, Größe, Gewicht, Zielgewicht (optional)", "Um deine Statistiken zu personalisieren."],
                            ["Trainingsdaten (Übung, Wiederholungen, Dauer, Technikergebnisse, Zeitstempel)", "Um deinen Fortschritt zu verfolgen, Ranglistenpunkte zu berechnen und die Wertung fair zu halten."],
                            ["Duelldaten (Gegner, Punkte, Ergebnis, Trophäenwertung)", "Um Duelle, Matchmaking und Ranglisten zu betreiben."],
                            ["Fehlerberichte und Feedback, die du sendest", "Um Probleme zu beheben und dir zu antworten."],
                            ["Absturz- und Fehlerberichte (Gerätemodell, Betriebssystem- und App-Version, technische Fehlerdetails)", "Um Abstürze zu finden und zu beheben. Sie enthalten weder deinen Namen noch deine E-Mail-Adresse oder Kamerabilder."],
                        ),
                        callout(
                            "**Kamerabilder verlassen nie dein Gerät.** Die Bewegungsanalyse läuft vollständig auf deinem Handy; Kamerabilder werden weder aufgezeichnet noch gespeichert oder übertragen. Unsere Server erhalten nur Zahlen — Wiederholungen, Dauer und Technikergebnisse. Während eines Duells werden vereinfachte Körperpunkte (ein Strichmännchen-Skelett, kein Bild) live an deinen Gegner gesendet, damit die App deine Bewegung zeigen kann; sie werden nicht gespeichert.",
                        ),
                        p("Folgendes erheben wir **nicht**:"),
                        list(
                            "Deinen Standort",
                            "Kontakte, Nachrichten oder Anruflisten",
                            "Werbe-IDs — die App zeigt keine Werbung",
                            "Zahlungs- oder Kartendaten — die App bietet keine In-App-Käufe",
                        ),
                    ],
                },
                {
                    id: "how-we-use",
                    title: "2. Wie wir deine Daten nutzen",
                    blocks: [
                        list(
                            "Um dein Konto zu erstellen, deine Anmeldung zu prüfen und dich angemeldet zu halten",
                            "Um deinen Trainingsverlauf und deine Statistiken anzuzeigen",
                            "Um Ranglisten zu berechnen und Duellgegner mit ähnlicher Trophäenwertung zu finden",
                            "Um die Wertung fair zu halten, etwa indem unplausible oder überlappende Trainings verworfen werden",
                            "Um Abstürze und gemeldete Probleme zu untersuchen und deine Anfragen zu beantworten",
                        ),
                        p("Wir nutzen deine Daten nicht für Werbung und verkaufen sie niemals."),
                    ],
                },
                {
                    id: "shared-with-users",
                    title: "3. Was andere Nutzer sehen",
                    blocks: [
                        p("In Ranglisten und Duellen sehen andere Nutzer deinen **Benutzernamen, dein Profilbild, deine Punkte und deine Trophäenwertung**. Während eines Duells sieht dein Gegner außerdem deine Live-Wiederholungen und dein Skelett. Wenn du das nicht teilen möchtest, lass das Profilbild weg und wähle einen Benutzernamen, der dich nicht identifiziert."),
                        p("Deine E-Mail-Adresse, dein Alter, deine Größe, dein Gewicht und deine Ziele werden anderen Nutzern nie angezeigt."),
                    ],
                },
                {
                    id: "service-providers",
                    title: "4. Dienstleister",
                    blocks: [
                        table(
                            ["Anbieter", "Zweck"],
                            ["Supabase", "Datenbank, Authentifizierung, Dateispeicher und die Echtzeitverbindung in Duellen"],
                            ["Google", "Anmeldung, wenn du dich mit Google anmeldest; Vertrieb der App über Google Play"],
                            ["Apple", "Anmeldung, wenn du dich mit Apple anmeldest (iOS)"],
                            ["Sentry", "Absturz- und Fehlerberichte"],
                        ),
                        p("Diese Anbieter verarbeiten Daten nur, um ihre Dienste für uns zu erbringen. Einige verarbeiten Daten möglicherweise außerhalb deines Landes; wo gesetzlich erforderlich, geschieht das mit geeigneten Garantien wie Standardvertragsklauseln."),
                    ],
                },
                {
                    id: "retention",
                    title: "5. Speicherdauer",
                    blocks: [
                        p("Wir speichern deine Daten, solange dein Konto besteht. Wenn du dein Konto löschst, werden deine Daten endgültig gelöscht; das Entfernen aus Backups dauert bis zu 30 Tage. Absturzberichte werden für begrenzte Zeit gespeichert — höchstens 90 Tage."),
                    ],
                },
                {
                    id: "deleting-your-account",
                    title: "6. Konto löschen",
                    blocks: [
                        p("Tippe in der App auf dein Profilbild und dann auf **Einstellungen → Profil bearbeiten → Konto löschen**. Dadurch werden dein Profil, deine Trainingsdaten, dein Duellverlauf, deine Maße, Ziele, dein Profilbild und deine Anmeldedaten endgültig entfernt. Das kann nicht rückgängig gemacht werden."),
                        p("Wenn du die App nicht nutzen kannst, verwende unsere [Seite zur Kontolöschung](/delete-account)."),
                    ],
                },
                {
                    id: "your-rights",
                    title: "7. Deine Rechte",
                    blocks: [
                        p("Je nachdem, wo du lebst — etwa nach der EU-Datenschutz-Grundverordnung (DSGVO) oder dem türkischen Datenschutzgesetz (KVKK) — hast du das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch, Datenübertragbarkeit und Beschwerde bei einer Datenschutzbehörde."),
                        p("Du kannst dein Profil in der App bearbeiten und dein Konto jederzeit löschen. Für alles andere schreib an {email}."),
                    ],
                },
                {
                    id: "security",
                    title: "8. Sicherheit",
                    blocks: [
                        list(
                            "Alle Daten werden bei der Übertragung per HTTPS verschlüsselt",
                            "Deine Anmeldesitzung liegt im sicheren Speicher deines Handys (Android Keystore)",
                            "Datenbankregeln stellen sicher, dass jeder Nutzer nur auf seine eigenen Daten zugreift",
                            "Die Pose-Analyse läuft auf dem Gerät, daher gibt es keine Kameraaufnahmen, die geschützt werden müssten",
                        ),
                    ],
                },
                {
                    id: "children",
                    title: "9. Kinder",
                    blocks: [
                        p("MotionCore richtet sich nicht an Personen unter 16 Jahren, und wir erheben wissentlich keine Daten von ihnen. Erfahren wir davon, löschen wir die Daten und schließen das Konto."),
                    ],
                },
                {
                    id: "changes",
                    title: "10. Änderungen dieser Erklärung",
                    blocks: [
                        p("Wir können diese Erklärung aktualisieren. Bei wesentlichen Änderungen informieren wir dich in der App. Das Datum oben zeigt die aktuelle Fassung."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. Kontakt",
                    blocks: [p("Fragen oder Anfragen zu deinen Daten: {email}")],
                },
            ],
        },
        terms: {
            title: "Nutzungsbedingungen",
            effective: "18. Oktober 2026",
            intro: "Diese Bedingungen gelten für deine Nutzung der MotionCore-App und dieser Website (zusammen der „Dienst“), bereitgestellt von MotionCore („wir“). Mit dem Erstellen eines Kontos oder der Nutzung des Dienstes stimmst du ihnen zu. Wenn du nicht einverstanden bist, nutze den Dienst bitte nicht.",
            sections: [
                {
                    id: "health",
                    title: "1. Fitness und Gesundheit",
                    blocks: [
                        callout("**MotionCore ist kein Medizinprodukt.** Es stellt keine Diagnosen, behandelt nicht und ersetzt keinen Rat von Ärzten oder Physiotherapeuten. Trainings, Wiederholungszählungen und Technik-Feedback dienen nur der allgemeinen Fitness."),
                        list(
                            "Sprich mit einer Ärztin oder einem Arzt, bevor du ein neues Training beginnst — besonders bei Herz-, Gelenk-, Rücken- oder Atemproblemen, Bluthochdruck oder in der Schwangerschaft.",
                            "Sport birgt ein Verletzungsrisiko. Du entscheidest dich selbst für jede Übung und führst sie auf eigenes Risiko aus.",
                            "Hör sofort auf und hol dir Hilfe, wenn du Schmerzen, Schwindel, Übelkeit oder Atemnot spürst.",
                            "Das Pose-Tracking kann sich irren. Sieh Wiederholungszählungen und Technikhinweise als Orientierung, nicht als fachliche Beurteilung.",
                            "Halte deinen Trainingsbereich frei und stell dein Handy so auf, dass es nicht umfallen und niemand darüber stolpern kann.",
                        ),
                    ],
                },
                {
                    id: "eligibility",
                    title: "2. Voraussetzungen und dein Konto",
                    blocks: [
                        list(
                            "Du musst mindestens 16 Jahre alt sein — oder älter, wenn das digitale Mindestalter in deinem Land höher ist.",
                            "Deine Angaben müssen stimmen, und ein Konto gehört nur einer Person.",
                            "Gib deine Anmeldedaten nicht weiter und sag uns sofort Bescheid, wenn jemand anderes Zugriff auf dein Konto bekommt.",
                        ),
                    ],
                },
                {
                    id: "fair-play",
                    title: "3. Fair Play und zulässige Nutzung",
                    blocks: [
                        p("Damit Ranglisten und Duelle für alle fair bleiben, darfst du nicht:"),
                        list(
                            "Wiederholungen, Punkte oder Duellergebnisse fälschen oder manipulieren — etwa mit Skripten, veränderten Apps, Emulatoren oder aufgezeichneten Videos",
                            "Die App oder ihre Modelle zurückentwickeln, dekompilieren, verändern oder manipulieren",
                            "Sicherheitsmaßnahmen oder Anfragelimits umgehen oder automatisiert auf den Dienst zugreifen",
                            "Einen anstößigen, irreführenden oder fremde Personen nachahmenden Benutzernamen oder ein solches Profilbild verwenden",
                            "Andere Nutzer belästigen, bedrohen oder beleidigen",
                        ),
                        p("Bei Verstößen können wir Ergebnisse entfernen, Trophäenwertungen zurücksetzen oder dein Konto sperren oder schließen."),
                    ],
                },
                {
                    id: "your-content",
                    title: "4. Deine Inhalte",
                    blocks: [
                        p("Die Rechte an deinem Benutzernamen und Profilbild bleiben bei dir. Du erlaubst uns, sie zu speichern und anderen Nutzern im Dienst anzuzeigen, solange dein Konto besteht."),
                    ],
                },
                {
                    id: "intellectual-property",
                    title: "5. Geistiges Eigentum",
                    blocks: [
                        p("Der Dienst — Software, Pose-Analyse-Technologie, Designs, Illustrationen, Sounds, Name und Logo — gehört MotionCore oder seinen Lizenzgebern. Wir gewähren dir eine persönliche, nicht ausschließliche, nicht übertragbare und widerrufliche Lizenz, den Dienst für dein eigenes, nicht kommerzielles Training zu nutzen."),
                    ],
                },
                {
                    id: "purchases",
                    title: "6. Käufe",
                    blocks: [
                        p("MotionCore ist derzeit kostenlos. Führen wir kostenpflichtige Funktionen ein, werden sie über die Google-Play-Abrechnung verkauft, und es gelten die Bedingungen von Google Play. Abos verlängern sich automatisch, bis du sie mindestens 24 Stunden vor der Verlängerung im Play Store kündigst; Erstattungen richten sich nach den Erstattungsrichtlinien von Google Play."),
                    ],
                },
                {
                    id: "termination",
                    title: "7. Kontolöschung und Beendigung",
                    blocks: [
                        p("Du kannst den Dienst jederzeit nicht mehr nutzen und dein Konto löschen — in der App oder über unsere [Seite zur Kontolöschung](/delete-account). Konten, die schwer oder wiederholt gegen diese Bedingungen verstoßen, können wir sperren oder schließen."),
                    ],
                },
                {
                    id: "changes",
                    title: "8. Verfügbarkeit und Änderungen",
                    blocks: [
                        p("Wir arbeiten daran, dass der Dienst läuft, er kann aber zeitweise unterbrochen sein, und wir können Funktionen ändern oder entfernen. Wir können diese Bedingungen aktualisieren; über wesentliche Änderungen informieren wir dich in der App, und wenn du den Dienst weiter nutzt, akzeptierst du die neuen Bedingungen."),
                    ],
                },
                {
                    id: "liability",
                    title: "9. Gewährleistungsausschluss und Haftungsbeschränkung",
                    blocks: [
                        p("Der Dienst wird, soweit gesetzlich zulässig, „wie besehen“ und „wie verfügbar“ ohne jede Gewährleistung bereitgestellt. Soweit gesetzlich zulässig, haftet MotionCore nicht für indirekte oder Folgeschäden oder für Verletzungen durch Übungen, die du selbst ausführst."),
                        p("Nichts in diesen Bedingungen beschränkt eine Haftung, die gesetzlich nicht beschränkt werden kann — etwa bei Vorsatz oder grober Fahrlässigkeit — oder deine Rechte als Verbraucher."),
                    ],
                },
                {
                    id: "governing-law",
                    title: "10. Anwendbares Recht",
                    blocks: [
                        p("Diese Bedingungen unterliegen dem Recht der Republik Türkei; zuständig sind die Gerichte in Ankara. Als Verbraucher behältst du zusätzlich den Schutz der zwingenden Gesetze deines Wohnsitzlandes."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. Kontakt",
                    blocks: [p("Fragen zu diesen Bedingungen: {email}")],
                },
            ],
        },
    },
};

export default de;
