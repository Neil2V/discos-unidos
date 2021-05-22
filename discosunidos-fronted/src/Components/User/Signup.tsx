import React from 'react'

const Signup = () => {
    return (
        <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center">
              <div className="card-header">
                <h3>SignUp</h3>
              </div>
              <div className="card-body">
                <form action="/Signup" method="POST">
                  <div className="form-group">
                    <input type="type" name="email" placeholder="Email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="username" placeholder="Username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success btn-block">
                      SingUp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Signup