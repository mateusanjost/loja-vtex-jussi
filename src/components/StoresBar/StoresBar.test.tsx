import TestRenderer from "react-test-renderer";
import StoresBarComponent from "./StoresBar";

describe("Stores Bar", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<StoresBarComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
