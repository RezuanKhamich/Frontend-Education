import {Box, Button, Checkbox, Grid, TextField, Typography} from "@mui/material";

const addTaskContainerSX = {
  width: '600px',
  margin: '100px auto 80px auto',
  display: 'flex',
  justifyContent: 'space-between',
}

const addTaskInputSX = {
  width: '100%',
  marginRight: '20px'
}

const taskCellSX = {
  border: '1px solid #00000036',
  padding: '10px',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px'
}

export const TodoList = () => {
  return(
      <div>
        <Typography variant="h3" textAlign="center">TodoList</Typography>
        <Box sx={addTaskContainerSX}>
          <TextField placeholder="Enter task..." sx={addTaskInputSX} type="text"/>
          <Button variant="contained" color="success">Add</Button>
        </Box>
        <Grid sx={{ width: '900px', margin: 'auto' }} container spacing={2}>
          <Grid item xs={12} sx={taskCellSX}>
            <Checkbox checked={true} />
            <Typography variant="h5" sx={{ flex: '1 0'}}>Купить хлеб</Typography>
            <span>
              <Button variant="contained" color="warning">Edit</Button>
              <Button variant="contained" color="error">Delete</Button>
            </span>
          </Grid>
          <Grid item xs={12} sx={taskCellSX}>
            <Checkbox checked={true} />
            <Typography variant="h5" sx={{ flex: '1 0'}}>Купить хлеб</Typography>
            <span>
              <Button variant="contained" color="warning">Edit</Button>
              <Button variant="contained" color="error">Delete</Button>
            </span>
          </Grid>
        </Grid>
      </div>
  )
}