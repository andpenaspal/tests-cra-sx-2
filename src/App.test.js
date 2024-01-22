import { render, screen } from '@testing-library/react';
import App from './App';


// Function to see what's in <head> styles. Seems that MUI injects the styles here.
const getElementStyleFromHead = (element) => {
  const sourceElementClassNames = [...element.classList.values()]; // get all the classNames for source element
  const styleTags = new DOMParser()
    .parseFromString(document.head.innerHTML, 'text/html')
    // eslint-disable-next-line testing-library/no-node-access
    .querySelectorAll('style'); // parse all style tags in head
  const styleTagsArray = [...styleTags.values()]; // convert NodeList to array
  const elementStyles = styleTagsArray.filter((style) =>
    sourceElementClassNames.some((className) =>
      style.innerHTML?.includes(className),
    ),
  ); // filter all matching classNames between sourceElementClassNames and the style tag

  return elementStyles.map((item) => item.innerHTML).join(''); // join all classes and parse it as one css string
};

  test('renders learn react link', () => {
    render(<App />);

    const checkElement = screen.getByText(/Test/i);
  
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug()
    expect(checkElement).toBeInTheDocument();
  
    const styles = getComputedStyle(checkElement);
    console.log('Get Computed Styles:', styles)
  
    const headStyles = getElementStyleFromHead(checkElement)
    console.log('Head Styles:', headStyles)
  
    expect(checkElement).toHaveStyle('background-color: blue');
  });
