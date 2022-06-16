import { CertificateType } from "@/types/certificate.type";
import type { EducationType } from "@/types/education.type";

export const formalEducation: EducationType[] = [
    {
        title: "MTs. Al-Hidayah Tajur",
        major: "Haven't Take Course",
        date: {
            start: 1435683600000,
            end: 1525453200000,
        },
        href: "https://goo.gl/maps/E4WA97kJ5bPptrRB6",
    },
    {
        title: "SMK 1 Triple J Citeureup",
        major: "Software Engineering",
        date: {
            start: 1530378000000,
            end: 1619802000000,
        },
        href: "https://www.facebook.com/smk1triplejciteureup/",
    }
];

export const nonFormalEducation: EducationType[] = [
    {
        title: "Jabar Coding Camp 2021",
        major: "Frontend Developer - React.js",
        date: {
            start: 1629824400000,
            end: 1648659600000,
        },
        href: "https://www.jabarcodingcamp.id",
    },
    {
        title: "PROA Digital Talent Scholarship 2022",
        major: "Android Developer - Kotlin",
        date: {
            start: 1652720400000,
        },
        href: "https://digitalent.kominfo.go.id",
    },
    {
        title: "IDCamp 2022",
        major: "Frontend Developer Learning Path",
        date: {
            start: 1653584400000,
        },
        href: "https://idcamp.ioh.co.id",
    },
];

export const certificates: CertificateType[] = [
    {
        title: "Pemrograman JavaScript: Pemula sampai Mahir",
        description: "Certificate in JavaScript Programming Language from Udemy Eko Kurniawan Khannedy.",
        href: "https://drive.google.com/file/d/19yABP5rcegFTPapBuWh7BYfLsz73vaLf/view?usp=sharing",
        credential: {
            id: "UC-120a1008-9831-4ba2-b8ea-9df407cdb828",
            href: "https://ude.my/UC-120a1008-9831-4ba2-b8ea-9df407cdb828",
        },
        platform: {
            name: "Udemy",
            href: "https://www.udemy.com/",
        },
        date: {
            start: 1638810000000,
        }
    },
    {
        title: "Pemrograman Go-Lang: Pemula sampai Mahir",
        description: "Certificate in Go Programming Language from Udemy Eko Kurniawan Khannedy.",
        href: "https://drive.google.com/file/d/1DJQGzVVYvP9MDtUrq_Ocl7a_SC1oxBY3/view?usp=sharing",
        credential: {
            id: "UC-89e8f2e3-a979-468c-8b65-f286a9e0495b",
            href: "https://ude.my/UC-89e8f2e3-a979-468c-8b65-f286a9e0495b",
        },
        platform: {
            name: "Udemy",
            href: "https://www.udemy.com/",
        },
        date: {
            start: 1641747600000
        }
    },
    {
        title: "Memulai Pemrograman Dengan Kotlin Dicoding Indonesia",
        description: "Certificate in Kotlin Programming Language from PROA Digital Talent Scholarship 2022 by Kominfo X Dicoding.",
        href: "https://drive.google.com/file/d/1MIgK9EEsJaDRD1whR4Q2-2S98kq6SZra/view?usp=sharing",
        credential: {
            id: "1OP860EKVXQK",
            href: "https://www.dicoding.com/certificates/1OP860EKVXQK",
        },
        platform: {
            name: "Dicoding",
            href: "https://www.dicoding.com/",
        },
        date: {
            start: 1654880400000,
            end: 1654880400000
        }
    },
    {
        title: "React.js Web Frontend Candradimuka Jabar Coding Camp 2021 - Online",
        description: "Certificate in React.js Library/Framework from Candradimuka Jabar Coding Camp 2021 by Jabar Digital Service.",
        href: "https://drive.google.com/file/d/1zb-bdrqp7zAFIuvwZsKivWI0ZjEOuEZL/view?usp=sharing",
        credential: {
            id: "429/JCC/SRTF/IX/2021",
        },
        platform: {
            name: "Candradimuka Jabar Coding Camp",
            href: "https://www.jabarcodingcamp.id/",
        },
        date: {
            start: 1629651600000
        }
    },
];
