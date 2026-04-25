import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

  it("should render all carousel slides", () => {
    render(<About />);
    const slides = screen.getAllByAltText(/Carousel slide/i);
    expect(slides.length).toBe(3);
  });

  it("should render carousel navigation buttons", () => {
    render(<About />);
    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });

  it("should advance to next slide when next button is clicked", async () => {
    render(<About />);
    const nextButton = screen.getByLabelText("Next slide");
    const carouselTrack = screen
      .getByRole("region")
      .querySelector(".carousel-track");

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(carouselTrack).toHaveStyle("transform: translateX(-100%)");
    });
  });

  it("should go to previous slide when prev button is clicked", async () => {
    render(<About />);
    const prevButton = screen.getByLabelText("Previous slide");
    const carouselTrack = screen
      .getByRole("region")
      .querySelector(".carousel-track");

    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(carouselTrack).toHaveStyle("transform: translateX(-200%)");
    });
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
