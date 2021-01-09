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

    const handleInputChange = event =>{
        const { name, value} = event.target;
        setCase({..._case, [name]:value})
    };

    // save data
    const saveCase = ()=>{
        var data = {
            date: _case.date,
            county: _case.county,
            cases: _case.cases,
            deaths: _case.deaths,
            state: _case.state
        }


        CaseDataService.create(data)
            .then(response => {
                setCase({
                    _id: response.data._id,
                    date: response.data.date,
                    county: response.data.county,
                    cases: response.data.cases,
                    deaths: response.data.deaths,
                    state: response.data.state
                });
                setSubmitted(true)
                console.log(data);

            }).catch(e =>{
                console.log(e);
            });
    };

