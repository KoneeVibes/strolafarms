import { styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const Nav = styled("nav")(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            padding: "var(--sectionMargin) 3.72rem",
            display: "flex",
            gap: "var(--flexGap)",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "65px",
            "& a": {
                textDecoration: "none",
                textAlign: "center",
                color: "#009933",
                "&:hover": {
                    textDecoration: "underline 2px",
                },
            },
            "& .logo": {
                cursor: "pointer",
            },
            [theme.breakpoints.down("laptop")]: {
                "& .navItems": {
                    display: openMenu ? "flex" : "none",
                    position: "fixed",
                    top: "calc(65px + calc(2 * var(--sectionMargin)))",
                    left: 0,
                    width: "stretch",
                    height: "stretch",
                    padding: "var(--sectionMargin) var(--pagePadding) calc(3 * var(--sectionMargin))",
                    background: "#FCF7D9",
                    zIndex: 10,
                },
                "& .logoBox": {
                    flexShrink: 10,
                }
            },
            [theme.breakpoints.down("tablet")]: {
                padding: "var(--sectionMargin) var(--pagePadding)",
            },
            [theme.breakpoints.down("miniTablet")]: {
                "& a": {
                    textAlign: "left",
                },
            },
            [theme.breakpoints.down(280)]: {
                "& .logo": {
                    width: "100%",
                    height: "auto",
                }
            },
            [theme.breakpoints.down(150)]: {
                justifyContent: "center",
                "& .logoBox": {
                    display: "none",
                }
            }
        }
    }
)