import React, { Component } from 'react';

import LoadingIndicator from '../LoadingIndicator';

const withLoadingDelay = (WrappedComponent) => {
  return class extends Component {
    _isMounted = false;

    state = {
      isLoading: true,
    };

    componentDidMount() {
      this._isMounted = true;
      setTimeout(() => {
        if (this._isMounted) {
          this.setState({ isLoading: false });
        }
      }, 2000);
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      // console.log(this.props);
      if (this.state.isLoading) return <LoadingIndicator />;
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoadingDelay;
