import App from './components/App';

const root = document.querySelector('#root');
if (!root) {
    throw new ReferenceError("Couldn't find root element in this page.");
}

// Render the App component in root element.
root.append(App());
