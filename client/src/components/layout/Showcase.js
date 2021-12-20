import React from "react";
import "./Showcase.css";
import { Link } from "react-router-dom";

const Showcase = () => {
	return (
		<div className='showcase'>
			<div className='img1 overlay flex-2 flex items-center justify-center'>
				<div className='z-10 text-white'>
					<div className='mb-10'>
						<div>
							<h2 className='text-xl font-light uppercase'>up to</h2>
							<div></div>
						</div>
						<div className='flex items-center gap-5'>
							<h1 className='text-8xl text-gray-200 font-bold'>50</h1>
							<div className='flex flex-col'>
								<span className='text-4xl text-gray-200'>%</span>
								<span className='text-3xl font-light'>OFF</span>
							</div>
						</div>
					</div>
					<h1 className='text-6xl font-bold uppercase'>huge sale</h1>
					<h3 className='text-xl font-light uppercase'>
						starting now at $99.99
					</h3>

					<Link
						to='/products'
						className='bg-secondary-900 inline-block mt-5 uppercase py-2 px-5 hover:opacity-75 transition-opacity'
					>
						shop now
					</Link>
				</div>
			</div>

			<div className='flex-1 hidden sm:flex sm:flex-col sm:gap-4'>
				<div className='img2 flex-1'></div>

				<div className='img3 flex-1'></div>
			</div>

			<div className='img4 flex-1 lg:block hidden'></div>
		</div>
	);
};

export default Showcase;
