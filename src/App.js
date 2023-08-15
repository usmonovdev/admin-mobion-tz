import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Ads, AllProducts, Login, Navbar, NewProducts, Sidebar } from "./components/";
import 'aos/dist/aos.css';
import 'swiper/css';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

function App() {
  const [mode, setMode] = useState("light")
  const { sidebarOpen } = useSelector((state) => state.theme)
  const { isDarkMode } = useSelector(state => state.theme)
  const isAdmin = localStorage.getItem("isAdmin")
  const navigate = useNavigate()
  const getTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light" ?
        {
          blue: createColor("#012350"),
          alsoWhite: createColor("#fff"),
          primary: {
            main: "#02C981",
          },
          secondary: {
            main: "#FED734",
          },
          custom: {
            background: "#fff",
            text: "#012350",
            grey: "#9E9E9E",
            greyToWhite: "#F3F3F3",
            blueOpacity: "#01235066",
            contact: "#F6F7F9",
            whiteToBlack: "#F3F3F3",
            userBg: "#fff"
          }
        } : {
          blue: createColor("#012350"),
          alsoWhite: createColor("#fff"),
          primary: {
            main: '#02C981',
          },
          secondary: {
            main: "#FED734",
          },
          custom: {
            background: "#212121",
            text: "#fff",
            grey: "#9E9E9E",
            greyToWhite: "#F3F3F3",
            blueOpacity: "#FFFFFF66",
            contact: "#FFFFFF0D",
            whiteToBlack: "#FFFFFF0D",
            userBg: "#FFFFFF0D"
          }
        })
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            minWidth: "992px",
            width: "100vw",
            hegiht: "100vh",
            backgroundColor: theme.palette.custom.background,
            scrollBehavior: "smooth"
          },
          "::-webkit-scrollbar": {
            width: "8px",
            hegiht: "8px"
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            backgroundColor: theme.palette.primary.main
          },
          "::-webkit-scrollbar-thumb:hover": {
            borderRadius: "4px",
            backgroundColor: theme.palette.primary.dark
          },
        }),
      }
    },
    shadows: Array(25).fill('none'),
    typography: {
      fontFamily: "Inter"
    }
  });

  const theme = useMemo(() => createTheme(getTokens(mode)), [mode])

  useMemo(() => {
    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: 'ease-out-sine',
    });
  }, [])

  useEffect(() => {
    localStorage.setItem("IsAdmin", false)
    if (isAdmin == false) {
      navigate("/login")
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="flex flex-row">
          <Sidebar />
          <div className={`${sidebarOpen ? "w-4/5" : "w-full"}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<NewProducts />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/ads" element={<Ads />} />
            </Routes>
          </div>
        </div>
      <Routes><Route path="/login" element={<Login />} /></Routes>
    </ThemeProvider>
  );
}

export default App;
