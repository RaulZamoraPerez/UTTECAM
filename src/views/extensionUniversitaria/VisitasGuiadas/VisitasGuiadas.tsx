import { useExtensionSection } from '../../../hooks/useExtensionData';
import PlaceholderPage from '../../../components/PlaceholderPage';

export default function VisitasGuiadas() {
  const { data, loading, showPlaceholder } = useExtensionSection('visitas-guiadas');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  
  // Always show placeholder when disabled or no data (this section is under construction)
  // The is_enabled check allows admins to control when to show real content in the future
  if (showPlaceholder || !data || data.is_enabled === false) {
    return (
      <PlaceholderPage 
        title="Visitas Guiadas"
        gradientFrom="teal-50"
        gradientVia="cyan-50"
        gradientTo="blue-50"
        accentColor="teal-600"
      />
    );
  }

  // TODO: When section is enabled, implement real content here
  // For now, still show placeholder since content is not yet built
  return (
    <PlaceholderPage 
      title="Visitas Guiadas"
      gradientFrom="teal-50"
      gradientVia="cyan-50"
      gradientTo="blue-50"
      accentColor="teal-600"
    />
  );
}
