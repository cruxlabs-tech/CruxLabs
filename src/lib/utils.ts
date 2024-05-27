import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollIntoView = (target: string) => {
  return (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetElement = document.getElementById(target);
    if (!targetElement) return;
    console.log(targetElement.offsetTop);
    window.scroll({ top: targetElement.offsetTop - 140, behavior: 'smooth' });
  };
};
