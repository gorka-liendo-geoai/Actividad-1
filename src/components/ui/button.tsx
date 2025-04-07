import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Paleta corporativa moderna
        primary: "bg-blue-600 text-white shadow hover:bg-blue-700 hover:shadow-md", // Acción principal
        secondary: "bg-emerald-500 text-white shadow-sm hover:bg-emerald-600", // Acción secundaria
        accent: "bg-violet-600 text-white shadow-sm hover:bg-violet-700", // Llamadas a la acción destacadas
        danger: "bg-rose-500 text-white shadow-sm hover:bg-rose-600", // Acción de alerta o eliminar
        
        // Variantes existentes con nuevos colores
        outline: "border border-blue-300 bg-transparent text-blue-600 hover:bg-blue-50", // Bordes sutiles
        ghost: "text-blue-600 hover:bg-blue-50", // Botón transparente
        link: "text-blue-600 underline-offset-4 hover:underline", // Enlaces
        
        // Descargas de archivos
        downloadApp: "bg-green-600 text-white shadow-lg hover:bg-green-700 hover:shadow-xl", // Descarga de aplicación
        downloadPdf: "bg-yellow-600 text-white shadow-sm hover:bg-yellow-700", // Descarga de PDF
        downloadResource: "bg-teal-600 text-white shadow-sm hover:bg-teal-700", // Descarga de recurso o archivo
        
        // Variantes para formularios o suscripciones
        subscribe: "bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg", // Botón para suscripción
        formSubmit: "bg-blue-500 text-white shadow-sm hover:bg-blue-600", // Enviar formulario
        
        // Variantes para estados de carga y progreso
        loading: "bg-gray-400 text-white shadow-sm hover:bg-gray-500", // Carga en progreso
        progress: "bg-purple-600 text-white shadow-sm hover:bg-purple-700", // Progreso de descarga o tarea
        
        // Variantes para acciones de navegación
        navigate: "bg-orange-600 text-white shadow-lg hover:bg-orange-700 hover:shadow-xl", // Navegar a otra página o acción
        action: "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg", // Acción importante o crítica
      }
      ,
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3.5 has-[>svg]:px-2.5 text-sm",
        lg: "h-11 rounded-md px-8 has-[>svg]:px-4 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
