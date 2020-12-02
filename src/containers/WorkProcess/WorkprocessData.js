import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import {GoLightBulb} from "react-icons/go";
import {BiCodeAlt, BiRocket} from "react-icons/bi";
import {VscDebugAlt} from "react-icons/vsc";

export const parallaxData = [
    {
        start: 400,
        end: 700,
        properties: [
            {
                startValue: -1500,
                endValue: 0,
                property: 'left'
            },
            {
                startValue: 0,
                endValue: 1,
                property: "opacity"
            }
        ],
    },
    {
        start: 900, 
        end: 1200,
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity"
            },
            {
                startValue: 0,
                endValue: 300,
                property: "top"
            }
        ]
    }
];

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