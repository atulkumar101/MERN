import React from 'react';

function SignIn(props) {
  const {onChange, onSubmit, showSignup } = props;
  return (
    <div>
        <form onSubmit={onSubmit}>
            <h4> Sign In </h4>
            <input
            id="email"
            type="email"
            name="email"
            onChange={onChange}
            className="validate"
            />
            <label htmlFor="email">Email</label>

            <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            className="validate"
            />
            <label htmlFor="password">Password</label>

            <button
            type="submit"
            name="action"
            >
            Submit
            </button>
        </form>
        <div id="message"> Don&apos;t have an account? <a
            href="#!"
            id="go-to-signup"
            onClick={showSignup}>Signup</a>
        </div>
    </div>
    );
}

export default SignIn
