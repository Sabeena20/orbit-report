export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    warning: boolean = true;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean {
        // console.log("called");
        if (this.type.toLowerCase() == "space debris") {
            // console.log("hello");
            return true;
        } else {
            false;
        }
    }
}