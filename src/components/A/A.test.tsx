import TestRenderer from "react-test-renderer";
import AComponent from './index';


describe("AComponent", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<AComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
