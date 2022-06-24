import type { EducationType } from "@/types/education.type";
import type { CertificateType } from "@/types/certificate.type";

export const formalEducation: EducationType[] = [
    {
        id: 1,
        title: "MTs. Al-Hidayah Tajur",
        description: () => (
            <>
                <p>Taking junior high school education at Madrasah Tsanawiyah Al-Hidayah Tajur for 3 years from 2015 to 2018.</p>
            </>
        ),
        major: "Haven't Take Course",
        date: {
            start: 1435683600000,
            end: 1525539600000,
        },
        href: "https://goo.gl/maps/E4WA97kJ5bPptrRB6",
        images: [
            {
                src: require('@/images/educations/mts-alhidayah-tajur-1.jpg').default,
                alt: "Before Graduation",
            },
            {
                src: require('@/images/educations/mts-alhidayah-tajur-2.jpg').default,
                alt: "Homeroom Teacher's Birthday 92 B",
            },
            {
                src: require('@/images/educations/mts-alhidayah-tajur-3.jpg').default,
                alt: "After Graduation Event",
            },
        ],
    },
    {
        id: 2,
        title: "SMK 1 Triple J Citeureup",
        description: () => (
            <>
                <p>Continuing high school education at Triple J 1 Vocational High School majoring in Software Engineering for 3 years from 2018 to 2021.</p>
            </>
        ),
        major: "Software Engineering",
        date: {
            start: 1530378000000,
            end: 1619802000000,
        },
        href: "https://www.facebook.com/smk1triplejciteureup/",
        images: [
            {
                src: require('@/images/educations/smk-1-triple-j-1.jpg').default,
                alt: "After the PKL Session",
            },
            {
                src: require('@/images/educations/smk-1-triple-j-2.jpg').default,
                alt: "After Exam",
            },
            {
                src: require('@/images/educations/smk-1-triple-j-3.jpg').default,
                alt: "Taking Certificate of Graduation",
            },
        ],
    }
];

export const nonFormalEducation: EducationType[] = [
    {
        id: 1,
        title: "Jabar Coding Camp 2021",
        description: () => (
            <>
                <p>Join the Jabar Coding Camp 2021 bootcamp online phase (React.js class) for one month from August 2021 to September 2021. and qualify for the Jabar Coding Camp 2021 offline phase for 6 months.</p>
            </>
        ),
        major: "Frontend Developer - React.js",
        date: {
            start: 1629824400000,
            end: 1648659600000,
        },
        href: "https://www.jabarcodingcamp.id",
        images: [
            {
                src: require('@/images/educations/jcc-1.jpg').default,
                alt: "Working Visit to JDS Command Center",
            },
            {
                src: require('@/images/educations/jcc-2.jpg').default,
                alt: "Working Visit to JDS Command Center",
            },
            {
                src: require('@/images/educations/jcc-3.jpg').default,
                alt: "Healing Ya Gaes Ya!!!",
            },
        ],
    },
    {
        id: 2,
        title: "PROA Digital Talent Scholarship 2022",
        description: () => (
            <>
                <p>Successfully passed and got the Professional Academy Digital Talent Scholarship 2022 - Android Developer Kotlin. This activity is organized through the Dicoding platform.</p>
            </>
        ),
        major: "Android Developer - Kotlin",
        date: {
            start: 1652720400000,
        },
        href: "https://digitalent.kominfo.go.id",
        images: [
            {
                src: require('@/images/educations/proa-2022-1.jpg').default,
                alt: "Dashboard Digitalent Kominfo",
            },
            {
                src: require('@/images/educations/proa-idcamp-2022.jpg').default,
                alt: "Dashboard Dicoding",
            },
        ],
    },
    {
        id: 3,
        title: "IDCamp 2022",
        description: () => (
            <>
                <p>Following the Indosat Ooredoo Hutchison 2022 IDCamp Activity with the Frontend Web Developer Learning Path. This activity was held through the Dicoding platform.</p>
            </>
        ),
        major: "Frontend Developer Learning Path",
        date: {
            start: 1653584400000,
        },
        href: "https://idcamp.ioh.co.id",
        images: [
            {
                src: require('@/images/educations/idcamp-2022-1.jpg').default,
                alt: "Dashboard IDCamp 2022",
            },
            {
                src: require('@/images/educations/proa-idcamp-2022.jpg').default,
                alt: "Dashboard Dicoding",
            },
        ],
    },
];

export const certificates: CertificateType[] = [
    {
        title: "Pemrograman JavaScript: Pemula sampai Mahir",
        description: "Certificate in JavaScript Programming Language from Udemy Eko Kurniawan Khannedy.",
        href: "https://drive.google.com/file/d/19yABP5rcegFTPapBuWh7BYfLsz73vaLf/view?usp=sharing",
        credential: {
            id: "UC-120a1008-9831-4ba2-b8ea-9df407cdb626",
            href: "https://ude.my/UC-120a1008-9831-4ba2-b8ea-9df407cdb626",
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
            start: 1641747600000,
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
            end: 1654880400000,
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
            start: 1629651600000,
        }
    },
    {
        title: "Belajar Dasar Pemrograman Web Dicoding Indonesia",
        description: "Certificate in HTML, CSS, and JavaScript from IDCamp 2022 by Indosat Ooredoo Hutchison X Dicoding.",
        href: "https://drive.google.com/file/d/19iGxl-VWWPuStZbLfviK02WfGL5xEuyA/view?usp=sharing",
        credential: {
            id: "EYX420GJWZDL",
            href: "https://www.dicoding.com/certificates/EYX420GJWZDL"
        },
        platform: {
            name: "Dicoding",
            href: "https://www.dicoding.com/",
        },
        date: {
            start: 1655917200000,
            end: 1750611600000,
        }
    },
];
