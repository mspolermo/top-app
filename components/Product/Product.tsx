import { ProductProps } from './Product.props';
import { ForwardedRef, forwardRef } from 'react';

export const Product = forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div className={className} {...props} ref={ref}>
			{product}
		</div>
	);
});