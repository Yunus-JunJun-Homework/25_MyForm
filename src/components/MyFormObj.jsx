import React from 'react';

class MyFormObj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      address: null,
      city: null,
      country: null,
      acceptRules: null,
      formFilled: null,
    };
  }

  backHandler = () => {
    this.setState((state) => ({ formFilled: 'false' }));
  };

  formHandler = () => {
    this.setState((state) => ({ formFilled: 'true' }));
    // setTimeout(() => console.log(this.state), 1000);
  };

  handleChange = (event) => {
    const { target } = event;

    if (target.type === 'checkbox') {
      this.setState((state) => ({ acceptRules: target.checked.toString() }));
      // setTimeout(() => console.log(this.state), 1000);
    } else {
      this.setState((state) => ({ [target.name]: target.value }));
      // setTimeout(() => console.log(this.state), 1000);
    }
  };

  render() {
    if (this.state.formFilled === 'true') {
      const data = Object.entries(this.state);
      console.log(data);

      return (
        <div>
          <table className="table">
            <tbody>
              {data.sort().map(([key, value], index) => {
                return (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.backHandler}
          >
            Back
          </button>
        </div>
      );
    }

    return (
      <form name="myForm">
        <div className="col-md-6 mb-3 mt-5">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          >
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="ukraine">Ukraine</option>
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
                onChange={this.handleChange}
              />
              Accept Rules
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.formHandler}
          disabled={
            !this.state.email || !this.state.password || !this.state.address
          }
        >
          Sign in
        </button>
      </form>
    );
  }
}

export default MyFormObj;
