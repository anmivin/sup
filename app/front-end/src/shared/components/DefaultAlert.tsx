import { Alert } from "@mui/material";

interface AlertProps {
  severity: "success" | "info" | "warning" | "error";
  text: string;
}

const DefaultAlert = ({ severity, text }: AlertProps) => {
  return (
    <>
      <Alert /* onClose={handleClose} */ severity={severity} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </>
  );
};

export default DefaultAlert;
