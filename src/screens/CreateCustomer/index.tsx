import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Button,
  Box,
  useMediaQuery,
  Container,
  FormControl,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../state";
import Theme from "../../components/Theme";
import { createCustomer } from "../../services/customers";
import { FormValues } from "../../@types/screens/CreateCustomer.type";
import { getSessionToken } from "../../utils/functions";

const CreateCustomer: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const localToken = useSelector((state: RootState) => state.auth.token);
  const sessionToken = getSessionToken();
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    address: "",
    cpf: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await createCustomer(
        localToken,
        sessionToken,
        formValues.name,
        formValues.email,
        formValues.phone,
        formValues.address,
        formValues.cpf
      );

      if (res) {
        navigate("/customers");
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
          <FormControl
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: isNonMobile ? 600 : "80%" }}
          >
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"space-between"}
              sx={{ height: "35%" }}
            >
              <TextField
                className="name"
                label="Nome"
                variant="outlined"
                color="primary"
                inputProps={{ maxLength: 50 }}
                value={formValues.name}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    name: event.target.value,
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
                className="phone"
                label="Telefone"
                variant="outlined"
                color="primary"
                inputProps={{ maxLength: 11 }}
                value={formValues.phone}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    phone: event.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "10px" }}
                required
              />
              <TextField
                className="address"
                label="Endereço"
                variant="outlined"
                color="primary"
                inputProps={{ maxLength: 50 }}
                value={formValues.address}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    address: event.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "10px" }}
                required
              />
              <TextField
                className="cpf"
                label="CPF"
                variant="outlined"
                color="primary"
                inputProps={{ maxLength: 11 }}
                value={formValues.cpf}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    cpf: event.target.value,
                  })
                }
                sx={{ width: "100%", marginTop: "10px" }}
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
          </FormControl>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CreateCustomer;
