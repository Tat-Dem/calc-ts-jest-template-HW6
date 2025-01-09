import {User} from "./User";

export class Processor {
    static checkConsentEligibility(user: User): boolean {
        if (user.age < 18) {
            return false;
        } else {
            return true;
        }
    }
    static revokeConsent (user: User | null): void{
        if (!user){
            throw new Error("User is null");
        }
        user.consentGiven = false;
    }
}
