import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Country from "./Countries/Country";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css"


const theme = createTheme({
  palette: {
    primary: {
      light: 'aliceblue',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


export default function Form() {
  const [value, setValue] = React.useState(null);
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Box
        sx={{
          justifyContent: "center",
          backgroundColor: "blue",
          color: "white",
          padding: 10,
          margin: 10,
          height: "100%",
        }}
      >
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="body1" component="h5">
            Your full given name
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            sx={{ width: "100%", color: "white", marginTop: 1,  border: "2px solid white"}}
          />
        </Box>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "row", marginTop: 5 }}
        >
          <Grid item xs={6} md={6}>
            <Typography variant="body1" component="h5">
              Date of Birth
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label=""
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} sx={{border: "2px solid white"}}/>}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography variant="body1" component="h5">
              Country of Residence/Citizenship:
            </Typography>
            <Country />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="body1" component="h5" sx={{ marginBottom: 1 }}>
            What school do you plan to attend?
          </Typography>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            style={{ width: "50%", color: "white", margin: 1,  border: "2px solid white" }}
          />
        </Box>
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="body1" component="h5">
            Please take a moment to describe your intended area of study:
          </Typography>
          <TextField
          className="text_field"
            id="outlined-basic"
            label="Enter your details here"
            multiline
            rows={10}
            sx={{
              width: "100%",
              color: "white",
              marginTop: 1,
              border: "2px solid white"
            }}
            color="primary"
            variant="outlined"
            borderColor="primary"
          />
        </Box>
      </Box>
    </Container>
    </ThemeProvider>
  );
}
