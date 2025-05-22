import React, { useEffect, useState } from 'react';
import { fetchDonationsTotal } from '../services/suiService';

export default function DonationsCounter() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const update = async () => setTotal(await fetchDonationsTotal());
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow text-center" data-aos="fade-up">
      <h3 className="text-xl font-semibold mb-2">Total Donations</h3>
      <p className="text-4xl text-green-600">{total.toLocaleString()} SUI</p>
    </div>
  );
}
