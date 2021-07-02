import TestRenderer from "react-test-renderer";
import LazyImageComponent from "./index";

describe("LazyImage", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<LazyImageComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
