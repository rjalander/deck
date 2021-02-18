import * as React from 'react';

import { showModal } from '../../../presentation';
import { ConsoleOutputModal } from './ConsoleOutputModal';
import { IInstance } from '../../../domain';

export interface IConsoleOutputProps {
  instance: IInstance;
  text?: string;
  usesMultiOutput?: boolean;
}

export const ConsoleOutputLink = ({ instance, text, usesMultiOutput }: IConsoleOutputProps) => {
  const showConsoleOutput = () => {
    showModal(ConsoleOutputModal, { instance, usesMultiOutput });
  };

  return (
    <button className="btn btn-link" onClick={showConsoleOutput}>
      {text || 'Console Output (Raw)'}
    </button>
  );
};
