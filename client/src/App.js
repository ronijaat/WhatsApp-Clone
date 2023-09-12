import { GoogleOAuthProvider } from '@react-oauth/google';
import Massenger from './components/Massenger';
import { ContextProvider } from "./context/AccountProvider"
import './App.css';

function App() {
  const clientId = "95342564366-sbmvdjv7jo7cbdbtmju1u911lb7j3lia.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <ContextProvider>
        <Massenger />
      </ContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
