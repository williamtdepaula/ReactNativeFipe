const Dialog = require("./Dialog")
// @ponicode
describe("Dialog.showDialogWarningRequest", () => {
    test("0", () => {
        let callFunction = () => {
            Dialog.showDialogWarningRequest()
        }
    
        expect(callFunction).not.toThrow()
    })
})
