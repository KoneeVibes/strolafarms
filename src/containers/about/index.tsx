import { Box } from "@mui/material";
import { Intro } from "../intro";
import { IntroImg } from "../../assets/about";

export const About = () => {
    return (
        <Box>
            <Intro
                introImg={<IntroImg />}
                introLead="About Us"
                introBody={"Strola Farms is an indigenous livestock farm. We are situated in Lagos, Oyo, and Kwara state. We use a simplified, sustainable, and economically viable farming method to provide high-quality vegetables. Our vast enterprise incorporates a smooth model for grains, leaves, and livestock. <br/> We sell high-quality cattle, goat, ram, pig, snail and poultry – defining excellence in quality, delivery, business operation, and leadership.Our reputation is built on honesty, integrity and quality assurance with core values that are backed by customer satisfaction, fast delivery, and fair pricing. We operate a sustainable business that effectively targets long-term returns while managing short-term risks. The main focus of Strola Farms is providing a healthy range of cattle with sustainable food systems and urban agriculture."}
            />
        </Box>
    )
}