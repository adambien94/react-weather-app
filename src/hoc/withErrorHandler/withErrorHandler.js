import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    componentDidMount() {}

    render() {
      return (
        <>
          <Modal show={false}>Something didn't work</Modal>
          <WrappedComponent {...this.props} />;
        </>
      );
    }
  };
};

export default withErrorHandler;
