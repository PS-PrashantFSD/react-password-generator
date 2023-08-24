import React from 'react'

const PasswordGenerator = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning p-3">
                                <p className='h3'>Password Generator</p>
                            </div>
                            <div className="card-body bg-warning">
                                <form>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text'>Password</span>
                                            <input type='text' className='form-ctrl' placeholder='Password' />
                                            <span className='input-group-text'><i className='fa fa-clipboard'/></span>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='num' disabled={true} className='form-control' placeholder='Number' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled={true} className='form-control' placeholder='Uppercase Letters' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled={true} className='form-control' placeholder='Lowecase Letters' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className='input-group-text bg-white'>
                                                <input type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled={true} className='form-control' placeholder='Special Cahracters' />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <input type='submit' value='Generate' className='btn btn-outline-dark'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PasswordGenerator;