const parsePx = (value) => {
    const match = value.trim().match(/^(-?\d*\.?\d+)px$/);
    return match ? Number(match[1]) : null;
};

const normalizePx = (value) => `${Number(value.toFixed(3))}px`;
const LEGACY_FALLBACK_VIEWPORT = 1280;

const evaluatePreferredPx = (value, viewportWidth = 1440) => {
    let normalized = value.replace(/\s+/g, '').trim();

    if (normalized.startsWith('calc(') && normalized.endsWith(')')) {
        normalized = normalized.slice(5, -1);
    }

    const plainPx = parsePx(normalized);
    if (plainPx != null) {
        return plainPx;
    }

    const vwMatch = normalized.match(/^(-?\d*\.?\d+)vw$/);
    if (vwMatch) {
        return Number(vwMatch[1]) * viewportWidth / 100;
    }

    const calcMatch = normalized.match(/^calc\((-?\d*\.?\d+)px([+-])(-?\d*\.?\d+)vw\)$/);
    if (calcMatch) {
        const basePx = Number(calcMatch[1]);
        const operator = calcMatch[2];
        const vwValue = Number(calcMatch[3]) * viewportWidth / 100;
        return operator === '-' ? basePx - vwValue : basePx + vwValue;
    }

    const fluidMatch = normalized.match(
        /^(-?\d*\.?\d+)px([+-])\((-?\d*\.?\d+)px-(-?\d*\.?\d+)px\)\/\((-?\d*\.?\d+)px-(-?\d*\.?\d+)px\)\*\(100vw-(-?\d*\.?\d+)px\)$/
    );
    if (fluidMatch) {
        const basePx = Number(fluidMatch[1]);
        const operator = fluidMatch[2];
        const numerator = Number(fluidMatch[3]) - Number(fluidMatch[4]);
        const denominator = Number(fluidMatch[5]) - Number(fluidMatch[6]);
        const minViewport = Number(fluidMatch[7]);

        if (denominator !== 0) {
            const delta = numerator / denominator * (viewportWidth - minViewport);
            return operator === '-' ? basePx - delta : basePx + delta;
        }
    }

    const simplifiedFluidMatch = normalized.match(
        /^(-?\d*\.?\d+)px([+-])(-?\d*\.?\d+)px\/(-?\d*\.?\d+)px\*\(100vw-(-?\d*\.?\d+)px\)$/
    );
    if (simplifiedFluidMatch) {
        const basePx = Number(simplifiedFluidMatch[1]);
        const operator = simplifiedFluidMatch[2];
        const numerator = Number(simplifiedFluidMatch[3]);
        const denominator = Number(simplifiedFluidMatch[4]);
        const minViewport = Number(simplifiedFluidMatch[5]);

        if (denominator !== 0) {
            const delta = numerator / denominator * (viewportWidth - minViewport);
            return operator === '-' ? basePx - delta : basePx + delta;
        }
    }

    const ratioFluidMatch = normalized.match(
        /^(-?\d*\.?\d+)px([+-])(-?\d*\.?\d+)\*\(\(100vw-(-?\d*\.?\d+)px\)\/(-?\d*\.?\d+)\)$/
    );
    if (ratioFluidMatch) {
        const basePx = Number(ratioFluidMatch[1]);
        const operator = ratioFluidMatch[2];
        const coefficient = Number(ratioFluidMatch[3]);
        const minViewport = Number(ratioFluidMatch[4]);
        const denominator = Number(ratioFluidMatch[5]);

        if (denominator !== 0) {
            const delta = coefficient * ((viewportWidth - minViewport) / denominator);
            return operator === '-' ? basePx - delta : basePx + delta;
        }
    }

    return null;
};

const getFunctionRange = (value, functionName, searchStart = 0) => {
    const token = `${functionName}(`;
    const start = value.indexOf(token, searchStart);
    if (start === -1) return null;

    let depth = 0;
    for (let index = start + functionName.length; index < value.length; index += 1) {
        const char = value[index];
        if (char === '(') depth += 1;
        if (char === ')') {
            depth -= 1;
            if (depth === 0) {
                return {
                    start,
                    end: index + 1,
                    content: value.slice(start + token.length, index),
                };
            }
        }
    }

    return null;
};

const splitTopLevelArgs = (value) => {
    const parts = [];
    let depth = 0;
    let start = 0;

    for (let index = 0; index < value.length; index += 1) {
        const char = value[index];
        if (char === '(') depth += 1;
        if (char === ')') depth -= 1;
        if (char === ',' && depth === 0) {
            parts.push(value.slice(start, index).trim());
            start = index + 1;
        }
    }

    parts.push(value.slice(start).trim());
    return parts;
};

const replaceCssFunction = (value, functionName, replacer) => {
    let nextValue = value;
    let cursor = 0;

    while (true) {
        const range = getFunctionRange(nextValue, functionName, cursor);
        if (!range) return nextValue;

        const args = splitTopLevelArgs(range.content);
        const replacement = replacer(args);
        if (!replacement) {
            cursor = range.end;
            continue;
        }

        nextValue = `${nextValue.slice(0, range.start)}${replacement}${nextValue.slice(range.end)}`;
        cursor = range.start + replacement.length;
    }
};

const computeClampFallback = (args) => {
    const minPx = parsePx(args[0] || '');
    const maxPx = parsePx(args[2] || '');
    const preferredPx = evaluatePreferredPx(args[1] || '', LEGACY_FALLBACK_VIEWPORT);

    if (preferredPx != null && minPx != null && maxPx != null) {
        return normalizePx(Math.min(maxPx, Math.max(minPx, preferredPx)));
    }

    return args[2] || args[0] || null;
};

const insetFallback = () => ({
    postcssPlugin: 'postcss-inset-fallback',
    Declaration(decl) {
        if (decl.prop !== 'inset') return;

        const parts = decl.value.trim().split(/\s+/);
        const [top, right = top, bottom = top, left = right] = parts;

        decl.cloneBefore({ prop: 'top', value: top });
        decl.cloneBefore({ prop: 'right', value: right });
        decl.cloneBefore({ prop: 'bottom', value: bottom });
        decl.cloneBefore({ prop: 'left', value: left });
        decl.remove();
    }
});
insetFallback.postcss = true;

const clampFallback = () => ({
    postcssPlugin: 'postcss-clamp-fallback',
    Declaration(decl) {
        if (!decl.value || !decl.value.includes('clamp(') || decl.prop.startsWith('--')) return;

        const fallbackValue = replaceCssFunction(decl.value, 'clamp', computeClampFallback);
        if (!fallbackValue || fallbackValue === decl.value) return;

        const previousDecl = decl.prev();
        if (previousDecl?.type === 'decl' && previousDecl.prop === decl.prop && previousDecl.value === fallbackValue) {
            return;
        }

        decl.cloneBefore({ value: fallbackValue });
    }
});
clampFallback.postcss = true;

module.exports = {
    insetFallback,
    clampFallback,
};
