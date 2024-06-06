import { Stack, styled } from "@mui/material";

export const DeliveryBox = styled(Stack)(
    ({ theme }) => ({
        gap: "calc(3 * var(--flexGap))",
        backgroundColor: "#009933",
        padding: "calc(2 * var(--sectionMargin)) var(--pagePadding)",
        "& .deliveryImageBox": {
            display: "flex",
            justifyContent: "center",
        },
        "& .contactStack": {
            "& .MuiCard-root": {
                borderRadius: "20px",
                width: "fit-content",
                [theme.breakpoints.down("miniTablet")]: {
                    width: "100%",
                },
            },
            "& .MuiCardHeader-root": {
                gap: "calc(var(--flexGap)/2)",
            },
            "& .MuiCardHeader-avatar": {
                marginRight: 0,
                flexShrink: 1,
                "& svg": {
                    width: "100%",
                    height: "auto",
                },
                [theme.breakpoints.down(355)]: {
                    display: "none",
                },
            },
            "& .MuiCardHeader-content": {
                overflow: "hidden",
                flexShrink: 0,
                [theme.breakpoints.down(355)]: {
                    width: "100%",
                },
            }
        },
        [theme.breakpoints.up("laptop")]: {
            gap: "var(--flexGap)",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            "& .deliveryImageBox": {
                "& svg": {
                    width: "100%",
                    height: "auto",
                }
            }
        },
        [theme.breakpoints.down("tablet")]: {
            gap: "calc(2 * var(--flexGap))",
            "& .deliveryImageBox": {
                "& svg": {
                    width: "100%",
                    height: "auto",
                }
            }
        }
    })
)