/**
 * Bouquet type definitions for managing multiple flowers
 * Tracks bloom state and triggers final reveal
 */

import type { FlowerState, FlowerMessage } from './flower';

export interface BouquetProps {
  // Custom bouquet component - no required props
}

export interface BouquetState {
  bloomedCount: number;
  bloomedFlowers: Set<number>;
  allBloomed: boolean;
}
