import React, { useState, useEffect } from 'react'
import  {RandomPassword}  from '../utils/passwordLogic'
import PasswordHistory from './PasswordHistory';
import './css/passwordGen.css'

const PasswordGenerator = () => {
    
    let [state, setState] = useState({generatedPassword : "",passwordLength: 10,number : false,
    upper: false,lower:false,symbol: false
    })

    //error Handler
    let [showMissingOptionsError, setShowMissingOptionsError] = useState(false); 

    //Password History
    let [passwordHistory, setPasswordHistory] = useState([]);
    useEffect(() => {
        const storedHistory = localStorage.getItem('passwordHistory');
        if (storedHistory) {
            setPasswordHistory(JSON.parse(storedHistory));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('passwordHistory', JSON.stringify(passwordHistory));
    }, [passwordHistory]);

    //input 
    let updateInput = (e) => {setState({...state, 
            [e.target.name] : e.target.value
        })
    }
    let updateCheckbox = (e) => {setState({...state,
            [e.target.name] : e.target.checked
        })
        setShowMissingOptionsError(false)
    }

    //Submit Handler
    let submit = (e) => {
        e.preventDefault();

        if (!state.number && !state.upper && !state.lower && !state.symbol) {
            setShowMissingOptionsError(true);
            return;
        }
       
        let passwordObject = RandomPassword.getPasswordObject(state);
        let genPassword = RandomPassword.generatePassword(passwordObject, state.passwordLength);
        setPasswordHistory([genPassword, ...passwordHistory].slice(0, 5));
        setState({...state, generatedPassword:genPassword});
        setShowMissingOptionsError(false);
        
    }

    // To Copy the Code
    let copyToClipboard = () => {
        navigator.clipboard.writeText(state.generatedPassword);
    };
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg">
                            <div className="card-header p-3">
                                <p className='h3'>Password Generator</p>
                            </div>
                            <div className="card-body ">
                                <form onSubmit={submit}>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text'>Password</span>
                                            <input value={state.generatedPassword}  onChange={updateInput}
                                            name='generatedPassword'
                                            type='text' className='form-control' placeholder='Password' />
                                            <span onClick={copyToClipboard} className='input-group-text cursor-pointer'>
                                                <i class="fa-solid fa-copy"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input 
                                                onChange={updateCheckbox}
                                                name='number'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled  className='form-control' placeholder='Number' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input 
                                                onChange={updateCheckbox}
                                                name='upper'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled className='form-control' placeholder='Uppercase Letters' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input 
                                                onChange={updateCheckbox}
                                                name='lower'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled  className='form-control' placeholder='Lowecase Letters' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input 
                                                onChange={updateCheckbox}
                                                name='symbol'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled className='form-control' placeholder='Special Cahracters' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <input type='submit' value='Generate Password' className='btn btn-outline-dark'/>
                                        {showMissingOptionsError && (
                                            <p className="text-danger mt-2">Please select at least one option.</p>
                                        )}
                                    </div>
                                </form>
                                <div>
                                <PasswordHistory passwordHistory={passwordHistory} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PasswordGenerator;