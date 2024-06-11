import { useState } from 'react';

import { Box, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';

import { StyledBox } from '@ui/DefaultBox';

import { CircleBox, StyledPaper } from './Stepper.styled';

import { LabelProps, StepperProps } from './Stepper.types';

import DefaultButton from '../../shared/ui/DefaultButton/DefaultButton';

const LabelComponent = ({ step }: LabelProps) => {
  return <CircleBox>{step}</CircleBox>;
};

const StepperComponent = ({
  steps,
  title,
  icon,
  endMessage,
  currentStep = -1,
  openName = 'open',
  closeName = 'close',
}: StepperProps) => {
  const [activeStep, setActiveStep] = useState(currentStep);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <StyledBox flexDirection="column" width="500px">
      <Box display="flex">
        {icon && <img src={`/sims4/aspirations/${icon}`} alt="Picture of the author" width="50" height="50" />}
        <Typography>{title}</Typography>
      </Box>

      <Box display="flex" gap={2}>
        <DefaultButton decor="underscored" onClick={() => setActiveStep(0)} disabled={activeStep !== -1}>
          {openName}
        </DefaultButton>
        <DefaultButton decor="underscored" onClick={() => setActiveStep(-1)} disabled={activeStep === -1}>
          {closeName}
        </DefaultButton>
      </Box>
      {activeStep !== -1 && (
        <>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            sx={{ 'MuiStepConnector-root': { borderColor: 'red' } }}
          >
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel StepIconProps={{ icon: <LabelComponent step={index + 1} /> }}>{step.label}</StepLabel>

                <StepContent>
                  {step.value.map((task) => (
                    <Typography key={task} m={2}>
                      {task}
                    </Typography>
                  ))}

                  <Box display="flex" gap={2}>
                    <DefaultButton decor="underscored" onClick={handleNext}>
                      {index === steps.length - 1 ? 'Завершить' : 'Продолжить'}
                    </DefaultButton>
                    <DefaultButton decor="underscored" disabled={index === 0} onClick={handleBack}>
                      Назад
                    </DefaultButton>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <Box>
            {activeStep === steps.length && (
              <StyledPaper>
                <Typography>{endMessage}</Typography>
                <DefaultButton onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Сбросить
                </DefaultButton>
              </StyledPaper>
            )}
          </Box>
        </>
      )}
    </StyledBox>
  );
};
export default StepperComponent;
