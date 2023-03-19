import {appReducer, setAppStatusAC, setUserId, setAppErrorAC, RequestStatusType} from './app-reducer';

describe('app reducer', () => {
    const initialState = {
        status: 'loading' as RequestStatusType,
        initialized: false,
        userId: null,
        error: null,
    };

    it('should change status', () => {
        const newState = appReducer(initialState, setAppStatusAC({status: 'succeeded'}));
        expect(newState.status).toEqual('succeeded');
    });

    it('should add user id', () => {
        const newState = appReducer(initialState, setUserId({id: 1}));
        expect(newState.userId).toEqual(1);
    });

    it('should add error message', () => {
        const newState = appReducer(initialState, setAppErrorAC({message: 'error message'}));
        expect(newState.error).toEqual('error message');
    });

    it('should change initialized status', () => {
        const newState = appReducer(initialState, {type: 'app/initializeApp/fulfilled'});
        expect(newState.initialized).toEqual(true);
    });
});
