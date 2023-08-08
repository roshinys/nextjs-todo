import "../styles/globals.css";
import Header from "@/components/Layout/Header";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
    // </React.StrictMode>
  );
}
