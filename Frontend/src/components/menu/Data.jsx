import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWater } from "react-icons/fa";
import { IoMdRainy } from "react-icons/io"
import { RiDashboard2Line } from "react-icons/ri";
import About from "../../assets/about.png"


const Data = [
    {
        id : 1,
        title :"Main",
        icon : <RiDashboard2Line className="text-white size-8"/>,
        url : "/"
    },
    {
        id : 2,
        title :"Suhu",
        icon : <CiTempHigh className="text-white size-8"/>,
        url : "/suhu"
    },
    {
        id : 3,
        title :"Kelembaban",
        icon : <WiHumidity className="text-white size-8"/>,
        url : "/kelembaban"
    },
    {
        id : 4,
        title :"Permukaan Air",
        icon : <FaWater className="text-white size-8"/>,
        url :"/ketinggian"
    },
    {
        id : 5,
        title :"Curah Hujan",
        icon : <IoMdRainy className="text-white size-8"/>,
        url :"/hujan"
    },
    {
        id : 6,
        title :"About",
        icon : <img src={About} alt="cuki" className="text-white size-8"/>,
        url :"/about"
    }
]

export default Data;