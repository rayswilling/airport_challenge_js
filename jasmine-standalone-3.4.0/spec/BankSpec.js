describe("A bank", function () {
    beforeEach(function() {
        bank = new Bank(); 
    });

    it ("has a starting bank balance of 0", function() {
        expect(bank.bankBalance).toEqual(0);
    });

});




// describe("A bank", function() { 
    
//     beforeEach(function() {
//         airport = new Airport(); 
//         plane = jasmine.createSpy('plane'); 
//         spyOn(airport, 'isStormy').and.returnValue(false);
//     }); 
    
//     it ("is an airport with an empty array", function() {
//         expect(airport.planes).toEqual([]); 
//     }); 
    
//     it ("adds a plane to its array (land)", function() {
//         airport.land(plane);
//         expect(airport.planes).toEqual([plane]);
//     });

//     it ("deletes a plane from its array (take-off)", function() {
//         airport.land(plane);
//         airport.takeOff(plane);
//         expect(airport.planes).toEqual([]); 
//     });
// });