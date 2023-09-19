import './App.css';
import React from 'react';
import { Box, Button, TextField, Grid, Card, CardContent, Typography, CardActions } from '@mui/material';
import { toast } from 'react-toastify';
import './dialog.js';
import FormDialog from './dialog.js';

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
	if(e.target.value.length <= 32) {
		this.setState({
			todo: {...this.state.todo, title: e.target.value}
		});
	}
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
    <Box className="App" style={{ margin: '2rem' }}>
    	<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
			<h1>To Do List</h1>
			<Button onClick={this.toggleShowForm} variant="contained" color="primary">
            	{ this.state.showForm ? "Hide" : "Show" } Form
        	</Button>
		</Box>
        <Box>
        	{
            	this.state.showForm ? 
				<Box>
					<Box>
						<TextField sx={{ margin: '0.5rem 0' }} onChange={this.handleTitleChange} value={this.state.todo.title} fullWidth variant="outlined" label="Title" />
						<TextField sx={{ margin: '0.5rem 0' }} onChange={this.handleDescriptionChange} value={this.state.todo.description} fullWidth variant="outlined" label="Description" />
					</Box>
					<Box>
						<Button sx={{ margin: '0.5rem 0' }} onClick={this.handleCreateClick} variant="contained" color="success">Create</Button>
					</Box>
				</Box>
            :
              null 
        	}
        </Box>
    </Box>
    )
  }
}

export default App;