import React, { useEffect, useState } from 'react';
import { fetchRecentProjects } from '../services/suiService';

export default function RecentProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchRecentProjects().then(setProjects);
  }, []);

  return (
    <section id="recent" className="py-16 bg-green-100" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-800">Recent Funded Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-sm text-gray-600">Donated: {p.amount.toLocaleString()} SUI</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
