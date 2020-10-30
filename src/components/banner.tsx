import * as React from 'react';
import { ReactComponent as Barter } from '../icons/barter.svg';
import { ReactComponent as Bg } from '../icons/bg.svg';
import { Button } from 'react-bootstrap';

export interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
	return (
		<section className='banner'>
			<div className='title'>
				Your wants are precious to us. Tell us what you want and we’ll help you
				find it through barter.
				<Button>Register your Product</Button>
			</div>
			<Barter className='barter' />
			<Bg className='bg' />
		</section>
	);
};

export default Banner;
