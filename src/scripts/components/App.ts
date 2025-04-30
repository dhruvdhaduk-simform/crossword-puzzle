import Header from './Header';
import Game from './Game';

function App(): HTMLDivElement {
    const mainContainer = document.createElement('div');

    mainContainer.append(Header());
    mainContainer.append(Game());

    return mainContainer;
}

export default App;
