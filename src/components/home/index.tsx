import React from 'react';
import AboutUs from './aboutUs';
import Banner from './banner';
import Faq from './faq';
// import Footer from './footer';
// import MainNavbar from './navbar';
import Register from './register';
import SafetyInstructions from './safetyInstructions';
import Subscribe from './subscribe';
import Process from './process';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div className='home'>
			<SafetyInstructions />
			<Banner />
			<Process />
			<Register />
			<AboutUs />
			<Subscribe />
			<Faq />
		</div>
	);
};

export default Home;
