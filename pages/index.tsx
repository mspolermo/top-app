import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = React.useState<number>(4);

	return (
		<>
			<Htag tag='h1'>TOP-APP</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка со стрелкой</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='m' color='green' href='#test'>Green</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<ul>
					{menu.map((m) => (
						<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
					))}
				</ul>
		</>
	);
}

export default withLayout(Home);



export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {
			firstCategory
	});

	return {
		props: {
			menu,
			firstCategory
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
