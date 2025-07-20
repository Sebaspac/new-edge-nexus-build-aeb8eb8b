import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  try {
    const helmetContext = {};
    
    const html = ReactDOMServer.renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );
    
    return html;
  } catch (error) {
    console.error('SSR render error:', error);
    return '<div>Render Error</div>';
  }
}