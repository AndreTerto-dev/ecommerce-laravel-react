import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => { },
    children,
}) {
    const isAscending = sort_field === name && sort_direction === "asc";
    const isDescending = sort_field === name && sort_direction === "desc";

    return (
        <th onClick={() => sortChanged(name)}>
            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                {children}
                {sortable && (
                    <div className="flex flex-col items-center">
                        <ChevronUpIcon
                            className={`w-4 ${isAscending ? "text-white" : "text-gray-400"}`}
                        />
                        <ChevronDownIcon
                            className={`w-4 -mt-2 ${isDescending ? "text-white" : "text-gray-400"}`}
                        />
                    </div>
                )}
            </div>
        </th>
    );
}
