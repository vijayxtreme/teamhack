import React, {useState} from 'react'

const Form = ({setToggle})=>{
  let [formSubmitted, setFormSubmitted] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    const form = e.target;
    const data = new FormData(form)
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setFormSubmitted(true);
      } else {
        alert('Sorry there was an error at this time processing your info')
      }
    };
    xhr.send(data);

  }

  return (
    <form className={`hb-form uk-container-small uk-align-center uk-grid uk-padding`} onSubmit={submitForm} action="https://formspree.io/maypkpoj" method="POST">
      <h2 className={`${formSubmitted ? '':'uk-hidden'}`}>Thanks for signing up!</h2>
      <button type="button" className={`close-btn`} onClick={()=>{setToggle(false)}}>X</button>
      <h2 className={`uk-text-center`} style={{paddingBottom:`20px`}}>Sign Up</h2>
      <div className={`uk-flex uk-margin`}>
        <div className={`uk-width-1-2`}>
          <label htmlFor="first_name">
            <input className={`uk-input`} type="text" name="first_name" placeholder="First Name" required/>
          </label>
        </div>
        <div className={`uk-margin-left uk-width-1-2`}>
          <label htmlFor="last_name">
            <input className={`uk-input`} type="text" name="last_name" placeholder="Last Name" required/>
          </label>
        </div>
      </div>
      <div className={`uk-width-1-1`}>
        <label htmlFor="email">
          <input className={`uk-input uk-width-1-1 uk-margin`} type="text" name="email" placeholder="you@email.com" required/>
        </label>
        <h3>Your Social Profile:</h3>
        <label htmlFor="linkedin">
          <input className={`uk-input uk-width-1-1 uk-margin`} type="text" name="linkedin" placeholder="Linkedin URL" />
        </label>
        <br />
        <label htmlFor="twitter">
          <input className={`uk-input uk-width-1-1 uk-margin`} type="text" name="twitter" placeholder="Twitter URL" />
        </label>
        <br />
        <label htmlFor="github">
          <input className={`uk-input uk-width-1-1 uk-margin`} type="text" name="github" placeholder="Github URL" required/>
        </label>
        <br />
        <label htmlFor="website">
          <input className={`uk-input uk-width-1-1 uk-margin`} type="text" name="website" placeholder="Website URL" />
        </label>
      </div>
      <div>
        <h3>What technologies do you have experience with?</h3>
        <textarea className={`uk-textarea`} name="tech-exp" placeholder="Your input" required></textarea>
        <h3>What days / times are you available in the week?</h3>
        <textarea className={`uk-textarea`} name="availability" placeholder="Your input" required></textarea>
        <h3>Coolest thing you did in the last year (projects wise)?</h3>
        <textarea className={`uk-textarea`} name="coolest-thing" placeholder="Your input" required></textarea>
        <h3>What do you hope to get out of this group?</h3>
        <textarea className={`uk-textarea`} name="hope-wishes" placeholder="Your input" required></textarea>
        <h3>Where do you see yourself in five years?</h3>
        <textarea className={`uk-textarea`} name="five-years" placeholder="Your input" required></textarea>
        <h3>Any other comments?</h3>
        <textarea className={`uk-textarea`} name="etc" placeholder="Your input"></textarea>
        <br />
        <button className={`uk-align-center uk-button uk-button-large uk-button-primary`} type="submit">Submit</button>
      </div>

    </form>
  )
}
export default Form
