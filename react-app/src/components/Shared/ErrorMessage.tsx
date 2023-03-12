interface ErrorMessageProps {
    onRetryClickHandler?(): void;
}

function ErrorMessage({
    onRetryClickHandler
}: ErrorMessageProps) {
    return (
        <div className="rounded-md bg-rose-300 p-4 border border-rose-500 text-center">
            Sorry! There was an issue processing your request. Please try again later
            {onRetryClickHandler && (
                <button className="pl-1" onClick={onRetryClickHandler}>(<span className="underline cursor-pointer">retry now</span>)</button>
            )}
        </div>
    );
}

export default ErrorMessage;
