import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';

import { CircleBox, StyledPaper } from './Stepper.styled';

import { LabelProps, StepperProps } from './Stepper.types';

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
  const { t } = useTranslation();
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
    <Box flexDirection="column" width="500px">
      <Box display="flex">
        {icon && <img src={`/sims4/aspirations/${icon}`} alt="Picture of the author" width="50" height="50" />}
        <Typography>{title}</Typography>
      </Box>

      <Box display="flex" gap={2}>
        <Button onClick={() => setActiveStep(0)} disabled={activeStep !== -1}>
          {openName}
        </Button>
        <Button onClick={() => setActiveStep(-1)} disabled={activeStep === -1}>
          {closeName}
        </Button>
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
                    <Button onClick={handleNext}>
                      {t(index === steps.length - 1 ? 'data.utility.complete' : 'data.utility.continue')}
                    </Button>
                    <Button disabled={index === 0} onClick={handleBack}>
                      {t('data.utility.back')}
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <Box>
            {activeStep === steps.length && (
              <StyledPaper>
                <Typography>{endMessage}</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  {t('data.utility.reset')}
                </Button>
              </StyledPaper>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
export default StepperComponent;
