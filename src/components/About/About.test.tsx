import TestRenderer from "react-test-renderer";
import AboutComponent from "./About";

describe("About", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<AboutComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
