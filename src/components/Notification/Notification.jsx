import PropTypes from 'prop-types';

export default function Section({ message }) {
  return <p>{message}</p>;
}

Section.propTypes = {
  message: PropTypes.string.isRequired,
};
