import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  // Datos para las características principales
  const features = [
    { 
      icon: '💚', 
      key: 'burn',
      title: t('about.features.burn', 'Quema de tokens'),
      description: t('about.features.burnDesc', 'Parte de cada transacción se quema automáticamente, reduciendo la oferta total y aumentando la escasez.')
    },
    { 
      icon: '🌱', 
      key: 'fund',
      title: t('about.features.fund', 'Fondo ecológico'),
      description: t('about.features.fundDesc', 'Un porcentaje de las transacciones va directamente a proyectos ambientales verificados y transparentes.')
    },
    { 
      icon: '📈', 
      key: 'staking',
      title: t('about.features.staking', 'Staking sostenible'),
      description: t('about.features.stakingDesc', 'Genera recompensas pasivas mientras apoyas proyectos que ayudan al planeta.')
    },
    { 
      icon: '📊', 
      key: 'voting',
      title: t('about.features.voting', 'Gobernanza comunitaria'),
      description: t('about.features.votingDesc', 'Los holders participan en la selección de proyectos ambientales a financiar.')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 scroll-reveal"
            data-aos="fade-up"
          >
            {t('about.title', 'Criptomoneda con propósito ambiental')}
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto scroll-reveal"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('about.description', 'EcoVault combina la innovación blockchain en Sui Network con un compromiso real por la sostenibilidad del planeta. Cada transacción contribuye directamente a la acción climática.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.key}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow scroll-reveal"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="bg-green-600 bg-opacity-90 text-white p-8 rounded-2xl shadow-lg overflow-hidden relative scroll-reveal"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          {/* Decoración de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">{t('about.mission.title', 'Nuestra misión')}</h3>
            <p className="text-lg mb-6">
              {t('about.mission.description', 'Crear una criptomoneda que no solo genere rentabilidad para sus holders, sino que también tenga un impacto positivo medible en el medio ambiente. Cada token representa un paso hacia un futuro más verde.')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold text-xl mb-2">{t('about.values.transparency', 'Transparencia')}</h4>
                <p>{t('about.values.transparencyDesc', 'Todas nuestras donaciones y acciones ambientales son verificables en la blockchain.')}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold text-xl mb-2">{t('about.values.community', 'Comunidad')}</h4>
                <p>{t('about.values.communityDesc', 'Decisiones colaborativas sobre los proyectos ambientales a financiar.')}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold text-xl mb-2">{t('about.values.impact', 'Impacto')}</h4>
                <p>{t('about.values.impactDesc', 'Resultados medibles y cuantificables para cada iniciativa ambiental.')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
