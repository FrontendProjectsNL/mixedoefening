// pages/_app.js
import '../styles/globals.css';
import MegaMenu from '../components/MegaMenu';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header
        style={{ background: '#333', color: '#fff', padding: '10px 20px' }}
      >
        <h1>Creator Dashboard</h1>
        <MegaMenu />
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
