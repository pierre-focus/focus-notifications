import {addNotification,addNotifications, readNotification, setVisibilityFilter, VisibilityFilters, ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION, SET_VISIBILITY_FILTER} from '../'

describe('actions', () => {
    it('actionType should be strings', () => {
        expect(ADD_NOTIFICATION).to.be.a('string');
        expect(READ_NOTIFICATION).to.be.a('string');
        expect(SET_VISIBILITY_FILTER).to.be.a('string');
    } )
    describe('addNotification', () => {
        it('should be a function', () => {
            expect(addNotification).to.be.a('function');
        });
        it('should return an object with a type and a payload property containing an object', () => {
            const NOTIF = {content: 'lopez'};
            const addNotificationResult = addNotification(NOTIF);
            expect(addNotificationResult).to.be.an('object');
            expect(addNotificationResult).to.have.ownProperty('type');
            expect(addNotificationResult).to.have.ownProperty('payload');
            expect(addNotificationResult.payload).to.deep.equal(NOTIF);
            expect(addNotificationResult.type).to.equal(ADD_NOTIFICATION);
        });
    });
    describe('addNotifications', () => {
        it('should be a function', () => {
            expect(addNotifications).to.be.a('function');
        });
        it('should return an object with a type and a payload property containing an array', () => {
            const NOTIFS = [{content: 'lopez joe'}, {content: 'lopez david'}];
            const addNotificationsResult = addNotifications(NOTIFS);
            expect(addNotificationsResult).to.be.an('object');
            expect(addNotificationsResult).to.have.ownProperty('type');
            expect(addNotificationsResult).to.have.ownProperty('payload');
            expect(addNotificationsResult.payload).to.deep.equal(NOTIFS);
            expect(addNotificationsResult.type).to.equal(ADD_NOTIFICATIONS);
        });
    });
    describe('readNotification', () => {
        it('should be a function', () => {
            expect(readNotification).to.be.a('function');
        });
        it('should return an object with a type and a notification property', () => {
            const NOTIF_ID = 12345;
            const readNotificationResult = readNotification(NOTIF_ID);
            expect(readNotificationResult).to.be.an('object');
            expect(readNotificationResult).to.have.ownProperty('type');
            expect(readNotificationResult).to.have.ownProperty('payload');
            expect(readNotificationResult.payload).to.deep.equal(NOTIF_ID);
            expect(readNotificationResult.type).to.equal(READ_NOTIFICATION);
        });
    });
    describe('setVisibilityFilter', () => {
        it('should be a function', () => {
            expect(setVisibilityFilter).to.be.a('function');
        });
    });
    describe('VisibilityFilters', () => {
        it('should be an object', () => {
            expect(VisibilityFilters).to.be.an('object');
        });
    });
});
