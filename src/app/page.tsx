"use client";
import {
  Typography,
  Box,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
  IconButton,
  Container,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import SliderImages from "../components/SliderImages";
import { useState } from "react";
import DonationModal from "../components/DonationModal";

const metricsData = [
  {
    title: "Proyectos",
    value: "3",
  },
  {
    title: "Fondos Recaudados",
    value: "$10K",
  },
  {
    title: "Personas Ayudadas",
    value: "10K",
  },
  {
    title: "Comunidades Ayudadas",
    value: "8",
  },
];

export default function Home() {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.up("md"));
  const [donationModal, setDonationModal] = useState(false);
  return (
    <>
      <Box component="section" paddingTop={10}>
        <Container>
          <Box padding={{ xs: 0, md: 5 }} paddingY={{ xs: 5 }}>
            <Grid container spacing={{ xs: 2, md: 5 }}>
              <Grid
                item
                md={8}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <iframe
                  width="100%"
                  height={isExtraSmallSize ? "380px" : "225px"}
                  style={{ borderRadius: 8 }}
                  src="https://www.youtube.com/embed/cQa3NBmYGnc?si=HX0PPJ1C5uZLtNjb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Grid>
              <Grid
                item
                md={4}
                display="flex"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="column"
              >
                <Typography
                  variant="body1"
                  textAlign="justify"
                  sx={{ marginBottom: 5 }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => setDonationModal(true)}
                >
                  Contribuye con nosotros
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box
        component="section"
        width="100%"
        marginTop={{ sx: 2, md: 5 }}
        paddingY={2}
        bgcolor="#DE5F6A"
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-around"
            overflow="auto"
            sx={{
              gridGap: 20,
              marginTop: {
                md: "-60px",
                sx: "0",
              },
            }}
            alignItems="center"
            height="175px"
          >
            {metricsData.map((e, index) => (
              <Paper
                elevation={5}
                sx={{
                  borderRadius: "8px",
                }}
                key={index}
              >
                <Box padding={4} textAlign="center" width="225px">
                  <Typography variant="subtitle2">{e.title}</Typography>
                  <Typography variant="h4" marginTop={2} fontWeight="bold">
                    {e.value}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
      <Box component="section" id="about" sx={{ bgcolor: "#FFE4E7" }}>
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ gridGap: 25 }}
            padding={{ xs: 0, md: 5 }}
            paddingY={{ xs: 5 }}
          >
            <Box marginBottom={2} textAlign="center">
              <Typography variant="h5">Sobre nosotros</Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 5 }}>
              <Grid
                item
                md={6}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1" textAlign="justify">
                    Somos una organización que funge como &quot;Fundraising
                    Platform&quot;, dedicada a la recaudación de recursos
                    financieros y no financieros para proyectos sociales y
                    humanitarios, que están enfocados hacia comunidades
                    venezolanas en condiciones críticas y de extrema pobreza,
                    que son fomentados y gestionados desde la comunidad
                    cristiana con sede en Venezuela.
                  </Typography>
                  <Paper
                    elevation={5}
                    sx={{ borderRadius: "8px", marginTop: 2 }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 3, md: 5 }}
                      padding={4}
                      flexDirection="column"
                    >
                      <Grid
                        item
                        md={12}
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                      >
                        <Typography variant="h6">Mision</Typography>
                        <Typography variant="body2" textAlign="center">
                          Impulsar programas que redunden en beneficio de la
                          familia, estableciendo como estrategia campañas de
                          divulgación que promuevan el bienestar de los miembros
                          de la familia.
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                      >
                        <Typography variant="h6">Vision</Typography>
                        <Typography variant="body2" textAlign="center">
                          Ser una organización de alcance, que contribuya a la
                          sanidad y fortalecimiento de la familia y sus
                          miembros.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <iframe
                  width="100%"
                  height={isExtraSmallSize ? "325px" : "225px"}
                  style={{ borderRadius: 8 }}
                  src="https://www.youtube.com/embed/cQa3NBmYGnc?si=HX0PPJ1C5uZLtNjb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Grid>
            </Grid>
            <SliderImages />
            {/* <Button variant="outlined" sx={{ maxWidth: "250px" }}>
              Conócenos más
            </Button> */}
          </Box>
        </Container>
      </Box>
      <Box component="section" id="contact">
        <Container>
          <Box
            component="section"
            marginBottom={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ gridGap: 35 }}
            padding={{ xs: 0, md: 5 }}
            paddingY={{ xs: 5 }}
          >
            <Typography variant="h5">Encuentranos</Typography>
            <Grid
              container
              spacing={2}
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Grid item md={3.5}>
                <ContactCard title="Dirección" icon={<FmdGoodOutlinedIcon />}>
                  <Typography variant="body2">
                    Dirección Física: Raleigh NC 3413 arctic brook st Cod
                    <br />
                    Postal: 27604
                  </Typography>
                </ContactCard>
              </Grid>
              <Grid item md={2.5}>
                <ContactCard title="Teléfono" icon={<CallOutlinedIcon />}>
                  <Typography variant="body2">+58 414-3746893</Typography>
                </ContactCard>
              </Grid>
              <Grid item md={3.5}>
                <ContactCard title="Email" icon={<EmailOutlinedIcon />}>
                  <Typography variant="body2">
                    nationsforgivefundraising@gmail.com
                  </Typography>
                </ContactCard>
              </Grid>
              <Grid item md={2.5}>
                <ContactCard
                  title="Síguenos"
                  icon={<AccountCircleOutlinedIcon />}
                >
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    width="100%"
                    sx={{ gridGap: 10 }}
                  >
                    <a
                      href="https://www.youtube.com/@fundraisingnationsforgive"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton>
                        <YouTubeIcon />
                      </IconButton>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61562155940316"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton>
                        <FacebookOutlinedIcon />
                      </IconButton>
                    </a>
                    <a
                      href="https://www.instagram.com/nationsforgive/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton>
                        <InstagramIcon />
                      </IconButton>
                    </a>
                  </Box>
                </ContactCard>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Grid item md={6}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.5050266242224!2d-78.52519392347122!3d35.81208297254543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5b9d0f265d97%3A0x5f1fd86b11eb2de9!2s3413%20Arctic%20Brook%20St%2C%20Raleigh%2C%20NC%2027604%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1721865994829!5m2!1ses!2sve"
                  width="100%"
                  height={isExtraSmallSize ? "400" : "250"}
                  style={{ border: 0, borderRadius: "8px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
              <Grid item md={6} flexDirection="column">
                <ContactForm />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <DonationModal open={donationModal} setOpenModal={setDonationModal} />
    </>
  );
}
