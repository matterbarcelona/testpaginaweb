import { z } from "zod";

export const contactoSchema = z.object({
  nombre: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre es demasiado largo" }),
  
  email: z.string()
    .trim()
    .email({ message: "Introduce un email válido" })
    .max(255, { message: "El email es demasiado largo" }),
  
  empresa: z.string()
    .trim()
    .min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre de la empresa es demasiado largo" }),
  
  ciudad: z.string()
    .trim()
    .min(2, { message: "La ciudad debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre de la ciudad es demasiado largo" }),
  
  perfil: z.enum(["prescriptor", "fabricante", "constructor", "otro"], {
    required_error: "Por favor, selecciona tu perfil",
  }),
  
  mensaje: z.string()
    .trim()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(1000, { message: "El mensaje es demasiado largo (máximo 1000 caracteres)" }),
  
  rgpd: z.boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar la política de privacidad",
    }),
});

export type ContactoFormData = z.infer<typeof contactoSchema>;
