import { useEffect, useState } from 'react';
import { getBecasSections, type BecaSection } from '@/services/becasApi';
import HeaderSection from '@/components/becas/sections/HeaderSection';
import BannerSection from '@/components/becas/sections/BannerSection';
import AvisosSection from '@/components/becas/sections/AvisosSection';
import { ConvocatoriaSection } from '../../components/becas/sections/ConvocatoriaSection';
import { FooterSection } from '../../components/becas/sections/FooterSection';
import RepositorySection from '@/components/becas/sections/RepositorySection';
import { Loader2 } from 'lucide-react';

const Becas = () => {
  const [sections, setSections] = useState<BecaSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const data = await getBecasSections();
        // Sort by order
        const sortedData = data.sort((a, b) => a.order - b.order);
        setSections(sortedData);
      } catch (err) {
        console.error('Error fetching sections:', err);
        setError('No se pudieron cargar las secciones de becas.');
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-amber-600" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ocurrió un error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="light py-8 px-4 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {sections.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No hay secciones activas para mostrar.</p>
          </div>
        ) : (
          sections.map((section) => {
            switch (section.type) {
              case 'header':
                return (
                  <HeaderSection
                    key={section.id}
                    id={section.id}
                    title={section.data.title || section.title}
                    description={section.data.description || ''}
                    variant={section.data.variant || 'default'}
                  />
                );
              case 'banner':
                return (
                  <BannerSection
                    key={section.id}
                    id={section.id}
                    title={section.data.title || section.title}
                    subtitle={section.data.subtitle || ''}
                    description={section.data.description || ''}
                    imageUrl={section.data.imageUrl || ''}
                    buttons={section.data.buttons || []}
                    footerNote={section.data.footerNote || ''}
                  />
                );
              case 'avisos':
                return (
                  <AvisosSection
                    key={section.id}
                    id={section.id}
                    cards={section.data.cards || []}
                  />
                );
              case 'convocatoria':
                return (
                  <ConvocatoriaSection
                    key={section.id}
                    id={section.id}
                    badge={section.data.badge || ''}
                    title={section.data.title || section.title}
                    description={section.data.description || ''}
                    documents={section.data.documents || []}
                    imageUrl={section.data.imageUrl || ''}
                    imageCaption={section.data.imageCaption || ''}
                  />
                );
              case 'footer':
                return (
                  <FooterSection
                    key={section.id}
                    id={section.id}
                    data={section.data}
                  />
                );
              case 'repository':
                return (
                  <RepositorySection
                    key={section.id}
                    id={section.id}
                    title={section.data.title || section.title}
                    data={section.data}
                  />
                );
              default:
                // Fallback for unknown types or types not yet ported
                return (
                  <div key={section.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-400 mb-2 uppercase tracking-wider">
                      Sección: {section.type}
                    </h3>
                    <p className="text-gray-500">
                      {section.title}
                    </p>
                  </div>
                );
            }
          })
        )}
      </div>
    </section>
  );
};

export default Becas;