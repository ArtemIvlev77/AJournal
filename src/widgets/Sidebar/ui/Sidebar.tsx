import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

interface SidebarProps {
	className?: string;
}



export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setColppased] = useState(false);
	const onToggle = () => {
		setColppased(prev => !prev);
	}
	return (
		<div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
			{/*	Lang Switcher*/}
			</div>
		</div>
	);
};

