export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface ImageAndTextProps {
    title?: string;
    heading?: string;
    features: Feature[];
    rowReverse?: boolean;
    img: string;
    card?: boolean;
}

export interface FooterProps {
    title: string;
    links: string[];
}

export interface LogoProps {
    icon: string;
    text?: string;
    logoText?: string;
    tm?: string;
}

export default interface GradientLayerProps {
    RedClassName?: string;
    YellowClassName?: string;
}

export interface ImageComponentProps {
    img: string;
    testimonials?: boolean;
    card?: boolean;
}

export interface StarProps {
    className: string
}