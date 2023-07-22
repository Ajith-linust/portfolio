import { ButtonTypes } from './constants';

export interface IButtonProps {
    children: React.ReactElement | React.ReactElement[] | string;
    variant: ButtonTypes;
    className?: string;
    styles?: string;
    radius?: string;
    height?: string;
    width?: string;
    margin?: string;
    fontSize?: string;
    loading?: boolean;
    disabled?: boolean;
    ripple?: boolean;
    onClick: any;
}
