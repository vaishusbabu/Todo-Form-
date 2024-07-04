import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function Edit() {

    const [values, setValues] = useState({
        title: "",
        datetime: ""
    })

    const Change = (e) => {
        setValues(e.target.value)
    }

    const Submit = (e) => {
        e.preventdefault();
    }

    // useEffect(() => {
    //     axios.post(`http://localhost:3000/id/${localStorage.getItem('userid')}`)
    //         .then((res) => {
    //             console.log(res, "res");
    //             if (index !== undefined) {
    //                 setValues(res.data.data)
    //             }
    //         })
    //         .catch((e) => {
    //             alert("error")
    //             console.log(e)
    //         })
    // }, [])

    // const Submit = (e) => {
    //     console.log(values);
    //     e.preventDefault();
    //         axios
    //         .post(`http://localhost:3000/editUser/${localStorage.getItem("userid")}`, values)
    //         .then((res) => {
    //         if (res.data.status == 500) {
    //                 console.log(res);
    //                 alert(res.data.msg);
    //         }
    //         else {
    //                 console.log("Submitted", res);
    //                 alert("Edited")
    //                 window.location.reload(false);
    //             }
    //         })
    //         .catch((err) => {
    //                 console.log("Error", err);
    //             });
    // };

    return (
        <div>
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
                </nav><br />


                <div className="form1">
                    <form onSubmit={Submit}>
                        <h4>Edit Form</h4><hr /><br />

                        <label>Title : </label>
                        <input type="text" placeholder="Enter Title" className="form-control" onChange={Change} name="title" value={values.title} /> <span> </span>

                        <div className="form-group">
                            <h6>Date and Time: </h6>
                            <DateTimePicker format="yyyy-MM-dd hh:mm a" onChange={Change} value={values.datetime} />
                        </div><br />

                        <button type="Submit" class="btn btn-info">Submit</button>

                    </form>
                </div>


            </div >
        </div >
    )
}

export default Edit