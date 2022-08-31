import { Alignment, nearestValueInSnapIntervals, Panel } from ".";

describe("dynamic window sizing", () => {
  let panel: Panel;

  beforeEach(() => {
    panel = new Panel();
  });

  it("changes alignment as expected", () => {
    expect(panel.alignment).toEqual(Alignment.L);

    panel.changeAlignment();

    expect(panel.alignment).toEqual(Alignment.R);

    panel.changeAlignment();

    expect(panel.alignment).toEqual(Alignment.L);
  });

  it("changes x position with alignment", () => {
    expect(panel.x).toEqual(0);

    panel.changeAlignment();

    expect(panel.x).toEqual(0.75);

    panel.changeAlignment();

    expect(panel.x).toEqual(0);
  });

  it("Finds the nearest value in an array", () => {
    expect(nearestValueInSnapIntervals(0.3252423)).toEqual(0.33);
    expect(nearestValueInSnapIntervals(0.4)).toEqual(0.33);
    expect(nearestValueInSnapIntervals(0.9999)).toEqual(1);
    expect(nearestValueInSnapIntervals(3)).toEqual(1);
    expect(nearestValueInSnapIntervals(0.66546356)).toEqual(0.66);
    expect(nearestValueInSnapIntervals(-102303023)).toEqual(0.25);
  });
});
