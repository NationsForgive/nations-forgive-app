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
  contribution: 10,
  methodOfPayment: "",
  message: null,
  anonymous: false,
};

export default function DonationModal(props: {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { register, getValues, watch, reset, getFieldState } = useForm({
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
        props.setOpenModal(false);
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
                <MenuItem value="usdt">Transferencia USDT</MenuItem>
              </TextField>
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
            type="submit"
            variant="contained"
            sx={{ width: "250px" }}
            onSubmit={() => {
              sendContributionEmail();
            }}
          >
            Enviar contribucion
          </Button>
        )}
        <Button
          variant="text"
          sx={{ width: "150px" }}
          onClick={() => props.setOpenModal(false)}
        >
          Cancelar
        </Button>
      </Box>
    </Modal>
  );
}
