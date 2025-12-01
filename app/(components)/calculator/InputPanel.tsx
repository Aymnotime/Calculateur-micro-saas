"use client";

import React from 'react';
import NumberInput from '../shared/NumberInput';

interface InputPanelProps {
  inputs: {
    prixVente: number;
    coutAchat: number;
    coutExpedition: number;
    fraisPlateformePct: number;
    fraisPlateformeFixe: number;
    fraisPaiementPct: number;
    fraisPaiementFixe: number;
    cpa: number;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPanel({ inputs, onInputChange }: InputPanelProps) {
  return (
    <aside>
      <fieldset className="fieldset">
        <legend>Produit</legend>
        <NumberInput
          label="Prix de vente (€)"
          name="prixVente"
          value={inputs.prixVente}
          onChange={onInputChange}
          step={0.01}
        />
        <NumberInput
          label="Coût d'achat (€)"
          name="coutAchat"
          value={inputs.coutAchat}
          onChange={onInputChange}
          step={0.01}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend>Logistique</legend>
        <NumberInput
          label="Coût d'expédition (€)"
          name="coutExpedition"
          value={inputs.coutExpedition}
          onChange={onInputChange}
          step={0.01}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend>Marketing</legend>
        <NumberInput
          label="CPA - Coût par acquisition (€)"
          name="cpa"
          value={inputs.cpa}
          onChange={onInputChange}
          step={0.01}
        />
      </fieldset>

      <details className="fieldset open:shadow-sm">
        <summary className="cursor-pointer select-none text-sm font-semibold text-gray-700">Frais (Avancé)</summary>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NumberInput
              label="Frais plateforme (%)"
              name="fraisPlateformePct"
              value={inputs.fraisPlateformePct}
              onChange={onInputChange}
              step={0.1}
            />
            <NumberInput
              label="Frais plateforme fixe (€)"
              name="fraisPlateformeFixe"
              value={inputs.fraisPlateformeFixe}
              onChange={onInputChange}
              step={0.01}
            />
            <NumberInput
              label="Frais paiement (%)"
              name="fraisPaiementPct"
              value={inputs.fraisPaiementPct}
              onChange={onInputChange}
              step={0.1}
            />
            <NumberInput
              label="Frais paiement fixe (€)"
              name="fraisPaiementFixe"
              value={inputs.fraisPaiementFixe}
              onChange={onInputChange}
              step={0.01}
            />
          </div>
        </div>
      </details>
    </aside>
  );
}
