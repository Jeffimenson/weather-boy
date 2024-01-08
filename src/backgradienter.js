// ---- COLOR CHANGING STUFF ---- //

// Helper function to convert hex to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
}

// Helper function to convert RGB to hex
function rgbToHex(r, g, b) {
    const toHex = (c) => `0${c.toString(16)}`.slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Function to interpolate color between orange and blue
const darkBlue = '#08415C'; // Blue
const lightBlue = '#F6AF65';
const barBlue = '#3993DD';

const darkOrange = '#ab386f'; // Orange
const lightOrange = '#F6AF65';
const barOrg = '#F6AF65';

function interpolateColor(value) {
    const isCold = value < 65;
    const startHex = isCold ? darkBlue : darkOrange;
    const endHex = isCold ? lightBlue : lightOrange;
    const barColor = isCold ? barBlue : barOrg;
    const textColor = isCold ? darkBlue : darkOrange;

    const startColor = hexToRgb(startHex);
    const endColor = hexToRgb(endHex);

    const r = Math.round(
        startColor.r + (endColor.r - startColor.r) * (value / 100)
    );
    const g = Math.round(
        startColor.g + (endColor.g - startColor.g) * (value / 100)
    );
    const b = Math.round(
        startColor.b + (endColor.b - startColor.b) * (value / 100)
    );

    return {
        start: rgbToHex(startColor.r, startColor.g, startColor.b),
        end: rgbToHex(r, g, b),
        bar: barColor,
        text: textColor,
    };
}

// Function to update the gradient based on a value
function updateGradient(value) {
    const color = interpolateColor(value);
    document.body.style.background = `linear-gradient(to bottom, ${color.start}, ${color.end})`;

    const bars = document.querySelectorAll('.temp-bar');
    bars.forEach((bar) => {
        console.log(bar);
        bar.style.background = color.bar;
        bar.style.color = color.text;
    });
}

export default { updateGradient };
