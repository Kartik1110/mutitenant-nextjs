export interface Theme {
  palette: {
    primary: string;
    secondary?: string;
    primaryForeground?: string;
    secondaryForeground?: string;
    background?: string;
    foreground?: string;
  };
  fonts: { family: string; weight: number }[];
}
