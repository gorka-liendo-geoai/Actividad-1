import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  RocketIcon,
  SunIcon,
  MoonIcon,
  DownloadIcon,
  TrashIcon,
  CopyIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Button Playground</h1>
      <Tabs
        defaultValue="variants"
        className="sm:w-80 md:w-100 lg:w-200 m-auto mb-8"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="variants">Variantes</TabsTrigger>
          <TabsTrigger value="states">Estados</TabsTrigger>
          <TabsTrigger value="with-icons">Con Iconos</TabsTrigger>
        </TabsList>

        {/* Pestaña de Variantes */}
        <TabsContent value="variants">
          <Card>
            <CardHeader>
              <CardTitle>Variantes de Botón</CardTitle>
              <CardDescription>
                Todas las variantes disponibles en shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 p-4">
                <Link to="/">
                  <Button variant="primary">Volver al menú</Button>
                </Link>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="downloadApp">Download App</Button>
                <Button variant="downloadPdf">Download PDF</Button>
                <Button variant="downloadResource">Download Resource</Button>
                <Button variant="subscribe">Subscribe</Button>
                <Button variant="formSubmit">Submit</Button>
                <Button variant="loading">Loading</Button>
                <Button variant="progress">Progress</Button>
                <Button variant="navigate">Navigate</Button>
                <Button variant="action">Action</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pestaña de Estados */}
        <TabsContent value="states">
          <Card>
            <CardHeader>
              <CardTitle>Estados del Botón</CardTitle>
              <CardDescription>Diferentes estados y tamaños</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <h3 className="font-medium mb-2">Tamaños</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon" className="h-10 w-10">
                      <SunIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Estados</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button disabled>Disabled</Button>
                    <Button isLoading>
                      <span className="mr-2">Loading</span>
                    </Button>
                    <Button variant="outline" className="bg-accent">
                      Active
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pestaña con Iconos */}
        <TabsContent value="with-icons">
          <Card>
            <CardHeader>
              <CardTitle>Botones con Iconos</CardTitle>
              <CardDescription>
                Combinaciones con iconos de Radix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <RocketIcon className="mr-2 h-4 w-4" />
                    Launch
                  </Button>
                  <Button variant="outline">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="destructive">
                    <TrashIcon className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="ghost" size="icon">
                    <SunIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoonIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <CheckIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Sección de Personalización */}
      <Card className="sm:w-80 md:w-100 lg:w-200 m-auto mb-8">
        <CardHeader>
          <CardTitle>Personalización Avanzada</CardTitle>
          <CardDescription>
            Combina clases de Tailwind para estilos únicos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
              Gradient
            </Button>
            <Button className="rounded-full px-6">Pill Shape</Button>
            <Button className="animate-pulse">Pulsing</Button>
            <Button className="shadow-lg">Shadow</Button>
            <Button className="border-2 border-black dark:border-white">
              Thick Border
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Dashboard;
