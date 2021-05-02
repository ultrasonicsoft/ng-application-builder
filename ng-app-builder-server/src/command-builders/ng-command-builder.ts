
export class NgCommandBuilder {
    allCommands: Array<string> = [];

    append(_command: string): void {
        this.allCommands.push(_command);
    }

    getCommand(): string {
        return this.allCommands.join(' && ');
    }

    reset(): void {
        this.allCommands = [];
    }
}