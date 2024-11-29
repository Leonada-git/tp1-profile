import React from "react";
import profile from '../images/prf.png';

const Profile_card=()=>{
    return (<div><h1>Student Profile</h1>
    <div className="card1">
            <div className="card-top">
                <div>
                    <div className="image">
                        <img src={profile} alt="profile"/>
                    </div>
                    <p>Nom Prenom</p>
                </div>
            </div>
                <div className="card-body">
                    <p>Student ID:<span> 3210001</span></p>
                    <p>Class: <span> 4</span></p>
                    <p>Selection: <span>A</span></p>
                </div>
        </div>
    </div>)
}
const Info_table=()=>{
    return (<div className="card2">
        <h2>General Information</h2>
        <table className="tbl">
           <tbody>
                <tr>
                    <td>Roll</td>
                    <td>:</td>
                    <td>125</td>
                </tr>
                <tr>
                    <td>Academic Year</td>
                    <td>:</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td>Gender </td>
                    <td>:</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Religion</td>
                    <td>:</td>
                    <td>Group</td>
                </tr>
                <tr>
                    <td>Blood</td>
                    <td>:</td>
                    <td>B+</td>
                </tr>
           </tbody>
        </table>
    </div>)
}

const Other_info=()=>{
    return (<div className="card3">
        <h2>Other Information</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, et suscipit. Fugiat rem dolor soluta. Quaerat perferendis quidem accusantium eveniet minus non quas neque, eius hic sapiente, facilis fugiat laboriosam.</p>
    </div>)
}

const Profile_body=()=>{
    return(<div className="p_body">
        <Profile_card/>
        <Info_table/>
        <Other_info/>
</div>)
}
export default Profile_body;
