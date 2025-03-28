import React from 'react';
import { Button, Htag, P, Tag } from '../components';

function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>TOP-APP</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка со стрелкой</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='m' color='green' href='#test'>Green</Tag>
		</div>
	);
}

export default Home;
