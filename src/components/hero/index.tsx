import { Box, InputBase, Stack, Typography } from "@mui/material";
import { HeroStack } from "./styled";
import { HeroPropsType } from "../../types/app.type";
import { BaseButton } from "../button";

export const Hero: React.FC<HeroPropsType> = ({ heroLead, heroBody, heroImg }) => {
    return (
        <HeroStack>
            <Box
                flex={0.55}
            >
                <Typography
                    variant="h1"
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={{ mobile: 32, miniTablet: 36, tablet: 48, laptop: 44, desktop: 54, xl: 70 }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    whiteSpace={"normal"}
                    sx={{
                        textWrap: "balance",
                    }}
                >
                    {heroLead}
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 18 }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    whiteSpace={"normal"}
                    marginBlock={"2rem"}
                    marginBlockEnd={{ laptop: "4rem" }}
                >
                    {heroBody}
                </Typography>
                <Stack
                    className="newsletterForm"
                    direction={{ mobile: "row" }}
                    justifyContent={"space-between"}
                    borderRadius={"40px"}
                    bgcolor={"#FFFFFF"}
                    width={"fit-content"}
                >
                    <InputBase
                        sx={{ ml: "1rem", width: "stretch" }}
                        placeholder="Join our newsletter"
                        inputProps={{ 'aria-label': 'Join our newsletter' }}
                    />
                    <BaseButton
                        className="newsletterButton"
                        sx={{
                            borderRadius: "inherit",
                            flexShrink: 0,
                        }}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Submit
                        </Typography>
                    </BaseButton>
                </Stack>
            </Box>
            <Box
                flex={0.45}
                className="heroImgBox"
                component={"div"}
            >
                {heroImg}
            </Box>
        </HeroStack>
    )
}