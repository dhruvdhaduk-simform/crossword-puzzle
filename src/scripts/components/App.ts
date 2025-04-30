import Header from './Header';
import Game from './Game';

// Root component. Calls other components.
function App(): HTMLDivElement {
    const mainContainer = document.createElement('div');

    // Append Header and Game components.
    mainContainer.append(Header());
    mainContainer.append(Game());

    return mainContainer;
}

export default App;
