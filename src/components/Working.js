import './Working.css';
import { AddWork } from './AddWork';
import { AddEdu } from './AddEdu';
import { useState } from 'react';
import { AddTop } from './AddTop';

let work;
let ed;
let personal;
function Working(){
    const [workExperience, setWorkExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [personalDetails, setPersonal] = useState([]);

    work = workExperience;
    ed = education;
    personal = personalDetails;

    const sendWork = ()=> {
        AddWork({workExperience,setWorkExperience});
    };
    const sendEdu = () => {
        AddEdu({education, setEducation});
    };
    const sendPers = () => {
        if(personalDetails.length === 0)
            AddTop({personalDetails,setPersonal});
    };

    return(
        <div className="box">
            <div className="top">
                <button className="personalButt butt" onClick={sendPers}>+Personal Details</button>
                <div className="topI">

                </div>
            </div>
            <div className="workX">
                <div className="title">Work Experience</div>
                <div className="workInput">
                    <button className="workButt butt" onClick={sendWork}>+ Work Experience</button>
                </div>
                <div className="workI">

                </div>
            </div>
            <div className="edu">
                <div className="title">Education</div>
                <div className="eduInput">
                    <button className="eduButt butt" onClick={sendEdu}>+ Education</button>
                </div>
                <div className="eduI">

                </div>
            </div>
        </div>
    )
}

export {Working, work, ed, personal};