import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import TaskListPage from '../pages/TaskListPage';
import CreateTaskPage from '../pages/CreateTaskPage';
import EditTaskPage from '../pages/EditTaskPage';

export default function AppRoutes(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {<Navigate to = "/tasks"/>}/>
        <Route path='/tasks' element= {<TaskListPage/>}/>
        <Route path='/tasks/new' element= {<CreateTaskPage/>}/>
        <Route path='/tasks/:id/edit' element={<EditTaskPage />}/>
    </Routes>
    </BrowserRouter>
);
}
