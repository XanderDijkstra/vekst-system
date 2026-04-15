import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface CalcInputProps {
  label: string;
  hint?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  slider?: boolean;
  sliderMax?: number;
  sliderMin?: number;
  sliderStep?: number;
  icon?: ReactNode;
}

/**
 * Shared input control for calculator pages.
 * - Plain number input by default.
 * - Optionally renders a slider below that is bound to the same value.
 * - Prefix (e.g. "€") and suffix (e.g. "%") are rendered inside the input.
 */
const CalcInput = ({
  label,
  hint,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  prefix,
  suffix,
  slider = false,
  sliderMin,
  sliderMax,
  sliderStep,
  icon,
}: CalcInputProps) => {
  const handleChange = (raw: string) => {
    if (raw === "") {
      onChange(0);
      return;
    }
    const parsed = Number(raw.replace(",", "."));
    if (Number.isNaN(parsed)) return;
    const clamped = max !== undefined ? Math.min(max, Math.max(min, parsed)) : Math.max(min, parsed);
    onChange(clamped);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          {icon}
          {label}
        </label>
      </div>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">
            {prefix}
          </span>
        )}
        <Input
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => handleChange(e.target.value)}
          min={min}
          max={max}
          step={step}
          className={`h-12 text-lg font-semibold ${prefix ? "pl-8" : ""} ${suffix ? "pr-10" : ""}`}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {slider && (
        <div className="mt-3 px-1">
          <Slider
            value={[value]}
            min={sliderMin ?? min}
            max={sliderMax ?? max ?? 100}
            step={sliderStep ?? step}
            onValueChange={(v) => onChange(v[0])}
          />
        </div>
      )}
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
};

export default CalcInput;
