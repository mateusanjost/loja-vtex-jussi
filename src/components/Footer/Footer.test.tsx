import TestRenderer from "react-test-renderer";
import FooterComponent from "./index";

describe("Footer", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<FooterComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
