import styles from "./index.module.css" ;
import { GrClose } from 'react-icons/gr';
import { useRecoilState } from "recoil";
import { 
    displayPromptAtom, 
    promptHeadingAtom, 
    promptBodyAtom,
    promptResolveAtom, 
    isQuestionAtom,
} from "./atom";

export const Prompt = () => {
    const [displayPrompt, setDisplayPrompt] = useRecoilState(displayPromptAtom);
    const [promptHeading, setPromptHeading] = useRecoilState(promptHeadingAtom);
    const [promptBody, setPromptBody] = useRecoilState(promptBodyAtom);
    const [promptResolve, setPromptResolve] = useRecoilState(promptResolveAtom);
    const [isQuestion, setIsQuestion] = useRecoilState(isQuestionAtom);

    const onYes = () => {
        if (promptResolve.resolve) {
            if (isQuestion) promptResolve.resolve(true);
            else promptResolve.resolve(undefined);
        }
        refreshState();
    };

    const onNo = () => {
        if (promptResolve.resolve) { 
            if (isQuestion) promptResolve.resolve(false);
            else promptResolve.resolve(undefined);
        }

        refreshState();
    };

    const refreshState = () => {
        setDisplayPrompt(false);
        setPromptHeading('');
        setPromptBody('');
        setPromptResolve(null);
        setIsQuestion(true);
    };

    return (
        displayPrompt?
        <div className={styles.wrapper}>
            <div className={styles.promptBox}>
                <div 
                    className={styles.closeButton}
                    onClick = { onNo }
                >
                    <GrClose 
                        className={styles.icon}
                        color = '#FFF'
                        stroke = '#FFF'
                        fill="#FFF"
                    />
                </div>

                <div className={styles.heading}>
                    { promptHeading }
                </div>

                <div className={styles.body}>
                    { promptBody }
                </div>

                <div className={styles.buttons}>
                    <button 
                        className={styles.yes}
                        onClick = { onYes }
                    >
                        { isQuestion? 'Yes' : 'Okay' }
                    </button>

                    {
                        isQuestion &&
                        <button 
                            className={styles.no}
                            onClick = { onNo }
                        >
                            No
                        </button>
                    }
                </div>
            </div>
        </div>
        :
        null
    )
};