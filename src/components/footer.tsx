import * as React from 'react';

import { ReactComponent as Facebook } from '../icons/facebook.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
	return (
		<section className='footer'>
			<div className='info'>
				<div className='logo'>LOGO</div>
				<div className='links'>
					<div>Company</div>
					<div>Career</div>
				</div>
				<div className='links'>
					<div>Useful Links</div>
					<div>Pricing for teams</div>
					<div>Gift Cards</div>
					<div>Contact & Help</div>
				</div>
				<div className='social'>
					<div className='row'>
						<Twitter />
						<Linkedin />
					</div>
					<div className='row'>
						<Instagram />
						<Facebook />
					</div>
				</div>
			</div>

			<div className='navigation'>
				<div>© Lenden 2020</div>
				<div>Sitemap</div>
				<div>Disclaimer</div>
				<div>User Privacy</div>
				<div>Terms</div>
				<div>Applicant Privacy</div>
			</div>
		</section>
	);
};

export default Footer;