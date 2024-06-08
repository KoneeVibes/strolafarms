import { Greenstar } from "../../assets";
import { Hero } from "../hero";
import { Navbar } from "../navigation";
import { HeaderPropsType } from "../../types/app.type";
import { HeaderBox } from "./styled";

export const Header: React.FC<HeaderPropsType> = ({ heroLead, heroBody, heroImg, footerRef }) => {
    return (
        <HeaderBox>
            <Navbar footerRef={footerRef} />
            <Hero
                heroLead={heroLead}
                heroBody={heroBody}
                heroImg={heroImg}
            />
            <Greenstar
                className="greenStar"
            />
        </HeaderBox>
    )
}