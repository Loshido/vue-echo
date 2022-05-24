function Features() {
    return [
        {
            title: 'VueJS',
            content: "Un approchable, performant et versatile framework pour créer des pages web avec interface utilisateur.",
            rgb: "rgba(108, 147, 128, 0.85)",
            identifier: "vue",
            image: {
                src: "https://vuejs.org/images/logo.png",
                alt: "VueJS"
            }
        },
        {
            title: 'Javascript',
            content: "JavaScript (JS) est le plus connu language de code pour les pages Web.",
            rgb: "rgba(147, 147, 108, 0.85)",
            identifier: "js",
            image: {
                src: "https://www.developpez.net/forums/attachments/p294178d1/a/a/a",
                alt: "JavaScript"
            }
        },
        {
            title: 'HTML',
            content: "HTML signifie \"HyperText Markup Language\" qui se traduit par \"language de balises pour l'hypertexte\" ",
            rgb: "rgba(108, 147, 128, 0.85)",
            identifier: "html",
            image: {
                src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                alt: "Image"
            }
        },
        {
            title: 'CSS',
            content: "CSS est l'un des languages principaux du Web, Il sert d'apparence sur les pages Web",
            rgb: "rgba(108, 147, 147,0.85)",
            identifier: "css",
            image: {
                src: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                alt: "Image"
            }
        }
    ]
    
}

function FAQ() {
    return [
        {
            title: "Far far away",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary"
        },
        {
            title: "Werther",
            content: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my"
        },
        {
            title: "Kafka",
            content: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The"
        },
        {
            title: "Pangram",
            content: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens"
        },
        {
            title: "Cicero",
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui"
        },
    ]
}

const Texts = {
    header: "<strong>Bienvenue</strong>, cette page est un essai technique. J'apprends à utiliser <a class=\"link\" target=\"_blank\" href=\"https://vuejs.org/\">VueJS</a> et en effet, il faut commencer par quelque chose sinon on reste bloqué à rien savoir faire. Finalement, cette demo technique sera surement manipulée de pleins de façons différentes pour comprendre le fonctionnement de ce framework.",
    warning: "Page inspirée initialement du site officiel de <a class=\"link\" href=\"https://fivem.net\">FiveM</a>, Étant donné que ma page est seulement faite pour apprendre.",
    nolimits: "<i><q>Mesurer les progrès de la programmation en lignes de code, c’est comme mesurer les progrès de la construction d’un avion en poids.</q></i>"
}

const articles = [
    {
        title: "Encryption",
        key: 'encryption',
        content: "Encryption Text",
        path: "/shop/encryption",
        image: {
            src: () => import('./holder/encryption.svg'),
            alt: "encryption"
        }
    },
    {
        title: "FinishLine",
        content: "Finish Line Text",
        key: 'finishline',
        path: "/shop/finishline",
        image: {
            src: () => import('./holder/finishline.svg'),
            alt: "finishline"
        }
    },
    {
        title: "Inspiration",
        content: "Inspiration Text",
        key: 'inspiration',
        path: "/shop/inspiration",
        image: {
            src: () => import('./holder/inspiration.svg'),
            alt: "inspiration"
        }
    },
    {
        title: "investing",
        content: "investing Text",
        key: 'investing',
        path: "/shop/investing",
        image: {
            src: () => import('./holder/investing.svg'),
            alt: "investing"
        }
    },
    {
        title: "moving",
        content: "moving Text",
        key: 'moving',
        path: "/shop/moving",
        image: {
            src: () => import('./holder/moving.svg'),
            alt: "moving"
        }
    },
    {
        title: "relax",
        content: "relax Text",
        key: 'relax',
        path: "/shop/relax",
        image: {
            src: () => import('./holder/relax.svg'),
            alt: "relax"
        }
    },
    {
        title: "sheet",
        content: "sheet Text",
        key: 'sheet',
        path: "/shop/sheet",
        image: {
            src: () => import('./holder/sheet.svg'),
            alt: "sheet"
        }
    },
    {
        title: "videographer",
        content: "videographer Text",
        key: 'videographer',
        path: "/shop/videographer",
        image: {
            src: () => import('./holder/videographer.svg'),
            alt: "videographer"
        }
    },
    {
        title: "warning",
        content: "warning Text",
        key: 'warning',
        path: "/shop/warning",
        image: {
            src: () => import('./holder/warning.svg'),
            alt: "warning"
        }
    },
    {
        title: "working",
        content: "working Text",
        key: 'working',
        path: "/shop/working",
        image: {
            src: () => import('./holder/working.svg'),
            alt: "working"
        }
    },
]
function getArticle(item) {
    for(var i = 0; i < articles.length; i++){
        for(var k in articles[i]){
            if (typeof(articles[i][k])=="string"  && articles[i][k] == item){
                return articles[i];
            }
        }
    }
}

export {FAQ,Features,Texts, articles,getArticle};
