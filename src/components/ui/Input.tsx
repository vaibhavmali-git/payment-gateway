import { InputHTMLAttributes, forwardRef, useId, ReactNode } from 'react';
import { cn } from '@/utils/tw';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, rightIcon, id: externalId, ...props }, ref) => {
   
    const internalId = useId();
    const id = externalId || internalId;
    const errorId = `${id}-error`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        
        <div className="relative">
          <input
            id={id}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "w-full rounded-lg border bg-white px-3 py-2.5 text-gray-900 outline-none transition-all focus:ring-2 focus:ring-offset-1 placeholder:text-gray-400",
              error 
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
                : "border-gray-300 focus:border-gray-900 focus:ring-gray-900/20",
              rightIcon && "pr-12",
              className
            )}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

       
        <div className="min-h-[20px]">
          {error && (
            <span id={errorId} className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1">
              {error}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';