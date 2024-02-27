import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddDoc = () => {
    const [input, setInput] = new useState(
        {
            docName: "",
            docQualification: "",
            docIdProofNumber: "",
            docSpecialisation: "",
            docYearOfExp: ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://35.170.103.9:3008/addDoctors", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("SUCESSFULLY ADDED")
                    setInput(
                        {
                            docName: "",
                            docQualification: "",
                            docIdProofNumber: "",
                            docSpecialisation: "",
                            docYearOfExp: ""
                        }
                    )
                } else {
                    alert("Something Went Wrong")
                }
            }
        )
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Doctor's Name</label>
                                <input type="text" className="form-control" name='docName' value={input.docName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Doctor Qualification</label>
                                <input type="text" className="form-control" name='docQualification' value={input.docQualification} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Doctor Id Proof Number</label>
                                <input type="number" name="docIdProofNumber" className="form-control" value={input.docIdProofNumber} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Doctor Specialisation</label>
                                <input type="text" className="form-control" name='docSpecialisation' value={input.docSpecialisation} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Year of Experience</label>
                                <input type="number" name="docYearOfExp" className="form-control" value={input.docYearOfExp} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoc