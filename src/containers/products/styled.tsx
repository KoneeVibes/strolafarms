import { Box, styled } from "@mui/material";

export const ProductsBox = styled(Box)(
    ({ theme }) => ({
        backgroundColor: "#FAFAFA",
        padding: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
        "& .MuiCard-root": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            borderRadius: "inherit",
        },
        "& .MuiCardContent-root": {
            padding: "var(--cardPadding) var(--cardPadding) calc(var(--cardPadding)/6)",
            [theme.breakpoints.up("xl")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            },
            [theme.breakpoints.down("miniTablet")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            },
            "& svg": {
                [theme.breakpoints.down(280)]: {
                    width: "100%",
                    height: "auto",
                },
            }
        },
        "& .MuiCardActions-root": {
            padding: "calc(var(--cardPadding)/6) var(--cardPadding) var(--cardPadding)",
            [theme.breakpoints.down("miniTablet")]: {
                justifyContent: "center",
            },
            [theme.breakpoints.up("xl")]: {
                justifyContent: "center",
            },
        },
        "& .MuiGrid-item": {
            maxWidth: "100%",
            flexGrow: 1,
            overflow: "hidden",
            borderRadius: "30px",
        }
    })
)