import { useState } from 'react';
import { AddWork } from './AddWork';
import { AddEdu } from './AddEdu';
import './Working.css';


function Working(){
    const [workExperience, setWorkExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const sendWork = ()=> {
        AddWork({workExperience,setWorkExperience});
    };
    const sendEdu = () => {
        AddEdu({education, setEducation});
    };
    return(
        <div className="box">
            <div className="top">
                <div className="left">
                    <div className="firstN">First Name</div>
                    <div className="lastN">Last Name</div>
                    <div className="currentR">Current Role</div>
                </div>
                <div className="right">
                    <div className="address">Address</div>
                    <div className="phone">Phone Number</div>
                    <div className="email">E-mail</div>
                    <div className="linkedIn">LinkedIn</div>
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

export {Working};