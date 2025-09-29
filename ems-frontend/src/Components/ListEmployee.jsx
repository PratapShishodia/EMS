import { useEffect, useState } from "react"
import {delemp, listofemp} from '../services/EmployeeService'
import { Navigate, useNavigate } from "react-router-dom"
export function ListEmployee(){

    const [emps,setEmps] = useState([])
    const navigation = useNavigate()
    useEffect(()=>{
        getallEmployees()
    },[])

    function getallEmployees(){
        listofemp().then((response) => {
            setEmps(response.data);
        }).catch(error => console.error(error));
    }

    function addNewEmployee(){
        navigation("/add-employee")
    }
    function updateEmployee(id){
        navigation(`/update-employee/${id}`)
    }
    function DeleteEmployee(id){
        delemp(id).then((response)=>{
            console.log(response.data)
        }).catch(er => {
            console.error(er)
        })
        getallEmployees()
    }
    return(
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>ADD Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emps.map(emp => 
                    
                    <tr key={emp.employeeID}>
                        <td>{emp.employeeID}</td>
                        <td>{emp.firstname}</td>
                        <td>{emp.lastname}</td>
                        <td>{emp.email}</td>
                        <td><button className="btn btn-info" onClick={() => updateEmployee(emp.employeeID)}>Update</button><button className="btn btn-danger" onClick={() => DeleteEmployee(emp.employeeID)} style={{marginLeft:'10px'}}>Delete</button></td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}