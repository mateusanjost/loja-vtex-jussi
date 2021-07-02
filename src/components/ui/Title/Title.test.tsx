import TestRenderer from "react-test-renderer";
import TitleComponent from "./Title";


describe("Title", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<TitleComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
