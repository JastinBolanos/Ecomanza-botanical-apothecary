import React from 'react';

interface EcomanzaLogoProps {
  className?: string;
  color?: string; // default to brand burgundy #611C35
  height?: number | string;
}

/**
 * Exact vector reproduction of the ECOMANZA custom typography from the reference image:
 * - 'E': Three distinct horizontal parallel bars (no vertical spine).
 * - 'C' & 'O': Bold geometric curves with clean horizontal terminal cuts.
 * - 'M': Vertical outer stems with deep central V reaching the baseline.
 * - 'A': Solid top half with an iconic central upward triangle separated by angled negative-space slits.
 * - 'N': Geometric diagonal connecting the vertical stems.
 * - 'Z': Dynamic sheared diagonal with angled chamfered terminals matching the letter A's angle.
 */
export const EcomanzaLogo: React.FC<EcomanzaLogoProps> = ({
  className = 'h-8 w-auto',
  color = '#611C35',
  height,
}) => {
  return (
    <svg
      viewBox="0 0 636 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={height ? { height } : undefined}
      role="img"
      aria-label="ECOMANZA"
    >
      {/* ===== E ===== */}
      <rect x="0" y="1" width="54" height="18" fill={color} />
      <rect x="0" y="32" width="54" height="18" fill={color} />
      <rect x="0" y="63" width="54" height="18" fill={color} />

      {/* ===== C ===== */}
      <path
        d="M 125,1 C 94,1 66,18 66,41 C 66,64 94,81 125,81 L 125,63 C 104,63 88,52 88,41 C 88,30 104,19 125,19 Z"
        fill={color}
      />

      {/* ===== O ===== */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 180,1 C 153,1 138,19 138,41 C 138,63 153,81 180,81 C 207,81 222,63 222,41 C 222,19 207,1 180,1 Z M 180,19 C 193,19 200,29 200,41 C 200,53 193,63 180,63 C 167,63 160,53 160,41 C 160,29 167,19 180,19 Z"
        fill={color}
      />

      {/* ===== M ===== */}
      {/* Left stem */}
      <rect x="234" y="1" width="20" height="80" fill={color} />
      {/* Right stem */}
      <rect x="294" y="1" width="20" height="80" fill={color} />
      {/* Center V diagonals */}
      <polygon points="244,1 258,1 274,81 264,81" fill={color} />
      <polygon points="304,1 290,1 274,81 284,81" fill={color} />

      {/* ===== A (1) ===== */}
      {/* Solid upper trapezoid + outer legs */}
      <polygon points="324,81 360,1 396,81 378,81 360,40 342,81" fill={color} />
      <polygon points="342,40 360,1 378,40" fill={color} />
      {/* Central triangle on baseline */}
      <polygon points="351,81 360,48 369,81" fill={color} />

      {/* ===== N ===== */}
      <rect x="406" y="1" width="20" height="80" fill={color} />
      <rect x="454" y="1" width="20" height="80" fill={color} />
      <polygon points="406,1 426,1 474,81 454,81" fill={color} />

      {/* ===== Z ===== */}
      {/* Top bar with angled cut */}
      <polygon points="484,1 532,1 550,19 484,19" fill={color} />
      {/* Diagonal stroke */}
      <polygon points="550,19 530,19 484,63 504,63" fill={color} />
      {/* Bottom bar with angled cut */}
      <polygon points="504,63 550,63 550,81 502,81 484,63" fill={color} />
      <polygon points="502,81 550,81 550,63 504,63" fill={color} />

      {/* ===== A (2) ===== */}
      <polygon points="560,81 596,1 632,81 614,81 596,40 578,81" fill={color} />
      <polygon points="578,40 596,1 614,40" fill={color} />
      <polygon points="587,81 596,48 605,81" fill={color} />
    </svg>
  );
};

export const EcomanzaMark: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#611C35',
}) => {
  return (
    <svg viewBox="0 0 54 82" fill="none" className={className} role="img" aria-label="Ecomanza Icon">
      <rect x="0" y="1" width="54" height="18" rx="1" fill={color} />
      <rect x="0" y="32" width="54" height="18" rx="1" fill={color} />
      <rect x="0" y="63" width="54" height="18" rx="1" fill={color} />
    </svg>
  );
};
