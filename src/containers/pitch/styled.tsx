import { Box, styled } from "@mui/material";

export const PitchBox = styled(Box)(
    ({ theme }) => ({
        overflow: "hidden",
        "& .greenStar": {
            position: "relative",
            left: "50%",
            [theme.breakpoints.up("laptop")]: {
                left: "80%",
                bottom: "calc(4 * var(--sectionMargin))",
            }
        },
        [theme.breakpoints.down("laptop")]: {
            "& .yellowStar": {
                position: "absolute",
                right: "var(--pagePadding)",
                bottom: "calc(-0.1 * var(--sectionMargin))",
            }
        }
    })
)