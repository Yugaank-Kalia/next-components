import Link from 'next/link';
import Image from 'next/image';
import icon from 'assets/images/icon-music.svg';
import product from 'assets/images/illustration-hero.svg';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-desaturated-blue'>
			<div className='flex flex-col bg-pale-blue-dark rounded-xl w-[400px]'>
				<Image src={product} alt='prod' className='rounded-t-xl' />
				<div className='flex flex-col gap-4 text-center items-center justify-center w-full py-5'>
					<h1 className='text-blue-dark text-3xl font-bold'>
						Order Summary
					</h1>
					<p className='text-blue-dark px-12'>
						You can now listen to millions of songs, audiobooks, and
						podcasts on any device anywhere you like!
					</p>
				</div>
				<div className='px-12'>
					<div className='flex py-4 gap-4 justify-center items-center bg-pale-blue-light rounded-lg'>
						<Image
							src={icon}
							alt='icon'
							width={200}
							className='h-10 w-10'
						/>
						<div className='flex flex-col gap-1'>
							<h1 className='font-bold'>Annual Plan</h1>
							<h2 className='text-desaturated-blue'>
								$59.99/year
							</h2>
						</div>
						<Link
							href={'/'}
							className='relative  text-blue-light underline decoration-dotted text-sm ml-14'
						>
							Change
						</Link>
					</div>
				</div>

				<div className='flex flex-col gap-6 items-center justify-center py-7'>
					<button className='bg-blue-light text-pale-blue-light font-semibold px-20 py-2 rounded-lg'>
						Proceed to Payment
					</button>
					<button className='text-desaturated-blue font-bold text-sm'>
						Cancel Order
					</button>
				</div>
			</div>
		</main>
	);
}
