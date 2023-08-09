import Image from 'next/image';
import Link from 'next/link';
import bed from 'assets/bed-double-heart-svgrepo-com.svg';
import shower from 'assets/shower-svgrepo-com.svg';

const Star = () => {
	return (
		<svg
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			className='h-4 w-4 fill-current text-yellow-500'
		>
			<path d='M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z'></path>
		</svg>
	);
};

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-slate-700'>
			<div className='flex gap-4 pb-4 flex-col w-[500px] rounded-xl bg-cream hover:rounded-t-xl'>
				<div className='w-full overflow-hidden hover:rounded-t-xl'>
					<Image
						src='https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
						width={750}
						height={100}
						alt='property'
						className='rounded-t-xl hover:scale-110 transition cursor-pointer object-cover'
					/>
				</div>
				<div className='flex items-center justify-between pr-4'>
					<div className='flex py-4'>
						<h3 className='bg-orange-200 px-4 rounded-full uppercase font-medium text-xs py-1 ml-4'>
							Tampa Bay, Florida, USA
						</h3>
					</div>
					<div className='flex py-2 px-4 rounded-full bg-orange-200'>
						<div className='flex items-center'>
							<Image
								src={bed}
								alt='bed'
								height={50}
								className='h-7'
							/>
							<h3 className='font-medium text-xs'>6</h3>
						</div>
						<div className='flex items-center'>
							<Image
								src={shower}
								alt='shower'
								height={50}
								className='h-7'
							/>
							<h3 className='font-medium text-xs'>6</h3>
						</div>
					</div>
				</div>

				<div className='flex flex-col pl-6'>
					<h1 className='font-semibold'>
						Luxurious Villa in Tampa Bay Florida
					</h1>
					<p className='font-normal pb-4 text-xs'>
						Description of the Property
					</p>
				</div>
				<div className='flex items-center justify-between pl-6'>
					<h1 className='text-2xl font-semibold'>$ 499</h1>
					<div className='flex items-center'>
						<Star />
						<Star />
						<Star />
						<Star />
						<Star />
						<Link href='/' className='pr-4 flex gap-2'>
							<span className='text-sm font-medium underline decoration-dotted pl-1'>
								36 reviews
							</span>
						</Link>
					</div>
				</div>
				<div className='flex items-center justify-center py-4'>
					<button className='px-24 py-2 rounded-full bg-orange-200'>
						Book Now
					</button>
				</div>
			</div>
		</main>
	);
}
