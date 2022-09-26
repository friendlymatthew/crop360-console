import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Layout({ children }) {
	const router = useRouter();

	const menuItems = [
		{
			href: "/",
			title: "Home",
		},
		{
			href: "/dashboard",
			title: "Dashboard",
			sub: [
				{
					href: "/dashboard/soil",
					title: "Soil Fertility",
				},
				{
					href: "/dashboard/water",
					title: "Watering Schedule",
				},
			],
		},
		{
			href: "/entry",
			title: "Log Entry",
		},
		{
			href: "/settings",
			title: "Settings",
		},
	];

	const endItems = [
		{
			href: "/logout",
			title: "Log Out",
		},
		{
			href: "/contact",
			title: "Contact",
		},
	];

	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Work+Sans:wght@300;400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className=" flex flex-col bg-[#f0f5f5] text-[#0053d6] font-thin font-work">
				<div className=" flex flex-col md:flex-row flex-1">
					<aside className=" w-full md:w-56">
						<nav className="flex flex-col justify-between h-screen pb-40 pt-12 border border-r-[#f0f5f5]">
							<nav className="flex flex-col space-y-3">
								{menuItems.map(({ href, title, sub }) => {
									return (
										<details key={title} className="group cursor-pointer">
											<summary className="flex items-center px-4 py-2 rounded-lg group">
												<Link href={href}>
													<span className="ml-3"> {title} </span>
												</Link>
											</summary>
										</details>
									);
								})}
							</nav>

							<nav>
								{endItems.map(({ href, title }) => {
									return (
										<a key={title} href="" className="ml-5 block px-4 py-2">
											{title}
										</a>
									);
								})}
							</nav>
						</nav>
					</aside>
					<main className="flex-1">{children}</main>
				</div>
			</div>
		</div>
	);
}
