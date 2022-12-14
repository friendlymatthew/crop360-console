import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useEffect, useState } from "react";

const axios = require("axios");

export default function Home() {
	const [data, setData] = useState({});

	var config = {
		method: "get",
		url: "http://api.airvisual.com/v2/nearest_city?key=c79cc061-c756-4271-9c9e-91d2e0e7348e",
		headers: {},
	};

	useEffect(() => {
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data.data));
				setData(response.data.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const toCelsius = (fahrtemp) => {
		return ((fahrtemp - 32) * 5) / 9;
	};

	const toFahr = (celTemp) => {
		return (celTemp * 9) / 5 + 32;
	};

	const chu = (tmin, tmax) => {
		// celsius

		return (
			(1.8 * (tmin - 4.4) + 3.3 * (tmax - 10) - (0.084 * tmax - 10) * 2) / 2
		);
	};

	const gdd = (tmax, tmin, tbase) => {
		return (tmax + tmin) / 2 - tbase;
	};

	return (
		<div className="text-lg">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-white min-h-screen p-12">
				<section className="">
					<span className="flex justify-end">
						{data.city}, {data.state}
					</span>
				</section>
				<section id="temperature" className="shadow-md p-4">
					<div className="text-xl">Temperature</div>
					<div>Currently {toFahr(data.current.weather.tp)}ºF</div>
					<div>Humidity: {data.current.weather.hu}%</div>
					<div>Wind Speed (m/s): {data.current.weather.ws}</div>

					<div>Wind Speed (m/s): {data.current.weather.ic}</div>
				</section>
			</main>
		</div>
	);
}
