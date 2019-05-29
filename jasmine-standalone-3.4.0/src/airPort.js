function Airport(capacity) {
    this.planes = []; 
    this.capacity = capacity; 

    this.land = function(plane) {
        if (this.isStormy() === true) { throw 'Too stormy brah'; }
        if (this.planes.length === this.capacity) { throw 'Airport too full'; }
        this.planes.push(plane);
    }

    this.isStormy = function() {
        var chanceOfStorm = Math.floor((Math.random() * 10) + 1);
        if (chanceOfStorm >= 8) {
            return true; 
        } else {
            return false; 
        };
    }

    this.takeOff = function(plane) {
        var index = this.planes.indexOf(plane); 
        this.planes.splice(index, 1); 
        if (this.isStormy() === true) { throw 'Too stormy brah'; }
        return 'Plane is GONE bro, please leave the terminal';
    }    
    
};
