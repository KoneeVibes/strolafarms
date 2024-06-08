import { Box, Typography } from "@mui/material";
import { FooterStack } from "./styled";
import { Arrow, Strola } from "../../assets";
import { BaseButton } from "../button";
import { contactDetails, footerLinks } from "../../data";
import { HashLink } from "react-router-hash-link";
import { FooterRefType } from "../../types/app.type";

export const Footer: React.FC<FooterRefType> = ({ footerRef }) => {
    return (
        <FooterStack
            ref={footerRef}
        >
            <Box
                flex={0.4}
            >
                <Strola
                    className="logo"
                />
                <Typography
                    variant="subtitle1"
                    fontFamily={"PP Telegraph"}
                    fontWeight={400}
                    fontSize={{ mobile: 16, laptop: 20 }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    whiteSpace={"normal"}
                    marginBlock={"2rem"}
                >
                    Let's talk about how Strola can help you with your next engineering project.
                </Typography>
                <Box
                    overflow={"hidden"}
                    display={"flex"}
                >
                    <BaseButton
                        endIcon={<Arrow />}
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
                            Book a session
                        </Typography>
                    </BaseButton>
                </Box>
            </Box>
            <Box
                flex={0.3}
                display={{ laptop: "flex" }}
                justifyContent={{ laptop: "space-around" }}
            >
                <Box>
                    {footerLinks.map((footerLink, key) => {
                        return (
                            <HashLink
                                key={key}
                                to={footerLink.url}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"PP Telegraph"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 16, laptop: 20 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                    whiteSpace={"normal"}
                                    marginBlock={"2rem"}
                                >
                                    {footerLink.name}
                                </Typography>
                            </HashLink>
                        )
                    })}
                </Box>
            </Box>
            <Box
                flex={0.3}
            >
                {Object.entries(contactDetails).map((contactDetail, key) => {
                    return (
                        <Typography
                            key={key}
                            variant="subtitle1"
                            fontFamily={"PP Telegraph"}
                            fontWeight={400}
                            fontSize={{ mobile: 16, laptop: 20 }}
                            lineHeight={"normal"}
                            color={"#000000"}
                            whiteSpace={"normal"}
                            marginBlock={(key === 0) ? "0" : "2rem"}
                        >
                            {contactDetail.map((item, key) => {
                                return (
                                    <Typography
                                        key={key}
                                        component={"span"}
                                        fontFamily={"inherit"}
                                        fontWeight={"inherit"}
                                        fontSize={"inherit"}
                                        lineHeight={"inherit"}
                                        color={"inherit"}
                                    >
                                        {`${item}  `}
                                    </Typography>
                                )
                            })}
                        </Typography>
                    )
                })}
            </Box>
        </FooterStack>
    )
}