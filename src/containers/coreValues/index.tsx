import { Box, Card, CardHeader, Grid, Stack, Typography } from "@mui/material"
import { CoreValueBox } from "./styled"
import { coreValues } from "../../data"

export const CoreValues = () => {
    return (
        <CoreValueBox>
            <Stack
                overflow={"hidden"}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={{ mobile: 32, miniTablet: 36, desktop: 48, }}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                >
                    Our Core Values
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 18 }}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    marginBlock={"1rem"}
                    textAlign={"center"}
                >
                    The best of livestock farming.
                </Typography>
            </Stack>
            <Grid
                container
                gap={"var(--flexGap)"}
                justifyContent={"space-between"}
                padding={"var(--sectionMargin) 0"}
            >
                {coreValues.map((value, key) => {
                    return (
                        <Grid
                            item
                            key={key}
                            mobile={12}
                            miniTablet={5}
                            desktop={3}
                            xl={1}
                        >
                            <Card>
                                <CardHeader
                                    avatar={value.icon}
                                    title={
                                        <Typography
                                            variant="h3"
                                            fontFamily={"Inter"}
                                            fontWeight={600}
                                            fontSize={{ mobile: 15 }}
                                            lineHeight={"normal"}
                                            color={"#000000"}
                                            whiteSpace={"normal"}
                                        >
                                            {value.name}
                                        </Typography>
                                    }
                                />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <Box>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 16 }}
                    lineHeight={"normal"}
                    whiteSpace={"normal"}
                    marginBlock={"1rem"}
                    textAlign={"center"}
                    sx={{
                        textWrap: { tablet: "balance" }
                    }}
                >
                    Strola Farm sells 100% grass-fed beef that is cultivated within the facility. The production scale for our livestock has increased all year round due to numerous festive holidays in the country. We consistently meet the farming specifications of our consumers who want premium quality meats.
                </Typography>
            </Box>
        </CoreValueBox>
    )
}