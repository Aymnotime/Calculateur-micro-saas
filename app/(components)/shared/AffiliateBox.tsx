"use client";

import React from 'react';

export interface AffiliateBoxProps {
  titre: string;
  description: string;
  lien: string;
}

export default function AffiliateBox({ titre, description, lien }: AffiliateBoxProps) {
  return (
    <a
      href={lien}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-50 border-l-4 border-blue-500 rounded-r-md p-4 hover:bg-gray-100 transition"
    >
      <h4 className="text-sm font-semibold text-gray-800">{titre}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <span className="inline-block mt-2 text-blue-600 text-sm font-medium">Découvrir →</span>
    </a>
  );
}
