import './App.css';
import dtipDweb from './images/dtipDweb.png';
import dtipMweb from './images/dtipMweb.png';
import itrcDweb from './images/itrcDweb.png';
import buttons from './images/button.png';
import gtau from './images/gumtree.png';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					G'day, I'm Ryan Park 👋 <br />
					I'm a UI Designer & Developer Sydney, Australia.
					<br /> I'm passionate about User Experience, and building products from concept to delivery.
				</p>
				<div className='flex-container'>
					<img src={dtipMweb} alt='logo' />
					<img src={dtipDweb} alt='logo' />
				</div>

				<p></p>

				<img src={itrcDweb} alt='logo' />
				<img src={buttons} alt='logo' />
				<p></p>
				<img src={gtau} alt='gumtree' />
				<p></p>
			</header>
		</div>
	);
}

export default App;
