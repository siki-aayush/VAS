import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './../Login';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import { MemoryRouter } from 'react-router-dom';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

it('should render the title username and a password', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  );
  const heading = screen.getByRole('heading');
  const username = screen.getByLabelText('Username');
  const password = screen.getByLabelText('Password');
  expect(heading).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});
