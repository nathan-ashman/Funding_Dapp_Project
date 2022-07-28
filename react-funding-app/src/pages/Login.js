function Login() {
    return (
        <form className="reg-login-form">
            <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com" 
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input 
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password" 
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check mb-3">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="" 
                    id="rememberPasswordCheck" 
                />
                <label 
                    className="form-check-label" 
                    htmlFor="rememberPasswordCheck"
                >
                    Remember password
                </label>
            </div>
            <div className="d-grid">
                <button 
                    className="btn btn-success btn-login text-uppercase fw-bold mb-2" 
                    type="submit"
                >
                    Sign in
                </button>
                <div className="text-center">
                    <a className="small" href="#">Forgot password?</a>
                </div>
            </div>
        </form>
    );
}

export default Login;