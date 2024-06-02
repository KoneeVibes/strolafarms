import { useContext } from "react";
import { Box, styled } from "@mui/material";
import { Context } from "../../../context";

export const Hamburger = styled(Box)(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            [theme.breakpoints.up("laptop")]: {
                display: "none",
            },
            background: "none",
            border: "none",
            minWidth: "0 !important",
            overflow: "hidden",
            "& span": {
                display: "block",
                width: "25px",
                height: "3px",
                margin: "5px auto",
                transition: "all 0.3s ease -in -out",
                background: "#009933"
            },
            "& span:nth-of-type(2)": {
                opacity: openMenu ? 0 : 1,
            },
            "& span:nth-of-type(1)": {
                transform: openMenu ? "translateY(8px) rotate(45deg)" : "unset",
            },
            "& span:nth-of-type(3)": {
                transform: openMenu ? "translateY(-8px) rotate(-45deg)" : "unset",
            },
        }
    }
)