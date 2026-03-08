import { render, screen } from "@testing-library/react";
import Programs from "../components/Programs";

describe("Programs Component", () => {
  it("should render without crashing", () => {
    render(<Programs />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("should render the section title", () => {
    render(<Programs />);
    expect(screen.getByText("Our Programs")).toBeInTheDocument();
  });

  it("should render all three program cards with correct titles", () => {
    render(<Programs />);
    expect(screen.getByText("Advanced Grammar")).toBeInTheDocument();
    expect(screen.getByText("Conversational Fluency")).toBeInTheDocument();
    expect(screen.getByText("Exam Preparation")).toBeInTheDocument();
  });

  it("should render descriptions for all program cards", () => {
    render(<Programs />);
    expect(
      screen.getByText(/Build a rock-solid foundation/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Build your speaking confidence/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Targeted strategies and rigorous practice/i),
    ).toBeInTheDocument();
  });

  it("should render Learn More links for each card", () => {
    render(<Programs />);
    const learnMoreLinks = screen.getAllByText(/Learn More/i);
    expect(learnMoreLinks).toHaveLength(3);
  });

  it("should have the correct section ID", () => {
    render(<Programs />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "programs");
  });
});
