import "./style/login.css";

export default function Login() {
  return (
    <div className="testbo">
      <div className="loginForm">
        <div className="bg-login">
          <img src="./imgg/bg.jpeg" alt="" />
        </div>
        <div className="allbox-login">
          <div className="formlogin">
            <div className="bigtt">
              <h1>Welcome Back</h1>
              <p>Enter your email and password to access your account</p>
            </div>
            <div className="inp-form-login">
              <div className="inp-label">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="newpass-checkbox">
                <div className="remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">remamber me</label>
                </div>
                <div className="forgetpassword">
                  <a href="#">Forgot Password ?</a>
                </div>
              </div>
              <div className="btn-login">
                <button>Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
