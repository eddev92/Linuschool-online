import React, { Component } from 'react';
import HomeComponent from '../../components/home';
import './index.css';

export class ILoginComponentModel {
    username;
    password;
}

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: ILoginComponentModel = {
                username:'',
                password:''
            }
        }
    }
  render() {
      const {model} = this.state;
    return (
      <div className="login">
            <div className="container">
                <div className="row">
                    
                        <div className="col-xs-12 col-sm-8 col-md-5 login-form">
                                <div className="card">

                                    <div className="card-body">
                                        <div className="form-header blue accent-1 title">
                                            <h3>BIENVENIDO</h3>
                                        </div>
                                        <br/>
                                        <div className="md-form">
                                            <i className="fa fa-user prefix grey-text"></i>
                                            <input type="text" id="form-name" className="form-control" value={model.username}></input>
                                            <label for="form-name">Usuario</label>
                                        </div>

                                        <div className="md-form">
                                            <i className="fa fa-envelope prefix grey-text"></i>
                                            <input type="password" id="form-email" className="form-control" value={model.password}></input>
                                            <label for="form-email">Password</label>
                                        </div>

                                        <div className="text-center">
                                            <button className="btn btn-light-blue">Entrar</button>
                                        </div>

                                    </div>

                                </div>
                        </div>                    
                </div>
            </div>
      </div>
    );
  }
}

export default LoginComponent;