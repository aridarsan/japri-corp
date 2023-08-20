import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@material-ui/core";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function VerticalLinearStepper() {

  return (
    <Box sx={{ maxWidth: 400, padding: "0" }}>
      <Stepper
        orientation="vertical"
        style={{ padding: "0", background: "none" }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <h5>{step.label}</h5>
            </StepLabel>
            <StepContent>
              <p>{step.description}</p>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
