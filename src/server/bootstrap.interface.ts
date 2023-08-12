export default interface IBootstrap{
    init(): Promise<any>;
    close(): void;
} 