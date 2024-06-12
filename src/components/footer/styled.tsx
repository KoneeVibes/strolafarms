import { Stack, styled } from "@mui/material";

export const FooterStack = styled(Stack)(
    ({ theme }) => ({
        padding: "var(--sectionMargin) var(--pagePadding)",
        [theme.breakpoints.up("laptop")]: {
            gap: "calc(2 * var(--flexGap))",
            flexDirection: "row",
            alignItems: "baseline",
            padding: "calc(3 * var(--sectionMargin)) var(--pagePadding)",
        },
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.down(170)]: {
            "& .logo": {
                width: "100%",
                height: "auto",
            },
        }
    })
)