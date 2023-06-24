function withConsoleLog(Component) {
  function WrappedComponent(props) {

    return (
      <>
        <Component {...props} />
      </>
    );
  }
  return WrappedComponent;
}

export default withConsoleLog;
