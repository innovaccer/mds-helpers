export declare const uidGenerator: () => number;
export declare function pubSub(): {
    publish: (eventName: string | number, data: any) => number | undefined;
    subscribe: (eventName: string | number, callback: any) => () => any;
};
