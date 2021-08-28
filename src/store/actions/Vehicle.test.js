const Vehicle = require("./Vehicle")
// @ponicode
describe("Vehicle.setVehicle", () => {
    test("0", () => {
        let callFunction = () => {
            Vehicle.setVehicle("Toyota Taurus")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Vehicle.setVehicle("Tesla Sentra")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Vehicle.setVehicle("BMW Prius")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Vehicle.setVehicle("Mazda LeBaron")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Vehicle.setVehicle("Cadillac A4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Vehicle.setVehicle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Vehicle.setLoadingVehicle", () => {
    test("0", () => {
        let callFunction = () => {
            Vehicle.setLoadingVehicle("Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Vehicle.setLoadingVehicle("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Vehicle.setLoadingVehicle("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Vehicle.setLoadingVehicle("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Vehicle.setLoadingVehicle("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Vehicle.setLoadingVehicle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Vehicle.setErrorVehicle", () => {
    test("0", () => {
        let callFunction = () => {
            Vehicle.setErrorVehicle("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Vehicle.setErrorVehicle("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Vehicle.setErrorVehicle("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Vehicle.setErrorVehicle("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Vehicle.setErrorVehicle("error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Vehicle.setErrorVehicle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
