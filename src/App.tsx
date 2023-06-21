import { useLocation } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import { createRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import { Home, About } from './pages/pages';
import './App.css';

const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef<HTMLDivElement>() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef<HTMLDivElement>() },
  { path: '/skills', name: 'Contact', element: <div>Skills</div>, nodeRef: createRef<HTMLDivElement>(), },
  { path: '/projects', name: 'Contact', element: <div>projects</div>, nodeRef: createRef<HTMLDivElement>(), },
]

function App() {

  const location = useLocation()
  const { nodeRef, element } = routes.find((route) => route.path === location.pathname) ?? {}

  return (
    <div className="App">
      <Header />
      <Menu />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={500}
          classNames="page"
        >
          <div ref={nodeRef} className="page">
            {element}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div >
  );
}

export default App;
