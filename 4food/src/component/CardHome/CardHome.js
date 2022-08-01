import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CardContainer, CardInfo, Title } from "./styled";

export default function CardHome({ item }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: "20.5rem", mb: "0.5rem" }}
      onClick={() => goToPage(navigate, `/restaurant/${item.id}/${item.name}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="120px"
          width="328px"
          image={item.logoUrl}
          alt={item.name}
        />
        <Title>{item.name}</Title>
        <CardInfo>
          <Typography variant="body2" color="text.secondary">
            {item.deliveryTime - 10} - {item.deliveryTime} min
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Frete R${item.shipping},00
          </Typography>
        </CardInfo>
      </CardActionArea>
    </Card>
  );
}
