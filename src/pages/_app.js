import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/buttons.css';
import {ProvideAuth} from "../hooks/use-auth";

function MyApp({Component, pageProps}) {
    return (
        <ProvideAuth>
            <Component {...pageProps} />
        </ProvideAuth>
    );
}

export default MyApp;
