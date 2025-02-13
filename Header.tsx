import React from 'react';
import { Bluetooth as Tooth } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
  showAdminLink?: boolean;
}

export function Header({ onAdminClick, showAdminLink }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tooth className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Clínica Odontológica Sorriso Perfeito</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#inicio" className="text-gray-600 hover:text-blue-600">Início</a></li>
              <li><a href="#servicos" className="text-gray-600 hover:text-blue-600">Serviços</a></li>
              <li><a href="#agendamento" className="text-gray-600 hover:text-blue-600">Agendamento</a></li>
              <li><a href="#localizacao" className="text-gray-600 hover:text-blue-600">Localização</a></li>
              {showAdminLink && (
                <li>
                  <button
                    onClick={onAdminClick}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {location.hash === '#admin' ? 'Voltar ao Site' : 'Área Administrativa'}
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}