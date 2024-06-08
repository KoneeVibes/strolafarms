import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { StockBox } from "./styled";
import { stock } from "../../data";

export const Stock = () => {
    return (
        <StockBox>
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
                    Stock
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
                    Explore Our Range of High-Quality Livestock Products
                </Typography>
            </Stack>
            <Stack
                padding={{ mobile: "var(--cardPadding) 0", desktop: "calc(var(--cardPadding) * 2) 0 var(--cardPadding)" }}
            >
                {stock.map((stockItem, key) => {
                    return (
                        <Box
                            key={key}
                        >
                            <Box
                                sx={{
                                    borderBottom: "2px solid #009933"
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    fontFamily={"Inter"}
                                    fontWeight={600}
                                    fontSize={{ mobile: 28, miniTablet: 30, desktop: 32 }}
                                    lineHeight={1.7}
                                    color={"#000000"}
                                >
                                    {stockItem.animal}
                                </Typography>
                            </Box>
                            <Stack
                                gap={{ mobile: "var(--flexGap)", laptop: "calc(2 * var(--flexGap))" }}
                                direction={{ laptop: "row" }}
                                padding={"calc(var(--cardPadding)/1) 0"}
                            >
                                <Box
                                    component={"div"}
                                    className="stockImage"
                                >
                                    {stockItem.img}
                                </Box>
                                <Stack
                                    flex={1}
                                    gap={"var(--flexGap)"}
                                >
                                    {stockItem.variants.map((variant, key) => {
                                        return (
                                            <Card
                                                key={key}
                                                sx={{
                                                    borderRadius: "10px",
                                                    boxShadow: "-1px 1px 28.3px -1px #00000017",
                                                }}
                                            >
                                                <CardContent>
                                                    <Stack
                                                        direction={"row"}
                                                        alignItems={"center"}
                                                        gap={"calc(var(--flexGap)/2.5)"}
                                                    >
                                                        <Box
                                                            width={"6px"}
                                                            height={"6px"}
                                                            bgcolor={"#009933"}
                                                            borderRadius={"50%"}
                                                            flexShrink={0}
                                                        />
                                                        <Typography
                                                            variant="h3"
                                                            fontFamily={"Inter"}
                                                            fontWeight={700}
                                                            fontSize={{ mobile: 16 }}
                                                            lineHeight={1.5}
                                                            color={"#535353"}
                                                            whiteSpace={"normal"}
                                                        >
                                                            {variant.name}
                                                        </Typography>
                                                    </Stack>
                                                    <Typography
                                                        variant="body1"
                                                        fontFamily={"Inter"}
                                                        fontWeight={300}
                                                        fontSize={{ mobile: 14 }}
                                                        lineHeight={1.7}
                                                        color={"#535353"}
                                                        whiteSpace={"normal"}
                                                    >
                                                        {variant.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        )
                                    })}
                                </Stack>
                            </Stack>
                        </Box>
                    )
                })}
            </Stack>
        </StockBox >
    )
}