import { styled } from "@mui/system";
import { Stack } from "@mui/material";

export const HeroStack = styled(Stack)(
    ({ theme }) => ({
        gap: "calc(2 * var(--flexGap))",
        padding: "var(--sectionMargin) var(--pagePadding) calc(2 * var(--sectionMargin))",
        "& .heroImgBox": {
            "& svg": {
                width: "100%",
                height: "auto",
            },
            [theme.breakpoints.between("tablet", "laptop")]: {
                "& svg": {
                    height: "revert-layer",
                },
            }
        },
        "& input": {
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 400,
            color: "#898989",
            lineHeight: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
            alignItems: "center",
            gap: "calc(3 * var(--flexGap))",
        },
        [theme.breakpoints.down(280)]: {
            "& .newsletterForm": {
                width: "100%",
                overflow: "hidden",
            },
            "& .newsletterButton": {
                flexShrink: 1,
            }
        }
    })
)