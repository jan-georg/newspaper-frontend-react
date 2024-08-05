type AddButtonProps = {
    onClick: () => void
}

export function AddButton({ onClick }: AddButtonProps) {
    return (
        <div
            className="flex justify-center items-center h-full hover:cursor-pointer"
            onClick={onClick}
        >
            <span className="material-symbols-outlined text-gray-500">add</span>
        </div>
    )
}
