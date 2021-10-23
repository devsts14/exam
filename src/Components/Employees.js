import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchString, setSearchString] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const baseUrl = "https://617253e361ed900017c40788.mockapi.io/employees";
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    axios.get(baseUrl).then((res) => {
      console.log(res);
      setEmployees(res.data);
    });
  };
  const onsubmit = (data) => {
    console.log(data);
    if (
      !data.name ||
      !data.age ||
      !data.gender ||
      !data.salary ||
      !data.department
    ) {
      toast("Fill all fields!!");
      return;
    } else {
      let sendData = {
        name: data.name,
        age: data.age,
        salary: data.salary,
        gender: data.gender,
        department: data.department,
      };
      if (!edit) {
        axios.post(baseUrl, sendData).then((res) => {
          getEmployees();
          setValue("name", "");
          setValue("salary", 0);
          setValue("age", 0);
          setValue("gender", "editData.gender");
          setValue("department", "");
        });
      } else {
        axios.put(`${baseUrl}/${editId}`, sendData).then((res) => {
          console.log(res);
          getEmployees();
          setValue("name", "");
          setValue("salary", 0);
          setValue("age", 0);
          setValue("gender", "editData.gender");
          setValue("department", "");
          setEdit(false);
          setEditId(null);
        });
      }
    }
  };
  const deleteEmployee = (id) => {
    axios.delete(`${baseUrl}/${id}`).then((res) => {
      console.log(res);
      toast("Deleted sucessfully");
      getEmployees();
    });
  };

  const editEmployee = (id) => {
    setEdit(true);
    const editData = employees.filter((fil) => fil.id === id)[0];
    console.log(editData);
    setEditId(editData.id);
    setValue("name", editData.name);
    setValue("salary", editData.salary);
    setValue("age", editData.age);
    setValue("gender", editData.gender);
    setValue("department", editData.department);
  };
  return (
    <div className="flex">
      <ToastContainer />

      <form onSubmit={handleSubmit(onsubmit)} className="create_form" action="">
        <center>
          <h1>Add employee data</h1>
        </center>
        <label htmlFor="">
          Name
          <input {...register("name")} type="text" />
        </label>
        <label htmlFor="">
          Salary
          <input {...register("salary")} type="number" />
        </label>
        <label htmlFor="">
          Age
          <input {...register("age")} type="number" />
        </label>
        <label htmlFor="">
          Gender
          <select {...register("gender")} name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label htmlFor="">
          Department
          <input {...register("department")} type="text" />
        </label>
        <center>
          {" "}
          <input className="submit_btn" type="submit" value="Submit" />
        </center>
      </form>
      <div>
        <table>
          <input
            onChange={(e) => setSearchString(e.target.value)}
            className="search"
            type="search"
            placeholder="Search employee"
          />

          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
          </tr>
          {employees.length > 0 &&
            employees
              .filter((fil) => {
                if (searchString !== "") {
                  return fil.name.includes(searchString);
                } else {
                  return fil;
                }
              })
              .map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.age}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.department}</td>
                  <td onClick={() => editEmployee(emp.id)} className="edit">
                    Edit
                  </td>
                  <td onClick={() => deleteEmployee(emp.id)} className="delete">
                    Delete
                  </td>
                </tr>
              ))}
        </table>
      </div>
    </div>
  );
};

export default Employees;
