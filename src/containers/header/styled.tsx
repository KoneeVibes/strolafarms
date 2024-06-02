import { styled } from "@mui/material";

export const HeaderBox = styled("header")(
    ({ theme }) => ({
        backgroundColor: "#FCF7D9",
        overflow: "hidden",
        "& .greenStar": {
            position: "relative",
            left: "var(--pagePadding)",
            bottom: "var(--sectionMargin)",
            [theme.breakpoints.up("laptop")]: {
                left: "calc(2 * var(--pagePadding))",
                bottom: "calc(4 * var(--sectionMargin))",
            }
        }
    })
)