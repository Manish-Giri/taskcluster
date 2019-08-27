import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { parse } from 'qs';
import { object, arrayOf } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RouteWithProps from '../components/RouteWithProps';
import ErrorPanel from '../components/ErrorPanel';
import { route } from '../utils/prop-types';
import { withAuth } from '../utils/Auth';
import isThirdPartyLogin from '../utils/isThirdPartyLogin';
import isLoggedInQuery from './isLoggedIn.graphql';

@withApollo
@withStyles(theme => ({
  '@global': {
    [[
      'input:-webkit-autofill',
      'input:-webkit-autofill:hover',
      'input:-webkit-autofill:focus',
      'input:-webkit-autofill:active',
    ].join(',')]: {
      transition:
        'background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s',
      transitionDelay: 'background-color 5000s, color 5000s',
    },
    '.mdi-icon': {
      fill: theme.palette.text.primary,
    },
    '.CodeMirror': {
      fontSize: 13,
      height: '100% !important',
    },
    '[disabled] .mdi-icon': {
      fill: theme.palette.primary.light,
    },
    a: {
      color: theme.palette.text.primary,
    },
    'html, body': {
      color: theme.palette.text.secondary,
    },
    pre: {
      overflowX: 'auto',
    },
    ':not(pre) > code': {
      ...theme.mixins.highlight,
    },
  },
}))
@withAuth
export default class Main extends Component {
  static propTypes = {
    error: object,
    routes: arrayOf(route).isRequired,
  };

  static defaultProps = {
    error: null,
  };

  shouldStartOauth2LoginFlow() {
    const query = parse(window.location.search.slice(1));

    if (
      query.client_id &&
      query.response_type &&
      query.scope &&
      query.redirect_uri
    ) {
      return true;
    }

    return false;
  }

  // Called on user change because of <App key={auth.user} ... />
  async componentDidMount() {
    const { user, onUnauthorize } = this.props;
    const { data } = await this.props.client.query({
      query: isLoggedInQuery,
      fetchPolicy: 'network-only',
    });
    const thirdPartyLogin = isThirdPartyLogin();

    if (
      user &&
      user.identityProviderId !== 'manual' &&
      data &&
      data.isLoggedIn === false
    ) {
      onUnauthorize();
    }

    // Users who were logged in earlier manually will be logged out in order to
    // be able to complete the third party login flow.
    if (user && user.identityProviderId === 'manual' && thirdPartyLogin()) {
      onUnauthorize();
    }

    if (user && thirdPartyLogin) {
      window.location.href = `${window.location.origin}/login/oauth/authorize${
        window.location.search
      }`;
    }
  }

  render() {
    const { error, routes } = this.props;

    return (
      <Fragment>
        <ErrorPanel fixed error={error} />
        <BrowserRouter>
          <Switch>
            {routes.map(({ routes, ...props }) => (
              <RouteWithProps key={props.path || 'not-found'} {...props} />
            ))}
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
