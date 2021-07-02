import TestRenderer from "react-test-renderer";
import NewsletterComponent from "./Newsletter";

describe("Newsletter", () => {
  it("should match snapshot", () => {
    const testRenderer = TestRenderer.create(<NewsletterComponent />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
