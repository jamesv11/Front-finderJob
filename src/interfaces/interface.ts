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


export interface IOffersByCompany {

    "offer": any,
    "lstOffer": Array<IOffer>,
    "messagge": any

}

export interface IOffer {
    "id": number,
    "job": string,
    "expirationDate": Date,
    "amountApplicants": number,
    "description": string,
    "salary": number,
    "conditions": string,
    "schedule": string,
    "applicantProfile": string,
    "state": number,
    "company": null,
    "lstPostulantOffer": null
}
