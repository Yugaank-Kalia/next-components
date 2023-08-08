'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import arrow from 'assets/images/icon-arrow-down.svg';

interface SingleQuestionProps {
	key: string;
	question: string;
	answer: string;
}

const SingleQuestion: FC<SingleQuestionProps> = ({ key, question, answer }) => {
	const [isActive, setActive] = useState(false);

	return (
		<div key={key}>
			{isActive ? (
				<>
					<div
						onClick={() => setActive(() => !isActive)}
						className='flex items-center justify-between cursor-pointer'
					>
						<p className='text-xs font-medium cursor-pointer text-dark-saturated-blue'>
							{question}
						</p>
						<button className='h-2 w-4 object-cover rotate-180 transition duration-300 ease'>
							<Image src={arrow} alt='arrow' className='' />
						</button>
					</div>
					<div
						onClick={() => setActive(() => !isActive)}
						className='pt-4'
					>
						<p className='text-xs text-greyish-blue-dark cursor-pointer'>
							{answer}
						</p>
					</div>
				</>
			) : (
				<>
					<div
						onClick={() => setActive((curr) => !isActive)}
						className='flex items-center justify-between cursor-pointer'
					>
						<p className='text-xs font-normal cursor-pointer text-greyish-blue-dark'>
							{question}
						</p>
						<button className='h-2 w-4 object-cover'>
							<Image src={arrow} alt='arrow' className='' />
						</button>
					</div>
					<div className='hidden'>
						<p className='text-xs text-greyish-blue-dark'>
							{answer}
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default SingleQuestion;
