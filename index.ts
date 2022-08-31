/**
 * 21:9 window tiling for KWIN
 */

class ViewPort {
  constructor(v: number, w: number) {}
}

export enum Alignment {
  "L",
  "R"
}
export const SnapIntervals = [0.25, 0.33, 0.5, 0.66, 0.75, 1];

// nearest index value to passed number - assumes a sorted array in increasing order
export function indexOfNearestValueInArray(val: number, arr: number[]): number {
  // short circuit - large or small values O[1]
  if (val < arr[0]) return 0;
  if (val > arr[arr.length]) return arr.length;

  let smallestDiffIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const diffCurr = Math.abs(val - arr[i]);
    const diffPrev = i == 0 ? 0 : Math.abs(val - arr[i - 1]);
    if (diffCurr < diffPrev) {
      smallestDiffIndex = i;
    } else {
      // If differential is increasing, stop searching
      if (i != 0) break;
    }
  }
  return smallestDiffIndex;
}

export function nearestValueInSnapIntervals(val: number): number {
  const nearestIndex = indexOfNearestValueInArray(val, SnapIntervals);
  return SnapIntervals[nearestIndex];
}

export class Panel {
  constructor(public alignment = Alignment.L, public width: number = 0.25, public x: number = 0) {}

  public changeAlignment(): void {
    this.alignment = 1 - this.alignment;
    if (this.alignment === Alignment.L) {
      this.x = 0;
    } else {
      this.x = 1 - this.width;
    }
  }

  public increaseWidth(): void {}
}

const vp = new ViewPort(3440, 1440);
