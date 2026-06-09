import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fallback client-side redirect: ensure the Netlify subdomain always
// 301-equivalent redirects to the production domain, preserving path,
// query string, and hash. This prevents duplicate-content indexing in
// case the Netlify domain-level _redirects rule does not apply.
if (
  typeof window !== 'undefined' &&
  window.location.hostname === 'manasanagaraj.netlify.app'
) {
  const { pathname, search, hash } = window.location;
  window.location.replace(`https://manasanagaraj.com${pathname}${search}${hash}`);
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
