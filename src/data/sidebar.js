import { AiOutlineShopping } from "react-icons/ai"
import { BiBorderAll } from "react-icons/bi"
import { MdOutlineCelebration } from "react-icons/md"

export const sidebarLink = [
    {
        icon: BiBorderAll,
        label: "header.links.new",
        link: "/",
        id: 1
    },
    {
        icon: AiOutlineShopping,
        label: "header.links.all",
        link: "/all-products",
        id: 2
    },
    {
        icon: MdOutlineCelebration,
        label: "header.links.ad",
        link: "/ads",
        id: 3
    }
]