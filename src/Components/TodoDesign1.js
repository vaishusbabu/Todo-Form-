import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

function TodoStatus() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('form')) || [];
        setItems(storedData);
    }, []);

    const handleDelete = (index) => {
        const newTasks = [...items.slice(0, index), ...items.slice(index + 1)];
        localStorage.setItem('form', JSON.stringify(newTasks));
        setItems(newTasks);
    };


    return (

        <div className='storeddata'>

            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-text">
                    </span>
                </div>
            </nav>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-text">
                        <h2 className="mb-4">Todo </h2>
                    </span>
                </div>
            </nav>
            <div className="container mt-4">

                <div className="row">
                    <div className='button'>
                        <button className="btn btn-success mt-3" onClick={() => navigate('/form')}>
                            Add Task
                        </button> </div><br />



                    {items.map((task, index) => (
                        <div key={`task-${index + 1}`}>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Task </th>
                                        <th scope="col">Title </th>
                                        <th scope="col">Date and Time </th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"> {index + 1}</th>
                                        <td>

                                            {task.title}
                                        </td>
                                        <td>

                                            {moment(task.datetime).format('MM/DD/YYYY hh:mm A')}
                                        </td>
                                        <td>{task.status}</td>
                                        <td>
                                            <button
                                                className="btn btn-outline-danger gap-5"
                                                onClick={() => handleDelete(index)}>
                                                Delete
                                            </button>
                                        </td>
                                        <td>

                                            <button className="btnbtn-outline-danger">
                                                <Link to={'/edit/${index + 1}'}>Edit</Link>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                        </div>
                    ))}
                </div >

            </div >
        </div >
    );
}

export default TodoStatus;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import moment from 'moment';

// function TodoStatus() {
//     const [items, setItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem('form')) || [];
//         setItems(storedData);
//     }, []);

//     const handleDelete = (index) => {
//         const newTasks = [...items.slice(0, index), ...items.slice(index + 1)];
//         localStorage.setItem('form', JSON.stringify(newTasks));
//         setItems(newTasks);
//     };

//     const edit = (e, index) => {
//         e.preventDefault();

//     }

//     return (
//         <div className='storeddata'>
//             <div className="container mt-4">
//                 <h2 className="mb-4">Todo </h2>
//                 <div className="row">
//                     <div className='button'>
//                         <button className="btn btn-primary mt-3" onClick={() => navigate('/form')}>
//                             Add Task
//                         </button> </div>

//                     {items.map((task, index) => (

//                         <div className="col-md-5 mb-5" key={`task-${index + 1}`}>
//                             <div class="card text-dark bg-light mb-4;">
//                                 <div class="card-header">Task {index + 1}</div>
//                                 <div class="card-body">
//                                     <h5 class="card-title"><label>Title:</label>{task.title}</h5><hr />

//                                     <h5 class="card-title"><label>Date:</label>{moment(task.date).format('MM/DD/YYYY')}</h5><hr />

//                                     <h5 class="card-title"> <label>Time:</label>{moment(task.time, 'hh:mm A').format('hh:mm A')}</h5><hr />

//                                     <h5 class="card-title"><label>Status:</label>{task.status}</h5><hr />

//                                     {/* <h5 class="card-title"><label> Time Status:</label>{task.timeStatus}</h5><hr /> */}

//                                     {/* {task.status==='completed'&& task.timeStatus==="completed"?'completed':'pending'} */}
//                                     <button
//                                         className="btn btn-outline-danger gap-5"
//                                         onClick={() => handleDelete(index)}>
//                                         Delete
//                                     </button>
//                                     <button className="btn btn-outline-primary"
//                                         onClick={() => edit(index)}>
//                                         Edit
//                                     </button>

//                                 </div>
//                             </div>

//                         </div >
//                     ))
//                     }
//                 </div >

//             </div >
//         </div>
//     );
// }

// export default TodoStatus;