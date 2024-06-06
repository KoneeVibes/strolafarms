import { Stack, styled } from "@mui/material";

export const IntroStack = styled(Stack)(
    ({ theme }) => ({
        gap: "calc(2 * var(--flexGap))",
        padding: "var(--sectionMargin) var(--pagePadding)",
        "& .introImgBox": {
            "& svg": {
                width: "100%",
                height: "auto",
                [theme.breakpoints.between("tablet", "laptop")]: {
                    height: "revert-layer",
                }
            }
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            alignItems: "center",
        }
    })
)