export interface Movie {
    id: number;
    title: string;
    description?: string; // Utilisez '?' si la propriété est optionnelle
    genre?: string;
    duration?: number;
  }