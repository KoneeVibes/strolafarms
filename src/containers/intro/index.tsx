import { Box, Typography } from "@mui/material";
import { IntroStack } from "./styled";
import { IntroPropsType } from "../../types/app.type";
import { BaseButton } from "../../components/button";

export const Intro: React.FC<IntroPropsType> = ({ introImg, introLead, introBody }) => {
    return (
        <IntroStack>
            <Box
                component={"div"}
                className="introImgBox"
                flex={0.44}
            >
                {introImg}
            </Box>
            <Box
                flex={0.56}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={{ mobile: 32, miniTablet: 36, desktop: 48, }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    whiteSpace={"normal"}
                >
                    {introLead}
                </Typography>
                {introBody.map((item, key) => {
                    return (
                        <Typography
                            key={key}
                            variant="body1"
                            fontFamily={"Inter"}
                            fontWeight={400}
                            fontSize={{ mobile: 16 }}
                            lineHeight={"24px"}
                            color={"#000000"}
                            marginBlock={"2rem"}
                            whiteSpace={"normal"}
                        >
                            {item}
                        </Typography>
                    )
                })}
                <Box
                    display={"flex"}
                    overflow={"hidden"}
                >
                    <BaseButton
                        sx={{
                            marginBlock: { mobile: "1rem", laptop: "4rem" },
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
                            Read more
                        </Typography>
                    </BaseButton>
                </Box>
            </Box>
        </IntroStack>
    )
}