/** @format */
"use client";


import Footer from './footer';
import NavBar from './header';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
