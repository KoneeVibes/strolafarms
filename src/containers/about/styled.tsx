import { Box, styled } from "@mui/material";

export const AboutBox = styled(Box)(
    ({ theme }) => ({
        padding: "calc(2 * var(--sectionMargin)) 0",
        overflow: "hidden",
        position: "relative",
        "& .yellowStar": {
            position: "relative",
            left: "50%",
        },
        "& .greenStar": {
            position: "absolute",
            right: "var(--pagePadding)",
            bottom: "var(--sectionMargin)",
            [theme.breakpoints.up("laptop")]: {
                right: "calc(2 * var(--pagePadding))",
                bottom: "calc(2 * var(--sectionMargin))",
            }
        }
    })
)