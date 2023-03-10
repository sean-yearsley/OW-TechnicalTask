interface BadgeProps {
    text: string;
}

function Badge({
    text
}: BadgeProps) {
    return (
        <span className="text-sm rounded-full bg-[#1CAE9F] text-white font-medium py-0.5 px-2 ml-2">
            {text}
        </span>
    );
}

export default Badge;
