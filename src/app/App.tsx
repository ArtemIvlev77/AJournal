import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';

const App = () => {
  const {theme, toggleTheme} = useTheme();
	return (
		<div className={classNames('app', {}, [' ', theme])}>
			<Link to={'/'}> Главная </Link>
			<Link to={'/about'}> О САЙТЕ</Link>
			<button onClick={toggleTheme}>Switch theme</button>
		<AppRouter />
		</div>
	);
};

export default App;