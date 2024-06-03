import { Container } from "@mui/material";
import { Header } from "../../containers/header";
import { HeroImg } from "../../assets/home";
import { Pitch } from "../../containers/pitch";

export const Home = () => {
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
            />
            <Pitch />
        </Container>
    )
}