import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<Loader />);
    expect(getByRole("status")).toBeInTheDocument();
  });

  it("accepts size, color, and speed props", () => {
    const { getByRole } = render(<Loader size={60} color="#ff0000" speed={2} />);
    const loader = getByRole("status");
    expect(loader).toHaveStyle({ width: "60px", height: "60px" });
    expect(loader.style.getPropertyValue('--mcp-loader-color')).toBe("#ff0000");
    expect(loader.style.getPropertyValue('--mcp-loader-speed')).toBe("2s");
  });
});
