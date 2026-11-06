"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  imagePosition: string;
  beforeLabel: string;
  afterLabel: string;
  sliderLabel: string;
  service: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  imagePosition,
  beforeLabel,
  afterLabel,
  sliderLabel,
  service,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const comparisonStyle = {
    "--comparison-position": `${position}%`,
  } as CSSProperties;

  return (
    <div className="work-comparison" style={comparisonStyle}>
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 46vw"
        className="work-comparison__after"
        style={{ objectPosition: imagePosition }}
      />
      <div className="work-comparison__before-clip" aria-hidden="true">
        <Image
          src={beforeImage}
          alt=""
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 46vw"
          className="work-comparison__before"
          style={{ objectPosition: imagePosition }}
        />
      </div>

      <span className="work-comparison__label work-comparison__label--before">{beforeLabel}</span>
      <span className="work-comparison__label work-comparison__label--after">{afterLabel}</span>
      <input
        aria-label={`${sliderLabel} ${service}. ${beforeLabel}: ${beforeAlt}. ${afterLabel}: ${afterAlt}.`}
        className="work-comparison__range"
        type="range"
        min="0"
        max="100"
        step="1"
        value={position}
        onChange={(event) => setPosition(Number(event.currentTarget.value))}
      />
      <span className="work-comparison__divider" aria-hidden="true">
        <span />
      </span>
    </div>
  );
}
