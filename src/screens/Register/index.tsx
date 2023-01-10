import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  Typography,
  Button,
  TextField,
  FormControl,
  Box,
  useMediaQuery,
} from "@mui/material";
import Theme from "../../components/Theme";
import { register } from "../../services/auth";
import { FormValues } from "../../@types/screens/Register.type";
import { Link } from "@mui/icons-material";
import img from "../../assets/register-page-image.jpg";

const RegisterPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const [errorMessage, setErrorMessage] = useState();
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await register(
        formValues.username,
        formValues.email,
        formValues.password
      );

      if (res) {
        navigate("/home");
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box
        maxWidth="sm"
        sx={{
          minWidth: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: isNonMobile ? "40%" : "100%",
          }}
        >
          <img
            src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
            style={{ width: "65%", marginBottom: "60px" }}
          ></img>
          <FormControl
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: isNonMobile ? "60%" : "80%" }}
          >
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"space-between"}
              sx={{ height: "35%" }}
            >
              <TextField
                className="username"
                label="Usuário"
                variant="outlined"
                color="primary"
                inputProps={{ maxLength: 25 }}
                value={formValues.username}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    username: event.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "10px" }}
                required
              />
              <TextField
                className="email"
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                inputProps={{ maxLength: 50 }}
                value={formValues.email}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    email: event.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "10px" }}
                required
              />
              <TextField
                className="password"
                label="Senha"
                type="password"
                variant="outlined"
                color="primary"
                inputProps={{ maxLength: 30 }}
                value={formValues.password}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    password: event.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "10px", marginBottom: "20px" }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
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
                Cadastrar
              </Button>
            </Box>
            <Typography color="red" fontWeight={"500"}>
              {errorMessage}
            </Typography>
          </FormControl>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ fontWeight: "500" }}>
              Ja possui uma conta?
            </Typography>
            <Button
              type="button"
              variant="text"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
                "&:hover": {
                  color: "#006666",
                  backgroundColor: "rgba(0,0,0,0)",
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Entrar
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "60%",
            display: isNonMobile ? "flex" : "none",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "70%",
              height: "65%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "45px",
                fontWeight: "500",
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)"
              }}
            >
              Bem vindo.
            </Typography>
            <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.75)", borderRadius: "10px", padding: "30px", marginBottom: "130px"}}>
              <Typography
                sx={{ color: "#2A2A2A", fontSize: "20px", fontWeight: "500"}}
              >
                A Sharenergy é uma startup de energia solar em crescimento
                acelerado. Fundada por especialistas em tecnologia solar, a
                Sharenergy se orgulha de oferecer soluções de energia limpa e
                renovável para clientes em todo o país.
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Typography
                  sx={{ color: "#2A2A2A", fontSize: "18px", fontWeight: "500", marginRight: "5px"}}
                >
                  Saiba mais em
                </Typography>
                <Button
                  type="button"
                  variant="text"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "white",
                    backgroundColor: "#00A2A2",
                    textTransform: "none",
                    borderRadius: "8px",
                    marginRight: "10px",
                    "&:hover": {
                      backgroundColor: "#007E7E",
                      cursor: "pointer",
                    },
                  }}
                  href="https://www.sharenergy.com.br/"
                  target={"_blank"}
                >
                  <Link />
                  Sharenergy
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RegisterPage;
