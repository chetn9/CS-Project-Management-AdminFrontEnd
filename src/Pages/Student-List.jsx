import React from "react";

function StudentList() {
    const data = ["Chetan", "Somaiya", "cs@gmail.com", "1"];
    return (
        <>
            <div className="container mt-3">
                
                <div className="row">
                    <div className="card p-0">
                        <div className="card-header">
                            <h5>Student Records</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive-sm">

                            <table className="table table-bordered text-center text-nowrap">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Semester</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody className="text-nowrap">
                                    <tr>
                                        <td>001</td>
                                        <td>Chetan</td>
                                        <td>Somaiya</td>
                                        <td>cs@gmail.com</td>
                                        <td>1</td>
                                       
                                        <td><a className="btn btn-primary btn-sm" href="">Edit</a> | <a className="btn btn-danger btn-sm" href="">Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default StudentList;