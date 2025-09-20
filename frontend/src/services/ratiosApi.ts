// src/services/ratiosApi.ts

import type { FinancialFormData, FinancialRatios } from "../types/financial";

const API_URL = "http://localhost:3000/ratios";

export async function calculateRatios(
  formData: Partial<FinancialFormData>
): Promise<FinancialRatios> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}
