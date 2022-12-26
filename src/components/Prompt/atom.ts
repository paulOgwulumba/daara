import { atom } from 'recoil';

export const displayPromptAtom = atom({
    key: 'displayPrompt',
    default: false,
});

export const isQuestionAtom = atom({
    key: 'isQuestionAtom',
    default: true,
});

export const promptHeadingAtom = atom({
    key: 'promptHeading',
    default: '',
});

export const promptBodyAtom = atom({
    key: 'promptBody',
    default: '',
});

export const promptResolveAtom = atom<
{
    resolve: ((value: any) => any) | null
}
>({
    key: 'promptResolve',
    default: {
        resolve: null,
    },
});