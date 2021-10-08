import { LogoAndMarkType } from "@/types/navbar.type"

const ApplicationLogo: React.FC<LogoAndMarkType> = ({ className }) => {
    return (
        <svg className={className} width={490} height={500} viewBox="0 0 490 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={250} height={250} rx={58} fill="#38BDF8" />
            <rect x={115} y={125} width={250} height={250} rx={58} fill="#0EA5E9" />
            <rect x={240} y={250} width={250} height={250} rx={58} fill="#0284C7" />
        </svg>
    )
}

export default ApplicationLogo
