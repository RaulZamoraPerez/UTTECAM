type FeatureCardProps = {
  title: string;
  description: string | string[];
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
      {
        typeof description === 'string' ? 
        <p className="text-gray-700 leading-relaxed text-sm">{description}</p> :
        <ul className="list-disc list-inside text-gray-700 leading-relaxed text-sm">
          {description.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mt-1 w-2 h-2 bg-teal-600 rounded-full flex-shrink-0 mr-3"></span>
              <span className="text-gray-700">{item}</span>
              </li>
          ))}
        </ul>
      }
      
    </div>
  );
}
