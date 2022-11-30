import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h1>I'm a heading</h1>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
