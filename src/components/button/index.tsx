import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(
    ({ theme }) => ({
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "normal",
        color: "#FFFFFF",
        textTransform: "capitalize",
        backgroundColor: "#009933",
        borderRadius: "40px",
        padding: "0.8125rem 2.7rem",
        "&:hover": {
            backgroundColor: "#009933",
        }
    })
)