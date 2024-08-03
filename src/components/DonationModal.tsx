"use client";
import {
  Box,
  Grid,
  Button,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Modal,
  Snackbar,
  Alert,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

const DEFAULT_VALUES_FORM = {
  name: null,
  email: null,
  phone: null,
  contribution: 10,
  methodOfPayment: "",
  message: null,
  anonymous: false,
  paymentReference: null,
};

export default function DonationModal(props: {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { register, getValues, watch, reset, getFieldState, trigger } = useForm(
    {
      defaultValues: DEFAULT_VALUES_FORM,
    }
  );
  const [openSnackbar, setOpenSnackbar] = useState({
    isOpen: false,
    isError: false,
    message: "",
  });

  const paypalCreateOrder = async () => {
    try {
      let response = await axios.post("/api/checkout", {
        amount: parseFloat(`${getValues("contribution")}`).toFixed(2),
      });
      return response.data.id;
    } catch (err) {
      return null;
    }
  };

  const sendContributionEmail = async () => {
    try {
      const response = await fetch("/api/sendContributionEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...getValues(),
          methodOfPayment:
            getValues("methodOfPayment") !== "paypal"
              ? `${getValues("methodOfPayment")} (Nro Referencia: ${getValues(
                  "paymentReference"
                )})`
              : getValues("methodOfPayment"),
        }),
      });

      // handle success
      if (response.ok) {
        reset(DEFAULT_VALUES_FORM);
        setOpenSnackbar({
          isOpen: true,
          isError: false,
          message: "GRACIAS!! por tu contribucion",
        });
        setTimeout(() => props.setOpenModal(false), 2000);
      } else {
        console.log("There was a problem sending email. Pls try again!");
      }
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpenModal(!props.open)}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        height="auto"
        width="100%"
        maxWidth={500}
        bgcolor="#ffff"
        borderRadius="8px"
        padding={5}
        sx={{ gridGap: 25 }}
      >
        <Image src="/Logo2.png" alt="Logo" width={80} height={80} priority />

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          sx={{ gridGap: 8 }}
        >
          <TextField
            {...register("name", { required: true })}
            size="small"
            placeholder="Nombre completo"
            type="text"
            required
            fullWidth
            sx={{ backgroundColor: "#fff" }}
            error={getFieldState("name").error ? true : false}
          />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                {...register("phone", { required: true })}
                size="small"
                placeholder="Nro de telefono"
                type="text"
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
                error={getFieldState("phone").error ? true : false}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("email", { required: true })}
                size="small"
                placeholder="Correo electronico"
                type="email"
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
                error={getFieldState("email").error ? true : false}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                {...register("contribution", { required: true, min: 1 })}
                size="small"
                placeholder="Cantidad a donar"
                type="number"
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
                error={getFieldState("contribution").error ? true : false}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("methodOfPayment", { required: true })}
                size="small"
                placeholder="Metodo de pago"
                label="Metodo de pago"
                type="text"
                select
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
                error={getFieldState("methodOfPayment").error ? true : false}
              >
                <MenuItem value="paypal">Paypal</MenuItem>
                <MenuItem value="zelle">Transferencia Zelle</MenuItem>
                {/* <MenuItem value="usdt">Transferencia USDT</MenuItem> */}
              </TextField>
            </Grid>
          </Grid>
          {watch("methodOfPayment") === "zelle" ? (
            <Box width="100%">
              <Paper elevation={1}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding={1.5}
                  marginBottom={1}
                >
                  <Typography variant="subtitle1" marginRight={1}>
                    emailZelle@email.com
                  </Typography>
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText("emailZelle@email.com");
                      setOpenSnackbar({
                        isOpen: true,
                        isError: false,
                        message: "Email copiado en portapapeles",
                      });
                      setTimeout(
                        () =>
                          setOpenSnackbar({
                            isOpen: false,
                            isError: false,
                            message: "",
                          }),
                        1500
                      );
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Box>
              </Paper>
              <TextField
                {...register("paymentReference", { required: true })}
                size="small"
                placeholder="Nro de referencia de la transaccion"
                type="text"
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
                error={getFieldState("paymentReference").error ? true : false}
              />
            </Box>
          ) : null}
          <TextField
            {...register("message")}
            size="small"
            placeholder="Mensaje"
            type="text"
            multiline
            fullWidth
            sx={{ backgroundColor: "#fff" }}
            minRows={4}
          />
          <FormControlLabel
            control={<Checkbox {...register("anonymous")} />}
            label="Mantener mi contribucion anónima"
          />
        </Box>

        {watch("methodOfPayment") === "paypal" ? (
          <PayPalScriptProvider
            options={{
              clientId:
                "AakmnZiH8p1Z65aHNsHbyf-xP7D1FYot0jjhYDuCnpe4DBqNuwEr5A0zRRQgKiSrkjtcypI17t58ueCy",
            }}
          >
            <PayPalButtons
              style={{
                layout: "horizontal",
                height: 40,
              }}
              createOrder={async () => {
                const withoutErrors = await trigger();
                if (withoutErrors) {
                  const order = await paypalCreateOrder();
                  return order + "";
                } else {
                  setOpenSnackbar({
                    isOpen: true,
                    isError: true,
                    message:
                      "Verifique que todos los campos esten correctamente rellenos",
                  });
                  return "";
                }
              }}
              onApprove={async (data, actions) => {
                sendContributionEmail();
                actions.order?.capture();
              }}
            />
          </PayPalScriptProvider>
        ) : (
          <Button
            variant="contained"
            sx={{ width: "250px" }}
            onClick={async () => {
              const withoutErrors = await trigger();
              if (withoutErrors) {
                sendContributionEmail();
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
            Enviar contribucion
          </Button>
        )}
        <Button
          variant="text"
          sx={{ width: "150px" }}
          onClick={() => {
            reset(DEFAULT_VALUES_FORM);
            setOpenSnackbar({
              isOpen: false,
              isError: false,
              message: "",
            });
            props.setOpenModal(false);
          }}
        >
          Cancelar
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar.isOpen}
          autoHideDuration={2000}
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
    </Modal>
  );
}
