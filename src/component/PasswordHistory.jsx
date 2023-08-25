import React from 'react';



const PasswordHistory = ({ passwordHistory }) => {
    return (
        <div>
            <h4>Last 5 Generated Passwords:</h4>
            <ul>
                {passwordHistory.map((password, index) => (
                    <li key={index}>{password}</li>
                ))}
            </ul>
        </div>
    );
}

export default PasswordHistory;
