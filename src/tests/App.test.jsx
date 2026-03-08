import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("should render without crashing", () => {
    render(<App />);
    expect(screen.getByText("Master English with Confidence.")).toBeInTheDocument();
  });

  it("should render the Navbar", () => {
    render(<App />);
    expect(screen.getByText("EME")).toBeInTheDocument();
  });

  it("should render the Hero section", () => {
    render(<App />);
    expect(screen.getByText(/Master English with Confidence/i)).toBeInTheDocument();
  });

  it("should render the About section", () => {
    render(<App />);
    expect(screen.getByText(/About EME/i)).toBeInTheDocument();
  });

  it("should render the Programs section", () => {
    render(<App />);
    expect(screen.getByText(/Our Programs/i)).toBeInTheDocument();
  });

  it("should render the WhatsApp button with correct attributes", () => {
    render(<App />);
    const whatsappLink = screen.getByLabelText(/Contact us on WhatsApp/i);
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render the Footer section", () => {
    render(<App />);
    expect(
      screen.getByText(/© 2026 EME English Course. All rights reserved./i)
    ).toBeInTheDocument();
  });
