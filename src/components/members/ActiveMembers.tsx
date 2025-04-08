
import { useState } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, UserRound } from 'lucide-react';

// Mock data adaptado desde datos reales
const mockMembers = [
  { id: 5600, initials: "RN", name: "Rachel Nicole", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5601, initials: "SL", name: "Scarlet Luciana", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5602, initials: "WB", name: "Wara Brisa", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5603, initials: "YL", name: "Yorck Legolas", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5604, initials: "AK", name: "Axl Kevin", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5605, initials: "AF", name: "Adrián Fernando", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5606, initials: "MF", name: "Manuel Franco", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5607, initials: "AA", name: "Alvaro Ariel", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5608, initials: "JA", name: "Jesus Ademar", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5609, initials: "KC", name: "Kayro Cesar", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5610, initials: "AA", name: "Adrian Alberto", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5611, initials: "VC", name: "Valeria Christen", role: "Miembro", chapter: "data-science", joinedYear: "2025" },
  { id: 5612, initials: "AC", name: "Andres Chacon", role: "Miembro", chapter: "data-science", joinedYear: "2025" },

  // Los miembros anteriores (ya estaban en tu código)
  { id: 1331, initials: "AG", name: "Abel I. Garcia", role: "Miembro", chapter: "data-science", joinedYear: "2024" },
  { id: 1337, initials: "CZ", name: "Carlos A. Zarate", role: "Miembro", chapter: "security", joinedYear: "2024" },
  { id: 1417, initials: "AJ", name: "Alvaro G. Jurado", role: "Miembro", chapter: "data-science", joinedYear: "2024" },
  { id: 1418, initials: "JT", name: "Jhulianna V. Tarqui", role: "Líder", chapter: "data-science", joinedYear: "2024" },
  { id: 1419, initials: "JN", name: "Josue A. Nisthaus", role: "Miembro", chapter: "security", joinedYear: "2024" },
  { id: 1420, initials: "LV", name: "Luciana Velasco", role: "Miembro", chapter: "security", joinedYear: "2024" },
  { id: 1910, initials: "AP", name: "Andy F. Palenque", role: "Miembro", chapter: "data-science", joinedYear: "2024" },
  { id: 2625, initials: "GC", name: "Gino Crespo", role: "Miembro", chapter: "data-science", joinedYear: "2024" },
  { id: 2671, initials: "AB", name: "Alejandro A. Bobarin", role: "Miembro", chapter: "data-science", joinedYear: "2024" },
  { id: 3969, initials: "CM", name: "Christian M. Mendoza", role: "Líder", chapter: "data-science", joinedYear: "2024" },
  { id: 4203, initials: "MP", name: "Max A. Pasten", role: "Líder", chapter: "data-science", joinedYear: "2024" },
  { id: 4321, initials: "OC", name: "Oscar Campohermoso", role: "Miembro", chapter: "data-science", joinedYear: "2023" },
  { id: 5571, initials: "IR", name: "Ignacio Retamozo", role: "Miembro", chapter: "security", joinedYear: "2024" },
  { id: 6808, initials: "CV", name: "Cesar M. Vera", role: "Líder", chapter: "data-science", joinedYear: "2024" },
  { id: 6973, initials: "AO", name: "Ariel Oblitas", role: "Miembro", chapter: "security", joinedYear: "2024" },
  { id: 7209, initials: "LR", name: "Luis D. Rojas", role: "Miembro", chapter: "security", joinedYear: "2024" },
  { id: 7746, initials: "AF", name: "Andrea L. Fernández", role: "Líder", chapter: "data-science", joinedYear: "2024" },
  { id: 8080, initials: "MC", name: "Miguel A. Carrasco", role: "Miembro", chapter: "data-science", joinedYear: "2023" },
  { id: 8540, initials: "JH", name: "Jaime I. Huaycho", role: "Miembro", chapter: "security", joinedYear: "2024" },
  { id: 8984, initials: "JV", name: "Jaicel J. Velasco", role: "Miembro", chapter: "data-science", joinedYear: "2024" },
];


const ActiveMembers = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredMembers = filter 
    ? mockMembers.filter(member => member.chapter === filter)
    : mockMembers;

  const getChapterName = (chapterId: string) => {
    switch (chapterId) {
      case 'security':
        return 'Seguridad';
      case 'data-science':
        return 'Ciencia de Datos';
      case 'business':
        return 'Tecnología Empresarial';
      case 'systems':
        return 'Hardware & Software';
      default:
        return '';
    }
  };

  const getChapterColor = (chapterId: string) => {
    switch (chapterId) {
      case 'security':
        return 'bg-chapter-security-dark text-white';
      case 'data-science':
        return 'bg-chapter-data-science-dark text-white';
      case 'business':
        return 'bg-chapter-business-dark text-white';
      case 'systems':
        return 'bg-chapter-systems-dark text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Miembros Activos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Nuestros miembros participan en diferentes capítulos según su área de interés.
          </p>
        </div>
        
        <div className="mt-6 md:mt-0">
          <div className="relative">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Filtrar por capítulo:</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <button
                onClick={() => setFilter(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  filter === null 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Todos
              </button>
              {['security', 'data-science', 'business', 'systems'].map((chapter) => (
                <button
                  key={chapter}
                  onClick={() => setFilter(chapter)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    filter === chapter 
                      ? `bg-chapter-${chapter}-dark text-white` 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {getChapterName(chapter)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Perfil</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Capítulo</TableHead>
              <TableHead className="text-right">Año de ingreso</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getChapterColor(member.chapter)}`}>
                    {getChapterName(member.chapter)}
                  </span>
                </TableCell>
                <TableCell className="text-right">{member.joinedYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>Respetamos la privacidad de nuestros miembros. Para más información, contáctanos.</p>
      </div>
    </div>
  );
};

export default ActiveMembers;