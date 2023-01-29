import { useDispatch } from 'react-redux';
import { updateCurrentView, refreshBoardState, refreshGamePlayState, refreshPlayerState } from '../redux/slices';
import { Views } from '../utils/constants';
import style from './View.module.css';

export const DrawView = () => { 
    const dispatch = useDispatch();
    const onPlayAgain = () => {
        dispatch(refreshBoardState());
        dispatch(refreshGamePlayState());
        dispatch(refreshPlayerState());
        dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
    };

    return (
        <div 
            className={style['form-wrapper']}
            style = {{
                minWidth: '300px'
            }}
        >
            <p
                className={style['message']}
                style = {{
                    fontSize: '18px', 
                    textAlign: 'center',
                }}
            >
                It was a Draw!
            </p>
            <p 
                className={style['message']}
                style={{
                    fontSize: '16px', 
                    textAlign: 'center',
                }}
            >
                You can still beat your opponent.
            </p>
            <div>
                <button onClick = { onPlayAgain } className={style["button"]}>
                    Play again
                </button>
            </div>
        </div>
    );
};