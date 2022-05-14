import './App.css';
import dtipDweb from './images/dtipDweb.png';
import dtipMweb from './images/dtipMweb.png';
import itrcDweb from './images/itrcDweb.png';
import buttons from './images/button.png';
import gtau from './images/gumtree.png';
import E from './E';

function App() {
	return (
		<div className='App'>
			<div className='App-header container'>
				<div className='intro'>
					<p>
						G'day, I'm Ryan Park 👋 <br />
						I'm a UI Designer & Developer Sydney, Australia.
						<br /> I'm passionate about User Experience, and building products from concept to delivery.
					</p>
				</div>

				<div className='flex-container'>
					<img src={dtipMweb} alt='logo' />
					<img src={dtipDweb} alt='logo' />
					<E> Train location systems - Design </E>
				</div>
				<img src={itrcDweb} alt='logo' />
				<E> Reward recognition program - Design, Development </E>
				<img src={buttons} alt='logo' />
				<E> Button Component - Design </E>
				<img src={gtau} alt='gumtree' />
				<E> Gumtree Australia - Development </E>
			</div>
		</div>
	);
}

export default App;
