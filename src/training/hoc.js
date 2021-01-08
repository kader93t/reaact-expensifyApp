import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> the info is: {props.info}</p>
    </div>
);

const withAdminWarnning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>this is private info. please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    )};

const AdminInfo = withAdminWarnning(Info);
const requireAuthontication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuth ?
                    <div>
                        <p> this is the information </p>
                        <WrappedComponent {...props} />
                    </div> :
                    <p> please log in to view this info</p>
            }
            
        </div>
    );
}
const AuthInfo = requireAuthontication(Info);

//ReactDOM.render(<AdminInfo info= "Hey don't share this data"/> ,document.getElementById("appRoot"));
ReactDOM.render(<AuthInfo  isAuth={true} info= "Hey don't share this data"/> ,document.getElementById("appRoot"));