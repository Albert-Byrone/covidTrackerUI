import  React, {useState}  from "react";
import CaseDataService from "../services/CaseService"


    const initialCaseState ={
        id: 0,
        date: "",
        county: "",
        cases: 0,
        deaths: 0,
        state: ""

    };

    const [_case, setCase] = useState(initialCaseState);
    const [ submitted, setSubmitted] = useState(false);
