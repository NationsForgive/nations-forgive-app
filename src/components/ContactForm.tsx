"use client";
import { Box, Grid, Button, TextField } from "@mui/material";
import Image from "next/image";

export default function ContactForm() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      height="100%"
      sx={{ gridGap: 15 }}
    >
      <Image src="/Logo.png" alt="Logo" width={80} height={80} priority />

      <Box width="100%">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              size="small"
              placeholder="Nombre completo"
              type="text"
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              size="small"
              placeholder="Email"
              type="email"
              fullWidth
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
        </Grid>
        <TextField
          size="small"
          placeholder="Asunto"
          type="text"
          fullWidth
          sx={{ backgroundColor: "#fff", marginTop: 1 }}
        />
        <TextField
          size="small"
          placeholder="Mensaje"
          type="text"
          multiline
          fullWidth
          sx={{ backgroundColor: "#fff", marginTop: 1 }}
          minRows={4}
        />
      </Box>

      <Button variant="contained" fullWidth>
        Enviar mensaje
      </Button>
    </Box>
  );
}
