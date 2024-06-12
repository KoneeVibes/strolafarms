import React from "react";

export type HeroPropsType = {
    heroLead: string,
    heroBody: string,
    heroImg: React.ReactNode,
}

export type HeaderPropsType = {
    heroLead: string,
    heroBody: string,
    heroImg: React.ReactNode,
    footerRef: React.RefObject<HTMLDivElement>
}

export type IntroPropsType = {
    introImg: React.ReactNode,
    introLead: string,
    introBody: string[],
    url: string,

}

export type FooterRefType = {
    footerRef: React.RefObject<HTMLDivElement>
}