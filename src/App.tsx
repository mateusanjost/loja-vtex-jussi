import Footer from "./components/Footer/";
import Header from "./components/Header";
import Routes from "./routes/index";

import GlobalStyle from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
