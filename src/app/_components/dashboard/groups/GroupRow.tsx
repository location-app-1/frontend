import { GearIcon } from "@radix-ui/react-icons";
import { Avatar, Button, Table, Tooltip } from "@radix-ui/themes";
import { LuCrown } from "react-icons/lu";

interface GroupRowProps {
    name: string;
    isOwner: boolean;
    members: string[];
}

export default function GroupRow({ name, isOwner, members }: GroupRowProps) {
    members = ["1", "2", "3"];
    return (
        <>
            <Table.Row className="h-full">
                <Table.RowHeaderCell
                    className="flex h-full flex-row items-center gap-2"
                    p="5"
                >
                    {isOwner ? (
                        <Tooltip content="You own this group">
                            <LuCrown className="text text-amber-400" />
                        </Tooltip>
                    ) : (
                        <LuCrown className="text text-transparent" />
                    )}
                    {name}
                </Table.RowHeaderCell>
                <Table.Cell className="">
                    {members.map((member, index) => (
                        <Avatar
                            radius={"full"}
                            key={member}
                            src="https://placehold.co/400x400"
                            size="1"
                            className={`${index !== 0 ? "-ml-3" : ""} border-2 border-white`}
                            fallback={""}
                        />
                    ))}
                </Table.Cell>
                <Table.Cell className="flex flex-col items-center">
                    <Button variant="ghost" className="w-full">
                        <GearIcon />
                    </Button>
                </Table.Cell>
            </Table.Row>
        </>
    );
}
