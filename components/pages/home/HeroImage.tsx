import dynamic from "next/dynamic"

import Line from "@/components/custom/Line"

const Me = dynamic(() => import("../../custom/Me"), { ssr: false })

const HeroImage: React.FC = () => {
    return (
        <div className="pt-10 md:pt-0">
            <div className="relative select-none">
                <div className="w-[250px] md:w-[300px] h-[400px] md:h-auto">
                    <Me className="w-[250px] md:w-[300px] h-auto" />
                </div>
                <div className="absolute z-10 top-[30px] md:top-[40px]">
                    <Line className="w-[250px] md:w-[300px] h-auto" />
                </div>
            </div>
        </div>
    )
}

export default HeroImage
