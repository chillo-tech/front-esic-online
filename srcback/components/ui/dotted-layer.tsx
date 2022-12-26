export default function DottedLayer({
  className,
  width,
  height,
}: {
  className: string;
  width: number;
  height: number;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${width}`}
    >
      <defs>
        <pattern
          id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={width}
        height={height}
        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
      />
    </svg>
  );
}
