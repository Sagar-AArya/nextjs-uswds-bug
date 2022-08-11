import Head from "next/head";

import { GovBanner, FormGroup, FileInput } from '@trussworks/react-uswds';

import React, { useState, useEffect } from 'react';

export default function Home(props) {

	useEffect(() => {});

	return (
		<div>
			<Head>
				<title>Form</title>
				<meta name="description" content="form app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<FormGroup error>
					<FileInput
						id="file-input-error"
						name="file-input-error"
						aria-describedby="file-input-error-hint file-input-error-alert"
					/>
				</FormGroup>
			</main>

			<footer>
				
			</footer>
		</div>
  );
}
