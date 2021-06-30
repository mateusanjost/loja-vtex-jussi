import TestRenderer from "react-test-renderer";
import HeaderComponent from "./index";

describe("Header", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<HeaderComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
