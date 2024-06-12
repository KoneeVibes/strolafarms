import { Box, Card, CardActions, CardContent, Grid, Stack, Typography } from "@mui/material";
import { ProductsBox } from "./styled";
import { BaseButton } from "../../components/button";
import { products } from "../../data";
import { HashLink } from "react-router-hash-link";

export const Products = () => {
    return (
        <ProductsBox>
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
                    Our Products
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
            <Grid
                container
                gap={"var(--flexGap)"}
                justifyContent={"space-between"}
                padding={"var(--sectionMargin) 0"}
            >
                {products.map((product, key) => {
                    return (
                        <Grid
                            item
                            key={key}
                            mobile={12}
                            tablet={5}
                            desktop={3}
                            xl={2}
                        >
                            <Card>
                                <CardContent>
                                    {product.img}
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={600}
                                        fontSize={18}
                                        lineHeight={"normal"}
                                        color={"#000000"}
                                        marginBlock={"1rem"}
                                        whiteSpace={"normal"}
                                        textAlign={{ mobile: "center", miniTablet: "left", xl: "center" }}
                                        width={"100%"}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={400}
                                        fontSize={14}
                                        lineHeight={"normal"}
                                        color={"#828282"}
                                        marginBlock={"1rem"}
                                        whiteSpace={"normal"}
                                        textAlign={{ mobile: "center", miniTablet: "left", xl: "center" }}
                                        width={"100%"}
                                        sx={{
                                            textWrap: { mobile: "balance", miniTablet: "wrap", xl: "balance" },
                                        }}
                                    >
                                        {product.body}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box
                                        overflow={"hidden"}
                                        display={"flex"}
                                    >
                                        <HashLink
                                            to={`/product#${product.url}`}
                                            smooth={true}
                                        >
                                            <BaseButton>
                                                <Typography
                                                    variant="button"
                                                    fontFamily={"inherit"}
                                                    fontWeight={"inherit"}
                                                    fontSize={"inherit"}
                                                    lineHeight={"inherit"}
                                                    color={"inherit"}
                                                    textTransform={"inherit"}
                                                    whiteSpace={"normal"}
                                                    width={"100%"}
                                                >
                                                    See more
                                                </Typography>
                                            </BaseButton>
                                        </HashLink>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </ProductsBox>
    )
}