import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { 
    displayPromptAtom, 
    promptHeadingAtom, 
    promptBodyAtom,
    promptResolveAtom, 
    isQuestionAtom,
} from "./atom";

interface Question {
    question: string;
    heading?: string;
}

interface Information {
    information: string;
    heading?: string;
}

export const usePrompt = () => {
    const setDisplayPrompt = useSetRecoilState(displayPromptAtom);
    const setPromptHeading = useSetRecoilState(promptHeadingAtom);
    const setPromptBody  = useSetRecoilState(promptBodyAtom);
    const setPromptResolve = useSetRecoilState(promptResolveAtom);
    const setIsQuestion = useSetRecoilState(isQuestionAtom);

    const ask = useCallback(async (output: Question): Promise<boolean> => {
        const {
            question,
            heading = '',
        } = output;

        setPromptHeading(heading);
        setPromptBody(question);
        setIsQuestion(true);
        setDisplayPrompt(true);
        
        return await new Promise((resolve) => {
            setPromptResolve({ resolve });
        });
    }, [
        setDisplayPrompt, 
        setPromptBody, 
        setPromptHeading, 
        setPromptResolve, 
        setIsQuestion
    ]);

    const inform = useCallback(async (output: Information): Promise<void> => {
        const {
            information,
            heading = '',
        } = output;

        setPromptHeading(heading);
        setPromptBody(information);
        setIsQuestion(false);
        setDisplayPrompt(true);

        return await new Promise((resolve) => {
            setPromptResolve({ resolve });
        });
    }, [
        setDisplayPrompt, 
        setPromptBody, 
        setPromptHeading, 
        setPromptResolve, 
        setIsQuestion,
    ]);

    return {
        ask,
        inform,
    }
}