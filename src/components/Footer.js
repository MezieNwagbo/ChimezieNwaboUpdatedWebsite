import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
			<Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
				<span>Chimezie Nwagbo</span>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<Link
					href='mailto:chimezienwago@gmail.com'
					target={"_blank"}
					className='underline underline-offset-2'
				>
					Contact me
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
