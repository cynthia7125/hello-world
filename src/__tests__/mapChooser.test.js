import mapChooser from '../mapChooser';

describe("mapChooser", function () {
    it("returns portland.png when portland is passed into it", function () {
        let expected = "portland.png";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });
    // it("returns astoria.png when astoria is passed into it", function () {
    //     let expected = "astoria.png";
    //     let actual = mapChooser("astoria");
    //     expect(actual).toEqual(expected);
    // });
    it("returns a default image when no input is given", function () {
        let expected = "none.png";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
})