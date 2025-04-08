
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Rocket, Users, Award, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  projectTitle: z.string().min(3, {
    message: "El título del proyecto debe tener al menos 3 caracteres.",
  }),
  projectDescription: z.string().min(10, {
    message: "La descripción debe tener al menos 10 caracteres.",
  }),
});

const ProjectProposalSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectTitle: "",
      projectDescription: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this data to your backend
    console.log(values);

    toast({
      title: "Propuesta enviada",
      description: "Hemos recibido tu propuesta de proyecto. Te contactaremos pronto.",
    });

    form.reset();
    setIsDialogOpen(false);
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Tienes una idea innovadora? ¡Nosotros te apoyamos!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Como miembro de la SCE, puedes postular tu proyecto o idea y te ayudaremos a encontrar
            colaboradores, desarrollar tu concepto e incluso buscar oportunidades de financiamiento.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Desarrolla tu idea</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Transforma tu concepto en un proyecto real con nuestra orientación y recursos.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Forma tu equipo</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Te ayudamos a encontrar colaboradores con las habilidades necesarias para tu proyecto.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lanza tu startup</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Si tu proyecto tiene potencial comercial, te guiamos en el proceso de crear una startup.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Obtén financiamiento</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Te conectamos con aceleradoras e inversionistas interesados en proyectos innovadores.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9a8pbHMaSny4hHzvSk6i_Oha9ItIbY4gIMKoaJOZ6QABolQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8">
              Postula tu proyecto
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectProposalSection;
