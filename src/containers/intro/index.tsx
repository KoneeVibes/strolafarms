import { Box, Typography } from "@mui/material";
import { IntroStack } from "./styled";
import { IntroPropsType } from "../../types/app.type";
import { BaseButton } from "../../components/button";

export const Intro: React.FC<IntroPropsType> = ({ introImg, introLead, introBody }) => {
    return (
        <IntroStack>
            <Box>
                {introImg}
            </Box>
            <Box>
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={{ mobile: 48 }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    marginBlock={"2rem"}
                    whiteSpace={"normal"}
                >
                    {introLead}
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 16 }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    marginBlock={"2rem"}
                    whiteSpace={"normal"}
                >
                    {introBody}
                </Typography>
                <Box>
                    <BaseButton>
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