import Header from './Header';

function App(): HTMLDivElement {
    const mainContainer = document.createElement('div');

    mainContainer.append(Header());

    return mainContainer;
}

export default App;
