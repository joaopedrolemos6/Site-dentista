import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyBHanGgHW2_B5_nTh6Fn7vR8rSd_Oxq9m4', // Replace with your API key
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');

      
      const position = { lat: -7.0975116, lng: -34.8401936 };


      const map = new Map(mapRef.current!, {
        center: position,
        zoom: 15,
      });

      new google.maps.Marker({
        position,
        map,
        title: 'Clínica Odontológica Sorriso Perfeito'
      });
    };

    initMap();
  }, []);

  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossa Localização</h2>
        <div className="max-w-4xl mx-auto">
          <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md" />
          <div className="mt-6 text-center">
            <p className="text-lg">Av. Flavio Ribeiro Coutinho, 675 - Manaíra</p>
            <p className="text-lg">João Pessoa - PB, 58037-000</p>
            <p className="text-lg mt-2">Telefone: (83) 99924-5858</p>
          </div>
        </div>
      </div>
    </section>
  );
}