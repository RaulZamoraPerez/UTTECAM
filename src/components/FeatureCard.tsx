type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc: string;
}


export default function FeatureCardNosotros({ title, description, imageSrc }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-100 h-50 mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-3xl font-bold text-amber-700 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
