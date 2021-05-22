import React from 'react'

const Login = () => {
    return (
        <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center">
              <div className="card-header">
                <h3>SignIn</h3>
              </div>
              <img src="/img/logo.png" alt="Logo Fazt" className="card-img-top mx-auto m-2 rounded-circle w-50" />
              <div className="card-body">
                <form action="/signin" method="POST">
                  <div className="form-group">
                    <input type="text" name="username" placeholder="Username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <button className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login
