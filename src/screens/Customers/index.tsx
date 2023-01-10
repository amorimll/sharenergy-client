import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  useMediaQuery,
  Paper,
  Container,
  ThemeProvider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../state";
import { setCustomer } from "../../state/reducers/customerState";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import Theme from "../../components/Theme";
import { getAllCustomers, deleteCustomer } from "../../services/customers";
import { HandleEdit } from "../../@types/screens/Customers.type";
import { getSessionToken } from "../../utils/functions";

const CustomersPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const localToken = useSelector((state: RootState) => state.auth.token);
  const sessionToken = getSessionToken();
  const nameState = useSelector((state: RootState) => state.user.email);
  const [customerData, setCustomerData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id: any) => {
    try {
      const res = await deleteCustomer(localToken, sessionToken, id);

      if (res) {
        navigate(0);
      }
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const handleEdit: HandleEdit = async (
    id,
    name,
    email,
    phone,
    address,
    cpf
  ) => {
    try {
      dispatch(
        setCustomer({
          id,
          name,
          email,
          phone,
          address,
          cpf,
        })
      );
      navigate("/edit-customer");
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllCustomers(localToken, sessionToken);

      if (res) {
        setCustomerData(res.data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <Button
            type="button"
            variant="contained"
            onClick={() => navigate("/create-customer")}
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
            <Add />
          </Button>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{
              height: "35%",
              width: isNonMobile ? "900px" : "80%",
              marginBottom: "15px",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#008080" }}>
                    <TableCell sx={{ fontWeight: "700", color: "white" }}>
                      Nome
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "700", color: "white" }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "700", color: "white" }}
                    >
                      Telefone
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "700", color: "white" }}
                    >
                      Endereço
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: "700", color: "white" }}
                    >
                      CPF
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customerData.map((item: any) => (
                    <TableRow
                      key={item._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="item">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.email}</TableCell>
                      <TableCell align="right">{item.phone}</TableCell>
                      <TableCell align="right">{item.address}</TableCell>
                      <TableCell align="right">{item.cpf}</TableCell>
                      <TableCell align="right">
                        <Stack direction="row" spacing={2}>
                          <Button
                            type="button"
                            variant="contained"
                            sx={{
                              maxWidth: "30px",
                              maxHeight: "30px",
                              minWidth: "30px",
                              minHeight: "30px",
                            }}
                            onClick={() =>
                              handleEdit(
                                item._id,
                                item.name,
                                item.email,
                                item.phone,
                                item.address,
                                item.cpf
                              )
                            }
                          >
                            <Edit />
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                              maxWidth: "30px",
                              maxHeight: "30px",
                              minWidth: "30px",
                              minHeight: "30px",
                            }}
                            onClick={() => handleDelete(item._id)}
                          >
                            <Delete />
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CustomersPage;
