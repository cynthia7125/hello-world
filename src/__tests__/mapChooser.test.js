import mapChooser from '../mapChooser';

describe("mapChooser", function () {
    it("returns portland.jpg when portland is passed into it", function () {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });
    // it("returns astoria.jpg when astoria is passed into it", function () {
    //     let expected = "astoria.jpg";
    //     let actual = mapChooser("astoria");
    //     expect(actual).toEqual(expected);
    // });
    it("returns a default image when no input is given", function () {
        let expected = "default.jpg";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
})