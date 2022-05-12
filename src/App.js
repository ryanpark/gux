import './App.css';
import dtipDweb from './images/dtipDweb.png';
import dtipMweb from './images/dtipMweb.png';
import itrcDweb from './images/itrcDweb.png';
import buttons from './images/button.png';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Ryan Park</p>
				<img src={dtipMweb} alt='logo' />
				<p></p>
				<img src={dtipDweb} alt='logo' />
				<img src={itrcDweb} alt='logo' />
				<img src={buttons} alt='logo' />
			</header>
		</div>
	);
}

export default App;
