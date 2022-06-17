import React from 'react';
import { useState } from 'react';

const MyForm = () => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    acceptRules: false,
  });

  const changeStateEmail = (event) => {
    const value = event.target.value;
    setLoginState({ ...loginState, email: value });
    console.log(value);
  };

  const changeStatePassword = (event) => {
    const value = event.target.value;
    setLoginState({ ...loginState, password: value });
  };

  const changeStateAdress = (event) => {
    const value = event.target.value;
    setLoginState({ ...loginState, address: value });
    console.log(value);
  };

  const changeStateCity = (event) => {
    const value = event.target.value;
    setLoginState({ ...loginState, address: value });
    console.log(value);
  };

  const changeStateCountry = (event) => {
    const value = event.target.value;
    setLoginState({ ...loginState, address: value });
    console.log(value);
  };

  const changeStateCheckbox = (event) => {
    const value = event.target.checked;
    setLoginState({ ...loginState, acceptRules: value });
    console.log(value);
  };

  const changeButtonDisabled =
    !loginState.email || !loginState.password || !loginState.address;

  return (
    <form name="myForm">
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="col-form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={changeStateEmail}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="password" className="col-form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={changeStatePassword}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="address" className="col-form-label">
          Address
        </label>
        <textarea
          type="text"
          className="form-control"
          name="address"
          id="address"
          placeholder="1234 Main St"
          onChange={changeStateAdress}
        ></textarea>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="city" className="col-form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          name="city"
          id="city"
          onChange={changeStateCity}
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="country" className="col-form-label">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="form-control"
          onChange={changeStateCountry}
        >
          <option>Choose</option>
          <option value="argentina">Argentina</option>
          <option value="russia">Russia</option>
          <option value="china">China</option>
        </select>
      </div>
      <div className="col-md-6 mb-3">
        <div className="form-check">
          <label className="form-check-label" htmlFor="rules">
            <input
              id="rules"
              type="checkbox"
              name="acceptRules"
              className="form-check-input"
              onChange={changeStateCheckbox}
            />
            Accept Rules
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={changeButtonDisabled}
      >
        Sign in
      </button>
    </form>
  );
};

export default MyForm;
