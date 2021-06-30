import TestRenderer from "react-test-renderer";
import NavbarComponent from "./index";

describe("Navbar", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<NavbarComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
