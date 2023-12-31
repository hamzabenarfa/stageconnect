/*import { Button } from "@/components/ui/button";
import { deleteInscriEntById, getListInscriEnt } from "@/services/InscriEnt";
import { InscriEntType } from "@/types/DataType"
import { useEffect, useState } from "react"

const User: React.FC = () => {
    const [user, setUser] = useState<InscriEntType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [idEntreprise, setIdEntreprise] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await getListInscriEnt();
            setUser(res.data);
        };
        fetchData();
    }, [user]);

    const handleDelete = async (id: string) => {
        deleteInscriEntById(id).then((res: any) => {
            const newList = user.filter((e1) => {
                return e1.id !== id;
            });
            setUser(newList);
            alert("deleted");
        });
    };

    return (
        <div>
            {user.map((element) => (
        <tr key={element.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{element.name_ent}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{element.numtel_ent}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{element.email_ent}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{element.pwd_ent}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <Button>Accept</Button>
                <Button>Refuse</Button>
            </td>
        </tr>
        ))}
        </div>
    );
}

export default User;*/