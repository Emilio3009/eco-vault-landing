import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" data-aos="fade-up" className="py-16 bg-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">{t('about.title')}</h2>
        <p className="text-lg mb-6">{t('about.description')}</p>
        <ul className="space-y-2 text-left text-green-700 mx-auto max-w-xl">
          <li>💚 {t('about.features.burn')}</li>
          <li>🌱 {t('about.features.fund')}</li>
          <li>📈 {t('about.features.staking')}</li>
          <li>📊 {t('about.features.voting')}</li>
        </ul>
      </div>
    </section>
  );
}
