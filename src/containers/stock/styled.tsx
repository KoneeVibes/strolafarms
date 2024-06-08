import { Box, styled } from "@mui/material";

export const StockBox = styled(Box)(
    ({ theme }) => ({
        padding: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
        [theme.breakpoints.up("desktop")]: {
            padding: "calc(3 * var(--sectionMargin)) var(--pagePadding)",
        },
        [theme.breakpoints.down("tablet")]: {
            "& .stockImage>svg": {
                width: "100%",
                height: "auto",
            }
        }
    })
)