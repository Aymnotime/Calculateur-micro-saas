"use client";

import React from 'react';

export interface ResultCardProps {
  titre: string;
  valeur: string;
  description?: string;
  couleur?: 'green' | 'red';
}

export default function ResultCard({ titre, valeur, description, couleur }: ResultCardProps) {
  const bg = couleur === 'green' ? 'bg-green-50' : couleur === 'red' ? 'bg-red-50' : 'bg-white';
  const ring = couleur === 'green' ? 'ring-green-200' : couleur === 'red' ? 'ring-red-200' : 'ring-gray-200';

  return (
    <div className={`${bg} ring-1 ${ring} rounded-xl p-4`}
      role={description ? 'note' : undefined}
      aria-label={description ? description : undefined}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-gray-700">{titre}</h3>
        {description ? (
          <span className="text-gray-400" title={description} aria-label={description}>ℹ️</span>
        ) : null}
      </div>
      <div className="mt-2 text-3xl font-bold text-gray-900">{valeur}</div>
    </div>
  );
}
