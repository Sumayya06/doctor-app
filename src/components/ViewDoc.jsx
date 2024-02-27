import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewDoc = () => {
    const[data,setData]=new useState([])
    const getData=()=>{
        axios.get("http://35.170.103.9:3008/doctors").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
        return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Doctor Name</th>
                                            <th scope="col">Qualification</th>
                                            <th scope="col">Id Proof Number</th>
                                            <th scope="col">Specialisation</th>
                                            <th scope="col">Year Of Experience</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {
                                        data.map(
                                            (value,index)=>{
                                                return   <tr>
                                                <th scope="row">{value.docName}</th>
                                                <td>{value.docQualification}</td>
                                                <td>{value.docIdProofNumber}</td>
                                                <td>{value.docSpecialisation}</td>
                                                <td>{value.docYearOfExp}</td>
                                            </tr>
                                            }
                                        )
                                      }
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDoc