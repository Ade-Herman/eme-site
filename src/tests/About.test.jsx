import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About Component", () => {
  it("should render without crashing", () => {
    render(<About />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("should render the section title 'About EME'", () => {
    render(<About />);
    expect(screen.getByText("About EME")).toBeInTheDocument();
  });

  it("should render the first descriptive paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(
        /At EME, we believe that mastering a language requires both a strong foundation and the confidence to use it/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the second descriptive paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(
        /Whether you are dissecting advanced sentence structures or engaging in dynamic conversations/i,
      ),
    ).toBeInTheDocument();
  });

  it("should render the placeholder image with correct alt text", () => {
    render(<About />);
    const img = screen.getByAltText(/EME English learning environment/i);
    expect(img).toBeInTheDocument();
  });

  it("should have the correct section ID", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "about");
  });

  it("should render the yellow accent line", () => {
    render(<About />);
    const accentLine = screen
      .getByRole("region")
      .querySelector(".about-accent-line");
    expect(accentLine).toBeInTheDocument();
  });
});
