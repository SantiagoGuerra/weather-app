import SearchInput from './SearchInput';

export default function App() {
  const HeaderLayout = document.querySelector('#header');

  HeaderLayout.appendChild(SearchInput('search-input'));
}
