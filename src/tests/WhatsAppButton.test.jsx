import { render, screen } from "@testing-library/react";
import WhatsAppButton from "../components/WhatsAppButton";

describe("WhatsAppButton Component", () => {
  it("should render without crashing", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("should render as an anchor link", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link.tagName).toBe("A");
  });

  it("should have the correct WhatsApp URL with wa.me protocol", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link.href).toContain("wa.me");
  });

  it("should have target='_blank' for security", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should have rel='noopener noreferrer' for security", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should have proper aria-label for accessibility", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("aria-label", "Contact us on WhatsApp");
  });

  it("should have correct CSS class for styling", () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("whatsapp-fab");
  });

  it("should contain the WhatsApp icon", () => {
    render(<WhatsAppButton />);
    const iconContainer = screen
      .getByRole("link")
      .querySelector(".whatsapp-icon");
    expect(iconContainer).toBeInTheDocument();
  });
});
