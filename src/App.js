import './App.css';
import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';


class App extends React.Component {
  state = {
    showForm: false,
    todos: [],
    todo: {
      title: '',
      description: ''
    }
  }

  toggleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  handleTitleChange = e => {
    this.setState({
      todo: {...this.state.todo, title: e.target.value}
    });
  }

  handleDescriptionChange = e => {
    this.setState({
      todo: {...this.state.todo, description: e.target.value}
    });
  }

  handleCreateClick = () => {
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  render() {
    return (
      <Box className="App">
        <Box style={{textAlign: 'center', marginTop: '1rem'}}>
          <Button onClick={this.toggleShowForm} variant="contained" color="primary">
            { this.state.showForm ? "Hide" : "Show" } Form
          </Button>
          <Box sx={{ p: 2 }}>
            <TextField value={this.state.todo.title}fullWidth variant="outlined" label="Title" />
          </Box>
          <Box sx={{ p: 2 }}>
            <TextField fullWidth variant="outlined" label="Description" multiline maxRows />
          </Box>
          <Box sx={{ p: 2 }}>
            <Button variant="outlined" color="primary">
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <h3>Todo List</h3>
        </Box>
      </Box>
    )
  }
}

export default App;
