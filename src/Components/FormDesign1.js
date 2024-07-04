import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function FormDesign1() {
    const [title, setTitle] = useState('');
    const [datetime, setDateTime] = useState(null);
    const [status, setStatus] = useState('Pending');
    const navigate = useNavigate();

    const [currentDateTime, setCurrentDateTime] = useState(new Date().getTime());

    //current timestamp
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const currenttimestamp = now.getTime();
            setCurrentDateTime(currenttimestamp);
            console.log("current timestamp", currenttimestamp);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const onChange = (datetime) => {
        //inputing date-time timestamp
        const timestamp = datetime.getTime();
        console.log("Timestamp:", timestamp);
        setDateTime(datetime)
        setDateTime(datetime);
        setStatus(datetime <= currentDateTime ? 'Completed' : 'Pending');
    };

    const TitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const status = getStatus();

        const data = JSON.parse(localStorage.getItem('form')) || [];
        const form = { title, datetime, status, currentDateTime };
        data.push(form);


        localStorage.setItem('form', JSON.stringify(data));
        console.log('locally stored data:', data);
        navigate('/');
    };

    const handleClear = () => {
        setTitle('');
        setDateTime('');

    };

    return (
        <div className="head"> <nav class="navbar navbar-dark bg-dark">
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

            <div className="form1">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3 mt-3">
                        <h6>Title: </h6>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            className="form-control"
                            value={title}
                            onChange={TitleChange}
                        />
                    </div><br />

                    <div className="form-group">
                        <h6>Date and Time: </h6>
                        <DateTimePicker format="yyyy-MM-dd hh:mm a" onChange={onChange} value={datetime} />
                    </div><br />

                    <p>Current Timestamp: {currentDateTime}</p>
                    <br />
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-dark" onClick={handleClear} >
                            Clear
                        </button>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>

                    </div>
                </form>
            </div >
        </div >
    );
}

export default FormDesign1;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import TimePicker from 'react-time-picker';
// import { useNavigate } from 'react-router-dom';

// function FormDesign1() {
//     const [title, setTitle] = useState('');
//     const [date, setDate] = useState(null);
//     const [time, setTime] = useState('');
//     const [amPm, setAmPm] = useState('AM');
//     const navigate = useNavigate();

//     const getStatus = () => {
//         const taskDateTime = date;
//         const currentDateTime = new Date();
//         return taskDateTime <= currentDateTime ? 'Completed' : 'Pending';
//     };

//     const getTime = () => {
//         const taskTime = time;
//         const currentTime = new Date(time);
//         return taskTime <= currentTime ? 'Completed' : 'Pending';
//     };

//     // const getTime = (time) => {
//     //     const taskTime = new Date(time);
//     //     const currentTime = new Date();
//     //     return taskTime <= currentTime ? 'Completed' : 'Pending';
//     // };


//     const handleChange = (newTime) => {
//         setTime(newTime);
//         setAmPm(newTime.includes('AM') ? 'AM' : 'PM');
//     };

//     const handleTitleChange = (e) => {
//         setTitle(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const status = getStatus();
//         const timeStatus = getTime();

//         const data = JSON.parse(localStorage.getItem('form')) || [];
//         const form = { title, date, time, amPm, status, timeStatus };
//         data.push(form);

//         localStorage.setItem('form', JSON.stringify(data));
//         console.log('locally stored data:', data);
//         navigate('/');
//     };

//     const handleClear = () => {
//         setTitle('');
//         setDate(null);
//         setTime('');
//         setAmPm('AM');
//     };

//     return (
//         <div className="head">

//             <div className="form1">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group mb-3 mt-3">
//                         <h6>Title: </h6>
//                         <input
//                             type="text"
//                             placeholder="Enter Title"
//                             className="form-control"
//                             value={title}
//                             onChange={handleTitleChange}
//                         />
//                     </div><br />
//                     <div className="form-group">
//                         <h6>Time: </h6>
//                         <TimePicker
//                             className="form-control"
//                             format="h:mm a"
//                             amPmAriaLabel="Select AM /PM"
//                             onChange={handleChange}
//                             placeholder="Enter Time"
//                             value={time}
//                         />
//                     </div><br />
//                     <div className="form-group">
//                         <h6>Date: </h6>
//                         <DatePicker
//                             className="form-control"
//                             selected={date}
//                             placeholderText="Enter Date"
//                             onChange={(newDate) => setDate(newDate)}
//                         />
//                     </div>
//                     <br />
//                     <div className="d-flex justify-content-between">
//                         <button type="button" className="btn btn-dark" onClick={handleClear} >
//                             Clear
//                         </button>

//                         <button type="submit" className="btn btn-primary">
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div >
//         </div >
//     );
// }

// export default FormDesign1;



