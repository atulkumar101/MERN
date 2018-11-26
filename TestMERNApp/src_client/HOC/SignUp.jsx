import React from 'react'

function SignUp (props) {
  const {onSubmit, onChange, showSignin} = props
  return (
    <div>
    <form onSubmit={onSubmit}>
        <h4> Sign Up</h4>
        <input
          id="email"
          type="email"
          name="email"
          onChange={onChange}
          className="validate"
         />
         <label htmlFor="email">Email</label>
         <input
           id="username"
           type="name"
           name="name"
           onChange={onChange}
           className="validate"
          />
         <label htmlFor="username">Username</label>
         <input
           id="password"
           type="password"
           name="password"
           onChange={onChange}
           className="validate"
          />
         <label htmlFor="password">Password</label>
          <input
           id="name"
           type="name"
           name="name"
           onChange={onChange}
           className="validate"
          />
         <label htmlFor="name">Name</label>
         <button
           type="submit"
           name="action"
          >
          Submit
         </button>
     </form>
      <div id="message"> Already have an account? <a
        href="#!"
        id="go-to-signup"
        onClick={showSignin}
      >Signin</a>
      </div>
    </div>
     )
}

export default SignUp;