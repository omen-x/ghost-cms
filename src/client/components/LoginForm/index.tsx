import React, { Component, FormEvent } from 'react';
import { FormError, LoginFormTitle, LoginFormWrap } from './styled';
import { CommonError } from '../../../server/utils/errors';


interface State {
  email?: string;
  password?: string;
  error?: string;
}

interface LoginResponse {
  ok?: boolean;
  url: string;
  json: Function;
}

class LoginForm extends Component<{}, State> {
  private constructor(props: object) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  private updateField = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value, error: '' });
  };

  private onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    Promise.resolve()
      .then((): Promise<LoginResponse> => fetch('/login', {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      }))
      .then((response): void => {
        if (response.ok) {
          window.location.href = response.url;
        } else {
          return response.json()
            .then((e: CommonError): void => {
              if (e.uiMessage) this.setState({ error: e.uiMessage });
            });
        }
      });
  };

  public render(): JSX.Element {
    const { email, password, error } = this.state;

    return (
      <LoginFormWrap onSubmit={this.onSubmit}>
        <LoginFormTitle>Sign In</LoginFormTitle>
        {error && <FormError>{error}</FormError>}
        <label htmlFor="user-email">
          Your Email
        </label>
        <input
          id="user-email"
          name="email"
          type="email"
          value={email}
          onChange={this.updateField}
        />
        <label htmlFor="user-password">
          Your Password
        </label>
        <input
          id="user-password"
          name="password"
          type="password"
          value={password}
          onChange={this.updateField}
        />
        <button type="submit">
          Submit
        </button>
      </LoginFormWrap>
    );
  }
}


export default LoginForm;
