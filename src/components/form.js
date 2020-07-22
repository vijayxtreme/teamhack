import React from 'react'

const Form = ({toggle=false})=>{
  return (
    <form className={`${toggle ? '':'uk-hidden'} uk-container-small uk-align-center uk-grid uk-padding`}>
      <h2 className={`uk-text-center`} style={{paddingBottom:`20px`}}>Sign Up</h2>
      <div className={`uk-flex uk-margin`}>
        <div className={`uk-width-1-2`}>
          <label htmlFor="first_name">
            <input className={`uk-input`} type="text" name="first_name" placeholder="First Name" />
          </label>
        </div>
        <div className={`uk-margin-left uk-width-1-2`}>
          <label htmlFor="last_name">
            <input className={`uk-input`} type="text" name="last_name" placeholder="Last Name" />
          </label>
        </div>
      </div>
      <div className={`uk-width-1-1`}>
        <label htmlFor="email">
          <input className={`uk-input uk-width-1-1 uk-margin`} type="text" name="email" placeholder="you@email.com" />
        </label>
        <br />
        <div className={`uk-flex`}>
          <a className="uk-button uk-button-default">Linkedin</a>
          <a className="uk-button uk-button-default uk-margin-left">Twitter</a>
          <a className="uk-button uk-button-default uk-margin-left">Github</a>
        </div>
        <br />
        <label htmlFor="website">
          <input className={`uk-input uk-width-1-1 uk-margin`} type="text" name="website" placeholder="Website URL" />
        </label>
      </div>
      <div>
        <h3>What technologies do you have experience with?</h3>
        <textarea className={`uk-textarea`} placeholder="Your input"></textarea>
        <h3>What days / times are you available in the week?</h3>
        <textarea className={`uk-textarea`} placeholder="Your input"></textarea>
        <h3>Coolest thing you did in the last year (projects wise)?</h3>
        <textarea className={`uk-textarea`} placeholder="Your input"></textarea>
        <h3>What do you hope to get out of this group?</h3>
        <textarea className={`uk-textarea`} placeholder="Your input"></textarea>
        <h3>Where do you see yourself in five years?</h3>
        <textarea className={`uk-textarea`} placeholder="Your input"></textarea>
        <h3>Any other comments?</h3>
        <textarea className={`uk-textarea`} placeholder="Your input"></textarea>
        <br />
        <button className={`uk-align-center uk-button uk-button-large uk-button-primary`} type="submit">Submit</button>
      </div>

    </form>
  )
}
export default Form
