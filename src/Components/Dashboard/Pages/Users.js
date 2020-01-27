import React from "react";
import Layout from '../Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import './Users.scss'
const Users = () => {
  return (
    <Layout>
      <div id="page-content-wrapper">
        <div className="container-fluid">

          <div className="users-content">
            <div className="row">
              <h1 className="ad-dashbord col-10">Users</h1>
              <button type="button"
               className="btn btn-success bt-lg col-2"
               data-toggle="modal"
               data-target="#exampleModal"><span>+</span>User
              </button>
            </div>
          </div>


          {/* Start A Modal... */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                {/* Modal Boday... */}
                <div className="modal-body">

                  {/* UserName */}
                  <div className="form-group col-md-12">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-name">Name</label>
                    <input type="name" id="defaultForm-name" placeholder="Name" className="form-control validate"></input>
                  </div>

                  {/* Email Address */}
                  <div className="form-group col-md-12">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Email Address</label>
                    <input type="eamil" id="defaultForm-email" placeholder="Email Address" className="form-control validate"></input>
                  </div>

                  {/* Password */}
                  <div className="form-group col-md-12">
                    <i className="fas fa-lock prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Password</label>
                    <input type="password" id="defaultForm-pass" placeholder="Password" className="form-control validate"></input>
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group col-md-12">
                    <i className="fas fa-lock prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Confirm Password</label>
                    <input type="password" id="defaultForm-pass" placeholder="Confirm Password" className="form-control validate"></input>
                  </div>

                  {/* Users Group */}
                  <div className="form-group col-md-12">
                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Users Group</label>
                    <select id="role" name="role" className="form-control">
                      <option defaultValue="1" disabled>Users Group</option>
                      <option value='1'>Group A</option>
                      <option value='2'>Group B</option>
                    </select>
                  </div>
                </div>

                {/* Modal Footer... */}
                <div className="modal-footer flex-row-reverse">
                  <button type="button" className="btn btn-danger btt-save" data-dismiss="modal">CANCEL</button>
                  <button type="button" className="btn btn-success">SAVE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users;