import "./App.css";
import React, {useState} from "react"
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import SearchIcon from "@mui/icons-material/Search";
import { Paper, Typography, InputAdornment, Box } from "@mui/material";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';






function App() {
const [wordOption, setWordOption] = useState("")
const [words, setWords] = useState([])
function handleChange(event) {
  setWordOption(event.target.value)
  fetch(
    `https://api.datamuse.com/sug?s=${wordOption}`
    ).then(
      response =>response.json()
      ).then(
        data => {
          setWords(data)
        })
}
  return (
    <Paper elevation={3}>
      <Box>
        <Box sx={{display: 'flex',flexDirection: 'column', justifyContent:"center", AlignItems:'center'}}>
          <Box
            sx={{
              width: "50%",
              padding: 1,
              marginBottom: 1,
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              component="h5"
              sx={{ width: "", margin: 3, color:"lightblue" }}
            >
              < ManageSearchIcon fontSize="large"/>
              Word Searcher
            </Typography>
          </Box>
          <Box sx={{ width: 300, padding:1, marginBottom: "" }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              disableClearable
              options={words.map((option) => option.word)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    ...params.InputProps,
                    type: "search",
                  }}
                  id="input-with-icon-textfield"
                  label="Search words here....."
                />
              )}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default App;
