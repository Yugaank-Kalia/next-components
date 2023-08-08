import Image from 'next/image';
import SingleQuestion from './single-question';
import asset from 'assets/images/illustration-woman-online-mobile.svg';

const question_answer = [
	{
		key: '1',
		question: 'How many team members can I invite?',
		answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
	},
	{
		key: '2',
		question: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
	},
	{
		key: '3',
		question: 'How do I reset my password?',
		answer: `Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.`,
	},
	{
		key: '4',
		question: 'Can I cancel my subscription?',
		answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
	},
	{
		key: '5',
		question: 'Do you provide additional support?',
		answer: `Chat and email support is available 24/7. Phone lines are open
	during normal business hours.`,
	},
];

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-soft-violet to-soft-blue'>
			<div className='grid grid-cols-2 w-[700px] bg-greyish-blue-light rounded-2xl'>
				<div className='flex items-center justify-center'>
					<Image src={asset} alt='icon' height={200} width={300} />
				</div>
				<div className='p-12 flex flex-col'>
					<h1 className='text-2xl font-semibold text-dark-saturated-blue pb-6'>
						FAQ
					</h1>
					<div className='flex flex-col gap-4 pb-4'>
						{question_answer.map((ques_ans) => (
							<>
								<SingleQuestion
									key={ques_ans.key}
									question={ques_ans.question}
									answer={ques_ans.answer}
								/>
								<hr className='bg-greyish-blue-dark/20 h-[2px]' />
							</>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
