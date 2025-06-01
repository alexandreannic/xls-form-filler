import * as react_jsx_runtime from 'react/jsx-runtime';
import { Kobo } from 'kobo-sdk';

type FormValue = any;
type FormValues = Record<string, FormValue>;

type XlsFormProps = {
    answers?: FormValues;
    onSubmit: (_: {
        attachments: File[];
        answers: FormValues;
    }) => void;
    survey: Kobo.Form['content'];
    labels?: {
        submit?: string;
        getMyLocation?: string;
        selectImage?: string;
        changeImage?: string;
        selectFile?: string;
        changeFile?: string;
    };
};
declare const XlsFormFiller: ({ answers, survey, onSubmit, labels, }: XlsFormProps) => react_jsx_runtime.JSX.Element;

export { XlsFormFiller, type XlsFormProps };
