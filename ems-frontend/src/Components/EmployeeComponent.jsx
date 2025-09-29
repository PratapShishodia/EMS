import { useState, useEffect } from "react";
import { addemp, getemp, updateemp } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
export function EmployeeComponent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log("IN useeffect " + id);
      getemp(id)
        .then((response) => {
          setFirstname(response.data.firstname);
          setLastname(response.data.lastname);
          setEmail(response.data.email);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);
  // function handlefirstName(e){
  //     setFirstname(e.target.value)
  // }
  // function handleLastName(e){
  //     setLastname(e.target.value)
  // }
  // function handleEmail(e){
  //     setEmail(e.target.value)
  // }

  function saveorUpdateEmployee(e) {
    e.preventDefault();
    if (validateFrom()) {
      const emp = { firstname, lastname, email };
      console.log(emp);
      if (id) {
        updateemp(id, emp).then((response) => {
          console.log(response.data);
          navigator("/employee");
        });
      } else {
        addemp(emp).then((response) => {
          console.log(response.data);
          navigator("/employee");
        });
      }
    }
  }

  function validateFrom() {
    let valid = true;
    const errorscopy = { ...errors };

    if (firstname.trim()) {
      errorscopy.firstname = "";
    } else {
      errorscopy.firstname = "Firstname is required";
      valid = false;
    }
    if (email.trim()) {
      errorscopy.email = "";
    } else {
      errorscopy.email = "Email is required";
      valid = false;
    }
    setErrors(errorscopy);
    return valid;
  }
  return (
    <div className="container">
      <br />
      <br />
      {/* <h1>{firstname}</h1> */}
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {/* <h2 className="text-center">Add Employee</h2> */}
          {id ? (
            <h2 className="text-center">Update Employee</h2>
          ) : (
            <h2 className="text-center">Add Employee</h2>
          )}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstname}
                  className={`form-control ${
                    errors.firstname ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {errors.firstname && (
                  <div className="invalid-feedback"> {errors.firstname} </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastname}
                  className="form-control"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback"> {errors.email} </div>
                )}
              </div>
              <button
                className="btn btn-success mb-2"
                onClick={saveorUpdateEmployee}
              >
                Submit
              </button>
              {/* <button className="btn btn-success mb-2" onClick={resetFrom}>Reset</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
