import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets";
import { Nav } from "./styled";
import { navLinks } from "../../data";
import { BaseButton } from "../button";
import { Menu } from "../button/menu";
import { useContext } from "react";
import { Context } from "../../context";

export const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { setOpenMenu } = useContext(Context);
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    }
    return (
        <Nav>
            <Box
                component={"div"}
                className="logoBox"
            >
                <Logo
                    className="logo"
                    onClick={handleLogoClick}
                />
            </Box>
            <Stack
                className="navItems"
                direction={{ laptop: "row" }}
                gap={"var(--flexGap)"}
                alignItems={{ laptop: "center" }}
                justifyContent={"space-between"}
                width={{ laptop: "stretch" }}
            >
                <Box display={{ mobile: "none", laptop: "block" }}></Box>
                <Stack
                    direction={{ laptop: "row" }}
                    gap={"calc(2 * var(--flexGap))"}
                >
                    {navLinks.map((navlink, key) => {
                        return (
                            <Link
                                key={key}
                                to={navlink.url}
                                onClick={() => setOpenMenu(false)}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={600}
                                    fontSize={{ mobile: 23 }}
                                    lineHeight={"normal"}
                                    color={"#000000"}
                                >
                                    {navlink.name}
                                </Typography>
                            </Link>
                        )
                    })}
                </Stack>
                <Box
                    display={"flex"}
                    alignItems={{ miniTablet: "center" }}
                    justifyContent={{ miniTablet: "center" }}
                    overflow={"hidden"}
                >
                    <BaseButton>
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Contact Us
                        </Typography>
                    </BaseButton>
                </Box>
            </Stack>
            <Menu />
        </Nav >
    )
}