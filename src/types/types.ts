export interface BaseComponentProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    borderColor?: string;
    borderRadius?: string;
}

export interface TabsProps {
    tab: string,
    content: HTMLElement
}

export enum SizeNumber {
    small = 16,
    medium = 20,
    large = 24,
}

export enum SizeHeight {
    small = '16px',
    medium = '20px',
    large = '24px',
}

export enum SizeWidth {
    small = '16px',
    medium = '20px',
    large = '24px',
}

export enum SizeWidthPercent {
    small = '25%',
    medium = '50%',
    large = '85%',
}
