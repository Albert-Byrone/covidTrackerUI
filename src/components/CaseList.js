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
