// analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('AW-11474915824'); 
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
