function LogInView() {
    return (
        <div className="log-in-section">
            <div className="log-in-text">
                Log In to Notes
            </div>
            <div className="form-container">
                <form className="log-in-form">
                    <input 
                        className="email-textbox"
                        type="email"
                        placeholder="Email Address"
                    />
                    <input 
                        className="password-textbox"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="log-in-button">
                        Log In 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LogInView;