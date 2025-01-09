import {User} from "./User";
import {Processor} from "./Processor";
describe('Processor', () => {
    describe('checkConsentEligibility', () => {
        it('should return false for users under 18', () => {
            const user = new User('Mari', 'Gold', '55587387', 'Mulla str', 17);
            expect(Processor.checkConsentEligibility(user)).toBe(false);
        });

        it('should return true for users 18 or older', () => {
            const user = new User('Mari', 'Gold', '55587387', 'Mulla str', 18);
            expect(Processor.checkConsentEligibility(user)).toBe(true);
        });
    });

    describe('revokeConsent', () => {
        it('should revoke consent for a valid user', () => {
            const user = new User('Mari', 'Gold', '55587387', 'Mulla str', 23);
            user.consentGiven = true;
            Processor.revokeConsent(user);
            expect(user.consentGiven).toBe(false);
        });

        it('should throw an error for null user', () => {
            expect(() => Processor.revokeConsent(null)).toThrow('User is null');
        });
    });
});
