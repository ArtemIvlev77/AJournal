import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import { Suspense } from 'react';
import {useTranslation} from 'react-i18next';


const Component = () => {
  const {t, i18n} = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return(
    <div>
      <button onClick={toggle}>{t('translate')}</button>
      {t('test')}
    </div>
  )
}

const App = () => {
   const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback=''>
          <Component/>
          <Navbar />
          <div className="content-page" style={{display:'flex'}}>
            <Sidebar/>
            <AppRouter />
          </div>
          </Suspense>
        </div>
    );
};

export default App;
