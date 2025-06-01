import * as react_jsx_runtime from 'react/jsx-runtime';
import { Kobo } from 'kobo-sdk';

type FormValue = any;
type FormValues = Record<string, FormValue>;

type XlsFormProps = {
    onSubmit: (_: {
        attachments: File[];
        answers: FormValues;
    }) => void;
    labels?: {
        submit?: string;
        getMyLocation?: string;
        selectImage?: string;
        changeImage?: string;
        selectFile?: string;
        changeFile?: string;
    };
    survey: Kobo.Form['content'];
};
declare const XlsFormFiller: ({ survey, onSubmit, labels, }: XlsFormProps) => react_jsx_runtime.JSX.Element;

export { XlsFormFiller, type XlsFormProps };
