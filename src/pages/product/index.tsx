import { Container } from "@mui/material";
import { Header } from "../../components/header";
import { HeroImg } from "../../assets/product";
import { Delivery } from "../../components/delivery";
import { Footer } from "../../components/footer";

export const Product = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Header
                heroLead="Shop Sustainable Livestock Now Here"
                heroBody="Experience the taste and quality of our sustainably raised livestock"
                heroImg={<HeroImg />}
            />
            <Delivery />
            <Footer />
        </Container>
    )
}