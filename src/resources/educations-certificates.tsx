import * as React from 'react';

import type { EducationType } from '@/types/education';
import type { CertificateType } from '@/types/certificate';

export const formalEducation: EducationType[] = [
  {
    id: 1,
    title: 'MTs. Al-Hidayah Tajur',
    description: () => (
      <>
        <p>
          Taking junior high school education at Madrasah Tsanawiyah Al-Hidayah Tajur for 3 years from 2015 to 2018.
        </p>
      </>
    ),
    major: "Haven't Take Course",
    date: {
      start: 1435683600000,
      end: 1525539600000,
    },
    href: 'https://goo.gl/maps/E4WA97kJ5bPptrRB6',
    images: [
      {
        image: require('@/img/educations/mts-alhidayah-tajur-1.jpg').default,
        alt: 'Before Graduation',
      },
      {
        image: require('@/img/educations/mts-alhidayah-tajur-2.jpg').default,
        alt: "Homeroom Teacher's Birthday 92 B",
      },
      {
        image: require('@/img/educations/mts-alhidayah-tajur-3.jpg').default,
        alt: 'After Graduation Event',
      },
    ],
  },
  {
    id: 2,
    title: 'SMK 1 Triple J Citeureup',
    description: () => (
      <>
        <p>
          Continuing high school education at Triple J 1 Vocational High School majoring in Software Engineering for 3
          years from 2018 to 2021.
        </p>
      </>
    ),
    major: 'Software Engineering',
    date: {
      start: 1530378000000,
      end: 1619802000000,
    },
    href: 'https://www.facebook.com/smk1triplejciteureup/',
    images: [
      {
        image: require('@/img/educations/smk-1-triple-j-1.jpg').default,
        alt: 'Go to Malang!',
      },
      {
        image: require('@/img/educations/smk-1-triple-j-2.jpg').default,
        alt: 'After Exam',
      },
      {
        image: require('@/img/educations/smk-1-triple-j-3.jpg').default,
        alt: 'Taking Certificate of Graduation',
      },
    ],
  },
];

export const nonFormalEducation: EducationType[] = [
  {
    id: 1,
    title: 'PROA Digital Talent Scholarship 2022',
    description: () => (
      <>
        <p>
          Successfully passed and got the Professional Academy Digital Talent Scholarship 2022 - Android Developer
          Kotlin. This activity is organized through the Dicoding platform.
        </p>
      </>
    ),
    major: 'Android Developer - Kotlin',
    date: {
      start: 1652720400000,
      end: 1660150800000,
    },
    href: 'https://digitalent.kominfo.go.id',
    images: [
      {
        image: require('@/img/educations/proa-2022-1.jpg').default,
        alt: 'Dashboard Digitalent Kominfo',
      },
      {
        image: require('@/img/educations/proa-idcamp-2022.jpg').default,
        alt: 'Dashboard Dicoding',
      },
    ],
  },
  {
    id: 2,
    title: 'IDCamp 2022',
    description: () => (
      <>
        <p>
          Following the Indosat Ooredoo Hutchison 2022 IDCamp Activity with the Frontend Web Developer Learning Path.
          This activity was held through the Dicoding platform.
        </p>
      </>
    ),
    major: 'Frontend Developer Learning Path',
    date: {
      start: 1653584400000,
      end: 1662224400000,
    },
    href: 'https://idcamp.ioh.co.id',
    images: [
      {
        image: require('@/img/educations/idcamp-2022-1.jpg').default,
        alt: 'Dashboard IDCamp 2022',
      },
      {
        image: require('@/img/educations/proa-idcamp-2022.jpg').default,
        alt: 'Dashboard Dicoding',
      },
    ],
  },
  {
    id: 3,
    title: 'PROA Digital Talent Scholarship 2022',
    description: () => (
      <>
        <p>
          Following the Indosat Ooredoo Hutchison 2022 IDCamp Activity with the Frontend Web Developer Learning Path.
          This activity was held through the Dicoding platform.
        </p>
      </>
    ),
    major: 'Android Developer Intermediate - Kotlin',
    date: {
      start: 1662310800000,
      // end: 1668272400000,
    },
    href: 'https://digitalent.kominfo.go.id',
    images: [
      {
        image: require('@/img/educations/proa-2022-intermediate.jpg').default,
        alt: 'Dashboard Digitalent Kominfo',
      },
    ],
  },
];

export const certificates: CertificateType[] = [
  {
    title: 'Pemrograman JavaScript: Pemula sampai Mahir',
    description: 'Certificate in JavaScript Programming Language from Udemy Eko Kurniawan Khannedy.',
    href: 'https://drive.google.com/file/d/19yABP5rcegFTPapBuWh7BYfLsz73vaLf/view?usp=sharing',
    credential: {
      id: 'UC-120a1008-9831-4ba2-b8ea-9df407cdb626',
      href: 'https://ude.my/UC-120a1008-9831-4ba2-b8ea-9df407cdb626',
    },
    platform: {
      name: 'Udemy',
      href: 'https://www.udemy.com/',
    },
    date: {
      start: 1638810000000,
    },
  },
  {
    title: 'Pemrograman Go-Lang: Pemula sampai Mahir',
    description: 'Certificate in Go Programming Language from Udemy Eko Kurniawan Khannedy.',
    href: 'https://drive.google.com/file/d/1DJQGzVVYvP9MDtUrq_Ocl7a_SC1oxBY3/view?usp=sharing',
    credential: {
      id: 'UC-89e8f2e3-a979-468c-8b65-f286a9e0495b',
      href: 'https://ude.my/UC-89e8f2e3-a979-468c-8b65-f286a9e0495b',
    },
    platform: {
      name: 'Udemy',
      href: 'https://www.udemy.com/',
    },
    date: {
      start: 1641747600000,
    },
  },
  {
    title: 'Memulai Pemrograman Dengan Kotlin Dicoding Indonesia',
    description:
      'Certificate in Kotlin Programming Language from PROA Digital Talent Scholarship 2022 by Kominfo X Dicoding.',
    href: 'https://drive.google.com/file/d/1MIgK9EEsJaDRD1whR4Q2-2S98kq6SZra/view?usp=sharing',
    credential: {
      id: '1OP860EKVXQK',
      href: 'https://www.dicoding.com/certificates/1OP860EKVXQK',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1654880400000,
      end: 1654880400000,
    },
  },
  {
    title: 'React.js Web Frontend Candradimuka Jabar Coding Camp 2021 - Online',
    description:
      'Certificate in React.js Library/Framework from Candradimuka Jabar Coding Camp 2021 by Jabar Digital Service.',
    href: 'https://drive.google.com/file/d/1zb-bdrqp7zAFIuvwZsKivWI0ZjEOuEZL/view?usp=sharing',
    credential: {
      id: '429/JCC/SRTF/IX/2021',
    },
    platform: {
      name: 'Candradimuka Jabar Coding Camp',
      href: 'https://www.jabarcodingcamp.id/',
    },
    date: {
      start: 1629651600000,
    },
  },
  {
    title: 'Belajar Dasar Pemrograman Web Dicoding Indonesia',
    description: 'Certificate in HTML, CSS, and JavaScript from IDCamp 2022 by Indosat Ooredoo Hutchison X Dicoding.',
    href: 'https://drive.google.com/file/d/19iGxl-VWWPuStZbLfviK02WfGL5xEuyA/view?usp=sharing',
    credential: {
      id: 'EYX420GJWZDL',
      href: 'https://www.dicoding.com/certificates/EYX420GJWZDL',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1655917200000,
      end: 1750611600000,
    },
  },
  {
    title: 'Belajar Membuat Front-End Web Untuk Pemula Dicoding Indonesia',
    description: 'Certificate in HTML, CSS, and JavaScript from IDCamp 2022 by Indosat Ooredoo Hutchison X Dicoding.',
    href: 'https://drive.google.com/file/d/1HHct_yphW1u1gxgwNQkN1gFIHX4jt28S/view?usp=sharing',
    credential: {
      id: 'GRX5L43V2P0M',
      href: 'https://www.dicoding.com/certificates/GRX5L43V2P0M',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1657040400000,
      end: 1751734800000,
    },
  },
  {
    title: 'Belajar Fundamental Aplikasi Android Dicoding Indonesia',
    description:
      'Certificate in Android Application using Kotlin from PROA Digital Talent Scholarship 2022 by Kominfo X Dicoding.',
    href: 'https://drive.google.com/file/d/1AkzJOrBg50G8eoBO2aFTO5XJoe1ZFNJw/view?usp=sharing',
    credential: {
      id: '6RPNDOYL8Z2M',
      href: 'https://www.dicoding.com/certificates/6RPNDOYL8Z2M',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1659286800000,
      end: 1753981200000,
    },
  },
  {
    title: 'Belajar Dasar Visualisasi Data Dicoding Indonesia',
    description: 'Certificate in Basic Data Visualization from Dicoding.',
    href: 'https://drive.google.com/file/d/1HdLk8wm9y6n9oPMm1sedi35p7KqRF44s/view?usp=sharing',
    credential: {
      id: '81P2GM5DNPOY',
      href: 'https://www.dicoding.com/certificates/81P2GM5DNPOY',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1660323600000,
      end: 1755018000000,
    },
  },
  {
    title: 'Memulai Pemrograman Python Dicoding Indonesia',
    description: 'Certificate in Basic Python from Dicoding.',
    href: 'https://drive.google.com/file/d/1l9UZZPQZlIkcO7hvouWKmj94dCyR8Swb/view?usp=sharing',
    credential: {
      id: '6RPNDJ76RZ2M',
      href: 'https://www.dicoding.com/certificates/6RPNDJ76RZ2M',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1660755600000,
      end: 1755450000000,
    },
  },
  {
    title: 'Belajar Frontend Web Development Dicoding Indonesia',
    description: 'Certificate in Frontend Web Development from Dicoding.',
    href: 'https://drive.google.com/file/d/1FRsvn9i0aSqb_smkF5dtzwdkYooku1YT/view?usp=sharing',
    credential: {
      id: '0LZ01899NP65',
      href: 'https://www.dicoding.com/certificates/0LZ01899NP65',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1661187600000,
      end: 1755882000000,
    },
  },
  {
    title: 'Professional Academy Digital Talent Scholarship 2022 - Android Developer',
    description: 'Certificate in PROA 2022 Android Developer from Digitalent.',
    href: 'https://drive.google.com/file/d/1nCxiNHSDSdDhrqL8M4nxVR0uxA88FkVb/view?usp=sharing',
    credential: {
      id: 'PROA/2022/2335/152233535101-88',
    },
    platform: {
      name: 'Digitalent by Kominfo',
      href: 'https://digitalent.kominfo.go.id/',
    },
    date: {
      start: 1661792400000,
    },
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript Dicoding Indonesia',
    description: 'Certificate in Basic JavaScript from Lintasarta Cloudeka Digischool 2022 X Dicoding.',
    href: 'https://drive.google.com/file/d/1JeAZ0ayvhry3xQdaXmBeyLkmYS_o1Ljf/view?usp=sharing',
    credential: {
      id: '1RXYMKJ7MXVM',
      href: 'https://www.dicoding.com/certificates/1RXYMKJ7MXVM',
    },
    platform: {
      name: 'Dicoding',
      href: 'https://www.dicoding.com/',
    },
    date: {
      start: 1665248400000,
      end: 1759942800000,
    },
  },
];
