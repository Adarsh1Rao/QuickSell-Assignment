import react, { useState } from 'react';
import './DisplayComp.css'
function DisplayComponent(props) {
    const status = [ "Status", "User"]
    const priority = ["None", "Priority"];
    const [selectStatus, setSelectStatus] = useState(status[0])
    const [selectPriority, setSelectPriority] = useState(priority[0])
    props.sendStatusValue(selectStatus, selectPriority)
    const handleClick = () => {
        props.closeSettingModal()
    }
    return (
        <div className="displayComponent">
            <button onClick={handleClick} className="closeButton" >X</button>
            <div className="GroupingMain">
                <div>
                    Grouping
                </div>
                <div >
                    <select className="selectDropDown" onChange={(e) => setSelectStatus(e.target.value)}>
                        {status.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="OrderingMain">
                <div>
                    Ordering
                </div>
                <div>
                    <select className="selectDropDown" onChange={(e) => setSelectPriority(e.target.value)}>
                        {priority.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default DisplayComponent;