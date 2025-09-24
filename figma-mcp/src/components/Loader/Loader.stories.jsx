import React from "react";
import Loader from "./Loader";

export default {
  title: "Components/Loader",
  component: Loader,
};

export const Default = () => <Loader />;
export const Large = () => <Loader size={64} />;
export const Red = () => <Loader color="#e53935" />;
export const Fast = () => <Loader speed={0.6} />;
export const Custom = () => <Loader size={32} color="#009688" speed={2} />;

/**
 * Usage Example:
 *
 * ```jsx
 * import Loader from './components/Loader';
 * <Loader size={48} color="#333" speed={1.5} />
 * ```
 */
