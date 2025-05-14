import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A function that helps solve conflicts with tailwind classes
 * that appears when You use clsx in a 'as it is' way
 */
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
