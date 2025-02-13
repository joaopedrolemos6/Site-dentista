import React from 'react';
import { Bluetooth as Tooth, Phone, Mail, Clock } from 'lucide-react';


export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Tooth className="h-6 w-6" />
              <span className="text-xl font-bold">Sorriso Perfeito</span>
            </div>
            <p className="text-gray-400">
              Cuidando do seu sorriso com excelência e dedicação.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(11) 1234-5678</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contato@sorrisoperfeito.com</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <div>
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clínica Odontológica Sorriso Perfeito. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}