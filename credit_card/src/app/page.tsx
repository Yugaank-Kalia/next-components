'use client';

import Image from 'next/image';

import tick from 'assets/images/icon-complete.svg';
import cc_logo from 'assets/images/card-logo.svg';
import cc_back from 'assets/images/bg-card-back.png';
import cc_front from 'assets/images/bg-card-front.png';
import { useState } from 'react';

const Complete = () => {
	return (
		<div className='flex flex-col gap-2 justify-center items-center xl:max-w-xs'>
			<Image src={tick} alt='tick' />
			<h1 className='pt-4 uppercase tracking-widest text-3xl text-purple font-medium'>
				Thank you!
			</h1>
			<p className='pb-4 text-greyish-purple'>{`We've added your card details`}</p>
			<button
				type='submit'
				className='px-24 py-2 bg-purple text-white text-md rounded-[4px]'
			>
				Continue
			</button>
		</div>
	);
};

export default function Home() {
	const [cvc, setCvc] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [year, setYear] = useState<string>('');
	const [month, setMonth] = useState<string>('');
	const [number, setNumber] = useState<string>('');
	const [confirmed, setConfirmed] = useState(false);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300'>
			<div className='grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-20'>
				<div className='flex flex-col gap-4'>
					<div className='relative xl:right-20'>
						<Image
							src={cc_logo}
							alt='logo'
							className='absolute z-10 m-8'
						/>
						<h1 className='text-xl text-white absolute z-10 left-8 top-40'>
							{number?.length === 0
								? '0000 0000 0000 0000'
								: `${number}`}
						</h1>
						<h3 className='tracking-widest uppercase text-xs text-white absolute z-10 left-8 top-52'>
							{name?.length === 0 ? 'Jane Appleseed' : `${name}`}
						</h3>
						<h3 className='uppercase text-xs text-white absolute z-10 right-8 top-52'>
							{month?.length === 0 ? '00/00' : `${month}/${year}`}
						</h3>
						<Image src={cc_front} alt='cc_front' />
					</div>
					<div className='relative'>
						<h3 className='uppercase text-xs text-white absolute z-10 right-14 top-28'>
							{cvc?.length === 0 ? '000' : `${cvc}`}
						</h3>
						<Image src={cc_back} alt='cc_back' />
					</div>
				</div>
				{confirmed ? (
					<Complete />
				) : (
					<form className='flex flex-col gap-2 justify-center xl:max-w-xs'>
						<div className='flex flex-col gap-1'>
							<label
								htmlFor='name'
								className='uppercase text-[10px] tracking-widest font-medium text-purple'
							>
								Cardholder Name
							</label>
							<input
								onChange={(e) => setName(e.target.value)}
								id='name'
								type='text'
								className='rounded-[4px] h-10 text-xs pl-2 border-2'
								placeholder='e.g. Jane Appleseed'
								required
								value={name}
							/>
						</div>
						<div className='flex flex-col gap-1'>
							<label
								htmlFor='number'
								className='uppercase text-purple text-[10px] tracking-widest font-medium'
							>
								Card Number
							</label>
							<input
								onChange={(e) => setNumber(e.target.value)}
								id='number'
								type='text'
								placeholder='e.g. 1234 5678 9123 0000'
								className='rounded-[4px] h-10 text-xs pl-2 border-2'
								required
								value={number
									.replace(/\s/g, '')
									.replace(/(\d{4})/g, '$1 ')
									.trim()}
							/>
						</div>
						<div className='flex items-center gap-16'>
							<div className='flex'>
								<label
									htmlFor='month'
									className='uppercase text-purple text-[10px] tracking-widest font-medium'
								>
									Exp. Date (MM/YY)
								</label>
							</div>
							<label
								htmlFor='cvc'
								className='uppercase text-purple text-[10px] tracking-widest font-medium'
							>
								cvc
							</label>
						</div>
						<div className='flex gap-8'>
							<div className='flex gap-2'>
								<input
									type='month'
									id='month'
									placeholder='MM'
									className='w-16 rounded-[4px] h-10 text-xs pl-2 border-2'
									required
									value={month}
									onChange={(e) => setMonth(e.target.value)}
								/>
								<input
									type='year'
									id='year'
									placeholder='YY'
									className='w-16 rounded-[4px] h-10 text-xs pl-2 border-2'
									required
									value={year}
									onChange={(e) => setYear(e.target.value)}
								/>
							</div>
							<input
								type='text'
								id='cvc'
								placeholder='e.g. 123'
								className='rounded-[4px] h-10 text-xs pl-2 border-2 w-full'
								required
								value={cvc}
								onChange={(e) => setCvc(e.target.value)}
							/>
						</div>
						<div className='flex flex-col'></div>
						<div className='flex items-center justify-center'>
							<button
								onClick={() => setConfirmed(true)}
								className='w-full py-3 bg-purple text-white text-xs rounded-[4px]'
							>
								Confirm
							</button>
						</div>
					</form>
				)}
			</div>
		</main>
	);
}
