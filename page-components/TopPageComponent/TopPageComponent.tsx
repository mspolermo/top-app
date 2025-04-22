import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { Card, Htag, Tag } from '../../components';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map((p) => (
					<div key={p._id}>
						{p.title}
					</div>
				))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			<div className={styles.hh}>
				<Card className={styles.hhCount}>
					<div className={styles.hhStatTitle}>Всего вакансий</div>
					<div className={styles.hhStatCount}>{page.hh?.count}</div>
				</Card>
			</div>
		</div>
	);
};