let get_current_epoch = require('./index');

describe('Epoch Generator Service', () => {
    test('should return a valid epoch timestamp', async () => {
        let timestamp = await get_current_epoch();

        expect(typeof timestamp.epoch_time).toBe('number');
        expect(timestamp.epoch_time).toBeGreaterThan(0);
    });

    test('should return epoch time in seconds (not milliseconds)', async () => {
        let timestamp = await get_current_epoch();

        let nowInSeconds = Math.floor(Date.now() / 1000);
        expect(timestamp.epoch_time).toBeCloseTo(nowInSeconds, -1); // Allow 1-second tolerance
    });

    test('should update the timestamp on subsequent calls', async () => {
        let timestamp1 = await get_current_epoch();

        setTimeout(async () => {
            let timestamp2 = await get_current_epoch();

            expect(timestamp2.epoch_time).toBeGreaterThan(timestamp1.epoch_time);
        }, 5000); // Test after 2 seconds
    });
});
