import { Box, styled } from "@mui/material";

export const CoreValueBox = styled(Box)(
    ({ theme }) => ({
        padding: "var(--sectionMargin) var(--pagePadding) calc(2 * var(--sectionMargin))",
        "& .MuiGrid-item": {
            maxWidth: "100%",
            flexGrow: 1,
            borderRadius: "5px",
        },
        "& .MuiCard-root": {
            height: "100%",
            borderRadius: "inherit",
            boxShadow: "- 1px 1px 28.3px - 1px #00000017",
        },
        "& .MuiCardHeader-root": {
            gap: "calc(var(--flexGap)/2)",
            "& .MuiCardHeader-avatar": {
                flexShrink: 1,
                overflow: "hidden",
                marginRight: 0,
            },
            "& .MuiCardHeader-content": {
                overflow: "hidden",
            },
        },
        [theme.breakpoints.up("desktop")]: {
            padding: "calc(2 * var(--sectionMargin)) var(--pagePadding) calc(4 * var(--sectionMargin))",
        },
    })
)