describe("An airport", function() { 
   // var airport; 
   // var plane; 
    
    beforeEach(function() {
        airport = new Airport(); 
        plane = jasmine.createSpy('plane'); 
        spyOn(airport, 'isStormy').and.returnValue(false);
    }); 
    
    it ("is an airport with an empty array", function() {
        expect(airport.planes).toEqual([]); 
    }); 
    
    it ("adds a plane to its array (land)", function() {
        airport.land(plane);
        expect(airport.planes).toEqual([plane]);
    });

    it ("deletes a plane from its array (take-off)", function() {
        airport.land(plane);
        airport.takeOff(plane);
        expect(airport.planes).toEqual([]); 
    });

    describe("When weather", function() {
        beforeEach(function() {
            airport = new Airport(); 
            plane = jasmine.createSpy('plane'); 
        });

        it ("is too stormy to take off", function() {
            airport.planes.push('plane');
            spyOn(airport, 'isStormy').and.returnValue(true);
            expect(function() { airport.takeOff(plane);}).toThrow('Too stormy brah');
        });

        it ("is too stormy to land", function() {
            spyOn(airport, 'isStormy').and.returnValue(true);
            expect(function() { airport.land(plane);}).toThrow('Too stormy brah');
        });
    });
});