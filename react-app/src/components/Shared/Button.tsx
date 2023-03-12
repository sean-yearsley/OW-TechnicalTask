import cx from "classnames";

interface ButtonProps {
    text: string;
    disabled?: boolean;
    onClickHandler(): void;
}

function Button({
    text,
    disabled = false,
    onClickHandler
}: ButtonProps) {
    return (
        <button data-testid="btn" onClick={onClickHandler} disabled={disabled} className={cx(
            "rounded px-3 py-2 text-xs uppercase font-medium text-white",
            "md:px-3.5 md:py-1.5 md:text-sm",
            disabled ? "bg-slate-300" : "bg-[#006A87] hover:bg-[#007EA1]"
        )}>
            {text}
        </button>
    );
}

export default Button;
