export class Name {

    public readonly DEFAULT_DELIMITER: string = '.';
    private readonly ESCAPE_CHARACTER = '\\';

    // Internal representation of the name components
    private components: string[];
    private delimiter: string;

    // Constructor: Initializes with an array of strings and an optional delimiter
    constructor(other: string[], delimiter?: string) {
        this.components = other;
        this.delimiter = delimiter || this.DEFAULT_DELIMITER;
    }

    // Method type: Getter - returns the name as a string, with components joined by a delimiter
    public asNameString(delimiter: string = this.delimiter): string {
        return this.components.join(delimiter);
    }

    // Method type: Getter - returns the component at index i
    public getComponent(i: number): string {
        if (i >= 0 && i < this.components.length) {
            return this.components[i];
        }
        throw new Error("Index out of bounds");
    }

    // Method type: Setter - sets a specific component at index i
    public setComponent(i: number, c: string): void {
        if (i >= 0 && i < this.components.length) {
            this.components[i] = c;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    // Method type: Getter - returns the number of components in the name
    public getNoComponents(): number {
        return this.components.length;
    }

    // Method type: Insertion - inserts a new component at index i
    public insert(i: number, c: string): void {
        if (i >= 0 && i <= this.components.length) {
            this.components.splice(i, 0, c);
        } else {
            throw new Error("Index out of bounds");
        }
    }

    // Method type: Append - appends a new component at the end
    public append(c: string): void {
        this.components.push(c);
    }

    // Method type: Removal - removes the component at index i
    public remove(i: number): void {
        if (i >= 0 && i < this.components.length) {
            this.components.splice(i, 1);
        } else {
            throw new Error("Index out of bounds");
        }
    }
}
