"use client";

import Image from "next/image";
import { useState } from "react";

type ResearchFigureProps = {
  title: string;
  figureNumber: number;
  src: string;
  alt: string;
  caption: string;
};

export default function ResearchFigure({ title, figureNumber, src, alt, caption }: ResearchFigureProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="min-w-0 border border-[#cad7e8] bg-[#f7faff] p-5">
      <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#54708f]">
        <span>{title}</span>
        <span>Figure {figureNumber}</span>
      </div>
      <div className="relative mt-6 h-72 bg-white">
        {!failed && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1240px) 332px, (min-width: 1024px) 30vw, calc(100vw - 90px)"
            className="object-contain"
            unoptimized
            onError={() => setFailed(true)}
          />
        )}
        {failed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-[#b7c8dc] bg-[#f7faff] p-6 text-center" role="status">
            <p className="text-sm font-semibold text-[#0b2a5b]">
              Dissertation figure not yet available
            </p>
            <p className="text-xs leading-6 text-[#54708f]">
              {`Awaiting the original Figure ${figureNumber} image.`}
            </p>
          </div>
        )}
      </div>
      <figcaption className="mt-5 text-sm leading-6 text-[#40536c]">{caption}</figcaption>
      {!failed && (
        <a href={src} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#0b2a5b] hover:text-[#2563eb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]" aria-label={`View full-size ${title} (opens in a new tab)`}>
          View full-size figure <span aria-hidden="true" className="ml-2">→</span>
        </a>
      )}
    </figure>
  );
}
