/**
 * Flower type definitions for the bouquet component system
 * Manages individual flower state, messaging, and animations
 */

export type FlowerMessage = string;

export interface FlowerState {
  bloomed: boolean;
  message: string;
}

export interface FlowerProps {
  id: number;
  message: FlowerMessage;
  position: {
    x: number;
    y: number;
  };
  onBloom: (id: number) => void;
}
