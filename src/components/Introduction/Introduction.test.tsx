import TestRenderer from "react-test-renderer";
import IntroductionComponent from "./index";

describe("Introduction", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<IntroductionComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
