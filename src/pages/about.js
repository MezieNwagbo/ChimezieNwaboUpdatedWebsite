import React, { useRef, useEffect } from "react";

import Head from "next/head";
import Skills from "@/components/Skills";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profile/Mezie_nwagbo.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<Head>
				<title>Chimezie Nwagbo | About Page</title>
				<meta
					name='description'
					content='Chimezie Nwagbo software developer about page'
				/>
			</Head>
			<TransitionEffect />

			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Creativity & Empathy'
						className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
					/>
					<div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
						<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
							<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
								About me
							</h2>
							<p className='my-4 font-medium'>
								{" "}
								Hi, I&apos;m Chimezie Nwagbo, a{" "}
								<span className='font-bold text-dark/75'>skilled</span> software
								developer dedicated to bringing ideas to life. With over 5 years
								of industry experience, I possess a strong foundation in
								cutting-edge technologies and a knack for staying ahead of the
								curve.
							</p>

							<p className='my-4 font-medium'>
								{" "}
								<span className='font-bold text-dark/75'>Creativity</span> is at
								the core of my problem-solving approach. I thrive on finding
								innovative solutions that tackle complex challenges head-on.
								However, my true strength lies in my{" "}
								<span className='font-bold text-dark/75'>empathy </span>
								towards clients and customers. I genuinely listen to their
								unique needs and collaborate closely to provide tailored
								solutions that go beyond their expectations.
							</p>

							<p className='my-4 font-medium'>
								With a proven track record of success, I am committed to making
								a meaningful impact in my customers&apos; business. By
								leveraging my experience, creativity, and client-centric
								mindset, I consistently deliver outstanding results as Chimezie
								Nwagbo, a dedicated software developer.
							</p>
						</div>

						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
							<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'></div>
							<Image
								src={profilePic}
								alt='Codebucks'
								className='w-full h-auto rounded-2xl'
								priority
								sizes='(max-width: 768px) 100vw, (max-width:1200px)50vw, 33vw'
							/>
						</div>

						<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center order-3'>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									<AnimatedNumbers value='5' />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
									years of experience
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									{" "}
									<AnimatedNumbers value='100' />%
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
									project completion
								</h2>
							</div>
							<div className='flex flex-col items-end justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									{" "}
									<AnimatedNumbers value='96' />%
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
									customer satisfaction
								</h2>
							</div>
						</div>
					</div>
					<Skills />
					<Experience />
				</Layout>
			</main>
		</>
	);
};

export default about;
