import { Box, Card, CardHeader, Stack, Typography } from "@mui/material";
import { DeliveryBox } from "./style";
import { CallIcon, DeliveryImg } from "../../assets";

export const Delivery = () => {
    return (
        <DeliveryBox
            id="delivery"
        >
            <Box
                flex={1}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={{ mobile: 32, miniTablet: 36, desktop: 48, }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                >
                    Delivery Service
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 18 }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                    marginBlock={"2rem"}
                    sx={{
                        textWrap: { laptop: "balance" }
                    }}
                >
                    Alive or packaged, fresh or dried (Salted), we guarantee you quality produce to your doorstep in Lagos and its environs.
                </Typography>
                <Stack
                    className="contactStack"
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={600}
                        fontSize={{ mobile: "20px" }}
                        lineHeight={"normal"}
                        color={"#FFFFFF"}
                        whiteSpace={"normal"}
                        marginBlock={{ tablet: "2rem" }}
                        marginBlockEnd={{ mobile: "2rem" }}
                    >
                        Contact our delivery service on
                    </Typography>
                    <Card>
                        <CardHeader
                            avatar={<CallIcon />}
                            title={
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={600}
                                    fontSize={{ mobile: 25, tablet: 28, desktop: 32 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                >
                                    +2348072447626
                                </Typography>
                            }
                        />
                    </Card>
                </Stack>
            </Box>
            <Box
                flex={1}
                component={"div"}
                className="deliveryImageBox"
            >
                <DeliveryImg />
            </Box>
        </DeliveryBox>
    )
}