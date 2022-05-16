import './App.css';
import dtipDweb from './images/dtipDweb.png';
import dtipMweb from './images/dtipMweb.png';
import itrcDweb from './images/itrcDweb.png';
import buttons from './images/button.png';
import gtau from './images/gumtree.png';
import Profiler from './images/pfr.png';
import E from './E';

function App() {
	return (
		<div className='App'>
			<div className='App-header container'>
				<div className='intro'>
					<img src={Profiler} alt='ryanparK' />
					<p>G'day, I'm Ryan Park 👋</p>
					<p>
						I'm a UI/UX Engineer & Designer Sydney, Australia.
						<br />
						I'm passionate about User Experience and building User Interface.
					</p>
				</div>

				<div className='flex-container'>
					<img src={dtipMweb} alt='Train location systems' />
					<span>&nbsp;</span>
					<img src={dtipDweb} alt='Train location systems' />
					<E> Train location systems - Design </E>
				</div>
				<img src={itrcDweb} alt='Reward recognition program' />
				<E> Reward recognition program - Design, Development </E>
				<img src={buttons} alt='Button Component' />
				<E> Button Component - Design </E>
				<img src={gtau} alt='gumtree' />
				<E> Gumtree Australia - Development </E>
				<p>🍄 2o22</p>
			</div>
		</div>
	);
}

export default App;
