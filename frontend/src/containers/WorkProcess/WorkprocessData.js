import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import {GoLightBulb} from "react-icons/go";
import {BiCodeAlt, BiRocket} from "react-icons/bi";
import {VscDebugAlt} from "react-icons/vsc";


export const WorkprocessData = [
    {
        id: 0,
        name: "POMYSŁ",
        icon: <GoLightBulb/>,
        isBackground: true,
    },
    {
        id: 1,
        name: "DESIGN",
        icon: <FaPencilAlt/>
    },
    {
        id: 2,
        name: "KODOWANKO",
        icon: <BiCodeAlt/>,
        isBackground: true,
    },
    {
        id: 3,
        name: "TESTOWANIE",
        icon: <VscDebugAlt/>
    },
    {
        id: 4,
        name: "URUCHOMIENIE",
        icon: <BiRocket/>,
        isBackground: true,
    },
]