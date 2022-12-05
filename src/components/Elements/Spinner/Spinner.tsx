import { loadingSpinStyle, loadingStyle, srOnly } from "./style.css";

export type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className = "" }: SpinnerProps) => {
  return (
    <>
      <div className={`${loadingStyle} ${className}`}>
        <span className={srOnly}>Loading</span>
        <div className={loadingSpinStyle} />
      </div>
    </>
  );
};
