import React from "react";
import Layout from '../../Layout';
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
               class="btn btn-success bt-lg col-2"
               data-toggle="modal"
               data-target="#exampleModal"><span>+</span>User
              </button>
            </div>
          </div>


          {/* Start A Modal... */}
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add New User</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                {/* Modal Boday... */}
                <div class="modal-body">

                  {/* UserName */}
                  <div class="form-group col-md-12">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="defaultForm-name">Name</label>
                    <input type="name" id="defaultForm-name" placeholder="Name" class="form-control validate"></input>
                  </div>

                  {/* Email Address */}
                  <div class="form-group col-md-12">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="defaultForm-email">Email Address</label>
                    <input type="eamil" id="defaultForm-email" placeholder="Email Address" class="form-control validate"></input>
                  </div>

                  {/* Password */}
                  <div class="form-group col-md-12">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
                    <input type="password" id="defaultForm-pass" placeholder="Password" class="form-control validate"></input>
                  </div>

                  {/* Confirm Password */}
                  <div class="form-group col-md-12">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Confirm Password</label>
                    <input type="password" id="defaultForm-pass" placeholder="Confirm Password" class="form-control validate"></input>
                  </div>

                  {/* Users Group */}
                  <div class="form-group col-md-12">
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Users Group</label>
                    <select id="role" name="role" class="form-control">
                      <option selected disabled>Users Group</option>
                      <option value='1'>Group A</option>
                      <option value='2'>Group B</option>
                    </select>
                  </div>
                </div>

                {/* Modal Footer... */}
                <div class="modal-footer flex-row-reverse">
                  <button type="button" class="btn btn-danger btt-save" data-dismiss="modal">CANCEL</button>
                  <button type="button" class="btn btn-success">SAVE</button>
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