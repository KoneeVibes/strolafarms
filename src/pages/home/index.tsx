import { useRef } from "react";
import { Container } from "@mui/material";
import { Header } from "../../components/header";
import { HeroImg } from "../../assets/home";
import { Pitch } from "../../containers/pitch";
import { Products } from "../../containers/products";
import { Delivery } from "../../components/delivery";
import { Footer } from "../../components/footer";

export const Home = () => {
    const footerRef = useRef(null);
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Header
                heroLead="Experience the Best of Livestock Farming"
                heroBody="Your One-Stop Shop for Healthy, Sustainable, and Fresh Produce"
                heroImg={<HeroImg />}
                footerRef={footerRef}
            />
            <Pitch />
            <Products />
            <Delivery />
            <Footer footerRef={footerRef} />
        </Container>
    )
}