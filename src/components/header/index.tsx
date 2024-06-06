import { Greenstar } from "../../assets";
import { Hero } from "../hero";
import { Navbar } from "../navigation";
import { HeroPropsType } from "../../types/app.type";
import { HeaderBox } from "./styled";

export const Header: React.FC<HeroPropsType> = ({ heroLead, heroBody, heroImg }) => {
    return (
        <HeaderBox>
            <Navbar />
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