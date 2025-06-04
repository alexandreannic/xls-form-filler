import * as react from 'react';
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
    hideActions?: boolean;
    labels?: {
        submit?: string;
        getMyLocation?: string;
        selectImage?: string;
        changeImage?: string;
        selectFile?: string;
        changeFile?: string;
    };
};
interface XlsFormFillerHandle {
    submit: () => void;
}
declare const XlsFormFiller: react.ForwardRefExoticComponent<XlsFormProps & react.RefAttributes<XlsFormFillerHandle>>;

export { XlsFormFiller, type XlsFormFillerHandle, type XlsFormProps };
