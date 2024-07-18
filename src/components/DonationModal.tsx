"use client";
import {
  Box,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Modal,
} from "@mui/material";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

const DEFAULT_VALUES_FORM = {
  name: null,
  email: null,
  phone: null,
  contribution: 0,
  methodOfPayment: "",
  message: null,
  anonymous: false,
};

export default function DonationModal(props: {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { register, getValues, watch, reset } = useForm({
    defaultValues: DEFAULT_VALUES_FORM,
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
        body: JSON.stringify(getValues()),
      });

      // handle success
      if (response.ok) {
        reset(DEFAULT_VALUES_FORM);
      } else {
        console.error("There was a problem sending email. Pls try again!");
      }
    } catch (error) {
      console.log("Error sending email:", error);
      console.error("There was a problem sending email. Pls try again!");
    }
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpenModal(!props.open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        height="100%"
        width="100%"
        maxWidth={500}
        maxHeight={550}
        bgcolor="#EBFAF9"
        borderRadius="8px"
        padding={5}
        sx={{ gridGap: 25 }}
      >
        <Image src="/Logo.png" alt="Logo" width={80} height={80} priority />

        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          sx={{ gridGap: 8 }}
        >
          <TextField
            {...register("name")}
            size="small"
            placeholder="Nombre completo"
            type="text"
            required
            fullWidth
            sx={{ backgroundColor: "#fff" }}
          />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                {...register("phone")}
                size="small"
                placeholder="Nro de telefono"
                type="text"
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("email")}
                size="small"
                placeholder="Correo electronico"
                type="email"
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                {...register("contribution")}
                size="small"
                placeholder="Cantidad a donar"
                type="number"
                required
                fullWidth
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="methodOfPaymentSelect">
                  Metodo de pago
                </InputLabel>
                <Select
                  {...register("methodOfPayment")}
                  labelId="methodOfPaymentSelect"
                  id="demo-simple-select"
                  value={10}
                  label="Age"
                  sx={{ backgroundColor: "#fff" }}
                >
                  <MenuItem value="paypal">Paypal</MenuItem>
                  <MenuItem value="zelle">Transferencia Zelle</MenuItem>
                  <MenuItem value="usdt">Transferencia USDT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
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
                const order = await paypalCreateOrder();

                return order + "";
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
            onClick={() => sendContributionEmail()}
          >
            Enviar contribucion
          </Button>
        )}
      </Box>
    </Modal>
  );
}
