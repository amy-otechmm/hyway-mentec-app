/** @format */

import MainLayout from '@/layout/main-layout';
import HeroSection from '@/components/features/hero-section';
import ContactForm from '@/components/features/contact';

export default function Home() {
	return (
		<MainLayout>
			<ContactForm />
		</MainLayout>
	);
}
