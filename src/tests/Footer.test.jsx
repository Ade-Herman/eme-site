import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("should render without crashing", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should render the EME brand text", () => {
    render(<Footer />);
    const brandText = screen.getAllByText("EME");
    expect(brandText.length).toBeGreaterThan(0);
  });

  it("should render the copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2026 EME English Course. All rights reserved./i),
    ).toBeInTheDocument();
  });

  it("should render the brand tagline", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        /Empowering you to master English with confidence, from essential grammar to fluent conversation/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render Quick Links section", () => {
    render(<Footer />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
  });

  it("should render all quick link items", () => {
    render(<Footer />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Our Programs")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should render Contact Info section", () => {
    render(<Footer />);
    expect(screen.getByText("Contact Info")).toBeInTheDocument();
  });

  it("should render phone number", () => {
    render(<Footer />);
    expect(screen.getByText("+62 123 4567 890")).toBeInTheDocument();
  });

  it("should render email address", () => {
    render(<Footer />);
    expect(screen.getByText("hello@eme-course.com")).toBeInTheDocument();
  });

  it("should render location", () => {
    render(<Footer />);
    expect(
      screen.getByText("Depok, Yogyakarta, Indonesia"),
    ).toBeInTheDocument();
  });

  it("should have correct href attributes on quick links", () => {
    render(<Footer />);
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About Us");
    const programsLink = screen.getByText("Our Programs");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).toHaveAttribute("href", "#home");
    expect(aboutLink).toHaveAttribute("href", "#about");
    expect(programsLink).toHaveAttribute("href", "#programs");
    expect(contactLink).toHaveAttribute("href", "#contact");
  });
});
