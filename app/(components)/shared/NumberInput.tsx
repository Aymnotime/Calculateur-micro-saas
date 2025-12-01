"use client";

import React from 'react';

export interface NumberInputProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  min?: number;
}

export default function NumberInput({ label, name, value, onChange, step = 0.01, min = 0 }: NumberInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        className="input-field"
        value={Number.isFinite(value) ? value : 0}
        onChange={onChange}
        step={step}
        min={min}
        inputMode="decimal"
      />
    </div>
  );
}
