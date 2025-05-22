import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Registrar los componentes de Chart.js que necesitamos
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const { t } = useTranslation();
  const chartRef = useRef(null);
  
  // Datos de distribución del token
  const tokenDistribution = [
    { name: t('tokenomics.distribution.community'), value: 40, color: '#4285F4' },  // Azul Google
    { name: t('tokenomics.distribution.development'), value: 35, color: '#00B6F1' }, // Azul claro
    { name: t('tokenomics.distribution.ecoFund'), value: 15, color: '#34A853' },    // Verde Google
    { name: t('tokenomics.distribution.liquidity'), value: 10, color: '#1A2B49' }   // Azul oscuro
  ];
  
  // Preparar datos para el gráfico
  const chartData = {
    labels: tokenDistribution.map(item => `${item.name}: ${item.value}%`),
    datasets: [
      {
        data: tokenDistribution.map(item => item.value),
        backgroundColor: tokenDistribution.map(item => item.color),
        borderColor: tokenDistribution.map(item => item.color),
        borderWidth: 1,
        hoverOffset: 10,
        spacing: 0,
        cutout: '70%'
      }
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15,
          padding: 20,
          font: {
            size: 14,
            family: "'Inter', sans-serif"
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#666',
        bodyFont: {
          size: 14
        },
        titleFont: {
          size: 16,
          weight: 'bold'
        },
        padding: 12,
        boxPadding: 10,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    }
  };
  
  // Añadir efecto de animación cuando se hace scroll hacia la sección
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && chartRef.current) {
          // Aplicar animación a través de AOS o con una clase CSS
          entry.target.classList.add('chart-animated');
        }
      });
    }, { threshold: 0.2 });
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);
  
  // Estadísticas adicionales del token
  const tokenStats = [
    { name: t('tokenomics.stats.totalSupply'), value: '1,000,000,000 EVT' },
    { name: t('tokenomics.stats.initialMarketCap'), value: '$250,000' },
    { name: t('tokenomics.stats.burnRate'), value: '1% per transaction' }
  ];
  
  // Información sobre las tasas (fees)
  const tokenFees = [
    { name: t('tokenomics.fees.burn'), value: '1%', icon: '🔥' },
    { name: t('tokenomics.fees.ecoFund'), value: '1%', icon: '🌱' },
    { name: t('tokenomics.fees.staking'), value: '1%', icon: '💰' }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tokenomics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tokenomics.description')}
          </p>
        </div>
        
        {/* Contenedor principal con sombra y efecto de elevación */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
          {/* Cabecera con título y subtítulo */}
          <div className="p-6 bg-gradient-to-r from-green-600 to-green-500 text-white">
            <h3 className="text-2xl font-bold">Token EVT</h3>
            <p className="opacity-90">{t('tokenomics.subtitle')}</p>
          </div>
          
          <div className="p-8">
            {/* Distribución del token con gráfico */}
            <div className="flex flex-col lg:flex-row items-center">
              {/* Gráfico */}
              <div className="w-full lg:w-1/2" ref={chartRef} style={{ height: '400px' }}>
                <Doughnut data={chartData} options={options} />
              </div>
              
              {/* Características principales */}
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 pl-0 lg:pl-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">
                  {t('tokenomics.keyFeatures')}
                </h4>
                
                <div className="space-y-6">
                  {/* Stats del token */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h5 className="text-lg font-medium text-gray-700 mb-4">
                      {t('tokenomics.tokenStats')}
                    </h5>
                    <div className="space-y-3">
                      {tokenStats.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-600">{stat.name}</span>
                          <span className="font-medium text-gray-800">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tasas de transacción */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h5 className="text-lg font-medium text-green-700 mb-4">
                      {t('tokenomics.transactionFees')}
                    </h5>
                    <div className="grid grid-cols-3 gap-4">
                      {tokenFees.map((fee, index) => (
                        <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl mb-2">{fee.icon}</div>
                          <div className="font-medium text-gray-800">{fee.value}</div>
                          <div className="text-sm text-gray-600">{fee.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Información adicional */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {t('tokenomics.deflationary')}
              </h4>
              <p className="text-gray-600">
                {t('tokenomics.deflationaryDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
