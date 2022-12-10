import React from 'react';
import ButtonCompont from '../../../ButtonCompont/ButtonCompont';

const Concate = () => {
    return (
        <div>
            <div className="w-1/2 m-auto py-16">
                <div className=" flex-col ">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="input input-bordered" name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <ButtonCompont>Submit</ButtonCompont>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Concate;