import React from "react";

export type HeroPropsType = {
    heroLead: string,
    heroBody: string,
    heroImg: React.ReactNode,
}

export type IntroPropsType = {
    introImg: React.ReactNode,
    introLead: string,
    introBody: string,
    url?: string,
}