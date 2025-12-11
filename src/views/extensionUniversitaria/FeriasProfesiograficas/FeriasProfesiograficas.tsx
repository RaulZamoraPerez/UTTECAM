import { useExtensionSection } from '../../../hooks/useExtensionData';
import PlaceholderPage from '../../../components/PlaceholderPage';

export default function FeriasProfesiograficas() {
  const { data, loading, showPlaceholder } = useExtensionSection('ferias-profesiograficas');

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  
  // Always show placeholder when disabled or no data (this section is under construction)
  // The is_enabled check allows admins to control when to show real content in the future
  if (showPlaceholder || !data || data.is_enabled === false) {
    return (
      <PlaceholderPage 
        title="Ferias Profesiográficas"
        gradientFrom="indigo-50"
        gradientVia="purple-50"
        gradientTo="pink-50"
        accentColor="indigo-600"
      />
    );
  }

  // TODO: When section is enabled, implement real content here
  // For now, still show placeholder since content is not yet built
  return (
    <PlaceholderPage 
      title="Ferias Profesiográficas"
      gradientFrom="indigo-50"
      gradientVia="purple-50"
      gradientTo="pink-50"
      accentColor="indigo-600"
    />
  );
}
