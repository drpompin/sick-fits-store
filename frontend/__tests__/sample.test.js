describe('sample test 101', () => {
    it('works as expected', () => {
        const age = 100;
        expect(1).toEqual(1);
        expect(age).toEqual(100);
    });

    // NB: fit; also (it.skip) as used below is a short form to run only that specific test    
    /* fit('handles ranges just fine', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    }); */

    // NB: xit; also (it.only) as used below is a short form to skip only that specific test and run 
    // the others
    /*xit('handles ranges just fine', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    }); */

    it('handles ranges just fine', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    });

    it('makes a list of dog names', () => {
        const dogs = ['snickers', 'hugo'];
        expect(dogs).toEqual(dogs);
        expect(dogs).toContain('snickers');
        expect(dogs).toContain('snickers');
    });
});