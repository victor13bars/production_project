import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from 'app/entities/Counter/model/slice/counterSlice';
import { getCounterValue }
    from 'app/entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
