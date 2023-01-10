import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../state/reducers/authState";
import {
  ThemeProvider,
  Box,
  Select,
  MenuItem,
  AppBar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router";
import { Menu, Close } from "@mui/icons-material";
import { RootState } from "../state";
import Theme from "./Theme";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const userState = useSelector((state: RootState) => state.auth.user);

  return (
    <ThemeProvider theme={Theme}>
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={{
          width: "80%",
          height: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
            style={{ width: "200px", height: 25 }}
            onClick={() => navigate(0)}
          ></img>

          {/* Desktop */}
          {isNonMobile ? (
            <Box display={"flex"} alignItems="center" justifyContent={"center"}>
              <Button
                type="button"
                variant="text"
                sx={{
                  color: "black",
                  fontFamily: "Rubik",
                  fontWeight: "500",
                  textTransform: "none",
                  marginRight: "15px",
                  fontSize: 15,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#00A2A2",
                    backgroundColor: "rgba(0,0,0,0)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate("/home")}
              >
                Usuários
              </Button>
              <Button
                type="button"
                variant="text"
                sx={{
                  color: "black",
                  fontFamily: "Rubik",
                  fontWeight: "500",
                  textTransform: "none",
                  marginRight: "15px",
                  fontSize: 15,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#00A2A2",
                    backgroundColor: "rgba(0,0,0,0)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate("/cat")}
              >
                HTTP Cat
              </Button>
              <Button
                type="button"
                variant="text"
                sx={{
                  color: "black",
                  fontFamily: "Rubik",
                  fontWeight: "500",
                  textTransform: "none",
                  marginRight: "15px",
                  fontSize: 15,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#00A2A2",
                    backgroundColor: "rgba(0,0,0,0)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate("/dog")}
              >
                Random Dog
              </Button>
              <Button
                type="button"
                variant="text"
                sx={{
                  color: "black",
                  fontFamily: "Rubik",
                  fontWeight: "500",
                  textTransform: "none",
                  marginRight: "15px",
                  fontSize: 15,
                  borderRadius: "8px",
                  "&:hover": {
                    color: "#00A2A2",
                    backgroundColor: "rgba(0,0,0,0)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate("/customers")}
              >
                Clientes
              </Button>
              <Select
                value={userState?.username}
                variant="outlined"
                sx={{
                  padding: "15px 30px 15px 30px",
                  height: 40,
                  color: "#00A2A2",
                  borderColor: "#00A2A2",
                  borderRadius: "8px",
                  fontFamily: "Rubik",
                }}
              >
                <MenuItem value={userState?.username}>
                  <Typography
                    sx={{
                      fontFamily: "Rubik",
                      fontWeight: "500",
                    }}
                  >
                    {userState?.username}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(setLogout());
                    sessionStorage.removeItem("token");
                    navigate(0);
                  }}
                >
                  Deslogar
                </MenuItem>
              </Select>
            </Box>
          ) : (
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Menu />
            </IconButton>
          )}

          {/* Navbar para dispositivos móveis */}
          {!isNonMobile && isMobileMenuToggled && (
            <Box
              position="fixed"
              right="0"
              bottom="0"
              height="100%"
              zIndex="10"
              maxWidth="500px"
              minWidth="300px"
              sx={{ backgroundColor: "white" }}
            >
              <Box display="flex" justifyContent="flex-end" p="1rem">
                <IconButton
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                  <Close />
                </IconButton>
              </Box>
              <Box
                display={"flex"}
                flexDirection="column"
                alignItems="center"
                justifyContent={"center"}
              >
                <Button
                  type="button"
                  variant="text"
                  sx={{
                    color: "black",
                    fontFamily: "Rubik",
                    fontWeight: "500",
                    textTransform: "none",
                    marginRight: "15px",
                    fontSize: 15,
                    borderRadius: "8px",
                    "&:hover": {
                      color: "#00A2A2",
                      backgroundColor: "rgba(0,0,0,0)",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/home")}
                >
                  Usuários
                </Button>
                <Button
                  type="button"
                  variant="text"
                  sx={{
                    color: "black",
                    fontFamily: "Rubik",
                    fontWeight: "500",
                    textTransform: "none",
                    marginRight: "15px",
                    fontSize: 15,
                    borderRadius: "8px",
                    "&:hover": {
                      color: "#00A2A2",
                      backgroundColor: "rgba(0,0,0,0)",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/cat")}
                >
                  HTTP Cat
                </Button>
                <Button
                  type="button"
                  variant="text"
                  sx={{
                    color: "black",
                    fontFamily: "Rubik",
                    fontWeight: "500",
                    textTransform: "none",
                    marginRight: "15px",
                    fontSize: 15,
                    borderRadius: "8px",
                    "&:hover": {
                      color: "#00A2A2",
                      backgroundColor: "rgba(0,0,0,0)",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/dog")}
                >
                  Random Dog
                </Button>
                <Button
                  type="button"
                  variant="text"
                  sx={{
                    color: "black",
                    fontFamily: "Rubik",
                    fontWeight: "500",
                    textTransform: "none",
                    marginRight: "15px",
                    fontSize: 15,
                    borderRadius: "8px",
                    "&:hover": {
                      color: "#00A2A2",
                      backgroundColor: "rgba(0,0,0,0)",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/customers")}
                >
                  Clientes
                </Button>
                <Select
                  value={userState?.username}
                  variant="outlined"
                  sx={{
                    padding: "15px 30px 15px 30px",
                    height: 40,
                    color: "#00A2A2",
                    borderColor: "#00A2A2",
                    borderRadius: "8px",
                    fontFamily: "Rubik",
                  }}
                >
                  <MenuItem value={userState?.username}>
                    <Typography
                      sx={{
                        fontFamily: "Rubik",
                        fontWeight: "500",
                      }}
                    >
                      {userState?.username}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(setLogout());
                      sessionStorage.removeItem("token");
                      navigate(0);
                    }}
                  >
                    Deslogar
                  </MenuItem>
                </Select>
              </Box>
            </Box>
          )}
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
