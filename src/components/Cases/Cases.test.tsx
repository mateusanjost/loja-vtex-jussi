import TestRenderer from "react-test-renderer";
import CasesComponent from "./Cases";

describe("Cases", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<CasesComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
