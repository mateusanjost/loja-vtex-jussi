import TestRenderer from "react-test-renderer";
import ButtonComponent from "./index";


describe("Button", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<ButtonComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
