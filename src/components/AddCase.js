import  React, {useState}  from "react";
import CaseDataService from "../services/CaseService"


const AddCase =()=>{
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

    const newCase = ()=>{
        setCase(initialCaseState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCase}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              required
              value={_case.date}
              onChange={handleInputChange}
              name="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="county">County</label>
            <input
              type="text"
              className="form-control"
              id="county"
              required
              value={_case.county}
              onChange={handleInputChange}
              name="county"
            />
          </div>

          <div className="form-group">
            <label htmlFor="case">Case</label>
            <input
              type="text"
              className="form-control"
              id="case"
              required
              value={_case.cases}
              onChange={handleInputChange}
              name="case"
            />
          </div>

          <div className="form-group">
            <label htmlFor="death">Death</label>
            <input
              type="text"
              className="form-control"
              id="death"
              required
              value={_case.deaths}
              onChange={handleInputChange}
              name="death"
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              required
              value={_case.state}
              onChange={handleInputChange}
              name="state"
            />
          </div>

          <button onClick={saveCase} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    );

};

export default AddCase;