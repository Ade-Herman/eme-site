import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero Component", () => {
  it("should render without crashing", () => {
    render(<Hero />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("should render the main headline", () => {
    render(<Hero />);
    expect(
      screen.getByText("Master English with Confidence."),
    ).toBeInTheDocument();
  });

  it("should render the subheadline text", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /From mastering essential grammar like relative clauses and verb tenses to fluent, real-world conversations/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the CTA button with correct text", () => {
    render(<Hero />);
    expect(screen.getByText("Explore Programs")).toBeInTheDocument();
  });

  it("should have the correct button class", () => {
    render(<Hero />);
    const button = screen.getByText("Explore Programs");
    expect(button).toHaveClass("cta-button");
  });

  it("should render button as a button element", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Explore Programs/i });
    expect(button).toBeInTheDocument();
  });

  it("should have correct hero section ID", () => {
    render(<Hero />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "home");
  });
});
