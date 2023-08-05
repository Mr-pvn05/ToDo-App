import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const addTask = () => {
    setData([...data, task]);
    setTask("");
  };

  const remove = (index) => {
    data.splice(index, 1)
    setData([...data])
  }

  return (
    <div className="App">
      <div>
        <h1 className="header">ToDo App</h1>
      </div>
      <Stack direction={"row"} gap={1} className="stack">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            value={task}
            fullWidth
            label="Add Tasks"
            id="fullWidth"
            onChange={(event) => setTask(event.target.value)}
          />
        </Box>
        <Button variant="contained" color="success" onClick={addTask}>
          <AddIcon />
        </Button>
      </Stack>

      {data.map((element, index) => {
        return (
          <Stack key={index}>
            <div className="tasks">
              <Checkbox {...label} />
              <p>{element}</p>
              <Button variant="contained" color="error" onClick={() => remove(index)}>
                <DeleteIcon />
              </Button>
            </div>
          </Stack>
        );
      })}
    </div>
  );
}

export default App;
