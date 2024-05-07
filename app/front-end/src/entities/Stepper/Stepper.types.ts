export interface LabelProps {
  step: number;
}

export interface StepsProps {
  label: string;
  value: string[];
}

export interface StepperProps {
  steps: StepsProps[];
  title: string;
  icon?: string;
  endMessage?: string;
  currentStep?: number;
  openName?: string;
  closeName?: string;
}
