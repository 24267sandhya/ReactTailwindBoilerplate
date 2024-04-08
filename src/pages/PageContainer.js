import React, { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import ResultPage from './ResultPage';

const PageContainer = () => {
  const { progress } = useContext(ProgressContext);

  // Determine which page component to render based on the progress value
  const getPageComponent = () => {
    switch (true) {
      case progress === 1:
        return <Page1 />;
      case progress === 2:
        return <Page2 />;
      case progress === 3:
        return <Page3 />;
      case progress === 4:
        return <Page4 />;
      case progress === 5:
        return <Page5 />;
      default:
        return <>
          <ResultPage/>
        </>
    }
  };

  return (
    <div className="page-container">
      {/* Render the appropriate page component based on progress */}
      {getPageComponent()}
    </div>
  );
};

export default PageContainer;
