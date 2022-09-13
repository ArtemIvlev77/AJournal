import React, {useState} from 'react';
import classNames from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p className={classNames.digit}>{count}</p>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
		</div>
	);
};

