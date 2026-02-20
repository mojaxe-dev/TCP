import { FaArrowAltCircleRight, FaArrowCircleRight, FaArrowRight, FaArrowsAlt, FaRegArrowAltCircleRight } from "react-icons/fa";
import meetmario from "./assets/meetmario.jpg"
import "./styles.css"

export default function Section5() {
    const underlineEffect = "after:content-[''] after:w-0 after:h-0.5 after:bg-black after:absolute relative after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 w-max hover:cursor-pointer"

    function handleUnderline() {

    }

    return (
        <div className="mx-32">
            <section>
                <hr className="mt-2 border-2 text-[#9c3466]" />
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold tracking-wider py-3">PODCASTS</p> <FaArrowRight className="mt-0.5" />
                </div>
            </section>
            <hr className="mb-8 text-gray-200" />
            <section className="flex">
                <div className="flex border-r pr-5 border-gray-300 whitespace-nowrap">
                    <img className="w-70" src={meetmario} alt="mario" />
                    <ul className="flex-col ml-8 mt-18">
                        <li><p className="text-xs font-semibold tracking-wider whitespace-break-spaces"><a href="#"><span className="text-[#9c3466] hover:text-gray-500"><span className="text-lg">●</span> FEATURED POST</span></a>     <a href="#"><span className="hover:text-[#9c3466]">PODCAST</span></a>     <a href="#"><span className="hover:text-[#9c3466]">THE SHOW</span></a></p></li>
                        <ul className="underlineGroup mt-2">
                            <li className="underlineEffect font-bold text-xl">Meet Pastor Mario -</li>
                            <li className="underlineEffect font-bold text-xl -mt-1.5">Reformation in India</li>
                        </ul>
                        <li className="mt-4"><p className="text-sm"><span className="block">🎙️ Podcast Episode: Meet Pastor Mario - </span><span className="block">Reformation in India 🇮🇳 Join us for an awesome</span><span className="block"> episode as we sit …</span></p></li>
                        <li className="mt-4 font-bold flex flex-row gap-3 hover:text-[#9c3466]">Play Episode <FaRegArrowAltCircleRight size={20} className="mt-1" /></li>
                    </ul>
                </div>
                <div>

                </div>
                <div>

                </div>
            </section>
        </div>
    )
}