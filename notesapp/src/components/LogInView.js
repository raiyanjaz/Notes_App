function LogInView(props) {
    return (
        <div className="log-in-section">
            <div className="log-in-text"> Log In to Notes </div>

            <div className="form-container">
                <form className="log-in-form">
                    <div className="form-field">
                        <label class="email" for="login-email"><span class="hidden">Email</span></label>
                        <input id="login-email" type="email" class="form-input" placeholder="Email" required />
                    </div>
                    <div className="form-field">
                        <label class="lock" for="login-password"><span class="hidden">Password</span></label>
                        <input id="login-password" type="password" class="form-input" placeholder="Password" required />
                    </div>
                    <div className="form-field">
                        <input type="submit" value="Log in" onClick={props.onClick} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogInView;