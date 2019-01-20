class Parallelogram {
    constructor(base,height) {
        this.base=base;
        this.height=height;
    }
}

function areaOfParallelogram(base,height,decimalPlace) {
    const area =(base*height);
    return area.toFixed(decimalPlace);
}


console.log(areaOfParallelogram(12,7,2))




class Cylinder {
    constructor(radius,height) {
        this.radius=radius;
        this.height=height;
    }
}

function volumeOfCylinder(radius,height,decimalPlace) {
    const pi= 3.142;
    const volume= pi*(radius*radius*height);
    return volume.toFixed(decimalPlace);
}

console.log(volumeOfCylinder(5,13,2))


class Rectangle {
    constructor(length,breadth) {
        this.length=length;
        this.breadth=breadth;
    }
}

function areaOfRectangle(length,breadth,decimalPlace) {
    const area= (length*breadth);
    return area.toFixed(decimalPlace);
}

console.log(areaOfRectangle(6,10,2))

































