import Langman from "../../assets/h-langman.png"
import Langman2 from "../../assets/h-langman-2.png"
import Langman3 from "../../assets/h-langman-3.png"
import Langman4 from "../../assets/h-langman-4.png"
import Langman5 from "../../assets/h-langman-5.png"
import Langman6 from "../../assets/h-langman-6.png"
import Hospital from "../../assets/hospital-otomation.png"
import Hospital2 from "../../assets/hospital-otomation-2.png"
import Hospital3 from "../../assets/hospital-otomation-3.png"
import Hospital4 from "../../assets/hospital-otomation-4.png"
import Hospital5 from "../../assets/hospital-otomation-5.png"
import Hospital6 from "../../assets/hospital-otomation-6.png"
import Hospital7 from "../../assets/hospital-otomation-7.png"
import Hospital8 from "../../assets/hospital-otomation-8.png"
import Hospital9 from "../../assets/hospital-otomation-9.png"
import FikrimVar from "../../assets/fikrim-var.png"
import FikrimVar2 from "../../assets/fikrim-var-2.png"
import FikrimVar3 from "../../assets/fikrim-var-3.png"
import FikrimVar4 from "../../assets/fikrim-var-4.png"
import FikrimVar5 from "../../assets/fikrim-var-5.png"
import FikrimVar6 from "../../assets/fikrim-var-6.png"
import FikrimVar7 from "../../assets/fikrim-var-7.png"
import FikrimVar8 from "../../assets/fikrim-var-8.png"
import FikrimVar9 from "../../assets/fikrim-var-9.png"
import FikrimVar10 from "../../assets/fikrim-var-10.png"
import TMEDETECT from "../../assets/TME-DETECT.png"
import TEKNOFESTUYZ from "../../assets/teknofest-uyz.jpg"
import Datatable from "../../assets/datatable.png"
import FruitNinja from "../../assets/fruit-ninja.png"
import Library from "../../assets/library-otomation.png"
import Library2 from "../../assets/library-otomation-2.png"
import Library3 from "../../assets/library-otomation-3.png"
import Library4 from "../../assets/library-otomation-4.png"
import Library5 from "../../assets/library-otomation-5.png"



const Data =[
    {
        id:1,
        img: [TMEDETECT],
        title: "Tübitak-1002 TME DETECT",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "TME DETECT: ",
            desc: "\"Panoramik radyografiler ile temporomandibular eklem bölgesindeki dejeneratif            değişikliklerin tespit edilmesi\" için YoloV5 ile eğitilmiş yapay zeka modelinin            kulllanıcılar tarafından kullanılması için geliştirilmiştir.",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "HTML-CSS-JS-DJANGO-MYSQL",
        },
        // {
        //     icon: "fa-brands fa-github",
        //     title: "Github: ",
        //     desc: "",
        // }
    ]
    },
    {
        id:2,
        img: [Langman,Langman2,Langman3,Langman4,Langman5,Langman6],
        title: "H-Langman",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "H-Langman: ",
            desc: "Necmettin Erbakan Üniversitesi Bilgisayar Mühendisliği 5.dönem seçmeli dersi olan \"Programlama Dilleri Kavramları\" dersi final projesi için geliştirilmiş bir masaüstü uygulama oyunudur.",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "Qt - C++",
        },
        {
            icon: "fa-brands fa-github",
            title: "Source Code: ",
            link: "https://github.com/SemaEkmekci/Qt-Creator--H-Langman",
        }
    ]
    },
    {
        id:3,
        img: [Hospital,Hospital2,Hospital3,Hospital4,Hospital5,Hospital6,Hospital7,Hospital8,Hospital9],
        title: "Hastane Randevu Sistemi",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "Hastane Randevu Sistemi: ",
            desc: "Necmettin Erbakan Üniversitesi Bilgisayar Mühendisliği 5.dönem seçmeli dersi olan \"Web Programlama\" dersi final projesi için geliştirilmiştir.",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "React.js - PHP",
        },
        {
            icon: "fa-brands fa-github",
            title: "Github: ",
            link: "https://github.com/SemaEkmekci/Hastane-Otomasyonu",
        }
    ]
    },
    {
        id:4,
        img: [FikrimVar,FikrimVar2,FikrimVar3,FikrimVar4,FikrimVar5,FikrimVar6,FikrimVar7,FikrimVar8,FikrimVar9,FikrimVar10],
        title: "Fikrim Var",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "Fikrim Var: ",
            desc: "Kapsül Teknoloji Platformu için geliştirdiğim \"Fikrim Var\" projesi, platform kullanıcılarına proje fikirlerini ilgili birim sorumlusuna ileterek tanıtma fırsatı sunuyor. Bu sayede kullanıcılar, birim sorumlularından gelen geri bildirimleri değerlendirebilirler Ayrıca, projelerini daha ayrıntılı şekilde tartışmak isteyen kullanıcılar, istedikleri takdirde birim sorumlularıyla randevu oluşturabilirler.",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "React.js - Node.js",
        },
        {
            icon: "fa-brands fa-github",
            title: "Github: ",
            link: "https://github.com/SemaEkmekci/fikrim-var-project?tab=readme-ov-file",
        }
    ]
    },
    {
        id:5,
        img: [TEKNOFESTUYZ],
        title: "Teknofest - Ulaşımda Yapay Zeka",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "Ulaşımda Yapay Zeka: ",
            desc: "\"Teknofest ulaşımda yapay zeka\" yarışma kategorisinde \"Neü Kapsül AIgenZ\" takımı olarak yaptığımız Yolov5 algoritması ile nesne tespiti (araba, insan, tır, motor vs.) modeli",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "Python - YOLOV5",
        },
        
    ]
    },
    {
        id:6,
        img: [FruitNinja],
        title: "Fruit-Ninja",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "Fruit-Ninja: ",
            desc: "\"Necmettin Erbakan Üniversitesi\" 2.sınıf bahar dönemi Görsel Programlama dersinde Qt-Creator ile geliştirilmiştir.",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "Qt - C++",
        },
        {
            icon: "fa-brands fa-github",
            title: "Github: ",
            link: "https://github.com/SemaEkmekci/GorselProgramlamaQtCreator--Fruit-Ninja",
        }
    ]
    },
    {
        id:7,
        img: [Library,Library2,Library3,Library4,Library5],
        title: "Kütüphane Otomasyonu",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "Kütüphane Otomasyonu: ",
            desc: "\"Necmettin Erbakan Üniversitesi\" 2.sınıf bahar dönemi Görsel Programlama dersinde Qt-Creator ile geliştirilmiştir.",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "Qt - C++",
        },
        {
            icon: "fa-brands fa-github",
            title: "Github: ",
            link: "https://github.com/SemaEkmekci/GorselProgramlamaQtCreator--Kutuphane-Otomasyonu",
        }
    ]
    },
    {
        id:8,
        img: [Datatable, Datatable],
        title: "Datatable",
        details: [{
            icon: "fa-regular fa-file-code",
            title: "Datatable: ",
            desc: "Kullanıcı bilgilerinin göründüğü, ekleme, silme, güncelleme ve arama işlemlerinin yapılabildiği veri tablosu",
        },
        {
            icon: "fa-solid fa-code",
            title: "Language: ",
            desc: "HTML-CSS- Vanilla-JS",
        },
        {
            icon: "fa-brands fa-github",
            title: "Github: ",
            link: "https://github.com/SemaEkmekci/Web_Gelistirme-Web-Development-/tree/main/Js_Table",
        }
    ]
    },
    
    
]
export default Data;