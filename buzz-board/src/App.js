import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/actions';
import { useTranslation } from 'react-i18next';
import { useTheme } from './theme/ThemeContext';
import ChildrenOverview from './components/ChildrenOverview';
import CaregiverOverview from './components/CaregiverOverview';
import FinancialOverview from './components/FinancialOverview';
import Attendance from './components/Attendance';
import EnrollmentsRecord from './components/EnrollmentsRecord';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <button onClick={() => toggleTheme()}>
          {t('toggle_dark_mode')}
        </button>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>

        <ChildrenOverview data={data.children} />
        <CaregiverOverview data={data.caregivers} />
        <FinancialOverview data={data.financial} />
        <Attendance data={data.attendance} />
        <EnrollmentsRecord data={data.enrollments} />
      </motion.div>
    </div>
  );
};

export default App;
