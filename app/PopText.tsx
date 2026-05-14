"use client";

type Props = {
  text: string;
  className?: string;
};

export default function PopText({ text, className }: Props) {
  return (
    <span className={`inline-block pop-text-animation ${className ?? ""}`}>
      {text}
    </span>
  );
}
