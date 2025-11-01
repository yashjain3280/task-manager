import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import{fetchTasksApi, addTaskApi,  updateTaskApi, deleteTaskApi} from '../api/tasksApi'


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async() => {
    const response = await fetchTasksApi();
    return response;
});

export const addTask  = createAsyncThunk('tasks/addTask' , async(task) => {
    const response = await addTaskApi(task);
    return response;
});


export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, updatedTask }) => {
  const response = await updateTaskApi(Number(id), updatedTask);
  return response;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id) =>{
    await deleteTaskApi(id);
    return id;
});

const tasksSlice =createSlice({
    name:'tasks',
    initialState:{
        list:[],
        status:'idle',
        error:null,
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchTasks.fulfilled,(state,action) => {
            state.list = action.payload;
            state.success = 'succeeded';
        })
        .addCase(addTask.fulfilled, (state,action) => {
            state.list.push(action.payload);
        })
        .addCase(updateTask.fulfilled, (state, action) => {
  if (!action.payload || action.payload.id === undefined) {
    // sconsole.error('updateTask.fulfilled received invalid payload:', action.payload);
    return;
  }
  const index = state.list.findIndex(t => t.id === action.payload.id);
  if (index !== -1) {
    state.list[index] = action.payload;
  }
})
        .addCase(deleteTask.fulfilled,(state,action) =>{
            state.list=state.list.filter(t=>t.id !== action.payload);
        });
    },
});
 
export default tasksSlice.reducer;
