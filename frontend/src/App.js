import React from "react";
import {

    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    makeStyles,
    useMediaQuery,
    FormControlLabel,
    Switch,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import BookDetails from './BookDetails'
import ErrorPage from "./ErrorPage";
import Books from "./Books";

const TITLE = "Book Store";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        marginBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
function App() {
    const [colorScheme, setColorScheme] = React.useState("dark");
    const prefersDarkMode = useMediaQuery(
        `(prefers-color-scheme: ${colorScheme})`
    );
    const handleChange = () => {
        setColorScheme(() => {
            return colorScheme === "dark" ? "light" : "dark";
        });
    };
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    type: prefersDarkMode ? "dark" : "light",
                },
            }),
        [prefersDarkMode]
    );
    const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {TITLE}
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={colorScheme === "dark"}
                                onChange={handleChange}
                                name="darkMode"
                            />
                        }
                        label="Dark Mode"
                    />
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Books />}/>
                    <Route path="/books/:id" element={<BookDetails />}/>
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;