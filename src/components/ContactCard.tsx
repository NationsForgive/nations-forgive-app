"use client";
import { ReactElement, ReactNode } from "react";
import { Card, Typography, Box, CardContent } from "@mui/material";

export default function ContactCard(props: {
  title: string;
  children: ReactNode;
  icon: ReactElement;
}) {
  return (
    <Card
      elevation={5}
      sx={{
        borderRadius: "8px",
        height: "100%",
        width: "100%",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="end"
          marginBottom="10px"
        >
          <Typography variant="subtitle1">{props.title}</Typography>
          <Box
            width="35px"
            height="35px"
            borderRadius="8px"
            border="1px solid #198754"
            bgcolor="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {props.icon}
          </Box>
        </Box>
        {props.children}
      </CardContent>
    </Card>
  );
}
