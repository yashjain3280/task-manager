let tasks =[{id:1,title:'Sample task',description:'Example description', status: 'Pending', dueDate: '2025-11-15'}];

const delay = ms=>new Promise(res=> setTimeout(res,ms));


export async function fetchTasksApi(){
    await delay(300);
    return[...tasks];
}

export async function addTaskApi(task){
    await delay(300);
    const newTask = {...task,id : Date.now()};
    tasks.push(newTask);
    return newTask;
}
export async function updateTaskApi(id, updatedTask){
    // Keep the below line commented unless needed for debugging
    // console.log('updateTaskApi called with id:', id, 'updatedTask:', updatedTask);
    await delay(300);
    tasks = tasks.map(t => (t.id === Number(id) ? { ...t, ...updatedTask } : t));
    return tasks.find(t => t.id === Number(id));

}
export async function deleteTaskApi(id){
    await delay(300);
    tasks = tasks.filter(t => t.id !== Number(id));
    return true;
}
