import  React, {useState, useEffect}  from "react";
import CaseDataService from "../services/CaseService"


const Case = props =>{
    const initialCaseState ={
        id: 0,
        date: "",
        county: "",
        cases: 0,
        deaths: 0,
        state: ""

    };
    const [currentCase, setcurrentCase] = useState(initialCaseState);
    const [message, setMessage] = useState("");

    const getCase =_id =>{
        CaseDataService.get(_id)
            .then(response=>{  
                setcurrentCase(response.data)
                console.log(response.data);
            })
            .catch(e =>console.log(e))
    };

    useEffect(() => {
        getCase(props.match.params._id);
      }, [props.match.params._id]);
    

    const handleInputChange = event => {
        const { name, value } = event.target;
        setcurrentCase({ ...currentCase, [name]: value });
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

      const deleteTutorial = () => {
        CaseDataService.remove(currentCase._id)
          .then(response => {
            console.log(response.data);
            props.history.push("/cases");
          })
          .catch(e => {
            console.log(e);
          });
      };

      return (
        <div>
        {currentCase ? (
          <div className="edit-form">
            <h4>Case</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="Date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={currentCase.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="county">County</label>
                <input
                  type="text"
                  className="form-control"
                  id="county"
                  name="county"
                  value={currentCase.county}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="case">Case</label>
                <input
                  type="text"
                  className="form-control"
                  id="case"
                  name="case"
                  value={currentCase.case}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="death">Death</label>
                <input
                  type="text"
                  className="form-control"
                  id="death"
                  name="death"
                  value={currentCase.deaths}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={currentCase.states}
                  onChange={handleInputChange}
                />
              </div>
            </form>  
            <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
              Delete
            </button>
  
            <button
              type="submit"
              className="badge badge-success"
              onClick={updateCase}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
      )
};


export default Case;
