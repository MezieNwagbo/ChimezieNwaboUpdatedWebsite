import React from "react";
import Link from "next/link";
import { CircularText } from "./Icons";

const CallMe = () => {
	return (
		<div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
			<div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
				<CircularText className='fill-dark animate-spin-slow dark:fill-light' />
				<Link
					href='https://api.whatsapp.com/send?phone=08163268879'
					target={"_blank"}
					className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full  hover:bg-light hover:text-dark
					
					dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
					hover:dark:border-light
					md:w-12 md:h-12 md:text-[10px]
					'
				>
					Say Hi
				</Link>
			</div>
		</div>
	);
};

export default CallMe;