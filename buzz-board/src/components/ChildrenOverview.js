import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ChildrenOverview = ({ data }) => {
  const { t } = useTranslation();
  const total = data.total || 0;
  const registered = data.registered || 0;
  const active = data.active || 0;
  const inactive = data.inactive || 0;

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{t('children_overview')}</h3>
      <CircularProgressbar value={total} maxValue={300} text={`${total}`} />
      <p>{t('registered')}: {registered}</p>
      <p>{t('active')}: {active}</p>
      <p>{t('inactive')}: {inactive}</p>
    </motion.div>
  );
};

export default ChildrenOverview;
