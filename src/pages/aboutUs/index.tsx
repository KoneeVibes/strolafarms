import { useRef } from "react";
import { Container } from "@mui/material";
import { Header } from "../../components/header";
import { HeroImg } from "../../assets/about/index";
import { About } from "../../containers/about/index";
import { Delivery } from "../../components/delivery";
import { Footer } from "../../components/footer";
import { CoreValues } from "../../containers/coreValues";

export const AboutUs = () => {
    const footerRef = useRef(null);
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Header
                heroLead="Where Livestock farming meets Excellence"
                heroBody="Learn about our journey, values, and commitment to sustainable livestock farming"
                heroImg={<HeroImg />}
                footerRef={footerRef}
            />
            <About />
            <CoreValues />
            <Delivery />
            <Footer footerRef={footerRef} />
        </Container>
    )
}