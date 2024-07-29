"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useState, MouseEvent } from "react";
import DonationModal from "./DonationModal";
import { usePathname } from "next/navigation";

const pages = [
  {
    text: "Inicio",
    route: "/",
  },
  {
    text: "Sobre nosotros",
    route: "/about",
  },
  { text: "Encuentranos", route: "#contact" },
  // { text: "Servicios", route: "/services" },
];

export default function CustomAppBar() {
  const pathname = usePathname();
  const [donationModal, setDonationModal] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#FFE4E7" }}>
      <Container>
        <Toolbar disableGutters>
          <Image src="/Logo.png" alt="Logo" width={120} height={40} priority />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
              <a
                href={
                  pathname === "/" ? page.route.replace("/", "#") : page.route
                }
                key={index}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  variant="text"
                  sx={{ my: 2, display: "block" }}
                  color="inherit"
                >
                  {page.text}
                </Button>
              </a>
            ))}
          </Box>
          <Button
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            variant="contained"
            onClick={() => setDonationModal(true)}
          >
            Contribuye con nosotros
          </Button>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <a
                  href={
                    pathname === "/" ? page.route.replace("/", "#") : page.route
                  }
                  key={index}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    variant="text"
                    sx={{ my: 2, display: "block" }}
                    color="inherit"
                  >
                    {page.text}
                  </Button>
                </a>
              ))}
              <MenuItem>
                <Button
                  variant="contained"
                  onClick={() => setDonationModal(true)}
                >
                  Contribuye con nosotros
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <DonationModal open={donationModal} setOpenModal={setDonationModal} />
    </AppBar>
  );
}
