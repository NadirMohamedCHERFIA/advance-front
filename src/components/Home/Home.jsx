import React from 'react'
import { BsBricks } from "react-icons/bs";
import { BsBrowserSafari } from "react-icons/bs";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { BsDatabaseFill } from "react-icons/bs";
import { BsClipboardDataFill } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";

import motor from "../../assets/images/motor.png"
import airplane from "../../assets/images/airplane.png"


const Home = () => {
  return (
    <div style={{marginTop:'100px'}} className='text-light'>
        <img src={airplane} className="airplane-image" alt="" />
        <div className='container d-flex' >
            <div className="container w-55">
                <h1 className="container text-center py-3 d-flex flex-justify-end gap-3 font-size-90">
                    <span className="mb-5"><BsClipboardDataFill/></span>
                    ADVance
                </h1>
                <div className="row mb-3">
                    <div className="col-sm ">
                        <div className="h2">
                            <BsBricks/> Lorem, ipsum dolor
                        </div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro doloribus rem esse voluptates dignissimos fugiat eos velit. Architecto corporis, sapiente, ut, a tempore necessitatibus nostrum nulla molestias quos voluptates saepe!
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm ">
                        <div className="h2">
                            <BsBrowserSafari/> Lorem, ipsum dolor
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque nisi commodi hic repudiandae! Ea doloribus commodi saepe esse at, harum neque vitae nulla aliquam a. Esse perspiciatis eveniet sit.
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm ">
                        <div className="h2">
                            <BsCloudArrowDownFill/> Lorem, ipsum dolor
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque nisi commodi hic repudiandae! Ea doloribus commodi saepe esse at, harum neque vitae nulla aliquam a. Esse perspiciatis eveniet sit.
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm ">
                        <div className="h2">
                            <BsDatabaseFill/> Lorem, ipsum dolor
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium itaque nisi commodi hic repudiandae! Ea doloribus commodi saepe esse at, harum neque vitae nulla aliquam a. Esse perspiciatis eveniet sit.
                    </div>
                </div>
            </div>
            <form className="w-50 glass-effect d-flex flex-column gap-2">
                <h1 className="container ml-4 pt-4 text-center" style={{marginBottom:"60px"}}>
                    <img className='motor-rotate' src={motor} alt="" />
                     Sign in
                </h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    {/* <small id="emailHelp" class="form-text text-light">use your safran Email.</small> */}
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-check mb-4">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label " for="exampleCheck1">Remember me!</label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <span className='separator text-center'>Or</span>
                <button type="submit" class="btn btn-secondary"><FaWindows/> Windows auth</button>
                <div className="form-footer text-center pt-4">Couldn't connect?
                    <a href="/"> Contact us</a>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Home