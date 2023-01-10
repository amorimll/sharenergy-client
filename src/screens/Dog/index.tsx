import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Button,
  Box,
  useMediaQuery,
  Container,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import axios from "axios";
import Theme from "../../components/Theme";
import { DogURL } from "../../@types/screens/Dog.type";

const RandomDog: React.FunctionComponent = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isImageOverflowing = useMediaQuery("(min-width:1000px)");
  const [loadingImage, setLoadingImage] = useState(false);
  const [formValues, setFormValues] = useState<DogURL>({
    dogURL: "",
  });

  const handleClick = async () => {
    try {
      setLoadingImage(true);
      const res = await axios.get(`https://random.dog/woof`);
      if (res) {
        let words = [".mp4", ".webm"];
        let isUnwantedType = new RegExp(words.join("|")).test(res.data);

        if (!isUnwantedType) {
          setFormValues({ ...formValues, dogURL: res.data });
        } else {
          handleClick();
        }

        setLoadingImage(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Container
          maxWidth="sm"
          sx={{
            width: "100%",
            height: "100%",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px 0px 15px 0px",
            padding: 0,
          }}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{
              height: "35%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="button"
              variant="contained"
              onClick={() => handleClick()}
              sx={{
                width: isNonMobile ? 300 : "80%",
                height: 50,
                marginTop: "10px",
                textTransform: "none",
                fontWeight: "400",
                fontSize: 18,
                "&:hover": {
                  color: "white",
                  backgroundColor: "#175F5F",
                  cursor: "pointer",
                },
              }}
            >
              {loadingImage ? (
                <CircularProgress color="info" />
              ) : (
                <>
                  <Refresh />
                </>
              )}
            </Button>
          </Box>
        </Container>
        {formValues.dogURL ? (
          <img
            src={`https://random.dog/${formValues.dogURL}`}
            style={{
              width: isImageOverflowing ? 375 : "80%",
              marginBottom: "20px",
            }}
          ></img>
        ) : (
          <Box
            sx={{
              width: isNonMobile ? "100%" : "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Pressione o botão para receber uma imagem.
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default RandomDog;
