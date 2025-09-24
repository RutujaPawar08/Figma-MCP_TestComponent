import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

/**
 * Loader animation component
 * @param {Object} props
 * @param {number|string} [props.size=40] - Loader size in px or CSS units
 * @param {string} [props.color="#333333"] - Loader color (SVG fill or CSS color)
 * @param {number} [props.speed=1.2] - Animation speed in seconds
 * @returns {JSX.Element}
 */
function Loader({ size = 40, color = "#333333", speed = 1.2, className = "", ...rest }) {
  return (
    <span
      className={`mcp-loader ${className}`}
      style={{ width: size, height: size, '--mcp-loader-color': color, '--mcp-loader-speed': `${speed}s` }}
      role="status"
      aria-label="loading"
      {...rest}
    >
      <span className="mcp-loader__spinner" />
    </span>
  );
}

Loader.propTypes = {
  /** Loader size in px or CSS units */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Loader color (SVG fill or CSS color) */
  color: PropTypes.string,
  /** Animation speed in seconds */
  speed: PropTypes.number,
  /** Additional className for custom styling */
  className: PropTypes.string,
};

export default Loader;
