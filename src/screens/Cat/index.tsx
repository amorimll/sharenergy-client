import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Button,
  Box,
  useMediaQuery,
  Container,
  TextField,
  ThemeProvider,
} from "@mui/material";
import Theme from "../../components/Theme";
import { getCatImage } from "../../services/cat";
import { Send } from "@mui/icons-material";
import { FormValues } from "../../@types/screens/Cat.type";

const HttpCat: React.FunctionComponent = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isImageOverflowing = useMediaQuery("(min-width:1000px)");
  const [formValues, setFormValues] = useState<FormValues>({
    tempStatusCode: "",
    statusCode: "",
  });

  const handleClick = () => {
    try {
      const res = getCatImage(formValues.statusCode);
      if (res) {
        setFormValues({
          ...formValues,
          statusCode: formValues.tempStatusCode,
        });
      }
    } catch (err) {
      setFormValues({
        ...formValues,
        statusCode: "404",
      });
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box
        style={{
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
            minWidth: "100%",
            height: "100%",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              className="statusCode"
              label="Código HTTP"
              variant="outlined"
              value={formValues.tempStatusCode}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  tempStatusCode: event.target.value,
                })
              }
              sx={{
                width: isNonMobile ? 300 : "80%",
                marginTop: "10px",
                marginBottom: "5px",
              }}
              required
            />
            <Button
              type="button"
              variant="contained"
              onClick={() => handleClick()}
              sx={{
                width: isNonMobile ? 300 : "80%",
                height: 50,
                marginTop: "10px",
                marginBottom: "15px",
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
              <Send />
            </Button>
          </Box>
        </Container>
        {formValues.statusCode ? (
          <img
            src={`https://http.cat/${formValues.statusCode}`}
            style={{ width: isImageOverflowing ? 450 : "80%", margin: "20px" }}
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
            Digite um código HTTP para receber uma imagem.
            <br />
            Ex.: 200 "OK"
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default HttpCat;
