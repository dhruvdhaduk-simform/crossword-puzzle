// Returns the element to render header.
function Header(): HTMLElement {
    const header = document.createElement('header');
    header.textContent = 'Crossword Puzzle';

    return header;
}

export default Header;
