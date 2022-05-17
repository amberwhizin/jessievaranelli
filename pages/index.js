import Mobile from './mobile/index.js';

const Home = (props) => {
  const showMobile = {
    display: props.mobileWidth ? 'flex' : 'none',
  };
  const showDesktop = {
    display: props.mobileWidth ? 'none' : 'flex',
  };

  return (
    <>
    {/* home */}
      <div style={showDesktop}>
        <h1>Desktop</h1>
      </div>
      {/* mobile home */}
      <div style={showMobile}>
        <Mobile />
      </div>
    </>
  );
};

export default Home;
