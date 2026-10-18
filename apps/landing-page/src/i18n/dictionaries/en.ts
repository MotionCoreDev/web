import { callout, list, p, table } from "../blocks";
import type { Dictionary } from "../types";

const en: Dictionary = {
    meta: {
        siteName: "MotionCore",
        home: {
            title: "MotionCore: the camera counts every rep",
            description:
                "MotionCore tracks your form through your phone's camera, counts full and half reps, and lets you compete in 60-second battles and leaderboards. Free on Android.",
        },
        support: {
            title: "Support",
            description: "Get help with MotionCore: contact the team, report a problem or find answers to common questions.",
        },
        deleteAccount: {
            title: "Delete your account",
            description: "How to delete your MotionCore account and data, in the app or with a request on the web.",
        },
        privacy: {
            title: "Privacy Policy",
            description: "What data MotionCore collects, why, who processes it and how you can exercise your rights.",
        },
        terms: {
            title: "Terms of Use",
            description: "The terms that apply when you use the MotionCore app and website.",
        },
    },
    nav: {
        features: "Features",
        howItWorks: "How it works",
        faq: "FAQ",
        support: "Support",
        download: "Get the app",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        language: "Language",
        skipToContent: "Skip to content",
    },
    common: {
        googlePlayAlt: "Get it on Google Play",
        availability: "Free on Android",
        effectiveLabel: "Effective",
        contents: "Contents",
        backToTop: "Back to top",
        emailUs: "Email us",
    },
    home: {
        hero: {
            eyebrow: "On-device AI form tracking",
            titleLead: "Every rep seen.",
            titleAccent: "Every rep counted.",
            subtitle:
                "MotionCore follows your joints through your phone's camera, counts full and half reps, coaches your form in real time and lets you take on other athletes in 60-second battles. Your video never leaves your phone.",
            secondaryCta: "See how it works",
            hud: { full: "Full", half: "Half", time: "Time", cue: "Great depth", exercise: "Squat" },
        },
        ribbon: [
            "17 guided movements",
            "Real-time form feedback",
            "Camera frames stay on your phone",
            "English · Türkçe · Deutsch · Español",
        ],
        showcase: {
            eyebrow: "Inside the app",
            titleLead: "Prop up your phone and start moving.",
            titleAccent: "MotionCore keeps score.",
            description: "Every screen is built around one idea: you train, the camera does the counting.",
            tracking: {
                tag: "Live tracking",
                title: "Full reps, half reps and holds, counted as you move",
                body: "Pose tracking reads 33 body landmarks in every frame. A shallow squat counts as a half rep, a plank is timed only while your body stays straight, and short cues tell you what to fix.",
                chips: ["Full", "Half", "Hold"],
            },
            battle: {
                title: "1v1 battles in 60 seconds",
                body: "Get matched with a player of a similar trophy rating, do the same exercise at the same time and watch their live skeleton next to yours. Nobody around? Play a bot right away.",
            },
            leaderboard: {
                title: "Leaderboards that reset",
                body: "Climb today's, this week's, this month's or the all-time board, overall or for a single exercise.",
            },
            library: {
                title: "17 movements in 7 categories",
                body: "Arms, shoulders, chest, back, core, legs and yoga, each with an animated demo and a clear description.",
                exercises: ["Squat", "Push Up", "Lunge", "Plank", "Shoulder Press", "Warrior Two"],
            },
            progress: {
                title: "Your week at a glance",
                body: "Weekly activity, total and daily training time, streaks and achievements keep your progress in view.",
            },
        },
        features: {
            eyebrow: "Why MotionCore",
            titleLead: "A coach in your pocket.",
            titleAccent: "No wearables needed.",
            description: "All it takes is the phone you already have and a little floor space.",
            items: [
                {
                    title: "Private by design",
                    body: "Pose analysis runs entirely on your phone. Camera frames are never recorded, stored or uploaded.",
                },
                {
                    title: "Cues at the right moment",
                    body: "Short hints like “Go deeper” or “Great rep” on screen and by voice, without breaking your rhythm.",
                },
                {
                    title: "Front or side view",
                    body: "Most movements work facing the camera or side-on, and the app tells you when to step fully into the frame.",
                },
                {
                    title: "Fair-play scoring",
                    body: "Reps are timestamped and checked on our servers, so leaderboard and battle results can't simply be typed in.",
                },
                {
                    title: "Speaks your language",
                    body: "Use MotionCore in English, Turkish, German or Spanish.",
                },
                {
                    title: "Quick sign-in",
                    body: "Create an account with your email address or continue with Google.",
                },
            ],
        },
        privacy: {
            eyebrow: "Privacy",
            title: "Your camera feed never leaves your phone",
            body: "MotionCore turns each camera frame into body landmarks on the device and keeps only the numbers: reps, time and form. In a battle your opponent sees a simplified skeleton, never your video.",
            link: "Read the privacy policy",
            stats: [
                { value: "0", label: "video frames uploaded" },
                { value: "33", label: "body landmarks per frame" },
                { value: "60 s", label: "per ranked battle" },
                { value: "17", label: "guided movements" },
            ],
        },
        steps: {
            eyebrow: "How it works",
            titleLead: "From download to first rep",
            titleAccent: "in three steps",
            description: "Nothing to pair and no long setup. All you need is your phone and some space to move.",
            stepLabel: "Step",
            items: [
                {
                    title: "Create your account",
                    body: "Download MotionCore from Google Play and sign up with email or Google. Age, height and weight are optional and only used for your own stats.",
                },
                {
                    title: "Set up your phone",
                    body: "Stand it upright at about hip height a few steps away, so your whole body, from head to feet, is in the frame.",
                },
                {
                    title: "Start moving",
                    body: "Pick a movement or a battle. MotionCore counts every rep, coaches your form and saves the session to your history and the leaderboard.",
                },
            ],
        },
        faq: {
            eyebrow: "FAQ",
            titleLead: "Good questions,",
            titleAccent: "straight answers",
            items: [
                {
                    q: "Is my camera video uploaded or stored?",
                    a: "No. Pose analysis runs on your phone, and camera frames are not recorded, stored or sent anywhere. Only the results are saved to your account: rep counts, duration and form.",
                },
                {
                    q: "Is MotionCore free?",
                    a: "Yes. MotionCore is free to download, and all of its features are currently free to use.",
                },
                {
                    q: "Which phones are supported?",
                    a: "MotionCore is available for Android phones on Google Play. It needs a working camera; newer phones give the smoothest tracking.",
                },
                {
                    q: "Where should I put my phone?",
                    a: "Stand it upright at about hip height, a few steps away, so both your head and your feet are visible. Even lighting helps. Most movements can be done facing the camera or side-on.",
                },
                {
                    q: "How do battles work?",
                    a: "Pick an exercise and MotionCore finds an opponent with a similar trophy rating. You both get 60 seconds, and the higher score wins and earns trophies. If nobody is available, you can play a bot right away.",
                },
                {
                    q: "How do I delete my account?",
                    a: "In the app, tap your profile photo, then **Settings → Edit Profile → Delete Account**. You can also send a request from our [account deletion page](/delete-account).",
                },
            ],
        },
        cta: {
            titleLead: "Ready for your",
            titleAccent: "first counted rep?",
            body: "Download MotionCore, prop up your phone and let the camera do the counting.",
            secondary: "Questions? Visit support",
        },
    },
    footer: {
        tagline: "The camera-based training app that counts every rep.",
        columns: { app: "App", help: "Help", legal: "Legal" },
        links: {
            features: "Features",
            howItWorks: "How it works",
            faq: "FAQ",
            support: "Support & contact",
            deleteAccount: "Delete account",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
        },
        rights: "© 2026 MotionCore. All rights reserved.",
    },
    support: {
        title: "How can we help?",
        intro: "Questions, a bug or feedback about MotionCore? Write to us and a real person on the team will answer.",
        contact: {
            title: "Email us",
            body: "Write to {email}. Please include the email address you use in the app and, for bugs, your phone model.",
            note: "We aim to reply within a few business days.",
        },
        inApp: {
            title: "Report from the app",
            body: "In the app, tap your profile photo, then **Settings → Report an Issue**, and describe what happened.",
        },
        topics: {
            title: "Common questions",
            items: [
                {
                    title: "My reps aren't being counted",
                    body: "Make sure your whole body, head to feet, is in the frame and well lit. Step back a little, and check the movement's description for the best camera angle.",
                },
                {
                    title: "I can't sign in",
                    body: "Use **Forgot Your Password?** on the sign-in screen to get a reset link by email. If you signed up with Google, use the Google button again.",
                },
                {
                    title: "My leaderboard score looks wrong",
                    body: "Scores are calculated on our servers from completed sessions; overlapping or unverified sessions are not counted. If something still looks off, email us with the date of the session.",
                },
                {
                    title: "The camera doesn't start",
                    body: "MotionCore needs camera access to track your movement. If you denied it, allow it again in your phone's settings under Apps → MotionCore → Permissions.",
                },
            ],
        },
        deletion: {
            title: "Delete your account",
            body: "You can delete your account in the app at any time, or send us a request on the web if you no longer have access.",
            cta: "Go to account deletion",
        },
    },
    deletion: {
        title: "Delete your account or data",
        intro: "How to delete your MotionCore account and the data linked to it, with or without the app.",
        app: "App: MotionCore (com.motioncore.app) · Developer: MotionCore",
        inApp: {
            title: "Delete in the app",
            badge: "Fastest",
            steps: [
                "Open MotionCore and sign in.",
                "Tap your profile photo, then **Settings**.",
                "Open **Edit Profile** and tap **Delete Account**.",
                "Confirm. Your account and all of its data are deleted right away.",
            ],
        },
        form: {
            title: "Request deletion on the web",
            intro: "No access to the app any more? Send us a request here. Before deleting anything we confirm it by email from {email}, and we complete requests within 7 days.",
            email: "Email address of your MotionCore account",
            emailHelp: "We only act on requests that are confirmed from the account's email address.",
            scope: "What should we delete?",
            scopeAccount: "My whole account and all of its data",
            scopeAccountHelp: "Permanent. This cannot be undone.",
            scopeData: "Only some of my data (keep my account)",
            scopeDataHelp: "Choose what to delete:",
            dataItems: [
                "Workout records and statistics",
                "Body measurements and goals",
                "Profile photo",
                "Bug reports I sent",
            ],
            details: "Anything else we should know? (optional)",
            detailsPlaceholder: "For example, the username you used in the app",
            confirm: "I understand that deleted data cannot be recovered.",
            submit: "Send request",
            submitting: "Sending…",
            successTitle: "Request received",
            successBody: "We'll email you within 7 days to confirm and complete it. If you don't hear from us, write to {email}.",
            again: "Send another request",
            errorGeneric: "Your request couldn't be sent. Please try again, or email {email}.",
            errorEmail: "Please enter a valid email address.",
            errorConfirm: "Please confirm that you understand deletion is permanent.",
            errorData: "Choose at least one type of data to delete.",
            privacyNote: "What you enter here is used only to handle this request.",
        },
        email: {
            title: "Or request by email",
            body: "Send an email with the subject **Account Deletion Request** from your account's email address to {email}. To keep your account and delete only some data, use the subject **Data Deletion Request**.",
        },
        deleted: {
            title: "What gets deleted",
            items: [
                "Profile: name, username, gender and profile photo",
                "Body measurements and goals: age, height, weight and target weight",
                "All workout sessions, reps and statistics",
                "Battle history and trophy rating",
                "Bug reports you sent",
                "Your login details and the account itself",
            ],
            note: "Deletion is permanent. Data is removed from our live systems right away; copies in backups are purged within 30 days.",
        },
    },
    legal: {
        privacy: {
            title: "Privacy Policy",
            effective: "18 October 2026",
            intro: "This policy explains what data the MotionCore app collects, why we process it, who helps us process it and how you can exercise your rights.",
            sections: [
                {
                    id: "data-we-collect",
                    title: "1. Data we collect",
                    blocks: [
                        table(
                            ["Data", "Why"],
                            ["Email address and password", "To create your account and sign you in. Passwords are stored only as an irreversible hash and can never be read."],
                            ["Name, username, gender", "To build your profile and show you on leaderboards and in battles."],
                            ["Profile photo (optional)", "Shown on your profile, on leaderboards and in battles."],
                            ["Age, height, weight, target weight (optional)", "To personalise your statistics."],
                            ["Workout records (exercise, reps, duration, form results, timestamps)", "To track your progress, calculate leaderboard scores and keep scoring fair."],
                            ["Battle records (opponent, scores, result, trophy rating)", "To run matches, matchmaking and rankings."],
                            ["Bug reports and feedback you send", "To fix problems and reply to you."],
                            ["Crash and error reports (device model, operating system and app version, technical error details)", "To find and fix crashes. They don't contain your name, email address or camera images."],
                        ),
                        callout(
                            "**Camera images never leave your device.** Movement analysis runs entirely on your phone; camera frames are not recorded, stored or sent anywhere. Only numeric results reach our servers: rep counts, duration and form results. During a battle, simplified body keypoints (a stick-figure skeleton, not an image) are sent live to your opponent so the app can show your movement; they are not stored.",
                        ),
                        p("We do **not** collect:"),
                        list(
                            "Your location",
                            "Contacts, messages or call logs",
                            "Advertising identifiers (the app shows no ads)",
                            "Payment or card details (the app has no in-app purchases)",
                        ),
                    ],
                },
                {
                    id: "how-we-use",
                    title: "2. How we use your data",
                    blocks: [
                        list(
                            "To create your account, verify your sign-in and keep you signed in",
                            "To show your workout history and statistics",
                            "To calculate leaderboards and find battle opponents with a similar trophy rating",
                            "To keep scoring fair, for example by discarding implausible or overlapping sessions",
                            "To investigate crashes and the problems you report, and to answer your requests",
                        ),
                        p("We don't use your data for advertising and we never sell it."),
                    ],
                },
                {
                    id: "shared-with-users",
                    title: "3. What other users can see",
                    blocks: [
                        p("On leaderboards and in battles, other users can see your **username, profile photo, score and trophy rating**. During a battle your opponent also sees your live rep count and your skeleton. If you'd rather not share these, leave out the profile photo and choose a username that doesn't identify you."),
                        p("Your email address, age, height, weight and goals are never shown to other users."),
                    ],
                },
                {
                    id: "service-providers",
                    title: "4. Service providers",
                    blocks: [
                        table(
                            ["Provider", "Purpose"],
                            ["Supabase", "Database, authentication, file storage and the realtime connection used in battles"],
                            ["Google", "Sign-in, if you choose to continue with Google; app distribution through Google Play"],
                            ["Apple", "Sign-in, if you choose to continue with Apple (iOS)"],
                            ["Sentry", "Crash and error reporting"],
                        ),
                        p("These providers process data only to provide their services to us. Some of them may process data outside your country; where the law requires it, this happens under appropriate safeguards such as standard contractual clauses."),
                    ],
                },
                {
                    id: "retention",
                    title: "5. How long we keep data",
                    blocks: [
                        p("We keep your data for as long as your account exists. When you delete your account, your data is deleted permanently; removing it from backups takes up to 30 days. Crash reports are kept for at most 90 days."),
                    ],
                },
                {
                    id: "deleting-your-account",
                    title: "6. Deleting your account",
                    blocks: [
                        p("In the app, tap your profile photo, then **Settings → Edit Profile → Delete Account**. This permanently removes your profile, workout records, battle history, measurements, goals, profile photo and login. It cannot be undone."),
                        p("If you can't use the app, use our [account deletion page](/delete-account)."),
                    ],
                },
                {
                    id: "your-rights",
                    title: "7. Your rights",
                    blocks: [
                        p("Depending on where you live, for example under the EU GDPR or Türkiye's Personal Data Protection Law (KVKK), you have the right to access your data, correct it, delete it, restrict or object to its processing, receive it in a portable format and complain to a data protection authority."),
                        p("You can edit your profile in the app and delete your account at any time. For anything else, email {email}."),
                    ],
                },
                {
                    id: "security",
                    title: "8. Security",
                    blocks: [
                        list(
                            "All data in transit is encrypted with HTTPS",
                            "Your sign-in session is kept in your phone's secure storage (Android Keystore)",
                            "Database rules let each user access only their own data",
                            "Pose analysis happens on the device, so there are no camera recordings to protect",
                        ),
                    ],
                },
                {
                    id: "children",
                    title: "9. Children",
                    blocks: [
                        p("MotionCore is not intended for anyone under 16, and we don't knowingly collect data from them. If we learn that we have, we delete the data and close the account."),
                    ],
                },
                {
                    id: "changes",
                    title: "10. Changes to this policy",
                    blocks: [
                        p("We may update this policy. If the changes are significant, we'll let you know in the app. The effective date at the top shows the latest version."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. Contact",
                    blocks: [p("Questions or requests about your data: {email}")],
                },
            ],
        },
        terms: {
            title: "Terms of Use",
            effective: "18 October 2026",
            intro: "These terms apply to your use of the MotionCore app and this website (together, the “Service”), provided by MotionCore (“we”, “us”). By creating an account or using the Service, you agree to them. If you don't agree, please don't use the Service.",
            sections: [
                {
                    id: "health",
                    title: "1. Fitness and health",
                    blocks: [
                        callout("**MotionCore is not a medical device.** It does not diagnose, treat or replace advice from a doctor or physiotherapist. Workouts, rep counts and form feedback are for general fitness only."),
                        list(
                            "Talk to a doctor before starting a new exercise routine, especially if you have heart, joint, back or breathing problems, high blood pressure, or are pregnant.",
                            "Exercise carries a risk of injury. You choose to do every exercise, and you do it at your own risk.",
                            "Stop immediately and seek help if you feel pain, dizziness, nausea or shortness of breath.",
                            "Pose tracking can make mistakes. Treat rep counts and form cues as guidance, not as a professional assessment.",
                            "Keep your training space clear, and place your phone where it can't fall or trip anyone.",
                        ),
                    ],
                },
                {
                    id: "eligibility",
                    title: "2. Eligibility and your account",
                    blocks: [
                        list(
                            "You must be at least 16 years old, or the age of digital consent where you live if that is higher.",
                            "The information you give us must be accurate, and an account is for one person only.",
                            "Keep your login details to yourself and tell us right away if someone else gets access to your account.",
                        ),
                    ],
                },
                {
                    id: "fair-play",
                    title: "3. Fair play and acceptable use",
                    blocks: [
                        p("To keep leaderboards and battles fair for everyone, you must not:"),
                        list(
                            "Fake or manipulate rep counts, scores or battle results, for example with scripts, modified apps, emulators or recorded videos",
                            "Reverse engineer, decompile, modify or tamper with the app or its models",
                            "Get around security measures or rate limits, or access the Service in an automated way",
                            "Use a username or profile photo that is offensive, misleading or impersonates someone",
                            "Harass, threaten or abuse other users",
                        ),
                        p("If you break these rules, we may remove results, reset trophy ratings, or suspend or close your account."),
                    ],
                },
                {
                    id: "your-content",
                    title: "4. Your content",
                    blocks: [
                        p("You keep the rights to the username and profile photo you add. You allow us to store them and show them to other users inside the Service for as long as your account exists."),
                    ],
                },
                {
                    id: "intellectual-property",
                    title: "5. Intellectual property",
                    blocks: [
                        p("The Service, including its software, pose-analysis technology, designs, illustrations, sounds, name and logo, belongs to MotionCore or its licensors. We give you a personal, non-exclusive, non-transferable and revocable licence to use the Service for your own, non-commercial training."),
                    ],
                },
                {
                    id: "purchases",
                    title: "6. Purchases",
                    blocks: [
                        p("MotionCore is currently free. If we introduce paid features, they will be sold through Google Play billing and Google Play's terms will apply. Subscriptions renew automatically until you cancel them in the Play Store at least 24 hours before renewal, and refunds follow Google Play's refund policy."),
                    ],
                },
                {
                    id: "termination",
                    title: "7. Deleting your account and termination",
                    blocks: [
                        p("You can stop using the Service and delete your account at any time, in the app or through our [account deletion page](/delete-account). We may suspend or close accounts that seriously or repeatedly break these terms."),
                    ],
                },
                {
                    id: "changes",
                    title: "8. Availability and changes",
                    blocks: [
                        p("We work to keep the Service running, but it may sometimes be interrupted, and we may change or remove features. We may update these terms; for significant changes we'll notify you in the app, and continuing to use the Service means you accept the new terms."),
                    ],
                },
                {
                    id: "liability",
                    title: "9. Disclaimer and limitation of liability",
                    blocks: [
                        p("The Service is provided “as is” and “as available”, without warranties of any kind to the extent the law allows. To the extent the law allows, MotionCore is not liable for indirect or consequential damages, or for injuries resulting from exercises you choose to do."),
                        p("Nothing in these terms limits liability that cannot be limited by law (for example for intent or gross negligence) or your rights as a consumer."),
                    ],
                },
                {
                    id: "governing-law",
                    title: "10. Governing law",
                    blocks: [
                        p("These terms are governed by the laws of the Republic of Türkiye, and the courts of Ankara have jurisdiction. If you are a consumer, you also keep the protection of the mandatory laws of the country where you live."),
                    ],
                },
                {
                    id: "contact",
                    title: "11. Contact",
                    blocks: [p("Questions about these terms: {email}")],
                },
            ],
        },
    },
};

export default en;
