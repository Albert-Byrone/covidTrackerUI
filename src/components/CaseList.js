import React, { useState, useEffect } from "react";
import CaseDataService from "../services/CaseService"
import './CaseList.css';

  const [cases, setCases] = useState([]);
  const [currentCase, setCurrentCase] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    retrieveCases();
  }, []);

 
  const retrieveCases = () => {
    CaseDataService.getAll()
      .then(response => {
        setCases(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
    const setActiveCase = (_case) => {
      setCurrentCase(_case);
    };



  const getCase =_id =>{
    CaseDataService.get(_id)
        .then(response=>{  
          setCurrentCase(response.data)
            console.log(response.data);
        })
        .catch(e =>console.log(e))
};


const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCase({ ...currentCase, [name]: value });
  };

  const updateCase = () => {
    CaseDataService.update(currentCase._id, currentCase)
      .then(response => {
        console.log(response.data);
        setMessage("The data was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCase = () => {
    CaseDataService.remove(currentCase._id)
      .then(response => {
        console.log(response.data);
        setMessage("The data was updated successfully!");
        props.history.push("/");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
    <div className="col-md-10">
      <h4 style={{ textAlign: "center", fontFamily: "arial, sans-serif"}}> List</h4>

        <table  className="table table-hover">
            <thead>
            <tr>
            <th>County</th>
            <th>Date</th>
            <th>State</th>
            <th>Deaths</th>
            <th>Cases</th>
            </tr>
        </thead>
        <tbody>
            { cases && cases.map((_case,index)=>{

                return <tr key={index} onClick={() => setActiveCase(_case, index)}>
                        <td>{ _case.county}</td>
                        <td >{ _case.date}</td>
                        <td>{ _case.state}</td>
                        <td>{ _case.deaths}</td>
                        <td>{ _case.cases}</td>
                     </tr>
            })}
        </tbody>  
        </table>
    </div>
