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

export default function Home() {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.up("md"));
  const [donationModal, setDonationModal] = useState(false);
  return (
    <>
      <Box component="section" sx={{ bgcolor: "#EBFAF9" }} paddingTop={10}>
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
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1" textAlign="justify">
                  Copy
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
      <Box component="section">
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
            <Box marginBottom={4} textAlign="center">
              <Typography variant="h5">Sobre nosotros</Typography>
            </Box>
            <Grid
              container
              spacing={{ xs: 2, md: 5 }}
              flexDirection={{ xs: "column-reverse", md: "row" }}
            >
              <Grid
                item
                md={6}
                sx={{ width: "100%", justifyContent: "center" }}
              >
                <Typography variant="body1" textAlign="justify">
                  La Iglesia Centro Cristiano Acarigua Araure es una extensión
                  de la Iglesia Centro Cristiano Cúcuta-Los Pinos, pastoreada
                  por el pastor José Satirio Dos Santos y su esposa. Surgió tras
                  un viaje a Venezuela, cuando al entrar en Acarigua, se
                  preguntó si había alguna sede del Centro Cristiano, pero la
                  respuesta fue negativa. Años después, la familia
                  Romero-Eugenio, originaria de Cúcuta, se dirigió a
                  Barquisimeto en busca de pastores para Acarigua y Araure.
                  Comenzaron con un grupo bíblico y, tras varios años, se
                  establecieron en diferentes locales. Actualmente, la iglesia
                  cuenta con una membresía de aproximadamente 1450 personas y
                  tiene la visión de construir un templo para 2200 personas. Su
                  misión es conquistar la ciudad y ofrecer un refugio espiritual
                  a las personas de las ciudades gemelas.
                </Typography>
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
            <Paper elevation={5} sx={{ borderRadius: "8px" }}>
              <Grid container spacing={{ xs: 3, md: 5 }} padding={4}>
                <Grid
                  item
                  md={6}
                  sx={{ width: "100%", justifyContent: "center" }}
                >
                  <Box display="flex" flexDirection="column" textAlign="center">
                    <Typography variant="h6">Mision</Typography>
                    <Typography variant="body2" textAlign="justify">
                      Buscamos a hombres y mujeres que no conocen de Jesucristo
                      y los guiamos a la salvación. Luego los discipulamos y
                      capacitamos para que asuman un compromiso con Cristo y con
                      su iglesia. Formamos de ellos líderes autónomos,
                      responsables y trascendentes. Levantando así una
                      generación de conquista, consumadores de la palabra y
                      dispuestos a llevar el Evangelio sin mirar el precio.
                      Mateo 28.19-20.
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={6}
                  sx={{ width: "100%", justifyContent: "center" }}
                >
                  <Box display="flex" flexDirection="column" textAlign="center">
                    <Typography variant="h6">Vision</Typography>
                    <Typography variant="body2" textAlign="justify">
                      Hacer de Acarigua, de la región y de Venezuela, espacios
                      donde el amor y los principios del Reino de Dios estén
                      presentes en todas las áreas de la vida personal y social,
                      como modelo y plataforma de la misión mundial. Hechos 1:8.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Box>{/* <SliderImages /> */}</Box>
            <Button variant="outlined" sx={{ maxWidth: "250px" }}>
              Conócenos más
            </Button>
          </Box>
        </Container>
      </Box>
      <Box component="section" sx={{ bgcolor: "#EBFAF9" }}>
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
              <Grid item md={2.5}>
                <ContactCard title="Email" icon={<EmailOutlinedIcon />}>
                  <Typography variant="body2">
                    multimediaccaa@gmail.com
                  </Typography>
                </ContactCard>
              </Grid>
              <Grid item md={3.5}>
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
                      href="https://www.youtube.com/@centrocristianoaa"
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d983.6260542000132!2d-69.206539!3d9.55173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7dc140eddaef8b%3A0xff3f7e817e8d83aa!2sCENTRO%20CRISTIANO!5e0!3m2!1ses!2sve!4v1721186462081!5m2!1ses!2sve"
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
