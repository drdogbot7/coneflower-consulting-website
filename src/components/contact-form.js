import React from "react";
import Recaptcha from "react-recaptcha";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contact" className="p-8 mt-16 text-white bg-purple">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-thin uppercase">Contact</h2>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xpzlqvwe"
            method="POST"
          >
            <label className="block mt-4">
              <span>Name*</span>
              <input
                name="user-name"
                required
                className="block w-full mt-1 form-input text-purple"
                placeholder="First Last"
              />
            </label>
            <label className="block mt-4">
              <span>Email*</span>
              <input
                name="_replyto"
                required
                type="email"
                className="block w-full mt-1 form-input text-purple"
                placeholder="you@excitingthings.org"
              />
            </label>
            <label className="block mt-4">
              <span>Phone</span>
              <input
                name="user-phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="block w-full mt-1 form-input text-purple"
                placeholder="123-456-7890"
              />
            </label>
            <label htmlFor="user-interest" className="block mt-4">
              <span>We're interested in</span>
              <select
                name="user-interest"
                className="block w-full mt-1 form-select text-purple"
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="Programming">Programming</option>
                <option value="Grant Writing">Grant Writing</option>
                <option value="Fundraising">Fundraising</option>
                <option value="Communications">Communications</option>
                <option value="Strategic Planning">Strategic Planning</option>
                <option value="Leadership">Leadership</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label htmlFor="user-message" className="block mt-4">
              <span>Message</span>
              <textarea
                name="user-message"
                rows="8"
                className="block w-full mt-1 form-input text-purple"
              />
            </label>
            <Recaptcha
              className="mt-4"
              sitekey="6LcKBPMUAAAAAJdAbp-ExMUbyI40Un2sXtHQ05XO"
            />
            {status === "SUCCESS" ? (
              <p>Thanks!</p>
            ) : (
              <button
                className="inline-block px-4 py-2 mt-4 text-black bg-lime hover:bg-orange"
                type="submit"
              >
                Submit
              </button>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }

}
