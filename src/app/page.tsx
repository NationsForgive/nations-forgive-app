"use client";
import {
  Typography,
  Box,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box component="section" marginBottom={10} marginTop={4}>
        <Grid container spacing={{ xs: 2, md: 5 }}>
          <Grid item md={8} sx={{ width: "100%", justifyContent: "center" }}>
            <iframe
              width="100%"
              height={isExtraSmallSize ? "380px" : "225px"}
              style={{ borderRadius: 8 }}
              src="https://www.youtube.com/embed/cQa3NBmYGnc?si=HX0PPJ1C5uZLtNjb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
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
            <Button variant="contained" fullWidth>
              Contribuye con nosotros
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="section"
        marginBottom={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ gridGap: 25 }}
      >
        <Box marginBottom={4} textAlign="center">
          <Typography variant="h5">Sobre nosotros</Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item md={6} sx={{ width: "100%", justifyContent: "center" }}>
            <Typography variant="body1" textAlign="justify">
              La Iglesia Centro Cristiano Acarigua Araure es una extensión de la
              Iglesia Centro Cristiano Cúcuta-Los Pinos, pastoreada por el
              pastor José Satirio Dos Santos y su esposa. Surgió tras un viaje a
              Venezuela, cuando al entrar en Acarigua, se preguntó si había
              alguna sede del Centro Cristiano, pero la respuesta fue negativa.
              Años después, la familia Romero-Eugenio, originaria de Cúcuta, se
              dirigió a Barquisimeto en busca de pastores para Acarigua y
              Araure. Comenzaron con un grupo bíblico y, tras varios años, se
              establecieron en diferentes locales. Actualmente, la iglesia
              cuenta con una membresía de aproximadamente 1450 personas y tiene
              la visión de construir un templo para 2200 personas. Su misión es
              conquistar la ciudad y ofrecer un refugio espiritual a las
              personas de las ciudades gemelas.
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
        <Paper elevation={5} sx={{ borderRadius: "8px" }}>
          <Grid container spacing={{ xs: 3, md: 5 }} padding={4}>
            <Grid item md={6} sx={{ width: "100%", justifyContent: "center" }}>
              <Box display="flex" flexDirection="column" textAlign="center">
                <Typography variant="h6">Mision</Typography>
                <Typography variant="body2">
                  Buscamos a hombres y mujeres que no conocen de Jesucristo y
                  los guiamos a la salvación. Luego los discipulamos y
                  capacitamos para que asuman un compromiso con Cristo y con su
                  iglesia. Formamos de ellos líderes autónomos, responsables y
                  trascendentes. Levantando así una generación de conquista,
                  consumadores de la palabra y dispuestos a llevar el Evangelio
                  sin mirar el precio. Mateo 28.19-20.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sx={{ width: "100%", justifyContent: "center" }}>
              <Box display="flex" flexDirection="column" textAlign="center">
                <Typography variant="h6">Vision</Typography>
                <Typography variant="body2">
                  Hacer de Acarigua, de la región y de Venezuela, espacios donde
                  el amor y los principios del Reino de Dios estén presentes en
                  todas las áreas de la vida personal y social, como modelo y
                  plataforma de la misión mundial. Hechos 1:8.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Box>Images Carrousel</Box>
        <Button variant="outlined" sx={{ maxWidth: "250px" }}>
          Conócenos más
        </Button>
      </Box>
      <Box component="section" marginBottom={10}>
        <Typography variant="h5">Encuentranos</Typography>
      </Box>
    </>
  );
}
