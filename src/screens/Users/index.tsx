import { useEffect, useState } from "react";
import {
  Button,
  Box,
  useMediaQuery,
  TablePagination,
  ThemeProvider,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import useDataFilter from "../../hooks/useDataFilter";
import Theme from "../../components/Theme";
import { getUsers } from "../../services/users";
import { FormValues } from "../../@types/screens/Users.type";

const HomePage: React.FunctionComponent = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const [loading, setLoading] = useState(true);
  const [randomData, setRandomData] = useState<any>();
  const [formValues, setSearch] = useState<FormValues>({
    search: "",
    tempSearch: "",
  });

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUsers(formValues.search, page, rowsPerPage);

      if (res) {
        setRandomData(useDataFilter(res, formValues.search));
        setLoading(false);
      }
    };

    fetchData();
  }, [formValues.search, page, rowsPerPage]);

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
        <Box
          sx={{
            display: "flex",
            flexDirection: isNonMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
            width: isNonMobile ? "380px" : "100%",
          }}
        >
          <TextField
            className="search"
            label="Buscar"
            variant="outlined"
            value={formValues.tempSearch}
            onChange={(event) =>
              setSearch({
                ...formValues,
                tempSearch: event.target.value,
              })
            }
            sx={{
              width: isNonMobile ? 300 : "80%",
              height: 55,
            }}
          />
          <Button
            type="button"
            variant="contained"
            onClick={() => {
              setSearch({ ...formValues, search: formValues.tempSearch });
            }}
            sx={{
              width: isNonMobile ? 60 : "80%",
              height: isNonMobile ? 55 : 50,
              marginTop: isNonMobile ? 0 : "10px",
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
            <Search />
          </Button>
        </Box>

        <TablePagination
          component="div"
          count={1000}
          labelRowsPerPage="Quantidade: "
          page={page - 1}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Box
          sx={{
            width: "80%",
            display: "inline-block",
            marginBottom: "15px",
          }}
        >
          {randomData.map((item: any) => (
            <Box
              key={item.cell}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Card
                picture={item.picture}
                nameProp={item.name}
                email={item.email}
                username={item.login}
                idade={item.dob}
                local={item.location}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
