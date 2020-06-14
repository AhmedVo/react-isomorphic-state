export declare type SubscriberFunc<T> = (newState: T) => any;
export interface ConsumerProps<T> {
    id: string;
    initialState?: T;
}
export declare type ConsumerResult<T> = [T, (preStateOrNextValue: T | SubscriberFunc<T>) => void, Map<string, T>];
export interface ResultProps<T> {
    useConsumerState: () => ConsumerResult<T>;
    useValue: () => T;
    getCach: () => Map<string, T>;
}
//# sourceMappingURL=interface.d.ts.map