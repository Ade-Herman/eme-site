import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar Component", () => {
  it("should render without crashing", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render the EME brand logo", () => {
    render(<Navbar />);
    expect(screen.getByText("EME")).toBeInTheDocument();
  });

  it("should render all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Programs")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should have correct href attributes on navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toHaveAttribute("href", "#home");
    expect(screen.getByText("About")).toHaveAttribute("href", "#about");
    expect(screen.getByText("Programs")).toHaveAttribute("href", "#programs");
    expect(screen.getByText("Contact")).toHaveAttribute("href", "#contact");
  });

  it("should have the correct class for the navbar", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toHaveClass("navbar");
  });
});
