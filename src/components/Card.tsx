import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  Box,
  ThemeProvider,
} from "@mui/material";
import { CardType } from "../@types/components/Card.type";
import { LocationOnRounded } from "@mui/icons-material";
import Theme from "./Theme";

const CardComponent: React.FC<CardType> = (props) => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const isCardOverflowing = useMediaQuery("(min-width:700px)");
  return (
    <ThemeProvider theme={Theme}>
      <Card
        sx={{
          width: isNonMobile ? 1000 : "100%",
          marginBottom: "15px",
          display: "flex",
          flexDirection: isCardOverflowing ? "row" : "column",
          margin: "15px",
        }}
      >
        <CardMedia
          component="img"
          alt="Card Media"
          height="230"
          image={props.picture.large}
          sx={{ width: isNonMobile ? "200px" : "100%" }}
        />
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItens: "center",
            justifyContent: "center",
            margin: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isNonMobile ? "row" : "column",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {`${props.nameProp.first} ${props.nameProp.last}`}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <LocationOnRounded color="primary" />
              <Typography color="text.secondary">
                {props.local.country}, {props.local.state}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography sx={{ color: "#454545", fontSize: "13.5px" }}>
              {props.username.username}
            </Typography>
            <Typography sx={{ color: "#454545", fontSize: "13.5px" }}>
              {props.idade.age} anos
            </Typography>
            <Typography sx={{ color: "#454545", fontSize: "13.5px" }}>{props.email}</Typography>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default CardComponent;
