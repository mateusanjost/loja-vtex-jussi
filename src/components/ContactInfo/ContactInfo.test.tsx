import TestRenderer from "react-test-renderer";
import ContactInfoComponent from "./ContactInfo";

describe("Contact Info", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<ContactInfoComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
