import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map(m => (
					<li key={m.route} aria-expanded={m.id == firstCategory}>
						<Link href={`/${m.route}`}>
							<a>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory
								})}>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</a>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<li key={m._id.secondCategory}>
							<button
								className={styles.secondLevel}
								aria-expanded={m.isOpened}
							>{m._id.secondCategory}</button>
								{buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
						</li>
					);
				})}
			</ul>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
		return (
			pages.map(p => (
					<Link href={`/${route}/${p.alias}`}>
						<a
							tabIndex={isOpened ? 0 : -1}
							className={cn(styles.thirdLevel, {
								[styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
							})}
							aria-current={`/${route}/${p.alias}` == router.asPath ? 'page' : false}
						>
							{p.category}
						</a>
					</Link>
			))
		);
	};

	return (
		<nav className={styles.menu} role='navigation'>
			{buildFirstLevel()}
		</nav>
	);
};