import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	
	return (
		<>
			{products.map((p) => (
				<div key={p._id}>{p.title}</div>
			))}
		</>
	);
};