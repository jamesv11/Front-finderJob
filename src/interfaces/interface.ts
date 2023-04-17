import { CSSProperties } from "react";

export interface ComponentExtendStyle {
    className?: string;
    style?: CSSProperties;
}

export interface PropsButton extends ComponentExtendStyle {
    content: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    buttonIcon?: string;
    [x: string]: any;
  }
  