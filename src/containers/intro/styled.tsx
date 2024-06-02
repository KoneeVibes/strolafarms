import { Stack, styled } from "@mui/material";

export const IntroStack = styled(Stack)(
    ({ theme }) => ({
        gap: "calc(2 * var(--flexGap))",
        padding: "var(--sectionMargin) var(--pagePadding)",
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
        }
    })
)