import { Box, Stack, Typography } from "@mui/material";
import { Intro } from "../../components/intro";
import { IntroImg } from "../../assets/home";
import { Greenstar, Yellowstar } from "../../assets";
import { PitchBox } from "./styled";

export const Pitch = () => {
    return (
        <PitchBox>
            <Box
                position={"relative"}
                padding={{ mobile: "var(--sectionMargin) var(--pagePadding) calc(2 * var(--sectionMargin))", laptop: "calc(2 * var(--sectionMargin)) var(--pagePadding)" }}
            >
                <Box
                    width={{ laptop: "40%" }}
                >
                    <Typography
                        variant="h2"
                        fontFamily={"Inter"}
                        fontWeight={600}
                        fontSize={{ mobile: 25, desktop: 30, xl: 35 }}
                        lineHeight={"normal"}
                        whiteSpace={"normal"}
                        marginBlockEnd={{ laptop: "2rem" }}
                    >
                        Strola Farm is your number one source for live animals, including goats, pigs, chickens, rams, and snails.
                    </Typography>
                </Box>
                <Stack
                    direction={{ laptop: "row" }}
                    gap={"var(--flexGap)"}
                    alignItems={{ laptop: "center" }}
                    justifyContent={"space-between"}
                >
                    <Box
                        flex={0.40}
                    >
                        <Yellowstar className="yellowStar" />
                    </Box>
                    <Box
                        flex={0.6}
                    >
                        <Typography
                            variant="body1"
                            fontFamily={"Inter"}
                            fontWeight={400}
                            fontSize={{ mobile: 16 }}
                            lineHeight={"24px"}
                            whiteSpace={"normal"}
                        >
                            As the custodians of livestock, we never compromise on quality, safety, and prompt delivery of our animals and grains.
                            Our animals are provided with healthy grass and sustainably sourced wasted grain produced from our farm.
                            Our products are butchered, cleaned and transported to all areas in Nigeria's South West region and other geopolitical zones. We sell wholesale, retail, and segmented livestock as our customer satisfaction is our No. 1 Priority.
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <Intro
                introImg={<IntroImg />}
                introLead="Our Story"
                introBody={["Strola Farms is an indigenous livestock farm. We are located in Lagos, Oyo, and Kwara state. We supply quality produce using a streamlined approach to farming that’s both cost-effective and sustainable. Our extensive operation integrates a seamless model for livestock, grains and leaves"]}
            />
            <Greenstar className="greenStar" />
        </PitchBox>
    )
}