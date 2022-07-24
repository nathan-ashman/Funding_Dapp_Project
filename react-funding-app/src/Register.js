function Register() {
    return(
        <form className="reg-login-form">
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
        </div>

        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
            <label for="floatingPassword">Confirm Password</label>
        </div>

    <button className="btn btn-success btn-login text-uppercase fw-bold mb-2" type="submit">Register</button>



    </form>
    )
}


export default Register;