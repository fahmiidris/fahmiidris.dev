import Head from "next/head"
import { useRouter } from "next/router"

import { SeoType } from "@/types/app.type"

const Seo: React.FC<SeoType> = ({
    title,
    description = "An online portfolio by Fahmi Idris. Showcase of my projects, and some of my thoughts about website development.",
    image = "https://fahmiidris.vercel.app/logo.png",
    type = "website",
    robots = "follow, index",
    date,
}) => {
    const { asPath } = useRouter()

    return (
        <Head>
            <title>{title}</title>

            <meta name="robots" content={robots} />
            <meta content={description} name="description" />
            <meta property="og:url" content={`https://fahmiidris.vercel.app${asPath}`} />

            <link rel="canonical" href={`https://fahmiidris.vercel.app${asPath}`} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Fahmi Idris" />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta name="image" property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@FahmiIdrisA" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {date && (
                <>
                    <meta property="article:published_time" content={date} />
                    <meta name="publish_date" property="og:publish_date" content={date} />
                    <meta name="author" property="article:author" content="Fahmi Idris" />
                </>
            )}
        </Head>
    )
}

export default Seo
