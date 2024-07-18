"use client";
import { Box, Grid, Button, TextField, Alert, Snackbar } from "@mui/material";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
const DEFAULT_VALUES_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export default function ContactForm() {
  const { register, reset, getValues, trigger, getFieldState } = useForm({
    defaultValues: DEFAULT_VALUES_FORM,
  });
  const [openSnackbar, setOpenSnackbar] = useState({
    isOpen: false,
    isError: false,
    message: "",
  });

  const sendMessageEmail = async () => {
    try {
      const response = await fetch("/api/sendMessageEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getValues()),
      });

      // handle success
      if (response.ok) {
        reset(DEFAULT_VALUES_FORM);
        setOpenSnackbar({
          isOpen: true,
          isError: false,
          message: "Mensaje enviado correctamente",
        });
      } else {
        console.log("There was a problem sending email. Pls try again!");
      }
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  return (
    <Box
      component="form"
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
              {...register("name", { required: true })}
              size="small"
              placeholder="Nombre completo"
              type="text"
              fullWidth
              required
              error={getFieldState("name").error ? true : false}
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              {...register("email", { required: true })}
              size="small"
              placeholder="Email"
              type="email"
              fullWidth
              error={getFieldState("email").error ? true : false}
              required
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
        </Grid>
        <TextField
          {...register("subject", { required: true })}
          size="small"
          placeholder="Asunto"
          type="text"
          fullWidth
          required
          error={getFieldState("subject").error ? true : false}
          sx={{ backgroundColor: "#fff", marginTop: 1 }}
        />
        <TextField
          {...register("message", { required: true })}
          size="small"
          placeholder="Mensaje"
          type="text"
          multiline
          fullWidth
          required
          error={getFieldState("message").error ? true : false}
          sx={{ backgroundColor: "#fff", marginTop: 1 }}
          minRows={4}
        />
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={async () => {
          const withoutErrors = await trigger();
          if (withoutErrors) {
            sendMessageEmail();
          } else {
            setOpenSnackbar({
              isOpen: true,
              isError: true,
              message:
                "Verifique que todos los campos esten correctamente rellenos",
            });
          }
        }}
      >
        Enviar mensaje
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar.isOpen}
        autoHideDuration={3000}
      >
        <Alert
          severity={openSnackbar.isError ? "warning" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
          onClose={() =>
            setOpenSnackbar({
              isOpen: false,
              isError: false,
              message: "",
            })
          }
        >
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
