import React from "react"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <div id="contact" className="bg-purple mt-16 p-8 text-white">
        <div className="mx-auto max-w-lg">
          <h2 className="font-thin uppercase text-2xl">Contact</h2>
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
                className="form-input mt-1 block w-full text-purple"
                placeholder="First Last"
              />
            </label>
            <label className="block mt-4">
              <span>Email*</span>
              <input
                name="_replyto"
                required
                type="email"
                className="form-input mt-1 block w-full text-purple"
                placeholder="you@excitingthings.org"
              />
            </label>
            <label className="block mt-4">
              <span>Phone</span>
              <input
                name="user-phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="form-input mt-1 block w-full text-purple"
                placeholder="123-456-7890"
              />
            </label>
            <label className="block mt-4">
              <span>We're interested in</span>
              <select
                name="user-interest"
                className="form-select mt-1 block w-full text-purple"
              >
                <option value="" disabled selected>Select your option</option>
                <option value="Programming">Programming</option>
                <option value="Grant Writing">Grant Writing</option>
                <option value="Fundraising">Fundraising</option>
                <option value="Communications">Communications</option>
                <option value="Strategic Planning">Strategic Planning</option>
                <option value="Leadership">Leadership</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="block mt-4">
              <span>Message</span>
              <textarea
                name="user-message"
                rows="8"
                className="form-input mt-1 block w-full text-purple"
              />
            </label>
            {status === "SUCCESS" ? (
              <p>Thanks!</p>
            ) : (
              <button
                className="inline-block px-4 py-2 bg-lime text-black mt-4 hover:bg-orange"
                type="submit"
              >
                Submit
              </button>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
