import React from 'react';
import { Button, Htag, P } from '../components';

function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>TOP-APP</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка со стрелкой</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
		</div>
	);
}

export default Home;
